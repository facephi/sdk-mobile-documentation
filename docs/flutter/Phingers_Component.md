# Phingers Component

## 1. Introduction

**Mobile SDK** is a set of libraries (**Components**) that offers a
series of functionalities and services, allowing its integration into a
Mobile application in a simple, totally scalable way. Depending on the
use case that is required, the installation of certain components must
be carried out. Its high level of modularity allows that, in the future,
other new components can be added without affecting at all those already
integrated into the project.

The Component addressed in the current document is named ***SelphID
Component***. This is responsible for capturing documents and the
subsequent extraction and analysis of the data obtained from them. Its
main functionalities are the following:

-   Internal camera management.

-   Permissions management.

-   Assists in the processes of capturing thex front and back of the
    document.

-   Extraction of the information contained in the document.

-   Obtaining the images of the back and reverse of the document, as
    well as other images included in the document: user's face, user's
    signature,...

-   High level of configuration: different countries, languages, types
    of documents...

### 1.1 Minimum requirements

The minimum native version (Android and iOS) of the SDK are as follows:

-   Minimum Android version: **24 - JDK 11**

-   Minimum iOS version: **13**

Regarding the architecture of the mobile device:

-   armeabi-v7, x86, arm64 and x64

### 1.2 Plugin version

The current plugin version can be checked as follows:

- Look for the *pubspec.yaml* file at the root of the plugin.
- The KEY/TAG **version** indicates the version.

---

## 2. Component integration
<div class="note">
<span class="note">:information_source:</span>
Before integrating this component, it is *recommended* to read the documentation related to *Core Component* and follow the instructions indicated in said document.
</div>

This section will explain step by step how to integrate the current component into an existing project. 

<div class="warning">
<span class="warning">:warning:</span>

For this section, the following values ​​will be considered:

- **\<%APPLICATION_PATH%\>** - Path to the root of the application (example: /folder/example)
- **\<%PLUGIN_CORE_PATH%\>** - Path to the root of the Core plugin, which is required (example:/folder/sdk-core)
- **\<%PLUGIN_SELPHI_FACE_PATH%\>** - Path to the root of the current plugin (example /folder/sdk-selphi)
</div>

### 2.1. Plugin installation: Common
The plugin allows execution on **Android and iOS** platforms. This section explains the common steps to all platforms. To install the plugin, the following steps must be adopted:

- Make sure **react-native is** installed.

- Access **APPLICATION_PATH** at a terminal and run:

``` java
yarn add @facephi/sdk-core-react-native
yarn add @facephi/sdk-selphid-react-native
yarn install
```

-   In addition, to install the plugin on iOS, the following must also
    be executed:

``` java
cd ios
pod install
```

-   It is important to verify that the path to the plugin is correctly
    defined in **package.json**:

``` java
"dependencies": {
  "sdk-core-react-native": <% PLUGIN_CORE_PATH %>,
  "sdk-selphid-react-native": <% PLUGIN_SELPHID_PATH %>
}
```

After running the above steps, you can start the app with the
sdk/component installed.

-   Finally, to launch the projects, the following commands must be
    executed in two ways:

***From Terminal***

For Android:

``` java
npx react-native run-android 
or
npx react-native run-android --active-arch-only
```

For iOS:

``` java
npx react-native run-ios
```

***From different IDEs***

Projects generated in the Android and iOS folders can be opened,
compiled, and debugged using *Android Studio* and *XCode* respectively.

### 2.2 Plugin installation: iOS

#### 2.2.1 Project configuration

For the iOS version, when adding our plugin to the final application,
the following points must be previously taken into account:

-   ***Add camera permissions:*** To use the widget, you need to enable
    the camera permission in the application's ***info.plist*** file
    (included within the project in the ***ios*** folder). You will need
    to edit the file with a text editor and add the following
    *key/value* pair:

``` java
<key> NSCameraUsageDescription </key>
<string>$(PRODUCT_NAME) uses the camera</string>
```

#### 2.2.2 Podfile Update

In the project podfile it will be necessary to add the information from
the private repository (see section 2.1). To do this, the following
lines must be added at the beginning of the file:

``` java
platform :ios, '13.0' //MIN VERSION

plugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']
source 'https://cdn.cocoapods.org/'
```

