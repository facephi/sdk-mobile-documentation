# Document Capture

## 1. Introduction

Document capture is performed with the **SelphID Component**.

This component handles capturing identity documents and analyzing the extracted information. Its main processes are:

- Internal camera and permission management
- Guided assistance for capturing both front and back of the document
- Extraction of document data
- Retrieval of document images (front and back) as well as additional images on the document (user face, user signature, etc.)
- High level of configuration: support for different countries, languages, document types

See the [Quickstart](./Mobile_SDK) section for basic SDK integration steps. This section adds details specific to launching this component.

---

## 2. Dependency

Add the component-specific dependency:

```java
implementation "com.facephi.androidsdk:selphid_component:$version"
```

---

## 3. Available Controllers

| **Controller**    | **Description**                      |
| ----------------- | ------------------------------------ |
| SelphIDController | Main document recognition controller |

---

## 4. Quick Launch

Once the SDK is initialized and a new operation has been created, launch the component using its controller:

```java
val response = SDKController.launch(
    SelphIDController(
        SelphIDConfigurationData(...)
    )
)

when (response) {
    is SdkResult.Error   -> Napier.d("SelphID: ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

---

## 5. Basic Configuration

To launch the component, create a `SelphIDConfigurationData` object with the following fields:

```java
SelphIDConfigurationData(
  resourcesPath    = "resources_file.zip",
  wizardMode       = true,
  specificData     = "ES|<ALL>",    // ISO country code plus template filter
  documentType     = SelphIDDocumentType.ID_CARD
)
```

- **resourcesPath**: Name of the resource ZIP file in your `assets` folder.
- **wizardMode**: `true` to capture front and back in a single flow.
- **specificData**: Country code and optional whitelist/blacklist for templates (e.g. `ES|<ALL>` for all Spanish documents).
- **documentType**: One of:
  - `SelphIDDocumentType.ID_CARD`
  - `SelphIDDocumentType.PASSPORT`
  - `SelphIDDocumentType.DRIVERS_LICENSE`
  - `SelphIDDocumentType.FOREIGN_CARD`
  - `SelphIDDocumentType.CREDIT_CARD`
  - `SelphIDDocumentType.CUSTOM`
  - `SelphIDDocumentType.VISA`

---

## 6. Receiving the Result

The launch returns an `SdkResult`. Handle success and error:

```java
when (response) {
    is SdkResult.Error   -> Napier.d("ERROR - ${response.error}")
    is SdkResult.Success -> response.data
}
```

### 6.1 Handling Errors

Errors are returned as a `SelphIDError` object. Possible values include:

- SPD_ACTIVITY_RESULT_ERROR: The result of the activity is incorrect.
- SPD_ACTIVITY_RESULT_MSG_ERROR: The result of the activity received in the msg is incorrect.
- SPD_APPLICATION_CONTEXT_ERROR: The required application context is null.
- SPD_BAD_EXTRACTOR_CONFIGURATION_ERROR: Widget: Incorrect extractor configuration
- SPD_CAMERA_PERMISSION_DENIED: User has rejected permissions.
- SPD_CANCEL_BY_USER: The user has cancelled the process.
- SPD_CANCEL_LAUNCH: A general cancellation of the SDK has been done.
- SPD_COMPONENT_LICENSE_ERROR: The component license is not correct.
- SPD_CONTROL_NOT_INITIALIZATED_ERROROR: Widget: Initialisation error
- SPD_EMPTY_LICENSE: The license string is empty.
- SPD_EXTRACTION_LICENSE_ERROR: Widget: License error
- SPD_FETCH_DATA_ERROR: Error in the collection of the result.
- SPD_FLOW_ERROR: Error in the flow process.
- SPD_HARDWARE_ERROR: Widget: Hardware error
- SPD_INITIALIZATION_ERROR: Initialisation error.
- SPD_MANAGER_NOT_INITIALIZED: Managers are null.
- SPD_MOVE_FAIL: The user has not moved as specified in the process.
- SPD_NO_DATA_ERROR: Input data is null.
- SPD_OPERATION_NOT_CREATED: No operation is in progress.
- RESOURCES_NOT_FOUND: Resource zip not found.
- SPD_SETTINGS_PERMISSION_ERROR: Widget: Permission error
- SPD_TIMEOUT: Timeout in process.
- SPD_UNEXPECTED_CAPTURE_ERROR: Widget: Capture error
- SPD_UNKNOWN_ERROR: Unknown Error
- SPD_WIDGET_RESULT_DATA_ERROR: Error in widget output data

### 6.2 Handling Success – `data`

On success (`SdkResult.Success`), you receive a `SelphIDResult` object. Images are returned as `SdkImage`; extract the bitmap via `image.bitmap`. To convert to Base64:

```kotlin
Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)
```

Returned fields in `SelphIDResult`:

#### 6.2.1 `frontDocument` / `tokenFrontDocument`

Processed front image of the document with token.

#### 6.2.2 `backDocument` / `tokenBackDocument`

Processed back image of the document with token.

#### 6.2.3 `faceImage` / `tokenFaceImage`

User face image from the document with token (if available). Valid for facial matching.

#### 6.2.4 `documentCaptured`

Identified document model when using SMSearch mode.

#### 6.2.5 `matchingSidesScore`

Similarity score (0.0–1.0) between data read on front and back; -1.0 if no common fields.

#### 6.2.6 `captureProgress`

Integer state of capture when widget finished:

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

#### 6.2.7 `ocrResults`

Map of all detected OCR values. Keys are of the form `Front/MRZ/DocumentNumber` and generic keys like `FirstName`, `LastName`, etc.

Generic keys include:

- `FirstName`
- `LastName`
- `DateOfBirth`
- `Gender`
- `Nationality`
- `DocumentNumber`
- `DateOfExpiry`
- `Issuer`
- `DateOfIssue`
- `PlaceOfBirth`
- `Address`
- `DocumentCaptured`
- `MatchingSidesScore`

#### 6.2.8 `timeoutDiagnostic`

String explaining why the widget timed out.

#### 6.2.9 `countryCaptured`

Country code of the detected document.

#### 6.2.10 `documentTypeCaptured`

DocumentType corresponding to the types in section 5.

#### 6.2.11 `personalData`

Subset of extracted user data:

- `issuer`
- `documentNumber`
- `issueDate`
- `expiryDate`
- `name`
- `surname`
- `fullName`
- `gender`
- `birthDate`
- `birthPlace`
- `nationality`
- `address`
- `nfcKey`
- `numSupport`
- `mrz`

---

## 7. Advanced Information

This section provides advanced configuration options for the SelphID Component.

### 7.1 Advanced Component Configuration

All fields of `SelphIDConfigurationData`:

#### 7.1.0. _debug_

Activation of the component's debugging mode.

#### 7.1.1. _resourcesPath_

Specifies the name of the resources in **_zip_** format. Example:
"resources-selphid-2-0.zip".

This name will fetch the file from the _assets_ path.

![Image](/android/selphid_resources.png)

#### 7.1.2. _wizardMode_

Indicates whether the widget is configured to capture both parts (front
and back) of the document one after the other. In this mode, the widget
would only be launched once, and when it finishes capturing the front,
it would continue with the back.

#### 7.1.3. _showResultAfterCapture_

Indicates whether or not to display a screen with the captured image of
the document after the analysis process. This screen allows the user to
repeat the capture process if the image obtained from the document is
incorrect.

#### 7.1.4. _showTutorial_

Indicates whether the widget activates the tutorial screen. This view
intuitively explains how the capture is performed.

#### 7.1.5. _tutorialOnly_

Indicates if the widget is to be launched only to display the tutorial.

#### 7.1.6. _scanMode_

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

#### 7.1.7 _specificData_

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

#### 7.1.8 _locale_

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

#### 7.1.9 _fullscreen_

Indicates whether the view will be prioritised for full-screen display
if the system allows it.

#### 7.1.9 _tokenImageQuality_

Indicates the amount of quality to be received in the tokenised images.
A value between 0 and 1.

#### 7.1.10. _documentType_

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

#### 7.1.11 _documentSide_

The permitted values are as follows:

- **SelphIDDocumentSide.FRONT**: The widget is configured to capture
  the front side of the document

- **SelphIDDocumentSide.BACK**: The widget is configured to capture
  the back side of the document.

#### 7.1.12 _timeout_

It is an enum that defines the timeout of capturing one side of the
document. It has three possible values:

- SelphIDTimeout.SHORT: 15 seconds.

- SelphIDTimeout.MEDIUM: 20 seconds.

- SelphIDTimeout.LONG: 25 seconds.

- SelphIDTimeout.VERY_LONG: 60 segundos.

#### 7.1.13 _videoFilename_

Sets the absolute path to the filename where a video of the capture
process will be recorded. The application is responsible for requesting
the necessary permissions from the phone if that path requires
additional permissions. The widget, by default, will not perform any
recording process unless a file path is specified using this method.

#### 7.1.14 _DocumentModels_

This property allows a string in XML format to configure the modelling
of the documents that the widget will try to capture. The definition of
this modelling is contained, by default, in a .xml of models that can be
found in the .zip of resources. This property allows an application to
hot-update the modelling of the documents.

Note: This property does not alter the content of the resource file.

#### 7.1.15 _generateRawImages_

This property configures the widget to return the entire image from the
camera used to capture the document. These images are returned in the
rawFrontDocument and rawBackDocument properties of the resulting object,
respectively.

#### 7.1.16 _tokenPreviousCaptureData_

When the document capture is done in 2 calls, this property allows the
pass a dictionary with the information from the previous capture. This
way the widget can combine the results of both readings in an
intelligent way and thus return the combined information from both
captures. It also allows the widget to calculate a degree of similarity
of the data from both sides.

If both sides of the document are captured in a single call, this is
unnecessary as the widget does this process internally.

#### 7.1.17 _translationsContent_

This advanced property allows, through a string in XML format, to
configure the current translation of the component literals.

**Note**: This property does not alter the content of the resource file.

#### 7.1.18 _viewsContent_

This advanced property allows, through a string in XML format, to
configure the widget views.

**Note**: This property does not alter the content of the resource file.

#### 7.1.19. _showDiagnostic_

Display diagnostic screens at the end of the process

#### 7.1.20. _showPreviousTip_

Displays a pre-launch screen with information about the process to be performed and a launch button.

#### 7.1.21. _vibrationEnabled_

Indicates whether vibration feedback is desired at the end of the process.

---

## 8. Component Customization

Beyond SDK-level settings ([Advanced Settings](./Mobile_SDK_advanced)), this component allows:

### 8.1 Texts

Override default strings by including an XML file in your app:

```xml
    <!-- Diagnostic -->
    <string name="selphid_component_timeout_title">Time exceeded</string>
    <string name="selphid_component_timeout_desc">Check that the document is inside the box and the data is visible.</string>
    <string name="selphid_component_internal_error_title">There was a technical problem</string>
    <string name="selphid_component_internal_error_desc">We apologize. The capture could not be made</string>
    <!-- Previous Tip -->
    <string name="selphid_component_tip_message">&lt;b&gt; Focus&lt;/b&gt; your document&lt;b&gt; inside the box.&lt;/b&gt; The photo will be taken automatically.</string>
    <string name="selphid_component_tip_message_alt">Focus your document inside the box. The photo will be taken automatically.</string>
    <string name="selphid_component_tip_anim_id_desc">Place your ID card horizontally, and point your phone vertically.</string>
    <string name="selphid_component_tip_anim_pass_desc">Place your passport horizontally, and point your phone vertically.</string>
    <string name="selphid_component_tip_title">Document photo</string>
    <string name="selphid_component_tip_button">Start</string>
    <string name="selphid_component_tip_button_alt">Start document capture</string>
    <string name="selphid_component_tip_close_button_alt">Back</string>
    <string name="selphid_component_tip_info_button_alt">Show advices</string>
    <!-- Tutorial -->
    <string name="selphid_component_tutorial_message_1">Look for a background with good contrast.</string>
    <string name="selphid_component_tutorial_message_2">Place the document in the box</string>
    <string name="selphid_component_tutorial_message_3">Avoid glare that makes the document difficult to read.</string>
    <string name="selphid_component_tutorial_message_1_anim_id_desc">Place the document on a surface with a different colour than the document.</string>
    <string name="selphid_component_tutorial_message_2_anim_id_desc">Place your ID card horizontally, and point your phone vertically.</string>
    <string name="selphid_component_tutorial_message_3_anim_id_desc">Reflections appear on the document.</string>
    <string name="selphid_component_tutorial_message_1_anim_pass_desc">Place the document on a surface with a different colour than the document.</string>
    <string name="selphid_component_tutorial_message_2_anim_pass_desc">Place your passport horizontally, and point your phone vertically.</string>
    <string name="selphid_component_tutorial_message_3_anim_pass_desc">Reflections appear on the document.</string>
    <string name="selphid_component_tutorial_close_button_alt">Back to previous tutorial</string>
