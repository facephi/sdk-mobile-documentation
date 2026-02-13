# Phingers Component

## 1. Introduction
The Component discussed in the current document is called ***Phingers Component***. This is responsible for capturing the user's fingerprints and subsequently extracting the subsequent fingerprint templates. Its main functionalities are the following:

- Two modes of operation: extraction of all four fingers of the hand (except the thumb), or extraction of the thumb only.
- Internal camera management.
- Permit management.
- Built-in liveness detection.
- Assistant in the fingerprint capture processes.
- Generation of templates with the characteristics of fingerprints, images and scores.

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
- **\<%PLUGIN_PHINGERS_PATH%\>** - Path to the root of the current plugin (example: /folder/sdk-phingers)
</div>

### 2.1. Plugin installation: Common
The plugin allows execution on **Android and iOS** platforms. This section explains common steps. To install the plugin you must follow the following steps:

- Make sure Flutter is installed.
- Access APPLICATION_PATH in a terminal and run:

```
dart pub token add "https://facephicorp.jfrog.io/artifactory/api/pub/pub-pro-fphi"
```
- Access to **\<%APPLICATION_PATH%\>**, and in the file pubspec.yaml add:

```
fphi_sdkmobile_phingers:
  hosted:
    name: fphi_sdkmobile_phingers
    url: https://facephicorp.jfrog.io/artifactory/api/pub/pub-pro-fphi/
  version: ^2.5.0
```

After executing the above steps, you can launch the application with the sdk/component installed.
From different IDE's, projects generated in the Android and iOS folders can be opened, compiled and debugged using **Android Studio** and **XCode** respectively.

## 2.2 Plugin installation: iOS
### 2.2.1 Project configuration
For the iOS version, when adding our plugin to the final application, the following points must be taken into account beforehand:

- **Add camera permissions**: To use the widget, you need to enable the camera permission in the application's ***info.plist*** file (included within the project in the *** folder ios***). You must edit the file with a text editor and add the following *key/value* pair:

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
The current component contains a number of ***dart*** methods and interfaces included within the ***fphi_sdkmobile_phingers_configuration.dart*** file. In this file you can find the API necessary for communication between the application and the native functionality of the component. The purpose of each of those listed and the other properties that affect the operation of the component are explained below.

Below is the *PhingersConfiguration* class, which allows you to configure the **Phingers** component:

```java
class PhingersConfiguration
{
  PhingersReticleOrientation mReticleOrientation;
  FingersFilter mFingersFilter;
  bool mShowEllipses;
  bool mUseLiveness;
  bool mShowTutorial;
  bool mVibration;
  int mExtractionTimeout;
  bool? mShowDiagnostic;
  double? mThreshold;
  bool? mShowPreviousTip;
}
```

Next, all the properties that can be defined in the **PhingersConfiguration** object will be discussed:

<div class="note">
<span class="note">:information_source:</span>
All configuration can be found in the component's ***fphi_sdkmobile_voice/fphi_sdkmobile_phingers_configuration.dart.*** file.
</div>

When calling the widget there are a series of parameters that must be included. They will be briefly discussed below.

### 3.0 ReticleOrientation

**type:** *PhingersReticleOrientation*

Sets the fingerprint detection mode and indicates which hand will be detected during the process. 
Allowed values ​​are:

- **DT_LEFT**: Enables the capture of the **four** **fingers** of the
  **left** **hand**.

- **DT_RIGHT**: Enables the capture of the **four** **fingers** of the
  **right** **hand**.

```
mReticleOrientation = PhingersReticleOrientation.DT_LEFT
```

### 3.1 FingersFilter

It allows you to define which fingers are captured during the process:

**type:** *FingersFilter*

The allowed values are:

- **DT_RING_FINGER**
- **DT_THUMB_FINGER**
- **DT_INDEX_FINGER**
- **DT_LITTLE_FINGER**
- **DT_MIDDLE_FINGER**
- **DT_SLAP**
- **DT_ALL_4_FINGERS_ONE_BY_ONE**
- **DT_ALL_5_FINGERS_ONE_BY_ONE**

```
mFingersFilter = FingersFilter.DT_ALL_5_FINGERS_ONE_BY_ONE
```

### 3.2 ShowEllipses

**type:** *boolean*

