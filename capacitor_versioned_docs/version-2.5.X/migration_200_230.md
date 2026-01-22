# Migrate from 2.2.X to 2.3.X
## 1. Introduction

<div class="warning">
<span class="warning">:warning:</span>
The following document contains different issues that can appear during the migration from SDK Mobile ***2.2.X version*** to the SDK Mobile ***2.3.X version***. Depending on the developer application and its configuration. 
</div>

## 2. Possible issues

### 2.1 Upgrading Kotlin Version
#### Error

``` 
Class 'com.facephi.core.data.SdkImage' was compiled with an incompatible version of Kotlin. 
The actual metadata version is 2.1.0, but the compiler version 1.9.0 can read versions up to 2.0.0.

The class is loaded from /Users/leandroariel/.gradle/caches/transforms-3/de0e31e8ef67df9325e43fc5c7237703/transformed/core-release-api.jar!/com/facephi/core/data/SdkImage.class
```


#### Solution

Change in your build.gradle(android) the kotlinVersion:

```
buildscript {
    ext {
      kotlinVersion = "2.1.0" // THIS
    }
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:8.6.0' //ADD THIS FOR SDK'S >= 2.3.x
        classpath 'com.google.gms:google-services:4.3.15'
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion" //ADD THIS FOR FACEPHI SDK >= 2.3.x
        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}
```

### 2.2 Upgrading Sdk Version
#### Error

``` 
5 issues were found when checking AAR metadata:

  1.  Dependency 'androidx.activity:activity-ktx:1.10.1' requires libraries and applications that
      depend on it to compile against version 35 or later of the
      Android APIs.

      :app is currently compiled against android-34.

      Also, the maximum recommended compile SDK version for Android Gradle
      plugin 8.3.2 is 34.
```
#### Solution

Change in your variables.gradle the compileSdkVersion:

```
ext {
    minSdkVersion = 24
    compileSdkVersion = 35 // THIS
    targetSdkVersion = 34
    androidxActivityVersion = '1.7.0'
    androidxAppCompatVersion = '1.6.1'
    androidxCoordinatorLayoutVersion = '1.2.0'
    androidxCoreVersion = '1.10.0'
    androidxFragmentVersion = '1.5.6'
    junitVersion = '4.13.2'
    androidxJunitVersion = '1.1.5'
    androidxEspressoCoreVersion = '3.5.1'
    cordovaAndroidVersion = '10.1.1'
    coreSplashScreenVersion = '1.0.0'
    androidxWebkitVersion = '1.6.1'
}
```