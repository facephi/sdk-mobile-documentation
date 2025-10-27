# Voice Component

## 1. Introduction
The Component discussed in the current document is called ***Voice Component***. This is responsible for capturing the user's voice and subsequently extracting the corresponding templates. Its main functionalities are the following:

- Entry of a certain number of sentences to later read each one in one step.
- Internal microphone management.
- Permit management.
- Analysis of silences.
- Analysis of progress.
- Assistant in the capture processes.
- Generation of templates with voice characteristics and scores.

### 1.2 Plugin version
The current plugin version can be checked as follows:

We look for the file ***package.json*** in the root of the plugin.

The version is indicated in the ***KEY/TAG*** version.

---

## 2. Component integration 

<div class="note">
<span class="note">:information_source:</span>
Before integrating this component **it is recommended** to read the documentation related to **Core Component** and follow the instructions indicated in said document.
</div>

This section will explain step by step how to integrate the current component into an existing project. 

<div class="warning">
<span class="warning">:warning:</span>
For this section, the following values ​​will be considered:
- **\<%APPLICATION_PATH%\>** - Path to the root of the application (example: /folder/example)
- **\<%PLUGIN_CORE_PATH%\>** - Path to the root of the core plugin, which is required (example: /folder/sdk-core)
- **\<%PLUGIN_VOICE_PATH%\>** - Path to the root of the current plugin (example: /folder/sdk-voice)
</div>

### 2.1. Plugin installation: Common
The plugin allows execution on Android and iOS platforms. This section explains it. The following steps must be followed:

- Access **APPLICATION_PATH** and launch:

``` java
npm i @facephi/sdk-core-capacitor
npm i @facephi/sdk-voice-capacitor
npm run build
npx cap sync
npx ionic capacitor build [android | ios]
```

After executing the previous commands, the corresponding IDE for each of the platforms will automatically open (XCode for iOS, Android Studio for Android), and all that remains is to compile it (and debug it if necessary) as if it were a standard native project.

## 2.2 Plugin installation: iOS
### 2.2.1 Project configuration
For the iOS version, when adding our plugin to the final application, the following points must be taken into account beforehand:

- **Add camera permissions**: To use the component, it is necessary to enable the camera permission in the ***info.plist*** file of the application (included within the project in the *** folder ios***). You must edit the file with a text editor and add the following *key/value* pair:

```
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) uses the camera</string>
```

### 2.2.2 Update the Podfile
In the project podfile it will be necessary to add the information of the private repository (see section 2.1). To do this, the following lines must be added to the beginning of the file:

```
platform :ios, '13.0' //MIN VERSION
plugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']
source 'https://cdn.cocoapods.org/'
```

<div class="note">
<span class="note">:information_source:</span>
To know more about the configuration and use of **Cocoapods Artifactory**, it is necessary to access the following *Core Component* document.
</div>

### 2.2.3 Possible issues
If environmental problems occur or the plugin is not updated after making new changes (for example, problems occurred due to the bundle not being generated correctly, or the libraries not being updated to the appropriate versions), it is recommended to run the following sequence instructions after launching the plugin:

- Open the **ios** folder of the application in a terminal.
- Run the following command:

```
pod deintegrate
```

- Remove ***Podfile.lock***
- Run the following command (or open the project with Xcode and run it):

```
pod install --repo-update
```

## 2.3 Plugin installation: Android
### 2.3.1 Set Android SDK version
For Android, the minimum SDK version required by our native libraries is **24**, so if your app has a *minimum SDK* defined lower than this, it will need to be modified to avoid a build error. To do this, access the application's ***build.gradle*** file (located in the ***android*** folder) and modify the following parameter:

```
buildscript {
  ext {
    minSdkVersion = 24
  }
}
```

---

## 3. Component configuration
The current component contains a series of Typescript methods and interfaces included within the ***definitions.ts*** file. In this file you can find the API necessary for communication between the application and the native functionality of the component. The purpose of each of those listed and the other properties that affect the operation of the component are explained below.

Below is the *VoiceConfiguration* class, which allows you to configure the **Voice** component:

``` java
export interface VoiceConfiguration {
  vibrationEnabled: boolean;
  showTutorial: boolean;
  phrases: string;
  timeout?: number;
  showDiagnostic?: boolean;
  returnAudios?: boolean;
  returnTokenizedAudios?: boolean;
}
```

Next, all the properties that can be defined in the **VoiceConfiguration** object will be discussed:

<div class="note">
<span class="note">:information_source:</span>
All configuration can be found in the component's ***definitions.ts*** file.
</div>

When calling the component, there are a series of parameters that must be included. They will be briefly discussed below.