<div class="note">
<span class="note">:information_source:</span>
To know more about the configuration and use of **Cocoapods Artifactory**, it is necessary to access the following document of **Core Component**.
</div>

#### 2.2.4 Possible issues

If environmental problems occur or the plugin is not updated after
making new changes (for example, problems occurred due to the bundle not
being generated correctly, or the libraries not being updated to the
correct versions), it is recommended to execute the following sequence
of instructions after launching the plugin:

-   Open the application's **ios** folder at a terminal.

-   Run the following command:

``` java
pod deintegrate
```

-   Remove the ***Podfile.lock***

-   Run the following command (or open the project with Xcode and run
    it):

``` java
pod install --repo-update
```

### 2.3 Plugin installation: Android

#### 2.3.1 Set Android SDK version

For Android, the minimum SDK version required by our native libraries is
**24**, so if your app has a *Minimum SDK* defined less than this, it
will need to be modified to avoid a compile error. To do this, access
the application's ***build.gradle*** file (located in the ***android***
folder) and modify the following parameter:

``` java
buildscript {
  ext {
    minSdkVersion = 24
  }
}
```

 

#### 2.3.2 Permissions for geolocation

Because the **Tracking** component has geolocation options, it is
necessary to add the permissions for it. In the *AndroidManifest* add
the following permissions:

``` java
<!-- Always include this permission -->
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<!-- Include only if your app benefits from precise location access. -->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```


---

## 3. Component configuration

The current component contains a number of Typescript methods and
interfaces contained within the ***node_modules/@facephi/sdk-selphid-react-native/src/index.tsx*** file. ** In this file
you can find the necessary API for the communication between the
application and the native functionality of the component. It is then
explained what each one of those listed is for and the other properties
that affect the operation of the component.

The following is the *SelphIDConfiguration* class, which allows you to
configure the **SelphID** component:

``` java
 export interface SelphidConfiguration {
  debug?: boolean;
  fullScreen?: boolean;
  frontalCameraPreferred?: boolean;
  tokenImageQuality?: number;
  widgetTimeout?: number;
  showResultAfterCapture?: boolean;
  showTutorial?: boolean;
  tutorialOnly?: boolean;
  scanMode?: string;
  specificData?: string;
  documentType?: string;
  videoFilename?: string;
  fullscreen?: boolean;
  locale?: string;
  documentModels?: string;
  enableWidgetEventListener?: boolean;
  generateRawImages?: boolean;
  translationsContent?: string;
  viewsContent?: string;
  cameraId?: number;
  params?: any;
  resourcesPath?: string;
  tokenPrevCaptureData?: string;
  wizardMode?: boolean;
  documentSide?: string;
  showDiagnostic?: boolean;
  compressFormat?: SdkCompressFormat,
  imageQuality?: number,
}
```

Then, all the properties that can be defined in the **SelphidConfiguration**
object will be commented on:

<div class="note">
<span class="note">:information_source:</span>
All the configuration can be found in the component's ***src/index.tsx*** file.
</div>

When making the call to the widget there is a series of parameters that
must be included. They will be briefly discussed below.

### 3.1 resourcesPath

**type:** *string*

Sets the name of the resource file that the widget will use for its
graphical configuration. This file is customisable and is located in the
plugin in the ***src/main/assets*** folder for ***Android*** and in the
***ios/Frameworks*** and Resources folder for ***iOS***. Its installation is
transparent to the user, it will simply be added to the respective
platform's projects during plugin installation. More details about how
this resource pack works and how to modify it are explained in
***section 6***.

> **resourcesPath**: "fphi-selphid-widget-resources-sdk.zip"

### 3.2 ShowResultAfterCapture

**type:** *boolean*

Indicates whether or not to display a screen with the captured image of
the document after the analysis process. This screen gives the user the
option of repeating the capture process if the image obtained from the
document is not correct.

> **showResultAfterCapture:** false

### 3.3 ScanMode

**type:** *WidgetScanMode*

This enumeration is defined in the ***SdkSelphidEnum.tsx*** class.
Indicates the OCR scanning mode of the documents. Depending on the
choice, several types of documents or one in particular will be scanned
and searched. This mode can be of three types:

-   ***SelphIDScanMode.Generic:*** The generic mode that allows you to
    scan any type of document regardless of the country or the type of
    document. The result of this mode is not as accurate as the
    following, but it allows you to scan various standard documents.

-   ***SelphIDScanMode.Search***: The search mode will allow you to use a
    whitelist and blacklist, and will search the documents that meet
    those conditions. These conditions are specified in the
    "specificData" variable. In this way it is possible to carry out the
    search limiting the number of templates, and making the search much
    more refined than in the generic case.

-   ***SelphIDScanMode.Specific***: Search for a specific document. These
    conditions are indicated in the "specificData" property shown below.

> ***scanMode***: SdkSelphidEnums.SdkScanMode.Search;

### 3.4 SpecificData

**type:** *string*

This property allows you to define which documents will be scanned
during the process in the event of declaring the scan mode (scanMode) to
GenericMode, SpecificMode or SearchMode.

An example of a configuration that allows all documents of Spanish
nationality to be scanned would be the following:

> **scanMode**: WidgetScanMode.Search;  
> **specificData**: “ES\|\<ALL\>”; // Spanish ISO code(ES)

### 3.5 FullScreen

**type:** *boolean*

Determines whether you wish the widget to start in full screen mode,
hiding the status bar.

    **fullscreen**: true;

### 3.6 Locale

**type:** *string*

It is a string that allows the localisation and language of the widget
to be changed. Examples of values ​​that they may have are the following:

-   “es” for Spanish.

-   “en” for English.

-   “fr” for French.

Ultimately, it will depend on the name that appears in the strings.xml
file of the language you want to select (strings-es.xml, strings-en.xml,
strings-fr.xml).

In the resource zip, which is located inside the strings folder, you can
add the strings-xx.xml files corresponding to each location that needs
to be incorporated into the widget.

> **locale**: "es";

### 3.7 DocumentType

**type:** *string*

This enumeration is defined in the *SdkSelphidEnums.tsx* class.
Specified in the ***WidgetDocumentType** class:

-   **IDCard**: Establishes that identity documents or cards will be
    captured.

-   **Passport**: Establishes that passports will be captured.
    (Additionally, the scanMode will have to be set to
    ***SelphIDScanMode.Generic***).

-   **DriverLicence**: Establishes that driver's licences will be
    captured.

-   **CreditCard**: Sets that credit cards will be captured.

-   **ForeignCard:** It establishes that Foreigners' identity cards will
    be captured.

-   **Custom:** Includes documents that are not in any of the above
    categories.

>     **documentType**: SdkSelphidEnums.SdkDocumentType.IDCard;

### 3.8 TokenImageQuality

**type:** *double*

Specifies the compression quality of the tokenFaceImage.

Indicates whether the sdk returns to the application the images used
during extraction or not. It should be noted that returning images can
result in a significant increase in device resource usage:

>       **tokenFaceImage**: 0.9;

### 3.9 generateRawImages

**type:** *boolean*

This property configures the widget to return the full image from the
camera that was used to capture the document:

-   rawFrontDocument: Front image of the raw document.
-   rawBackDocument: Rear image of the raw document.
-   tokenRawFrontDocument: Tokenisation of the front image of the
    raw document.
-   tokenRawBackDocument: Tokenisation of the rear image of the raw
    document.

> generateRawImages: true;**


###  3.10 widgetTimeout

**type:** *number*

It is an enumerator that defines the timeout of the capture of one side
of the document. It has 3 possible values:

-   WidgetTimeout.Short: 15 segundos.

-   WidgetTimeout.Medium: 20 segundos.

-   WidgetTimeout.Long: 25 segundos

###  3.11 tutorialOnly

**type:** *boolean*

Establishes whether you wish to launch the widget in Tutorial mode. This
allows you to show the previous widget tutorial, but WITHOUT performing
the post capture process. Useful if you wish to show the tutorial in
isolation.

>     **tutorialOnly**: true;

###  3.12 videoFilename

**type:** *string*

<div class="warning">
<span class="warning">:warning:</span>
This is an **advanced property**, and in most use cases you don't need
to modify it. Incorrect use may cause component malfunction.
</div>
This is an **advanced property**, and in most cases you don't need to
modify it. Incorrect use may cause component malfunction.

