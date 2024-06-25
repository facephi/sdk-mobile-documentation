# NFC Component

## 1. Introduction
The Component addressed in the current document is called the ***NFC Component***. This is responsible for capturing a selfie of the user and the subsequent extraction of the most important facial characteristics. Its main functionalities are the following:

- Internal management of the NFC sensor.

- Permission management.

- Document analysis.

- Progress analysis.

- Assistant in reading processes.

- Return all possible information to be read

- Return of images when they are available for reading.

### 1.1 Minimum requirements

The minimum native version (Android and iOS) of the SDK are as follows:

- Minimum Android version: **24 - JDK 11**
- Minimum iOS version: **13**

Regarding the architecture of the mobile device:

- armeabi-v7, x86, arm64 y x64

<div class="warning">
<span class="warning">:warning:</span>
This component needs to update to ***React Native 0.72 version*** due to internal dependencies, or at least to update ***Android Build Tools*** to ***8.0*** or more
</div>

### 1.2 Plugin version

The current plugin version can be checked as follows:

- Look for the ***package.json*** file at the root of the plugin.
- The KEY/TAG version indicates the version.

---

## 2. Component integration
<div class="note">
<span class="note">:information_source:</span>
Before integrating this component, it is *recommended* to read the documentation related to *Core Component* and follow the instructions indicated in said document.
</div>

This section will explain step by step how to integrate the current component into an existing project. 

<div class="warning">
<span class="warning">:warning:</span>

For this section, the following values ​​will be considered:

- **\<%APPLICATION_PATH%\>** - Path to the root of the application (example: /folder/example)
- **\<%PLUGIN_CORE_PATH%\>** - Path to the root of the Core plugin, which is required (example: /folder/sdk-core)
- **\<%PLUGIN_NFC_PATH%\>** - Path to the root of the current plugin (example: /folder/sdk-nfc)
</div>

### 2.1. Plugin installation: Common
The plugin allows execution on **Android and iOS** platforms. This section explains the common steps to all platforms. To install the plugin, the following steps must be adopted:


- Access **PLUGIN_CORE_PATH** at a terminal and run:

``` java
npm run build
```


- Access **APPLICATION_PATH** at a terminal and run:

``` java
npm i @facephi/sdk-nfc-capacitor
npm run build
npx cap sync
npx ionic capacitor build [android | ios]
```

After running the above steps, you can start the app with the sdk/component installed.

Projects generated in the Android and iOS folders can be opened, compiled, and debugged using *Android Studio* and *XCode*, respectively.

### 2.2 Plugin installation: iOS
#### 2.2.1 Project configuration

For the iOS version, when adding our plugin to the final application, the following points must be previously taken into account:

- ***Add camera permissions***: To use the component, you need to enable the camera permission in the application's ***info.plist*** file (included within the project in the ios folder). You will need to edit the file with a text editor and add the following *key/value* pair:

```java
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) uses the camera</string>
```

- ***Add Privacy - NFC Scan Usage Description***  To use the component, you need to enable the NFC permission in the application's ***info.plist*** file (included within the project in the ios folder).
```
<key>NFCReaderUsageDescription</key>
<string>The app needs this permission for the correct usage.</string>
```
- ***Add ISO7816 application identifiers for NFC Tag Reader Session***: Finally, you have to edit *info.plist* file with a Text Editor, and  add the following key/value/pair:
```
<array>
    <string>A0000002471001</string>
    <string>A0000002472001</string>
    <string>00000000000000</string>
</array>
```
- **Add the Capability Near field Communication Tag Reading**

It is necessary to add the **Near Field Communication Tag Reading** option in the ***Signing & Capabilities*** section of the target


#### 2.2.2 Update the Podfile
In the project podfile it will be necessary to add the information from the private repository (see section 2.1). To do this, the following lines must be added at the beginning of the file:

```
platform :ios, '13.0' //MIN VERSION
plugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']
source 'https://cdn.cocoapods.org/'
```

