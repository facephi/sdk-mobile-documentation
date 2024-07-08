# Voice Component

## 1. Introducción
El Componente tratado en el documento actual recibe el nombre de ***Voice Component***. Éste se encarga de realizar la captura de voz del usuario y la posterior extracción de las plantillas correspondientes. Sus principales funcionalidades son las siguientes:

- Entrada de cierto número de frases para posteriormente leer cada una en un paso.
- Gestión interna del micrófono.
- Gestión de permisos.
- Análisis de los silencios.
- Análisis del progreso.
- Asistente en los procesos de captura.
- Generación de las plantillas con las características de la voz y puntuaciones.

### 1.1 Requisitos mínimos

La versión mínima nativa (Android y iOS) de la SDK son las siguientes:

- Versión mínima Android: 24 - JDK 11
- Versión mínima iOS: 13

En cuanto a la arquitectura del dispositivo móvil:

armeabi-v7, x86, arm64 y x64

### 1.2 Versión del plugin
La versión del plugin actual se puede consultar de la siguiente forma:

Buscamos el archivo ***package.json*** en la raíz del plugin.

En el ***KEY/TAG*** version se indica la versión.

---

## 2. Integración del componente 

<div class="note">
<span class="note">:information_source:</span>
Antes de integrar este componente **se recomienda** leer la documentación relativa a **Core Component** y seguir las instrucciones indicadas en dicho documento.
</div>

En esta sección se explicará paso a paso cómo integrar el componente actual en un proyecto ya existente. 

<div class="warning">
<span class="warning">:warning:</span>
Para esta sección, se considerarán los siguiente valores:
- **\<%APPLICATION_PATH%\>** - Path a la raíz de la aplicación (ejemplo: /folder/example)
- **\<%PLUGIN_CORE_PATH%\>** - Path a la raíz del plugin core, que es obligatorio (ejemplo: /folder/sdk-core)
- **\<%PLUGIN_VOICE_PATH%\>** - Path a la raíz del plugin actual (ejemplo: /folder/sdk-voice)
</div>

### 2.1. Instalación del plugin: Common
El plugin permite la ejecución en plataforma Android y iOS. En esta sección se explica. Se deben seguir los siguientes pasos:

- Acceder a **APPLICATION_PATH** y lanzar:

``` java
npm i @facephi/sdk-core-capacitor
npm i @facephi/sdk-voice-capacitor
npm run build
npx cap sync
npx ionic capacitor build [android | ios]
```

Tras ejecutar los comandos anteriores, automáticamente se abrirá el IDE correspondiente de cada una de las plataformas (XCode para iOS, Android Studio para Android), y solo quedaría compilarlo (y depurarlo en caso de ser necesario) como si fuera un proyecto nativo estándar.


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

---

## 3. Configuración del componente
El componente actual contiene una serie de métodos e interfaces de Typescript incluidos dentro del archivo ***definitions.ts*** En este fichero se puede encontrar la API necesaria para la comunicación entre la aplicación y la funcionalidad nativa del componente. A continuación, se explica para qué sirve cada uno de los enumerados y las demás propiedades que afectan al funcionamiento del componente.

A continuación se muestra la clase *VoiceConfiguration*, que permite configurar el componente de **Voice**:

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

A continuación, se comentarán todas las propiedades que se pueden definir en el objeto **VoiceConfiguration**:

<div class="note">
<span class="note">:information_source:</span>
Toda la configuración se podrá encontrar en el archivo ***definitions.ts*** del componente.
</div>

A la hora de realizar la llamada al component existe una serie de parámetros que se deben incluir. A continuación se comentarán brevemente.

### 3.1 phrases

**type:** *string*

Frases que se tienen que decir en la app para validar la identidad.

```
phrases: 'hola mundo|hola voice component|hola Facephi',
```

### 3.2 timeout

**type:** *number*

Se setea el timeout del plugin.

```
timeout: 10000;
```

### 3.3 showTutorial

**type:** *boolean*

Indica si se desea mostrar el tutorial completo del proceso o sólo la versión simplificada.

```
showTutorial: true;
```

### 3.4 vibration

**type:** *boolean*

Indica si se desea o no habilitar la vibración del plugin.

### 3.5 showDiagnostic

**type:** *boolean*

Indica si se desea o no mostrar la pantalla de errores del plugin.

### 3.6 returnAudios

**type:** *boolean*

Indica si se desea o no retornar los audios grabados al final del proceso.

```
returnAudios: false;
```

### 3.7 returnTokenizedAudios

**type:** *boolean*

Indica si se desea o no retornar los audios tokenizados grabados al final del proceso.

```
returnTokenizedAudios: false;
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

## 5. Retorno de resultado

Como se muestra en el ejemplo anterior, el resultado se devuelve en forma de objeto **JSON** a través de ***Promises***, ya sea una operación exitosa o un error:
```
return SdkVoice.startVoice(this.getVoiceSettings());
```

Independientemente de si el resultado es correcto/erróneo el resultado tendrá el siguiente formato:

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
El resultado será devuelto por medio de una Promise que contiene un objeto de la clase ***VoiceResult***. A continuación se amplía información sobre esos campos.
</div>

### 5.1 finishStatus

Devuelve el diagnóstico global de la operación.

- **1**: La operación fue exitosa.
- **2**: Se ha producido un error, el cuál se indicará en el string ***errorType*** y, opcionalmente, se mostrará un mensaje de información extra en la propiedad ***errorMessage***.

### 5.2 finishStatusDescription

Devuelve la descripción de finishStatus.
- **STATUS_OKk**: La operación fue exitosa.
- **STATUS_ERROR**: Se ha producido un error, el cuál se indicará en el string ***errorType*** y, opcionalmente, se mostrará un mensaje de información extra en la propiedad ***errorMessage***.

### 5.3 errorType
 Devuelve el tipo de error que se ha producido (en el caso de que haya habido uno, lo cual se indica en el parámetro finishStatus con el valor Error). Los valores que puede tener son los siguientes:

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

### 5.5 audios:
Devuelve los audios grabados. Sólo si el parámetro returnAudios se estableció en verdadero.

### 5.6 tokenizedAudios
Devuelve los audios grabados tokenizados. Sólo si el parámetro returnTokenizedAudios se estableció en verdadero.