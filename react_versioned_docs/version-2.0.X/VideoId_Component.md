# VideoId Component

## 1. Introduction
The Component discussed in the current document is called ***VideoID Component***. This is responsible for recording a user identifying themselves, showing their face and their identity document.

### 1.1 Minimum requirements

The minimum native version (Android and iOS) of the SDK are as follows:

-   Minimum Android version: **24 - JDK 17**
-   Minimum Build Tools version: **8.1.4**
-   Minimum Kotlin Android version: **1.9.0**
-   Minimum iOS version: **13**
-   Minimum ReactNative version: **0.73.0**

Regarding the architecture of the mobile device:

- armeabi-v7, x86, arm64 y x64

### 1.2 Plugin Version

The current plugin version can be checked as follows:

- We look for the file ***package.json*** in the root of the plugin.
- The version is indicated in the ***KEY/TAG*** version.

## 2. Component Integration 

<div class="note">
<span class="note">:information_source:</span>
Before integrating this component, it is *recommended* to read the documentation related to *Core Component* and follow the instructions indicated in said document.
</div>

This section will explain step by step how to integrate the current component into an existing project. 

<div class="warning">
<span class="warning">:warning:</span>
For this section, the following values ​​will be considered:
- **\<%APPLICATION_PATH%\>** - Path to the root of the application (example: /folder/example)
- **\<%PLUGIN_CORE_PATH%\>** - Path to the root of the core plugin, which is required (example: /folder/sdk-core)
- **\<%PLUGIN_VIDEOID_PATH%\>** - Path to the root of the current plugin (example: /folder/sdk-videoid)
</div>

### 2.1. Plugin Instalation: Common
The plugin allows execution on **Android and iOS** platforms. This section explains common steps. To install the plugin you must follow the following steps:

- Make sure **React Native** is installed.
- Access **\<%APPLICATION_PATH%\>** in a terminal and run:

```java
yarn add @facephi/sdk-core-react-native
yarn add @facephi/sdk-videoid-react-native
yarn install
```

- It is important to verify that the path to the plugin is correctly defined in package.json:

```java
"dependencies": {
  "sdk-core-react-native": <% PLUGIN_CORE_PATH %>,
  "sdk-videoid-react-native": <% PLUGIN_VIDEOID_PATH %>
}
```

- After executing the above steps, you can launch the application with the sdk/component installed.
  
- Finally, to launch the projects, the following commands must be executed in two ways:

***From Terminal***

```java
npx react-native run-android 
or
npx react-native run-android --active-arch-only
```
For iOS:
```
npx react-native run-ios
```
***From different IDEs***

Projects generated in the Android and iOS folders can be opened,
compiled, and debugged using *Android Studio* and *XCode* respectively.


## 2.2 Plugin Instalation: iOS
### 2.2.1 Proyect Configuration

For the iOS version, when adding our plugin to the final application,
the following points must be previously taken into account:

-   ***Add camera permissions:*** To use the component, you need to enable
    the camera permission in the application's ***info.plist*** file
    (included within the project in the ***ios*** folder). You will need
    to edit the file with a text editor and add the following
    *key/value* pair:

``` java
<key> NSCameraUsageDescription </key>
<string>$(PRODUCT_NAME) uses the camera</string>
```

-   ***Add microphone permissions:*** To use the component, you need to enable
    the camera permission in the application's ***info.plist*** file
    (included within the project in the ***ios*** folder). You will need
    to edit the file with a text editor and add the following
    *key/value* pair:

``` java
<key>NSMicrophoneUsageDescription</key>
<string>This app needs microphone access</string>
```

### 2.2.2 Update Podfile
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

```java
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

## 3. Component Configuration
The current component contains a series of Typescript methods and interfaces included within the file ***node_modules/@facephi/sdk-videoid-react-native/src/index.tsx***. In this file you can find the API necessary for communication between the application and the native functionality of the component. The purpose of each of those listed and the other properties that affect the operation of the component are explained below.

Below is the *VideoIdConfiguration* class, which allows you to configure the **VideoID** component:

```java
export interface VideoIdConfiguration {
  sectionTime?: number;
  timeout?: number;
  mode?: VideoMode;
  showTutorial?: boolean;
  url?: string;
  apiKey?: string;
  tenantId?: string;
  showDiagnostic?: boolean;
  vibration?: boolean;
}
```

Next, all the properties that can be defined in the **VideoIdConfiguration** object will be discussed:

<div class="note">
<span class="note">:information_source:</span>
All configuration can be found in the component's ***src/index.tsx*** file.
</div>

When calling the component, there are a series of parameters that must be included. They will be briefly discussed below.

### 3.1 sectionTime

**type:** *number*

Time that will remain on each screen of the process in ms.

```
sectionTime: 5000
```

### 3.2 timeout

**type:** *number*

Indicates the time that the component finishes due to inactivity.

```
timeout: 10000
```

### 3.3 mode

**type:** *VideoMode*

This enumeration is defined in the class ***SdkVideoIdEnum.tsx***. Mode to be applied for recording. The possible VideoIdMode values ​​will be:

- ***VideoMode.FACE_DOCUMENT_FRONT***: You have to show the face and front of the document.
- ***VideoMode.ONLY_FACE***: You just have to show your face during the process.
- ***VideoMode.FACE_DOCUMENT_FRONT_BACK***: You have to show the face, front and back of the document.

```
mode: VideoMode.FACE_DOCUMENT_FRONT_BACK;
```

### 3.4 showTutorial

**type:** *boolean*

Indicates whether you want to show the complete tutorial of the process or just the simplified version.

```
showTutorial: true;
```

### 3.5 url

**type:** *string*

Path to the video socket.

```
url: url_provided_by_Facephi
```

### 3.6 apiKey

**type:** *string*

ApiKey required for connection to the video socket.

```
apiKey: "apiKey_provided_by_Facephi";
```
### 3.7 tenantId

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

### 3.9 vibration

**type:** *boolean*

Indicates whether or not you want to enable vibration.

```
 vibration: true;
