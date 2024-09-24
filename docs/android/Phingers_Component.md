# Phingers Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (Components) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Depending on the use
case that is required, certain components must be installed. Its high
level of modularity allows other new components to be added in the
future without affecting those already integrated in the project.

For more information on the base configuration, go to the
[Getting Started](./Mobile_SDK) section.

---

## 1. Introduction

The component discussed in the current document is called **Phingers
Component**. It is in charge of capturing the user's fingerprints and
the subsequent extraction of the subsequent fingerprint templates. Its
main functionalities are as follows:

- Two modes of operation: extraction of all four fingers of the hand
  (except the thumb), or extraction of the thumb only.

- Internal camera management.

- Permission management.

- Built-in vividness detection.

- Assistant in fingerprint capture processes.

- Generation of templates with fingerprint characteristics, images and
  scores.

---

## 2. Integration of the component

Before integrating this component, it is recommended to read the
documentation related to:

[Getting Started](./Mobile_SDK)
and follow the instructions in that document.

This section will explain step by step how to integrate the current
component into an existing project.

### 2.1. Dependencies required for integration

To avoid conflicts and compatibility problems, in case you want to
install the component in a project containing an old version of the
Facephi libraries (_Widgets_), these must be completely removed before
installing the **_SDKMobile_** components.

- Currently FacePhi libraries are distributed remotely through
  different dependency managers. **Mandatory** dependencies that must
  be installed beforehand:

  ```java
  implementation "com.facephi.androidsdk:phingers_component:$sdk_phingers_component_version" 
  ```

---

## 3. Start new operation

When you want to perform a specific operation, in order to generate the
associated information correctly in the platform, the **newOperation**
command must first be executed.

This command must have been executed **prior to launch**.

To learn more about how to start a new operation, it is recommended to
consult the [Getting Started](./Mobile_SDK)
documentation, which details and explains what this process consists of.

---

## 4. Available controllers

|                    |                                     |
| ------------------ | ----------------------------------- |
| **Controller**     | **Description**                     |
| PhingersController | Main fingerprint capture controller |

---

## 5. Component configuration

To configure the current component, once it has been initialised, a
_PhingersConfigurationData_ object must be created and passed as a
parameter to the SDKController when the component is launched.

The following section will show the fields that are part of this class
and what each of them is used for.

### 5.1. Class PhingersConfigurationData

#### 5.1.1. reticleOrientation

Sets the fingerprint detection mode and indicates which fingers are to
be detected during the process. The allowed values are:

- **LEFT**: Enables the capture of the **four** **fingers** of the
  **left** **hand**.

- **RIGHT**: Enables the capture of the **four** **fingers** of the
  **left** **hand**.

- **THUMB**: The capture of a **thumb** is activated.

#### 5.1.2. useFlash

Enables or disables the camera flash during the fingerprint capture
process. Default is set to **true**.

#### 5.1.3. returnProcessedImage

If set to **true** it will return in the result the processed images.

#### 5.1.4. returnRawImage

If set to **true** it will return in the result the images in the same
form as they have been captured.

#### 5.1.5. useLiveness

Enables or disables the liveness detector during the fingerprint capture
process. Default is set to **true**.

#### 5.1.6. returnFullFrameImage

Specifies whether to return the full image of the camera in which the
fingers have been detected.

#### 5.1.7. extractionTimeout

Set an extraction time.

#### 5.1.8. showTutorial

Indicates whether the component activates the tutorial screen. This view
intuitively explains how the capture is performed.

#### 5.1.9. threshold

The parameter configures a captureQualityThreshold, to define a quality
threshold to perform the capture.

#### 5.1.10. showSpinner

Indicates whether to show the load spinner.

#### 5.1.11. cropWidth

Indicates a width to perform a cropping of the capture.

#### 5.1.12. cropHeight

Indicates a height to perform a cropping of the capture.

#### 5.1.13. cropFactor

Indicates the relation to perform a cropping of the capture.

#### 5.1.14. showDiagnostic

Display diagnostic screens at the end of the process

#### 5.1.15. showPreviousTip

Displays a pre-launch screen with information about the process to be performed and a launch button.

---

## 6. Component use

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component normally, but internal events will be tracked to
  the _tracking_ server:

```java
val result = SDKController.launch(
    PhingersController(PhingersConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("Phingers: ERROR - ${result.error.name}")
    is SdkResult.Success -> Napier.d("Phingers OK: ${result.data}")
}
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component normally, but **no event will be
  tracked** to the _tracking_ server:

```java
val result = SDKController.launchMethod(
    PhingersController(PhingersConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("Phingers: ERROR - ${result.error.name}")
    is SdkResult.Success -> Napier.d("Phingers OK: ${result.data}")
}
```

The **launch** method must be used by **default**. This method allows
**_tracking_** to be used if your component is enabled, and will not use
it when it is disabled (or the component is not installed).

On the other hand, the **launchMethod** method covers a special case, in
which the integrator has tracking installed and activated, but in a
certain flow within the application does not want to track information.
In this case, this method is used to prevent this information from being
sent to the platform.

---

## 7. Receipt of the result

The controllers will return the required information in SdkResult
format. More information in the Android Mobile SDK's <a
href="Mobile_SDK#6-result-return"
rel="nofollow">6. Result return</a> section.

### 7.1. Receipt of errors

On the error side, we will have the PhingersError class.

Error list:

- ACTIVITY_RESULT_ERROR: The result of the activity is incorrect.
- ACTIVITY_RESULT_MSG_ERROR: The result of the activity in the msg is incorrect.
- APPLICATION_CONTEXT_ERROR: The required application context is null.
- CANCEL_BY_USER: The user has cancelled the process.
- CANCEL_LAUNCH: A general cancellation of the SDK has been made.
- COMPONENT_LICENSE_ERROR: The component license is not correct.
- EMPTY_LICENSE: The licence string is empty.
- FETCH_DATA_ERROR: Error in the result retrieval.
- FLOW_ERROR: Error in the flow process.
- INITIALIZATION_ERROR: Initialisation error.
- INTERNAL_ERROROR: Internal error.
- LOW_QUALITY: Low image quality.
- MANAGER_NOT_INITIALIZED: Managers are null.
- OPERATION_NOT_CREATED: No operation is in progress.
- PERMISSION_DENIED: User has denied permissions.
- PHINGERS_AUTOFOCUS_FAILURE: Autofocus failure.
- PHINGERS_CAMERA_FAILURE: Camera failure.
- PHINGERS_CAPTURE_FAILURE: Image capture failure.
- PHINGERS_CONFIGURATION_FAILURE: Configuration error.
- PHINGERS_FINGERPRINT_CAPTURE_FAILURE: Fingerprint capture failure.
- PHINGERS_FINGERPRINT_TEMPLATE_IO_ERROR: IO failure.
- PHINGERS_LICENSING_FAILURE: Licensing Error
- PHINGERS_LIVENESS_FAILURE: Life test error
- PHINGERS_NO_FINGERS_DETECTED: Error in fingerprint detection
- PHINGERS_UNIQUE_USER_ID_NOT_SPECIFIED: User not specified.
- TIMEOUT: Timeout in the process.

### 7.1. Receipt of correct execution - _data_

In the data part, we have the _PhingersResult_ class.

The result returns the images in **Bitmap** format, it is possible to
convert the images to **Base64** as follows:

Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)

The data field is variable and will depend on which component has
returned the result. In the case of this component, the fields returned
are the following:

#### 7.1.1 _fingersResult_

##### 7.1.1.1. rawFingerprintImage

Returns the raw, unmodified image of the current fingerprint.

##### 7.1.1.2. processedFingerprintImage

Returns the processed fingerprint image.

##### 7.1.1.3. wsq

The fingerprint capture in WSQ format is returned.

##### 7.1.1.4. fingerprintTemplate

Returns the raw template generated after the extraction process. Valid
for the AUTHENTICATION process.

##### 7.1.1.5. nfiqMetrics

These are the metrics of the capture. Currently the following value is
returned:

- nfiqMetric: This is an integer value, between 1 and 5 (inclusive),
  indicating the quality of the fingerprint capture, with 1 indicating
  the highest quality and 5 indicating the worst quality. Fingerprints
  with the latter value are usually discarded for further validation.

##### 7.1.2 fullFrameImage

Returns a cropped image centred on the user's face in Base64 string
format. This image is obtained from the bestImage. This is the image to
be used as the characteristic image of the user who performed the
process as avatar.

##### 7.1.3 focusQuality

Returns the best image extracted from the authentication process in
Base64 string format. This image is the original size image extracted
from the camera. Valid for the liveness process.

##### 7.1.4 livenessConfidence

Returns an indicator of the confidence level of the catch.

---

## 8. Customizing the component

Apart from the changes that can be made at SDK level (which are
explained in the [Getting Started](./Mobile_SDK)
document), this particular component allows the modification of specific
texts.

### 8.1 Texts

If you want to modify the SDK texts, you would have to include the
following XML file in the client application, and modify the value of
each String to the desired one.

```xml
    <string name="phingers_component_tutorial_left_message">Prepare your left hand for the catch</string>
    <string name="phingers_component_tutorial_left_title">Prepare your left hand for the catch</string>
    <string name="phingers_component_turorial_right_message">Prepare your right hand for capture</string>
    <string name="phingers_component_tutorial_right_title">Prepare your right hand for capture</string>
    <string name="phingers_component_tutorial_button">Take fingerprints</string>
    <string name="phingers_component_capture_phingers">Hold fingers steady</string>
    <string name="phingers_component_capture_thumb">Hold finger steady</string>
    <string name="phingers_component_capture_phingers_not_focus">Move fingers until in focus</string>
    <string name="phingers_component_capture_thumb_not_focus">Move finger until in focus</string>
    <string name="phingers_component_timeout_title">Time exceeded</string>
    <string name="phingers_component_timeout_desc">We apologize. The capture could not be made</string>
    <string name="phingers_component_internal_error_title">There was a technical problem</string>
    <string name="phingers_component_internal_error_desc">We apologize. The capture could not be made</string>

```

### 8.2. Animations

If you want to modify the animations (lottie) of the SDK you would have to include the animations with the same name in the res/raw/ folder of the application.

```text
phingers_anim_left.json
phingers_anim_right.json
phingers_anim_thumb.json
```

### 8.3 External custom views

It is possible to completely modify the component screens while maintaining their functionality and navigation. To do so, the following interfaces must be implemented:

Previous tip screen:

```kotlin

interface IPhingersPreviousTipView {
    @Composable
    fun Content(
        onContinue: () -> Unit,
        onClose: () -> Unit,
    )
}

```

Error diagnosis screen:

```kotlin

interface IPhingersErrorDiagnosticView {
    @Composable
    fun Content(
        error: PhingersError,
        onRetry: () -> Unit,
        onClose: () -> Unit,
    )
}

```

Once the classes that implement the interfaces have been created, the "customViews" parameter can be added at component launch to be used in the SDK.

---

## 9. Logs

To display the logs of this component on the console, you can use the filter: "PHINGERS:"
