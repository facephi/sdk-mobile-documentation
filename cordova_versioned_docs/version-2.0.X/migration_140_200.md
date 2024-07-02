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