### 3.1 vibrationEnabled

**type:** *boolean*

Enable or disable the plugin's vibration option.

```
vibrationEnabled: true
```

### 3.2 showTutorial

**type:** *boolean*

Indicates whether you want to show the complete tutorial of the process or just the simplified version.

```
showTutorial: true;
```

### 3.3 phrases

**type:** *string*

Indicates the phrase(s) required to capture. If more than one phrase is used, it will be separated by the pipe(|) symbol.

```
phrases: 'hola mundo|hola voice component|hola Facephi',
```

### 3.4 timeout

**type:** *number*

Indicates the time that the component finishes due to inactivity.

```
timeout: 10000
```

### 3.5 showDiagnostic

**type:** *boolean*

Indicates whether you want to show a diagnosis in case of failure.

```
showDiagnostic: false;
```

### 3.6 returnAudios

**type:** *boolean*

Enable or disable the option to return recorded audios.

```
returnAudios: false;
```

### 3.7 returnTokenizedAudios

**type:** *boolean*

Enable or disable the option to return tokenized recorded audios.

```
returnTokenizedAudios: false;
```
---

## 4. Use of the component

Below will be shown how to execute the functionality of the current component.

<div class="warning">
<span class="warning">:warning:</span>
Remember that to launch a previously determined component you will have to initialize the SDK with its respective license, and then start a new operation. For more information consult the Core Component documentation.
</div>

Once the component is configured, to launch it the following code must be executed:

``` java
/**
 * Method that launches the plugin.
 * @param phrases  Comment for parameter phrases.
 * @param showTutorial  Comment for parameter showTutorial.
 * @returns Promise with a JSON string.
 */
launchVoice = async (): Promise<VoiceResult> => 
{
  console.log('Launching VoicePlugin widget...');
  return SdkVoice.startVoice(this.getVoiceSettings());
}

getVoiceSettings = () => 
{
  let config: VoiceConfiguration = 
  {
    phrases: 'hola mundo|hola voice component|hola y chau',
    showTutorial: false,
    vibrationEnabled: true,
    timeout: 30000
  };

  return config;
}
```

---

## 5. Return result

As shown in the above example, the result is returned in the form of a **JSON** object through ***Promises***, whether it is a successful operation or an error:
```
return SdkVoice.startVoice(this.getVoiceSettings());
```

Regardless of whether the result is correct/wrong, the result will have the following format:

``` java
export interface VoiceResult {
    finishStatus: number;
    finishStatusDescription?: string;
    errorType: string;
    errorMessage?: string;
    audios?: any;
    tokenizedAudios?: any;
}
```
<div class="note">
<span class="note">:information_source:</span>
The result will be returned through a Promise that contains an object of the class ***VoiceResult***. Below is more information about these fields.
</div>

### 5.1 finishStatus

Returns the global diagnostic of the process.

-   **1**: The operation was successful.
-   **2**: An error has occurred, which will be
    indicated in the ***errorType*** string and, optionally, an
    extra information message will be displayed in the ***errorMessage***
    property.

### 5.2 finishStatusDescription

Returns the finishStatus description. 

-   **STATUS_OK**: The operation was successful.
-   **STATUS_ERROR**: An error has occurred, which will be
    indicated in the ***errorType*** string and, optionally, an
    extra information message will be displayed in the ***errorMessage***
    property.


### 5.3 errorType

Returns the type of error that occurred (if there was one, which is
indicated in the *finishStatus* parameter with the value *Error*). It may have the following
values:

-   **NoError:** No error has occurred. The process can continue.

-   **UnknownError:** Unhandled error. Possibly caused by a bug in the
    resource bundle.

-   **CameraPermissionDenied:** The exception that is thrown when the
    sdk does not have permission to access the camera.

-   **SettingsPermissionDenied**: The exception that is thrown when the
    component does not have permission to access system settings
    (\*deprecated\*).

-   **HardwareError**: Exception that occurs when there is a hardware
    problem with the device, usually caused by very few available
    resources.

-   **ExtractionLicenceError**: Exception that occurs when there has
    been a licencing problem on the server.

-   **UnexpectedCaptureError**: Exception that occurs during the capture
    of frames by the camera.

-   **ControlNotInitialisedError**: The component configurator has not been
    initialised.

-   **BadExtractorConfiguration**: Problem arose during component
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

### 5.4 errorMessage
-   Indicates an additional error message if necessary. It is an
    optional value.

### 5.5 audios:
Returns the recorded audios. Only if the param returnAudios was setted in true.

### 5.6 tokenizedAudios
Returns the tokenized recorded audios. Only if the param returnTokenizedAudios was setted in true.