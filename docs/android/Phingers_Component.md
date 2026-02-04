# Fingerprint Capture

## 1. Introduction

Fingerprint capture is performed with the **Phingers Component**. This component handles capturing the user’s fingerprints and extracting templates. Its main processes are:

- Internal camera and permission management
- Multiple extraction modes (four-finger slap, thumb-only, etc.)
- Built-in liveness detection
- Guided assistance during capture
- Generation of fingerprint templates, images, and quality scores

**Important:** To generate fingerprint templates (the `template` field in `FingerResponse`), the device must have **3 GB of RAM or more**.

Refer to the [Quickstart](./Mobile_SDK) section for basic SDK integration. This section provides details for launching this component.

---

## 2. Dependency

Add the component-specific dependency:

```java
implementation "com.facephi.androidsdk:phingers_tf_component:$version"
```

---

## 3. Available Controllers

| **Controller**        | **Description**                                          |
| --------------------- | -------------------------------------------------------- |
| PhingersTFController  | Main controller for Phingers TF capture                  |
| FPhingersTFController | Flow controller for Phingers TF (Flow integrations only) |

---

## 4. Quick Launch

Once the SDK is initialized and a new operation has been created, launch the component:

```java
val response = SDKController.launch(
    PhingersTFController(
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
    fingerFilter       = FingerFilter.SLAP,
    templateType       = TemplateType.NIST_TEMPLATE
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

**TemplateType** options:

- `NIST_TEMPLATE`
- `ISO_TEMPLATE`
- `NIST_T5_TEMPLATE`

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

Errors are returned as a `PhingersError`. Possible reasons include:

- PHG_ACTIVITY_RESULT_ERROR: The activity result is invalid.
- PHG_ACTIVITY_RESULT_MSG_ERROR: The activity result message is invalid.
- PHG_APPLICATION_CONTEXT_ERROR: The application context is null.
- PHG_CANCEL_BY_USER: The user cancelled the process.
- PHG_CANCEL_LAUNCH: The SDK cancelled the launch.
- PHG_COMPONENT_LICENSE_ERROR: Invalid component license.
- PHG_EMPTY_LICENSE: Empty license string.
- PHG_FETCH_DATA_ERROR: Error retrieving the result.
- FLOW_ERROR: Error in the flow process.
- PHG_INITIALIZATION_ERROR: Initialization error.
- PHG_INTERNAL_ERROR: Internal error.
- PHG_LOW_QUALITY: Low image quality.
- PHG_MANAGER_NOT_INITIALIZED: Managers are null or not initialized.
- PHG_NO_DATA_ERROR: No data received from the capture.
- PHG_OPERATION_NOT_CREATED: No operation is in progress.
- PHG_PERMISSION_DENIED: User denied required permissions.
- PHG_AUTOFOCUS_FAILURE: Autofocus failure.
- PHG_CAMERA_FAILURE: Camera failure.
- PHG_CAPTURE_FAILURE: Capture failure.
- PHG_CONFIGURATION_FAILURE: Configuration error.
- PHG_FINGERPRINT_CAPTURE_FAILURE: Fingerprint capture failure.
- PHG_FINGERPRINT_TEMPLATE_IO_ERROR: Template IO failure.
- PHG_LICENSING_FAILURE: Licensing error.
- PHG_LIVENESS_FAILURE: Liveness check error.
- PHG_NO_FINGERS_DETECTED: No fingers detected.
- PHG_UNIQUE_USER_ID_NOT_SPECIFIED: User ID not specified.
- PHG_TIMEOUT: Timeout during capture.
- PHG_FLOW_VIDEO_RECORDING_ERROR: Flow video recording error.
- PHG_FLOW_TRACKING_ERROR: Flow tracking error.
- PHG_TRACKING_STEP_ERROR: Tracking step error.

### 6.2 Handling Success - `data`

On success (`SdkResult.Success`), you receive a `PhingersResult` object. Binary fields are returned as `ByteArray`. To convert to Base64:

```kotlin
Base64.encodeToString(byteArray, Base64.NO_WRAP)
```

The `PhingersResult` includes the following fields:

- **fingers**: List of `FingerResponse` (one entry per captured finger)
- **slapImages**: List of `SlapResponse` (slap captures when applicable)
- **livenessScore**: Average liveness score (nullable)

#### 6.2.1 `FingerResponse`

- **position**: Finger position index
- **wsq**: WSQ image (`ByteArray`)
- **displayImage**: Display image (`ByteArray`, PNG)
- **minutiaesNumber**: Number of minutiae detected
- **quality**: Quality score
- **nistQuality**: NIST quality score
- **nist2Quality**: NIST2 quality score
- **template**: Fingerprint template (`ByteArray`)
- **proprietaryQuality**: Vendor-specific quality score
- **templateType**: Template type identifier
- **imageWidth**: Image width in pixels
- **imageHeight**: Image height in pixels

#### 6.2.2 `SlapResponse`

- **position**: Slap position index
- **image**: Slap image (`ByteArray`)

---

## 7. Advanced Information

This section provides advanced configuration options for the Phingers Component.

### 7.1 Advanced Component Configuration

All fields of `PhingersConfigurationData`:

#### 7.1.1 reticleOrientation

Defines the capture orientation:

- **LEFT**: Capture left-hand fingers
- **RIGHT**: Capture right-hand fingers

#### 7.1.2 fingerFilter

Selects the capture mode (slap or specific fingers).

#### 7.1.3 templateType

Defines the template format to be generated (NIST/ISO variants).

#### 7.1.4 useLiveness

Enables or disables liveness detection. Default is `true`.

#### 7.1.5 extractionTimeout

Timeout for the extraction process in milliseconds. Default is `50000`.

#### 7.1.6 showPreviousTip

Shows a pre-launch information screen with a start button.

#### 7.1.7 showTutorial

Shows the tutorial screen explaining how to perform the capture.

#### 7.1.8 showDiagnostic

Shows diagnostic screens at the end of the process.

#### 7.1.9 threshold

Quality threshold for capture. The SDK clamps this value to the range `0.0-1.0`.

#### 7.1.10 showEllipses

Shows the ellipses overlay during capture.

#### 7.1.11 cropWidth

Crop width for segmented finger images (px). Values `<= 0` disable cropping; values are clamped to `64-2048`.

#### 7.1.12 cropHeight

Crop height for segmented finger images (px). Values `<= 0` disable cropping; values are clamped to `64-2048`.

#### 7.1.13 vibrationEnabled

Enables vibration feedback. Default is `true`.

#### 7.1.14 enableFlash

Enables the camera flash. Default is `true`.

#### 7.1.15 reticle

Optional reticle identifier. Default is `"R_S"`.

#### 7.1.16 showPreviousFingerSelector

Shows the finger selector screen before capture.

#### 7.1.17 fingerSelectorHandOrientation

Defines which hand(s) are available in the finger selector (`LEFT`, `RIGHT`, `BOTH`).

#### 7.1.18 fingerSelectorOptions

Defines the list of finger filters shown in the selector. If empty, the SDK uses:
`ALL_4_FINGERS_ONE_BY_ONE`, `SLAP`, `INDEX_FINGER`.

---

## 8. Component Customization

Beyond SDK-level settings (see [Advanced Settings](./Mobile_SDK_advanced)), you can modify the UI.

### 8.1 Texts

Override default texts by adding an XML file in your app:

```xml
<!-- Tutorial / Previous Tip -->
<string name="phingers_tf_component_tutorial_left_title">Left hand prints</string>
<string name="phingers_tf_component_tutorial_right_title">Right hand prints</string>
<string name="phingers_tf_component_tutorial_thumb_title">Thumbprint</string>
<string name="phingers_tf_component_tutorial_message_left_slap">Put your fingers together. Move your hand closer or further away until your fingerprints come into focus.</string>
<string name="phingers_tf_component_tutorial_message_right_slap">Bring your fingers together. Move your hand closer or further until your fingerprints are in focus.</string>
<string name="phingers_tf_component_tutorial_message_left_index_finger">Place the left hand index finger. Move the finger closer or further until your fingerprint is in focus.</string>
<string name="phingers_tf_component_tutorial_message_right_index_finger">Place the right hand index finger. Move the finger closer or further until your fingerprint is in focus.</string>
<string name="phingers_tf_component_tutorial_thumb_message">Focus your thumb inside the circle. Move your finger closer or further away until your print comes into focus.</string>
<string name="phingers_tf_component_tutorial_button">Start</string>
<!-- Diagnostic -->
<string name="phingers_tf_component_timeout_title">Time exceeded</string>
<string name="phingers_tf_component_timeout_desc">We apologize. The capture could not be made</string>
<string name="phingers_tf_component_internal_error_title">There was a technical problem</string>
<string name="phingers_tf_component_internal_error_desc">We apologize. The capture could not be made</string>
```

### 8.2 Animations

Override Lottie animations by placing files in `res/raw/`:

```
phingers_anim_left.json
phingers_anim_right.json
phingers_anim_thumb.json
phingers_anim_left_finger.json
phingers_anim_right_finger.json
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

Once the classes that implement the interfaces have been created, the `customViews` parameter can be added at component launch to be used in the SDK.

---

## 9. Logs

Filter console logs for this component by: `"PHINGERS_TF:"`
