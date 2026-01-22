# VideoCall Component

## 1. Introduction
The Component discussed in the current document is called ***VideoCall Component***. This is responsible for managing the communication between a user and an agent remotely, through a communication channel. It is primarily geared toward video assistance use cases.

### 1.2 Plugin version
The current plugin version can be checked as follows:

We look for the file ***pubspec.yaml*** in the root of the plugin.

The version is indicated in the ***KEY/TAG*** version.

## 2. Component integration 
Before integrating this component **it is recommended** to read the documentation related to **Core Component** and follow the instructions indicated in said document.

<div class="note">
<span class="note">:information_source:</span>
This section will explain step by step how to integrate the current component into an existing project. 
For this section, the following values ​​will be considered:
- **\<%APPLICATION_PATH%\>** - Path to the root of the application (example: /folder/example)
- **\<%PLUGIN_CORE_PATH%\>** - Path to the root of the core plugin, which is required (example: /folder/sdk-core)
- **\<%PLUGIN_VIDEOCALL_PATH%\>** - Path to the root of the current plugin (example: /folder/sdk-videocall)
</div>

### 2.1. Plugin installation: Common
The plugin allows execution on **Android and iOS** platforms. This section explains common steps. To install the plugin you must follow the following steps:

- Make sure Flutter is installed.
- Access APPLICATION_PATH in a terminal and run:
```
dart pub token add "https://facephicorp.jfrog.io/artifactory/api/pub/pub-pro-fphi"
```
- Access **\<%APPLICATION_PATH%\>**, and in the pubspec.yaml file and add:

```
fphi_sdkmobile_videocall:
  hosted:
    name: sdkvideocall
    url: https://facephicorp.jfrog.io/artifactory/api/pub/pub-pro-fphi/
  version: ^2.0.0
```

Después de ejecutar los pasos anteriores, puede iniciar la aplicación con el sdk/componente instalado.
Desde diferentes IDE's, los proyectos generados en las carpetas de Android e iOS se pueden abrir, compilar y depurar usando **Android Studio** y **XCode** respectivamente.

## 2.2 Plugin installation: iOS
### 2.2.1 Project configuration
For the iOS version, when adding our plugin to the final application, the following points must be taken into account beforehand:

- **Add camera permissions**: To use the widget, you need to enable the camera permission in the ***info.plist*** file of the application (included within the project in the *** folder ios***). You must edit the file with a text editor and add the following *key/value* pair:

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

### 2.2.3 Possible incidents
If environmental problems occur or the plugin is not updated after making new changes (for example, problems occurred due to the bundle not being generated correctly, or the libraries not being updated to the appropriate versions), it is recommended to run the following sequence instructions after launching the plugin:

- Open the **ios** folder of the application in a terminal.
- Run the following command:

```
pod deintegrate
```

- Remove ***Podfile.lock***
- Run the following command (or open the project with Xcode and run it):

```
pod repo-art update cocoa-pro-fphi
pod install --repo-update
```

## 2.3 Plugin installation: Android
### 2.3.0 Set Android SDK version
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
The current component contains a number of ***dart*** methods and interfaces included within the ***fphi_sdkmobile_videocall_configuration.dart*** file. In this file you can find the API necessary for communication between the application and the native functionality of the component. The purpose of each of those listed and the other properties that affect the operation of the component are explained below.

Below is the *VideoCallConfiguration* class, which allows you to configure the **VideoCall** component:


```java
class VideoCallConfiguration
{
  String? mUrl;
  String? mApiKey;
  String? mTenantId;
  String? mExtensionName;
  bool? mShowDiagnostic;
}
```

Next, all the properties that can be defined in the **VideoCallConfiguration** object will be discussed:

<div class="note">
<span class="note">:information_source:</span>
All configuration can be found in the component's ***fphi_sdkmobile_videoid/fphi_sdkmobile_videocall_configuration.dart.*** file.
</div>

When calling the widget there are a series of parameters that must be included. They will be briefly discussed below.

### 3.1 screenSharing

