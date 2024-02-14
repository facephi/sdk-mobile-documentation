# Capture Component

## 0. SDK Mobile base requirements

**SDK Mobile** is a set of libraries (**Components**) that provides a set of functionalities and services
a series of functionalities and services, allowing its integration in a Mobile application in a
integration into a Mobile application in a simple and fully scalable way.
scalable. Depending on the use case that is required, certain components must be installed.
Depending on the required use case, certain components must be installed. Its high level of
of modularity means that other new components can be added in the future
new components can be added in the future without affecting those already integrated in the project.
project.

For more information on the base configuration, go to the [1.5.X][EN] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>*** section. 

---

## 1. Introduction

The _Component_ dealt with in the current document is called
**_Capture Component_**. It is responsible for the capture of invoices and the capture and generation of QRs.

### 1.1 Minimum requirements
The minimum iOS SDK version required is as follows:

Minimum iOS version: **13**

---

## 2. Component integration

Before integrating this component, it is recommended to read the documentation related to  [1.5.X][EN] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>*** and follow the instructions given in this document.

This section will explain step by step how to integrate the current component into an existing project.
component into an existing project.


### 2.1. Dependencies required for integration

In order to avoid conflicts and compatibility problems, in case you want to
install the component in a project containing an old version of the Facephi libraries.
of the Facephi libraries (_Widgets_), these must be completely removed before the installation of the components.
completely before the installation of the components of the
**_SDKMobile_** components.

#### Cocoapods
- Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The **required** dependencies that must have been previously installed (by adding them in the Podfile file of the project) are:


```
  pod 'FPHISDKMainComponent', '~> 1.5.0'
```
- To install the SelphID component, the following entry must be included in the Podfile of the application:
```
  pod 'FPHISDKCaptureComponent', '~> 1.5.0'
```
- Once the dependencies are installed, the different functionalities of the component can be used.

- In case of development with **xCode15** a post-installation script must be included:

![Image](/iOS/fix_ldClassic.png)

### 2.2 Permissions and configurations
In the client application where the components are going to be integrated it is necessary to incorporate the following elements in the info.plist file
```
It is necessary to allow the use of the camera (Privacy - Camera Usage Description)
```

---

## 3. Start new operation

When you want to perform a certain operation, in order to generate the associated information correctly in the platform, the **newOperation** command must be previously executed.

This command must have been executed **prior to the launch of the component**.

To learn more about how to start a new operation, it is recommended to consult the documentation of [1.5.X][EN] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>***, which details and explains what this process consists of.

---

## Available controllers

| **Controller**             | **Description**                         |
| -------------------------- | --------------------------------------- |
| PhacturasReaderController          | Invoice capture controller    |
| QrReaderController | QR capture controller |
| QrGeneratorController | QR generator controller |

---

## Component configuration

To configure the current component, once it has been initialised, the following must be done
Create a _CaptureConfigurationData_ object and pass it as a parameter to the SDKController during the launch of the capture component.

A _QrGeneratorConfiguration_ object shall be created and passed as a parameter to the SDKController
during the launch of the QR generation component.

The following section will show the fields that are part of these classes and what they are used for.
and what each of them is used for.

### 5.1. Class CaptureConfigurationData
#### 5.1.1 Basic Configuration

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

##### extractionTimeout
Maximum extraction timeout


#### 5.1.2 Advanced Settings

##### showStroke
Show a line as camera border

##### transparentBackground
Mask over the camera semi-transparent

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

Once the component has been started and a new transaction has been created (**paragraph
3**) the SDK components can be launched. There are two ways to launch
the component:

- **[WITH TRACKING]** This call allows you to launch the functionality
  functionality of the component normally, but internal events will be tracked to the _tracking_ server.
  events will be tracked to the _tracking_ server:

```java
   let controller = InvoiceReaderController(output: output, viewController: viewController)
   SDKController.shared.launch(controller: controller)
)
```

- **[NO TRACKING]** This call allows the component's functionality to be launched as normal.
  functionality of the component normally, but **will not track** any events to the
  event to the _tracking_ server:

```java
   let controller = InvoiceReaderController(output: output, viewController: viewController)
   SDKController.shared.launchMethod(controller: controller)
)
```

The **launch** method must be used **by default**. This method allows
to use **_tracking_** if your component is enabled, and will not use it when it is
will not use it when it is disabled (or the component is not installed).
installed).

On the other hand, the **launchMethod** method covers a special case, in which the
where the integrator has tracking installed and activated, but in a given flow within the application does not want to use it when it is deactivated.
flow within the application, the integrator does not want to track information.
In that case this method is used to avoid sending that information to the
to the platform.

### 6.2 QR capture

Once the component has been started and a new transaction has been created (**paragraph
3**) the SDK components can be launched. There are two ways to launch
the component:

- **[WITH TRACKING]** This call allows you to launch the component's functionality as normal.
  functionality of the component normally, but internal events will be tracked to the _tracking_ server.
  events will be tracked to the _tracking_ server:

```java
        let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)
        SDKController.shared.launch(controller: controller)
)
```

- **[NO TRACKING]** This call allows the component's functionality to be launched as normal.
  functionality of the component normally, but **will not track** any events to the
  event to the _tracking_ server:

```java
        let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)
        SDKController.shared.launchMethod(controller: controller)
```

The **launch** method must be used **by default**. This method allows
use **_tracking_** if your component is enabled, and will not use it when it is disabled.
will not use it when it is disabled (or the component is not installed).
installed).

On the other hand, the **launchMethod** method covers a special case, in which the
where the integrator has tracking installed and activated, but in a given flow within the application does not want to use it when it is deactivated.
flow within the application, the integrator does not want to track information.
In that case this method is used to avoid sending that information to the
to the platform.

### 6.3 QR generation

Once the component has been started and a new operation has been created (**paragraph
3**) the SDK components can be launched. There are two ways to launch
the component:

- **[WITH TRACKING]** This call allows you to launch the component's functionality as normal.
  functionality of the component normally, but internal events will be tracked to the _tracking_ server.
  events will be tracked to the _tracking_ server:

```java
        let controller = QrGeneratorController(data: qrGeneratorConfigurationData, output: output, viewController: viewController)
        SDKController.shared.launch(controller: controller)

```

- **[NO TRACKING]** This call allows you to launch the functionality
  functionality of the component normally, but **will not track** any events to the
  event to the _tracking_ server:

```java
        let controller = QrGeneratorController(data: qrGeneratorConfigurationData, output: output, viewController: viewController)
        SDKController.shared.launchMethod(controller: controller)
```

The **launch** method must be used **by default**. This method allows
use **_tracking_** if your component is enabled, and will not use it when it is disabled.
will not use it when it is disabled (or the component is not installed).
installed).

On the other hand, the **launchMethod** method covers a special case, in which the
where the integrator has tracking installed and activated, but in a given flow within the application does not want to use it when it is deactivated.
flow within the application, the integrator does not want to track information.
In that case this method is used to avoid sending that information to the
to the platform.

---

## 7. Reception of the result

The controllers will return the necessary information in format
SdkResult. More information in the <a section
   href="Mobile_SDK#6-return-result"
   rel="nofollow">6. Android Mobile SDK Return Result</a>
  
### 7.1. Error reception

In the error part, we will have the _CaptureError_ class.

```java
QR_CAPTURE_CANCEL_BY_USER
QR_CAPTURE_TIMEOUT
QR_CAPTURE_INTERNAL_ERROR
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
