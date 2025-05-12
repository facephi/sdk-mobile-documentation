# Capture Component

## 0. SDK Mobile base requirements

**SDK Mobile** is a set of libraries (**Components**) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Depending on the use
case that is required, certain components must be installed. Its high
level of modularity allows other new components to be added in the
future without affecting those already integrated in the project.

For more information on the base configuration, go to the [Getting Started](./Mobile_SDK#11-minimum-requirements) section.

---

## 1. Introduction

The Component discussed in the current document is called **_Capture Component_**. It is responsible for the invoice capture and the capture and generation of QRs.

### 1.1 Minimum requirements

The minimum iOS SDK version required is as follows:

Minimum iOS version: **13**

---

## 2. Integration of the component

<div class="warning">
<span class="warning">:warning:</span>
Before integrating this component, it is recommended to read the
documentation related to [Initial Integration](./Mobile_SDK#2-initial-integration) and follow the instructions given in that document.
</div>

This section will explain step by step how to integrate the current
component into an existing project.

### 2.1. Dependencies required for integration

To avoid conflicts and compatibility problems, in case you want to
install the component in a project containing an old version of the
Facephi libraries (_Widgets_), these must be completely removed before
installing the **_SDKMobile_** components.

#### Cocoapods

- Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The **required** dependencies that must have been previously installed (by adding them in the Podfile file of the project) are:

```
  pod 'FPHISDKMainComponent', '~> 2.2.0'
```

- To install the Capture component, the following entry must be included in the Podfile of the application:

```
  pod 'FPHISDKCaptureComponent', '~> 2.2.0'
```

- Once the dependencies are installed, the different functionalities of the component can be used.

- In case of development with **XCode15** a post-installation script must be included:

![Image](/ios/fix_ldClassic.png)

### 2.2 Permissions and configurations

In the client application where the components are going to be integrated it is necessary to incorporate the following elements in the info.plist file

```
It is necessary to allow the use of the camera (Privacy - Camera Usage Description)
```

---

## 3. Start new operation

In order to generate the associated information correctly in the platform, the **newOperation** command must be executed first.

<div class="note">
<span class="note">:information_source:</span>
This command must have been executed **before launch**.
To learn more about how to start a new operation, it is recommended to consult the [Start a new operation](./Mobile_SDK#4-start-a-new-operation) documentation, which details and explains what this process consists of.
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

- _InvoiceCaptureConfigurationData_ and pass it as a parameter to the SDKController during the launch of the Invoice component.
- _QrCaptureConfigurationData_ and pass it as a parameter to the SDKController during the launch of the QR capture component.
- _QrGeneratorConfiguration_ and pass it as a parameter to the SDKController during the launch of the QR generation component.

The following section will show the fields that are part of these classes and what they are used for.

### 5.1. Class InvoiceCaptureConfigurationData

#### 5.1.1 vibrationEnabled
Enable vibration during the process

#### 5.1.2 showDiagnostic
Show diagnostic screens at the end of the process and in case of error

#### 5.1.3 showTutorial
Indicates whether the component activates the tutorial screen. This view intuitively explains how the capture is performed.

#### 5.1.4 timePreview
Defines the time in milliseconds that the preview lasts after the capture, by default it is set to 2000.

#### 5.1.6 previewAfterCapture
Enables the preview after capture

#### 5.1.7 maxScannedDocs
Maximum number of captured documents

#### 5.1.8 showPreviousTip
Show the previous Tips screen

#### 5.1.9 autoCapture
Enable autoCapture

### 5.2. Class QrCaptureConfigurationData

#### 5.2.1. extractionTimeout
Maximum extraction timeout

#### 5.2.2. cameraSelected
Camera selected: FRONT, BACK

#### 5.2.3. cameraShape
Shape of the mask to be displayed on the camera:
- SQUARE: Square
- CIRCULAR: Circle
- RECTANGLE_TALL: Rectangle

#### 5.2.4. vibrationEnabled
Enable vibration during the process

#### 5.2.5. showStroke
Show a line as camera border

#### 5.2.6. showDiagnostic
Show diagnostic screens at the end of the process and in case of error

#### 5.2.7. transparentBackground
Mask on the camera semi-transparent

### 5.3. Class QrGeneratorConfiguration

#### 5.3.1. source
Text to be included in the QR

#### 5.3.2. width
Width of the generated QR

#### 5.3.3. height
Height of the generated QR

#### 5.3.4 showDiagnostic
Display diagnostic screens at the end of the process and in case of error

---

## 6. Use of the component

### 6.1 Invoice capture

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows launching the functionality
  of the component normally, and **the internal events will be tracked** to the _tracking_ server:

```java
   let controller = InvoiceReaderController(output: output, viewController: viewController)
   SDKController.shared.launch(controller: controller)
```
- **\[WITHOUT TRACKING\]** This call allows launching the functionality
  of the component normally, but events **will not be tracked** to the _tracking_ server:

```java
   let controller = InvoiceReaderController(output: output, viewController: viewController)
   SDKController.shared.launchMethod(controller: controller)
```

The **launch** method must be used by **default**. This method allows
**_tracking_** to be used if your component is enabled, and will not use
it when it is disabled (or the component is not installed).

On the other hand, the **launchMethod** method covers a special case, in
which the integrator has tracking installed and activated, but in a
certain flow within the application does not want to track information.
In this case, this method is used to prevent this information from being
sent to the platform.

### 6.2 QR capture

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows launching the functionality
  of the component normally, and **the internal events will be tracked** to the _tracking_ server:

```java
        let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)
        SDKController.shared.launch(controller: controller)
```
- **\[WITHOUT TRACKING\]** This call allows launching the functionality
  of the component normally, but events **will not be tracked** to the _tracking_ server:

```java
        let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)
        SDKController.shared.launchMethod(controller: controller)
```

The **launch** method must be used by **default**. This method allows
**_tracking_** to be used if your component is enabled, and will not use
it when it is disabled (or the component is not installed).

On the other hand, the **launchMethod** method covers a special case, in
which the integrator has tracking installed and activated, but in a
certain flow within the application does not want to track information.
In this case, this method is used to prevent this information from being
sent to the platform.

### 6.3 QR generation

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows launching the functionality
  of the component normally, and **the internal events will be tracked** to the _tracking_ server:

```java
        let controller = QrGeneratorController(data: qrGeneratorConfigurationData, output: output, viewController: viewController)
        SDKController.shared.launch(controller: controller)

```
- **\[WITHOUT TRACKING\]** This call allows launching the functionality
  of the component normally, but events **will not be tracked** to the _tracking_ server:

```java
        let controller = QrGeneratorController(data: qrGeneratorConfigurationData, output: output, viewController: viewController)
        SDKController.shared.launchMethod(controller: controller)
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

The controllers will return the required information in SdkResult format. More details in the [Result Return](./Mobile_SDK#6-result-return) section.

### 7.1. Error reception

```java
NO_OPERATION_CREATED_ERROR
CAMERA_PERMISSION_DENIED
CANCEL_BY_USER
TIMEOUT
INTERNAL_ERROR
```

### 7.2. Successful execution reception - _data_

On successful execution, it simply reports that everything went well
with the SdkResult.Success.

---

## 8. Component customization

### 8.1. text

```java
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
"capture_component_invoice_tip_desc" = "Take a picture of the document, or upload an image. \You can scan several documents before finishing";
"capture_component_invoice_close_alt" = "Close";
"capture_component_invoice_upload_alt" = "Upload photo";
"capture_component_invoice_capture_alt" = "Capture";
"capture_component_invoice_remove_alt" = "Remove";
"capture_component_invoice_back_image_alt" = "Previous image";
"capture_component_invoice_forward_image_alt" = "Next image";
"capture_component_timeout_title"="Timeout";
"capture_component_timeout_desc"="We apologize. The capture could not be made";

```
