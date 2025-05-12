# SelphID Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (**Components**) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Certain components must
be installed depending on the use case required. Its high level of
modularity allows other new components to be added in the future without
affecting those already integrated into the project.

For more information on the base configuration, go to the
[Getting Started](./Mobile_SDK) section.

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

## 2. Integration of the component

Before integrating this component, it is recommended to read the
documentation related to [Getting Started](./Mobile_SDK)
and follow its instructions.

This section will explain step by step how to integrate the current
component into an existing project.

### 2.1. Dependencies required for integration

To avoid conflicts and compatibility problems, if you want to install
the component in a project containing an old Facephi libraries
(_Widgets_) version, these must be removed entirely before installing
the **_SDKMobile_** components.

- Currently, FacePhi libraries are distributed remotely through
  different dependency managers. **Mandatory** dependencies that must
  be installed beforehand:

  ```java
  implementation "com.facephi.androidsdk:selphid_component:$sdk_selphid_component_version"
  ```

### 2.1. Resources zip file

Table of sdk versions and associated resource versions (Found in the **Resources** section):

| **SDK version** | **Selphi resources version** |
| --------------- | ---------------------------- |
| 2.0.2           | 1.25.1                       |
| 2.0.3           | 1.26.0                       |
| 2.1.0           | 1.27.0                       |
| 2.1.1           | 1.28.1                       |
| 2.1.2           | 1.29.0                       |
| 2.2.0           | 1.30.1                       |
| 2.2.1           | 1.31.0                       |
| 2.2.2           | 1.31.2                       |
| 2.2.3           | 1.32.2                       |

---

## 3. Start a new operation

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

### 5.1. Class SelphIDConfigurationData

#### 5.1.0. _debug_

Activation of the component's debugging mode.

#### 5.1.1. _resourcesPath_

Specifies the name of the resources in **_zip_** format. Example:
"resources-selphid-2-0.zip".

This name will fetch the file from the _assets_ path.

![Image](/android/selphid_resources.png)

#### 5.1.2. _wizardMode_

Indicates whether the widget is configured to capture both parts (front
and back) of the document one after the other. In this mode, the widget
would only be launched once, and when it finishes capturing the front,
it would continue with the back.

#### 5.1.3. _showResultAfterCapture_

Indicates whether or not to display a screen with the captured image of
the document after the analysis process. This screen allows the user to
repeat the capture process if the image obtained from the document is
incorrect.

#### 5.1.4. _showTutorial_

Indicates whether the widget activates the tutorial screen. This view
intuitively explains how the capture is performed.

#### 5.1.5. _tutorialOnly_

Indicates if the widget is to be launched only to display the tutorial.

#### 5.1.6. _scanMode_

Indicates the OCR scanning mode for documents. Depending on the choice,
several documents or a specific one will be scanned and searched. This
mode can be of three types:

- **SelphIDScanMode.MODE_GENERIC:** The generic mode that allows
  scanning any document independent of country or document type. The
  result of this mode is not as accurate as the following modes, but
  it allows the scanning of several standard documents.

- **SelphIDScanMode.MODE_SEARCH:** The search mode shall allow the use
  of a whitelist and blacklist, and shall search the documents
  matching these conditions. These conditions are specified in the
  variable "specificData". This allows us to perform the search by
  narrowing the number of templates and making the search much more
  refined than in the generic case.

- **SelphIDScanMode.MODE_SPECIFIC:** Search for a specific document.
  These conditions are indicated in the "specificData" property shown
  below.

#### 5.1.7 _specificData_

This property allows you to define which documents will be scanned
during the process if you declare the scan mode (scanMode) to
**MODE_SEARCH** or **MODE_SPECIFIC**.

An example configuration allowing the scan all the documents of Spanish
nationality would be the following:

```java
val selphIDConfiguration = SelphIDConfigurationData(
    scanMode = SelphIDScanMode.MODE_SEARCH,
    specificData = "ES|<ALL>",  // ISO Code of Spain (ES)
)
```

#### 5.1.8 _locale_

This is a string that allows you to change the locale and language of
the widget. Examples of values they can have are as follows:

- ““ for use the system language

- “es” for Spanish.

- “en” for English.

- “fr” for french.

Ultimately, it will depend on the name that appears in the file
`strings.xml` of the language you want to choose (`strings-es.xml`,
`strings-en.xml`, `strings-fr.xml`).

In the resources zip, located inside the strings folder, you can add the
files `strings-xx.xml` corresponding to each location you need to
incorporate in the widget.

#### 5.1.9 _fullscreen_

Indicates whether the view will be prioritised for full-screen display
if the system allows it.

#### 5.1.9 _tokenImageQuality_

Indicates the amount of quality to be received in the tokenised images.
A value between 0 and 1.

