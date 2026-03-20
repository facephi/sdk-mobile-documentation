# VideoId Component

## 1. Introduction
The Component discussed in the current document is called ***VideoID Component***. This is responsible for recording a user identifying themselves, showing their face and their identity document.

### 1.2 Plugin version
The current plugin version can be checked as follows:

We look for the file ***pubspec.yaml*** in the root of the plugin.

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

- Make sure Flutter is installed.
- Access APPLICATION_PATH in a terminal and run:
```
dart pub token add "https://facephicorp.jfrog.io/artifactory/api/pub/pub-pro-fphi"
```
- Access **\<%APPLICATION_PATH%\>**, and in the pubspec.yaml file and add:

```
fphi_sdkmobile_videoid:
  hosted:
    name: fphi_sdkmobile_videoid
    url: https://facephicorp.jfrog.io/artifactory/api/pub/pub-pro-fphi/
  version: ^2.7.0
```

After executing the above steps, you can launch the application with the sdk/component installed.
From different IDE's, projects generated in the Android and iOS folders can be opened, compiled and debugged using **Android Studio** and **XCode** respectively.

## 2.2 Plugin installation: iOS
### 2.2.1 Project configuration
For the iOS version, when adding our plugin to the final application, the following points must be taken into account beforehand:

- **Add camera permissions**: To use the widget, you need to enable the camera permission in the ***info.plist*** file of the application (included within the project in the *** folder ios***). You must edit the file with a text editor and add the following *key/value* pair:

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
pod repo-art update cocoa-pro-fphi
pod install --repo-update
```

## 2.3 Plugin installation: Android
### 2.3.0 Set Android SDK version
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
The current component contains a number of ***dart*** methods and interfaces included within the ***fphi_sdkmobile_videoid_configuration.dart*** file. In this file you can find the API necessary for communication between the application and the native functionality of the component. The purpose of each of those listed and the other properties that affect the operation of the component are explained below.

Below is the *VideoIdConfiguration* class, which allows you to configure the **VideoID** component:

```java
class VideoIdConfiguration
{
  VideoMode mMode;
  String? mUrl;
  String? mApiKey;
  String? mTenantId;
  String? mSpeechText;
  List<String>? mDocumentFilter;
  List<String>? mCountryFilter;
  bool? mAutoFaceDetection;
  int mSectionTime;
  int? mSectionTimeout;
  int? mTimeoutServerConnection;
  int? mTimeoutFaceDetection;
  int? mMaxRetries;
}
```

Next, all the properties that can be defined in the **VideoIdConfiguration** object will be discussed:

<div class="note">
<span class="note">:information_source:</span>
All configuration can be found in the component's ***fphi_sdkmobile_videoid/fphi_sdkmobile_videoid_configuration.dart.*** file.
</div>

When calling the widget there are a series of parameters that must be included. They will be briefly discussed below.

### 3.1 mMode

**type:** *VideoMode*

This enumeration is defined in the **VideoMode**. Mode to be applied for recording. The possible VideoIdMode values ​​will be:

- ***FACE_DOCUMENT_FRONT***: You have to show the face and the front of the document.
- ***ONLY_FACE***: You only have to show the face during the process.
- ***FACE_DOCUMENT_FRONT_BACK***: You have to show the face, front and back of the document.
- ***DOCUMENT_FRONT_BACK***: You have to show front and back of the document.
- ***DOCUMENT_FRONT***: You have to show the front of the document.

### 3.2 mTimeoutServerConnection

**type:** *number*

Timeout in ms for server response.

### 3.3 mUrl

**type:** *string*

Path to the video socket.

```
url: url_provided_by_Facephi
```

### 3.4 mApiKey

**type:** *string*

ApiKey required for connection to the video socket.

```
apiKey: "apiKey_provided_by_Facephi";
```
### 3.5 mTenantId

**type:** *string*

Tenant identifier that refers to the current client, necessary for the connection to the video service.

```
tenantId: "TenantId_provided_by_Facephi";
```

### 3.6 mAutoFaceDetection

**type:** *boolean*

Enable/Disable auto face detection

### 3.7 mSectionTime

**type:** *number*

Indicates the duration of each of the sections in which the recording
message is displayed.

### 3.8 mOcrValidations

**type:** *string[]*

Dictionary with the OCR validations to be performed. The keys are the fields to be validated and the values are instances of OcrValidationValue.

OcrValidationValue has the following fields:

- value: The value to be validated.
- tolerance: The tolerance level for the validation.
  - STRICT: Strict validation.
  - LOW_TOLERANCE: Low tolerance validation.
  - MEDIUM_TOLERANCE: Medium tolerance validation.
  - HIGH_TOLERANCE: High tolerance validation.
- validationType: The type of validation to be performed.
  - OPTIONAL: Optional validation.
  - REQUIRED: Required validation.

### 3.9 mCountryFilter

**type:** *string[]*

It allows to restrict processing to a specific set of countries by accepting an array of strings representing the aliases in ISO3 format (3-letter code according to ISO 3166-1 standard).

### 3.10 mDocumentFilter

**type:** *string[]*

Allows to restrict the types of documents accepted during capture. Possible values are:

- "IDC": ID Card
- "PSP": Passport
- "DLI": Driver License
- "VIS": Visa
- "FOC": Foreign Card
- "INV": Invoice
- "CUS": Custom Document

### 3.11 mSectionTimeout

**type:** *number*

Maximum time allowed to complete a section (in ms).

### 3.12 mMaxRetries

**type:** *number*

Maximum number of retries allowed for the OCR validation. 3 is the default value.

### 3.13 mSpeechText

**type:** *string*

Text the user must speak during the video recording.

---

## 4. Use of the component

Below will be shown how to execute the functionality of the current component.

<div class="warning">
<span class="warning">:warning:</span>
Remember that to launch a previously determined component you will have to initialize the SDK with its respective license, and then start a new operation. For more information consult the Core Component documentation.
</div>

Once the component is configured, to launch it the following code must be executed:

```
Future<Either<Exception, VideoIdResult>>
  launchVideoIdWithConfiguration(VideoIdConfiguration configuration) async {
  try
  {
    FphiSdkmobileVideoid videoId = FphiSdkmobileVideoid();
    final Map resultJson = await videoId.startVideoIdComponent(widgetConfigurationJSON: configuration);
    return Right(VideoIdResult.fromMap(resultJson));
  }
  on Exception catch (e) {
    return (Left(e));
  }
}

