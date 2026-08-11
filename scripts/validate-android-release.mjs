import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const failures = [];

function absolute(relativePath) {
  return path.join(root, relativePath);
}

function read(relativePath) {
  const file = absolute(relativePath);
  if (!fs.existsSync(file)) {
    failures.push(`Missing required file: ${relativePath}`);
    return '';
  }
  return fs.readFileSync(file, 'utf8');
}

function requireMatch(source, pattern, message) {
  if (!pattern.test(source)) failures.push(message);
}

function forbidMatch(source, pattern, message) {
  if (pattern.test(source)) failures.push(message);
}

function requireFileSha256(relativePath, expected) {
  const file = absolute(relativePath);
  if (!fs.existsSync(file)) {
    failures.push(`Missing required file: ${relativePath}`);
    return;
  }
  const actual = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  if (actual !== expected.toLowerCase()) {
    failures.push(`${relativePath} SHA-256 mismatch: expected ${expected}, received ${actual}.`);
  }
}

const appGradle = read('android/app/build.gradle');
const rootGradle = read('android/build.gradle');
const wrapperProperties = read('android/gradle/wrapper/gradle-wrapper.properties');
const mainActivity = read('android/app/src/main/java/arch/learn/tw/MainActivity.java');
const activityLayout = read('android/app/src/main/res/layout/activity_main.xml');
const manifest = read('android/app/src/main/AndroidManifest.xml');
const networkSecurity = read('android/app/src/main/res/xml/network_security_config.xml');
const gitignore = read('.gitignore');
const trustedUrlTest = read('android/app/src/test/java/arch/learn/tw/TrustedUrlPolicyTest.java');
const workflow = read('.github/workflows/android-apk.yml');
const buildApkScript = read('scripts/build-apk.ps1');
const buildReleaseScript = read('scripts/build-release.ps1');

