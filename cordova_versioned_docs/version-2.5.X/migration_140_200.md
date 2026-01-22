# Migrate from 1.4.X to 2.0.X
## 1. Introduction

<div class="warning">
<span class="warning">:warning:</span>
The following document contains different issues that can appear during the migration from SDK Mobile ***1.4.X version*** to the SDK Mobile ***2.0.X version***. Depending on the developer application and its configuration. 
</div>

## 2. Possible issues

### 2.1 Upgrading compileSDKVersion
#### Error

Due to an older *compileSDKVersion* configuration, with this new version can appear this error: 

``` 
Execution failed for task ':app:checkDebugAarMetadata'.
 
 A failure occurred while executing com.android.build.gradle.internal.tasks.CheckAarMetadataWorkAction
   One or more issues found when checking AAR metadata values:
 
 Dependency 'androidx.navigation:navigation-common:2.7.7' requires 'compileSdkVersion' to be set to 34 or higher.
  
 Compilation target for module ':app' is 'android-33'

Dependency 'androidx.navigation:navigation-runtime:2.7.7' requires 'compileSdkVersion' to be set to 34 or higher.
  
Compilation target for module ':app' is 'android-33'
  
Dependency 'androidx.navigation:navigation-common-ktx:2.7.7' requires 'compileSdkVersion' to be set to 34 or higher.
  
Compilation target for module ':app' is 'android-33'
```


#### Solution

Change in your application the minimum SDK version to 24:

```
defaultConfig {
        // You can update the following values to match your application needs.
        // For more information, see: https://docs.flutter.dev/deployment/android#reviewing-the-build-configuration. 
        minSdkVersion 24
        targetSdkVersion flutter.targetSdkVersion // targetSdkVersion 34
        versionCode flutterVersionCode.toInteger()
        versionName flutterVersionName
    }
```





### 2.2 Upgrading Gradle Build Tools
#### Error

```
  Caused by: org.gradle.api.internal.artifacts.transform.TransformException: Execution failed for DexingNoClasspathTransform: /Users/username/.gradle/caches/transforms-3/e7c35f0a55ff407d71f0751a9bab00dd/transformed/jetified-lottie-compose-6.4.0-runtime.jar.
    at org.gradle.api.internal.artifacts.transform.DefaultTransformerInvocationFactory$1.lambda$mapResult$3(
    ... 2 more
  Caused by: com.android.builder.dexing.DexArchiveBuilderException: Error while dexing.
```

  or

```
  AGPBI: {"kind":"error","text":"com.android.tools.r8.internal.YI0: Sealed classes are not supported as program classes","sources":[{"file":"/Users/username/.gradle/caches/transforms-3/e7c35f0a55ff407d71f0751a9bab00dd/transformed/jetified-lottie-compose-6.4.0-runtime.jar"}],"tool":"D8"}
```

#### Solution

In android/build.gradle file, change de gradle.build.tools to 7.4.0 or more:

```
 buildscript {
      ext.kotlin_version = '1.8.10'
      repositories {
          google()
          mavenCentral()
      }

      dependencies {
          classpath 'com.android.tools.build:gradle:7.4.0' // 7.4.0
          classpath 'org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version'
      }
  }
```


In gradle-wrapper.properties file:

```
  distributionBase=GRADLE_USER_HOME
  distributionPath=wrapper/dists
  zipStoreBase=GRADLE_USER_HOME
  zipStorePath=wrapper/dists
  distributionUrl=https\://services.gradle.org/distributions/gradle-7.5-all.zip // 7.5-all.zip
```

### 2.3 Changing result diagnostics
#### Solution

This parameter errorDiagnostic:

```
final SdkErrorType errorDiagnostic; 
```
Now it’s an String in the 2.0.0 version:

```
final String errorDiagnostic;
```

### 2.4 Compose + Kotlin version
#### Error

```
java.lang.NoClassDefFoundError: Failed resolution of: Landroidx/compose/ui/platform/ComposeView;
```

#### Solution
In the build.gradle(android) add:

```
    dependencies {
      classpath "com.android.tools.build:gradle:7.4.2"
      classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:1.8.0" // ADD THIS LINE
    }
```

And in the build.gradle(app) add:

```
apply plugin: 'com.android.application'
apply plugin: 'kotlin-android' // ADD THIS LINE
```

### 2.5 android:usesCleartextTraffic
#### Error

```
AndroidManifest.xml:6:9-44 Error:
  Attribute application@usesCleartextTraffic value=(true) from AndroidManifest.xml:6:9-44
  is also present at [com.facephi.androidsdk:selphi_component:2.0.1] AndroidManifest.xml:8:18-54 value=(false).
  Suggestion: add 'tools:replace="android:usesCleartextTraffic"' to <application> element at AndroidManifest.xml:5:5-8:50 to override.
```

#### Solution

In the AndroidManifest.xml, add:

```
  <?xml version='1.0' encoding='utf-8'?>
  <manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools" --> ADD THIS
    >

    <application
      android:allowBackup="true"
      android:icon="@mipmap/ic_launcher"
      android:label="@string/app_name"
      android:roundIcon="@mipmap/ic_launcher_round"
      android:supportsRtl="true"
      android:theme="@style/AppTheme"
      android:usesCleartextTraffic="true" --> ADD THIS
      tools:replace="android:usesCleartextTraffic"> --> ADD THIS
  ```

### 2.6 DuplicateRelativeFileException(SELPHI + VOICE // NFC)

#### Error:
```
Caused by: com.android.builder.merge.DuplicateRelativeFileException: 2 files found with path 'META-INF/versions/9/OSGI-INF/MANIFEST.MF'.
Adding a packaging block may help, please refer to
```

#### Solution:
```
packagingOptions {
    pickFirst("**/*.so") // SELPHI + VOICE
    pickFirst("META-INF/versions/9/OSGI-INF/MANIFEST.MF") // NFC
}
```

### 2.7 Upgrading Gradle Build Tools 2
#### Error:
```
java.lang.NullPointerException: Cannot invoke "String.length()" because "<parameter1>" is null

OR

AGPBI: {"kind":"error","text":"java.lang.NullPointerException","sources":[{"file":"/Users/lariel/.gradle/caches/transforms-3/96df14071dd10ba319cee1b058e64410/transformed/lifecycle-livedata-core-2.8.3-runtime.jar"}],"tool":"D8"}

OR

Class 'com.facephi.core.data.SdkImage' was compiled with an incompatible version of Kotlin. The binary version of its metadata is 2.0.0, expected version is 1.8.0.
The class is loaded from /Users/lariel/.gradle/caches/transforms-3/d1de7231ad1ef5869b273e5abac6ceb3/transformed/jetified-core-2.0.2-api.jar!/com/facephi/core/data/SdkImage.class
```
#### Solution

```
  "AGP_VERSION": ">= 8.1.4"
  "KOTLIN_VERSION": ">= 1.9.0"
```

### 2.10 Plugin cordova-plugin-camera

#### Error:
```
supertypes of the following classes cannot be resolved. please make sure you have the required dependencies in the classpath androix.activity.ComponentActivity, unresolved supertypes: androidx.core.app.OnUserLeaveHintProvider adding -Xextended:
```

#### Solution:
```
El plugin cordova-plugin-camera al momento de instalar genera el error relacionado con androidx.core:core:1.6.+ (adjunto el log) y esto se soluciona agregando las siguientes líneas de código dentro de build.gradle(app):
configurations.all {
    resolutionStrategy {
        force 'androidx.core:core:1.9.0'
        force 'androidx.core:core-ktx:1.9.0'
    }
}
```