# VideoId Component

## 1. Introduction
The Component discussed in the current document is called ***VideoID Component***. This is responsible for recording a user identifying themselves, showing their face and their identity document.

### 1.1 Minimum requirements

The minimum native version (Android and iOS) of the SDK are as follows:

-   Minimum Android version: 24 - JDK 17
-   Minimum Build Tools version: **8.1.4**
-   Minimum Kotlin Android version **(sdk {'<'}= 2.2.x)**: **1.9.0**
-   Minimum Kotlin Android version **(sdk >= 2.3.x)**: **2.1.0**
-   Minimum iOS version: 13
-   Minimum Cordova Android version: **12.0.0**
-   Minimum Cordova iOS version: **7.0.0** 

Regarding the architecture of the mobile device:

armeabi-v7, x86, arm64 and x64

### 1.2 Plugin version
The current plugin version can be checked as follows:

We look for the ***package.json*** & ***config.xml*** file in the root of the plugin.

The version is indicated in the ***KEY/TAG*** version.

## 2. Component integration 
Before integrating this component **it is recommended** to read the documentation related to **Core Component** and follow the instructions indicated in said document.

<div class="note">
<span class="note">:information_source:</span>
This section will explain step by step how to integrate the current component into an existing project. 
For this section, the following values ​​will be considered:
- **\<%APPLICATION_PATH%\>** - Path to the root of the application (example: /folder/example)
- **\<%PLUGIN_CORE_PATH%\>** - Path to the root of the core plugin, which is required (example: /folder/sdk-core)
- **\<%PLUGIN_VIDEOID_PATH%\>** - Path to the root of the current plugin (example: /folder/sdk-videoid)
</div>

### 2.1. Plugin installation: Common
The plugin allows execution on **Android and iOS** platforms. This section explains common steps. To install the plugin you must follow the following steps:

- Make sure **Cordova** is installed.
- Access **\<%APPLICATION_PATH%\>** in a terminal and execute:

```
[ionic] cordova plugin add @facephi/sdk-core-cordova
[ionic] cordova plugin add @facephi/sdk-videoid-cordova
```

It is important to verify that the path to the plugin is correctly defined in package.json:

```
"dependencies": {
  "@facephi/sdk-core-cordova": <% PLUGIN_CORE_PATH %>,
  "@facephi/sdk-videoid-cordova": <% PLUGIN_VIDEOID_PATH %>
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
- **Add microphone permissions:** To use the component, you need to enable the camera permission in the application's ***info.plist*** file (included within the project in the ***ios*** folder). You will need to edit the file with a text editor and add the following *key/value* pair:

``` java
<key>NSMicrophoneUsageDescription</key>
<string>This app needs microphone access</string>
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

### 2.2.3 Possible incidents
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
The current component contains a series of Typescript methods and interfaces included within the ***SdkVideoIdConfig.js*** file. In this file you can find the API necessary for communication between the application and the native functionality of the component. The purpose of each of those listed and the other properties that affect the operation of the component are explained below.

Below is the *VideoIdConfiguration* class, which allows you to configure the **VideoId** component:

```java
SdkVideoIdConfig = function () {
    this.mode = "face_document_front";
    this.time = 5000;
    this.showTutorial = false;
    this.url;
    this.apiKey;
    this.tenantId;
    this.showDiagnostic;
}
```

Next, all the properties that can be defined in the **VideoIdConfiguration** object will be discussed:

<div class="note">
<span class="note">:information_source:</span>
All configuration can be found in the component's ***sdk-videoid/www/SdkVideoIdConfig.js*** file.
</div>

When calling the component, there are a series of parameters that must be included. They will be briefly discussed below.

### 3.1 time

**type:** *number*

Time that will remain on each screen of the process in ms.

```
time: 5000
```

### 3.2 mode

**type:** *VideoMode*

This enumeration is defined in the **VideoMode** class in ***definitions.ts***. Mode to be applied for recording. The possible VideoIdMode values ​​will be:

- ***VideoMode.FACE_DOCUMENT_FRONT***: You have to show the face and the front of the document.
- ***VideoMode.ONLY_FACE***: You only have to show the face during the process.
- ***VideoMode.FACE_DOCUMENT_FRONT_BACK***: You have to show the face, front and back of the document.

```
mode: VideoMode.FACE_DOCUMENT_FRONT_BACK;
```

### 3.3 extractionTimeout

**type:** *number*

The plugin timeout is set.

```
extractionTimeout: 10000;
```

### 3.4 showTutorial

**type:** *boolean*

Indicates whether you want to show the complete tutorial of the process or just the simplified version.

```
showTutorial: true;
```

### 3.5 Url

**type:** *string*

