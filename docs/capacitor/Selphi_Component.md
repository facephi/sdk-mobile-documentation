# Selphi Component

## 1. Introduction
The Component addressed in the current document is called the Selphi Component. This is responsible for capturing a selfie of the user and the subsequent extraction of the most important facial characteristics. Its main functionalities are the following:

- Internal camera management.
- Permissions management.
- Assists the processes of capturing the user's face.
- Generation of templates with the facial characteristics and the image of the user's face for the Liveness detection process


### 1.1 Minimum requirements

The minimum native version (Android and iOS) of the SDK are as follows:

- Minimum Android version: **24 - JDK 11**

- Minimum iOS version: **13**

Regarding the architecture of the mobile device:

- armeabi-v7, x86, arm64 y x64


### 1.2 Plugin version

The current plugin version can be checked as follows:

- Look for the package.json file at the root of the plugin.
- The KEY/TAG version indicates the version.

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
```
yarn add @facephi/sdk-core-react-native
yarn add @facephi/sdk-selphi-react-native
```

- It is important to verify that the path to the plugin is correctly defined in package.json:

```
"dependencies": {
  "@facephi/sdk-core-react-native": <% PLUGIN_CORE_PATH %>,
  "@facephi/sdk-selphi-react-native": <% PLUGIN_SELPHI_FACE_PATH %>
}
```
After running the above steps, you can start the app with the sdk/component installed.

- Finally, to launch the projects, the following commands must be executed in two ways:

***From Terminal (For Android):***
```
npx react-native run-android 
or 
npx react-native run-android --active-arch-only
```

***From Terminal (For iOS):***
```
npx react-native run-ios
```

***From different IDEs***

Projects generated in the Android and iOS folders can be opened, compiled, and debugged using *Android Studio* and *XCode*, respectively.

### 2.2 Plugin installation: iOS
#### 2.2.1 Project configuration

For the iOS version, when adding our plugin to the final application, the following points must be previously taken into account:

- ***Add camera permissions***: To use the widget, you need to enable the camera permission in the application's ***info.plist*** file (included within the project in the ios folder). You will need to edit the file with a text editor and add the following *key/value* pair:

```
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) uses the camera</string>
```

#### 2.2.2 Update the Podfile
In the project podfile it will be necessary to add the information from the private repository (see section 2.1). To do this, the following lines must be added at the beginning of the file:

```
platform :ios, '13.0' //MIN VERSION
plugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']
source 'https://cdn.cocoapods.org/'
```

<div class="warning">
<span class="warning">:warning:</span>
To know more about the configuration and use of **Cocoapods Artifactory**, it is necessary to access the following document of **Core Component**.
</div>

#### 2.2.4 Possible issues
If environment problems occur or the plugin is not updated after making new changes (for example, problems occurred due to the bundle not being generated correctly, or the libraries not being updated to the correct versions), it is recommended to execute the following sequence of instructions after launching the plugin:

Open the application's ios folder at a terminal.

Run the following command:

```
pod deintegrate
```

- Remove the ***Podfile.lock***
- Run the following command (or open the project with Xcode and run it):

```
pod install --repo-update
```

### 2.3  Plugin installation: Android
#### 2.3.1 Set Android SDK version

For Android, the minimum SDK version required by our native libraries is **23**, so if your app has a Minimum SDK defined less than this, it will need to be modified to avoid a compile error. To do this, access the application's ***build.gradle*** file (located in the ***android*** folder) and modify the following parameter:

```
buildscript {
  ext {
    minSdkVersion = 24
  }
}
```

#### 2.3.2 Permissions for geolocation (optional)
Because the Tracking component has geolocation options, it is necessary to add the permissions for it. In the AndroidManifest add the following permissions:

