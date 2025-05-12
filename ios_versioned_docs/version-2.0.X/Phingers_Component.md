# Phingers Component

## 0. SDK Mobile base requirements

**SDK Mobile** is a set of libraries (**Components**) that provides a set of functionalities and services
a series of functionalities and services, allowing its integration in a Mobile application in a
integration into a Mobile application in a simple and fully scalable way.
scalable. Depending on the use case that is required, certain components must be installed.
Depending on the required use case, certain components must be installed. Its high level of
of modularity means that other new components can be added in the future
new components can be added in the future without affecting those already integrated in the project.
project.

For more information on the base configuration, go to the 
<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">Mobile SDK</a> section.

---

## 1. Introduction

The component discussed in the current document is called **Phingers
Component**. It is in charge of capturing the user's fingerprints and
the subsequent extraction of the subsequent fingerprint templates. Its
main functionalities are as follows:

- Two modes of operation: extraction of the four fingers of the hand (except for the thumb), or
  (except the thumb), or extraction of the thumb only.

- Internal camera management.

- Permission management.

- Built-in vividness detection.

- Assistant in fingerprint capture processes.

- Generation of templates with fingerprint characteristics, images and 
  scores.

### 1.1 Minimum requirements

The minimum iOS SDK version required is as follows:

- Minimum iOS version: **13**

---

## 2. Integration of the component
<div class="warning">
<span class="warning">:warning:</span>
Before integrating this component, it is recommended that you read the documentation
documentation for the **<u>Core Component</u>** and follow the instructions
indicated in this document.
</div>
This section will explain step by step how to integrate the current component into an existing project.
component into an existing project.

