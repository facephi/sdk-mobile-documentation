# Phingers Component

## 1. Introduction
The Component discussed in the current document is called ***Phingers Component***. This is responsible for capturing the user's fingerprints and subsequently extracting the subsequent fingerprint templates. Its main functionalities are the following:

- Two modes of operation: extraction of all four fingers of the hand (except the thumb), or extraction of the thumb only.
- Internal camera management.
- Permit management.
- Built-in liveness detection.
- Assistant in the fingerprint capture processes.
- Generation of templates with the characteristics of fingerprints, images and scores.

### 1.1 Minimum requirements

The minimum native version (Android and iOS) of the SDK are as follows:

-   Minimum Android version: 24 - JDK 17
-   Minimum Build Tools version: **8.3.0**
-   Minimum Kotlin Android version **(sdk {'<'}= 2.2.x)**: **1.9.0**
-   Minimum Kotlin Android version **(sdk >= 2.3.x)**: **2.1.0**
-   Minimum iOS version: 13
-   Minimum Cordova Android version: **12.0.0**
-   Minimum Cordova iOS version: **7.0.0** 

Regarding the architecture of the mobile device:

armeabi-v7, x86, arm64 and x64

### 1.2 Plugin version
The current plugin version can be checked as follows:

We look for the ***package.json*** and ***config.xml*** file in the root of the plugin.

The version is indicated in the ***KEY/TAG*** version.

## 2. Component integration 
Before integrating this component **it is recommended** to read the documentation related to **Core Component** and follow the instructions indicated in said document.

<div class="note">
<span class="note">:information_source:</span>
This section will explain step by step how to integrate the current component into an existing project. 
For this section, the following values ​​will be considered:
- **\<%APPLICATION_PATH%\>** - Path to the root of the application (example: /folder/example)
- **\<%PLUGIN_CORE_PATH%\>** - Path to the root of the core plugin, which is required (example: /folder/sdk-core)
- **\<%PLUGIN_PHINGERS_PATH%\>** - Path to the root of the current plugin (example: /folder/sdk-phingers)
</div>

### 2.1. Plugin installation: Common
The plugin allows execution on **Android and iOS** platforms. This section explains common steps. To install the plugin you must follow the following steps:

- Make sure **Cordova** is installed.
- Access **\<%APPLICATION_PATH%\>** in a terminal and execute:

```
[ionic] cordova plugin add @facephi/sdk-core-cordova
[ionic] cordova plugin add @facephi/sdk-phingers-cordova
```

It is important to verify that the path to the plugin is correctly defined in package.json:

```
"dependencies": {
  "@facephi/sdk-core-cordova": <% PLUGIN_CORE_PATH %>,
  "@facephi/sdk-phingers-cordova": <% PLUGIN_PHINGERS_PATH %>
}
```

After executing the above steps, you can launch the application with the sdk/component installed.
From different IDE's, projects generated in the Android and iOS folders can be opened, compiled and debugged using **Android Studio** and **XCode** respectively.

## 2.2 Plugin installation: iOS
### 2.2.1 Project configuration
For the iOS version, when adding our plugin to the final application, the following points must be taken into account beforehand:

- **Add camera permissions**: To use the component, it is necessary to enable the camera permission in the ***info.plist*** file of the application (included within the project in the *** folder ios***). You must edit the file with a text editor and add the following *key/value* pair:

```
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) uses the camera</string>
```

### 2.2.2 Update the Podfile
In the project podfile it will be necessary to add the information of the private repository (see section 2.1). To do this, the following lines must be added to the beginning of the file:

```
platform :ios, '13.0' //MIN VERSION
plugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']
source 'https://cdn.cocoapods.org/'
```

<div class="note">
<span class="note">:information_source:</span>
To know more about the configuration and use of **Cocoapods Artifactory**, it is necessary to access the following *Core Component* document.
</div>