```

### 8.2 Animations

Override Lottie animations by placing files with the same names in `res/raw/`:

```
selphid_anim_tip_driver_h.json
selphid_anim_tip_driver_m.json
selphid_anim_tip_health.json
selphid_anim_tip_id_h.json
selphid_anim_tip_id_m.json
selphid_anim_tip_mrz.json
selphid_anim_tip_pass_h.json
selphid_anim_tip_pass_m.json

selphid_anim_tuto_driver_h_1.json
selphid_anim_tuto_driver_h_2.json
selphid_anim_tuto_driver_h_3.json
selphid_anim_tuto_driver_m_1.json
selphid_anim_tuto_driver_m_2.json
selphid_anim_tuto_driver_m_3.json

selphid_anim_tuto_id_h_1.json
selphid_anim_tuto_id_h_2.json
selphid_anim_tuto_id_h_3.json
selphid_anim_tuto_id_m_1.json
selphid_anim_tuto_id_m_2.json
selphid_anim_tuto_id_m_3.json

selphid_anim_tuto_pass_h_1.json
selphid_anim_tuto_pass_h_2.json
selphid_anim_tuto_pass_h_3.json
selphid_anim_tuto_pass_m_1.json
selphid_anim_tuto_pass_m_2.json
selphid_anim_tuto_pass_m_3.json
```

---

## 9. Resources Zip Versions

Table of SDK versions and associated resource versions (see **Resources** section):

| **SDK Version** | **SelphID Resources Version** |
| --------------- | ----------------------------- |
| 2.0.2           | 1.25.1                        |
| 2.0.3           | 1.26.0                        |
| 2.1.0           | 1.27.0                        |
| 2.1.1           | 1.28.1                        |
| 2.1.2           | 1.29.0                        |
| 2.2.0           | 1.30.1                        |
| 2.2.1           | 1.31.0                        |
| 2.2.2           | 1.31.2                        |
| 2.2.3           | 1.32.2                        |
| 2.3.2           | 1.33.1                        |
| 2.3.3           | 1.33.4                        |
| 2.3.4           | 1.33.6                        |
| 2.3.5           | 1.34.1                        |
| 2.3.6           | 1.34.6                        |
| 2.3.7           | 1.34.7                        |
| 2.4.0           | 1.35.0                        |
