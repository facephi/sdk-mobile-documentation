# NFC Component

## 1. Introducción
El Componente tratado en el documento actual recibe el nombre de ***NFC Component***. La autenticación pasiva del chip NFC de un documento comprueba si realmente ha sido expedido por una autoridad certificada. La autenticación pasiva nos permite validar que:

- El documento ha sido expedido por la autoridad certificadora del país al que pertenece.
- El documento no ha sido alterado.
- El documento no es una copia o un documento clonado.

### 1.1 Requisitos mínimos

La versión mínima nativa (Android y iOS) de la SDK son las siguientes:

-   Versión mínima Android: **24 - JDK 17**
-   Versión mínima Build Tools: **8.3.0**
-   Versión mínima Kotlin Android: **1.9.0**
-   Versión mínima iOS: **13**
-   Versión mínima Android Cordova **12.0.0**
-   Versión mínima iOS Cordova **7.0.0**

En cuanto a la arquitectura del dispositivo móvil:

armeabi-v7, x86, arm64 y x64

### 1.2 Versión del plugin
La versión del plugin actual se puede consultar de la siguiente forma:

Buscamos el archivo ***package.json*** & ***config.xml*** en la raíz del plugin.

En el ***KEY/TAG*** version se indica la versión.

## 2. Integración del componente 
Antes de integrar este componente **se recomienda** leer la documentación relativa a **Core Component** y seguir las instrucciones indicadas en dicho documento.

<div class="note">
<span class="note">:information_source:</span>
En esta sección se explicará paso a paso cómo integrar el componente actual en un proyecto ya existente. 
Para esta sección, se considerarán los siguiente valores:
- **\<%APPLICATION_PATH%\>** - Path a la raíz de la aplicación (ejemplo: /folder/example)
- **\<%PLUGIN_CORE_PATH%\>** - Path a la raíz del plugin core, que es obligatorio (ejemplo: /folder/sdk-core)
- **\<%PLUGIN_VIDEOID_PATH%\>** - Path a la raíz del plugin actual (ejemplo: /folder/sdk-videoid)
</div>

### 2.1. Instalación del plugin: Common
El plugin permite la ejecución en platafoma **Android y iOS**. En esta sección se explican los pasos comunes. Para instalar el plugin se deben seguir los siguientes pasos:

- Asegurarse de que Cordova esté instalado.
- Acceda al **\<%APPLICATION_PATH%\>** en un terminal y ejecute:

```
[ionic] cordova plugin add @facephi/sdk-core-cordova
[ionic] cordova plugin add @facephi/sdk-videoid-cordova
```

Es importante verificar que la ruta al complemento esté correctamente definida en package.json:

```
"dependencies": {
  "@facephi/sdk-core-cordova": <% PLUGIN_CORE_PATH %>,
  "@facephi/sdk-videoid-cordova": <% PLUGIN_VIDEOID_PATH %>
}
```

Después de ejecutar los pasos anteriores, puede iniciar la aplicación con el sdk/componente instalado.
Desde diferentes IDE's, los proyectos generados en las carpetas de Android e iOS se pueden abrir, compilar y depurar usando **Android Studio** y **XCode** respectivamente.

## 2.2 Instalación plugin: iOS
### 2.2.1 Configuración del proyecto
Para la versión de iOS, a la hora de añadir nuestro plugin a la aplicación final, previamente se deben tener en cuenta los siguientes puntos:

- **Añadir los permisos de cámara**: Para utilizar el component, es necesario habilitar el permiso de la cámara en el archivo ***info.plist*** de la aplicación (incluido dentro del proyecto en la carpeta ***ios***). Se deberá editar el archivo con un editor de texto y agregar el siguiente par *clave/valor*:

```
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) uses the camera</string>
```

- **Añadir Privacy - NFC Scan Usage Description**:  Para utilizar el widget, es necesario habilitar el permiso de nfc en el archivo info.plist de la aplicación (incluido dentro del proyecto en la carpeta ios).
```
<key>NFCReaderUsageDescription</key>
<string>The app needs this permission for the correct usage.</string>
```
Añadir ISO7816 application identifiers for NFC Tag Reader Session: Para utilizar el widget, es necesario habilitar el permiso de nfc en el archivo info.plist de la aplicación (incluido dentro del proyecto en la carpeta ios). Se deberá editar el archivo con un editor de texto y agregar el siguiente par clave/valor:
```
<array>
    <string>A0000002471001</string>
    <string>A0000002472001</string>
    <string>00000000000000</string>
</array>
```
- **Añadir el Capability Near field Communication Tag Reading**

