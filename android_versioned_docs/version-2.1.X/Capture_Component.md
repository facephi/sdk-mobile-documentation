# Capture Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (Components) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Depending on the use
case that is required, certain components must be installed. Its high
level of modularity allows other new components to be added in the
future without affecting those already integrated in the project.

For more information on the base configuration, go to the
[Getting Started](./Mobile_SDK) section.

---

## 1. Introduction

The Component discussed in the current document is called **_Capture Component_**. It is responsible for the invoice capture and the capture and generation of QRs.

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
  implementation "com.facephi.androidsdk:capture_component:$sdk_capture_component_version"
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

| **Controller**          | **Description**            |
| ----------------------- | -------------------------- |
| InvoiceReaderController | Invoice capture controller |
| QrReaderController      | QR capture controller      |
| QrGeneratorController   | QR generator controller    |

---

## 5. Component configuration

To configure the current component, once it has been initialised, you must create a _CaptureConfigurationData_ object and pass it as a parameter to the SDKController during the launch of the capture component.

A _QrGeneratorConfiguration_ object shall be created and passed as a parameter to the SDKController during the launch of the QR generation component.

The following section will show the fields that are part of this class and what each of them is used for.

### 5.1. Class QrCaptureConfigurationData

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

#### 5.1.7. showTutorial

Display tutorial screen at the start of the process (only QR mode)

#### 5.1.8. transparentBackground

Semi-transparent mask

#### 5.1.9. showPreviousTip

Displays a pre-launch screen with information about the process to be performed and a launch button.

### 5.2. Class QrGeneratorConfiguration

#### 5.2.1. source

Text to be included in the QR

#### 5.2.2. width

Width of the generated QR

#### 5.2.3. height

Height of the generated QR

### 5.3. Class InvoiceCaptureConfigurationData

#### 5.3.1. extractionTimeout

Maximum extraction time

#### 5.3.2. vibrationEnabled

Enable in-process vibration

#### 5.3.3. showDiagnostic

Display diagnostic screens at the end of the process

#### 5.3.4. showPreviousTip

Displays a pre-launch screen with information about the process to be performed and a launch button.

#### 5.3.5. maxScannedDocs

Maximum number of documents to scan.

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
    InvoiceReaderController(InvoiceCaptureConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("InvoiceReader: KO - ${result.error.name}")
    is SdkResult.Success -> Napier.d("InvoiceReader OK: ${result.data}")
}
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component normally, but **no event will be
  tracked** to the _tracking_ server:

```java
val result = SDKController.launchMethod(
    InvoiceReaderController(InvoiceCaptureConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("InvoiceReader: KO - ${result.error.name}")
    is SdkResult.Success -> Napier.d("InvoiceReader OK: ${result.data}")
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
    QrReaderController(QrCaptureConfigurationData())
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
    QrReaderController(QrCaptureConfigurationData())
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

Error list:

- ACTIVITY_RESULT_MSG_ERROR: The result of the activity is incorrect.
- APPLICATION_CONTEXT_ERROR: The required application context is null.
- CAMERA_ERROROR: Error in launching the camera.
- CAMERA_PERMISSION_DENIED: The user has rejected the permissions.
- CANCEL_BY_USER: The user has cancelled the process.
- CANCEL_LAUNCH: A general cancellation of the SDK has been done.
- COMPONENT_LICENSE_ERROR: The component license is not correct.
- EMPTY_LICENSE: The licence string is empty.
- FETCH_DATA_ERROR: Error in the result retrieval.
- FLOW_ERROR: Error in the flow process.
- INITIALIZATION_ERROR: Initialisation error.
- INVOICE_CAPTURE_ERROR: Error in the capture of invoices.
- MANAGER_NOT_INITIALIZED: Managers are null.
- NO_DATA_ERROR: Input data is null.
- OPERATION_NOT_CREATED: No operation is in progress.
- QR_CAPTURE_ERROR: Error in the QR capture.
- QR_GENERATION_ERROR: Error in the QR code generation.
- TIMEOUT: Timeout in the process.

### 7.1. _Receipt of correct execution - data_

On successful execution, it simply reports that everything went well
with the SdkResult.Success.

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
    <string name="capture_component_qr_camera_message">Keep the QR in the center</string>
    <string name="capture_component_invoice_camera_message">Keep bill in the center</string>
    <string name="capture_component_button_message">Capture</string>
    <string name="capture_component_timeout_title">Time exceeded</string>
    <string name="capture_component_timeout_desc">We apologize. The capture could not be made</string>
    <string name="capture_component_internal_error_title">There was a technical problem</string>
    <string name="capture_component_internal_error_desc">We apologize. The capture could not be made</string>

```

### 8.2. Animations

If you want to modify the animations (lottie) of the SDK you would have to include the animations with the same name in the res/raw/ folder of the application.

```text
phactura_anim_tip.json
qr_anim_tip_1.json
qr_anim_tip_2.json
```

---

## 9. Logs

To display the logs of this component on the console, you can use the filter: "CAPTURE:"