### 2.1. Dependencies required for integration
<div class="warning">
<span class="warning">:warning:</span>
To avoid conflicts and compatibility problems, if you want to install
the component in a project containing an old Facephi libraries
(_Widgets_) version, these must be removed entirely before installing
the **_SDKMobile_** components.
</div>
- Currently FacePhi libraries are distributed remotely through 
  different dependency managers, in this case Cocoapods. 
  The **mandatory** dependencies that must have been previously installed 
  (adding them to the project's Podfile file) are:

The mandatory dependencies that must have been previously installed (adding them to the project's Podfile file) are:
```java
  pod 'FPHISDKMainComponent', '~> 2.0.0'
```

- To install the current component, the following entry must be included in the *Podfile* of the project
  entry in the *Podfile* of the application:

  ```java
  pod 'FPHISDKPhingersComponent', '~> 2.0.0'
  ```

- Once the dependencies have been installed, you will be able to use the different
  different functionalities of the component.

### 2.2 Permissions and settings

In the client application where the components are going to be integrated, it is necessary to incorporate the following elements in the file **info.plist**.
the following elements need to be incorporated in the **info.plist** file

```java
It is necessary to allow the use of the camera (Privacy - Camera Usage Description)
```
---

## 3. Start new operation

In order to generate the associated information correctly in the platform, the **newOperation** command must be executed first.

<div class="note">
<span class="note">:information_source:</span>
This command must have been executed **before launch**.

To learn more about how to start a new operation, it is recommended to 
consult the <a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">Mobile SDK</a>, which details and explains what this process consists of.
</div>
---

## 4. Available controllers

|                    |                                     |
| ------------------ | ----------------------------------- |
| **Controller**     | **Description**                     |
| PhingersController | Main fingerprint capture controller |

---

## 5. Component configuration

To configure the current component, once it has been initialised, you need to
create a _PhingersConfigurationData_ object and pass it as a parameter to the
SDKController during the component launch.

The following section will show the fields that are part of this class and what each one is used for.
class and what each of them is used for.

### 5.1 Class PhingersConfigurationData

#### 5.1.1 reticleOrientation

Sets the fingerprint detection mode and indicates which fingers are to
be detected during the process. The allowed values are:

- **LEFT**: Enables the capture of the **four** **fingers** of the
  **left** **hand**.

- **RIGHT**: Enables the capture of the **four** **fingers** of the
  **left** **hand**.

- **THUMB**: The capture of a **thumb** is activated.

#### 5.1.2 extractionTimeout

Sets a stabilisation mode prior to any authentication process in the widget.
authentication process in the widget. This mode forces the widget to not
start any process if the user is not facing forward and not moving his head.
head facing forward and not moving it.

#### 5.1.3 returnWSQ

If set to **true** then in the result of the capture it will
will return, for each of the footprints, the compressed data by means of
Wavelet Scalar Quatization_ (WSQ). WSQ is a grey compression algorithm, being a standard (N
being a standard (NIST) for this type of captures. Oriented
validation against the different existing governmental databases.
databases.

#### 5.1.4 returnRawImage

If set to **true** it shall return in the result the images in the same form as they have been captured.
the same form in which they have been captured.

#### 5.1.5 returnProcessedImage

If set to **true** it shall return the images in the result as they were captured.
the same form in which they have been captured.

#### 5.1.6 returnFingerprintTemplate

Specifies whether the capture process shall return the fingerprint template in the result.
the result. It is an enumerated of type **_FingerprintTemplateType_**, and
each value would be: 

- **ISO**: This template type refers to the standard **ISO/IEC
  19794-4**.

- **INNOVATRICS**: This type of template is a proprietary template
  template, compatible with scaling change, and very useful for different validation processes.
  validation processes.

- **NONE**: Template return is disabled.

#### 5.1.7 returnFullFrameImage

Specifies whether to return the full image of the camera where the fingers have been detected.
fingers have been detected.

#### 5.1.8 useLiveness

Enables or disables the liveness detector during the fingerprint capture process.
capture process. Defaults to **true**.

#### 5.1.9 useFlash

Enables or disables the camera flash during the fingerprint capture process.
process. Defaults to **true**.

#### 5.1.10 captureFingersText

Sets the message (string) that is displayed on the screen after the four fingers have been
detected and the user shall be instructed not to move them.

#### 5.1.11 captureThumbText

Sets the message (string) to be displayed on the screen after the thumb has been detected and the user shall be prompted not to move the thumb.
detected and the user shall be prompted not to move it.

#### 5.1.12 thumbNotInFocusText

Sets the message (string) that is displayed on the screen while attempting to
attempted

#### 5.1.13 captureFingerText

Sets the message (string) displayed on screen during the thumb capture process.
thumb capture process.

---

## 6. Use of the component

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows launching the functionality
  of the component normally, and **the internal events will be tracked** to the _tracking_ server:

```java
let controller = PhingersController(data: phingersConfigurationData, output: output, viewController: viewController)
SDKController.shared.launch(controller: controller)
```
- **\[WITHOUT TRACKING\]** This call allows launching the functionality
  of the component normally, but events **will not be tracked** to the _tracking_ server:

```java
let controller = PhingersController(data: phingersConfigurationData, output: output, viewController: viewController)
SDKController.shared.launchMethod(controller: controller)
```
<div class="warning">
<span class="warning">:warning:</span>
The **launch** method must be used by **default**. This method allows
**_tracking_** to be used if your component is enabled, and will not use
it when it is disabled (or the component is not installed).

On the other hand, the **launchMethod** method covers a special case, in
which the integrator has tracking installed and activated, but in a
certain flow within the application does not want to track information.
In this case, this method is used to prevent this information from being
sent to the platform.
</div>
---

## 7. Receipt of the result

The controllers will return the required information in SdkResult
format. More information in the <a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK's</a>.	

### 7.1. Receipt of errors

```java
NO_OPERATION_CREATED_ERROR
COMPONENT_CONTROLLER_DATA_ERROR
CAMERA_PERMISSION_DENIED
LICENSE_CHECKER_ERROR_INVALID_COMPONENT_LICENSE
ERROR_CAPTURE_SUCCESS_WITHOUT_RESULT
CAMERA_PERMISSION_DENIED
CANCEL_BY_USER
TIMEOUT
```

### 7.2 Receipt of correct execution - _data_

The result returns the images in **Bitmap** format, it is possible to
convert the images to **Base64** as follows:

`Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)`.

The _data_ field is variable and will depend on which component the result was returned.
the result has been returned. In the case of this component, the returned fields are
the following:

#### 7.2.1 _focusQuality_.

Returns the camera focus quality. A low value can affect the capture process.

#### 7.2.2 _fullFrameImage_

Returns the full image captured by the camera. No processes are applied to this image yet.

#### 7.2.3 _livenessConfidence_

Returns an indicator of the confidence level of the catch.

#### 7.2.4 _fingersResult_.

This is a list of **_FingerResult_** objects, containing all the information associated with each finger.
information associated with each of the captured fingers.

#### 7.2.4.1 wsq

The fingerprint capture is returned in WSQ format.

#### 7.2.4.2 fingerprintTemplate

Returns the fingerprint template, used for further validation.

#### 7.2.4.3 rawFingerprintImage

Returns the raw, unmodified image of the current fingerprint.

#### 7.2.4.4 processedFingerprintImage

Returns the processed fingerprint image.

#### 7.2.4.5 nfiqMetrics

These are the metrics of the capture. Currently the following is returned.
value:

- nfiqMetric**: An integer value, between 1 and 5 (inclusive),
  indicating the quality of the fingerprint capture, with 1 indicating the highest quality and 5 the worst quality.
  indicates the highest quality and 5 the worst quality. Fingerprints with the latter value
  The latter value is usually discarded for further validation.

---

## 8. Customizing the component

Apart from the changes that can be made at SDK level (which are
explained in the <a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a>
document), this particular component allows the modification of specific
texts.

### 8.1 Texts

If you want to modify the SDK texts, you would have to include the
following XML file in the client application, and modify the value of
each String to the desired one.

```java
<!-- PHINGERS -->
"phingers_component_tutorial_title_left" = "Left hand prints.";
"phingers_component_tutorial_title_right" = "Right hand prints.";
"phingers_component_tutorial_title_thumb" = "Thumbprints.";
"phingers_component_action_text" = "Begin";
"phingers_component_tutorial_description" = "Put your fingers together. Move your hand closer or lower until your fingerprints are in focus.";
"phingers_component_capture_phingers" = "Hold fingers steady";
"phingers_component_capture_thumb" = "Hold finger steady";
"phingers_component_capture_phingers_not_focus" = "Move fingers until in focus";
"phingers_component_capture_thumb_not_focus" = "Move finger until in focus";
"phingers_component_ok"="Ok";
"phingers_component_cancel"="Cancel";
"phingers_component_end_confirmation_title" = "Are you sure you will finish the process?";
"phingers_component_text_results_finish_button" = "Finish";
"phingers_component_agree" = "Accept";
---
