# VideoId Component

## 1. Introducción
El Componente tratado en el documento actual recibe el nombre de ***VideoID Component***. Éste se encarga de realizar la grabación de un usuario identificándose, mostrando la cara y su documento de identidad.

### 1.1 Requisitos mínimos

La versión mínima nativa (Android y iOS) de la SDK son las siguientes:

- Versión mínima Android: 24 - JDK 11
- Versión mínima iOS: 13

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

- Asegurarse de que React Native esté instalado.
- Acceda al **\<%APPLICATION_PATH%\>** en un terminal y ejecute:

```
[ionic] cordova plugin add @facephi/sdk-core-react-native
[ionic] cordova plugin add @facephi/sdk-videoid-react-native
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

### 2.3.2 Permisos para geolocalización
Debido a que el componente de **Tracking** tiene opciones de geolocalización, es necesario añadir los permisos para ello. En el AndroidManifest agregar los siguientes permisos:

```
<!-- Always include this permission -->
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<!-- Include only if your app benefits from precise location access. -->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

---

## 3. Configuración del componente
El componente actual contiene una serie de métodos e interfaces de Typescript incluidos dentro del archivo ***SdkVideoIdConfig.js***. En este fichero se puede encontrar la API necesaria para la comunicación entre la aplicación y la funcionalidad nativa del componente. A continuación, se explica para qué sirve cada uno de los enumerados y las demás propiedades que afectan al funcionamiento del componente.

A continuación se muestra la clase *VideoIdConfiguration*, que permite configurar el componente de **VideoId**:

```java
SdkVideoIdConfig = function () {
    this.mode = "face_document_front";
    this.time = 5000;
    this.showTutorial = false;
    this.url;
    this.apiKey;
    this.tenantId;
    this.showDiagnostic;
}
```

A continuación, se comentarán todas las propiedades que se pueden definir en el objeto **VideoIdConfiguration**:

<div class="note">
<span class="note">:information_source:</span>
Toda la configuración se podrá encontrar en el archivo ***sdk-videoid/www/SdkVideoIdConfig.js*** del componente.
</div>

A la hora de realizar la llamada al component existe una serie de parámetros que se deben incluir. A continuación se comentarán brevemente.

### 3.1 time

**type:** *number*

Tiempo que se permanecerá en cada pantalla del proceso en ms.

```
time: 5000
```

### 3.2 mode

**type:** *VideoMode*

Este enumerado se define en la clase **VideoMode** en ***definitions.ts***. Modo que se aplicará para la grabación. Los posibles valores de VideoIdMode serán:

- ***VideoMode.FACE_DOCUMENT_FRONT***: Tienes que mostrar la cara y la parte frontal del documento.
- ***VideoMode.ONLY_FACE***: Sólo tienes que mostrar la cara durante el proceso.
- ***VideoMode.FACE_DOCUMENT_FRONT_BACK***: Tienes que mostrar la cara, la parte frontal y el dorso del documento.

```
mode: VideoMode.FACE_DOCUMENT_FRONT_BACK;
```

### 3.3 extractionTimeout

**type:** *number*

Se setea el timeout del plugin.

```
extractionTimeout: 10000;
```

### 3.4 showTutorial

**type:** *boolean*

Indica si se desea mostrar el tutorial completo del proceso o sólo la versión simplificada.

```
showTutorial: true;
```

### 3.5 Url

**type:** *string*

Ruta al socket de video.

```
url: url_provided_by_Facephi
```

### 3.6 ApiKey

**type:** *string*

ApiKey necesaria para la conexión con el socket de video.

```
apiKey: "apiKey_provided_by_Facephi";
```
### 3.7 TenantId

**type:** *string*

Identificador del tenant que hace referencia al cliente actual, necesario para la conexión con el servicio de video.

```
tenantId: "TenantId_provided_by_Facephi";
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
---

## 4. Uso del componente

A continuación se mostrará la manera de ejecutar la funcionalidad del componente actual.

<div class="warning">
<span class="warning">:warning:</span>
Se recuerda que para lanzar un componente determinado previamente habrá que inicializar el SDK con su respectiva licencia, y después iniciar una nueva operación. Para más información consulte la documentación del Componente Core.
</div>

Una vez configurado el componente, para lanzarlo se deberá ejecutar el siguiente código:

``` java
function callVideoId()
{
    if (typeof facephi.plugins.sdkvideoid === "undefined") {
        showErrorUI("Cordova VideoId Sdk is not installed...");
        return;
    }

    console.log('callVideoId started...');
    $("#messageResult").html("Starting proccess...").addClass("blink").css("color", "#000000").css("text-align","center").show();

    if (isStartingSDK) {
        console.log("A process is running...");
        return false;
    }
    if (!isStartingSDK) {
        isStartingSDK = true;
    }

    var config = new SdkVideoIdConfig();
    config.setMode(facephi.plugins.sdkvideoid.mode.SdkVideoIdMode.face_document_front)
    config.setTime(5000);
    config.setShowTutorial(true);

    videoIdResponse = null;
    facephi.plugins.sdkvideoid.launchVideoId(config)
    .then(
        (result) => console.log(result),
        (err) => console.log(err),
    )
    .finally (() =>
    {
        isStartingSDK = false
        console.log("callVideoId finished...");
        $("#messageResult").html("").removeClass("blink").css("color", "#ff0000").css("text-align", "center").show();
    });
}
```

---

## 5. Retorno de resultado

Como se muestra en el ejemplo anterior, el resultado se devuelve en forma de objeto **JSON** a través de ***Promises***, ya sea una operación exitosa o un error:
```
facephi.plugins.sdkvideoid.launchVideoId(config)
.then(
    (result) => console.log(result),
    (err) => console.log(err),
)
.finally (() =>
{
    isStartingSDK = false
    console.log("callVideoId finished...");
    $("#messageResult").html("").removeClass("blink").css("color", "#ff0000").css("text-align", "center").show();
});
```

Independientemente de si el resultado es correcto/erróneo el resultado tendrá el siguiente formato:

```
VideoIdResult {
    finishStatus: number;
    finishStatusDescription?: string;
    errorType: string;
    errorMessage?: string;
    data?: string;
}
```
<div class="note">
<span class="note">:information_source:</span>
El resultado será devuelto por medio de una Promise que contiene un objeto de la clase ***SdkVideoIdResult***. A continuación se amplía información sobre esos campos.
</div>

### 5.1 finishStatus

Devuelve el diagnóstico global de la operación.

- **1**: La operación fue exitosa.
- **2**: Se ha producido un error, el cuál se indicará en el enumerado ***errorType*** y, opcionalmente, se mostrará un mensaje de información extra en la propiedad ***errorMessage***.


### 5.2 finishStatusDescription

Devuelve la descripción de finishStatus.
- **Status_Ok**: La operación fue exitosa.
- **Status_Error**: Se ha producido un error, el cuál se indicará en el enumerado ***errorType*** y, opcionalmente, se mostrará un mensaje de información extra en la propiedad ***errorMessage***.

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