Draw an ellipse in the capture screen on detected fingerprint.

```
mShowEllipses = true,
```

### 3.3 UseLiveness

**type:** *boolean*

Enables or disables the liveness detector during the fingerprint capture process. 
Default is set to **true**.

```
mUseLiveness = true;
```

### 3.4 ShowTutorial

**type:** *boolean*

If set to **true**. Indicates whether the component activates the tutorial screen. This view intuitively explains how the capture is performed.

```
mShowTutorial = true;
```

### 3.5 Vibration

**type:** *boolean*

If set to **true**. Indicates whether vibration feedback is desired at the end of the process.

```
mVibration = false;
```

### 3.6 ExtractionTimeout

**type:** *number*

Sets the maximum time the reading can be done.
Value expressed in milliseconds.

```
mExtractionTimeout = 30000;
```

### 3.8 Threshold

**type:** *number*

The parameter configures a captureQualityThreshold, to define a quality
threshold to perform the capture.
Default value 0.9f.

```
mThreshold = 0.90;
```

### 3.9 ShowDiagnostic

**type:** *boolean*

Display diagnostic screens at the end of the process

```
mShowDiagnostic = false;
```

#### 3.10. ShowPreviousTip

**type:** *boolean*

It shows a pre-launch screen with information about the process to be carried out and a start button.

```
mShowPreviousTip = false;
```

---

## 4. Use of the component

Below will be shown how to execute the functionality of the current component.

<div class="warning">
<span class="warning">:warning:</span>
Remember that to launch a previously determined component you will have to initialize the SDK with its respective license, and then start a new operation. For more information consult the Core Component documentation.
</div>

Once the component is configured, to launch it the following code must be executed:

```
  Future<Either<Exception, PhingersResult>> launchPhingers() async {
    return launchPhingersWithConfiguration(createStandardConfiguration());
  }

  Future<Either<Exception, PhingersResult>>
    launchPhingersWithConfiguration(PhingersConfiguration configuration) async {
    try
    {
      FphiSdkmobilePhingers phingers = FphiSdkmobilePhingers();
      Map? resultJson = await phingers.startPhingersComponent(widgetConfigurationJSON: configuration);

      return Right(PhingersResult.fromMap(resultJson));
    } on Exception catch (e) {
      return (Left(e));
    }
  }

  /// Sample of standard plugin configuration 
  PhingersConfiguration createStandardConfiguration() {
    PhingersConfiguration configurationWidget;
    configurationWidget = PhingersConfiguration();
    configurationWidget.mReticleOrientation   = PhingersReticleOrientation.DT_LEFT; // LEFT or RIGHT
    configurationWidget.mUseLiveness          = true;
    configurationWidget.mExtractionTimeout    = 50000;
    configurationWidget.mShowTutorial         = false;
    configurationWidget.mFingersFilter        = FingersFilter.DT_ALL_5_FINGERS_ONE_BY_ONE;
    return configurationWidget;
  }
```

---

## 5. Return result
As shown in the above example, the result is returned in the form of a **PhingersResult** object through ***Promises***, whether it is a successful operation or an error:
```
FphiSdkmobilePhingers phingers = FphiSdkmobilePhingers();
Map? resultJson = await phingers.startPhingersComponent(widgetConfigurationJSON: configuration);

return Right(PhingersResult.fromMap(resultJson));
```

Regardless of whether the result is correct/wrong, the result will have the following format:

```
class PhingersResult
{
  final SdkFinishStatus finishStatus;
  final String finishStatusDescription;
  final String errorDiagnostic;
  final String? errorMessage;
  final dynamic fingers;
  final dynamic slapImages;
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

### 5.3 errorDiagnostic

Returns the type of error that occurred (if there was one, which is
indicated in the *finishStatus* parameter with the value *Error*).

### 5.4 errorMessage 
  
Indicates an additional error message if necessary. It is an optional value.

### 5.5 fingers

Returns the processed fingers. And its properties:

- **livenessScore**
- **position**
- **quality**
- **wsq**
- **displayImage**
- **minutiaesNumber**
- **nist2Quality**
- **nistQuality**
- **template**
- **proprietaryQuality**
- **imageWidth**
- **imageHeight**

### 5.6 slapImages

Returns the processed slapImages. And its properties:

- **image**
- **position**
- **livenessScore**