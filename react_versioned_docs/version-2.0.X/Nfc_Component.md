# NFC Component

## 1. Introduction
The Component addressed in the current document is called the ***NFC Component***. This is responsible for capturing a selfie of the user and the subsequent extraction of the most important facial characteristics. Its main functionalities are the following:

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

<div class="warning">
<span class="warning">:warning:</span>
This component needs to update to ***React Native 0.72 version*** due to internal dependencies, or at least to update ***Android Build Tools*** to ***8.0*** or more
</div>


### 1.2 Plugin version

The current plugin version can be checked as follows:

- Look for the ***package.json*** file at the root of the plugin.
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
- **\<%PLUGIN_CORE_PATH%\>** - Path to the root of the Core plugin, which is required (example: /folder/sdk-core)
- **\<%PLUGIN_NFC_PATH%\>** - Path to the root of the current plugin (example: /folder/sdk-nfc)
</div>

### 2.1. Plugin installation: Common
The plugin allows execution on **Android and iOS** platforms. This section explains the common steps to all platforms. To install the plugin, the following steps must be adopted:

- Make sure **react-native is** installed.

- Access **APPLICATION_PATH** at a terminal and run:

```
yarn add @facephi/sdk-core-react-native
yarn add @facephi/sdk-nfc-react-native
```

-   In addition, to install the plugin on iOS, the following must also
    be executed:

``` java
cd ios
pod install
```

- It is important to verify that the path to the plugin is correctly defined in **package.json**:

```java
"dependencies": {
  "@facephi/sdk-core-react-native": <% PLUGIN_CORE_PATH %>,
  "@facephi/sdk-nfc-react-native": <% PLUGIN_NFC_PATH %>
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

- ***Add camera permissions***: To use the component, you need to enable the camera permission in the application's ***info.plist*** file (included within the project in the ios folder). You will need to edit the file with a text editor and add the following *key/value* pair:

```java
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) uses the camera</string>
```

- ***Add Privacy - NFC Scan Usage Description***  To use the component, you need to enable the NFC permission in the application's ***info.plist*** file (included within the project in the ios folder).
```
<key>NFCReaderUsageDescription</key>
<string>The app needs this permission for the correct usage.</string>
```
- ***Add ISO7816 application identifiers for NFC Tag Reader Session***: Finally, you have to edit *info.plist* file with a Text Editor, and  add the following key/value/pair:
```
<array>
    <string>A0000002471001</string>
    <string>A0000002472001</string>
    <string>00000000000000</string>
