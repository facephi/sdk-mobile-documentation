# SelphID Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (**Components**) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Certain components must
be installed depending on the use case required. Its high level of
modularity allows other new components to be added in the future without
affecting those already integrated into the project.

For more information on the base configuration, go to the [Getting Started](./Mobile_SDK#11-minimum-requirements) section.

---

## 1. Introduction

The _Component_ dealt with in the current document is called **_SelphID
Component_**. It is in charge of capturing documents and the subsequent
extraction and analysis of their data. Its main functionalities are the
following:

- Internal management of cameras.

- Permits management.

- Assistant in the processes of capturing the front and back of the
  document. Extraction of the information contained in the document.

- Obtain the images of the back and reverse side of the document, as
  well as other images included in the document: user's face, user's
  signature, etc.

- High level of configuration: different countries, languages,
  document types...

---

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

In order to avoid conflicts and compatibility problems, in case you want to
install the component in a project containing an old version of the Facephi libraries.
of the Facephi libraries (_Widgets_), these must be completely removed before the installation of the components.
completely before the installation of the components of the **_SDKMobile_** components.

#### Cocoapods

- Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The **mandatory** dependencies that must have been previously installed (adding them in the Podfile file of the project) are:

```
  pod 'FPHISDKMainComponent', '~> 2.6.0'
```

- To install the SelphID component, the following entry must be included in the application Podfile:

```
  pod 'FPHISDKSelphIDComponent', '~> 2.6.0'
```

- Once the dependencies are installed, the different functionalities of the component can be used.

- In case of development with **XCode15** a post-installation script must be included:

![Image](/ios/fix_ldClassic.png)

#### SPM

- The mandatory dependencies that must have been previously installed are:

```
//HTTPS
https://github.com/facephi-clienters/SDK-SdkPackage-SPM.git
//SSH
git@github.com:facephi-clienters/SDK-SdkPackage-SPM.git
```

- To install the SelphID component, it must be included in the project modules:

```
//HTTPS
https://github.com/facephi-clienters/SDK-SelphidComponentLight.git
//SSH
git@github.com:facephi-clienters/SDK-SelphidComponentLight.git
```

### 2.2 Permissions and configurations

In the client application where the components are going to be integrated it is necessary to incorporate the following elements in the **Info.plist** file.

It is necessary to allow the use of the camera (Privacy - Camera Usage Description).

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

|                   |                                      |
| ----------------- | ------------------------------------ |
| **Controller**    | **Description**                      |
| SelphIDController | Document recognition main controller |

---

## 5. Component configuration

Once initialized, a _SelphIDConfigurationData_ object must be created
and passed as a parameter to the SDKController during component launch
to configure the current component.

The following section will show the fields part of this class and what
each is used for.

### 5.1 Class SelphIDConfigurationData

#### 5.1.1 Basic Configuration

##### ResourcesPath

This is the name of the resource bundle that contains all the elements of the interface

##### WizardMode

Indicates whether the widget is configured to capture both parts (front and back) of the document one after the other. In this mode the widget would only be launched once and when it finishes capturing the front, it would continue with the back.

##### ShowResultAfterCapture

Indicates whether or not to show a screen with the captured image of the document after the analysis process. This screen gives the user the possibility to repeat the capture process if the image obtained from the document is not correct.

##### ShowTutorial

This property allows to show the tutorial prior to the capture process.

##### ScanMode

Specifies the OCR scanning mode of the documents. Depending on the choice, several types of documents or a specific one will be scanned and searched. This mode can be of three types:

- **SelphIDScanMode.MODE_GENERIC:** The generic mode that allows scanning any type of document independent of country or document type. The output of this mode is not as accurate as the following but it allows to scan several standard documents.

- **SelphIDScanMode.MODE_SPECIFIC:** The search mode will allow to use a whitelist and blacklist, and will search the documents that meet these conditions. These conditions are indicated in the variable "specificData". This allows the search to be performed by narrowing the number of templates, and making the search much more refined than in the generic case.

- **SelphIDScanMode.MODE_SEARCH:** Search for a specific document. These conditions are indicated in the "specificData" property shown below.

##### SpecificData

This property allows to define which documents will be scanned during the process, in case of declaring the scan mode (scanMode) to SMSearch or SMSpecific.

An example configuration allowing to scan all documents of Spanish nationality would be the following:

```
// Search mode definition
conf.scanMode = SelphIDScanMode.MODE_SEARCH
conf.specificData = “ES|<ALL>” // Código ISO de España (ES)
```

##### DocumentType

The allowed values are as follows:

- **SelphIDDocumentType.ID_CARD:** The widget is configured to perform ID document capture.

- **SelphIDDocumentType.PASSPORT:** The widget is configured to capture passports.

- **SelphIDDocumentType.DRIVERS_LICENSE:** The widget is configured to capture driver's licenses.

- **SelphIDDocumentType.FOREIGN_CARD:** The widget is configured to capture foreign documents.

- **SelphIDDocumentType.CUSTOM:** The widget is configured to capture other types of documents that do not fall into any of the above categories.

##### ShowDiagnostic

If set to true, when an error or lack of permissions occurs, the sdk will display a screen with the error returned by the widget.

#### 5.1.2 Advanced configuration

##### Debug

When this attribute is set to true, the number of traces is increased and technical information is displayed on the screen.

**Once the development is finished, it must be set to false.**

##### TutorialOnly

This property allows to show **only the tutorial**, without launching later the capture process.

##### TokenImageQuality

It indicates the quality of the JPEG that is generated and then tokenized, its default and recommended value is **"0.5"**. Its result is merely informative, its use is not recommended for authentication.

##### Locale

Since version 2.4.X this parameter is no longer configured at component's level. Now it's being done in the initSdk. See [Optional parameters in the initSdk](./Mobile_SDK#325-locale).

It is a String that allows to change the locale and language of the widget. Examples of values it can have are the following:

- "es" for Spanish.

- en" for English.

- fr" for French.

In short, it will depend on the name that appears in the strings.xml file of the language you want to select (`strings-es.xml`, `strings-en.xml`, `strings-fr.xml`).

In the resources zip, which is located inside the strings folder, you can add the `strings-xx.xml` files corresponding to each localization you need to incorporate in the widget.

##### DocumentSide

The allowed values are the following:

- **SelphIDDocumentSide.FRONT:** The widget is configured to capture the front side of the document.

- **SelphIDDocumentSide.BACK:** The widget is configured to capture the back side of the document.

- **SelphIDDocumentSide.ALL:** The widget is configured to capture both sides of the document.

##### Timeout

It is an enumerated that defines the timeout of the capture of one side of the document. It has 3 possible values:

- **SelphIDTimeout.SHORT:** 15 seconds.

- **SelphIDTimeout.MEDIUM:** 20 seconds.

- **SelphIDTimeout.LONG:** 25 seconds.

##### GenerateRawImages

This property configures the widget to return the full image from the camera that was used to capture the document. These images are returned in the `rawFrontDocument` and `rawBackDocument` properties of the `results` object respectively.

##### TranslationsContent

This property supports an xml where you provide translations to the messages that are defined in the widget

##### ViewsContent

This property supports an xml where you provide modifications to the widget appearance, colors, proportions... that are defined.

##### DocumentModels

This property allows, by means of a string in xml format, to configure the modeling of the documents that the widget will try to capture. The definition of this modeling is contained, by default, in a .xml of models that is in the .zip of resources. This property allows an application to update, in hot, the modeling of the documents.

Note: This property does not alter the content of the resource file.

#### 5.1.3 Other parameters

##### VideoFilename

Sets the absolute path to the filename where a video of the capture process will be recorded. The application is responsible for requesting the necessary permissions from the phone in case that path requires additional permissions. The widget, by default, will not perform any recording process unless a file path is specified using this method.

##### TokenPreviousCaptureData

When the document capture is performed in 2 calls, this property allows to pass a dictionary with the information from the previous capture. This way the widget can combine the results of both reads in a smart way and thus return the combined information from both captures. It also allows the widget to calculate a degree of similarity of the data from both sides.

In case both sides of the document are captured in a single call this is not necessary as the widget internally does this process.

##### vibrationEnabled

If true, vibration is enabled on errors and if the widget response is OK, the following is true

---

## 6. Using the component

Once the component has been started and a new operation has been created
(**Section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component, but internal events will be tracked to the
  _tracking_ server:

```
let controller = SelphIDController(data: selphIDConfigurationData, output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
SDKController.shared.launch(controller: controller)
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component, but **no event will be tracked** to
  the _tracking_ server:

```
let controller = SelphIDController(data: selphIDConfigurationData, output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
SDKController.shared.launchMethod(controller: controller)
```

The **launch** method must be used by **default**. This method allows
**_tracking_** if your component is enabled and will not be used when it
is disabled (or the component is not installed).

On the other hand, the **launchMethod** method covers a particular case
in which the integrator has tracking installed and activated but, in a
certain flow within the application does not want to track information.
In this case, this method is used to prevent this information from being
sent to the platform.

---

## 7. Receipt of the result

The controllers will return the required information in SdkResult format. More details in the [Result Return](./Mobile_SDK#6-result-return) section.

### 7.1. Error's management

_finishStatus_: Which will tell us if the operation has finished successfully. Possible values:

```java
FinishStatus.STATUS_OK
FinishStatus.STATUS_ERROR
```

_data_: It will have the response data of the executed component function. The fields included in this component are specified in section 7.2.

_errorType_: Specified in a common ErrorType enum:

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
    case SELPHID_TIMEOUT(UIImage?, UIImage?)
    
    //COMMON - LICENSE ERROR
    case LICENSE_CHECKER_ERROR(String)
    case MISSING_COMPONENT_LICENSE_DATA
    case COMPONENT_LICENSE_ERROR
    case EMPTY_LICENSE
}
```

**IMPORTANT: SelphIDComponent doesn't use the common ErrorType.TIMEOUT, it uses instead SELPHID_TIMEOUT. This error provides two optional UIImages. This images can contain the document's front and back and could be used to give further information to the integrator.**

The OTHER case can contain these values:

```java
public enum SelphIDError: String, Equatable {
    case RESOURCES_FILE_NOT_FOUND
    case INITIALIZATION_ERROR
    case CONSUMED_BY_LICENSE_ERROR
    
    //Widget Errors
    case BAD_CONFIGURATION_ERROR
    case WIDGET_RESULT_DATA_ERROR
    case BAD_EXTRACTOR_CONFIGURATION_ERROR
    case CONTROL_NOT_INITIALIZED_ERROR
    case EXTRACTION_LICENSE_ERROR
    case HARDWARE_ERROR
    case SETTINGS_PERMISSION_ERROR
    case UNEXPECTED_CAPTURE_ERROR
}
```

### 7.2. Receiving successful execution - data

The data field is variable and will depend on which component the result was returned. In the case of this component, the fields returned are as follows:

#### 7.2.1 rawFrontDocumentData / rawFrontDocument / frontDocument / frontDocumentData / tokenFrontDocument / tokenRawFrontDocument:

The front image of the processed document, cleaned and trimmed by the edges and its corresponding token.

#### 7.2.2 rawBackDocumentData / rawBackDocument / backDocument / backDocumentData / tokenBackDocument / tokenRawBackDocument:

The back image of the processed, cleaned and edge-trimmed document and its associated token.

#### 7.2.3 faceImage / faceImageData / tokenFaceImage.

The image of the face found in the document, if any, and its associated token.

#### 7.2.4 documentCaptured

This property indicates the document model that has been captured when a search is performed in SMSearch mode. In this way the application can know which model, among all the allowed ones, has been detected.

#### 7.2.5 matchingSidesScore

This property returns a calculation of the similarity of the data read between the front and the back of the document. The calculation is performed by checking the similarity between the common fields read on both sides. The result of the calculation will be a value between 0.0 and 1.0 if there are common fields in the document. The higher the value, the more similar the data compared. If the calculation returns -1.0 then the document does not contain common fields or there is no information from the two sides yet.

#### 7.2.6 Property captureProgress

This property returns the state in which the capture process was when the widget finished. These are the possible values:

```
Front_Detection_None = 0
Front_Detection_Uncertain = 1
Front_Detection_Completed = 2
Front_Document_Analyzed = 3
Back_Detection_None = 4
Back_Detection_Uncertain = 5
Back_Detection_Completed = 6
Back_Document_Analyzed = 7
```

- **0**: When reading the Front, the widget ended without being able to detect anything. Generally when no document is put in.

- **1**: In the Front reading, the widget ended up having partially detected a document. In this case some of the expected elements have been detected, but not all the necessary ones.

- **2**: In the Front reading, the widget ended up having completed the detection of all the elements of the document. If the widget ends up in this state, it is because the OCR analysis could not be completed successfully.

- **3**: In the Front reading, the widget ended up having analyzed and extracted all the OCR from the document. This is the state in which a successful Front reading of a document would end.

The states **4 to 7** are exactly the same but refer to the result of the process when the back is analyzed.

#### 7.2.7 ocrResults / tokenOCR

This dictionary contains all the data detected in the document. The keys of each field are encoded in such a way that the key itself contains information on where the value was obtained from. Thus, for example, the key Front/MRZ/DocumentNumber indicates the value of the DocumentNumber that has been read in the Front of the document and in the MRZ region. These keys depend on the captured document and will therefore be different between different countries and document models. The dictionary also contains keys with more generic names and which do not carry location information. These keys contain the most complete data of all those read for that field.

These keys are as follows:

- **FirstName**: The value associated with this key contains the user's first name.

- **LastName**: The value associated with this key contains the user's last name.

- **DateOfBirth**: The value associated with this key contains the date of birth detected in the document.

- **Gender**: The value associated to this key contains the user's gender detected in the document.

- **Nationality**: The value associated to this key contains the nationality of the user detected in the document.

- **DocumentNumber**: The value associated with this key contains the document number.

- **DateOfExpiry**: The value associated with this key contains the expiry date of the document.

- **Issuer**: The value associated with this key contains the publisher of the document.

- **DateofIssue**: The value associated with this key contains the date of issue of the document.

- **PlaceOfBirth**: The value associated with this key contains the user's place of birth.

- **Address**: The value associated to this key contains the address detected in the document.

Additionally, keys of the results object itself are added to make it easier to search for:

- **DocumentCaptured**: Value of the document template that has been captured according to the .xml of templates. Corresponds to the documentCaptured property.

- **MatchingSidesScore**: Value that indicates the correspondence between the read sides of the document. It corresponds to the matchingSidesScore property.

---

## 8. Component customization

Apart from the changes that can be made at SDK level (which are
explained in the [SDK Customization](./Mobile_SDK#9-sdk-customization)
document), this particular component allows the modification of specific
texts.

### 8.1 Customizing the animations

The SelphID Component uses these animations:

```
    enum Animation: String, CaseIterable {
        case selphid_anim_tip
        case selphid_anim_tip_id_male
        case selphid_anim_tip_id_female
        case selphid_anim_tip_pass_male
        case selphid_anim_tip_pass_female
        case selphid_anim_tip_driver_male
        case selphid_anim_tip_driver_female
        case selphid_anim_tip_custom
        case selphid_anim_tuto_id_1
        case selphid_anim_tuto_id_2
        case selphid_anim_tuto_id_3
        case selphid_anim_tuto_pass_1
        case selphid_anim_tuto_pass_2
        case selphid_anim_tuto_pass_3
        case selphid_anim_tuto_driving_1
        case selphid_anim_tuto_driving_2
        case selphid_anim_tuto_driving_3
        case selphid_anim_tuto_custom_1
        case selphid_anim_tuto_custom_2
        case selphid_anim_tuto_custom_3
}
```

The default animations can be overrided by creating a file with the same name and extension (.json for animations) in the app's project.

In addition, the animations can also be decided dynamically on runtime. To do this, you need to create a custom "theme" class that implements ThemeSelphIDProtocol's interface:

```
import selphidComponent
class CustomThemeSelphID: ThemeSelphIDProtocol {
  var name: String = "custom"

  public var customBoolean: Bool = true
  var animations: [selphidComponent.R.Animation : String] {
    [.selphid_anim_tuto_id_1: "animation_step_id_card_first",
    .selphid_anim_tuto_id_2: "animation_step_id_card_second",
    .selphid_anim_tuto_id_3: "animation_step_id_card_third"
    ]
  }
}
```

To customise the component, ThemeSelphIDManager.setup(theme: CustomThemeSelphID() ) must be called before launching the selphidController:

```
let selphidController = SelphIDController(data: SelphIDConfigurationData(), output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
ThemeSelphIDManager.setup(theme: CustomThemeSelphID())
SDKController.shared.launch(controller: selphidController)
```

##### 8.1.1 Main Tip Page

- **_selphid_anim_tip_**
  This animation is shown if the documentType configuration parameter is _FOREIGN_CARD_ or _CREDIT_CARD_.

```
var configSelphID = SelphIDConfigurationData()
...
configSelphi.documentType = SelphIDDocumentType.FOREIGN_CARD
```

![MobileCapture](/ios/SelphID/tips-001.png)

- **_selphid_anim_tip_id_male & selphid_anim_tip_id_female_**
  Both animations depict the same process but one with a man, and the other with a woman. By default, the _male_ is used.
  This animation is shown if the documentType configuration parameter is _ID_CARD_.

```
var configSelphID = SelphIDConfigurationData()
...
configSelphi.documentType = SelphIDDocumentType.ID_CARD
```

- **_selphid_anim_tip_pass_male & selphid_anim_tip_pass_female_**
  Both animations depict the same process but one with a man, and the other with a woman. By default, the _male_ is used.
  This animation is shown if the documentType configuration parameter is _PASSPORT_.

```
var configSelphID = SelphIDConfigurationData()
...
configSelphi.documentType = SelphIDDocumentType.PASSPORT
```

- **_selphid_anim_tip_driver_male & selphid_anim_tip_driver_female_**
  Both animations depict the same process but one with a man, and the other with a woman. By default, the _male_ is used.
  This animation is shown if the documentType configuration parameter is _DRIVERS_LICENSE_.

```
var configSelphID = SelphIDConfigurationData()
...
configSelphi.documentType = SelphIDDocumentType.DRIVERS_LICENSE
```

- **_selphid_anim_tip_custom_**
  Both animations depict the same process but one with a man, and the other with a woman. By default, the _male_ is used.
  This animation is shown if the documentType configuration parameter is _CUSTOM_.

```
var configSelphID = SelphIDConfigurationData()
...
configSelphi.documentType = SelphIDDocumentType.CUSTOM
```

##### 8.1.2 More Information - Tutorial's steps pages

The view that contains these animations is accessed by clicking on the More Information button of the Tip view.

- **_selphid_anim_tuto_id_1_**
  This animation is shown if the documentType configuration parameter is _ID_CARD_, _FOREIGN_CARD_ or _CREDIT_CARD_.

![MobileCapture](/ios/SelphID/tutorial-001.png)

- **_selphid_anim_tuto_id_2_**
  This animation is shown if the documentType configuration parameter is _ID_CARD_, _FOREIGN_CARD_ or _CREDIT_CARD_.

![MobileCapture](/ios/SelphID/tutorial-002.png)

- **_selphid_anim_tuto_id_3_**
  This animation is shown if the documentType configuration parameter is _ID_CARD_, _FOREIGN_CARD_ or _CREDIT_CARD_.

![MobileCapture](/ios/SelphID/tutorial-003.png)

- **_selphid_anim_tuto_pass_1_**
  This animation is shown if the documentType configuration parameter is _PASSPORT_. It is the first tutorial's step.

- **_selphid_anim_tuto_pass_2_**
  This animation is shown if the documentType configuration parameter is _PASSPORT_. It is the second tutorial's step.

- **_selphid_anim_tuto_pass_3_**
  This animation is shown if the documentType configuration parameter is _PASSPORT_. It is the third tutorial's step.

- **_selphid_anim_tuto_driving_1_**
  This animation is shown if the documentType configuration parameter is _DRIVERS_LICENSE_. It is the first tutorial's step.

- **_selphid_anim_tuto_driving_2_**
  This animation is shown if the documentType configuration parameter is _DRIVERS_LICENSE_. It is the second tutorial's step.

- **_selphid_anim_tuto_driving_3_**
  This animation is shown if the documentType configuration parameter is _DRIVERS_LICENSE_. It is the third tutorial's step.

- **_selphid_anim_tuto_custom_1_**
  This animation is shown if the documentType configuration parameter is _CUSTOM_. It is the first tutorial's step.

- **_selphid_anim_tuto_custom_2_**
  This animation is shown if the documentType configuration parameter is _CUSTOM_. It is the second tutorial's step.

- **_selphid_anim_tuto_custom_3_**
  This animation is shown if the documentType configuration parameter is _CUSTOM_. It is the third tutorial's step.

### 8.2 Texts

The texts can be customized by overriding the value of these keys inside a Localizable.strings. The ones with an **_\_alt_** suffix are the accesibility label's needed for the **_voice over_** functionality to work.

```java
"selphid_component_tutorial_1_desc"="Look for a background with good contrast.";
"selphid_component_tutorial_2_desc"="Place the document inside the box.";
"selphid_component_tutorial_3_desc"="Avoid glare that makes the document difficult to read.";
"selphid_component_tip_desc"="**Focus** your document **inside the box.** The photo will be taken automatically.";
"selphid_component_tip_title"="Document photo";
"selphid_component_tip_button_message"="START";
"selphid_component_tip_return_message"="RETURN";
"selphid_component_tip_id_alt" = "Animation of a mobile phone taking a photo of an identity document. The document appears horizontally, and the mobile phone appears vertically. A box appears on the mobile phone's screen. When the document fits inside the box, the app takes a photo.";
"selphid_component_tip_passport_alt" = "Animation of a mobile phone taking a photo of a passport. The document appears horizontally, open to the page where the photo appears. The mobile phone in a vertical position. A box appears on the mobile screen. When the page of the passport fits inside the box, the application takes a photo.";
"selphid_component_tip_driving_alt" = "Animation of a mobile phone taking a photo of a driving license. The document appears horizontally, and the mobile phone vertically. A box appears on the mobile screen. When the document fits inside the box, the app takes a photo.";
"selphid_component_tutorial_1_id_alt"="A white ID document is shown on a white background. The edges of the document are not clearly visible. Through an animation, the background changes color.";
"selphid_component_tutorial_2_id_alt"="A mobile phone takes a photo of an identity document. The document appears horizontally, and the mobile phone appears vertically. A box appears on the mobile phone's screen. When the document fits inside the box, the application takes a picture.";
"selphid_component_tutorial_3_id_alt"="An identity document, seen from the front. When tilted, reflections appear on the document.";
"selphid_component_tutorial_1_passport_alt"="A white passport is shown on a white background. The edges of the document are not clearly visible. Through an animation, the background changes color.";
"selphid_component_tutorial_2_passport_alt"="A mobile phone takes a photo of a passport. The document appears horizontally, and the mobile phone appears vertically. A box appears on the mobile phone's screen. When the document fits inside the box, the application takes a photo ";
"selphid_component_tutorial_3_passport_alt"="A passport, seen from the front. When tilted, reflections appear on the document.";
"selphid_component_tutorial_1_driving_alt"="A white driving license is shown on a white background. The edges of the document are not clearly visible. Through an animation, the background changes color.";
"selphid_component_tutorial_2_driving_alt"="A mobile phone takes a photo of a driving license. The document appears horizontally, and the mobile phone appears vertically. A box appears on the mobile phone's screen. When the document fits inside the box, the application does a picture.";
"selphid_component_tutorial_3_driving_alt"="A driving license, seen from the front. When tilted, reflections appear on the document.";
"selphid_component_tip_health_mad_alt"="Animation of a mobile phone taking a photo of a health card. The document appears horizontally, and the mobile phone in a vertical position. A box appears on the mobile screen. When the document fits inside the box, the application takes a photo.";
"selphid_component_tutorial_1_health_mad_alt"="A white health card is shown on a white background. The edges of the document are not clearly visible. Through an animation, the background changes color.";
"selphid_component_tutorial_2_health_mad_alt"="A mobile phone takes a photo of a health card. The document appears horizontally, and the mobile phone appears vertically. A box appears on the mobile phone's screen. When the document fits inside the box, the application makes a photo.";
"selphid_component_tutorial_3_health_mad_alt"="A health card, seen from the front. When tilted, reflections appear on the document.";
"selphid_component_tip_custom_alt" = "";
"selphid_component_tutorial_1_custom_alt" = "";
"selphid_component_tutorial_2_custom_alt" = "";
"selphid_component_tutorial_3_custom_alt" = "";
"selphid_component_timeout_title" = "Time exceeded";
"selphid_component_timeout_front_desc" = "Check that the front of the document is inside the box and the data are visible.";
"selphid_component_timeout_back_desc" = "Check that the back of the document is inside the box and the data are visible.";
"selphid_component_timeout_generic_desc" = "Check that the document is inside the box and the data is visible.";
```

Thus, if you want to modify for example the text "_START_" of the key `selphid_component_tip_button_message` for the language **en-EN**, you must go to the file **Localizable.strings** in the folder **en-EN.lproj** if it exists (if not, you must create it) and there, add:

`"selphid_component_tip_button_message"="BEGIN";`.

If a message is not specified in the language file, it will be filled with the default message.

### 8.3 Colors, images, dimensions and fonts

The customization of the other elements from previous images is done inside the [Status Component](./Status_Component).

### 8.4 Widget Customization

SelphID has two different parts, the first one is the tips and tutorial pages as stated in previous sections.
The second one is the capture widget.

![MobileCapture](/ios/SelphID/capture-001.png)

This widget can also be customized by following the instructions inside SelphID Resources.
