# Capture Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (**Components**) that offers a series of functionalities and services
a series of functionalities and services, allowing its integration in a mobile application
integration in a Mobile application in a simple and fully scalable way.
scalable. Depending on the use case required, certain components must be installed. Its high level of modularity allows other new components to be added in the future without affecting those already integrated in the project.

For more information on the base configuration, go to the section on
<a href='Mobile_SDK'
data-linked-resource-id='2605285492' data-linked-resource-version='11'
data-linked-resource-type='page'>Mobile SDK</a>.

Translated with DeepL.com (free version)

---

## 1. Introduction

The Component discussed in the current document is called **_Capture Component_**. It is responsible for the invoice capture and the capture and generation of QRs.

## 1.1 Minimum requirements
The minimum iOS SDK version required is as follows:

Minimum iOS version: **14**
---

## 2. Integration of the component

<div class="warning">
<span class="warning">:warning:</span>
Before integrating this component, it is recommended to read the <a href="Mobile_SDK" documentation
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page">Mobile SDK</a> and follow the instructions indicated in said document.
</div>
This section will explain step by step how to integrate the component
current in an existing project.

### 2.1. Dependencies required for integration
<div class="warning">
<span class="warning">:warning:</span>
To avoid conflicts and compatibility problems, if you want
install the component in a project that contains an old version
from the Facephi libraries (_Widgets_), these must be removed by
complete before installing the components of the
**_SDKMobile_**.
</div>
#### Cocoapods
- Currently the FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The **mandatory** dependencies that must have been previously installed (adding them to the project's Podfile file) are:

```
 pod 'FPHISDKMainComponent', '~> 2.0.0'
```
- To install the VideoID component, the following entry must be included in the application's Podfile:
```
  pod 'FPHISDKCaptureComponent', '~>2.0.4'
```
- Once the dependencies are installed, you can use the different functionalities of the component.

- If developing with **xCode15**, a post-installation script must be included:
![Image](/iOS/fix_ldClassic.png)

## 2.2 Permissions and settings
In the client application where the components are going to be integrated, it is necessary to incorporate the following elements in the file **info.plist**
```
It is necessary to allow the use of the camera (Privacy - Camera Usage Description)
```

---

## 3. Start new operation

When you want to perform a certain operation, to generate the associated information correctly on the platform, the **newOperation** command must be previously executed.
<div class="note">
<span class="note">:information_source:</span>
This command must have been run **prior to launching the component**.

To learn more about how to start a new operation, it is recommended to consult the <a href="Mobile_SDK" 
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page"> Mobile SDK</a> documentation , which details and explains what this process consists of.
</div>

---

## 4. Available controllers

| **Controller**            | **Description**            |
| ------------------------- | -------------------------- |
| InvoiceReaderController   | Invoice capture controller |
| QrReaderController        | QR capture controller      |
| QrGeneratorController     | QR generator controller    |

---

## 5. Component configuration

The three controllers have independent functionalities so their configurations are also independent:

- _InvoiceCaptureConfigurationData_ and pass it as a parameter to the SDKController during the launch of the component for Invoice.

- _QrCaptureConfigurationData_ and pass it as a parameter to the SDKController during the launch of the QR capture component

- _QrGeneratorConfiguration_ and pass it as a parameter to the SDKController during the launch of the QR generation component.

The following section will show the fields that are part of
These classes and what each of them is used for.

### 5.1. Class InvoiceCaptureConfigurationData

#### 5.1.1 vibrationEnabled

Enable vibration during the process

#### 5.1.2 showDiagnostic

Show diagnostic screens at the end of the process and in case of error

#### 5.1.3 showTutorial

Indicates whether the component activates the tutorial screen. This view explains intuitively how the capture is performed.

#### 5.1.4 timePreview

The time in milliseconds that the preview lasts after the capture is defined, by default it is 2000

#### 5.1.5 numUploadPhoto

Number of images that can be added from the gallery, by default it is 5

#### 5.1.6 previewAfterCapture

Preview is enabled after capture


### 5.2. Class QrCaptureConfigurationData

#### 5.1.1. extractionTimeout

Maximum extraction time

#### 5.1.2. cameraSelected

Selected camera: FRONT, BACK

#### 5.1.3. cameraShape

Shape of the mask that you want to show on the camera:

- SQUARE: Square
- CIRCULAR: Circle
- RECTANGLE_TALL: Rectangle

#### 5.1.4. vibrationEnabled

Enable vibration during the process

#### 5.1.5. showStroke

Show a line as camera border

#### 5.1.6. showDiagnostic

Show diagnostic screens at the end of the process and in case of error

#### 5.1.7. transparentBackground

Mask over the semi-transparent camera

### 5.3. Class QrGeneratorConfiguration

#### 5.3.1. source

Text to be included in the QR

#### 5.3.2. width

Width of the generated QR

#### 5.3.3. height

Height of the generated QR

#### 5.3.4 showDiagnostic

Show diagnostic screens at the end of the process and in case of error

---

## 6. Use of the component

### 6.1 Invoice capture

Once the component has been started and a new operation has been created (**section
3**) the SDK components can be launched. There are two ways to launch
the component:

- **\[WITH TRACKING\]** This call allows launching the functionality
 of the component normally, but the events will be tracked
 internal to the _tracking_ server:

```java
let controller = InvoiceReaderController(data: invoiceCaptureConfigurationData, output: output, viewController: viewController)
SDKController.shared.launch(controller: controller)
```

- **\[NO TRACKING\]** This call allows launching the functionality
 of the component normally, but **will not be tracked** any
 event to _tracking_ server:

```java
let controller = InvoiceReaderController(data: invoiceCaptureConfigurationData, output: output, viewController: viewController)
SDKController.shared.launchMethod(controller: controller)
```

<div class="warning">
<span class="warning">:warning:</span>
The **launch** method should be used **by default**. This method allows
use **_tracking_** if its component is activated, and do not
will be used when it is disabled (or the component is not found
installed).

On the contrary, the **launchMethod** method covers a special case, in
which the integrator has tracking installed and activated, but in a
certain flow within the application you do not want to track information.
In that case, this method is used to prevent that information from being sent.
to the platform.
</div>

### 6.2 QR Capture

Once the component has been started and a new operation has been created (**section
3**) the SDK components can be launched. There are two ways to launch
the component:

- **\[WITH TRACKING\]** This call allows launching the functionality
 of the component normally, but the events will be tracked
 internal to the _tracking_ server:

```java
 let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)

 SDKController.shared.launch(controller: controller)

```

- **\[NO TRACKING\]** This call allows launching the functionality
 of the component normally, but **will not be tracked** any
 event to _tracking_ server:

```java
 let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)
 SDKController.shared.launchMethod(controller: controller)

```

<div class="warning">
<span class="warning">:warning:</span>
The **launch** method should be used **by default**. This method allows
use **_tracking_** if its component is activated, and do not
will be used when it is disabled (or the component is not found
installed).

On the contrary, the **launchMethod** method covers a special case, in
which the integrator has tracking installed and activated, but in a
certain flow within the application you do not want to track information.
In that case, this method is used to prevent that information from being sent.
to the platform.
</div>

### 6.3 QR Generation

Once the component has been started and a new operation has been created (**section
3**) the SDK components can be launched. There are two ways to launch
the component:

- **\[WITH TRACKING\]** This call allows launching the functionality
 of the component normally, but the events will be tracked
 internal to the _tracking_ server:

```java
 let controller = QrGeneratorController(data: qrGeneratorConfigurationData, output: output, viewController: viewController)
 SDKController.shared.launch(controller: controller)

```

- **\[NO TRACKING\]** This call allows launching the functionality
 of the component normally, but **will not be tracked** any
 event to _tracking_ server:

```java
 let controller = QrGeneratorController(data: qrGeneratorConfigurationData, output: output, viewController: viewController)
 SDKController.shared.launchMethod(controller: controller)
```

<div class="warning">
<span class="warning">:warning:</span>
The **launch** method should be used **by default**. This method allows
use **_tracking_** if its component is activated, and do not
will be used when it is disabled (or the component is not found
installed).

On the contrary, the **launchMethod** method covers a special case, in
which the integrator has tracking installed and activated, but in a
certain flow within the application you do not want to track information.
In that case, this method is used to prevent that information from being sent.
to the platform.
</div>

---

## 7. Reception of the result

The controllers will return the necessary information in SdkResult format. More information in the [<a href="ES_Mobile_SDK" section
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page">Mobile SDK</a>.

### 7.1. Error reception

In the error part, we will have the _CaptureError_ class.

```java
 NO_DATA_ERROR
 TIMEOUT
 CANCEL_BY_USER
 CANCEL_LAUNCH
 CAMERA_ERROR
 QR_GENERATION_ERROR
 ACTIVITY_RESULT_ERROR
 QR_CAPTURE_ERROR
 PHACTURAS_CAPTURE_ERROR
 CAMERA_PERMISSION_DENIED
 INITIALIZATION_ERROR
```

### 7.2. Successful execution reception - _data_

On successful execution, it simply reports that everything went well
with the SdkResult.Success.

#### 7.2.1 Result InvoiceReader

##### ScannedDocs

Array of scanned documents:

 - image: UIImage.

 - date: Date.

---

## 8. Component customization

Apart from the changes that can be made at the SDK level (which
are explained in the <a href="ES_Mobile_SDK" document
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page"><strong><u> Mobile
SDK</u></strong></a>), this particular component allows the
modification of specific texts.

### 8.1. Texts

If you want to modify the SDK texts, you would have to include the
following XML file in the client application, and modify the value
of each _String_ by the desired one.

```xml
"qr_reader_component_exit_alert_question"="Are you sure you will finish the process?";
"qr_reader_component_camera_message_circle"="Keep the QR inside the circle";
"qr_reader_component_camera_message_square"="Keep the QR inside the square";
"invoice_reader_component_camera_message_circle"="Keep the document inside the circle";
"invoice_reader_component_camera_message_square"="Keep the document inside the square";
"capture_component_camera_unauthorized_title"="Camara unauthorized";
"capture_component_camera_unauthorized_description"="It seems you haven't given this app permission to use the camera. Please go to Settings and enable it.";
"capture_component_image_capture_error"="Image capture error";
"capture_component_preview_image"="Captured image preview";
"capture_component_take_again"="Capture again";
"capture_component_accept"="Accept";
"capture_component_capture"="Capture";
"capture_component_ok"="Ok";
"capture_component_cancel"="Cancel";
"capture_component_end_confirmation_title" = "Are you sure you will finish the process?";
"capture_component_text_results_finish_button" = "Finish";
"capture_component_agree" = "Accept";
"capture_component_finish" = "FINISH";
"capture_component_remove_confirmation_title" = "Do you want to delete this document?";
"capture_component_image" = "Image ";
"capture_component_retry" = "NO, I WANT TO REPEAT THE PHOTOGRAPH";
"capture_component_tutorial_tittle" = "Scan your documents"; 
"capture_component_tutorial_description" = "Take a picture of the document, or upload an image. /n You can scan several documents before finishing";
"capture_component_tutorial_button" = "CONTINUE";


```