<div class="warning">
<span class="warning">:warning:</span>
To know more about the configuration and use of **Cocoapods Artifactory**, it is necessary to access the following document of **Core Component**.
</div>

#### 2.2.3 Possible issues
If environment problems occur or the plugin is not updated after making new changes (for example, problems occurred due to the bundle not being generated correctly, or the libraries not being updated to the correct versions), it is recommended to execute the following sequence of instructions after launching the plugin:

Open the application's ios folder at a terminal.

Run the following command:

```
pod deintegrate
```

- Remove the ***Podfile.lock***
- Run the following command (or open the project with Xcode and run it):

```
pod install --repo-update
```

### 2.3  Plugin installation: Android
#### 2.3.1 Set Android SDK version
For Android, the minimum SDK version required by our native libraries is **24**, so if your app has a Minimum SDK defined less than this, it will need to be modified to avoid a compile error. To do this, access the application's ***build.gradle*** file (located in the ***android*** folder) and modify the following parameter:

```
buildscript {
  ext {
    minSdkVersion = 24
  }
}
```

The minimun android.tools(AGP) is ***8.3.0***. To set this, access the application's ***build.gradle*** file (located in the ***android*** folder) and modify the following parameter:

```
dependencies {
    classpath "com.android.tools.build:gradle:8.3.0"
}
```

In the same file its mandatory to add this:

```
android {
    packagingOptions {
        pickFirst("META-INF/versions/9/OSGI-INF/MANIFEST.MF") // NFC
    }
```

---

## 3. Component configuration
The actual component contains a number of Typescript methods and interfaces contained within the ***definitions.ts*** file. In this file you can find the necessary API for the communication between the application and the native functionality of the component. It is then explained what each one of those listed is for and the other properties that affect the operation of the component.

Below is the *NfcConfiguration* class, which allows you to configure the **Nfc** component:

```java
export interface NfcConfiguration {
  docNumber: string;
  birthDate: string;
  expirationDate: string;
  extractionTimeout?: number;
  showTutorial?: boolean;
  vibrationEnabled?: boolean;
  skipPACE?: boolean;
  debug?: boolean;
  showDiagnostic?: boolean;
}
```

<div class="note">
<span class="note">:information_source:</span>
All the configuration can be found in the component's *definitions.ts* file.
</div>

When making the call to the component there is a series of parameters that must be included. They will be briefly discussed below.

### 3.1 docNumber

**type:** *string*

Indicates the document or media number depending on the document to be
read.

This field is mandatory.

```
docNumber: 2115000
```

### 3.2 birthDate

**type:** *string*

Indicates the date of birth that appears on the document ("dd/MM/yyyy").

This field is mandatory.

```
birthDate: dd/mm/yyyy;
```

### 3.3 expirationDate

**type:** *number*

Indicates the expiry date that appears on the document ("dd/MM/yyyy").

This field is mandatory.


```
expirationDate: dd/mm/yyyy;
```

### 3.4 extractionTimeout

**type:** *number*

Sets the maximum time the reading can be done.

```
extractionTimeout: 5000;
```

### 3.5 showTutorial

**type:** *boolean*


Indicates whether the component activates the tutorial screen. This view
intuitively explains how the capture is performed.

```
showTutorial: true;
```

### 3.6 showDiagnostic

**type:** *boolean*

Display diagnostic screens at the end of the process

```
showDiagnostic: false;
```

### 3.7 vibrationEnabled

**type:** *boolean*

Indicates whether vibration feedback is desired at the end of the
process.

```
vibrationEnabled: false;
```

### 3.8 skipPACE

**type:** *boolean*

Indicates that only NFC BAC reading is desired. It is a simple and fast
reader.

```
skipPACE: false;
```

### 3.9 debug

**type:** *boolean*

Activation of the component's debug mode.

```
debug: false;
```
---

## 4. Component Usage
The following will show how to execute the functionality of the current component.

