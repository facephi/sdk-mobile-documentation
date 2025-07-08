# Video Identification

## 1. Introduction

Video identification is performed with the **VideoId Component**.

This component is responsible for recording a user identifying themselves by presenting their face and identity document.

Its main processes include:

- Internal management of camera, microphone, and permissions
- Connection to video services
- OCR reading and document capture

Refer to the [Quickstart](./Mobile_SDK) section for basic SDK integration steps. This guide adds details specific to launching this component.

---

## 2. Dependency

The component-specific dependency is:

```java
implementation "com.facephi.androidsdk:video_id_component:$version"
```

---

## 3. Available Controllers

| **Controller**            | **Description**                                              |
| ------------------------- | ------------------------------------------------------------ |
| VideoIdController         | Main controller for video identification                     |
| SignatureVideoIdController| Controller for signing a process with a capture               |

---

## 4. Quick Launch

Once the SDK is initialized and a new operation has been created, launch the component using any of its controllers:

```java
val response = SDKController.launch(
    VideoIdController(
        VideoIdConfigurationData(...)
    )
)

when (response) {
    is SdkResult.Error   -> Napier.d("ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

---

## 5. Basic Configuration

To launch the component, create a `VideoIdConfigurationData` object with the following field:

```java
VideoIdConfigurationData(
    mode = VideoIdMode.DOCUMENT_FRONT_BACK
)
```

Available `VideoIdMode` values:

- `VideoIdMode.ONLY_FACE`
- `VideoIdMode.FACE_DOCUMENT_FRONT`
- `VideoIdMode.FACE_DOCUMENT_FRONT_BACK`
- `VideoIdMode.DOCUMENT_FRONT`
- `VideoIdMode.DOCUMENT_FRONT_BACK`

---

## 6. Receiving the Result

The launch returns an `SdkResult`, allowing you to differentiate between success and error:

```java
when (response) {
    is SdkResult.Error   -> Napier.d("ERROR - ${response.error}")
    is SdkResult.Success -> response.data
}
```

### 6.1 Handling Errors

Errors are returned as a `VideoIdError` object. Possible values include:

- APPLICATION_CONTEXT_ERROR: Required application context is null
- CANCEL_BY_USER: User has cancelled the process
- CANCEL_LAUNCH: A general cancellation of the SDK has been done.
- COMPONENT_LICENSE_ERROR: The license of the component is not correct
- EMPTY_LICENSE: License String is empty
- FACE_DETECTION_TIMEOUT: No face detected
- FETCH_DATA_ERROR: Error in the result collection
- FLOW_ERROR: Error in the flow process
- INITIALIZATION_ERROR: Initialisation error
- MANAGER_NOT_INITIALIZED: Managers are nil
- NETWORK_CONNECTION: Error in internet connection
- NO_DATA_ERROR: Input data is null
- OPERATION_NOT_CREATED: No operation in progress
- PERMISSION_DENIED: User has denied permissions
- SOCKET_ERROR: Error in the connection of services
- TIMEOUT: Timeout in the process
- VIDEO_ERROR: Error in video processing
- VIDEO_RECORDING_ACTIVE: Cannot start because the video recording process is active.

### 6.2 Handling Success – `data`

On success (`SdkResult.Success`), you receive a `VideoIdResult` object. Images are returned as `SdkImage`; extract the bitmap via `image.bitmap`. To convert to Base64:

```kotlin
Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)
```

The `VideoIdResult` includes the following fields:

#### 6.2.1 `frontDocumentData`

Data for the front of the document, including:

- documentImage: Image of the document
- documentFullImage: Complete frame
- documentFaceImage: If a face has been found in the document, the image of the face is returned.
- iqaOverExposure: Numerical value between 0 and 1 indicating the level of overexposure of the image; a high value
  suggests that the image is too bright, which may make the document difficult to read.
- iqaReadable: Numerical value between 0 and 1 indicating the readability of the text in the document; higher values
  imply that the text is clearer and easier to recognise.
- iqaSharpness: Numerical value between 0 and 1 indicating the sharpness of the document image; higher values
  reflect a more focused image, which improves the data extraction capability.
- documentFaceImageTokenized: If a face has been found in the document, the tokenized image of the face is returned.


#### 6.2.2 `backDocumentData`

Data for the back of the document, including the same fields as `frontDocumentData`.

#### 6.2.3 `faceImage`

User’s face recording from the first section of the process.

#### 6.2.4 `ocrMap`

Map of OCR-extracted values from the document.

#### 6.2.5 `ocrDiagnostic`

Dictionary with the OCR diagnostic of the document. The keys are the
fields to be validated and the values are instances of OcrDiagnostic.

OCR diagnostic extracted from the document.

- OK: The OCR is correct.
- NOT_FOUND: The OCR key is not found.
- TOLERANCE_ERROR: The OCR is not correct.
- WARNING: The OCR is not correct, but it is a warning because is an optional field.

#### 6.2.6 `matchingSidesScore`

Similarity score (0.0–1.0) between front and back document data.

#### 6.2.7 `documentType`

Detected document type.

#### 6.2.8 `personalData`

Subset of extracted personal data:
- `issuer`
- `documentNumber`
- `issueDate`
- `expiryDate`
- `name`
- `surname`
- `fullName`
- `gender`
- `birthDate`
- `birthPlace`
- `nationality`
- `address`
- `nfcKey`
- `numSupport`
- `mrz`

#### 6.2.9 `speechText`

Text the user must speak during the video recording.

#### 6.2.10 `faceImageTokenized`

Tokenized face image captured during the process.

---

## 7. Advanced Information

This section provides advanced configuration options for the VideoId Component.

### 7.1 Advanced Component Configuration

List of fields in `VideoIdConfigurationData`.

The fields included in the configuration **(url, apiKey, tenantId)**,
usually **do not need to be reported** as they are filled internally
through the licence used.

These fields are usually **reported only** when the server is
**OnPremise**.

#### 7.1.1. url

Path to the video socket

#### 7.1.2. apiKey

ApiKey needed for connection to the video socket

#### 7.1.3. tenantId

Tenant identifier referring to the current client, required for the
connection to the video service.

#### 7.1.4. sectionTime

Indicates the duration of sections with associated time (facial capture and camera change).

#### 7.1.5. mode

- ONLY_FACE: process is necessarily performed by showing only the
  face.

- FACE_DOCUMENT_FRONT: The process is performed using both the face
  and the front of the identity document.

- FACE_DOCUMENT_FRONT_BACK: The process is performed using the face,
  the front of the identity document and the back of the document.

- DOCUMENT_FRONT: The process extracts data only from the front side of the document.

- DOCUMENT_FRONT_BACK: The process extracts only the information from the entire document.

#### 7.1.6. timeoutServerConnection

Maximum timeout in ms for server response.

#### 7.1.7. sectionTimeout

Maximum time allowed to complete a section (in ms).

#### 7.1.8. autoFaceDetection

Enables/Disables automatic face detection.

#### 7.1.9. debug

Enables the display of additional information useful for the diagnosis and monitoring of internal behaviour.

#### 7.1.10. countryFilter

It allows to restrict processing to a specific set of countries by accepting an array of strings representing the aliases in ISO3 format (3-letter code according to ISO 3166-1 standard).

#### 7.1.11. documentFilter

Allows to restrict the types of documents accepted during capture. Possible values are:

- "IDC": ID Card
- "PSP": Passport
- "DLI": Driver License
- "VIS": Visa
- "FOC": Foreign Card
- "INV": Invoice
- "CUS": Custom Document

#### 7.1.12. speechText

Text to be spoken by the user during the recording of the video.

#### 7.1.13. ocrValidations

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

#### 7.1.14. ocrMaxWarnings

Maximum number of warnings allowed in the OCR validation.

#### 7.1.15. maxRetries

Maximum number of retries allowed for the OCR validation. 3 is the default value.

---

## 8. Component Customization

Beyond SDK-level settings ([Advanced Settings](./Mobile_SDK_advanced)), this component allows interface customization.

### 8.1 Texts

If you want to modify the SDK texts, you would have to include the
following XML file in the client application, and modify the value of
each String to the desired one.

```xml
    <!-- Waiting -->
    <string name="video_id_component_text_waiting_agent_title">Video ID</string>
    <!-- Process -->
    <string name="video_id_component_document_front_message">Place the front of your document within the frame</string>
    <string name="video_id_component_document_front_message_readable">Keep the front of your document within the frame</string>
    <string name="video_id_component_document_front_message_not_readable">Bring the front of your document closer to the frame</string>
    <string name="video_id_component_document_front_message_finish">Front of document captured correctly</string>
    <string name="video_id_component_document_back_message">Now place the back of your document</string>
    <string name="video_id_component_document_back_message_readable">Keep the back of your document within the frame</string>
    <string name="video_id_component_document_back_message_not_readable">Bring the back of your document closer to the frame</string>
    <string name="video_id_component_document_back_message_finish">Back of document captured correctly</string>
    <string name="video_id_component_switch_camera_message">Prepare your document while the camera is being changed</string>
    <string name="video_id_component_init_message_face_content_desc">Place your face in front of the camera and start recording</string>
    <string name="video_id_component_init_message_face_docu_content_desc">Place your face and your document in front of the camera and start recording</string>
    <string name="video_id_component_speech_message">I (name and surname) accept the terms and conditions</string>
    <string name="video_id_component_speech_say_out_loud">Say out loud </string>
    <string name="video_id_component_finish_message">Video recording\ncompleted</string>
    <string name="video_id_component_record_init_button">Start recording</string>
    <string name="video_id_component_ready_button">Ready</string>
    <string name="video_id_component_first_message_face">Place your face within the frame</string>
    <string name="video_id_component_first_message_multiple_face">Multiple faces detected. Place only your face within the frame. </string>
    <!-- Diagnostic -->
    <string name="video_id_component_restart">Repeat recording</string>
    <string name="video_id_component_timeout_title">Time exceeded</string>
    <string name="video_id_component_timeout_desc">We apologize. The capture could not be made</string>
    <string name="video_id_component_face_timeout_desc">Please place yourself on the marks to start recording.</string>
    <string name="video_id_component_internal_error_title">There was a technical problem</string>
    <string name="video_id_component_internal_error_desc">We apologize. The capture could not be made</string>

```

### 8.2 Animations

If you want to modify the animations (lottie) of the SDK you would have to include the animations with the same name in the res/raw/ folder of the application.

```text
video_id_anim_doc_and_face.json
video_id_anim_face.json
video_id_anim_loading.json
```

### 8.3 External Views

It is possible to completely modify the component screens while maintaining their functionality and navigation. To do so, the following interfaces must be implemented:

Error diagnosis screen:

```kotlin

interface IVideoIdErrorDiagnosticView {
    @Composable
    fun Content(
        error: VideoIdError,
        onRetry: () -> Unit,
        onClose: () -> Unit,
    )
}

```

Once the classes that implement the interfaces have been created, the "customViews" parameter can be added at component launch to be used in the SDK.

---

## 9. Logs

Filter console logs for this component with: `"VIDEO_ID:"`

