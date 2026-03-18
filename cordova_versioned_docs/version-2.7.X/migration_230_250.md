# Migrate from 2.3.X to 2.5.X
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

Change in your cdv-gradle-config.json the kotlinVersion:

```
{
  "MIN_SDK_VERSION": 24,
  "SDK_VERSION": 35,
  "COMPILE_SDK_VERSION": 35,
  "GRADLE_VERSION": "8.13",
  "MIN_BUILD_TOOLS_VERSION": "35.0.0",
  "AGP_VERSION": "8.6.0",
  "KOTLIN_VERSION": "2.1.0", // THIS
  "ANDROIDX_APP_COMPAT_VERSION": "1.7.0",
  "ANDROIDX_WEBKIT_VERSION": "1.12.1",
  "ANDROIDX_CORE_SPLASHSCREEN_VERSION": "1.0.1",
  "GRADLE_PLUGIN_GOOGLE_SERVICES_VERSION": "4.4.2",
  "IS_GRADLE_PLUGIN_GOOGLE_SERVICES_ENABLED": false,
  "IS_GRADLE_PLUGIN_KOTLIN_ENABLED": true,
  "PACKAGE_NAMESPACE": "com.facephi.sdk.demo",
  "JAVA_SOURCE_COMPATIBILITY": 11,
  "JAVA_TARGET_COMPATIBILITY": 11,
  "KOTLIN_JVM_TARGET": null
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

Change in your cdv-gradle-config.json the COMPILE_SDK_VERSION:

```
{
  "MIN_SDK_VERSION": 24,
  "SDK_VERSION": 34,
  "COMPILE_SDK_VERSION": 35, // THIS
  "GRADLE_VERSION": "8.13",
  "MIN_BUILD_TOOLS_VERSION": "35.0.0",
  "AGP_VERSION": "8.6.0",
  "KOTLIN_VERSION": "2.1.0",
  "ANDROIDX_APP_COMPAT_VERSION": "1.7.0",
  "ANDROIDX_WEBKIT_VERSION": "1.12.1",
  "ANDROIDX_CORE_SPLASHSCREEN_VERSION": "1.0.1",
  "GRADLE_PLUGIN_GOOGLE_SERVICES_VERSION": "4.4.2",
  "IS_GRADLE_PLUGIN_GOOGLE_SERVICES_ENABLED": false,
  "IS_GRADLE_PLUGIN_KOTLIN_ENABLED": true,
  "PACKAGE_NAMESPACE": "com.facephi.sdk.demo",
  "JAVA_SOURCE_COMPATIBILITY": 11,
  "JAVA_TARGET_COMPATIBILITY": 11,
  "KOTLIN_JVM_TARGET": null
}
```