#### 5.1.10. _documentType_

The permitted values are as follows:

- **SelphIDDocumentType.ID_CARD**: The widget is configured to capture
  identity documents.

- **SelphIDDocumentType.PASSPORT**: The widget is configured to
  capture passports.

- **SelphIDDocumentType.DRIVERS_LICENSE**: The widget is configured to
  capture driving licences.

- **SelphIDDocumentType.FOREIGN_CARD**: The widget is configured to
  capture foreign documents.

- **SelphIDDocumentType.CUSTOM**: The widget is configured to capture
  other types of documents that do not fall into the above categories.

- **WidgetSelphIDDocumentType.VISA**: The widget is configured to capture
  country's visa document. (SDK min 2.1.2)

#### 5.1.11 _documentSide_

The permitted values are as follows:

- **SelphIDDocumentSide.FRONT**: The widget is configured to capture
  the front side of the document

- **SelphIDDocumentSide.BACK**: The widget is configured to capture
  the back side of the document.

#### 5.1.12 _timeout_

It is an enum that defines the timeout of capturing one side of the
document. It has three possible values:

- SelphIDTimeout.SHORT: 15 seconds.

- SelphIDTimeout.MEDIUM: 20 seconds.

- SelphIDTimeout.LONG: 25 seconds.

- SelphIDTimeout.VERY_LONG: 60 segundos.

#### 5.1.13 _videoFilename_

Sets the absolute path to the filename where a video of the capture
process will be recorded. The application is responsible for requesting
the necessary permissions from the phone if that path requires
additional permissions. The widget, by default, will not perform any
recording process unless a file path is specified using this method.

#### 5.1.14 _DocumentModels_

This property allows a string in XML format to configure the modelling
of the documents that the widget will try to capture. The definition of
this modelling is contained, by default, in a .xml of models that can be
found in the .zip of resources. This property allows an application to
hot-update the modelling of the documents.

Note: This property does not alter the content of the resource file.

#### 5.1.15 _generateRawImages_

This property configures the widget to return the entire image from the
camera used to capture the document. These images are returned in the
rawFrontDocument and rawBackDocument properties of the resulting object,
respectively.

#### 5.1.16 _tokenPreviousCaptureData_

When the document capture is done in 2 calls, this property allows the
pass a dictionary with the information from the previous capture. This
way the widget can combine the results of both readings in an
intelligent way and thus return the combined information from both
captures. It also allows the widget to calculate a degree of similarity
of the data from both sides.

If both sides of the document are captured in a single call, this is
unnecessary as the widget does this process internally.

#### 5.1.17 _translationsContent_

This advanced property allows, through a string in XML format, to
configure the current translation of the component literals.

**Note**: This property does not alter the content of the resource file.

#### 5.1.18 _viewsContent_

This advanced property allows, through a string in XML format, to
configure the widget views.

**Note**: This property does not alter the content of the resource file.

#### 5.1.19. _showDiagnostic_

Display diagnostic screens at the end of the process

#### 5.1.20. _showPreviousTip_

Displays a pre-launch screen with information about the process to be performed and a launch button.

#### 5.1.21. _vibrationEnabled_

Indicates whether vibration feedback is desired at the end of the process.

---

## 6. Component use

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component, but internal events will be tracked to the
  _tracking_ server:

```java
val result = SDKController.launch(
    SelphIDController(SelphIDConfiguration(..))
)
when (result) {
    is SdkResult.Error -> Napier.d("SelphID: KO - ${result.error.name}")
    is SdkResult.Success -> result.data
}
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component, but **no event will be tracked** to
  the _tracking_ server:

```java
val result = SDKController.launchMethod(
    SelphIDController(SelphIDConfiguration(..))
)
when (result) {
    is SdkResult.Error -> Napier.d("SelphID: KO - ${result.error.name}")
    is SdkResult.Success -> result.data
}
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

The controllers will return the required information in SdkResult format
-more details in the Android Mobile SDK's <a
href="Mobile_SDK#6-result-return"
rel="nofollow">6. Result return</a> section-.

### 7.1. Receipt of errors

On the error side, we will have the SelphIdError class.

Error list:

- ACTIVITY_RESULT_ERROR: The result of the activity is incorrect.
- ACTIVITY_RESULT_MSG_ERROR: The result of the activity received in the msg is incorrect.
- APPLICATION_CONTEXT_ERROR: The required application context is null.
- BAD_EXTRACTOR_CONFIGURATION_ERROR: Widget: Incorrect extractor configuration
- CAMERA_PERMISSION_DENIED: User has rejected permissions.
- CANCEL_BY_USER: The user has cancelled the process.
- CANCEL_LAUNCH: A general cancellation of the SDK has been done.
- COMPONENT_LICENSE_ERROR: The component license is not correct.
- CONTROL_NOT_INITIALIZATED_ERROROR: Widget: Initialisation error
- EMPTY_LICENSE: The license string is empty.
- EXTRACTION_LICENSE_ERROR: Widget: License error
- FETCH_DATA_ERROR: Error in the collection of the result.
- FLOW_ERROR: Error in the flow process.
- HARDWARE_ERROR: Widget: Hardware error
- INITIALIZATION_ERROR: Initialisation error.
- MANAGER_NOT_INITIALIZED: Managers are null.
- MOVE_FAIL: The user has not moved as specified in the process.
- NO_DATA_ERROR: Input data is null.
- OPERATION_NOT_CREATED: No operation is in progress.
- RESOURCES_NOT_FOUND: Resource zip not found.
- SETTINGS_PERMISSION_ERROR: Widget: Permission error
- TIMEOUT: Timeout in process.
- UNEXPECTED_CAPTURE_ERROR: Widget: Capture error
- UNKNOWN_ERROR: Unknown Error
- WIDGET_RESULT_DATA_ERROR: Error in widget output data

### 7.2. Receipt of correct execution - _data_

In the data part, we have the SelphIdResult class.

The result returns the images in **Bitmap** format. It is possible to
convert the images to **Base64** as follows:

`Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)`

The data field is variable and will depend on which component has
returned the result. In the case of this component, the fields returned
are the following:

#### 7.2.1 _frontDocument / tokenFrontDocument:_

The front image of the processed document, cleaned and trimmed along the
edges and its corresponding token.

#### 7.2.2 _backDocument / tokenBackDocument_

The back image of the processed document, cleaned and trimmed around the
edges and its associated token.

#### 7.2.3 _faceImage / tokenFaceImage_

The image of the face found in the document, if any, and its associated
token.

Valid for the FACIAL MATCHING process.

#### 7.2.4 _documentCaptured_

This property indicates the document model captured when a search is
performed in SMSearch mode. In this way, the application can know which
model has been detected among all the allowed ones.

#### 7.2.5 _matchingSidesScore_

This property returns a calculation of the similarity of the data read
between the front and the back of the document. The calculation is
performed by checking the similarity between the common fields read on
both sides. The result of the calculation will be a value between 0.0
and 1.0 if there are common fields in the document. The higher the
value, the more similar the data compared. If the calculation returns
-1.0, then the document contains no common fields or there is no
information yet from both sides.

#### 7.2.6 _captureProgress_

This property returns the state the capture process was in when the
widget ended. Here are the possible values:

```java
Front_Detection_None = 0
Front_Detection_Uncertain = 1
Front_Detection_Completed = 2
Front_Document_Analyzed = 3
Back_Detection_None = 4
Back_Detection_Uncertain = 5
Back_Detection_Completed = 6
Back_Document_Analyzed = 7
```

- **0**: When reading the Front, the widget ended up not being able to
  detect anything. Generally when no document is put in.

- **1**: In the Front reading, the widget ended up having partially
  detected a document. In this case, some of the expected elements
  have been detected, but not all the necessary ones.

- **2**: In the Front reading, the widget ended up having completed
  the detection of all the elements of the document. If the widget
  ends up in this state, it is because the OCR analysis could not be
  completed successfully.

- **3**: On Front reading, the widget ended up having analysed and
  extracted all OCR from the document. This is the state in which a
  successful Front-end reading of a document would end.

Statuses 4 to 7 are exactly the same but refer to the result of the
process when the back is analysed.

#### 7.2.7 _ocrResults_

This dictionary contains all the data detected in the document. The keys
of each field are encoded in such a way that the key itself contains
information on where the value has been obtained from. Thus, for
example, the key Front/MRZ/DocumentNumber indicates the value of the
DocumentNumber that has been read in the Front of the document and in
the MRZ region. These keys depend on the captured document and will
therefore differ between different countries and document models. The
dictionary also contains keys with more generic names and which do not
carry location information. These keys contain the most complete data of
all those read for that field.Estas claves son los siguientes:

- FirstName: The value associated with this key contains the user's
  first name.

- LastName: The value associated with this key contains the user's
  surname.

- DateOfBirth: The value associated with this key contains the date of
  birth detected in the document.

- Gender: The value associated with this key contains the gender of
  the user detected in the document.

- Nationality: The value associated with this key contains the
  nationality of the user detected in the document.

- DocumentNumber: The value associated with this key contains the
  document number.

- DateOfExpiry: The value associated with this key contains the expiry
  date of the document.

- Issuer: The value associated with this key contains the publisher of
  the document.

- DateofIssue: The value associated with this key contains the date of
  issue of the document.

- PlaceOfBirth: The value associated with this key contains the user's
  place of birth.

