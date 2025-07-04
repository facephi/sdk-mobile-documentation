# Video Id Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (**Components**) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Depending on the use
case that is required, certain components must be installed. Its high
level of modularity allows other new components to be added in the
future without affecting those already integrated in the project.

For more information on the base configuration, go to the
[Getting Started](./Mobile_SDK) section.

---

## 1. Introduction

The Component discussed in the current document is called VideoID
Component. It is responsible for the recording of a user identifying
himself, showing his face and his identity document.

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
  implementation "com.facephi.androidsdk:video_id_component:$sdk_videoid_component_version"
  ```

---

## 3. Start new operation

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

| **Controller**             | **Description**                         |
| -------------------------- | --------------------------------------- |
| VideoIdController          | Video identification main controller    |
| SignatureVideoIdController | Driver to sign a process with a Capture |

---

## 5. Component configuration

To configure the current component, once it has been initialised, a
_VideoIdConfigurationData_ object must be created and passed as a
parameter to the SDKController when the component is launched.

The following section will show the fields that are part of this class
and what each of them is used for.

### 5.1. Class VideoIdConfigurationData

The fields included in the configuration **(url, apiKey, tenantId)**,
usually **do not need to be reported** as they are filled internally
through the licence used.

These fields are usually **reported only** when the server is
**OnPremise**.

#### 5.1.1. url

Path to the video socket

#### 5.1.2. apiKey

ApiKey needed for connection to the video socket

#### 5.1.3. tenantId

Tenant identifier referring to the current client, required for the
connection to the video service.

#### 5.1.4. sectionTime

Indicates the duration of sections with associated time (facial capture and camera change).

#### 5.1.5. mode

- ONLY_FACE: process is necessarily performed by showing only the
  face.

- FACE_DOCUMENT_FRONT: The process is performed using both the face
  and the front of the identity document.

- FACE_DOCUMENT_FRONT_BACK: The process is performed using the face,
  the front of the identity document and the back of the document.

- DOCUMENT_FRONT: The process extracts data only from the front side of the document.

- DOCUMENT_FRONT_BACK: The process extracts only the information from the entire document.

#### 5.1.6. timeoutServerConnection

Maximum timeout in ms for server response.

#### 5.1.7. sectionTimeout

Maximum time allowed to complete a section (in ms).

#### 5.1.8. autoFaceDetection

Enables/Disables automatic face detection.

#### 5.1.9. debug

Enables the display of additional information useful for the diagnosis and monitoring of internal behaviour.

#### 5.1.10. countryFilter

It allows to restrict processing to a specific set of countries by accepting an array of strings representing the aliases in ISO3 format (3-letter code according to ISO 3166-1 standard).

#### 5.1.11. documentFilter

Allows to restrict the types of documents accepted during capture. Possible values are:

- "IDC": ID Card
- "PSP": Passport
- "DLI": Driver License
- "VIS": Visa
- "FOC": Foreign Card
- "INV": Invoice
- "CUS": Custom Document

#### 5.1.12. speechText

Text to be spoken by the user during the recording of the video.

#### 5.1.13. ocrValidations

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

#### 5.1.14. ocrMaxWarnings

Maximum number of warnings allowed in the OCR validation.

#### 5.1.15. maxRetries

Maximum number of retries allowed for the OCR validation. 3 is the default value.

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
    VideoIdController(VideoIdConfigurationData())
)
when (it) {
    is SdkResult.Error -> Napier.d("VideoId: ERROR - ${result.error.name}")
    is SdkResult.Success -> Napier.d("VideoId OK: ${result.data}")
}
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component normally, but **no event will be
  tracked** to the _tracking_ server:

```java
val result = SDKController.launchMethod(
    VideoIdController(VideoIdConfigurationData())
)
when (it) {
    is SdkResult.Error -> Napier.d("VideoId: ERROR - ${result.error.name}")
    is SdkResult.Success -> Napier.d("VideoId OK: ${result.data}")
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

On the error side, we will have the _VideoIdError_ class.

Error list:

- ACTIVITY_RESULT_MSG_ERROR: The result of the activity is incorrect.
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

### 7.2. Receipt of correct execution - _data_

The _data_ field is variable and will depend on which component the result is returned.
In the case of this component, the fields returned are the following:

#### 7.2.1 frontDocumentData

Data from the front of the document. Includes:

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

#### 7.2.2 backDocumentData

Data from the back of the document. Includes:

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

#### 7.2.3 faceImage

Image of the user captured in the first section of the process.

#### 7.2.4 ocrMap

OCR map extracted from the document.

#### 7.2.5 ocrDiagnostic

Dictionary with the OCR diagnostic of the document. The keys are the
fields to be validated and the values are instances of OcrDiagnostic.

OCR diagnostic extracted from the document.

- OK: The OCR is correct.
- NOT_FOUND: The OCR key is not found.
- TOLERANCE_ERROR: The OCR is not correct.
- WARNING: The OCR is not correct, but it is a warning because is an optional field.

#### 7.2.6 matchingSidesScore

Numerical value between 0 and 1 that estimates the level of coincidence between the sides of the document (front and back).

#### 7.2.7 documentType

Type of document obtained.

#### 7.2.8 personalData

Small set of data obtained from the user:

- issuer
- documentNumber
- issueDate
- expiryDate
- name
- surname
- fullName
- gender
- birthDate
- birthPlace
- nationality
- address
- nfcKey
- numSupport
- mrz

#### 7.2.9 speechText

Text to be spoken by the user during the recording of the video.

#### 7.2.10 faceImageTokenized

Tokenized image of the user captured in the first section of the process.

---

## 8. Customizing the component

Apart from the changes that can be made at SDK level (which are
explained in the [Getting Started](./Mobile_SDK)
document), this particular component allows the modification of specific
texts.

### 8.1. Texts

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

### 8.2. Animations

If you want to modify the animations (lottie) of the SDK you would have to include the animations with the same name in the res/raw/ folder of the application.

```text
video_id_anim_doc_and_face.json
video_id_anim_face.json
video_id_anim_loading.json
```

### 8.3 External custom views

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

To display the logs of this component on the console, you can use the filter: "VIDEO_ID:"
