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

---

## 3. Start a new operation

When you want to perform a specific operation, in order to generate the
associated information correctly in the platform, the **newOperation**
command must first be executed.

This command must have been executed **before launch**.

To learn more about how to start a new operation, it is recommended to
consult the [Getting Started](./Mobile_SDK)
documentation, which details and explains what this process consists of.

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

#### 5.1.16 tokenPreviousCaptureData

When the document capture is done in 2 calls, this property allows the
pass a dictionary with the information from the previous capture. This
way the widget can combine the results of both readings in an
intelligent way and thus return the combined information from both
captures. It also allows the widget to calculate a degree of similarity
of the data from both sides.

If both sides of the document are captured in a single call, this is
unnecessary as the widget does this process internally.

#### 5.1.17 translationsContent

This advanced property allows, through a string in XML format, to
configure the current translation of the component literals.

**Note**: This property does not alter the content of the resource file.

#### 5.1.18 viewsContent

This advanced property allows, through a string in XML format, to
configure the widget views.

**Note**: This property does not alter the content of the resource file.

---

## 6. Component use

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component, but internal events will be tracked to the
  _tracking_ server:

```java
SDKController.launch(
    SelphIDController(SelphIDConfiguration(...)) {
        when (it) {
            is SdkResult.Error -> Napier.d("SelphID: KO - ${it.error.javaClass.simpleName}")
            is SdkResult.Success -> it.data
        }
    }
)
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component, but **no event will be tracked** to
  the _tracking_ server:

```java
SDKController.launchMethod(
    SelphIDController(SelphIDConfiguration(...)) {
        when (it) {
            is SdkResult.Error -> Napier.d("SelphID: KO - ${it.error.javaClass.simpleName}")
            is SdkResult.Success -> it.data
        }
    }
)
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

```java
    SelphIDError.ACTIVITY_RESULT_ERROR
    SelphIDError.BAD_EXTRACTOR_CONFIGURATION_ERROR
    SelphIDError.CAMERA_PERMISSION_DENIED
    SelphIDError.CANCEL_BY_USER
    SelphIDError.CONTROL_NOT_INITIALIZATED_ERROR
    SelphIDError.EXTRACTION_LICENSE_ERROR
    SelphIDError.HARDWARE_ERROR
    is SelphIDError.INITIALIZATION_ERROR -> it.error // More info
    SelphIDError.NO_ERROR
    SelphIDError.RESOURCES_NOT_FOUND
    SelphIDError.SETTINGS_PERMISSION_ERROR
    is SelphIDError.TIMEOUT
    SelphIDError.UNEXPECTED_CAPTURE_ERROR
    SelphIDError.UNKNOWN_ERROR
```

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

#### 7.2.6 _Propiedad captureProgress_

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

---
