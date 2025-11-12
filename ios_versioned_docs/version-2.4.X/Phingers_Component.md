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

For more information on the base configuration, go to the [Getting Started](./Mobile_SDK#11-minimum-requirements) section.

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
Before integrating this component, it is recommended to read the
documentation related to [Initial Integration](./Mobile_SDK#2-initial-integration) and follow the instructions given in that document.
</div>

This section will explain step by step how to integrate the current
component into an existing project.

### 2.1. Dependencies required for integration

To avoid conflicts and compatibility problems, if you want to install
the component in a project containing an old Facephi libraries
(_Widgets_) version, these must be removed entirely before installing
the **_SDKMobile_** components.

- Currently FacePhi libraries are distributed remotely through
  different dependency managers, in this case Cocoapods.
  The **mandatory** dependencies that must have been previously installed
  (adding them to the project's Podfile file) are:

The mandatory dependencies that must have been previously installed (adding them to the project's Podfile file) are:

```java
  pod 'FPHISDKMainComponent', '~> 2.4.0'.
```

- To install the current component, the following entry must be included in the _Podfile_ of the project
  entry in the _Podfile_ of the application:

  ```java
  pod 'FPHISDKPhingersTFComponent', '~> 2.4.0'.
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

To learn more about how to start a new operation, it is recommended to consult the [Start a new operation](./Mobile_SDK#4-start-a-new-operation) documentation, which details and explains what this process consists of.
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

Sets the hand which is going to be captured. The allowed values are:

- **LEFT**: Enables the capture of the **fingers** of the
  **left** **hand**.

- **RIGHT**: Enables the capture of the **fingers** of the
  **left** **hand**.

#### 5.1.2 fingerFilter

Sets the fingerprint detection mode and indicates which fingers are to
be detected during the process. The allowed values are:

- **INDEX_FINGER**: Enables the capture of the **index** **finger**.

- **MIDDLE_FINGER**: Enables the capture of the **middle** **finger**.

- **RING_FINGER**: Enables the capture of the **ring** **finger**.

- **LITTLE_FINGER**: Enables the capture of the **little** **finger**.

- **THUMB_FINGER**: Enables the capture of the **thumb** **finger**.

- **SLAP**: Enables the capture of the **four** **fingers** with a single photo.

- **ALL_4_FINGERS_ONE_BY_ONE**: Enables the capture of the **four** **fingers** of the selected hand one by one.

- **ALL_5_FINGERS_ONE_BY_ONE**: Enables the capture of the **five** **fingers** of the selected hand one by one.

#### 5.1.3 templateType

Specifies whether the capture process shall return the fingerprint template in the result.
It is an enumerated of type **_TemplateType_**, and each value would be:

- **ISO_TEMPLATE**: This template type refers to the standard **ISO/IEC 19794-4**.

- **NIST_TEMPLATE**: This template type refers to the NIST standard.

- **NIST_TF_TEMPLATE**: **This is the default value.** This type of template is a proprietary template,
  compatible with scaling change, and very useful for different validation processes.

#### 5.1.4 extractionTimeout

Sets the maximum time that the capture can be performed.

#### 5.1.5 showPreviousTip

Displays a pre-launch screen with information about the process to be performed and a launch button.

#### 5.1.6. showTutorial

Indicates whether the component activates the tutorial screen. This view
intuitively explains how the capture is performed.

#### 5.1.7. vibrationEnabled

Indicates whether vibration feedback is desired at the end of the
process.

#### 5.1.8 showDiagnostic

Display diagnostic screens at the end of the process

#### 5.1.9 threshold

Sets the fingerprint detector's threshold. **Default value is 0.7.**

#### 5.1.10 showEllipses

Draw an ellipse in the capture screen on detected fingerprint.

#### 5.1.11 cropWidth & cropHeight

Sets the width and height of the cropped capture photo.

---

## 6. Use of the component

Once the component has been started and a new operation has been created
(**Section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows launching the functionality
  of the component normally, and **the internal events will be tracked** to the _tracking_ server:

```java
let controller = PhingersController(data: phingersConfigurationData, output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
SDKController.shared.launch(controller: controller)
```
- **\[WITHOUT TRACKING\]** This call allows launching the functionality
  of the component normally, but events **will not be tracked** to the _tracking_ server:

```java
let controller = PhingersController(data: phingersConfigurationData, output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
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

### 7.1. Error's management

On the error side, we will have the common enum _ErrorType_.

```java
public enum ErrorType: Equatable, Error {
    //COMMON - BASIC
    case NO_ERROR
    case UNKNOWN_ERROR
    case OTHER(String)
    
    //COMMON - REQUIREMENTS
    case NO_DATA_ERROR
    case NO_OPERATION_CREATED_ERROR
    case NETWORK_CONNECTION
    
    //COMMON - PERMISSIONS
    case CAMERA_PERMISSION_DENIED
    case MIC_PERMISSION_DENIED
    case LOCATION_PERMISSION_DENIED
    case STORAGE_PERMISSION_DENIED
    
    //COMMON - USER'S INTERACTION
    case CANCEL_BY_USER
    case TIMEOUT
    
    //COMMON - LICENSE ERROR
    case LICENSE_CHECKER_ERROR(String)
    case MISSING_COMPONENT_LICENSE_DATA
    case COMPONENT_LICENSE_ERROR
    case EMPTY_LICENSE
}
```

The errors 'ErrorType.OTHER' and 'ErrorType.LICENSE_CHECKER_ERROR' are special because they also inform of
the error's details.

The _String_ can have this values in the OTHER's case:

```java
public enum PhingersError: String {
    case INITIALIZATION_ERROR
    case NO_FINGER_DETECTED
    case FINGERPRINT_TEMPLATE_IO_ERROR
    case LOW_QUALITY
    case CAMERA_FAILURE
    case CAPTURE_FAILURE
    case CONFIGURATION_FAILURE
    case TEMPLATE_CREATION_ERROR
}
```

### 7.2 Receipt of correct execution - _data_

In the data part, we have the _PhingersResult_ class.
The fields returned are the following:

#### 7.1.1 _fingers_

##### 7.1.1.1. position

Returns an integer that represents the captured element. This value is set as instructed
in the NIST_POS_CODE.

##### 7.1.1.2. displayImage

Returns the processed image.

##### 7.1.1.3. wsq

The fingerprint capture in WSQ format is returned.

##### 7.1.1.4. minutiaesNumber

Returns the number of minutiaes found in the biometric capture.

##### 7.1.1.5. quality

Integer that represents the quality of the element after processing.

##### 7.1.1.6 nistQuality

Integer that represents the quality of the element after processing with NIST standards.

##### 7.1.1.7 nist2Quality

Integer that represents the quality of the element after processing with an alternative version of the NIST standards.

##### 7.1.1.8 livenessScore

Returns an indicator of the confidence level of the capture.

#### 7.1.2 _slapImages_

##### 7.1.2.1. position

Returns an integer that represents the captured element. This value is set as instructed
in the NIST_POS_CODE.

##### 7.1.2.2. image

Returns the processed image.

##### 7.1.2.3. livenessScore

Returns an indicator of the confidence level of the capture.

---

## 8. Component customization

Apart from the changes that can be made at SDK level (which are
explained in the [SDK Customization](./Mobile_SDK#9-sdk-customization)
document), this particular component allows the modification of specific animations, images, fonts, colors and
texts.

To customize the component, ThemePhingersManager.setup(theme:`CustomThemePhingers()` ) must be called after initializing the PhingersController:

```java
let phingersController = PhingersController(data: PhingersConfigurationData(), output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
ThemePhingersManager.setup(theme: CustomThemePhingers())
SDKController.shared.launch(controller: phingersController)
```

For example:

```java
class CustomThemePhingers: ThemePhingersProtocol {
    public var name: String {
        "custom"
    }

    public var fonts: [R.Font: String] {
        [.bold: "Arial"] // the font is overrided
    }

    var images: [R.Image: UIImage?] = [R.Image.ic_sdk_close: UIImage(named: "closeIcon")!]

    var colors: [R.Color: UIColor?] = [R.Color.sdkPrimaryColor: UIColor.red]

    var fonts: [R.Font: String] = [:]

    var animations: [R.Animation: String] = [:]

    public var dimensions: [R.Dimension: CGFloat] {
        [.fontSmall: 7,
         .fontRegular: 12,
         .fontBig: 20,
         .radiusCorner: 16]
    }
}
```

### 8.1 Images

- The images initialize in the variable images, passing it a dictionary, being the key one of the enumerated ones that represent the different images of the screen, and the value the customized image to be shown.

```java
case ic_sdk_close
case ic_sdk_close_arrow
```

### 8.2 Colors

- The colors are initialized similarly in the colors variable with a dictionary, having as value a UIColor of your choice.

```java
// COMMON SDK Colors 
case sdkPrimaryColor
case sdkBackgroundColor
case sdkSecondaryColor
case sdkBodyTextColor
case sdkTitleTextColor
case sdkSuccessColor
case sdkErrorColor
case sdkNeutralColor
case sdkAccentColor
case sdkTopIconsColor
// Phingers Specific Colors
case sdkButtonTextColor
```

### 8.3 Fonts

Fonts are similarly initialized in the `fonts` variable with a dictionary, having as value a **String** with the name of the desired **UIFont**.

```java
case regular
case bold
```

- The size of the texts is similarly initialized in the dimensions variable with a dictionary, having as value a **CGFloat** with the desired size.

### 8.4 Animations

Animations are similarly initialized in the `animations` variable with a dictionary, having as value a **String** with the name of the desired **JSON Lottie**.

```java
case phingers_anim_tip_left
case phingers_anim_tip_right
case phingers_anim_tip_thumb
```

### 8.5 Texts - Multi-Language

#### 8.5.1 Default language settings

If the package is installed via **SPM**, for text localization to work, the following needs to be added to the **Info.plist** file of the integrator app:

**CFBundleAllowMixedLocalizations = YES**.

It would look like this:

![Image](/ios/sdkVideo-infoplist-image.png)

- English - Spain

- Spanish - Spain

- Portuguese - Portugal

The component's language can be configured with the **_locale_** parameter of the *_initSdk_* function.
If not configured, by default, the SDK chooses the established lnaguage of the device.

- If the language is any language whose root is Spanish (e.g. Spanish - Mexico), by default, it will use Spanish - Spain.

- If the language is any language whose root is Portuguese (e.g. Portuguese - Brazil), by default, it will use Portuguese - Portugal.

- For any other case, English will be used.

#### 8.5.2 Customized Language Configuration

The component allows the customization of texts according to the language, which as in the previous case, will be defined by the language that is selected on the device.

This customization applies to new localizations as well as to the case of the default languages (es, en and pt-PT). It is done through the use of **Localizable.strings.** files.

#### 8.5.3 Keys for multi-languages

The texts can be customized by overriding the value of these keys inside a **Localizable.strings**. The ones with an **_\_alt_** suffix are the accesibility label's needed for the **_voice over_** functionality to work.

```java
/*  PhingersLocalizable view  */
"phingers_tf_component_tip_title_left" = "Left handprints";
"phingers_tf_component_tip_title_right" = "Right handprints";
"phingers_tf_component_tip_title_thumb" = "Thumb print";
"phingers_tf_component_tip_button_message" = "START";
"phingers_tf_component_tip_desc" = "Put your fingers together. Zoom your hand in or out until your fingerprints come into focus.";
"phingers_tf_component_capture_phingers" = "Keep your fingers steady";
"phingers_tf_component_capture_thumb" = "Hold your finger steady";
"phingers_tf_component_capture_phingers_not_focus" = "Move your fingers until they are in focus";
"phingers_tf_component_capture_thumb_not_focus" = "Move your finger until it is in focus";
"phingers_tf_component_timeout_title"="Timeout";
"phingers_tf_component_timeout_desc"="We apologize. The capture could not be made";
"phingers_tf_component_exit_alert_question" = "Are you sure to exit the process?";
"phingers_tf_component_exit_alert_cancel"="Cancel";
"phingers_tf_component_exit_alert_finish" = "Finish";
"phingers_tf_component_exit_alert_accept" = "Accept";

// WIDGET
"phingers_tf_component_label_frame" = "Keep your fingers steady";
"phingers_tf_component_label_morethan_expected_fingers" = "More than %d %@";
"phingers_tf_component_label_fingers" = "Fingers";
"phingers_tf_component_label_finger" = "Finger";
"phingers_tf_component_label_hold_fingers_horizantally" = "Hold %@ horizontally";
"phingers_tf_component_label_hold_fingers_vertically" = "Hold %@ vertically";
"phingers_tf_component_label_tooFar" = "Please bring your hand closer";
"phingers_tf_component_label_tooClose" = "Please move your hand further";
"phingers_tf_component_label_lowFocus" = "Low focus. Try to move hand";
"phingers_tf_component_label_goodFocus" = "Hold your hand steady";
"phingers_tf_component_label_right_4_fingers" = "Right 4 fingers";
"phingers_tf_component_label_left_4_fingers" = "Left 4 fingers";
"phingers_tf_component_label_thumbs" = "Thumbs";
"phingers_tf_component_label_right_thumb" = "Right thumb";
"phingers_tf_component_label_left_thumb" = "Left thumb";
"phingers_tf_component_label_right_index" = "Right index finger";
"phingers_tf_component_label_right_middle" = "Right middle finger";
"phingers_tf_component_label_right_ring" = "Right ring finger";
"phingers_tf_component_label_right_little" = "Right little finger";
"phingers_tf_component_label_left_index" = "Left index finger";
"phingers_tf_component_label_left_middle" = "Left middle finger";
"phingers_tf_component_label_left_ring" = "Left ring finger";
"phingers_tf_component_label_left_little" = "Left little finger";
"phingers_tf_component_label_progress" = "Processing...";
"phingers_tf_component_label_right" = "Right";
"phingers_tf_component_label_left" = "Left";
"phingers_tf_component_label_four_fingers" = "4 fingers";
"phingers_tf_component_label_left_or_right_num_fingers" = "%@ %d fingers";
"phingers_tf_component_label_thumb" = "thumb";
"phingers_tf_component_label_hand" = "Hand";
"phingers_tf_component_label_wronghand" = "Wrong hand detected\nPlease present %@";
"phingers_tf_component_label_too_few_fingers_detected" = "Too few fingers detected";
```

Thus, if you want to modify for example the text "_START_" of the key `phingers_tf_component_tip_button_message` for the language **en-EN**, you must go to the file **Localizable.strings** in the folder **en-EN.lproj** if it exists (if not, you must create it) and there, add:

`"phingers_tf_component_tip_button_message"="BEGIN";`.

If a message is not specified in the language file, it will be filled with the default message.
