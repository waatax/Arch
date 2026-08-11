# Runs the same unsigned verification gates as CI. If all four ARCH signing
# variables are present, Gradle also signs the release packages.
[CmdletBinding()]
param()

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
$physicalAndroidDir = Join-Path $repoRoot "android"
$buildRepoRoot = $repoRoot
$mappedDrive = $null
$locationPushed = $false
$originalJavaHome = $env:JAVA_HOME
$originalAndroidHome = $env:ANDROID_HOME
$originalGradleUserHome = $env:GRADLE_USER_HOME

$signingVariables = @(
    "ARCH_KEYSTORE_FILE",
    "ARCH_KEYSTORE_PASSWORD",
    "ARCH_KEY_ALIAS",
    "ARCH_KEY_PASSWORD"
)
$presentSigningVariables = @($signingVariables | Where-Object {
    -not [string]::IsNullOrWhiteSpace([Environment]::GetEnvironmentVariable($_))
})
if ($presentSigningVariables.Count -ne 0 -and $presentSigningVariables.Count -ne $signingVariables.Count) {
    throw "Release signing variables must be either all present or all absent."
}
$hasReleaseSigning = $presentSigningVariables.Count -eq $signingVariables.Count

try {
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

    # OneDrive can lock intermediates, so remove only the exact output files
    # whose presence is later used to establish artifact provenance.
    $staleArtifacts = @(
        (Join-Path $physicalAndroidDir "app\build\outputs\apk\debug\app-debug.apk"),
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

    Write-Host "Running Android lint, unit tests, APK, and AAB builds..." -ForegroundColor Cyan
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

    & $wrapper lintRelease testReleaseUnitTest assembleDebug assembleRelease bundleRelease --stacktrace --no-daemon
    if ($LASTEXITCODE -ne 0) {
        throw "Android verification failed with exit code $LASTEXITCODE."
    }

    Pop-Location
    $locationPushed = $false

    $debugApk = Join-Path $physicalAndroidDir "app\build\outputs\apk\debug\app-debug.apk"
    $signedApk = Join-Path $physicalAndroidDir "app\build\outputs\apk\release\app-release.apk"
    $unsignedApk = Join-Path $physicalAndroidDir "app\build\outputs\apk\release\app-release-unsigned.apk"
    $releaseAab = Join-Path $physicalAndroidDir "app\build\outputs\bundle\release\app-release.aab"

    foreach ($artifact in @($debugApk, $releaseAab)) {
        if (-not (Test-Path -LiteralPath $artifact -PathType Leaf)) {
            throw "Expected Android artifact was not generated: $artifact"
        }
    }
    if ($hasReleaseSigning) {
        if (-not (Test-Path -LiteralPath $signedApk -PathType Leaf)) {
            throw "Signed APK was not generated even though all signing variables were supplied."
        }
        foreach ($oppositeArtifact in @(
            (Join-Path $repoRoot "arch-app-release-unsigned.apk"),
            (Join-Path $repoRoot "arch-app-release-unsigned.aab")
        )) {
            if (Test-Path -LiteralPath $oppositeArtifact -PathType Leaf) {
                Remove-Item -LiteralPath $oppositeArtifact -Force
            }
        }
        Copy-Item -LiteralPath $signedApk -Destination (Join-Path $repoRoot "arch-app-release.apk") -Force
        Copy-Item -LiteralPath $releaseAab -Destination (Join-Path $repoRoot "arch-app-release.aab") -Force
    } else {
        if (-not (Test-Path -LiteralPath $unsignedApk -PathType Leaf)) {
            throw "Unsigned APK was not generated for the no-secrets verification build."
        }
        if (Test-Path -LiteralPath $signedApk -PathType Leaf) {
            throw "Unexpected signed APK exists after a no-secrets build; refusing to publish ambiguous artifacts."
        }
        foreach ($oppositeArtifact in @(
            (Join-Path $repoRoot "arch-app-release.apk"),
            (Join-Path $repoRoot "arch-app-release.aab")
        )) {
            if (Test-Path -LiteralPath $oppositeArtifact -PathType Leaf) {
                Remove-Item -LiteralPath $oppositeArtifact -Force
            }
        }
        Copy-Item -LiteralPath $unsignedApk -Destination (Join-Path $repoRoot "arch-app-release-unsigned.apk") -Force
        Copy-Item -LiteralPath $releaseAab -Destination (Join-Path $repoRoot "arch-app-release-unsigned.aab") -Force
    }
    Copy-Item -LiteralPath $debugApk -Destination (Join-Path $repoRoot "arch-app-debug.apk") -Force

    Write-Host "Android verification complete. Packages are ignored by Git." -ForegroundColor Green
} finally {
    if ($locationPushed) {
        Pop-Location
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
