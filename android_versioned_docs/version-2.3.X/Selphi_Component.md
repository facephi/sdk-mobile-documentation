# Selphi Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (**Components**) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Certain components must
be installed depending on the use case required. Its high level of
modularity allows other new components to be added in the future without
affecting those already integrated into the project.

For more information on the base configuration, go to the
[Getting Started](./Mobile_SDK) section.

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

[Getting Started](./Mobile_SDK)
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

### 2.1. Resources zip file

Table of sdk versions and associated resource versions (Found in the **Resources** section):

| **SDK version** | **Selphi resources version** |
| --------------- | ---------------------------- |
| 2.0.2           | 5.13.1                       |
| 2.0.3           | 5.13.4                       |
| 2.1.0           | 5.14.1                       |
| 2.1.1           | 5.14.2                       |
| 2.1.2           | 5.15.0                       |
| 2.2.0           | 5.16.1                       |
| 2.2.1           | 5.16.2                       |
| 2.2.2           | 5.16.2                       |
| 2.2.3           | 5.17.1                       |
| 2.3.1           | 5.17.2                       |
| 2.3.2           | 5.17.3                       |

---

## 3. Start a new operation

When you want to perform a specific operation, in order to generate the
associated information correctly in the platform, the **newOperation**
command must first be executed.

<div class="note">
<span class="note">:information_source:</span>
This command must have been executed **before launch**.
To learn more about how to start a new operation, it is recommended to consult the [Start a new operation](./Mobile_SDK#4-start-a-new-operation) documentation, which details and explains what this process consists of.
</div>

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

#### 5.1.3. _cropImageDebug_

Allows debug mode to check the percentage of cropping of the face.

#### 5.1.4. _showResultAfterCapture_

Indicates whether or not to display a screen with the captured image
after the analysis process. This screen allows the user to repeat the
capture process if the image obtained is incorrect.

#### 5.1.5. _showTutorial_

Indicates whether the widget activates the tutorial screen. This view
intuitively explains how the capture is performed.

#### 5.1.6. _livenessMode_

Sets the liveness mode of the widget. Allowed values are:

- SelphiFaceLivenessMode.NONE: Indicates that the photodetection mode should not be
  enabled in the authentication processes.

- SelphiFaceLivenessMode.PASSIVE: Indicates that the passive liveness test is
  performed in the server, sending the corresponding "BestImage" or
  "TemplateRaw" for this purpose.

- SelphiFaceLivenessMode.MOVE: Indicates that the liveness test is active
  by displaying instructions during the capture, and returning
  the corresponding result of the process.

#### 5.1.7. _stabilizationMode_

Sets a stabilization mode before any authentication process in the
widget. This mode forces the widget not to start any process if the user
is not facing forward and not moving his head.

#### 5.1.8. _cameraFlashEnabled_

Indicates whether the device's camera flash is activated.

#### 5.1.9 _locale_

Forces the widget to use the language setting indicated by the locale
parameter. This parameter accepts a language code (e.g. 'en') and a
regional identification code (e.g. 'en_US'). If the widget resource file
does not have a locale for the selected 'locale', its configuration will
fall back to the default language.

#### 5.1.10 _fullscreen_

Indicates whether the view will prioritize for full-screen display if
the system allows it.

#### 5.1.11. _templateRawOptimized_

Indicates whether the template (templateRaw) generated after the selfie
should be optimized or not.

#### 5.1.12. _qrMode_

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

#### 5.1.16. _logImages_

When activated, a list of the 5 best images taken of the user is returned.

#### 5.1.17. _showPreviousTip_

Displays a pre-launch screen with information about the process to be performed and a launch button.

#### 5.1.18. _extractionDuration_

Duration of facial extraction process

#### 5.1.19. _cameraPreferred_

Selection of camera used for the process: FRONT, BACK

#### 5.1.20. _vibrationEnabled_

Indicates whether vibration feedback is desired at the end of the process.

#### 5.1.21. _moveSuccessfulAttempts_

Number of retries for successful capture in the movement process (Default 1)

#### 5.1.22. _moveFailedAttempts_

Number of retries for incorrect capture in the movement process (Default 2)

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

Error list:

- ACTIVITY_RESULT_ERROR: The result of the activity is incorrect.
- ACTIVITY_RESULT_MSG_ERROR: The result of the activity received in the msg is incorrect.
- APPLICATION_CONTEXT_ERROR: The required application context is null.
- BAD_EXTRACTOR_CONFIGURATION_ERROR: Widget: Incorrect extractor configuration.
- CAMERA_PERMISSION_DENIED: User has rejected permissions.
- CANCEL_BY_USER: The user has cancelled the process.
- CANCEL_LAUNCH: A general cancellation of the SDK has been done.
- COMPONENT_LICENSE_ERROR: The component license is not correct.
- CONTROL_NOT_INITIALIZATED_ERROR: Widget: Initialisation error.
- EMPTY_LICENSE: The license string is empty.
- EXTRACTION_LICENSE_ERROR: Widget: License error.
- FETCH_DATA_ERROR: Error in the collection of the result.
- FLOW_ERROR: Error in the flow process.
- HARDWARE_ERROR: Widget: Hardware error.
- INITIALIZATION_ERROR: Initialisation error.
- MANAGER_NOT_INITIALIZED: Managers are null.
- NO_DATA_ERROR: Input data is null.
- OPERATION_NOT_CREATED: No operation is in progress.
- RESOURCES_NOT_FOUND: Resource zip not found.
- SETTINGS_PERMISSION_ERROR: Widget: Permission error.
- TEMPLATE_ERROR:
- TIMEOUT: Timeout in process.
- UNEXPECTED_CAPTURE_ERROR: Widget: Capture error.
- UNKNOWN_ERROR: Unknown error.
- WIDGET_RESULT_DATA_ERROR: Error in widget output data.

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
for the **matching** process.

#### 7.2.2 _template_

Returns the template that is generated after the extraction process.
Valid for the **matching** process.

#### 7.2.3 _bestImage_

Returns the best image extracted from the authentication process in
SdkImage format. This image is the original size image extracted from
the camera. Valid for the **liveness** process.

#### 7.2.4 _bestImageCropped_

Returns a cropped image centred on the user's face in SdkImage format.
This image is obtained from the bestImage. This image will be used as
the characteristic image of the user who carried out the process as an
avatar.

#### 7.2.5 _logImages_

List of the top 5 captured images returned if the "logImages" flag is set in the configuration.

#### 7.2.6 _bestImageTokenized_

Returns the best image tokenized. Valid for the **liveness** process.

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
the [Getting Started](./Mobile_SDK)
document), this particular component allows the modification of specific
texts.

