# Selphi Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (**Components**) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Certain components must
be installed depending on the use case required. Its high level of
modularity allows other new components to be added in the future without
affecting those already integrated into the project.

For more information on the base configuration, go to the
<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">Mobile SDK</a> section.

---

## 1. Introduction

The Component discussed in the current document is called **Selphi
Component**. It is responsible for capturing a selfie of the user and
then extracting the most important facial features. Its main
functionalities are the following:

- Internal camera management.

- Permission management.

- Assistant in the process of capturing the user's face.

- Generation of the templates with the facial characteristics and the
  image of the user's face for the liveness detection process.

### 1.1 Minimum requirements

The minimum iOS SDK version required is as follows:

Minimum iOS version: **13**

---

## 2. Component integration

<div class="warning">
<span class="warning">:warning:</span>
Before integrating this component, it is recommended to read the
documentation related to

<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a>
and follow the instructions in that document.

</div>
This section will explain step by step how to integrate the current
component into an existing project.

### 2.1. Dependencies required for integration

<div class="warning">
<span class="warning">:warning:</span>
In order to avoid conflicts and compatibility problems, in case you want to
install the component in a project containing an old version of the Facephi libraries.
of the Facephi libraries (_Widgets_), these must be completely removed before the installation of the components.
completely before the installation of the components of the **_SDKMobile_** components.
</div>
#### Cocoapods
- Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The **mandatory** dependencies that must have been previously installed (by adding them in the Podfile file of the project) are:

```
  pod 'FPHISDKMainComponent', '~> 2.0.0'
  pod 'zipzap'
```

- To install the current component, the following entry must be included in the _Podfile_ of the project
  entry in the _Podfile_ of the application:

```
  pod 'FPHISDKSelphiComponent', '~> 2.0.0'
```

- Once the dependencies are installed, the different functionalities of the component can be used.

- In case of development with **XCode15** a post-installation script must be included:

![Image](/ios/fix_ldClassic.png)

#### SPM

- The mandatory dependencies that must have been previously installed are:

```
//HTTPS
https://github.com/facephi-clienters/SDK-SdkPackage-SPM.git
//SSH
git@github.com:facephi-clienters/SDK-SdkPackage-SPM.git
```

- To install the Selphi component, it must be included in the project modules:

```
//HTTPS
https://github.com/facephi-clienters/SDK-Selphi_component-SPM.git
//SSH
git@github.com:facephi-clienters/SDK-Selphi_component-SPM.git
```

### 2.2 Permissions and configurations

In the client application where the components are to be integrated, it is necessary to incorporate the following elements in the info.plist file

```
It is necessary to allow the use of the camera (Privacy - Camera Usage Description)
```

---

## 3. Start new operation

In order to generate the associated information correctly in the platform, the **newOperation** command must be executed first.

<div class="note">
<span class="note">:information_source:</span>
This command must have been executed **before launch**.

To learn more about how to start a new operation, it is recommended to
consult the <a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a>
documentation, which details and explains what this process consists of.

</div>

## 4. Available controllers

| **Controller**            | **Description**                                |
| ------------------------- | ---------------------------------------------- |
| SelphiController          | Facial recognition main controller             |
| RawTemplateController     | Driver to generate a RawTemplate from an image |
| SignatureSelphiController | Driver to sign a process with a Capture        |

---

## 5. Component configuration

To configure the current component, once it has been initialized, a
SelphiConfigurationData object must be created and passed as a parameter
to the SDKController when the component is launched.

The following section will show the fields that are part of this class
and what each is used for.

### 5.1. Class SelphiConfigurationData

#### 5.1.1 Basic Configuration

##### resourcesPath

Sets the path to the widget's resource file. This file contains both the graphics resources and the localisation resources. This path must be specified relative to the 'assets' folder of the main application.

##### showTutorial

This property allows to show the tutorial before the capture process.

##### showDiagnostic

If set to true, when an error or lack of permissions occurs, the sdk will display a screen with the error returned by the widget.

##### showResultAfterCapture

Indicates whether or not to display a screen with the captured image of the document after the analysis process. This screen gives the user the possibility to repeat the capture process if the image obtained from the document is not correct.

#### 5.1.2 Advanced Settings

##### debug

Activation of the debug mode of the component.

##### fullscreen

Indicates if the view will have priority to be displayed in fullscreen, if the system allows it.
fullscreen, if the system allows it.

##### cropPercent

Allows to modify the crop percentage of the face. The higher the
the higher the number, the more the rectangle is cropped with respect to the face.
face.

##### locale

Forces the widget to use the language setting indicated by the
locale parameter. This parameter accepts both a language code (e.g. 'en') and a regional identification code (e.g. 'en_US').
e.g. 'en') and a regional identification code (e.g. 'en_US'). If
the widget's resource file did not have a locale for the selected
locale' selected, its configuration will fall back to the default language.
language.

