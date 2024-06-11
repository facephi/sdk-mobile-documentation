# NFC Component

## 1. Introduction
The Component discussed in the current document is called ***NFC Component***. Passive authentication of a document's NFC chip verifies whether it has really been issued by a certified authority. Passive authentication allows us to validate that:

- The document has been issued by the certifying authority of the country to which it belongs.
- The document has not been altered.
- The document is not a copy or cloned document.

### 1.1 Minimum requirements

The minimum native version (Android and iOS) of the SDK are as follows:

- Minimum Android version: 24 - JDK 11
- Minimum iOS version: 13

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
- **\<%PLUGIN_NFC_PATH%\>** - Path to the root of the current plugin (example: /folder/sdk-nfc)
</div>

### 2.1. Plugin installation: Common
The plugin allows execution on **Android and iOS** platforms. This section explains common steps. To install the plugin you must follow the following steps:

- Make sure React Native is installed.
- Access **\<%APPLICATION_PATH%\>** in a terminal and execute:

```
[ionic] cordova plugin add @facephi/sdk-core-cordova
[ionic] cordova plugin add @facephi/sdk-videoid-cordova
```

It is important to verify that the path to the plugin is correctly defined in package.json:

```
"dependencies": {
  "@facephi/sdk-core-cordova": <% PLUGIN_CORE_PATH %>,
  "@facephi/sdk-nfc-cordova": <% PLUGIN_NFC_PATH %>
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
- **Add Privacy - NFC Scan Usage Description**: To use the widget, it is necessary to enable NFC permission in the application's info.plist file (included within the project in the ios folder).
```
<key>NFCReaderUsageDescription</key>
<string>The app needs this permission for the correct usage.</string>
```
Add ISO7816 application identifiers for NFC Tag Reader Session: To use the widget, you need to enable NFC permission in the application's info.plist file (included within the project in the ios folder). You must edit the file with a text editor and add the following key/value pair:
```
<array>
    <string>A0000002471001</string>
    <string>A0000002472001</string>
    <string>00000000000000</string>
</array>
```
- **Add the Capability Near field Communication Tag Reading**

Open image-20230214-141106.png
image-20230214-141106.png

- **Add the Entitlements Near Field Communication Tag Reader Session Formats**:

Open image-20230214-141753.png
image-20230214-141753.png

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

### 2.2.4 Possible incidents
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
The current component contains a series of Typescript methods and interfaces included within the ***SdkNfcConfig.js*** file. In this file you can find the API necessary for communication between the application and the native functionality of the component. The purpose of each of those listed and the other properties that affect the operation of the component are explained below.

Below is the *NfcConfiguration* class, which allows you to configure the **Nfc** component:

```java
SdkNfcConfig = function () {
    this.issuer;
    this.docNumber = "";
    this.birthDay = "";
    this.expirationDay = "";
    this.extractionTimeout = 50000;
    this.showTutorial = true;
    this.vibrationEnabled = true;
    this.skipPACE = false;
    this.debug;
    this.showDiagnostic;
}
```
Next, all the properties that can be defined in the **NfcConfiguration** object will be discussed:

<div class="note">
<span class="note">:information_source:</span>
All configuration can be found in the component's ***sdk-nfc/www/SdkNfcConfig.js*** file.
</div>

When calling the component, there are a series of parameters that must be included. They will be briefly discussed below.

### 3.1 docNumber

**type:** *string*

Document number to be scanned.

```
docNumber: 2115000
```

### 3.2 birthDay

**type:** *string*

Date of birth that appears on the document to be scanned.

```
birthDay: dd/mm/yyyy;
```

### 3.3 expirationDay

**type:** *number*

Expiration date that appears on the document to be scanned.

```
expirationDay: dd/mm/yyyy;
```

### 3.4 extractionTimeout

**type:** *number*

Waiting time in which the plugin stops scanning automatically if no results are obtained.

```
extractionTimeout: 5000;
```

### 3.6 docType

**type:** *NfcDocumentType*

Type of document to be scanned.

```
docType: ;
```
### 3.7 showTutorial

**type:** *boolean*

Whether or not to enable a tutorial to be shown prior to reading the document.

```
showTutorial: ;
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

### 3.10 skipPACE

**type:** *boolean*

.

```
skipPACE: false;
```

### 3.11 debug

**type:** *boolean*

Enables or disables debug data to be displayed on the screen.

```
debug: false;
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
function callNfc()
{
    if (typeof facephi.plugins.sdknfc === "undefined") {
        showErrorUI("Cordova Nfc Sdk is not installed...");
        return;
    }

    var config = new SdkNfcConfig();

    config.setDocNumber("AAA439684");
    config.setBirthDay("16/08/1979");
    config.setExpirationDay("29/11/2022");
    config.setExtractionTimeout(50000);

    facephi.plugins.sdknfc.launchNfc(config)
    .then(
        (result) => console.log(result),
        (err) => console.log(err),
    )
    .finally (() =>
    {
        console.log("callNfc finished...");
    });
}
```

---

## 5. Return result

As shown in the above example, the result is returned in the form of a **JSON** object through ***Promises***, whether it is a successful operation or an error:
```
facephi.plugins.sdknfc.launchNfc(config)
.then(
    (result) => console.log(result),
    (err) => console.log(err),
)
```

Regardless of whether the result is correct/wrong, the result will have the following format:

```
NfcResult {
    finishStatus: number;
    finishStatusDescription?: string;
    errorType: string;
    errorMessage?: string;
    nfcDocumentInformation?: any;
    nfcPersonalInformation?: any;
    nfcValidations?: any;
    facialImage?: string;
    fingerprintImage?: string;
    signatureImage?: string;
}
```
<div class="note">
<span class="note">:information_source:</span>
The result will be returned through a Promise that contains an object of the class ***SdkNfcResult***. Below is more information about these fields.
</div>

### 5.1 finishStatus

- **1**: The operation was successful.
- **2**: An error has occurred, which will be indicated in the errorDiagnostic string and, optionally, an extra information message will be displayed in the errorMessage property.

### 5.2 finishStatusDescription

- **STATUS_OK**: The operation was successful.
- **STATUS_ERROR**: An error has occurred, which will be indicated in the errorDiagnostic string and, optionally, an extra information message will be displayed in the errorMessage property.
 
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

### 5.5 nfcDocumentInformation
### 5.6 nfcPersonalInformation
### 5.7 nfcValidations
### 5.8 facialImage
### 5.9 fingerprintImage
### 5.10 signatureImage