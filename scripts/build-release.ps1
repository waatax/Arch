# Builds the signed Play release. Secret values are read only from environment
# variables and are never written to Gradle files or command-line arguments.
[CmdletBinding()]
param()

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
$physicalAndroidDir = Join-Path $repoRoot "android"
$buildRepoRoot = $repoRoot
$mappedDrive = $null
$locationPushed = $false
$originalKeystoreFile = $env:ARCH_KEYSTORE_FILE
$originalJavaHome = $env:JAVA_HOME
$originalAndroidHome = $env:ANDROID_HOME
$originalGradleUserHome = $env:GRADLE_USER_HOME

$requiredVariables = @(
    "ARCH_KEYSTORE_FILE",
    "ARCH_KEYSTORE_PASSWORD",
    "ARCH_KEY_ALIAS",
    "ARCH_KEY_PASSWORD"
)
$missingVariables = @($requiredVariables | Where-Object {
    [string]::IsNullOrWhiteSpace([Environment]::GetEnvironmentVariable($_))
})
if ($missingVariables.Count -gt 0) {
    throw "Signed release requires these environment variables: $($missingVariables -join ', '). See android/README.md."
}

try {
    $keystorePath = [Environment]::GetEnvironmentVariable("ARCH_KEYSTORE_FILE")
    if (-not [IO.Path]::IsPathRooted($keystorePath)) {
        $keystorePath = Join-Path $physicalAndroidDir $keystorePath
    }
    $resolvedKeystore = Resolve-Path -LiteralPath $keystorePath -ErrorAction Stop
    $env:ARCH_KEYSTORE_FILE = $resolvedKeystore.Path

    if ($repoRoot -match '[^\x00-\x7F]') {
        foreach ($letter in @("R", "Q", "P", "O", "N")) {
            if (-not (Test-Path -LiteralPath "${letter}:\")) {
                & subst.exe "${letter}:" $repoRoot
                if ($LASTEXITCODE -eq 0) {
                    $mappedDrive = "${letter}:"
                    $buildRepoRoot = "${letter}:\"
                    break
                }
            }
        }
        if (-not $mappedDrive) {
            throw "Unable to create a temporary ASCII drive mapping for the workspace."
        }

        $repoPrefix = $repoRoot.TrimEnd('\') + '\'
        if ($resolvedKeystore.Path.StartsWith($repoPrefix, [StringComparison]::OrdinalIgnoreCase)) {
            $relativeKeystore = $resolvedKeystore.Path.Substring($repoPrefix.Length)
            $env:ARCH_KEYSTORE_FILE = Join-Path $buildRepoRoot $relativeKeystore
        }
    }

    $androidDir = Join-Path $buildRepoRoot "android"
    $wrapper = Join-Path $androidDir "gradlew.bat"
    $wrapperJar = Join-Path $androidDir "gradle\wrapper\gradle-wrapper.jar"
    $portableJdk = Join-Path $buildRepoRoot "scratch\build-tools\jdk-17"
    $portableSdk = Join-Path $buildRepoRoot "scratch\build-tools\android-sdk"
    $portableGradleHome = Join-Path $buildRepoRoot "scratch\gradle-user-home-8.13"

    if (-not (Test-Path -LiteralPath $wrapper -PathType Leaf)) {
        throw "Gradle wrapper launcher is missing: $wrapper"
    }
    if (-not (Test-Path -LiteralPath $wrapperJar -PathType Leaf)) {
        throw "Gradle wrapper JAR is missing. From android/, run: gradle wrapper --gradle-version 8.13 --distribution-type bin"
    }
    if (-not $env:JAVA_HOME -and (Test-Path -LiteralPath $portableJdk -PathType Container)) {
        $env:JAVA_HOME = $portableJdk
    }
    if (-not $env:ANDROID_HOME -and (Test-Path -LiteralPath $portableSdk -PathType Container)) {
        $env:ANDROID_HOME = $portableSdk
    }
    if (-not $env:GRADLE_USER_HOME -and (Test-Path -LiteralPath $portableGradleHome -PathType Container)) {
        $env:GRADLE_USER_HOME = $portableGradleHome
    }

    $staleArtifacts = @(
        (Join-Path $physicalAndroidDir "app\build\outputs\apk\release\app-release.apk"),
        (Join-Path $physicalAndroidDir "app\build\outputs\apk\release\app-release-unsigned.apk"),
        (Join-Path $physicalAndroidDir "app\build\outputs\bundle\release\app-release.aab"),
        (Join-Path $physicalAndroidDir "app\build\outputs\mapping\release\mapping.txt")
    )
    foreach ($artifact in $staleArtifacts) {
        if (Test-Path -LiteralPath $artifact -PathType Leaf) {
            Remove-Item -LiteralPath $artifact -Force
        }
    }

    Write-Host "Building signed, optimized APK and Play AAB..." -ForegroundColor Cyan
    Push-Location $androidDir
    $locationPushed = $true

    if ($repoRoot -match '[\\/]OneDrive[\\/]') {
        Write-Warning "Skipping local clean in OneDrive; CI performs the authoritative clean build."
    } else {
        & $wrapper clean --console=plain --no-daemon
        if ($LASTEXITCODE -ne 0) {
            throw "Gradle clean failed with exit code $LASTEXITCODE."
        }
    }

    & $wrapper lintRelease testReleaseUnitTest assembleRelease bundleRelease --stacktrace --no-daemon
    if ($LASTEXITCODE -ne 0) {
        throw "Signed Android release failed with exit code $LASTEXITCODE."
    }

    Pop-Location
    $locationPushed = $false

    $releaseApk = Join-Path $physicalAndroidDir "app\build\outputs\apk\release\app-release.apk"
    $releaseAab = Join-Path $physicalAndroidDir "app\build\outputs\bundle\release\app-release.aab"
    $mapping = Join-Path $physicalAndroidDir "app\build\outputs\mapping\release\mapping.txt"
    foreach ($artifact in @($releaseApk, $releaseAab, $mapping)) {
        if (-not (Test-Path -LiteralPath $artifact -PathType Leaf)) {
            throw "Expected release artifact was not generated: $artifact"
        }
    }

    Copy-Item -LiteralPath $releaseApk -Destination (Join-Path $repoRoot "arch.learn.tw.apk") -Force
    Copy-Item -LiteralPath $releaseAab -Destination (Join-Path $repoRoot "arch.learn.tw.aab") -Force
    Copy-Item -LiteralPath $mapping -Destination (Join-Path $repoRoot "arch.learn.tw-mapping.txt") -Force

    Get-Item -LiteralPath @(
        (Join-Path $repoRoot "arch.learn.tw.apk"),
        (Join-Path $repoRoot "arch.learn.tw.aab"),
        (Join-Path $repoRoot "arch.learn.tw-mapping.txt")
    ) | Select-Object Name, Length, LastWriteTime
} finally {
    if ($locationPushed) {
        Pop-Location
    }
    if ($null -eq $originalKeystoreFile) {
        Remove-Item Env:ARCH_KEYSTORE_FILE -ErrorAction SilentlyContinue
    } else {
        $env:ARCH_KEYSTORE_FILE = $originalKeystoreFile
    }
    if ($null -eq $originalJavaHome) {
        Remove-Item Env:JAVA_HOME -ErrorAction SilentlyContinue
    } else {
        $env:JAVA_HOME = $originalJavaHome
    }
    if ($null -eq $originalAndroidHome) {
        Remove-Item Env:ANDROID_HOME -ErrorAction SilentlyContinue
    } else {
        $env:ANDROID_HOME = $originalAndroidHome
    }
    if ($null -eq $originalGradleUserHome) {
        Remove-Item Env:GRADLE_USER_HOME -ErrorAction SilentlyContinue
    } else {
        $env:GRADLE_USER_HOME = $originalGradleUserHome
    }
    if ($mappedDrive) {
        & subst.exe $mappedDrive /D
        if ($LASTEXITCODE -ne 0) {
            Write-Warning "Failed to remove temporary drive mapping $mappedDrive."
        }
    }
}