### 9.1 Texts

If you want to modify the SDK texts, you would have to include the
following XML file in the client application and change the value of
each String to the desired one.

```xml
    <!-- Diagnostic -->
    <string name="selphid_component_timeout_title">Time exceeded</string>
    <string name="selphid_component_timeout_desc">Check that the document is inside the box and the data is visible.</string>
    <string name="selphid_component_internal_error_title">There was a technical problem</string>
    <string name="selphid_component_internal_error_desc">We apologize. The capture could not be made</string>
    <!-- Previous Tip -->
    <string name="selphid_component_tip_message">&lt;b&gt; Focus&lt;/b&gt; your document&lt;b&gt; inside the box.&lt;/b&gt; The photo will be taken automatically.</string>
    <string name="selphid_component_tip_message_alt">Focus your document inside the box. The photo will be taken automatically.</string>
    <string name="selphid_component_tip_anim_id_desc">Place your ID card horizontally, and point your phone vertically.</string>
    <string name="selphid_component_tip_anim_pass_desc">Place your passport horizontally, and point your phone vertically.</string>
    <string name="selphid_component_tip_title">Document photo</string>
    <string name="selphid_component_tip_button">Start</string>
    <string name="selphid_component_tip_button_alt">Start document capture</string>
    <string name="selphid_component_tip_close_button_alt">Back</string>
    <string name="selphid_component_tip_info_button_alt">Show advices</string>
    <!-- Tutorial -->
    <string name="selphid_component_tutorial_message_1">Look for a background with good contrast.</string>
    <string name="selphid_component_tutorial_message_2">Place the document in the box</string>
    <string name="selphid_component_tutorial_message_3">Avoid glare that makes the document difficult to read.</string>
    <string name="selphid_component_tutorial_message_1_anim_id_desc">Place the document on a surface with a different colour than the document.</string>
    <string name="selphid_component_tutorial_message_2_anim_id_desc">Place your ID card horizontally, and point your phone vertically.</string>
    <string name="selphid_component_tutorial_message_3_anim_id_desc">Reflections appear on the document.</string>
    <string name="selphid_component_tutorial_message_1_anim_pass_desc">Place the document on a surface with a different colour than the document.</string>
    <string name="selphid_component_tutorial_message_2_anim_pass_desc">Place your passport horizontally, and point your phone vertically.</string>
    <string name="selphid_component_tutorial_message_3_anim_pass_desc">Reflections appear on the document.</string>
    <string name="selphid_component_tutorial_close_button_alt">Back to previous tutorial</string>


```

### 9.2. Animations

If you want to modify the animations (lottie) of the SDK you would have to include the animations with the same name in the res/raw/ folder of the application.

```text
selphi_anim_tuto.json
```