```
<!-- Always include this permission -->
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<!-- Include only if your app benefits from precise location access. -->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

---

## 3. Component configuration
The actual component contains a number of Typescript methods and interfaces contained within the  ***node_modules/@facephi/sdk-selphi-react-native/src/index.ts*** file. In this file you can find the necessary API for the communication between the application and the native functionality of the component. It is then explained what each one of those listed is for and the other properties that affect the operation of the component.

Below is the *SelphiConfiguration* class, which allows you to configure the Selphi component:

```
export interface SelphiConfiguration {
  debug?: boolean;
  fullscreen?: boolean;
  cropPercent?: number;
  locale?: string;
  stabilizationMode?: boolean;
  templateRawOptimized?: boolean;
  resourcesPath?: string;
  enableGenerateTemplateRaw?: boolean;
  livenessMode?: SdkLivenessMode;
  showResultAfterCapture?: boolean;
  cameraFlashEnabled?: boolean;
  translationsContent?: string;
  viewsContent?: string;
  showTutorial?: boolean;
  cameraId?: number;
  videoFilename?: string;
  params?: any;
  qrMode?: boolean;
  showDiagnostic?: boolean;
  logImages?: boolean;
}
```

Then, all the properties that can be defined in the ***SdkTracking*** object will be commented on:
<div class="note">
<span class="note">:information_source:</span>
All the configuration can be found in the component's *node_modules/@facephi/sdk-selphi-react-native/src/src/index.tsx* file.
</div>

When making the call to the widget there is a series of parameters that must be included. They will be briefly discussed below.

### 3.1. resourcesPath 

**type:** *string*

Sets the name of the resource file that the widget will use for its graphical configuration. This file is customisable and is located in the plugin in the src/main/assets folder for Android and in the ios/Frameworks and Resources folder for iOS. Its installation is transparent to the user, it will simply be added to the respective platform's projects during plugin installation. More details about how this resource pack works and how to modify it are explained in section 6.

```
resourcesPath: "fphi-selphi-widget-resources-sdk.zip",
```


### 3.2. crop

**type:** *boolean*

Indicates whether the images returned (in the images parameter that is activated with enableImages = true) in the completion event contain only the area of ​​the detected face, at a magnification given by CropPercent, or whether the entire image is returned.


```
crop: false
```

### 3.3. cropPercent

**type:** *float*

Specifies the magnification percentage of the detected face area to compose the returned image.

```
cropPercent: 1.0
```


### 3.4. debug

**type:** *boolean*

Sets the debugging mode of the widget.

```
debug: false
```

### 3.5. livenessMode

**type:** *string*

Sets the liveness mode of the component. The possible values are:

- **NoneMode**: Indicates that the photodetection mode should not be enabled in authentication processes.

- **PassiveMode**: Indicates that the passive life test is carried out on the server, sending the corresponding "BestImage" for this purpose

```
livenessMode: SdkSelphiEnums.SdkLivenessMode.PassiveMode
```

### 3.6. stabilizationMode

**type:** *boolean*

Property that allows activating or deactivating the stabilised mode before the face detection process. In the case of being activated, it will give some guidelines to know if it is correctly located or not.

```
stabilizationMode: true
```

### 3.7. locale

**type:** *string*

Forces the sdk to use the language setting indicated by the locale parameter.

This parameter accepts both a language code (for example, en) and a regional identification code (for example, en_US). If the widget's resource file does not have a locale for the selected locale, its setting will revert to the default language of ES.

```
locale: 'ES'
```

### 3.8. fullScreen

**type:** *string*

Sets whether you want the sdk to start in full screen mode, hiding the status bar.

```
fullscreen: true
```

### 3.9. enableImages

**type:** *string*

Indicates whether the sdk returns to the application the images used during extraction or not. It should be noted that returning images can result in a significant increase in device resource usage:

```
logImages: false
```

### 3.10. frontalCameraPreferred

**type:** *boolean*

Property to select the front camera as the preferred camera.

```
frontalCameraPreferred: true
```
---

## 4. Component Usage
The following will show how to execute the functionality of the current component.

<div class="warning">
<span class="warning">:warning:</span>
Remember that in order to launch a certain component previously, you must **initialise the SDK** with its respective licence, and then **start a new operation**. For further information, consult the documentation of the Core Component.
</div>

Once the component has been configured, to launch it, the following code must be executed:

```
const getSelphiConfiguration = () => {
    let config: SelphiConfiguration = {
      debug: false,
      fullscreen: true,
      livenessMode: SdkSelphiEnums.SdkLivenessMode.PassiveMode,
      resourcesPath: "fphi-selphi-widget-resources-sdk.zip",
      //enableGenerateTemplateRaw: true,
      logImages: true
    };
    return config;
};

