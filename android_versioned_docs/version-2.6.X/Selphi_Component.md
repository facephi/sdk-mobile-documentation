# Facial Capture

## 1. Introduction

Facial capture is performed with the **Selphi Component**.

This component is responsible for capturing a user selfie and extracting the most important facial features. Its main processes are:

- Internal camera and permission management.
- Guided assistance during the user’s facial capture process.
- Generation of facial templates and the user image.

Refer to the [Quickstart](./Mobile_SDK) section for the basic SDK integration steps. This guide adds information specific to launching this component.

---

## 2. Dependency

The component-specific dependency is:

```java
implementation "com.facephi.androidsdk:selphi_component:$version"
```

---

## 3. Available Controllers

| **Controller**            | **Description**                                       |
| ------------------------- | ----------------------------------------------------- |
| SelphiController          | Main facial recognition controller                    |
| RawTemplateController     | Controller to generate a RawTemplate from an image    |
| SignatureSelphiController | Controller to create a signature file in the platform |

---

## 4. Quick Launch

Once the SDK is initialized and a new operation has been created, launch the component by using any of its controllers.

Facial capture launch:

```java
val response = SDKController.launch(
    SelphiController(
        SelphiConfigurationData(...)
    )
)
when (response) {
    is SdkResult.Error   -> Napier.d("Selphi: ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

---

## 5. Basic Configuration

To launch the component, create a `SelphiConfigurationData` object with the following fields:

```java
SelphiConfigurationData(
  resourcesPath  = "resources_file.zip",
  livenessMode   = SelphiFaceLivenessMode.NONE
)
```

Available `livenessMode` values:

- `SelphiFaceLivenessMode.NONE`
- `SelphiFaceLivenessMode.PASSIVE`
- `SelphiFaceLivenessMode.MOVE`

---

## 6. Receiving the Result

The launch returns an `SdkResult`. Differentiate between success and error:

```java
when (response) {
    is SdkResult.Error   -> Napier.d("ERROR - ${response.error}")
    is SdkResult.Success -> response.data
}
```

### 6.1 Handling Errors

Errors are returned as a `SelphiError` object. Possible values include:

- SPI_ACTIVITY_RESULT_ERROR: The result of the activity is incorrect.
- SPI_ACTIVITY_RESULT_MSG_ERROR: The result of the activity received in the msg is incorrect.
- SPI_APPLICATION_CONTEXT_ERROR: The required application context is null.
- SPI_BAD_EXTRACTOR_CONFIGURATION_ERROR: Widget: Incorrect extractor configuration.
- SPI_CAMERA_PERMISSION_DENIED: User has rejected permissions.
- SPI_CANCEL_BY_USER: The user has cancelled the process.
- SPI_CANCEL_LAUNCH: A general cancellation of the SDK has been done.
- SPI_COMPONENT_LICENSE_ERROR: The component license is not correct.
- SPI_CONTROL_NOT_INITIALIZATED_ERROR: Widget: Initialisation error.
- SPI_EMPTY_LICENSE: The license string is empty.
- SPI_EXTRACTION_LICENSE_ERROR: Widget: License error.
- SPI_FETCH_DATA_ERROR: Error in the collection of the result.
- SPI_FLOW_ERROR: Error in the flow process.
- SPI_HARDWARE_ERROR: Widget: Hardware error.
- SPI_INITIALIZATION_ERROR: Initialisation error.
- SPI_MANAGER_NOT_INITIALIZED: Managers are null.
- SPI_NO_DATA_ERROR: Input data is null.
- SPI_OPERATION_NOT_CREATED: No operation is in progress.
- SPI_RESOURCES_NOT_FOUND: Resource zip not found.
- SPI_SETTINGS_PERMISSION_ERROR: Widget: Permission error.
- SPI_TEMPLATE_ERROR:
- SPI_TIMEOUT: Timeout in process.
- SPI_UNEXPECTED_CAPTURE_ERROR: Widget: Capture error.
- SPI_UNKNOWN_ERROR: Unknown error.
- SPI_WIDGET_RESULT_DATA_ERROR: Error in widget output data.

### 6.2 Handling Success – `data`

On success (`SdkResult.Success`), you receive a `SelphiResult` object. Images are returned as `SdkImage`; extract the bitmap via `image.bitmap`. To convert to Base64:

```kotlin
Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)
```

Returned fields in `SelphiResult`:

#### 6.2.1 _templateRaw_

Raw template generated after extraction, valid for matching.

#### 6.2.2 _template_

Processed template generated after extraction, valid for matching.

#### 6.2.3 _bestImage_

Best full-size image from the authentication process, valid for liveness checks.

#### 6.2.4 _bestImageCropped_

Cropped image centered on the user’s face, derived from `bestImage`.

#### 6.2.5 _logImages_

List of the top 5 captured images (returned if `logImages` flag is enabled).

#### 6.2.6 _bestImageTokenized_

Encrypted best image from the liveness process.

#### 6.2.7 _livenessDiagnostic_

Information about the verification process that confirms that the person is physically present and real.

---

## 7. Advanced Information

This section provides extended details for this component.

### 7.1 Additional Controllers

#### 7.1.1 SignatureSelphiController

Used like `SelphiController` but generates a signature file on the platform.

#### 7.1.2 RawTemplateController

Generates a `RawTemplate` from a given image (`SdkImage`).

Example:

```java
val result = SDKController.launch(
    RawTemplateController(SdkImage(image))
)
when (result) {
    is SdkResult.Error   -> Napier.d("GenerateRaw: KO - ${result.error}")
    is SdkResult.Success -> result.data
}
```

### 7.2 Advanced Component Configuration

Create a `SelphiConfigurationData` object with all available fields:

#### 7.2.0 `debug`

Enables debug mode.

#### 7.2.1 `resourcesPath`

Name of the zip file in `assets` (ex. `resources-selphi-2-0.zip`).

#### 7.2.2 `cropPercent`

Percentage to crop around the face; higher values yield a tighter crop.

#### 7.2.3 `cropImageDebug`

Enables debug view for crop percentage.

#### 7.2.4 `showResultAfterCapture`

Whether to show a screen with the captured image for user review.

#### 7.2.5 `showTutorial`

Enables tutorial screen explaining the capture process.

#### 7.2.6 `livenessMode`

Sets the liveness detection mode:

- `NONE`
- `PASSIVE`
- `MOVE`

#### 7.2.7 `stabilizationMode`

Requires the user to hold head steady and forward before starting.

#### 7.2.8 `cameraFlashEnabled`

Enables device camera flash.

#### 7.2.9 `locale`

Forces widget to use a specific locale (e.g. `en`, `en_US`).

#### 7.2.10 `fullscreen`

Displays the widget full-screen if supported.

#### 7.2.11 `templateRawOptimized`

Optimizes `templateRaw` if true.

#### 7.2.12 `qrMode`

Enables QR scanning before authentication.

#### 7.2.13 `videoFilename`

Absolute path for recording capture video; the app must handle permissions.

#### 7.2.14 `viewsContent`

Custom XML layout string for widget views.

#### 7.2.15 `showDiagnostic`

Shows diagnostic screens at the end.

#### 7.2.16 `logImages`

Returns top 5 images when enabled.

#### 7.2.17 `showPreviousTip`

Shows a pre-capture tip screen with launch info.

#### 7.2.18 `extractionDuration`

Duration of the facial extraction process.

#### 7.2.19 `cameraPreferred`

Preferred camera (`FRONT` or `BACK`).

#### 7.2.20 `vibrationEnabled`

Enables vibration feedback at process end.

#### 7.2.21 `moveSuccessfulAttempts`

Number of retries for successful MOVE liveness (default 1).

#### 7.2.22 `moveFailedAttempts`

Number of retries for failed MOVE liveness (default 2).

---

## 8. Component Customization

Beyond SDK-wide settings ([Advanced Settings](./Mobile_SDK_advanced)), this component allows:

### 8.1 Texts

Override default strings by providing an XML in your app:

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

### 8.2 Animations

Override Lottie animations by placing JSON files in `res/raw/`:

```
selphi_anim_prev_tip.json
selphi_anim_prev_tip_move.json
selphi_anim_tuto_m_1.json
selphi_anim_tuto_m_2.json
selphi_anim_tuto_m_3.json
```

---