**type:** *bool*

It is responsible for activating the device's screenshot in the background. It is mainly oriented for recording the onboarding process.
If you activate the screenSharing function, for iOS a series of additional steps are required at the native level. Please follow the following documentation:

https://facephi.github.io/sdk-mobile-documentation/docs/ios/Video_Recording_Component

### 3.2 extensionName(sólo iOS)

**type:** *string*

You must make sure to enter the bundle identifier of the Broadcast Upload Extension created here. In our example it is com.facephi.sdk.demo.videoRecording.

### 3.3 url

**type:** *string*

Ruta al socket de video.

```
mUrl: url_provided_by_Facephi
```

### 3.4 apiKey

**type:** *string*

ApiKey necesaria para la conexión con el socket de video.

```
mApiKey: "apiKey_provided_by_Facephi";
```
### 3.5 tenantId

**type:** *string*

Identificador del tenant que hace referencia al cliente actual, necesario para la conexión con el servicio de video.

```
mTenantId: "TenantId_provided_by_Facephi";
```

### 3.6 mShowDiagnostic

**type:** *boolean*

Indica si se desea mostrar un diagnostico en caso de falla.

```
mShowDiagnostic: false;
```
---

## 4. Use of the component

Below will be shown how to execute the functionality of the current component.

<div class="warning">
<span class="warning">:warning:</span>
Remember that to launch a previously determined component you will have to initialize the SDK with its respective license, and then start a new operation. For more information consult the Core Component documentation.
</div>

Once the component is configured, to launch it the following code must be executed:

```
Future<Either<Exception, VideoCallResult>> launchVideoCall() async {
  try
  {
    FphiSdkmobileVideocall videoCall = FphiSdkmobileVideocall();

    final Map resultJson = await videoCall.startVideoCallComponent(
        widgetConfigurationJSON: VideoCallConfiguration(
          mUrl: "wss://identityplatform.facephi.dev/api/video-assistance/",
          mApiKey: "rS7ToqmNUMHL55tblCOQOfB8rPJIrMnKsp5SKDcl",
          mTenantId:"e9b039fa-0a2f-4149-9acc-a7e20a46464e"
        )
    );
    return Right(VideoCallResult.fromMap(resultJson));
  }
  on Exception catch (e) {
    return (Left(e));
  }
}
```

---

## 5. Return result

As shown in the above example, the result is returned in the form of a **JSON** object through ***Promises***, whether it is a successful operation or an error:
```
final Map resultJson = await videoCall.startVideoCallComponent(
    widgetConfigurationJSON: VideoCallConfiguration(
      mUrl: "wss://identityplatform.facephi.dev/api/video-assistance/",
      mApiKey: "rS7ToqmNUMHL55tblCOQOfB8rPJIrMnKsp5SKDcl",
      mTenantId:"e9b039fa-0a2f-4149-9acc-a7e20a46464e"
    )
);
return Right(VideoCallResult.fromMap(resultJson));
```

Regardless of whether the result is correct/wrong, the result will have the following format:

```
class VideoCallResult
{
  final SdkFinishStatus finishStatus;
  final String finishStatusDescription;
  final String errorDiagnostic;
  final String? errorMessage;
  final String data;
}
```

<div class="note">
<span class="note">:information_source:</span>
The result will be returned through a Promise that contains an object of the class ***VideoIdResult***. Below is more information about these fields.
</div>

### 5.0 finishStatus

- **1**: The operation was successful.
- **2**: An error has occurred, which will be indicated in the errorDiagnostic string and, optionally, an extra information message will be displayed in the errorMessage property.

### 5.1 finishStatusDescription

- **STATUS_OK**: The operation was successful.
- **STATUS_ERROR**: An error has occurred, which will be indicated in the errorDiagnostic string and, optionally, an extra information message will be displayed in the errorMessage property.

### 5.2 errorDiagnostic
Returns the type of error that occurred (if there was one, which is indicated by the `finishStatus` parameter with the value `Error`). The values ​​it can have are the following:

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