const startSelphi = async () => 
{ 
    try 
    {
      console.log("Starting startSelphi...");
      clearAll();

      return await SdkMobileSelphi.selphi(getSelphiConfiguration())
      .then((result: any) => 
      {
        console.log("result", result);
        processSelphiResult(result);
      })
      .catch((error: any) => 
      {
        console.log(error);
      })
      .finally(()=> {
        console.log("End startSelphi...");
      });
    } 
    catch (error) {
      setMessage(JSON.stringify(error));
    }
};
```

---

## 5. Return of result
As shown in the example above, the result is returned in the form of a JSON object via Promises, whether it is a successful operation or an error:

```
return await SdkMobileSelphi.selphi(getSelphiConfiguration())
.then((result: any) => 
{
    console.log("result", result);
})
.catch((error: any) => 
{
    console.log(error);
})
.finally(()=> {
    console.log("End startSelphi...");
});
```

Regardless of whether the result is correct/erroneous, the result will have the following format:

```
export interface SelphiResult {
  finishStatus?: number;
  errorType?: string;
  finishStatusDescription?: string;
  errorMessage?: string;
  bestImage?: string;
  bestImageCropped?: string;
  bestImageTemplateRaw?: string;
  bestImageTokenized?: string;
  qrData?: string;
  templateRaw?: string;
  images?: string[];
}
```

 
<div class="note">
<span class="note">:information_source:</span>
The result will be returned via a Promise containing an object of class SelphiResult. Information on these fields has been elaborated on below.
</div>


### 5.1 finishStatus

- **SdkFinishStatus.Ok**: The operation was successful.

- **SdkFinishStatus.Error**: An error has occurred, which will be indicated in the errorDiagnostic enumerated and, optionally, an extra information message will be displayed in the errorMessage property.

### 5.2 errorType
Returns the type of error that occurred (if there was one, which is indicated by the `finishStatus` parameter with the value `Error`). They are defined in the `SdkErrorType` class. The values ​​it can have are the following:

- **NoError**: No error has occurred. The process can continue.

- **UnknownError**: Unhandled error. Possibly caused by a bug in the resource bundle.

- **CameraPermissionDenied**: The exception that is thrown when the sdk does not have permission to access the camera.

- **SettingsPermissionDenied**: The exception that is thrown when the widget does not have permission to access system settings (*deprecated*).

- **HardwareError**: Exception that occurs when there is a hardware problem with the device, usually caused by very few available resources.

- **ExtractionLicenceError**: Exception that occurs when there has been a licencing problem on the server.

- **UnexpectedCaptureError**: Exception that occurs during the capture of frames by the camera.

- **ControlNotInitialisedError**: The widget configurator has not been initialised.

- **BadExtractorConfiguration**: Problem arose during widget configuration.

- **CancelByUser**: The exception that is thrown when the user stops the extraction manually.

- **TimeOut**: Exception that is thrown when a maximum time elapses without successfully completing the extraction.

- **InitProccessError**: Exception that is thrown when the sdk cannot process the captured images.

- **NfcError**: The exception that is thrown when the sdk does not have permission to access the nfc.

- **NetworkConnection**: The exception that is thrown when there are issues with the means the device uses to connect to the network.

- **TokenError**: The exception that is thrown when an invalid token is passed as a parameter.

- **InitSessionError**: The exception that is thrown when session cannot be initialised. The normal thing is that it happens because the `SdkCore` was not called when calling any other component.

- **ComponentControllerError**: The exception that is thrown when the component cannot be instantiated.

### 5.3 errorMessage

Indicates an additional error message if necessary. It is an optional value.

### 5.4 templateRaw
Returns the raw template that is generated after the extraction process.

### 5.5 bestImage
Returns the best image extracted from the registration or authentication process. This image is the original size image extracted from the camera.

### 5.6 bestImageCropped
Returns a cropped image centered on the user's face. This image is obtained from the bestImage. This is the image that should be used as the characteristic image of the user who carried out the registration or authentication process as an 'avatar'.

### 5.7 qrData
Returns the captured QR code data.

### 5.8 bestImageTemplateRaw
Optional parameter. Only visible if the parameter *enableGenerateTemplateRaw* is set to **true**. The widget will return the *bestImage* encrypted and in stringBase64 format.

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

---

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
