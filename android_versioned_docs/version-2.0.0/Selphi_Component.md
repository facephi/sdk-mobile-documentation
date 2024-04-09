# Selphi Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (Components) that offer a series of
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

---

## 2. Integration of the component

Before integrating this component, it is recommended to read the
documentation related to

<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a>
and follow the instructions in that document.

This section will explain step by step how to integrate the current
component into an existing project.

### 2.1. Dependencies required for integration

To avoid conflicts and compatibility problems, if you want to install
the component in a project containing an old Facephi libraries
(_Widgets_) version, these must be removed entirely before installing
the **_SDKMobile_** components. Currently, FacePhi libraries are
distributed remotely through different dependency managers.
**Mandatory** dependencies that must be installed beforehand:

- ```java
  implementation "com.facephi.androidsdk:selphi_component:$sdk_selphi_component_version"
  ```

---

## 3. Start a new operation

When you want to perform a specific operation, in order to generate the
associated information correctly in the platform, the **newOperation**
command must first be executed.

This command must have been executed **before launch**.

To learn more about how to start a new operation, it is recommended to
consult the <a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a>
documentation, which details and explains what this process consists of.

---

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

#### 5.1.0. _debug_

Activation of the component's debugging mode.

#### 5.1.1. _resourcesPath_

Indicates the name of the resources in zip format. Example:
_"resources-selphi-2-0.zip"_.

This name will fetch the file from the assets path.

![Image](/android/selphi_resources.png)

#### 5.1.2. _cropPercent_

Allows you to change the percentage of cropping of the face. The higher
the number, the more the rectangle is cropped concerning the face.

#### 5.1.3. _showResultAfterCapture_

Indicates whether or not to display a screen with the captured image
after the analysis process. This screen allows the user to repeat the
capture process if the image obtained is incorrect.

#### 5.1.4. _showTutorial_

Indicates whether the widget activates the tutorial screen. This view
intuitively explains how the capture is performed.

#### 5.1.5. _livenessMode_

Sets the liveness mode of the widget. Allowed values are:

- LIVENESS_NONE: Indicates that the photodetection mode should not be
  enabled in the authentication processes.

- LIVENESS_PASSIVE: Indicates that the passive liveness test is
  performed in the server, sending the corresponding "BestImage" or
  "TemplateRaw" for this purpose.

#### 5.1.6. _stabilizationMode_

Sets a stabilization mode before any authentication process in the
widget. This mode forces the widget not to start any process if the user
is not facing forward and not moving his head.

#### 5.1.7. _cameraFlashEnabled_

Indicates whether the device's camera flash is activated.

#### 5.1.8 _locale_

Forces the widget to use the language setting indicated by the locale
parameter. This parameter accepts a language code (e.g. 'en') and a
regional identification code (e.g. 'en_US'). If the widget resource file
does not have a locale for the selected 'locale', its configuration will
fall back to the default language.

#### 5.1.9 _fullscreen_

Indicates whether the view will prioritize for full-screen display if
the system allows it.

#### 5.1.10. _templateRawOptimized_

Indicates whether the template (templateRaw) generated after the selfie
should be optimized or not.

#### 5.1.11. _qrMode_

Sets whether or not to activate QR reading before the authentication
process.

#### 5.1.13 _videoFilename_

Sets the absolute path to the filename where a video of the capture
process will be recorded. The application is responsible for requesting
the necessary permissions from the phone if that path requires
additional permissions. The widget, by default, will not perform any
recording process unless a file path is specified using this method.

#### 5.1.14 _viewsContent_

This advanced property allows, through a string in XML format, to
configure the widget views.

Note: This property does not alter the content of the resource file.

#### 5.1.15. _showDiagnostic_

Display diagnostic screens at the end of the process

#### 5.1.15. _logImages_

Al activarlo se devuelve una lista con las 5 mejores imágenes tomadas del usuario

---

## 6. Component use

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component, but internal events will be tracked to the
  _tracking_ server:

```java
val response = SDKController.launch(
    SelphiController(SelphiConfigurationData(...))
)
when (response) {
    is SdkResult.Error -> Napier.d("Selphi: ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component, but **no event will be tracked** to
  the _tracking_ server:

```java
val response = SDKController.launchMethod(
    SelphiController(SelphiConfigurationData(...))
)
when (response) {
    is SdkResult.Error -> Napier.d("Selphi: ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

The **launch** method must be used by **default**. This method allows
**_tracking_** if your component is enabled and will not be used when it
is disabled (or the component is not installed).

On the other hand, the **launchMethod** method covers a particular case
in which the integrator has tracking installed and activated but, in a
certain flow within the application does not want to track information.
In this case, this method is used to prevent this information from being
sent to the platform.

---

## 7. Receipt of the result

The controllers will return the required information in SdkResult
format. -more details in the Android Mobile SDK's <a
href="Mobile_SDK#6-result-return"
rel="nofollow">6. Result return</a> section-.

### 7.1. Receipt of errors

On the error side, we will have the SelphiError class.

```java
    SelphiError.ACTIVITY_RESULT_ERROR
    SelphiError.BAD_EXTRACTOR_CONFIGURATION_ERROR
    SelphiError.CAMERA_PERMISSION_DENIED
    SelphiError.CANCEL_BY_USER
    SelphiError.CONTROL_NOT_INITIALIZATED_ERROR
    SelphiError.EXTRACTION_LICENSE_ERROR
    SelphiError.HARDWARE_ERROR
    is SelphiError.INITIALIZATION_ERROR -> it.error // More info
    SelphiError.NO_ERROR
    SelphiError.RESOURCES_NOT_FOUND
    SelphiError.SETTINGS_PERMISSION_ERROR
    SelphiError.TIMEOUT
    SelphiError.UNEXPECTED_CAPTURE_ERROR
    SelphiError.UNKNOWN_ERROR
```

### 7.2. Receipt of correct execution - _data_

In the data part, we have the SelphiResult class.

The result returns the images in **Bitmap** format. It is possible to
convert the images to **Base64** as follows:

`Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)`

The data field is variable and will depend on which component has
returned the result. In the case of this component, the fields returned
are the following:

#### 7.2.1 _templateRaw_

Returns the raw template generated after the extraction process. Valid
for the AUTHENTICATION process.

#### 7.2.2 _template_

Returns the template that is generated after the extraction process.
Valid for the AUTHENTICATION process.

#### 7.2.3 _bestImage_

Returns the best image extracted from the authentication process in
SdkImage format. This image is the original size image extracted from
the camera. Valid for the liveness process.

#### 7.2.4 _bestImageCropped_

Returns a cropped image centred on the user's face in SdkImage format.
This image is obtained from the bestImage. This image will be used as
the characteristic image of the user who carried out the process as an
avatar.

#### 7.2.5 _logImages_

List of the top 5 captured images returned if the "logImages" flag is set in the configuration.

---

## 8. Additional Controllers

### 8.1. RawTemplateController

Controller to generate a RawTemplate from an image (bitmap).

Example of use:

```java
val result = SDKController.launch(
    RawTemplateController(SdkImage(image))
)
when (result) {
    is SdkResult.Error -> Napier.d("GenerateRaw: KO - ${result.error}")
    is SdkResult.Success -> result.data
}
```
## 9. Customizing the component

Apart from the changes that can be made at the SDK level (explained in
the <a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a>
document), this particular component allows the modification of specific
texts.

### 9.1 Texts

If you want to modify the SDK texts, you would have to include the
following XML file in the client application and change the value of
each String to the desired one.

```xml
    <string name="selphi_component_timeout_title">Time exceeded</string>
    <string name="selphi_component_timeout_desc">We apologize. The capture could not be made</string>
    <string name="selphi_component_internal_error_title">There was a technical problem</string>
    <string name="selphi_component_internal_error_desc">We apologize. The capture could not be made</string>
    <string name="selphi_component_tutorial_message">Stay still,\nwith your face\nin the center of the circle</string>
    <string name="selphi_component_tutorial_title">Take a selfie</string>
    <string name="selphi_component_tutorial_button">Continue</string>

```
