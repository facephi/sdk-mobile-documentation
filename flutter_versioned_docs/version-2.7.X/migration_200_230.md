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

Change in your settings.gradle the kotlinVersion:

```
plugins {
    id "dev.flutter.flutter-plugin-loader" version "1.0.0"
    id "com.android.application" version "8.6.0" apply false
    id "org.jetbrains.kotlin.android" version "2.1.0" apply false // THIS
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

Change in your variables.gradle the compileSdk:

```
android {
    namespace = "com.example.example"
    compileSdk = 35 // THIS
    ndkVersion = flutter.ndkVersion
```