##### livenessMode

Sets the liveness mode of the widget. Allowed values are:

- **SelphiFaceLivenessMode.NONE**: Indicates that photo detection mode should not be enabled in authentication processes.

- **SelphiFaceLivenessMode.PASSIVE**: Indicates that the passive liveness test is performed on the server, by sending the corresponding "BestImage" or "TemplateRaw" for this purpose.

- **SelphiFaceLivenessMode.MOVE**: Indicates that the liveness test is active by displaying instructions during the capture, and returning the corresponding result of the process.

##### stabilizationMode

Sets a stabilisation mode prior to any authentication process in the widget. This mode forces the widget not to start any process if the user is not facing forward and not moving his head.

##### templateRawOptimized

Indicates whether the template (templateRaw) generated after the selfie should be optimised or not.

##### qrMode

Boolean indicating whether or not to activate QR reading prior to the authentication process.

##### videoFilename

Sets the absolute path to the filename where a video of the capture process will be recorded.
a video of the capture process will be recorded. The application is responsible for
requesting the necessary permissions from the phone in case that path requires additional permissions.
requires additional permissions. The widget, by default, will not perform
recording process unless a file path is specified using this method.
file path is specified using this method.

##### cameraFlashEnabled

Indicates whether the device's camera flash is enabled.

##### translationsContent

This advanced property allows, by means of a string in xml format,
to configure the translation of the literals displayed during the process.
process.

##### viewsContent

This advanced property allows, by means of a string in xml format,
to configure the views of the widget.

#### 5.1.3 Otros parametros

##### vibrationEnabled

If true, vibration is enabled on errors and if the response of the widget is OK

---

## 6. Use of the component

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component, but internal events will be tracked to the
  _tracking_ server:

```java
let controller = SelphiController(data: selphiConfigurationData, output: output, viewController: viewController)
SDKController.shared.launch(controller: controller)
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component, but **no event will be tracked** to
  the _tracking_ server:

```java
let controller = SelphiController(data: selphiConfigurationData, output: output, viewController: viewController)
SDKController.shared.launchMethod(controller: controller)
```

<div class="warning">
<span class="warning">:warning:</span>
The **launch** method must be used by **default**. This method allows
**_tracking_** if your component is enabled and will not be used when it
is disabled (or the component is not installed).

On the other hand, the **launchMethod** method covers a particular case
in which the integrator has tracking installed and activated but, in a
certain flow within the application does not want to track information.
In this case, this method is used to prevent this information from being
sent to the platform.

</div>

## 7. Receipt of the result

The controllers will return the required information in SdkResult format
-more details in the <a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">Mobile SDK</a> section.

### 7.1. Receiving errors

_finishStatus_: Which will tell us if the operation has finished successfully. Possible values:

```
FinishStatus.STATUS_OK
FinishStatus.STATUS_ERROR
```

_errorType_: Widget's own errors

```
SELPHID_CANCEL_BY_USER
SELPHID_TIMEOUT
SELPHID_INTERNAL_ERROR
EXTRACTION_FINISHED_WITH_NO_RESULTS
COULD_NOT_CREATE_WIDGET_INSTANCE
RESOURCES_FILE_NOT_FOUND
```

### 7.2. Receiving successful execution - _data_

The data field is variable and will depend on which component the result was returned. In the case of this component, the fields returned are as follows:

#### 7.2.1 template

Returns the template that is generated after the extraction process. Valid for the AUTHENTICATION process.

#### 7.2.2 templateRaw

Returns the raw template that is generated after the extraction process. Valid for the AUTHENTICATION process.

#### 7.2.3 bestImageData

Returns the best image extracted from the authentication process in byte array format. This image is the image with the original size extracted from the camera. Valid for the **liveness** process.

#### 7.2.4 bestImageCroppedData

Returns a cropped image centered on the user's face in byte array format. This image is obtained from the bestImage. This is the image to be used as the characteristic image of the user who performed the process as an avatar.

#### 7.2.5 QrData

Returns the information from the QR reading in String format.

---

## 8. Additional Drivers

### 8.1. RawTemplateController

Controller to generate a RawTemplate, you can use both the image in base64 and in data .

Example of use:

```java
let controller = RawTemplateController(
	base64: bestImageData.base64EncodedString(),
	output: { sdkResult in
		guard let result = sdkResult.data else {return}
		print(result.base64EncodedString())
	})
SDKController.shared.launchMethod(controller: controller)
```

or

```java
let controller = RawTemplateController(
	data: bestImageData,
	output: { sdkResult in
		guard let result = sdkResult.data else {return}
		print(result.base64EncodedString())
	})
SDKController.shared.launchMethod(controller: controller)
```