</array>
```
- **Add the Capability Near field Communication Tag Reading**

Open image-20230214-141106.png
image-20230214-141106.png

- **Add the Entitlements Near Field Communication Tag Reader Session Formats**:

Open image-20230214-141753.png
image-20230214-141753.png

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

#### 2.2.3 Set Swift version
In *Xcode*, for the application and all its methods to work correctly, the minimum version of swift must be set to version 5. Changes can be made by following these steps:

- Target -> Project -> Build Settings -> Swift Compiler - Language -> Swift Language Version -> Choose Swift 5.
  

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
For Android, the minimum SDK version required by our native libraries is **24**, so if your app has a Minimum SDK defined less than this, it will need to be modified to avoid a compile error. To do this, access the application's ***build.gradle*** file (located in the ***android*** folder) and modify the following parameter:


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

## 3. Configuración del componente
El componente actual contiene una serie de métodos e interfaces de Typescript incluidos dentro del archivo ***node_modules/@facephi/sdk-nfc-react-native/src/index.tsx***. En este fichero se puede encontrar la API necesaria para la comunicación entre la aplicación y la funcionalidad nativa del componente. A continuación, se explica para qué sirve cada uno de los enumerados y las demás propiedades que afectan al funcionamiento del componente.

A continuación se muestra la clase *NfcConfiguration*, que permite configurar el componente de **Nfc**:

```java
export interface NfcConfiguration {
  docNumber: string;
  birthDay: string;
  issuer?: string;
  expirationDay: string;
  extractionTimeout?: number;
  docType?: NfcDocumentType;
  showTutorial?: boolean;
  vibrationEnabled?: boolean;
  skipPACE?: boolean;
  debug?: boolean;
  showDiagnostic?: boolean;
}
```

A continuación, se comentarán todas las propiedades que se pueden definir en el objeto **NfcConfiguration**:

<div class="note">
<span class="note">:information_source:</span>
Toda la configuración se podrá encontrar en el archivo ***src/index.tsx*** del componente.
</div>

A la hora de realizar la llamada al component existe una serie de parámetros que se deben incluir. A continuación se comentarán brevemente.

### 3.1 docNumber

**type:** *string*

Número de documento que se pretende scanear.

```
docNumber: 2115000
```

### 3.2 birthDay

**type:** *string*

Fecha de nacimiento que figura en el documento que se pretende scanear.

```
birthDay: dd/mm/yyyy;
```

### 3.3 expirationDay

**type:** *number*

Fecha de expiración que figura en el documento que se pretende scanear.

```
expirationDay: dd/mm/yyyy;
```

### 3.4 extractionTimeout

**type:** *number*

Tiempo de espera en el que el plugin deja de scanear de manera automática en caso de no obtener resultados.

```
extractionTimeout: 5000;
```

### 3.5 issuer

**type:** *string*

Código del país que se desea scanear.

```
issuer: 
```

### 3.6 docType

**type:** *NfcDocumentType*

Tipo de documento que se pretende scanear.

```
docType: ;
```
### 3.7 showTutorial

**type:** *boolean*

Habilita o no que se muestre un tutorial previa a la acción de lectura del documento.

```
showTutorial: ;
```

### 3.8 showDiagnostic

**type:** *boolean*

Indica si se desea mostrar un diagnostico en caso de falla.

```
showDiagnostic: false;
```

### 3.9 vibrationEnabled

**type:** *boolean*

Indica si se desea o no habilitar la vibración.

```
vibrationEnabled: false;
```

### 3.10 skipPACE

**type:** *boolean*

.

```
skipPACE: false;
```

### 3.11 debug

**type:** *boolean*

Habilita o no que se muestren datos de debug en pantalla.

```
debug: false;
```
---

## 4. Uso del componente

A continuación se mostrará la manera de ejecutar la funcionalidad del componente actual.

<div class="warning">
<span class="warning">:warning:</span>
Se recuerda que para lanzar un componente determinado previamente habrá que inicializar el SDK con su respectiva licencia, y después iniciar una nueva operación. Para más información consulte la documentación del Componente Core.
</div>

Una vez configurado el componente, para lanzarlo se deberá ejecutar el siguiente código:

``` java
const startNfc = async () => 
{ 
  try 
  {
    console.log("Starting startNfc...");

    return await SdkMobileNfc.nfc(getNfcConfiguration())
    .then((result: NfcResult) => 
    {
      console.log("result", result);
      if (result.finishStatus == SdkFinishStatus.Error) {
        drawError(setMessage, result);
      }
    })
    .catch((error: any) => 
    {
      console.log(error);
    })
    .finally(()=> {
      console.log("End startNfc...");
    });
  } 
  catch (error) {
    setMessage(JSON.stringify(error));
  }
};