Sets the absolute path of the file name in which a video of the capture
process will be recorded. The application is responsible for requesting
the necessary permissions to the phone in case that route requires
additional permissions. The component, by default, will not perform any
write processing unless a file path is specified using this method.

>     **videoFilename**: “\<videofile-path\>“;

###  3.13 documentModels

**type:** *string*

<div class="warning">
<span class="warning">:warning:</span>
This is an **advanced property**, and in most use cases you don't need
to modify it. Incorrect use may cause component malfunction.
</div>

This is an **advanced property**, and in most use cases you don't need
to modify it. Incorrect use may cause component malfunction.

This property allows, through a string in xml format, to configure the
modelling of the documents that the widget will try to capture. The
definition of this modelling can be found, by default, in .xml models
within the resources .zip. With this property an application is allowed
to update and replace, in execution, the models of the current documents
of the component.

>     **documentModels**: “\<document-models-content-string\>“;

###  3.14 translationsContent

**type:** *string*

<div class="warning">
<span class="warning">:warning:</span>
This is an **advanced property**, and in most use cases you don't need
to modify it. Incorrect use may cause component malfunction.
</div>

This is an **advanced property**, and in most use cases you don't need
to modify it. Incorrect use may cause component malfunction.

This property allows, through a string in xml format, to configure the
current location of the widget. The definition of this model can be
found, by default, in an internal translations folder within the
resources .zip. This property allows an application to update and
replace the current location of the component at run time.

>     **translationsContent**: “\<translation-content-string\>“;

###  3.15 viewsContent

**type:** *string*

<div class="warning">
<span class="warning">:warning:</span>
This is an **advanced property**, and in most use cases you don't need
to modify it. Incorrect use may cause component malfunction.
</div>


This property allows, through a string in xml format, to configure the
views of the current component. The definition of this modelling can be
found, by default, in a file called **widget.xml** inside the resources
.zip. This property allows an application to update and override the
layout of the component's internal screens whilst running.

>     **viewsContent**: “\<views-content-string\>“;

---

## 4. Component Usage

The following will show how to execute the functionality of the current
component.


<div class="warning">
<span class="warning">:warning:</span>
Remember that in order to launch a certain component previously, you
must **initialise the SDK** with its respective licence, and then
**start a new operation**. For more information consult the
documentation of the **Core Component**.
</div>


Once the component has been configured, to launch it, the following code
must be executed:

``` java
const getSelphidConfiguration = () => {
    let config: SelphidConfiguration = {
      debug: false,
      showResultAfterCapture: true,
      showTutorial: false,
      scanMode: SdkSelphidEnums.SdkScanMode.Search,
      specificData: 'AR|<ALL>',
      documentType: SdkSelphidEnums.SdkDocumentType.IdCard,
      fullscreen: true,
      locale: '',
      resourcesPath: "fphi-selphid-widget-resources-sdk.zip",
    };
    return config;
};

const startSelphid = async () => 
{ 
    try 
    {
      console.log("Starting startSelphid...");
      clearAll();
 
      return await SdkMobileSelphid.selphid(getSelphidConfiguration())
      .then((result: any) => 
      {
        let r: SelphidResult = result;
        console.log("result parsed", r);

        console.log("result", result);
        processSelphidResult(result);
      })
      .catch((error: any) => 
      {
        console.log(error);
        setMessage(JSON.stringify(error));
        setFrontDocumentImage(null);
        setBackDocumentImage(null);
        setFaceImage(null);
        setTokenFaceImage(null);
        setOcrContent(null);
        setShowError(true);
        setTextColorMessage('#DE2222');
      })
      .finally(()=> {
        console.log("End startSelphid...");
      });
    } 
    catch (error) {
      setMessage(JSON.stringify(error));
    }
};

```

---

## 5. Return of result

As shown in the example above, the result is returned in the form of a
**JSON** object via ***Promises***, whether it is a successful operation
or an error:

``` java
.then((result: SelphidResult) => 
{
  console.log("result", result);
})
.catch((error: any) => 
{
  console.log(error);
})
```

Regardless of whether the result is correct/erroneous, the result will
have the following format:

``` java
export interface SelphidResult {
  finishStatus: number;
  finishStatusDescription?: string;
  errorType: number;
  errorMessage?: string;
  frontDocumentImage?: string;
  backDocumentImage?: string;
  faceImage?: string;
  signatureImage?: string;
  fingerprintImage?: string;
  documentData?: string;
  tokenFrontDocumentImage?: string;
  tokenBackDocumentImage?: string;
  tokenFaceImage?: string;
  tokenOCR?: string;
  documentCaptured?: string;
  captureProgress: number;
  matchingSidesScore: number;
  rawFrontDocument?: string;
  rawBackDocument?: string;
  tokenRawFrontDocument?: string;
  tokenRawBackDocument?: string;
  lastActionBeforeCapture?: string;
}
```

The result will be returned via a Promise containing an object of class
***SdkSelphidResult***. Information on these fields is expanded below.

### 5.1 finishStatus

-   **SdkFinishStatus.Ok**: The operation was successful.

-   **SdkFinishStatus.Error**: An error has occurred, which will be
    indicated in the \`errorDiagnostic\` enumerated and, optionally, an
    extra information message will be displayed in the \`errorMessage\`
    property.

### 5.2 errorType

Returns the type of error that occurred (if there was one, which is
indicated in the *finishStatus* parameter with the value *Error*). They
are defined in the *SdkErrorType* class. It may have the following
values:

-   **NoError:** No error has occurred. The process can continue.

-   **UnknownError:** Unhandled error. Possibly caused by a bug in the
    resource bundle.

-   **CameraPermissionDenied:** The exception that is thrown when the
    sdk does not have permission to access the camera.

-   **SettingsPermissionDenied**: The exception that is thrown when the
    widget does not have permission to access system settings
    (\*deprecated\*).

-   **HardwareError**: Exception that occurs when there is a hardware
    problem with the device, usually caused by very few available
    resources.

-   **ExtractionLicenceError**: Exception that occurs when there has
    been a licencing problem on the server.

-   **UnexpectedCaptureError**: Exception that occurs during the capture
    of frames by the camera.

-   **ControlNotInitialisedError**: The widget configurator has not been
    initialised.

-   **BadExtractorConfiguration**: Problem arose during widget
    configuration.

-   **CancelByUser**: The exception that is thrown when the user stops
    the extraction manually.

-   **TimeOut**: Exception that is thrown when a maximum time elapses
    without successfully completing the extraction.

-   **InitProccessError**: Exception that is thrown when the sdk cannot
    process the captured images.

-   **NfcError:** The exception that is thrown when the sdk does not
    have permission to access the nfc.

-   **NetworkConnection**: The exception that is thrown when there are
    issues with the means the device uses to connect to the network.

-   **TokenError:** The exception that is thrown when an invalid token
    is passed as a parameter.

-   **InitSessionError**: The exception that is thrown when session
    cannot be initialised. The normal thing is that it happens because
    the \`SdkCore\` was not called when calling any other component.

-   **ComponentControllerError**: The exception that is thrown when the
    component cannot be instantiated.

### 5.3 errorMessage

-   Indicates an additional error message if necessary. It is an
    optional value.

### 5.4 frontDocument/tokenFrontDocument

***frontDocument***: The front image of the document processed, cleaned
and cropped by the edges and its corresponding token.

***tokenFrontDocument***: It contains the same information as
frontDocument, only it is encrypted, tokenised, and converted to
stringBase64. This field can be detokenised in the SelphID service.

### 5.5 backDocument/tokenBackDocument

***backDocument***: The back image of the document processed, cleaned
and cropped at the edges.

***tokenBackDocument***: It contains the same information as the
backDocument, only it is encrypted, tokenised, and converted to
stringBase64. This field can be detokenised in the SelphID service.

### 5.6 rawFrontDocument/tokenRawFrontDocument

***rawFrontDocument*****:** The front image of the raw document, as
obtained from the camera.

***tokenRawFrontDocument***: It contains the same information as
rawFrontDocument, only it is encrypted and tokenised, and converted to
stringBase64. This field can be detokenised in the SelphID service.

### 5.7 rawBackDocument/tokenRawBackDocument

***rawBackDocument***: The rear image of the raw document, as obtained
from the camera.

***tokenRawBackDocument***: It contains the same information as
rawBackDocument, only it is encrypted and tokenised, and converted to
stringBase64. This field can be detokenised in the SelphID service.

### 5.8 faceImage/tokenFaceImage

***faceImage***: The front image of the document processed, cleaned up,
and cropped at the edges.

***tokenFaceImage***: It contains the same information as faceImage,
only it is encrypted and tokenised, and converted to stringBase64. This
field can be detokenised in the SelphID service.

### 5.9 documentData/tokenOCR

***documentData***: The OCR data obtained during document capture. The
information contained in this object will vary depending on the type of
document and the country of the document.

***tokenOCR***: It contains the same data as documentData, only it is
encrypted and tokenised, and converted to stringBase64. This field can
be detokenised in the SelphID service.

### 5.10 matchingSidesScore

This property returns a calculation of the similarity of the data read
between the front and the back of the document. The calculation is
performed by checking the similarity between the common fields read on
both faces. The result of the calculation will be a value between 0.0
and 1.0 in the case that there are common fields in the document. The
higher the value, the more similar the compared data are.

If the calculation returns -1.0, it means that the document does not
contain common fields or there is still no information on both sides.

### 5.11 captureProgress/timeoutStatus

This property returns the status the search process was in when the
widget terminated. These are the possible values:

``` java
        Front_Detection_None = 0

        Front_Detection_Uncertain = 1

        Front_Detection_Completed = 2

        Front_Document_Analyzed = 3

        Back_Detection_None = 4

        Back_Detection_Uncertain = 5

        Back_Detection_Completed = 6

        Back_Document_Analyzed = 7