### 2.2.3 Possible issues
If environmental problems occur or the plugin is not updated after making new changes (for example, problems occurred due to the bundle not being generated correctly, or the libraries not being updated to the appropriate versions), it is recommended to run the following sequence instructions after launching the plugin:

- Open the **ios** folder of the application in a terminal.
- Run the following command:

```
pod deintegrate
```

- Remove ***Podfile.lock***
- Run the following command (or open the project with Xcode and run it):

```
pod install --repo-update
```

## 2.3 Plugin installation: Android
### 2.3.1 Set Android SDK version
For Android, the minimum SDK version required by our native libraries is **24**, so if your app has a *minimum SDK* defined lower than this, it will need to be modified to avoid a build error. To do this, access the application's ***build.gradle*** file (located in the ***android*** folder) and modify the following parameter:

```
buildscript {
  ext {
    minSdkVersion = 24
  }
}
```

---

## 3. Component configuration
The current component contains a series of Typescript methods and interfaces included within the ***SdkPhingersConfig.js*** file. In this file you can find the API necessary for communication between the application and the native functionality of the component. The purpose of each of those listed and the other properties that affect the operation of the component are explained below.

Below is the *SdkPhingersConfig* class, which allows you to configure the **Phingers** component:

```java
SdkPhingersConfig = function () {
    this.reticleOrientation     = "left";
    this.returnFullFrameImage   = true;
    this.returnProcessedImage   = true;
    this.returnRawImage         = true;
    this.useFlash               = true;
    this.useLiveness            = true;
    this.showTutorial           = false;
    this.extractionTimeout      = 30000;
    this.vibration              = false;
    this.showDiagnostic         = true;
    this.threshold              = 0.8;
}
```

Next, all the properties that can be defined in the **PhingersConfiguration** object will be discussed:

<div class="note">
<span class="note">:information_source:</span>
All configuration can be found in the component's ***sdk-phingers/www/SdkPhingersConfig.js*** file.
</div>

When calling the component, there are a series of parameters that must be included. They will be briefly discussed below.


### 3.1 reticleOrientation

**type:** *PhingersReticleOrientation*


Sets the fingerprint detection mode and indicates which fingers are to
be detected during the process. The allowed values are:

- **DT_LEFT**: Enables the capture of the **four** **fingers** of the
  **left** **hand**.

- **DT_RIGHT**: Enables the capture of the **four** **fingers** of the
  **left** **hand**.

- **DT_THUMB**: The capture of a **thumb** is activated.


```
reticleOrientation: PhingersReticleOrientation.DT_LEFT;,
```

### 3.2 returnFullFrameImage

**type:** *boolean*

Specifies whether to return the full image of the camera in which the
fingers have been detected.

```
returnFullFrameImage: true,
```

### 3.3 returnProcessedImage

**type:** *boolean*

If set to **true** it will return in the result the images in the same
form as they have been captured.

```
returnProcessedImage: true;
```

### 3.4 returnRawImage

**type:** *boolean*


If set to **true** it will return in the result the images in the same
form as they have been captured.

```
mReturnRawImage: true;
```

### 3.5 useFlash

**type:** *boolean*

Enables or disables the camera flash during the fingerprint capture
process. Default is set to **true**.


```
useFlash: false;
```

### 3.6 useLiveness

**type:** *boolean*

Enables or disables the liveness detector during the fingerprint capture
process. Default is set to **true**.

```
useLiveness: false;
```

### 3.7 showTutorial

**type:** *boolean*

Indicates whether the component activates the tutorial screen. This view
intuitively explains how the capture is performed.

```
showTutorial: false;
```

### 3.8 vibration

**type:** *boolean*

Enables the vibration during the process.

```
vibration: false;
```

### 3.9 extractionTimeout

**type:** *int*

Sets a stabilisation mode prior to any authentication process in the
widget. This mode forces the widget not to start any process if the user
is not facing forward and not moving his head.


```
extractionTimeout: false;
```

### 3.10 showDiagnostic

**type:** *boolean*