Open image-20230214-141106.png
image-20230214-141106.png

- **Añadir el Entitlements Near Field Communication Tag Reader Session Formats**:

Open image-20230214-141753.png
image-20230214-141753.png

### 2.2.2 Actualizar el Podfile
En el podfile del proyecto será necesario añadir la información del repositorio privado (ver apartado 2.1). Para ello, se deberá agregar las siguientes lineas al inicio del fichero:

```
platform :ios, '13.0' //MIN VERSION
plugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']
source 'https://cdn.cocoapods.org/'
```

<div class="note">
<span class="note">:information_source:</span>
Para saber más acerca de la configuración y uso de **Cocoapods Artifactory**, es necesario acceder al siguiente documento de *Componente Core*.
</div>

### 2.2.3 Establecer la versión de Swift
En *Xcode*, para que la aplicación y todos sus métodos funcionen correctamente, se debe establecer la versión mínima de swift a la versión 5. Los cambios se podrán realizar siguiendo estos pasos:

- Target -> Project -> Build Settings -> Swift Compiler - Language -> Swift Language Version -> Choose Swift 5.

### 2.2.4 Posibles incidencias
Si ocurren problemas de entorno o no se actualiza el plugin tras realizar nuevos cambios (por ejemplo, problemas ocurridos debido a que no se genera correctamente el bundle, o no se actualizan las librerías a las versiones adecuadas), se recomienda ejecutar la siguiente secuencia de instrucciones tras lanzar el plugin:

- Abrir la carpeta **ios** de la aplicación en un terminal.
- Ejecutar el siguiente comando:

```
pod deintegrate
```

- Eliminar el ***Podfile.lock***
- Ejecutar el siguiente comando (o abrir el proyecto con Xcode y ejecutarlo):

```
pod install --repo-update
```

## 2.3 Instalación plugin: Android
### 2.3.1 Establecer la versión de Android SDK
En el caso de Android, la versión mínima de SDK requerida por nuestras bibliotecas nativas es **24**, por lo que si la aplicación tiene un *SDK mínimo* definido menor que éste, deberá modificarse para evitar un error de compilación. Para ello accede al fichero ***build.gradle*** de la aplicación (ubicado en la carpeta ***android***) y modifica el siguiente parámetro:

```
buildscript {
  ext {
    minSdkVersion = 24
  }
}
```

La versión mínima del android.tools(AGP) es ***8.3.0***. Para modificarlo, en caso de ser necesario, se deberá modificar el archivo ***build.gradle*** (ubicado en la carpeta ***android***) y modificar lo siguiente:

```
dependencies {
    classpath "com.android.tools.build:gradle:8.3.0"
}
```

En el mismo archivo, es obligatorio agregar lo siguiente:

```
android {
    packagingOptions {
        pickFirst("META-INF/versions/9/OSGI-INF/MANIFEST.MF") // NFC
    }
```

---

## 3. Configuración del componente
El componente actual contiene una serie de métodos e interfaces de Typescript incluidos dentro del archivo ***SdkNfcConfig.js***. En este fichero se puede encontrar la API necesaria para la comunicación entre la aplicación y la funcionalidad nativa del componente. A continuación, se explica para qué sirve cada uno de los enumerados y las demás propiedades que afectan al funcionamiento del componente.

A continuación se muestra la clase *NfcConfiguration*, que permite configurar el componente de **Nfc**:

```java
SdkNfcConfig = function () {
    this.issuer;
    this.docNumber = "";
    this.birthDay = "";
    this.expirationDay = "";
    this.extractionTimeout = 50000;
    this.showTutorial = true;
    this.vibrationEnabled = true;
    this.skipPACE = false;
    this.debug;
    this.showDiagnostic;
}
```

A continuación, se comentarán todas las propiedades que se pueden definir en el objeto **NfcConfiguration**:

<div class="note">
<span class="note">:information_source:</span>
Toda la configuración se podrá encontrar en el archivo ***sdk-nfc/www/SdkNfcConfig.js*** del componente.
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

