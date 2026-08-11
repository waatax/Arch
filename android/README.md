# Arch Android release guide

The Android app targets API 36 and uses Android Gradle Plugin 8.13.2 with
Gradle 8.13 and JDK 17. Release builds enable R8 code optimization and resource
shrinking. The default release identity is `versionCode 3` and
`versionName 1.1.0`.

## Pinned Gradle wrapper

The repository must contain all four wrapper files:

- `gradlew`
- `gradlew.bat`
- `gradle/wrapper/gradle-wrapper.properties`
- `gradle/wrapper/gradle-wrapper.jar`

The wrapper JAR is checked in and its Gradle distribution SHA-256 is pinned.
If a maintainer intentionally upgrades Gradle, regenerate all wrapper files
with a trusted Gradle installation and review the resulting diff:

```powershell
Set-Location android
gradle wrapper --gradle-version 8.13 --distribution-type bin --gradle-distribution-sha256-sum 20f1b1176237254a6fc204d8434196fa11a4cfb387567519c61556e8710aed78
```

Commit the generated wrapper JAR. It contains executable Gradle bootstrap code,
not a signing secret. CI and local release gates fail if the JAR is absent;
neither silently selects a system Gradle version.

## Signing without leaking the upload key

Never commit a `.jks`, `.keystore`, password, `local.properties`, APK, or AAB.
The build reads release signing only from Gradle properties (`-P...`) or the
same-named environment variables:

- `ARCH_KEYSTORE_FILE`: absolute path, or a path relative to `android/`
- `ARCH_KEYSTORE_PASSWORD`
- `ARCH_KEY_ALIAS`
- `ARCH_KEY_PASSWORD`

All four values must be present or all four must be absent. With none present,
`assembleRelease` and `bundleRelease` intentionally produce unsigned packages
so lint, tests, R8, and packaging can still be verified safely.

The current Play upload certificate must be preserved if it has already been
registered. Before the next upload, compare its SHA-256 fingerprint with Play
Console under **Setup > App integrity > Upload key certificate**. Changing a
keystore password does not change the certificate; replacing the key pair does.
Keep an encrypted offline backup and record its recovery owner.

For GitHub Actions, configure these repository or environment secrets:

- `ARCH_ANDROID_KEYSTORE_BASE64`
- `ARCH_ANDROID_KEYSTORE_PASSWORD`
- `ARCH_ANDROID_KEY_ALIAS`
- `ARCH_ANDROID_KEY_PASSWORD`

Also configure repository variable `ARCH_ANDROID_UPLOAD_CERT_SHA256` with the
SHA-256 fingerprint shown by Play Console for the registered upload key. CI
normalizes colons and letter case, then refuses to build when the decoded
keystore certificate differs.

The existing local APK was signed with certificate SHA-256
`8CCB55B7427CE0BFF07947F728FE2E42A0C4881E6007613978243336D3F031F2`.
This is evidence about that local APK, not an unconditional source of truth;
it must still be compared with **Play Console > Setup > App integrity > Upload
key certificate** before setting the repository variable.

Create the Base64 value locally without printing it in logs. On PowerShell:

```powershell
[Convert]::ToBase64String([IO.File]::ReadAllBytes('C:\secure\arch-upload-key.jks')) | Set-Clipboard
```

Optional GitHub repository variables set push-build versions:

- `ARCH_ANDROID_VERSION_CODE`
- `ARCH_ANDROID_VERSION_NAME`
- `ARCH_ANDROID_UPLOAD_CERT_SHA256` (required for signed CI artifacts)

A manual workflow run exposes explicit version inputs. `versionCode` must be
strictly greater than the highest code already uploaded to Play Console.

## Local quality and release commands

Unsigned verification (also signs when all four signing variables exist):

```powershell
.\scripts\build-apk.ps1
```

Signed Play release:

```powershell
$env:ARCH_KEYSTORE_FILE = 'C:\secure\arch-upload-key.jks'
$env:ARCH_KEYSTORE_PASSWORD = '<from password manager>'
$env:ARCH_KEY_ALIAS = '<registered upload alias>'
$env:ARCH_KEY_PASSWORD = '<from password manager>'
$env:ARCH_VERSION_CODE = '3'
$env:ARCH_VERSION_NAME = '1.1.0'
.\scripts\build-release.ps1
```

The signed script emits ignored local copies of the APK, AAB, and R8 mapping.
The AAB is the Play upload artifact. Retain the matching mapping file for crash
deobfuscation and release forensics.

On Windows workspaces whose path contains non-ASCII characters, Gradle test
workers may require an ASCII drive mapping (for example a temporary `subst`
drive). GitHub Actions uses an ASCII Linux path and is the clean-build source
of truth. If OneDrive locks an old `app/build` directory, close any process
viewing its artifacts before running `clean`; do not force-delete an unknown
or broad directory.

## GitHub Actions behavior

Every Android pull request and relevant push runs:

```text
lintRelease
testReleaseUnitTest
assembleDebug
assembleRelease
bundleRelease
```

Pull requests never receive signing secrets. Main-branch and manual runs create
and upload a signed APK/AAB only when all four GitHub secrets are available.
The decoded keystore lives only in the runner temporary directory and is deleted
in an `always()` cleanup step. CI validates the APK with `apksigner`, validates
the AAB with strict JDK `jarsigner` verification against the upload keystore,
and emits a release manifest containing artifact SHA-256 hashes, sizes, version,
target SDK, and expected certificate fingerprint. Release artifacts also include
R8 mapping, APK output metadata, lint results, and unit-test results.

## Play upload checklist

1. Confirm the package remains `arch.learn.tw` and the upload certificate matches
   Play App Signing.
2. Choose a `versionCode` greater than every active, draft, internal, closed,
   open, or production track artifact.
3. Download the signed CI artifact and verify the workflow's lint, tests, R8,
   and APK-signature steps are green.
4. Upload `app-release.aab` to an internal testing track first.
5. Review the generated device catalog, pre-launch report, permissions, Data
   safety form, privacy policy, app access, target audience, and ads declaration.
6. Promote gradually and watch Android vitals by crash cluster and phone model.
   Stop rollout if a new crash/ANR cluster grows.

## Low-RAM acceptance matrix

Run the release build, not debug, on at least API 24, 30, and 36. Include a
1-1.5 GB RAM emulator or representative low-end physical device.

- Cold-launch 10 times; no blank screen, process death, or startup ANR.
- Navigate through at least 30 content-heavy pages and image dialogs.
- Rotate repeatedly, background for five minutes, then resume on the same page.
- Switch Wi-Fi/mobile/VPN off and on; retry must recover without relaunching.
- Trigger `RUNNING_LOW` and `RUNNING_CRITICAL` trim-memory conditions.
- Kill the WebView renderer; the Activity must replace it and reload safely.
- Open and cancel file selection, external links, Back, and deep links.
- Confirm system bars, display cutouts, keyboard, 200% font, dark mode, and RTL.
- Inspect `adb logcat`, Play pre-launch results, startup time, slow rendering,
  user-perceived crash rate, and user-perceived ANR rate.

Do not ship based only on a successful compile. The internal-track low-RAM run
and Play pre-launch report are release gates.