Display diagnostic screens at the end of the process

```
showDiagnostic: false;
```
### 3.11 threshold

**type:** *double*

The parameter configures a captureQualityThreshold, to define a quality
threshold to perform the capture.

```
threshold: 0.8;
```

#### 3.12. showPreviousTip

**type:** *boolean*

It shows a pre-launch screen with information about the process to be carried out and a start button.

---

## 4. Use of the component
Below will be shown how to execute the functionality of the current component.

<div class="warning">
<span class="warning">:warning:</span>
Remember that to launch a previously determined component you will have to initialize the SDK with its respective license, and then start a new operation. For more information consult the Core Component documentation.
</div>

Once the component is configured, to launch it the following code must be executed:

``` java
function callPhingers()
{
    if (typeof facephi.plugins.sdkphingers === "undefined") {
        showErrorUI("Cordova Phinger Sdk is not installed...");
        return;
    }

    phingersResponse    = null;
    var config          = new SdkPhingersConfig();
    // SdkPhingersCaptureOrientation capture orientation.
    config.setReticleOrientation(facephi.plugins.sdkphingers.captureorientation.SdkPhingersCaptureOrientation.left)
    config.setReturnFullFrameImage(true);
    config.setReturnProcessedImage(true);
    config.setReturnRawImage(true);
    config.setUseFlash(true);
    config.setUseLiveness(true);

    facephi.plugins.sdkphingers.launchPhingers(config)
    .then(
        (result) => onSuccessPhingersExtraction(result),
        (err) => onErrorPhingersExtraction(err),
    )
    .finally (() =>
    {
        console.log("callPhingers finished...");
    });
}
```

---

## 5. Return result

As shown in the above example, the result is returned in the form of a **JSON** object through ***Promises***, whether it is a successful operation or an error:
```
facephi.plugins.sdkphingers.launchPhingers(config)
.then(
    (result) => onSuccessPhingersExtraction(result),
    (err) => onErrorPhingersExtraction(err),
)
.finally (() =>
{
    console.log("callPhingers finished...");
});
```

Regardless of whether the result is correct/wrong, the result will have the following format:

```
PhingersResult {
    finishStatus: number;
    finishStatusDescription?: string;
    errorType: string;
    errorMessage?: string;
    processedFingers?: any;
    rawFingers?: any;
    wsq?: any;
    focusQuality?: any;
    livenessConfidence?: any;
    fullFrameImage?: any;
}
```
<div class="note">
<span class="note">:information_source:</span>
The result will be returned through a Promise that contains an object of the class ***PhingersResult***. Below is more information about these fields.
</div>

### 5.0 finishStatus

- **1**: The operation was successful.
- **2**: An error has occurred, which will be indicated in the errorType string and, optionally, an extra information message will be displayed in the errorMessage property.

### 5.1 finishStatusDescription

- **STATUS_OK**: The operation was successful.
- **STATUS_ERROR**: An error has occurred, which will be indicated in the errorType string and, optionally, an extra information message will be displayed in the errorMessage property.

### 5.2 errorMessage 
  
Indicates an additional error message if necessary. It is an optional value.

### 5.3 fullFrameImage

Returns the full image captured by the camera. No processes are applied to this image yet.

### 5.4 focusQuality

Returns the camera focus quality. A low value can affect the capture process.

### 5.6 livenessConfidence

Returns an indicator of the confidence of the capture's level.

### 5.7 processedFingers

Returns the processed fingerprint image.

### 5.8 rawImages

Returns the raw, unmodified image of the current fingerprint.

### 5.9 wsq

The fingerprint capture in WSQ format is returned.

### 5.10 nfiqMetrics

These are the metrics of the capture. Currently the following value is
returned:

- nfiqMetric: This is an integer value, between 1 and 5 (inclusive),
  indicating the quality of the fingerprint capture, with 1 indicating
  the highest quality and 5 indicating the worst quality. Fingerprints
  with the worst value are usually discarded for further validation.