```
---

## 4. Component usage

The following will show how to execute the functionality of the current
component.

<div class="warning">
<span class="warning">:warning:</span>
Remember that to launch a previously determined component you will have to initialize the SDK with its respective license, and then start a new operation. For more information consult the Core Component documentation.
</div>

Once the component is configured, to launch it the following code must be executed:

``` java
const launchVideoId = async () => 
{ 
  try 
  {
    console.log("Starting launchVideoId...");
    return await SdkMobileVideoid.videoid(getVideoIdConfiguration())
    .then((result: VideoIdResult) => 
    {
      console.log("result", result);
    })
    .catch((error: any) => 
    {
      console.log(error);
    })
    .finally(()=> {
      console.log("End launchVideoId...");
    });
  } 
  catch (error) {
    setMessage(JSON.stringify(error));
  }
};

const getVideoIdConfiguration = () => 
{
  let config: VideoIdConfiguration = {
    sectionTime: 5000,
    mode: VideoMode.FACE_DOCUMENT_FRONT,
  };
  return config;
};
```

### 4.1 Signature mode method

``` java
const launchSignatureVideoId = async () => 
  { 
    try 
    {
      console.log("Starting launchVideoId...");
      return await SdkMobileVideoid.signatureVideoid(getVideoIdConfiguration())
      .then((result: VideoIdResult) => 
      {
        console.log("result", result);
      })
      .catch((error: any) => 
      {
        console.log(error);
      })
      .finally(()=> {
        console.log("End launchVideoId...");
      });
    } 
    catch (error) {
      setMessage(JSON.stringify(error));
    }
  };
```

---

## 5. Result return

As shown in the above example, the result is returned in the form of a **JSON** object through ***Promises***, whether it is a successful operation or an error:

```java
return await SdkMobileVideoid.videoid(getVideoIdConfiguration())
.then((result: VideoIdResult) => 
{
  console.log("result", result);
})
.catch((error: any) => 
{
  console.log(error);
})
.finally(()=> {
  console.log("End launchVideoId...");
});
```

Regardless of whether the result is correct/wrong, the result will have the following format:

```java
export interface VideoIdResult 
{
  finishStatus: number;
  finishStatusDescription?: string;
  errorType: string;
  errorMessage?: string;
  data?: string;
}
```
<div class="note">
<span class="note">:information_source:</span>
The result will be returned through a Promise that contains an object of the class ***VideoIdResult***. Below is more information about these fields.
</div>

### 5.1 finishStatus

Returns the global diagnosis of the operation.

- **1**: The operation was successful.
- **2**: An error has occurred, which will be indicated in the ***errorType*** enumeration and, optionally, an extra information message will be displayed in the ***errorMessage*** property.


### 5.2 finishStatusDescription

Returns the global diagnostic of the operation. It is an optional value.


### 5.3 errorType
Returns the type of error that occurred (if there was one, which is indicated in the finishStatus parameter with the value Error). The values ​​it can have are the following:

-   **NoError:** No error has occurred. The process can continue.

-   **UnknownError:** Unhandled error. Possibly caused by a bug in the
    resource bundle.

-   **CameraPermissionDenied:** The exception that is thrown when the
    sdk does not have permission to access the camera.

-   **SettingsPermissionDenied**: The exception that is thrown when the
    component does not have permission to access system settings
    (\*deprecated\*).

-   **HardwareError**: Exception that occurs when there is a hardware
    problem with the device, usually caused by very few available
    resources.

-   **ExtractionLicenceError**: Exception that occurs when there has
    been a licencing problem on the server.

-   **UnexpectedCaptureError**: Exception that occurs during the capture
    of frames by the camera.

-   **ControlNotInitialisedError**: The component configurator has not been
    initialised.

-   **BadExtractorConfiguration**: Problem arose during component
    configuration.

-   **CancelByUser**: The exception that is thrown when the user stops
    the extraction manually.

-   **TimeOut**: Exception that is thrown when a maximum time elapses
    without successfully completing the extraction.

-   **InitProccessError**: Exception that is thrown when the sdk cannot
    process the captured images.

-   **NfcError:** The exception that is thrown when the sdk does not
    have permission to access the nfc.

-   **NetworkConnection**: The exception that is thrown when there are
    issues with the means the device uses to connect to the network.

-   **TokenError:** The exception that is thrown when an invalid token
    is passed as a parameter.

-   **InitSessionError**: The exception that is thrown when session
    cannot be initialised. The normal thing is that it happens because
    the \`SdkCore\` was not called when calling any other component.

-   **ComponentControllerError**: The exception that is thrown when the
    component cannot be instantiated.

### 5.4 errorMessage: 
Indicates an additional error message if necessary. It is an optional value.