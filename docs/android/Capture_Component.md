# Capture Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (Components) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Depending on the use
case that is required, certain components must be installed. Its high
level of modularity allows other new components to be added in the
future without affecting those already integrated in the project.

For more information on the base configuration, go to the
<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">Mobile SDK</a> section.

---

## 1. Introduction

The Component discussed in the current document is called **_Capture Component_**. It is responsible for the invoice capture and the capture and generation of QRs.

---

## 2. Integration of the component

Before integrating this component, it is recommended to read the
documentation related to:

<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a>
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
  implementation "com.facephi.androidsdk:capture_component:$sdk_capture_component_version"
  ```

---

## 3. Start new operation

When you want to perform a specific operation, in order to generate the
associated information correctly in the platform, the **newOperation**
command must first be executed.

This command must have been executed **prior to launch**.

To learn more about how to start a new operation, it is recommended to
consult the <a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a>
documentation, which details and explains what this process consists of.

---

## 4. Available controllers

| **Controller**            | **Description**            |
| ------------------------- | -------------------------- |
| PhacturasReaderController | Invoice capture controller |
| QrReaderController        | QR capture controller      |
| QrGeneratorController     | QR generator controller    |

---

## 5. Component configuration

To configure the current component, once it has been initialised, you must create a _CaptureConfigurationData_ object and pass it as a parameter to the SDKController during the launch of the capture component.

A _QrGeneratorConfiguration_ object shall be created and passed as a parameter to the SDKController during the launch of the QR generation component.

The following section will show the fields that are part of this class and what each of them is used for.

### 5.1. Class CaptureConfigurationData

#### 5.1.1. extractionTimeout

Maximum extraction time

#### 5.1.2. cameraSelected

Camera selected: FRONT, BACK

#### 5.1.3. cameraShape

Shape of the mask to be displayed on the camera:

- SQUARE: Square
- CIRCULAR: Circle
- RECTANGLE_TALL: Rectangle

#### 5.1.4. vibrationEnabled

Enable in-process vibration

#### 5.1.5. showStroke

Show a line as camera border

#### 5.1.6. showDiagnostic

Display diagnostic screens at the end of the process

#### 5.1.6. transparentBackground

Semi-transparent mask

### 5.2. Class QrGeneratorConfiguration

#### 5.2.1. source

Text to be included in the QR

#### 5.2.2. width

Width of the generated QR

#### 5.2.3. height

Height of the generated QR

---

## 6. Component use

### 6.1 Invoice capture

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component normally, but internal events will be tracked to
  the _tracking_ server:

```java
val result = SDKController.launch(
    PhacturasReaderController(CaptureConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("PhacturasReader: KO - ${result.error.name}")
    is SdkResult.Success -> Napier.d("PhacturasReader OK: ${result.data}")
}
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component normally, but **no event will be
  tracked** to the _tracking_ server:

```java
val result = SDKController.launchMethod(
    PhacturasReaderController(CaptureConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("PhacturasReader: KO - ${result.error.name}")
    is SdkResult.Success -> Napier.d("PhacturasReader OK: ${result.data}")
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

### 6.2 QR capture

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component normally, but internal events will be tracked to
  the _tracking_ server:

```java
val result = SDKController.launch(
    QrReaderController(CaptureConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("QR: KO - ${result.error.name}")
    is SdkResult.Success -> Napier.d("QR OK: ${result.data}")
}
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component normally, but **no event will be
  tracked** to the _tracking_ server:

```java
val result = SDKController.launchMethod(
    QrReaderController(CaptureConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("QR: KO - ${result.error.name}")
    is SdkResult.Success -> Napier.d("QR OK: ${result.data}")
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

### 6.3 QR generator

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component normally, but internal events will be tracked to
  the _tracking_ server:

```java
val result = SDKController.launch(
    QrGeneratorController(QrGeneratorConfiguration(""))
)
when (result) {
    is SdkResult.Error -> Napier.d("QrGenerator: KO - ${result.error.name}")
    is SdkResult.Success -> Napier.d("QrGenerator OK: ${result.data}")
}
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component normally, but **no event will be
  tracked** to the _tracking_ server:

```java
val result = SDKController.launchMethod(
    QrGeneratorController(QrGeneratorConfiguration(""))
)
when (result) {
    is SdkResult.Error -> Napier.d("QrGenerator: KO - ${result.error.name}")
    is SdkResult.Success -> Napier.d("QrGenerator OK: ${result.data}")
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

On the error side, we will have the _CaptureError_ class.

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

### 7.1. _Receipt of correct execution - data_

On successful execution, it simply reports that everything went well
with the SdkResult.Success.

---

## 8. Customizing the component

Apart from the changes that can be made at SDK level (which are
explained in the <a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a>
document), this particular component allows the modification of specific
texts.

### 8.1. Texts

If you want to modify the SDK texts, you would have to include the
following XML file in the client application, and modify the value of
each String to the desired one.

```xml
    <string name="capture_component_qr_camera_message">Keep the QR in the center</string>
    <string name="capture_component_invoice_camera_message">Keep bill in the center</string>
    <string name="capture_component_button_message">Capture</string>
    <string name="capture_component_timeout_title">Time exceeded</string>
    <string name="capture_component_timeout_desc">We apologize. The capture could not be made</string>
    <string name="capture_component_internal_error_title">There was a technical problem</string>
    <string name="capture_component_internal_error_desc">We apologize. The capture could not be made</string>

```
