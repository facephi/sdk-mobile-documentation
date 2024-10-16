# Capture Component

## 0. SDK Mobile base requirements

**SDK Mobile** is a set of libraries (Components) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Depending on the use
case that is required, certain components must be installed. Its high
level of modularity allows other new components to be added in the
future without affecting those already integrated in the project.

For more information on the base configuration, go to the <a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">Mobile SDK</a> section.

---

## 1. Introduction

The Component discussed in the current document is called **_Capture Component_**. It is responsible for the invoice capture and the capture and generation of QRs.

### 1.1 Minimum requirements

The minimum iOS SDK version required is as follows:

Minimum iOS version: **13**

---

## 2. Integration of the component

Before integrating this component, it is recommended to read the
documentation related to:

<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a> and follow the instructions given in this document.

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
  pod 'FPHISDKMainComponent', '~> 1.5.0'
```

- To install the Capture component, the following entry must be included in the Podfile of the application:

```
  pod 'FPHISDKCaptureComponent', '~> 1.5.0'
```

- Once the dependencies are installed, the different functionalities of the component can be used.

- In case of development with **xCode15** a post-installation script must be included:

![Image](/ios/fix_ldClassic.png)

### 2.2 Permissions and configurations

In the client application where the components are going to be integrated it is necessary to incorporate the following elements in the info.plist file

```
It is necessary to allow the use of the camera (Privacy - Camera Usage Description)
```

---

## 3. Start new operation

In order to generate the associated information correctly in the platform, the **newOperation** command must be executed first.

This command must have been executed **prior to launch**.

To learn more about how to start a new operation, it is recommended to
consult the <a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a> documentation, which details and explains what this process consists of.

---

## 4. Available controllers

| **Controller**            | **Description**            |
| ------------------------- | -------------------------- |
| PhacturasReaderController | Invoice capture controller |
| QrReaderController        | QR capture controller      |
| QrGeneratorController     | QR generator controller    |

---

## 5. Component configuration

To configure the current component, once it has been initialised, the following must be done
Create a _CaptureConfigurationData_ object and pass it as a parameter to the SDKController during the launch of the capture component.

A _QrGeneratorConfiguration_ object shall be created and passed as a parameter to the SDKController
during the launch of the QR generation component.

The following section will show the fields that are part of these classes and what they are used for.
and what each of them is used for.

### 5.1. Class CaptureConfigurationData

#### 5.1.1 Basic Configuration

##### extractionTimeout

Maximum extraction time

##### cameraSelected

Camera selected: FRONT, BACK

##### vibrationEnabled

Enable vibration during processing

##### cameraShape

Shape of the mask to be displayed on the camera:

- SQUARE: Square
- CIRCULAR: Circle
- RECTANGLE_TALL: Rectangle

##### showDiagnostic

Show diagnostic screens at the end of the process

#### 5.1.2 Advanced Settings

##### showStroke

Show a line as camera border

##### showDiagnostic

Display diagnostic screens at the end of the process

##### transparentBackground

Semi-transparent mask

### 5.2. Class QrGeneratorConfiguration

##### source

Text to be included in the QR

##### width

Width of the generated QR

##### height

Height of the generated QR

---

## 6. Use of the component

### 6.1 Invoice capture

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component normally, but internal events will be tracked to
  the _tracking_ server:

```java
   let controller = InvoiceReaderController(output: output, viewController: viewController)
   SDKController.shared.launch(controller: controller)
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component normally, but **no event will be
  tracked** to the _tracking_ server:

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

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component normally, but internal events will be tracked to
  the _tracking_ server:

```java
        let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)
        SDKController.shared.launch(controller: controller)
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component normally, but **no event will be
  tracked** to the _tracking_ server:

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

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component normally, but internal events will be tracked to
  the _tracking_ server:

```java
        let controller = QrGeneratorController(data: qrGeneratorConfigurationData, output: output, viewController: viewController)
        SDKController.shared.launch(controller: controller)

```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component normally, but **no event will be
  tracked** to the _tracking_ server:

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

The controllers will return the required information in SdkResult format
-more details in the [Result Return](./Mobile_SDK#6-result-return) section.

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

```
