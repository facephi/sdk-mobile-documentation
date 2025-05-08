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
        buildToolsVersion = "35.0.0"
        minSdkVersion = 24
        compileSdkVersion = 35
        targetSdkVersion = 35
        ndkVersion = "27.1.12297006"
        kotlinVersion = "2.0.21" // THIS
    }
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath("com.android.tools.build:gradle")
        classpath("com.facebook.react:react-native-gradle-plugin")
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin")
    }
}

apply plugin: "com.facebook.react.rootproject"
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

Change in your build.gradle(android) the compileSdkVersion:

```
buildscript {
    ext {
        buildToolsVersion = "35.0.0"
        minSdkVersion = 24
        compileSdkVersion = 35 // THIS
        targetSdkVersion = 34
        ndkVersion = "27.1.12297006"
        kotlinVersion = "2.0.21"
    }
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath("com.android.tools.build:gradle")
        classpath("com.facebook.react:react-native-gradle-plugin")
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin")
    }
}

apply plugin: "com.facebook.react.rootproject"
```