- Address: The value associated to this key contains the address
  detected in the document.

Additionally, keys of the results object itself are added to make it
easier to search:

- DocumentCaptured: Value of the document model that has been captured
  according to the .xml model. It corresponds to the documentCaptured
  property.

- MatchingSidesScore: Value that indicates the correspondence between
  the read sides of the document. It corresponds to the
  matchingSidesScore property.

#### 7.2.8 _timeoutDiagnostic_

This property returns a text string explaining why the widget has timed out.
This string can be used in a later timeout screen where the main application can
give more information to the user about what happened during the document capture.

#### 7.2.9 _countryCaptured_

Country of the document.

#### 7.2.10 _documentTypeCaptured_

Type of document. Corresponds to those in section 5.1.10.

#### 7.2.11 _personalData_

Small set of data obtained from the user:

- issuer
- documentNumber
- issueDate
- expiryDate
- name
- surname
- fullName
- gender
- birthDate
- birthPlace
- nationality
- address
- nfcKey
- numSupport
- mrz

---

## 8. Customizing the component

Apart from the changes that can be made at the SDK level (explained in
the [Getting Started](./Mobile_SDK)
document), this particular component allows the modification of specific
texts.

### 8.1 Texts

If you want to modify the SDK texts, you would have to include the
following XML file in the client application and change the value of
each String to the desired one.

```xml
    <string name="selphid_component_timeout_title">Time exceeded</string>
    <string name="selphid_component_timeout_desc">Check that the document is inside the box and the data is visible.</string>
    <string name="selphid_component_internal_error_title">There was a technical problem</string>
    <string name="selphid_component_internal_error_desc">We apologize. The capture could not be made</string>
    <!-- Previous Tip -->
    <string name="selphid_tip_message">&lt;b&gt; Focus&lt;/b&gt; your document&lt;b&gt; inside the box.&lt;/b&gt; The photo will be taken automatically.</string>
    <string name="selphid_tip_message_alt">Focus your document inside the box. The photo will be taken automatically.</string>
    <string name="selphid_tip_anim_id_desc">Animation of a mobile phone taking a photo of an identity document. The document appears horizontally, and the mobile phone vertically. A box appears on the mobile phone screen. When the document fits inside the box, the application takes a photo.</string>
    <string name="selphid_tip_anim_pass_desc">Animation of a mobile phone taking a photo of a passport. The document appears horizontally, open on the page where the photo appears. The mobile phone in a vertical position. A box appears on the screen of the mobile phone. When the passport page fits inside the box, the application takes a photo.</string>
    <string name="selphid_tip_title">Document photo</string>
    <string name="selphid_tip_button">Start</string>
    <!-- Tutorial -->
    <string name="selphid_previous_page">Previous page</string>
    <string name="selphid_next_page">Next page</string>
    <string name="selphid_skip">SKIP</string>
    <string name="selphid_next">NEXT</string>
    <string name="selphid_previous">PREVIOUS</string>
    <string name="selphid_tutorial_message_1">Look for a background with good contrast.</string>
    <string name="selphid_tutorial_message_2">Place the document in the box</string>
    <string name="selphid_tutorial_message_3">Avoid glare that makes the document difficult to read.</string>
    <string name="selphid_tutorial_message_1_anim_id_desc">A white ID document is displayed on a white background. The edges of the document are not clearly distinguishable. By means of an animation, the background changes color.</string>
    <string name="selphid_tutorial_message_2_anim_id_desc">A cell phone takes a picture of an identity document. The document appears horizontally, and the cell phone vertically. A box appears on the cell phone screen. When the document fits inside the box, the application takes a photo.</string>
    <string name="selphid_tutorial_message_3_anim_id_desc">An identity document, seen from the front. When tilted, reflections appear on the document.</string>
    <string name="selphid_tutorial_message_1_anim_pass_desc">An open passport is shown on a white background. The edges of the passport are not clearly distinguishable. By means of an animation, the background changes color.</string>
    <string name="selphid_tutorial_message_2_anim_pass_desc">A cell phone takes a picture of an open passport. The document appears horizontally, and the cell phone vertically. A box appears on the screen of the cell phone. When the passport fits inside the box, the application takes a photo.</string>
    <string name="selphid_tutorial_message_3_anim_pass_desc">An open passport, seen from the front. When tilted, reflections appear on the document.</string>

```

### 8.2. Animations

If you want to modify the animations (lottie) of the SDK you would have to include the animations with the same name in the res/raw/ folder of the application.

```text
selphid_anim_tip_driver_h.json
selphid_anim_tip_health.json
selphid_anim_tip_id_h.json
selphid_anim_tip_mrz.json
selphid_anim_tip_pass_h.json
```
