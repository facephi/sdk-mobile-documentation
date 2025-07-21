# Fingerprint Capture

## 1. Introduction

Fingerprint capture is performed with the **Phingers Component**. This component handles capturing the user’s fingerprints and extracting templates. Its main processes are:

- Internal camera and permission management
- Multiple extraction modes (four-finger slap, thumb-only, etc.)
- Built-in liveness detection
- Guided assistance during capture
- Generation of fingerprint templates, images, and quality scores

Refer to the [Quickstart](./Mobile_SDK) section for basic SDK integration. This section provides details for launching this component.

---

## 2. Dependency

Add the component-specific dependency:

```java
implementation "com.facephi.androidsdk:phingers_component:$version"
```

---

## 3. Available Controllers

| **Controller**     | **Description**                         |
| ------------------ | --------------------------------------- |
| PhingersController | Main controller for fingerprint capture |

---

## 4. Quick Launch

Once the SDK is initialized and a new operation has been created, launch the component:

```java
val response = SDKController.launch(
    PhingersController(
        PhingersConfigurationData(...)
    )
)

when (response) {
    is SdkResult.Error   -> Napier.d("PHINGERS: ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

---

## 5. Basic Configuration

Create a `PhingersConfigurationData` object with the following fields:

```java
PhingersConfigurationData(
    reticleOrientation = CaptureOrientation.LEFT,
    fingerFilter       = FingerFilter.SLAP
)
```

**ReticleOrientation** options:

- `LEFT`
- `RIGHT`

**FingerFilter** options:

- `SLAP`
- `ALL_4_FINGERS_ONE_BY_ONE`
- `ALL_5_FINGERS_ONE_BY_ONE`
- `INDEX_FINGER`
- `MIDDLE_FINGER`
- `RING_FINGER`
- `LITTLE_FINGER`
- `THUMB_FINGER`

---

## 6. Receiving the Result

The launch returns an `SdkResult`. Handle success and error:

```java
when (response) {
    is SdkResult.Error   -> Napier.d("PHINGERS: ERROR - ${response.error}")
    is SdkResult.Success -> response.data
}
```

### 6.1 Handling Errors

Errors are returned as a `PhingersError`. Possible values include:

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

### 6.2 Handling Success – `data`

On success (`SdkResult.Success`), you receive a `PhingersResult` object. Images are returned as `SdkImage`; extract the bitmap via `image.bitmap`. To convert to Base64:

```kotlin
Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)
```

The `PhingersResult` includes the following fields:

##### 6.2.1. rawFingerprintImage

Returns the raw, unmodified image of the current fingerprint.

##### 6.2.2. processedFingerprintImage

Returns the processed fingerprint image.

##### 6.2.3. wsq

The fingerprint capture in WSQ format is returned.

##### 6.2.4. fingerprintTemplate

Returns the raw template generated after the extraction process. Valid
for the AUTHENTICATION process.

##### 6.2.5. nfiqMetrics

These are the metrics of the capture. Currently the following value is
returned:

- nfiqMetric: This is an integer value, between 1 and 5 (inclusive),
  indicating the quality of the fingerprint capture, with 1 indicating
  the highest quality and 5 indicating the worst quality. Fingerprints
  with the latter value are usually discarded for further validation.

##### 6.2.6. fullFrameImage

Returns a cropped image centred on the user's face in Base64 string
format. This image is obtained from the bestImage. This is the image to
be used as the characteristic image of the user who performed the
process as avatar.

##### 6.2.7. focusQuality

Returns the best image extracted from the authentication process in
Base64 string format. This image is the original size image extracted
from the camera. Valid for the liveness process.

##### 6.2.8. livenessConfidence

Returns an indicator of the confidence level of the catch.

---

## 7. Advanced Information

This section provides advanced configuration options for the Phingers Component.

### 7.1 Advanced Component Configuration

All fields of `PhingersConfigurationData`:

#### 7.1.1. reticleOrientation

Sets the fingerprint detection mode and indicates which fingers are to
be detected during the process. The allowed values are:

- **LEFT**: Enables the capture of the **four** **fingers** of the
  **left** **hand**.

- **RIGHT**: Enables the capture of the **four** **fingers** of the
  **left** **hand**.

#### 7.1.2. useFlash

Enables or disables the camera flash during the fingerprint capture
process. Default is set to **true**.

#### 7.1.3. returnProcessedImage

If set to **true** it will return in the result the processed images.

#### 7.1.4. returnRawImage

If set to **true** it will return in the result the images in the same
form as they have been captured.

#### 7.1.5. useLiveness

Enables or disables the liveness detector during the fingerprint capture
process. Default is set to **true**.

#### 7.1.6. returnFullFrameImage

Specifies whether to return the full image of the camera in which the
fingers have been detected.

#### 7.1.7. extractionTimeout

Set an extraction time.

#### 7.1.8. showTutorial

Indicates whether the component activates the tutorial screen. This view
intuitively explains how the capture is performed.

#### 7.1.9. threshold

The parameter configures a captureQualityThreshold, to define a quality
threshold to perform the capture.

#### 7.1.10. showSpinner

Indicates whether to show the load spinner.

#### 7.1.11. cropWidth

Indicates a width to perform a cropping of the capture.

#### 7.1.12. cropHeight

Indicates a height to perform a cropping of the capture.

#### 7.1.13. cropFactor

Indicates the relation to perform a cropping of the capture.

#### 7.1.14. showDiagnostic

Display diagnostic screens at the end of the process

#### 7.1.15. showPreviousTip

Displays a pre-launch screen with information about the process to be performed and a launch button.

#### 7.1.16. fingerFilter

Filter to select the whole hand or a specific finger: SLAP, INDEX_FINGER, MIDDLE_FINGER, RING_FINGER, LITTLE_FINGER, THUMB_FINGER.

---

## 8. Component Customization

Beyond SDK-level settings (see [Advanced Settings](./Mobile_SDK_advanced)), you can modify the UI.

### 8.1 Texts

Override default texts by adding an XML file in your app:

```xml
 <!-- Previous Tip -->
    <string name="phingers_component_tip_left_title">Left hand prints</string>
    <string name="phingers_component_tip_right_title">Right hand prints</string>
    <string name="phingers_component_tip_thumb_title">Thumbprint</string>
    <string name="phingers_component_tip_message">Put your fingers together. Move your hand closer or further away until your fingerprints come into focus.</string>
    <string name="phingers_component_tip_thumb_message">Focus your thumb inside the circle. Move your finger closer or further away until your print comes into focus.</string>
    <string name="phingers_component_tip_button">Start</string>
    <!-- Process -->
    <string name="phingers_component_capture_phingers">Hold fingers steady</string>
    <string name="phingers_component_capture_thumb">Hold finger steady</string>
    <string name="phingers_component_capture_phingers_not_focus">Move fingers until in focus</string>
    <string name="phingers_component_capture_thumb_not_focus">Move finger until in focus</string>
    <!-- Diagnostic -->
    <string name="phingers_component_timeout_title">Time exceeded</string>
    <string name="phingers_component_timeout_desc">We apologize. The capture could not be made</string>
    <string name="phingers_component_internal_error_title">There was a technical problem</string>
    <string name="phingers_component_internal_error_desc">We apologize. The capture could not be made</string>
```

### 8.2 Animations

Override Lottie animations by placing files in `res/raw/`:

```
phingers_anim_left.json
phingers_anim_right.json
phingers_anim_thumb.json
```

### 8.3 External Views

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

Filter console logs for this component by: `"PHINGERS:"`