Path to the video socket.

```
url: url_provided_by_Facephi
```

### 3.6 ApiKey

**type:** *string*

ApiKey required for connection to the video socket.

```
apiKey: "apiKey_provided_by_Facephi";
```
### 3.7 TenantId

**type:** *string*

Tenant identifier that refers to the current client, necessary for the connection to the video service.

```
tenantId: "TenantId_provided_by_Facephi";
```

### 3.8 showDiagnostic

**type:** *boolean*

Indicates whether you want to show a diagnosis in case of failure.

```
showDiagnostic: false;
```

### 3.9 vibrationEnabled

**type:** *boolean*

Indicates whether or not you want to enable vibration.

```
vibrationEnabled: false;
```
---

## 4. Use of the component

Below will be shown how to execute the functionality of the current component.

<div class="warning">
<span class="warning">:warning:</span>
Remember that to launch a previously determined component you will have to initialize the SDK with its respective license, and then start a new operation. For more information consult the Core Component documentation.
</div>

Once the component is configured, to launch it the following code must be executed:

``` java
function callVideoId()
{
    if (typeof facephi.plugins.sdkvideoid === "undefined") {
        showErrorUI("Cordova VideoId Sdk is not installed...");
        return;
    }

    var config = new SdkVideoIdConfig();
    config.setMode(facephi.plugins.sdkvideoid.mode.SdkVideoIdMode.face_document_front)
    config.setTime(5000);
    config.setShowTutorial(true);

    videoIdResponse = null;
    facephi.plugins.sdkvideoid.launchVideoId(config)
    .then(
        (result) => console.log(result),
        (err) => console.log(err),
    )
    .finally (() =>
    {
        console.log("callVideoId finished...");
    });
}
```

---

## 5. Return result

As shown in the above example, the result is returned in the form of a **JSON** object through ***Promises***, whether it is a successful operation or an error:
```
facephi.plugins.sdkvideoid.launchVideoId(config)
.then(
    (result) => console.log(result),
    (err) => console.log(err),
)
.finally (() =>
{
    console.log("callVideoId finished...");
});
```

Regardless of whether the result is correct/wrong, the result will have the following format:

```
VideoIdResult {
    finishStatus: number;
    finishStatusDescription?: string;
    errorType: string;
    errorMessage?: string;
    data?: string;
}
```

<div class="note">
<span class="note">:information_source:</span>
The result will be returned through a Promise that contains an object of the class ***SdkVideoIdResult***. Below is more information about these fields.
</div>

### 5.1 finishStatus

- **1**: The operation was successful.
- **2**: An error has occurred, which will be indicated in the errorType string and, optionally, an extra information message will be displayed in the errorMessage property.

### 5.2 finishStatusDescription

- **STATUS_OK**: The operation was successful.
- **STATUS_ERROR**: An error has occurred, which will be indicated in the errorType string and, optionally, an extra information message will be displayed in the errorMessage property.
 
### 5.3 errorMessage
  
Indicates an additional error message if necessary. It is an optional value.

### 5.4 errorType
Returns the type of error that occurred (if there was one, which is indicated by the `finishStatus` parameter with the value `Error`). The values ​​it can have are the following:

- **NoError**: No error has occurred. The process can continue.
- **UnknownError**: Unhandled error. Possibly caused by a bug in the resource bundle.
- **CameraPermissionDenied**: The exception that is thrown when the sdk does not have permission to access the camera.
- **SettingsPermissionDenied**: The exception that is thrown when the component does not have permission to access system settings (*deprecated*).
- **HardwareError**: Exception that occurs when there is a hardware problem with the device, usually caused by very few available resources.
- **ExtractionLicenceError**: Exception that occurs when there has been a licencing problem on the server.
- **UnexpectedCaptureError**: Exception that occurs during the capture of frames by the camera.
- **ControlNotInitialisedError**: The component configurator has not been initialised.
- **BadExtractorConfiguration**: Problem arose during component configuration.
- **CancelByUser**: The exception that is thrown when the user stops the extraction manually.
- **TimeOut**: Exception that is thrown when a maximum time elapses without successfully completing the extraction.
- **InitProccessError**: Exception that is thrown when the sdk cannot process the captured images.
- **NfcError**: The exception that is thrown when the sdk does not have permission to access the nfc.
- **NetworkConnection**: The exception that is thrown when there are issues with the means the device uses to connect to the network.
- **TokenError**: The exception that is thrown when an invalid token is passed as a parameter.
- **InitSessionError**: The exception that is thrown when session cannot be initialised. The normal thing is that it happens because the `SdkCore` was not called when calling any other component.
- **ComponentControllerError**: The exception that is thrown when the component cannot be instantiated.