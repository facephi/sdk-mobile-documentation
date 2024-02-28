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

For more information on the base configuration, go to the [1.5.X][EN] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">SDK móvil de iOS</a>***.

---

## 1. Introduction

The _Component_ dealt with in the current document is called
**_Phingers Component_**. It is in charge of the capture of the user's fingerprints and the subsequent
fingerprints and the subsequent extraction of the subsequent fingerprint templates.
extraction of the subsequent fingerprint templates. Its main functionalities are
functionalities are as follows:

- Two modes of operation: extraction of the four fingers of the hand (except for the thumb), or
  (except the thumb), or extraction of the thumb only.

- Internal camera management.

- Permission management.

- Built-in vividness detection.

- Assistant in fingerprint capture processes.

- Generation of templates with fingerprint characteristics,
  images and scores.

### 1.1 Minimum requirements

The minimum iOS SDK version required is as follows:

- Minimum iOS version: **13**

---

## 2. Integration of the component

Before integrating this component, it is recommended that you read the documentation
documentation for the **<u>Core Component</u>** and follow the instructions
indicated in this document.

This section will explain step by step how to integrate the current component into an existing project.
component into an existing project.

### 2.1. Dependencies required for integration

In order to avoid conflicts and compatibility problems, in case you want to
install the component in a project containing an old version of the Facephi libraries.
of the Facephi libraries (_Widgets_), these must be completely removed before the installation of the components.
completely before the installation of the components of the
**_SDKMobile_** components.