/// Sample of standard plugin configuration
VideoIdConfiguration createStandardConfiguration()
{
  VideoIdConfiguration configurationWidget;
  configurationWidget = VideoIdConfiguration();
  configurationWidget.mTime         = 5000;
  configurationWidget.mMode         = VideoMode.DT_FACE_DOCUMENT_FRONT_BACK;
  configurationWidget.mShowTutorial = false;
  return configurationWidget;
}
```

---

## 5. Return result

As shown in the above example, the result is returned in the form of a **JSON** object through ***Promises***, whether it is a successful operation or an error:
```
FphiSdkmobileVideoid videoId = FphiSdkmobileVideoid();
final Map resultJson = await videoId.startVideoIdComponent(widgetConfigurationJSON: configuration);
return Right(VideoIdResult.fromMap(resultJson));
```

Regardless of whether the result is correct/wrong, the result will have the following format:

```
class VideoIdResult
{
  final SdkFinishStatus finishStatus;
  final String finishStatusDescription;
  final String errorDiagnostic;
  final String? errorMessage;
  final String? faceImage;
  final String? faceImageTokenized;
  final String? documentFaceImageTokenized;
  final String? speechText;
  final String? documentType;
  final int? matchingSidesScore;
  final dynamic personalData;
  final dynamic frontDocumentData;
  final dynamic backDocumentData;
  final dynamic ocrMap;
  final dynamic ocrDiagnostic;
}
```

<div class="note">
<span class="note">:information_source:</span>
The result will be returned through a Promise that contains an object of the class ***VideoIdResult***. Below is more information about these fields.
</div>

### 5.0 finishStatus

- **1**: The operation was successful.
- **2**: An error has occurred, which will be indicated in the errorDiagnostic string and, optionally, an extra information message will be displayed in the errorMessage property.

### 5.1 finishStatusDescription

- **STATUS_OK**: The operation was successful.
- **STATUS_ERROR**: An error has occurred, which will be indicated in the errorDiagnostic string and, optionally, an extra information message will be displayed in the errorMessage property.

### 5.2 errorDiagnostic
Returns the type of error that occurred (if there was one, which is indicated by the `finishStatus` parameter with the value `Error`). The values ​​it can have are the following:

- **NoError**: No error has occurred. The process can continue.

- **UnknownError**: Unhandled error. Possibly caused by a bug in the resource bundle.

- **CameraPermissionDenied**: The exception that is thrown when the sdk does not have permission to access the camera.

- **SettingsPermissionDenied**: The exception that is thrown when the widget does not have permission to access system settings (*deprecated*).

- **HardwareError**: Exception that occurs when there is a hardware problem with the device, usually caused by very few available resources.

- **ExtractionLicenceError**: Exception that occurs when there has been a licencing problem on the server.

- **UnexpectedCaptureError**: Exception that occurs during the capture of frames by the camera.

- **ControlNotInitialisedError**: The widget configurator has not been initialised.

- **BadExtractorConfiguration**: Problem arose during widget configuration.

- **CancelByUser**: The exception that is thrown when the user stops the extraction manually.

- **TimeOut**: Exception that is thrown when a maximum time elapses without successfully completing the extraction.

- **InitProccessError**: Exception that is thrown when the sdk cannot process the captured images.

- **NfcError**: The exception that is thrown when the sdk does not have permission to access the nfc.

- **NetworkConnection**: The exception that is thrown when there are issues with the means the device uses to connect to the network.

- **TokenError**: The exception that is thrown when an invalid token is passed as a parameter.

- **InitSessionError**: The exception that is thrown when session cannot be initialised. The normal thing is that it happens because the `SdkCore` was not called when calling any other component.

- **ComponentControllerError**: The exception that is thrown when the component cannot be instantiated.

### 5.3 errorMessage

Indicates an additional error message if necessary. It is an optional value.