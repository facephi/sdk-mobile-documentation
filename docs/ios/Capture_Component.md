# File Upload and QR Management

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (**Components**) that offers a series of functionalities and services, allowing their integration into a Mobile application in a simple and fully scalable way. Depending on the required use case, the installation of specific components will be necessary. Its high level of modularity allows new components to be added in the future without affecting those already integrated in the project.

For more information about the base configuration, go to the [Getting Started](./Mobile_SDK#11-requisitos-mínimos) section.

---

## 1. Introduction

Document capture and QR reading and generation are performed with the CaptureComponent.  
This component allows uploading documents by taking a photo with the device’s camera or from the gallery.

## 2. Dependencies

To avoid conflicts and compatibility issues, if you want to install the component in a project that contains an old version of the Facephi (Widgets) libraries, they must be completely removed before installing the **SDKMobile** components.

### Cocoapods

- Facephi libraries are currently distributed remotely through different dependency managers, in this case Cocoapods. The **mandatory** dependencies that must have been previously installed (added to the project’s Podfile) are:

```java
pod 'FPHISDKMainComponent', '~> 2.4.0'
```

- To install the Capture component, the following entry must be added to the application's Podfile:

```java
pod 'FPHISDKCaptureComponent', '~> 2.4.0'
```

### SPM

- The mandatory dependencies that must have been previously installed are:  
HTTPS  
```java
https://github.com/facephi-clienters/SDK-SdkPackage-SPM.git
```
SSH  
```java
git@github.com:facephi-clienters/SDK-SdkPackage-SPM.git
```

- To install the Selphid component, it must be included in the project modules:

HTTPS  
```java
https://github.com/facephi-clienters/SDK-CapturePackage-SPM.git
```

SSH  
```java
git@github.com:facephi-clienters/SDK-CapturePackage-SPM.git
```

## 3. Available Controllers

### Simplified Launch

Once the SDK is initialized and a new operation is created, the component can be launched. Any of its controllers can be used to execute the functionality.

Launching document capture:
```swift
let controller = FileUploaderController(
    data: fileUploaderConfigurationData,
    output: { sdkResult in },
    viewController: viewController
)
SDKController.shared.launch(controller: controller)
```

Launching QR capture:
```swift
let controller = QrReaderController(
    data: qrReaderConfigurationData,
    output: { sdkResult in },
    viewController: viewController
)
SDKController.shared.launch(controller: controller)
```

Launching QR generation:
```swift
let controller = QrGeneratorController(
    data: qrGeneratorConfigurationData,
    output: { sdkResult in },
    viewController: viewController
)
SDKController.shared.launch(controller: controller)
```

## 4. Basic Configuration

For the document capture and QR capture controllers, the configuration can be generated using default parameters. For QR generation, the text to be used is required:

```swift
QrGeneratorConfiguration(source: "QR text")
```

## 5. Receipt of the result

The result is returned as an `SdkResult` that includes:
- errorType  
- finishStatus  
- data  

### Error's management

Errors will be returned as a `CaptureError` object.

List of errors:
```swift
CAP_ACTIVITY_RESULT_MSG_ERROR: The result returned by the activity is incorrect or does not contain the necessary information to continue.
CAP_APPLICATION_CONTEXT_ERROR: The required application context is null or invalid, preventing proper initialization of the capture module.
CAP_CAMERA_ERROR: An internal error related to the device camera has occurred (failure to open, initialize, or capture).
CAP_CAMERA_PERMISSION_DENIED: The user has denied the permissions necessary to access the camera.
CAP_CANCEL_BY_USER: The user has manually canceled the capture process.
CAP_CANCEL_LAUNCH: The process has been canceled generally by the SDK or by an external action.
CAP_COMPONENT_LICENSE_ERROR: The component license is invalid, expired, or does not match the required configuration.
CAP_EMPTY_LICENSE: The license string is empty or has not been provided.
CAP_FETCH_DATA_ERROR: An error occurred while obtaining or processing the data required to execute the flow. (Includes additional information in the error field.)
CAP_FLOW_ERROR: An internal error occurred during the execution of the capture flow. (Includes additional information in the error field.)
CAP_INITIALIZATION_ERROR: Error initializing the necessary SDK components. (Includes detailed information in the error field.)
CAP_FILE_UPLOADER_CAPTURE_ERROR: Error during the upload process of the files generated in the capture.
CAP_MANAGER_NOT_INITIALIZED: The managers required to execute the process have not been properly initialized.
CAP_NO_DATA_ERROR: The required input data is null, nonexistent, or insufficient to continue the process.
CAP_OPERATION_NOT_CREATED: An active operation needed to continue could not be created or retrieved. (Includes detailed information in the error field.)
CAP_QR_CAPTURE_ERROR: Error during the capture or reading of the QR code.
CAP_QR_GENERATION_ERROR: Error generating the requested QR code.
CAP_TIMEOUT: The maximum allowed time has been reached in one of the phases of the process.
CAP_FLOW_VIDEO_RECORDING_ERROR: Error during the video recording within the established flow.
CAP_FLOW_TRACKING_ERROR: Error performing the tracking required to complete the capture flow.
```
### Receiving successful execution - _data_

**Document capture result reception**  
In `SdkResult.Success - data`, the FileUploaderResult class is available.

The fields returned are:

_capturedDocumentList_

List of captured files. They can be images or PDFs. The returned fields for each one are:

- mimeType  
- timestampMillis  
- content: Document content, different depending on whether it is an image or a PDF.

**QR capture result reception**  
In `SdkResult.Success - data`, the QrResult class is available.

Returned fields:

_qrText_

Text obtained from the QR.

**QR generation result reception**  
In `SdkResult.Success - data`, an SdkImage with the generated QR is available.

## 6. Advanced Information

This section expands the component information.

### Advanced component configuration

**Document capture configuration**  
To launch this component, a FileUploaderConfigurationData object must be created.

The fields included in this class are:

- ```vibrationEnabled```: Activates vibration when the widget finishes successfully.
- ```extractionTimeout```: Sets the maximum capture time.
- ```showDiagnostic```: Shows diagnostic screens at the end of the process.
- ```showPreviousTip```: Displays a pre-capture screen with information and a start button.
- ```maxScannedDocs```: Maximum number of documents that can be captured.
- ```allowGallery```: Enables access to the gallery for obtaining images or PDFs.

**QR capture configuration**  
To launch this component, a QrCaptureConfigurationData object must be created.

Fields included:

- ```vibrationEnabled```: Indicates the activation of vibration when the widget finishes successfully.
- ```extractionTimeout```: Sets the maximum time allowed to perform the capture.
- ```showDiagnostic```: Displays diagnostic screens at the end of the process.
- ```showPreviousTip```: Shows a pre-capture screen with information about the process and a button to start it.
- ```showTutorial```: Indicates whether the component activates the tutorial screen. This view explains intuitively how the capture is performed.
- ```cameraShape```: Allows choosing between a square or circular mask.

## 7. Component Customization

Besides the changes that can be made at the SDK level (explained in the SDK Customization document), this component allows modifying its interface.

### Texts

```swift
"capture_component_qr_camera_message" = "Keep the QR in the center";
"capture_component_qr_tutorial_title" = "Scan QR Code";
"capture_component_qr_tutorial_desc" = "Focus the QR code inside the box";
"capture_component_qr_tutorial_button_message" = "START";
"capture_component_qr_tutorial_1" = "Make sure the QR code has enough light and there are no reflections or glare on the code.";
"capture_component_qr_tutorial_2" = "Fit the edges of the QR code inside the box.";
"capture_component_invoice_tip_button_message" = "START";
"capture_component_exit_alert_question" = "Are you sure you want to end the process? ";
"capture_component_exit_alert_accept" = "Accept";
"capture_component_exit_alert_cancel" = "Cancel";
"capture_component_invoice_finish_button_message" = "Finish";
"capture_component_invoice_preview_finish_button_message" = "FINISH";
"capture_component_invoice_remove_question" = "Do you want to remove this document?";
"capture_component_invoice_image_count_label" = "Image";
"capture_component_invoice_retry_button_message" = "NO, I WANT TO REPEAT THE PICTURE";
"capture_component_invoice_retry_add_image_message" = "ADD NEW PHOTO";
"capture_component_invoice_tip_title" = "Scan your documents";
"capture_component_invoice_tip_desc" = "Take a picture of the document, or upload an image.\nYou can scan several documents before finishing";
"capture_component_invoice_close_alt" = "Close";
"capture_component_invoice_upload_alt" = "Upload photo";
"capture_component_invoice_capture_alt" = "Capture";
"capture_component_invoice_remove_alt" = "Remove";
"capture_component_invoice_back_image_alt" = "Previous image";
"capture_component_invoice_forward_image_alt" = "Next image";
"capture_component_timeout_title"="Timeout";
"capture_component_timeout_desc"="We apologize. The capture could not be made";
"capture_component_logo_alt" = "Logo";
"capture_component_qr_generation_failed_alert_title" = "QR generation failed";
"capture_component_qr_generation_failed_alert_message" = "Please try again";

"capture_widget_tip_title" = "Document capture";
"capture_widget_tip_message" = "Place your finger inside the mark";
"capture_widget_tip_button" = "Start";
"capture_widget_tip_button_alt" = "Start fingerprint capture";
"capture_widget_tip_close_button_alt" = "Back";
"capture_widget_tip_info_button_alt" = "Show tips";
"capture_widget_tip_anim_desc" = "Instructional animation for fingerprint capture";
"capture_widget_document_camera_preview_placeholder" = "Camera preview will appear once you start the capture.";

"capture_widget_tip_title_document" = "Scan your documents";
"capture_widget_tip_message_document" = "Take a photo of the document, or upload an image.\n\nYou can scan multiple documents before finishing.";
"capture_widget_tip_message_document_alt" = "Take a photo of the document, or upload an image. You can scan multiple documents before finishing.";

"capture_widget_document_camera_button_gallery" = "Gallery";
"capture_widget_document_camera_button_capture" = "Capture";
"capture_widget_document_camera_button_cancel" = "Cancel capture";
"capture_widget_document_camera_button_finish" = "Finish";

"capture_widget_tutorial_message_1" = "Place your face in the center and face the camera.";
"capture_widget_tutorial_message_2" = "Remove any items covering your face.";
"capture_widget_tutorial_message_3" = "Look for a well-lit environment with no shadows on your face.";
"capture_widget_tutorial_message_1_anim_desc" = "The photo is taken when the person is in the centre.";
"capture_widget_tutorial_message_2_anim_desc" = "A person takes off his sunglasses and removes his hair from his eyes.";
"capture_widget_tutorial_message_3_anim_desc" = "The image appears dark and a person switches on the light.";
"capture_widget_tutorial_close_button_alt" = "Back to previous tutorial";

"capture_widget_image_captured" = "Image captured";
"capture_widget_confirmation_message" = "Are all the data read clearly and sharply?";
"capture_widget_confirmation_retry" = "NO, I WANT TO RETAKE THE PHOTO";
"capture_widget_confirmation_continue" = "Yes, finish";
"capture_widget_confirmation_delete" = "Delete photo";
"capture_widget_confirmation_image_unavailable" = "Preview not available";
"capture_widget_confirmation_no_images" = "No captures available";
"capture_widget_confirmation_delete_dialog_title" = "Do you want to delete this document?";
"capture_widget_confirmation_delete_dialog_message" = "Once you delete this document, you will not be able to recover it. You will need to take a new photo.";
"capture_widget_confirmation_delete_dialog_cancel" = "Cancel";
"capture_widget_confirmation_delete_dialog_confirm" = "DELETE DOCUMENT";
```


### Animations

To modify the SDK animations (lottie), include the animations with the same name in the application's res/raw/ folder.
```swift
qr_anim_tip_1.json  
qr_anim_tip_2.json  
capture_anim_tip.json
```
