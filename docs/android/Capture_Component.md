# File Upload and QR Management

## 1. Introduction

Document capture, as well as QR reading and generation, are performed
using the ***CaptureComponent***.

This component allows uploading documents either by taking a photo with
the device camera or selecting them from the gallery.

---

## 2. Dependency

The specific dependency for this component is:

``` java
implementation "com.facephi.androidsdk:capture_component:$version"
```

---

## 3. Available Controllers

| **Controller** | **Description**                         |
| --------------- | --------------------------------------- |
| FileUploaderController | Controller for document capture |
| QrReaderController      | Controller for QR capture     |
| QrGeneratorController   | Controller for QR generation   |


---

## 4. SQuick Launch

Once the SDK is initialized and a new operation has been created, the
component can be launched.
You may use any of its controllers to execute their functionality.

Launching document capture:

``` java
val response = SDKController.launch(
    FileUploaderController(FileUploaderConfigurationData(...))
)
when (response) {
    is SdkResult.Error -> Napier.d("ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

Launching QR capture:

``` java
val response = SDKController.launch(
    QrReaderController(QrCaptureConfigurationData(...))
)
when (response) {
    is SdkResult.Error -> Napier.d("ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

Launching QR generation:

``` java
val response = SDKController.launch(
    QrGeneratorController(QrGeneratorConfiguration(...))
)
when (response) {
    is SdkResult.Error -> Napier.d("ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

---

## 5. Basic Configuration

For both the document capture controller and the QR capture controller,
the configuration can be generated using default parameters.
For QR generation, the text to encode in the QR is required:

``` java
QrGeneratorConfiguration(source = "QR text")
```

---

## 6. Receiving the Result

The launch will return the information in an SdkResult.
A successful result can be differentiated from an error result as
follows:

``` java
when (response) {
    is SdkResult.Error -> Napier.d("ERROR - ${response.error}")
    is SdkResult.Success -> response.data
}
```

### 6.1. Handling Errors

Errors will be returned as a `CaptureError` object.

List of errors:

-   **CAP_ACTIVITY_RESULT_MSG_ERROR**: The result returned by the
    activity is incorrect or does not contain the required information
    to continue.
-   **CAP_APPLICATION_CONTEXT_ERROR**: The application context is null
    or invalid, preventing proper initialization of the capture module.
-   **CAP_CAMERA_ERROR**: An internal camera-related error has occurred
    (opening failure, initialization error, or capture issue).
-   **CAP_CAMERA_PERMISSION_DENIED**: The user denied the necessary
    camera permissions.
-   **CAP_CANCEL_BY_USER**: The user manually canceled the capture
    process.
-   **CAP_CANCEL_LAUNCH**: The process was canceled globally by the SDK
    or an external action.
-   **CAP_COMPONENT_LICENSE_ERROR**: The component license is invalid,
    expired, or does not match the required configuration.
-   **CAP_EMPTY_LICENSE**: The license string is empty or missing.
-   **CAP_FETCH_DATA_ERROR**: An error occurred while obtaining or
    processing the data required to run the flow. *(Includes additional
    information in the `error` field.)*
-   **CAP_FLOW_ERROR**: An internal error occurred during the execution
    of the capture flow. *(Includes additional information in the
    `error` field.)*
-   **CAP_INITIALIZATION_ERROR**: Error while initializing required SDK
    components. *(Includes detailed information in the `error` field.)*
-   **CAP_FILE_UPLOADER_CAPTURE_ERROR**: Error while uploading the files
    generated during capture.
-   **CAP_MANAGER_NOT_INITIALIZED**: The managers required to run the
    process were not properly initialized.
-   **CAP_NO_DATA_ERROR**: The input data is null, missing, or
    insufficient to continue.
-   **CAP_OPERATION_NOT_CREATED**: No active operation exists or it
    could not be created. *(Includes detailed information in the `error`
    field.)*
-   **CAP_QR_CAPTURE_ERROR**: Error during QR capture or reading.
-   **CAP_QR_GENERATION_ERROR**: Error generating the requested QR code.
-   **CAP_TIMEOUT**: The maximum allowed time was exceeded during one of
    the stages of the process.
-   **CAP_FLOW_VIDEO_RECORDING_ERROR**: Error during video recording
    within the configured flow.
-   **CAP_FLOW_TRACKING_ERROR**: Error performing the required tracking
    for the capture flow.

### 6.2. Handling Success – `data`

#### 6.2.1 Document Capture Result

In the SdkResult.Success - *data* section, you will receive an instance
of ***FileUploaderResult***.

The returned fields include:

##### 6.2.1.1 *capturedDocumentList*

List of captured files. These can be images or PDFs.
Each document contains the following fields:

-   mimeType
-   timestampMillis
-   content (varies depending on whether it is an image or a PDF)

To differentiate the content:

``` java
capturedDocumentList.forEach { documentData ->
    when (val content = documentData.content) {
        is FileContent.UploaderImage -> {
            // Uploader: New image found
            // content.image
        }

        is FileContent.UploaderDocument -> {
            // Uploader: New document found
            // content.bytes
        }
    }
}
```

#### 6.2.2 QR Capture Result

In the SdkResult.Success - *data* section, you will receive an instance
of ***QrResult***.

##### 6.2.2.1 *qrText*

Text extracted from the QR code.

#### 6.2.3 QR Generation Result

In the SdkResult.Success - *data* section, a **SdkImage** containing the
generated QR will be provided.

---

## 7. Advanced Information

This section expands on component functionality.

### 7.1 Advanced Component Configuration

#### 7.1.1 Document Capture Configuration

To launch the component, you must create a
***FileUploaderConfigurationData*** object, which acts as the controller
configuration.

Below are all the fields included in this class:

-   `vibrationEnabled`: Enables vibration when the widget finishes
    successfully.
-   `extractionTimeout`: Sets the maximum time allowed for capture.
-   `showDiagnostic`: Displays diagnostic screens at the end of the
    process.
-   `showPreviousTip`: Shows a pre-capture screen with instructions and
    a button to start the process.
-   `maxScannedDocs`: Maximum number of documents that can be captured.
-   `allowGallery`: Enables access to the gallery to select images or
    PDFs.

#### 7.1.2 QR Capture Configuration

To launch the QR capture component, a ***QrCaptureConfigurationData***
object must be created.

Fields included in this class:

-   `vibrationEnabled`: Enables vibration when the widget finishes
    successfully.
-   `extractionTimeout`: Sets the maximum capture time.
-   `showDiagnostic`: Displays diagnostic screens at the end of the
    process.
-   `showPreviousTip`: Shows a pre-capture screen with instructions and
    a button to start.
-   `showTutorial`: Displays a tutorial screen explaining how to perform
    the capture.
-   `cameraShape`: Allows choosing between a square or circular mask.

---

## 8. Component Customization

In addition to the customizable options at the SDK level\
(detailed in the [Advanced Settings](./Mobile_SDK_advanced) document),
this component allows UI customization.

### 8.1 Texts

To customize the SDK text strings, include the following XML file in the
client application and modify each string value as needed:

``` xml
<resources>
    <!-- Previous Tip -->
    <string name="capture_component_qr_tip_title">Scan QR Code</string>
    <string name="capture_component_qr_tip_message">&lt;b&gt; Focus &lt;/b&gt; the QR code &lt;b&gt; inside the box &lt;/b&gt;</string>
    <string name="capture_component_qr_tip_button">Start</string>
    <string name="capture_component_qr_tip_anim_desc">Animation of a mobile phone taking a photo of a QR code. A box appears on the phone screen. When the QR code fits inside the box, the application takes a photo.</string>
    <string name="capture_component_qr_tutorial_1_anim_desc">A QR code is shown on a white background. The edges of the QR code are not clearly distinguishable. Through an animation, the background changes color.</string>
    <string name="capture_component_qr_tutorial_2_anim_desc">A mobile phone takes a photo of a QR code. The QR code appears horizontally, and the phone vertically. A box appears on the phone screen. When the QR code fits inside the box, the application takes a photo.</string>
  
    <!-- Tutorial -->
    <string name="capture_component_qr_tutorial_1">Make sure the QR code has &lt;b&gt; enough light &lt;/b&gt; and there are &lt;b&gt; no reflections &lt;/b&gt; or glare on the code.</string>
    <string name="capture_component_qr_tutorial_2">Fit the edges of the QR code inside the box.</string>
    <!-- Process -->
    <string name="capture_component_qr_camera_message">Keep the QR in the center</string>
    <!-- Diagnostic -->
    <string name="capture_component_timeout_title">Time exceeded</string>
    <string name="capture_component_timeout_desc">We apologize. The capture could not be made</string>
    <string name="capture_component_internal_error_title">There was a technical problem</string>
    <string name="capture_component_internal_error_desc">We apologize. The capture could not be made</string>

    <!-- WIDGET -->
    <!-- Previous Tip -->
    <string name="capture_widget_tip_title">Scan Documents</string>
    <string name="capture_widget_tip_message">Take a photo of the document, or upload an image.&lt;br&gt;&lt;br&gt; You can scan several documents before finishing.</string>
    <string name="capture_widget_tip_message_alt">Take a photo of the document, or upload an image. You can scan multiple documents before finishing.</string>
    <string name="capture_widget_tip_button">Start</string>
    <string name="capture_widget_tip_button_alt">Start document capture</string>
    <string name="capture_widget_tip_close_button_alt">Back</string>
    <string name="capture_widget_tip_info_button_alt">Show tips</string>
    <string name="capture_widget_tip_anim_desc">Animation of a mobile phone taking a photo of a document. A box appears on the phone screen. When the document fits inside the box, the application takes a photo.</string>
    <!-- Camera -->
    <string name="capture_widget_document_camera_button_gallery">Gallery</string>
    <string name="capture_widget_document_camera_button_capture">Capture</string>
    <string name="capture_widget_document_camera_button_cancel">Cancel capture</string>
    <string name="capture_widget_document_camera_button_finish">Finish</string>
    <!-- Gallery -->
    <string name="capture_widget_gallery_images">Photo Library</string>
    <string name="capture_widget_gallery_pdf">Import PDF</string>
    <string name="capture_widget_gallery_cancel">Cancel</string>
    <!-- Confirmation -->
    <string name="capture_widget_image_captured">Image captured</string>
    <string name="capture_widget_confirmation_message">Are all the data read clearly and sharply?</string>
    <string name="capture_widget_confirmation_retry">NO, I WANT TO RETAKE THE PHOTOS</string>
    <string name="capture_widget_confirmation_continue">Yes, finish</string>
    <string name="capture_widget_confirmation_delete">Delete photo</string>
    <string name="capture_widget_confirmation_image_unavailable">Preview not available</string>
    <string name="capture_widget_confirmation_no_images">No captures available</string>
    <string name="capture_widget_confirmation_delete_dialog_title">Do you want to delete this document?</string>
    <string name="capture_widget_confirmation_delete_dialog_message">Once you delete this document, you will not be able to recover it. You will need to take a new photo.</string>
    <string name="capture_widget_confirmation_delete_dialog_cancel">Cancel</string>
    <string name="capture_widget_confirmation_delete_dialog_confirm">DELETE DOCUMENT</string>
    <!-- Diagnostic -->
    <string name="capture_widget_timeout_title">Time exceeded</string>
    <string name="capture_widget_timeout_desc">We apologize. The capture could not be made</string>
    <string name="capture_widget_internal_error_title">There was a technical problem</string>
    <string name="capture_widget_internal_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>
</resources>
```

### 8.2 Animations

If you want to customize the SDK animations (lottie), include files with
the same name in the app's **res/raw/** folder:

``` text
qr_anim_tip_1.json
qr_anim_tip_2.json
capture_anim_tip.json
```