### 3.5 issuer(sólo iOS)

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
showTutorial: true;
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

Indica que solo se desea la lectura NFC BAC. Es un sencillo y rápido.
lector.

```
skipPACE: false;
```

#### 3.11. showPreviousTip

**type:** *boolean*

Muestra una pantalla de prelanzamiento con información sobre el proceso a realizar y un botón de inicio.

#### 3.12. extractFacialImage

**type:** *boolean*

Indica si desea extraer la imagen del rostro.


#### 3.13. extractSignatureImage

**type:** *boolean*

Indica si desea extraer la imagen de la firma.

---

## 4. Uso del componente

A continuación se mostrará la manera de ejecutar la funcionalidad del componente actual.

<div class="warning">
<span class="warning">:warning:</span>
Se recuerda que para lanzar un componente determinado previamente habrá que inicializar el SDK con su respectiva licencia, y después iniciar una nueva operación. Para más información consulte la documentación del Componente Core.
</div>

Una vez configurado el componente, para lanzarlo se deberá ejecutar el siguiente código:

``` java
function callNfc()
{
    if (typeof facephi.plugins.sdknfc === "undefined") {
        showErrorUI("Cordova Nfc Sdk is not installed...");
        return;
    }

    console.log('callNfc started...');
    $("#messageResult").html("Starting proccess...").addClass("blink").css("color", "#000000").css("text-align","center").show();

    if (isStartingSDK) {
        console.log("A process is running...");
        return false;
    }
    if (!isStartingSDK) {
        isStartingSDK = true;
    }

    var config = new SdkNfcConfig();

    config.setDocNumber("AAA439684");
    config.setBirthDay("16/08/1979");
    config.setExpirationDay("29/11/2022");
    config.setExtractionTimeout(50000);

    facephi.plugins.sdknfc.launchNfc(config)
    .then(
        (result) => console.log(result),
        (err) => console.log(err),
    )
    .finally (() =>
    {
        console.log("callNfc finished...");
        $("#messageResult").html("").removeClass("blink").css("color", "#ff0000").css("text-align", "center").show();
        isStartingSDK = false
    });
}
```

---

## 5. Retorno de resultado

Como se muestra en el ejemplo anterior, el resultado se devuelve en forma de objeto **JSON** a través de ***Promises***, ya sea una operación exitosa o un error:
```
facephi.plugins.sdknfc.launchNfc(config)
.then(
    (result) => console.log(result),
    (err) => console.log(err),
)
```

Independientemente de si el resultado es correcto/erróneo el resultado tendrá el siguiente formato:

```
NfcResult {
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
El resultado será devuelto por medio de una Promise que contiene un objeto de la clase ***SdkNfcResult***. A continuación se amplía información sobre esos campos.
</div>

### 5.1 finishStatus

Devuelve el diagnóstico global de la operación.

- **1**: La operación fue exitosa.
- **2**: Se ha producido un error, el cuál se indicará en el string ***errorType*** y, opcionalmente, se mostrará un mensaje de información extra en la propiedad ***errorMessage***.

### 5.2 finishStatusDescription

Devuelve la descripción de finishStatus.
- **STATUS_OK**: La operación fue exitosa.
- **STATUS_ERROR**: Se ha producido un error, el cuál se indicará en el string ***errorType*** y, opcionalmente, se mostrará un mensaje de información extra en la propiedad ***errorMessage***.

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

Información obtenida del documento ordenada por:

- documentNumber

- expirationDate

- issuer

- mrzString

- type

### 5.6 nfcPersonalInformation

Información obtenida del documento ordenada por:

- address

- birthdate

- city

- gender

- name

- nationality

- personalNumber

- placeOfBirth

- surname

### 5.7 nfcValidations

Información de las validaciones del documento ordenada por:

- accessType

- activeAuthenticationSupported

- activeAuthenticationValidation

- chipAuthenticationValidation

- dataGroupsHashesValidation

- documentSigningValidation

- issuerSigningValidation

### 5.8 facialImage

La imagen del rostro obtenida durante la captura.

### 5.9 fingerprintImage

La imagen de la huella dactilar obtenida durante la captura.

### 5.10 signatureImage

La imagen de la firma obtenida durante la captura.