requireMatch(rootGradle, /id\s+['"]com\.android\.application['"]\s+version\s+['"]8\.13\.2['"]/, 'AGP must be pinned to 8.13.2.');
requireMatch(wrapperProperties, /distributionUrl=https\\:\/\/services\.gradle\.org\/distributions\/gradle-8\.13-bin\.zip/, 'Gradle distribution must be pinned to 8.13.');
requireMatch(wrapperProperties, /distributionSha256Sum=20f1b1176237254a6fc204d8434196fa11a4cfb387567519c61556e8710aed78/, 'Gradle 8.13 distribution SHA-256 must be pinned.');
requireFileSha256('android/gradle/wrapper/gradle-wrapper.jar', '81a82aaea5abcc8ff68b3dfcb58b3c3c429378efd98e7433460610fecd7ae45f');

requireMatch(appGradle, /compileSdk\s*=\s*36/, 'compileSdk must be API 36.');
requireMatch(appGradle, /targetSdk\s*=\s*36/, 'targetSdk must be API 36.');
requireMatch(appGradle, /setting\(['"]ARCH_VERSION_CODE['"],\s*['"]3['"]\)/, 'Default versionCode must be 3 and environment-overridable.');
requireMatch(appGradle, /setting\(['"]ARCH_VERSION_NAME['"],\s*['"]1\.1\.0['"]\)/, 'Default versionName must be 1.1.0 and environment-overridable.');
requireMatch(appGradle, /minifyEnabled\s*=\s*true/, 'Release R8 minification must be enabled.');
requireMatch(appGradle, /shrinkResources\s*=\s*true/, 'Release resource shrinking must be enabled.');
const secretSettingBlock = appGradle.match(/def\s+secretSetting\s*=\s*\{[\s\S]*?\n\}/)?.[0] ?? '';
requireMatch(secretSettingBlock, /value\s*==\s*null\s*\|\|\s*value\.isEmpty\(\)\s*\?\s*null\s*:\s*value/, 'Signing passwords must use a non-normalizing secret reader.');
forbidMatch(secretSettingBlock, /\.trim\s*\(/, 'Signing passwords must never be trimmed.');
requireMatch(appGradle, /releaseStorePassword\s*=\s*secretSetting\(['"]ARCH_KEYSTORE_PASSWORD['"]\)/, 'Keystore password must preserve the exact secret value.');
requireMatch(appGradle, /releaseKeyPassword\s*=\s*secretSetting\(['"]ARCH_KEY_PASSWORD['"]\)/, 'Key password must preserve the exact secret value.');
forbidMatch(appGradle, /storePassword\s*=\s*['"][^'"$]/, 'Do not hard-code a keystore password in build.gradle.');
forbidMatch(appGradle, /keyPassword\s*=\s*['"][^'"$]/, 'Do not hard-code a key password in build.gradle.');
forbidMatch(appGradle, /com\.google\.android\.material|androidx\.browser:browser|androidx\.core:core-ktx/, 'Unused Material, Browser, and core-ktx dependencies must remain removed.');

requireMatch(mainActivity, /onRenderProcessGone\s*\(/, 'MainActivity must recover from WebView renderer termination.');
requireMatch(mainActivity, /RenderProcessGoneDetail/, 'Renderer recovery must inspect RenderProcessGoneDetail.');
requireMatch(mainActivity, /isLowRamDevice\s*\(/, 'MainActivity must detect low-RAM devices.');
requireMatch(mainActivity, /onTrimMemory\s*\(/, 'MainActivity must respond to memory pressure.');
requireMatch(mainActivity, /onPause\s*\(/, 'MainActivity must pause WebView work.');
requireMatch(mainActivity, /onResume\s*\(/, 'MainActivity must resume WebView work.');
requireMatch(mainActivity, /MIXED_CONTENT_NEVER_ALLOW/, 'WebView must block mixed content.');
forbidMatch(mainActivity, /setAllowFileAccess\s*\(\s*true\s*\)/, 'WebView file access must remain disabled.');
forbidMatch(mainActivity, /host\.contains\s*\(/, 'Trusted host checks must not use substring matching.');
forbidMatch(activityLayout, /<\s*WebView\b/, 'WebView must be allocated lazily at runtime for low-RAM devices.');

requireMatch(manifest, /android:allowBackup="false"/, 'Wrapper app backup must remain disabled.');
requireMatch(networkSecurity, /cleartextTrafficPermitted="false"/, 'Cleartext HTTP must remain disabled.');
for (const pattern of [/\*\.jks/, /\*\.keystore/, /\*\.p12/, /\*\.pfx/, /key\.properties/, /\*\.apk/, /\*\.aab/]) {
  requireMatch(gitignore, pattern, `Missing Android secret/artifact ignore pattern: ${pattern}.`);
}
requireMatch(trustedUrlTest, /evil|attacker|phishing/i, 'Trusted URL tests must include a hostile-host case.');

for (const task of ['lintRelease', 'testReleaseUnitTest', 'assembleDebug', 'assembleRelease', 'bundleRelease']) {
  requireMatch(workflow, new RegExp(task), `Android workflow must run ${task}.`);
}
requireMatch(workflow, /secret_count/, 'Workflow must distinguish zero, partial, and complete signing-secret states.');
requireMatch(workflow, /workflow_dispatch[\s\S]*Manual release requested without Android signing secrets/, 'Manual releases must fail when signing secrets are absent.');
requireMatch(workflow, /ARCH_ANDROID_UPLOAD_CERT_SHA256/, 'Workflow must require the Play upload certificate SHA-256 variable.');
requireMatch(workflow, /keytool[\s\S]*SHA256:/, 'Workflow must extract and compare the upload certificate fingerprint.');
requireMatch(workflow, /apksigner[\s\S]*verify\s+--verbose\s+--print-certs[\s\S]*Signer #1 certificate SHA-256 digest:[\s\S]*actual[\s\S]*expected/, 'Workflow must verify the APK signature and exact Play-approved certificate fingerprint.');
requireMatch(workflow, /jarsigner[\s\S]*-verify[\s\S]*-strict[\s\S]*app-release\.aab/, 'Workflow must strictly verify the signed AAB with JDK jarsigner.');
requireMatch(workflow, /GITHUB_STEP_SUMMARY/, 'Workflow must summarize signed, skipped, and failed release outcomes.');
requireMatch(workflow, /release-manifest\.json/, 'Signed artifacts must include a generated release manifest.');
requireMatch(workflow, /apk_metadata[\s\S]*output-metadata\.json[\s\S]*release\["versionCode"\][\s\S]*release\["versionName"\]/, 'Release manifest versions must come from the built APK metadata.');
requireMatch(workflow, /rm -f "\$RUNNER_TEMP\/arch-upload-key\.jks"/, 'Decoded CI keystore must be removed in an always cleanup step.');
forbidMatch(workflow, /outputs\/bundle\/release\/output-metadata\.json/, 'Workflow must not reference nonexistent bundle output metadata.');

requireMatch(buildApkScript, /\$staleArtifacts[\s\S]*Remove-Item -LiteralPath/, 'build-apk.ps1 must remove exact stale artifacts before building.');
forbidMatch(buildApkScript.match(/\$staleArtifacts\s*=\s*@\([\s\S]*?\n\s*\)/)?.[0] ?? '', /arch-app-|arch\.learn\.tw/, 'build-apk.ps1 must preserve last-known-good root packages until a new build is verified.');
requireMatch(buildApkScript, /\$hasReleaseSigning/, 'build-apk.ps1 must derive artifact signing state from complete secrets.');
requireMatch(buildApkScript, /Unexpected signed APK exists/, 'No-secrets builds must reject ambiguous signed artifacts.');
requireMatch(buildApkScript, /if \(\$hasReleaseSigning\)[\s\S]*else[\s\S]*Copy-Item -LiteralPath \$debugApk/, 'build-apk.ps1 must not overwrite root artifacts until release provenance is verified.');
requireMatch(buildApkScript, /finally\s*\{[\s\S]*subst\.exe \$mappedDrive \/D/, 'build-apk.ps1 must always remove its subst mapping.');
requireMatch(buildApkScript, /\$originalGradleUserHome[\s\S]*finally\s*\{[\s\S]*GRADLE_USER_HOME/, 'build-apk.ps1 must preserve and restore GRADLE_USER_HOME.');
forbidMatch(buildReleaseScript.match(/\$staleArtifacts\s*=\s*@\([\s\S]*?\n\s*\)/)?.[0] ?? '', /arch\.learn\.tw/, 'build-release.ps1 must preserve last-known-good root release artifacts until a new build is verified.');
requireMatch(buildReleaseScript, /\$originalKeystoreFile[\s\S]*finally\s*\{[\s\S]*ARCH_KEYSTORE_FILE/, 'build-release.ps1 must restore ARCH_KEYSTORE_FILE.');
requireMatch(buildReleaseScript, /finally\s*\{[\s\S]*subst\.exe \$mappedDrive \/D/, 'build-release.ps1 must always remove its subst mapping.');
requireMatch(buildReleaseScript, /\$originalGradleUserHome[\s\S]*finally\s*\{[\s\S]*GRADLE_USER_HOME/, 'build-release.ps1 must preserve and restore GRADLE_USER_HOME.');

if (failures.length > 0) {
  console.error(`Android release gate failed with ${failures.length} issue(s):`);
  failures.forEach((failure, index) => console.error(`${index + 1}. ${failure}`));
  process.exit(1);
}

console.log('Android release gate passed: API 36, official wrapper, low-memory recovery, signing integrity, artifact provenance, and CI release controls are valid.');