```

This property returns the status the search process was in when the
widget terminated. These are the possible values:

-   0: When reading the Front, the widget ended without being able to
    detect anything. Generally when no document is included.

-   1: When reading from the Front, the widget ended up having partially
    detected a document. In this case, some of the expected elements
    have been detected, but not all the necessary ones.

-   2: When reading from the Front, the widget ended up having completed
    the detection of all the elements of the document. If the widget
    ends up in this status it is because the OCR analysis could not be
    completed successfully

-   3: When reading from the Front, the widget ended up having parsed
    and extracted all the OCR from the document. This is the status in
    which a successful reading of the Front of a document would end up.

The statuses **from 4 to 7 are exactly the same** only that they refer
to the result of the process when the back is parsed.

---

## 6. Component Customisation (Optional)

This component allows the customisation of texts, images, fonts and
colours. Customisation is done using the internally supplied **.zip
file**. This zip is made up of a file called ***widget.xml*** that
contains the definition of all the widget screens, each one of them with
a series of elements which allow customisation. The zip file also
contains a folder with graphic resources and another folder with the
translations of the texts.

### 6.1. Basic description

#### 6.1.1. Text customisation

Text customisation is carried out by editing the texts of the existing
translation files in the resource .zip.

>     /strings/strings.es.xml
>
>     /strings/strings.xml

#### 6.1.2. Image customisation

To customise the images used by the widget, you must add the images to
the resource .zip. In the zip there are 3 folders:

>     /resources/163dpi
>
>     /resources/326dpi
>
>     /resources/489dpi

These folders correspond to the different screen densities and you can
create as many density folders as you want. These folders contain the
versions of the images for each of the resolutions.

It is necessary to add the images in all the folders, since once the
optimal resolution for the device has been determined, the widget only
loads images from the folder with the chosen resolution.

The images are referenced from the *widget.xml* file.

#### 6.1.3. Colour customisation

Button colour customisation is carried out from the *widget.xml* file.
In it you can customise any colour of any graphic element that appears
in the widget. Simply modify the colour of the desired property.

#### 6.1.4. Font type customisation

Font files should be placed in the \`/resources/163dpi\` folder and once
there they can be referenced from the \`widget.xml\` file. To change the
font of a text element, it would be enough to modify the 'font' property
and put the name of the corresponding file.

In the next section, the information about the content of the resource
bundle and the way to modify it will be elaborated on.

### 6.2. Advanced description

#### 6.2.1. Widget.xml

This file contains the definition of all the properties that are
configurable in the authentication and registration processes. It is
divided by navigation screens and within each screen label are all the
properties that can be modified.

#### 6.2.2. Strings folder

This folder contains a *strings.xml* file for each translation you want
to support. The name must be formed as follows:

>     strings.(language).xml

Where (language) is the language code. For example, \`strings.es.xml\`
would be the Spanish translation, *strings.en.xml* the English
translation, *strings.es_ES.xml* the Spanish of Spain or
*strings.es_AR.xml* the Spanish of Argentina.

You can force the language or let the widget choose it based on device
settings. When deciding which language to apply, the following order is
followed:

-   Search by location code (for example, “es_AR”).

-   If it doesn't find a match, it would look for one for the generic
    language (i.e., in this case it would be "es").

-   If there were no results either, then it would use the default
    language.

At the code level it is possible to select the localisation using the
locale property. This parameter accepts a string with the language code
to be used (for example, "es" or "es_ES").

#### 6.2.3. Resources folder

It contains the folders with all the necessary resources to be able to
be modified, divided into densities. It is mandatory to generate the
images in all densities as the widget expects to find them in the folder
corresponding to the density of the device. New folders with the desired
density can also be created.

#### 6.2.4. BACKGROUND element

The *background* element is made up of 4 segments that can be coloured
independently:

-   **top**: Defines the background colour of the top segment or panel.

-   **middle_top**: defines the background colour of the segment or
    panel where the camera image is located.

-   **middle_bottom**: defines the background colour of the segment or
    panel below the camera image.

-   **bottom**: defines the background colour of the bottom segment or
    panel.

You can also set certain properties that are used only on specific
screens. We have listed them below referring to the screens on which
they are used:

-   **pagination_separator (RegistrationTips, FaceMovementTips)**:
    Defines the colour of the separation between the bottom panel and
    the panel below the camera.

-   **mirror_border_colour (RegistrationTips, FaceMovementTips**):
    Defines the colour of the border of the circle around the camera or
    video image of the registration tips. This element is also called a
    mirror.

-   **mirror_border_width (RegistrationTips, FaceMovementTips)**:
    Defines the width of the border of the circle around the camera or
    video image of the registration tips. If we didn't want to display a
    border, we would have to assign a value of 0.0 to this property.

-   **mirror_mist_colour (StartExtractor)**: Defines the colour of the
    centre circle on the pre-extraction screen. This colour should
    always have a transparency value since we must show the image of the
    camera so that the user can position himself correctly before
    starting the extraction. The colour format when a transparency value
    is included is RGBA (The alpha value will be indicated with the last
    byte).

-   **mirror_colour (Results)**: defines the background colour of the
    circle that displays the results of the registration process.

#### 6.2.5. BUTTON element

-   **background**: defines the background colour of the button

-   **decorator**: defines the colour of the button's shadow

-   **foreground**: defines the colour of the button font in case the
    content is text

-   **content_type**: defines the content type of the button. There are
    2 different types:

-   **resource_id:** Content must contain the name of a file in the
    resource bundle

-   **text_id:** Content must contain the identifier of a literal from
    the translations file of the resource bundle

-   **content**: defines the content of the button. It can be either an
    image or the identifier of a literal.

-   **align:** Defines the alignment of the button content, be it an
    image or a text

-   **font:** Defines the font used if the button content is text

-   **font_size**: Defines the font size if the button content is text

#### 6.2.6. TEXT element

The *text* elements are used to define the graphic aspect of the texts
of each of the widget's screens. These are the properties that can be
modified:

-   **colour**: defines the colour of the text.

-   **font**: defines the type of font used to display the text.

-   **font_size**: defines the font size.

It must be borne in mind that on the registration results screen, the
two texts that define the quality of the registration have their colour
forced to the colour of the bar that indicates the score.

#### 6.2.7. IMAGE element

-   **value**: defines the name of the file that contains the image to
    display.

*image* elements only have the property that defines the file where the
image is physically located in the resource bundle. The images are
obtained from the bundle by looking in the appropriate folder according
to the density of the device.

#### 6.2.8. VIDEO element

-   **value**: defines the name of the file that contains the video to
    display.

*Video* elements only have the property that defines the file when the
video is physically located in the resource bundle.