<div class="warning">
<span class="warning">:warning:</span>
Remember that in order to launch a certain component previously, you must **initialise the SDK** with its respective licence, and then **start a new operation**. For further information, consult the documentation of the Core Component.
</div>

Once the component has been configured, to launch it, the following code must be executed:

``` java
/**
 * Method that launches the plugin.
 * @returns Promise with a JSON string.
 */
launchNfc = async (): Promise<NfcResult> => {
  console.log('Launching Nfc widget...');
  // SelphiFaceConfiguration
  return SdkNfc.startNfc(this.getNFCConfiguration());
}

getNFCConfiguration() 
{
  let config: NfcConfiguration = {
    docNumber: 'DOC_NUMBER',
    birthDay: '16/08/1979',
    expirationDay: '29/11/2022',
    extractionTimeout: 5000,
  };
  return config;
}
```

---

## 5. Receipt of the result


As shown in the example above, the result is returned in the form of a JSON object via Promises, whether it is a successful operation or an error:

```
return SdkNfc.startNfc(this.getNFCConfiguration());
```

Regardless of whether the result is correct/erroneous, the result will have the following format:

```java
export interface NfcResult 
{
  finishStatus: number;
  finishStatusDescription?: string;
  errorType: string;
  errorMessage?: string;
  nfcDocumentInformation?: any;
  nfcPersonalInformation?: any;
  nfcValidations?: any;
  nfcRawData?: any;
  nfcSecurityData?: any;
  facialImage?: string;
  fingerprintImage?: string;
  signatureImage?: string;
}
```

<div class="note">
<span class="note">:information_source:</span>
The result will be returned via a Promise containing an object of class ***NfcResult***. Information on these fields has been elaborated on below.
</div>


### 5.1 finishStatus

- **1**: The operation was successful.
- **2**: An error has occurred, which will be indicated in the errorDiagnostic enumerated and, optionally, an extra information message will be displayed in the errorMessage property.


### 5.2 finishStatusDescription

Returns the operation's global description. It is an optional value.

- **STATUS_OK**: The operation was successful.
- **STATUS_ERROR**: An error has occurred, which will be indicated in the errorDiagnostic enumerated and, optionally, an extra information message will be displayed in the errorMessage property.

### 5.3 errorType

 Returns the type of error that occurred (if there was one, which is indicated by the `finishStatus` parameter with the value `Error`). The values ​​it can have are the following:

- NfcError.ACTIVITY_RESULT_ERROR
- NfcError.CANCEL_BY_USER
- NfcError.INITIALIZATION_ERROR
- NfcError.NFC_ERROR
- NfcError.NFC_ERROR_DATA
- NfcError.NFC_ERROR_DISABLED
- NfcError.NFC_ERROR_ILLEGAL_ARGUMENT
- NfcError.NFC_ERROR_IO
- NfcError.NFC_ERROR_NOT_SUPPORTED
- NfcError.NFC_ERROR_READING
- NfcError.NFC_ERROR_TAG_LOST
- NfcError.NO_DATA_ERROR
- NfcError.TIMEOUT
- NfcError.LAST_COMMAND_EXPECTED

### 5.4 errorMessage: 

It is an optional value. This parameter it is an extra message explaining the current error.

### 5.5 nfcDocumentInformation


Information obtained from the document ordered by:

- documentNumber

- expirationDate

- issuer

- mrzString

- type

### 5.6 nfcPersonalInformation

Information obtained from the document ordered by:

- address

- birthdate

- city

- gender

- name

- nationality

- personalNumber

- placeOfBirth

- surname

### 5.7 nfcValidations

Document validation information sorted by:

- accessType

- activeAuthenticationSupported

- activeAuthenticationValidation

- chipAuthenticationValidation

- dataGroupsHashesValidation

- documentSigningValidation

- issuerSigningValidation

### 5.8 facialImage

The image of the face obtained during the capture.

### 5.9 fingerprintImage

The image of the fingeprint obtained during the capture.

### 5.10 signatureImage

The image of the signature obtained during the capture.