const getNfcConfiguration = () => {
  let config: NfcConfiguration = {
    docNumber: "AAA439684", 
    birthDay: "16/08/1979", 
    expirationDay: "29/11/2022", 
    extractionTimeout: 50000
  };
  return config;
};
```

---

## 5. Retorno de resultado

Como se muestra en el ejemplo anterior, el resultado se devuelve en forma de objeto **JSON** a través de ***Promises***, ya sea una operación exitosa o un error:
```
return await SdkMobileNfc.nfc(getNfcConfiguration())
.then((result: NfcResult) => 
{
  console.log("result", result);
})
.catch((error: any) => 
{
  console.log(error);
})
.finally(()=> {
  console.log("End startNfc...");
});
```

Independientemente de si el resultado es correcto/erróneo el resultado tendrá el siguiente formato:

```
export interface NfcResult 
{
  finishStatus: number;
  finishStatusDescription?: string;
  errorType: string;
  errorMessage?: string;
  nfcDocumentInformation?: any;
  nfcPersonalInformation?: any;
  nfcValidations?: any;
  facialImage?: string;
  fingerprintImage?: string;
  signatureImage?: string;
}
```
<div class="note">
<span class="note">:information_source:</span>
El resultado será devuelto por medio de una Promise que contiene un objeto de la clase ***NfcResult***. A continuación se amplía información sobre esos campos.
</div>

### 5.1 finishStatus

Devuelve el diagnóstico global de la operación.

- **1**: La operación fue exitosa.
- **2**: Se ha producido un error, el cuál se indicará en el enumerado ***errorType*** y, opcionalmente, se mostrará un mensaje de información extra en la propiedad ***errorMessage***.


### 5.2 finishStatusDescription

Devuelve el diagnóstico global de la operación.

- **STATUS_OK**: La operación fue exitosa.
- **STATUS_ERROR**: Se ha producido un error, el cuál se indicará en el enumerado ***errorType*** y, opcionalmente, se mostrará un mensaje de información extra en la propiedad ***errorMessage***.


### 5.3 errorType
 Devuelve el tipo de error que se ha producido (en el caso de que haya habido uno, lo cual se indica en el parámetro finishStatus con el valor Error). Se definen en la clase *SdkErrorType*. Los valores que puede tener son los siguientes:

- **NoError**: No ha ocurrido ningún error. El proceso puede continuar.
- **UnknownError**: Error no gestionado. Posiblemente causado por un error en el bundle de recursos.
- **CameraPermissionDenied**: Excepción que se produce cuando el sdk no tiene permiso de acceso a la cámara.
- **SettingsPermissionDenied**: Excepción que se produce cuando el componente no tiene permiso de acceso a la configuración del sistema (*deprecated*).
- **HardwareError**: Excepción que surge cuando existe algún problema de hardware del dispositivo, normalmente causado porque los recursos disponibles son muy escasos.
- **ExtractionLicenseError**: Excepción que ocurre cuando ha habido un problema de licencias en el servidor.
- **UnexpectedCaptureError**: Excepción que ocurre durante la captura de frames por parte de la cámara.
- **ControlNotInitializedError**: El configurador del componente no ha sido inicializado.
- **BadExtractorConfiguration**: Problema surgido durante la configuración del componente.
- **CancelByUser**:  Excepción que se produce cuando el usuario para la extracción de forma manual.
- **TimeOut**: Excepción que se produce cuando transcurre un tiempo máximo sin conseguir finalizar la extracción con éxito.
- **InitProccessError**: Excepción que se produce cuando el sdk no puede procesar las imagenes capturadas.
- **NfcError**: Excepción que se produce cuando el sdk no tiene permiso de acceso al nfc.
- **NetworkConnection**: Excepción que se produce cuando hay inconvenientes con los medios que usa el dispositivo para conectarse a la red.
- **TokenError**: Excepción que se produce cuando se pasa por parámetro un token no válido.
- **InitSessionError**: Excepción que se produce cuando no se puede inicializar session. Lo normal es que ocurra porque no se llamo al `SdkCore` al ppio de llamar a cualquier otro componente.
- **ComponentControllerError**: Excepción que se produce cuando no se puede instanciar el componente.

### 5.4 errorMessage: 
Indica un mensaje de error adicional en caso de ser necesario. Es un valor opcional.
### 5.5 nfcDocumentInformation
### 5.6 nfcPersonalInformation
### 5.7 nfcValidations
### 5.8 facialImage
### 5.9 fingerprintImage
### 5.10 signatureImage