- Currently the FacePhi libraries are distributed remotely through different dependency managers.
  through different dependency managers, in this case
  Cocoapods. The **required** dependencies that must have been previously installed (by adding them in the
  previously installed (by adding them to the project's wait*Podfile* file) are
  project) are:

```java
  pod 'FPHISDKMainComponent', '~> 1.4.0', '~> 1.4.0'.
```

- To install the current component, the following entry must be included in the *Podfile* of the project
  entry in the *Podfile* of the application:

  ```java
  pod 'FPHISDKPhingersComponent', '~> 1.4.0'.
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

When you want to perform a certain operation, in order to generate the associated information correctly in the
associated information correctly in the platform, the **newOperation** command
the **newOperation** command must be executed beforehand.

This command must be executed **always**. To learn more about how to
to start a new operation, it is recommended to consult the documentation of
**Core Component** documentation, which details and explains this process.
process.

To learn more about how to start a new operation, it is recommended to consult the documentation of [1.5.X][EN] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>***, which details and explains what this process consists of.

---

## 4. Component configuration

To configure the current component, once it has been initialised, you need to
create a _PhingersConfigurationData_ object and pass it as a parameter to the
SDKController during the component launch.

The following section will show the fields that are part of this class and what each one is used for.
class and what each of them is used for.

### 4.1 Class PhingersConfigurationData

#### 4.1.1 reticleOrientation

Sets the fingerprint detection mode and indicates which fingers are to be detected during the process.
detected during the process. Allowed values are:

- **LEFT**: Capture of the **four fingers of the left hand** is enabled.
  left**.

- RIGHT**: The capture of the **four fingers of the left hand** is activated.
  left**.

- THUMB**: Activates the capture of **one thumb**.

#### 4.1.2 extractionTimeout

Sets a stabilisation mode prior to any authentication process in the widget.
authentication process in the widget. This mode forces the widget to not
start any process if the user is not facing forward and not moving his head.
head facing forward and not moving it.

#### 4.1.3 returnWSQ

If set to **true** then in the result of the capture it will
will return, for each of the footprints, the compressed data by means of
Wavelet Scalar Quatization_ (WSQ). WSQ is a grey compression algorithm, being a standard (N
being a standard (NIST) for this type of captures. Oriented
validation against the different existing governmental databases.
databases.

#### 4.1.4 returnRawImage

If set to **true** it shall return in the result the images in the same form as they have been captured.
the same form in which they have been captured.

#### 4.1.5 returnProcessedImage

If set to **true** it shall return the images in the result as they were captured.
the same form in which they have been captured.

#### 4.1.6 returnFingerprintTemplate

Specifies whether the capture process shall return the fingerprint template in the result.
the result. It is an enumerated of type **_FingerprintTemplateType_**, and
each value would be: \*\*

- **ISO**: This template type refers to the standard **ISO/IEC
  19794-4**.

- INNOVATRICS**: This type of template is a proprietary template
  template, compatible with scaling change, and very useful for different validation processes.
  validation processes.

- NONE**: Template return is disabled.

#### 4.1.7 returnFullFrameImage

Specifies whether to return the full image of the camera where the fingers have been detected.
fingers have been detected.

#### 4.1.8 useLiveness

Enables or disables the liveness detector during the fingerprint capture process.
capture process. Defaults to **true**.

#### 4.1.9 useFlash

Enables or disables the camera flash during the fingerprint capture process.
process. Defaults to **true**.

#### 4.1.10 captureFingersText

Sets the message (string) that is displayed on the screen after the four fingers have been
detected and the user shall be instructed not to move them.

#### 4.1.11 captureThumbText

Sets the message (string) to be displayed on the screen after the thumb has been detected and the user shall be prompted not to move the thumb.
detected and the user shall be prompted not to move it.

#### 4.1.12 thumbNotInFocusText

Sets the message (string) that is displayed on the screen while attempting to
attempted

#### 4.1.13 captureFingerText

Sets the message (string) displayed on screen during the thumb capture process.
thumb capture process.

---

## 5. Use of the component

Once the component has been started and a new operation has been created (**paragraph
3**) the SDK components can be launched. There are two ways to launch
the component:

- **[NO TRACKING]** This call allows you to launch the component's functionality as normal, but **[NO TRACKING]** This call allows you to launch the component's functionality as normal.
  functionality of the component normally, but **no event will be tracked** to the _tracking_ server.
  event to the _tracking_ server:

```java
let controller = PhingersController(data: phingersConfigurationData, output: output, viewController: viewController)
SDKController.shared.launch(controller: controller)
```

- **[WITH TRACKING]** This call allows the component's functionality to be launched as normal.
  functionality of the component normally, but internal events will be tracked to the _tracking_ server.
  events to the _tracking_ server:

```java
let controller = PhingersController(data: phingersConfigurationData, output: output, viewController: viewController)
SDKController.shared.launchMethod(controller: controller)
```
The **launch** method must be used **by default**. This method allows
use **_tracking_** if your component is enabled, and will not use it when it is
when it is deactivated (or the component is not installed).
installed).

On the other hand, the **launchMethod** method covers a special case, in which the
where the integrator has tracking installed and activated, but in a given flow within the application does not want to use it when it is deactivated.
flow within the application does not want to track information.
In that case this method is used to avoid sending that information to the
to the platform.

---

## 6. Receipt of the result

The controllers will return the required information in SdkResult format
-more details in the [1.5.X][EN] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK's</a>***.	

The result is an _SDKResult_ object returned by the SDK shall always have
3 fields:

_finishStatus:_ which will indicate if the operation has been successfully completed.
correctly. Possible values:

```java
FinishStatus.STATUS_OK
FinishStatus.STATUS_ERROR
```

_errorType:_ If the finishStatus indicates that there has been an error, this field shall have a description of the error: `````.
field shall contain the description of the error:

```java
CANCEL_BY_USER: The user has cancelled the operation.
TIMEOUT: The set time has elapsed without a successful completion of the process.
COMPONENT_CONTROLLER_ERROR: The controller has not been initialised correctly. Check the init and setup functions.
COMPONENT_CONTROLLER_DATA_ERROR: The init or setup data of the controller is not correct.
NETWORK_CONNECTION: Internet connection error.
UNKNOWN_ERROR: Unhandled error.
ACTIVITY_RESULT_ERROR: Error in the internal screen flow of the controller.
LOW_QUALITY: The captured image is not of sufficient quality.
NFC_ERROR: NFC reading error.
QR_ERROROR: QR reading error.
NO_ERROROR: No error occurred.
HARDWARE_ERROROROR: Selphi/SelphId widgets hardware error
EXTRACTION_LICENSE_ERROROR: Selphi/SelphId widgets licensing error
UNEXPECTED_CAPTURE_ERROR: Error during the capture process of the Selphi/SelphId widgets
CONTROL_NOT_INITIALIZATED_ERROROR: Internal Selphi/SelphId widgets error
BAD_EXTRACTOR_CONFIGURATION_ERROR: Selphi/SelphId widgets internal error
TOKEN_ERROR: Error in the request for the tracking token
PHINGERS_ERROR_CAPTURE: Fingerprint capture error
LICENSING_ERROR_PACKAGE_NAME: Licensing error indicating that the package name is incorrect.
LICENSING_ERROR_APPID_INVALID: Licensing error indicating that the APPID is incorrect.
LICENSING_ERROR_APIKEY_FORBIDDEN: Licensing error indicating that the APIKEY is incorrect.
LICENSING_ERROR_ERROR_LICENSE_NOT_FOUND: Licensing error indicating that no license was found.
```

_data:_ Shall contain the response data of the executed component function.
executed. Section 7.1** specifies the fields that are included in this component.
included in this component.

### 6.1 Content of the _data_ field

The result returns the images in **Bitmap** format, it is possible to
convert the images to **Base64** as follows:

`Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)`.

The _data_ field is variable and will depend on which component the result was returned.
the result has been returned. In the case of this component, the returned fields are
the following:

#### 6.1.1 _focusQuality_.

Returns the best image extracted from the authentication process in
Base64 string format. This image is the original size image
extracted from the camera. Valid for the **liveness** process.

#### 6.1.2 _fullFrameImage_

Returns a cropped image centred on the user's face in Base64 string format.
string Base64 format. This image is obtained from the _bestImage_. This
is the image that shall be used as the characteristic image of the
user who performed the process as the _avatar_.

#### 6.1.3 _livenessConfidence_

Returns the best image extracted from the authentication process in
Bitmap format. This image is the original size image extracted from the camera.
from the camera. Valid for the **liveness** process.

#### 6.1.4 _fingersResult_.

This is a list of **_FingerResult_** objects, containing all the information associated with each finger.
information associated with each of the captured fingers.

#### 6.1.4.1 wsq

The fingerprint capture is returned in WSQ format.

#### 6.1.4.2 fingerprintTemplate

Returns the fingerprint template, used for further validation.

#### 6.1.4.3 rawFingerprintImage

Returns the raw, unmodified image of the current fingerprint.

#### 6.1.4.4 processedFingerprintImage

Returns the processed fingerprint image.

#### 6.1.4.5 nfiqMetrics

These are the metrics of the capture. Currently the following is returned.
value:

- nfiqMetric**: An integer value, between 1 and 5 (inclusive),
  indicating the quality of the fingerprint capture, with 1 indicating the highest quality and 5 the worst quality.
  indicates the highest quality and 5 the worst quality. Fingerprints with the latter value
  The latter value is usually discarded for further validation.

---

## 7. Component customisation

Apart from the changes that can be made at the SDK level (which are explained in the **Core Component** document), the
are explained in the **Core Component** document), this particular component allows the modification of specific texts.
component allows the modification of specific texts.

### 7.1 Texts

If you want to modify the SDK texts you would have to include the following XML file in the client application
following XML file in the client application, and modify the value of each _String_ to
value of each _String_ to the desired one.

```java
<!-- PHINGERS -->
<string name="phingers_component_left_hand">Prepare your left hand for the catch</string>.
<string name="phingers_component_right_hand">Prepare your right hand for capture</string>
<string name="phingers_component_action_text">Take fingerprints</string>
<string name="phingers_component_capture_phingers">Hold fingers steady</string>
<string name="phingers_component_capture_thumb">Hold finger steady</string>
<string name="phingers_component_capture_phingers_not_focus">Move fingers until in focus</string>
<string name="phingers_component_capture_thumb_not_focus">Move finger until in focus</string>
```

---
