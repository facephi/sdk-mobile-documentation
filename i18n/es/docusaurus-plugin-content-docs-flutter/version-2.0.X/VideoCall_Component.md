# VideoCall Component

## 1. Introducción
El Componente tratado en el documento actual recibe el nombre de ***VideoCall Component***. Éste se encarga de gestionar la comunicación entre un usuario y un agente de forma remota, a través de un canal de comunicación. Está orientado principalmente para casos de uso de videoasistencia.

### 1.1 Requisitos mínimos
La versión mínima nativa (Android y iOS) de la SDK son las siguientes:

-   Versión mínima Android: **24 - JDK 17**
-   Versión mínima Build Tools: **8.1.4**
-   Versión mínima Kotlin Android: **1.9.0**
-   Versión mínima iOS: **13**
-   Versión mínima Flutter: **3.0**

En cuanto a la arquitectura del dispositivo móvil:

armeabi-v7, x86, arm64 y x64

### 1.2 Versión del plugin
La versión del plugin actual se puede consultar de la siguiente forma:

Buscamos el archivo ***pubspec.yaml*** en la raíz del plugin.

En el ***KEY/TAG*** version se indica la versión.

## 2. Integración del componente 
Antes de integrar este componente **se recomienda** leer la documentación relativa a **Core Component** y seguir las instrucciones indicadas en dicho documento.

<div class="note">
<span class="note">:information_source:</span>
En esta sección se explicará paso a paso cómo integrar el componente actual en un proyecto ya existente. 
Para esta sección, se considerarán los siguiente valores:
- **\<%APPLICATION_PATH%\>** - Path a la raíz de la aplicación (ejemplo: /folder/example)
- **\<%PLUGIN_CORE_PATH%\>** - Path a la raíz del plugin core, que es obligatorio (ejemplo: /folder/sdk-core)
- **\<%PLUGIN_VIDEOCALL_PATH%\>** - Path a la raíz del plugin actual (ejemplo: /folder/sdk-videocall)
</div>

### 2.1. Instalación del plugin: Common
El plugin permite la ejecución en platafoma **Android y iOS**. En esta sección se explican los pasos comunes. Para instalar el plugin se deben seguir los siguientes pasos:

- Asegurarse de que Flutter esté instalado.
- Acceda al APPLICATION_PATH en un terminal y ejecute:
```
dart pub token add "https://facephicorp.jfrog.io/artifactory/api/pub/pub-pro-fphi"
```
- Acceda al **\<%APPLICATION_PATH%\>**, y en el fichero pubspec.yaml y añadir:

```
fphi_sdkmobile_videocall:
  hosted:
    name: sdkvideocall
    url: https://facephicorp.jfrog.io/artifactory/api/pub/pub-pro-fphi/
  version: ^2.0.0
```

Después de ejecutar los pasos anteriores, puede iniciar la aplicación con el sdk/componente instalado.
Desde diferentes IDE's, los proyectos generados en las carpetas de Android e iOS se pueden abrir, compilar y depurar usando **Android Studio** y **XCode** respectivamente.

## 2.2 Instalación plugin: iOS
### 2.2.1 Configuración del proyecto
Para la versión de iOS, a la hora de añadir nuestro plugin a la aplicación final, previamente se deben tener en cuenta los siguientes puntos:

- **Añadir los permisos de cámara**: Para utilizar el widget, es necesario habilitar el permiso de la cámara en el archivo ***info.plist*** de la aplicación (incluido dentro del proyecto en la carpeta ***ios***). Se deberá editar el archivo con un editor de texto y agregar el siguiente par *clave/valor*:

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
pod repo-art update cocoa-pro-fphi
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

---

## 3. Configuración del componente
El componente actual contiene una serie de métodos e interfaces de ***dart*** incluidos dentro del archivo ***fphi_sdkmobile_videocall_configuration.dart***. En este fichero se puede encontrar la API necesaria para la comunicación entre la aplicación y la funcionalidad nativa del componente. A continuación, se explica para qué sirve cada uno de los enumerados y las demás propiedades que afectan al funcionamiento del componente.

A continuación se muestra la clase *VideoCallConfiguration*, que permite configurar el componente de **VideoCall**:

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

A continuación, se comentarán todas las propiedades que se pueden definir en el objeto **VideoIdConfiguration**:

<div class="note">
<span class="note">:information_source:</span>
Toda la configuración se podrá encontrar en el archivo ***fphi_sdkmobile_videoid/fphi_sdkmobile_videocall_configuration.dart.*** del componente.
</div>

A la hora de realizar la llamada al widget existe una serie de parámetros que se deben incluir. A continuación se comentarán brevemente.

### 3.1 screenSharing

**type:** *bool*

Se encarga de activar la captura de la pantalla del dispositivo en segundo plano. Está orientado principalmente para la grabación del proceso de onboarding.
En caso de activar la funcion de screenSharing, para iOS se requiere una serie de pasos adicionales a nivel nativo. Por favor seguir la siguiente documentación:

https://facephi.github.io/sdk-mobile-documentation/docs/ios/Video_Recording_Component

### 3.2 extensionName(sólo iOS)

**type:** *string*

Hay que asegurarse de introducir aqui el bundle identifier del Broadcast Upload Extension creado. En nuestro ejemplo es com.facephi.sdk.demo.videoRecording.

### 3.5 url

**type:** *string*

Ruta al socket de video.

```
mUrl: url_provided_by_Facephi
```

### 3.6 apiKey

**type:** *string*

ApiKey necesaria para la conexión con el socket de video.

```
mApiKey: "apiKey_provided_by_Facephi";
```
### 3.7 tenantId

**type:** *string*

Identificador del tenant que hace referencia al cliente actual, necesario para la conexión con el servicio de video.

```
mTenantId: "TenantId_provided_by_Facephi";
```

### 3.8 mShowDiagnostic

**type:** *boolean*

Indica si se desea mostrar un diagnostico en caso de falla.

```
mShowDiagnostic: false;
```
---

## 4. Uso del componente

A continuación se mostrará la manera de ejecutar la funcionalidad del componente actual.

<div class="warning">
<span class="warning">:warning:</span>
Se recuerda que para lanzar un componente determinado previamente habrá que inicializar el SDK con su respectiva licencia, y después iniciar una nueva operación. Para más información consulte la documentación del Componente Core.
</div>

Una vez configurado el componente, para lanzarlo se deberá ejecutar el siguiente código:

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

## 5. Retorno de resultado

Como se muestra en el ejemplo anterior, el resultado se devuelve en forma de objeto **JSON** a través de ***Promises***, ya sea una operación exitosa o un error:
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

Independientemente de si el resultado es correcto/erróneo el resultado tendrá el siguiente formato:

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
El resultado será devuelto por medio de una Promise que contiene un objeto de la clase ***VideoIdResult***. A continuación se amplía información sobre esos campos.
</div>

### 5.0 finishStatus
- **1**: La operación fue exitosa.
- **2**: Se ha producido un error, el cuál se indicará en el string `errorDiagnostic` y, opcionalmente, se mostrará un mensaje de información extra en la propiedad `errorMessage`.

### 5.1 finishStatusDescription
- **STATUS_OK**: La operación fue exitosa.
- **STATUS_ERROR**: Se ha producido un error, el cuál se indicará en el string `errorDiagnostic` y, opcionalmente, se mostrará un mensaje de información extra en la propiedad `errorMessage`.

### 5.2 errorDiagnostic
 Devuelve el tipo de error que se ha producido (en el caso de que haya habido uno, lo cual se indica en el parámetro finishStatus con el valor Error). Los valores que puede tener son los siguientes:

- **NoError**: No ha ocurrido ningún error. El proceso puede continuar.
- **UnknownError**: Error no gestionado. Posiblemente causado por un error en el bundle de recursos.
- **CameraPermissionDenied**: Excepción que se produce cuando el sdk no tiene permiso de acceso a la cámara.
- **SettingsPermissionDenied**: Excepción que se produce cuando el widget no tiene permiso de acceso a la configuración del sistema (*deprecated*).
- **HardwareError**: Excepción que surge cuando existe algún problema de hardware del dispositivo, normalmente causado porque los recursos disponibles son muy escasos.
- **ExtractionLicenseError**: Excepción que ocurre cuando ha habido un problema de licencias en el servidor.
- **UnexpectedCaptureError**: Excepción que ocurre durante la captura de frames por parte de la cámara.
- **ControlNotInitializedError**: El configurador del widget no ha sido inicializado.
- **BadExtractorConfiguration**: Problema surgido durante la configuración del widget.
- **CancelByUser**:  Excepción que se produce cuando el usuario para la extracción de forma manual.
- **TimeOut**: Excepción que se produce cuando transcurre un tiempo máximo sin conseguir finalizar la extracción con éxito.
- **InitProccessError**: Excepción que se produce cuando el sdk no puede procesar las imagenes capturadas.
- **NfcError**: Excepción que se produce cuando el sdk no tiene permiso de acceso al nfc.
- **NetworkConnection**: Excepción que se produce cuando hay inconvenientes con los medios que usa el dispositivo para conectarse a la red.
- **TokenError**: Excepción que se produce cuando se pasa por parámetro un token no válido.
- **InitSessionError**: Excepción que se produce cuando no se puede inicializar session. Lo normal es que ocurra porque no se llamo al `SdkCore` al ppio de llamar a cualquier otro componente.
- **ComponentControllerError**: Excepción que se produce cuando no se puede instanciar el componente.

### 5.3 errorMessage: 
Indica un mensaje de error adicional en caso de ser necesario. Es un valor opcional.