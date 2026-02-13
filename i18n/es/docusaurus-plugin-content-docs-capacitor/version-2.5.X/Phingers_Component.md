# Phingers Component

## 1. Introducción
El Componente tratado en el documento actual recibe el nombre de ***Phingers Component***. Éste se encarga de realizar la captura de las huellas de los dedos (fingerprints) del usuario y la posterior extracción de las plantillas de las huellas posteriores. Sus principales funcionalidades son las siguientes:

- Dos modos de funcionamiento: extracción de los cuatro dedos de la mano (excepto el pulgar), o extracción únicamente del pulgar.
- Gestión interna de cámara.
- Gestión de permisos.
- Detección de vivacidad incorporada.
- Asistente en los procesos de captura de las huellas.
- Generación de las plantillas con las características de las huellas, imágenes y puntuaciones.

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
- **\<%PLUGIN_PHINGERS_PATH%\>** - Path a la raíz del plugin actual (ejemplo: /folder/sdk-phingers)
</div>

### 2.1. Instalación del plugin: Common
El plugin permite la ejecución en plataforma Android y iOS. En esta sección se explica. Se deben seguir los siguientes pasos:

- Acceder a **APPLICATION_PATH** y lanzar:

``` java
npm i @facephi/sdk-core-capacitor
npm i @facephi/sdk-phingers-capacitor
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

A continuación se muestra la clase *PhingersConfiguration*, que permite configurar el componente de **Phingers**:

``` java
export interface PhingersConfiguration 
{
  reticleOrientation?: PhingersReticleOrientation;
  fingersFilter?: FingersFilter;
  showEllipses?: boolean;
  useLiveness?: boolean;
  showTutorial?: boolean;
  vibration?: boolean;
  extractionTimeout?: number;
  showDiagnostic?: boolean;
  threshold?: number;
  showPreviousTip?: boolean;
}
```

A continuación, se comentarán todas las propiedades que se pueden definir en el objeto **PhingersConfiguration**:

<div class="note">
<span class="note">:information_source:</span>
Toda la configuración se podrá encontrar en el archivo ***definitions.ts*** del componente.
</div>

A la hora de realizar la llamada al component existe una serie de parámetros que se deben incluir. A continuación se comentarán brevemente.

### 3.0 ReticleOrientation

**type:** *PhingersReticleOrientation*

Establece el modo de detección de huellas e indica qué mano se detectará durante el proceso. 
Los valores permitidos son:

- **DT_LEFT**: Enables the capture of the **four** **fingers** of the
  **left** **hand**.

- **DT_RIGHT**: Enables the capture of the **four** **fingers** of the
  **right** **hand**.

```
reticleOrientation: PhingersReticleOrientation.DT_LEFT
```

### 3.1 FingersFilter

Permite definir qué dedos se capturan durante el proceso:

**type:** *FingersFilter*

Los valores permitidos son:

- **DT_RING_FINGER**
- **DT_THUMB_FINGER**
- **DT_INDEX_FINGER**
- **DT_LITTLE_FINGER**
- **DT_MIDDLE_FINGER**
- **DT_SLAP**
- **DT_ALL_4_FINGERS_ONE_BY_ONE**
- **DT_ALL_5_FINGERS_ONE_BY_ONE**

```
fingersFilter: FingersFilter.DT_ALL_5_FINGERS_ONE_BY_ONE
```

### 3.2 ShowEllipses

**type:** *boolean*

Dibuja una elipse en la pantalla de captura sobre la huella dactilar detectada.

```
showEllipses: true,
```

### 3.3 UseLiveness

**type:** *boolean*

Habilita o deshabilita el detector de vida durante la captura de huellas dactilares. 
El valor predeterminado es **verdadero**.

```
useLiveness: true;
```

### 3.4 ShowTutorial

**type:** *boolean*

Si se establece en **true**, indica si el componente activa la pantalla del tutorial. Esta vista explica intuitivamente cómo se realiza la captura.

```
showTutorial: true;
```

### 3.5 Vibration

**type:** *boolean*

Si se establece en **verdadero**, indica si se desea retroalimentación de vibración al final del proceso.

```
vibration: false;
```

### 3.6 ExtractionTimeout

**type:** *number*

Establece el tiempo máximo que se puede realizar la lectura.
Valor expresado en milisegundos.

```
extractionTimeout: 30000;
```

### 3.8 Threshold

**type:** *float*

El parámetro configura un captureQualityThreshold, para definir un umbral de calidad para realizar la captura. 
Valor por defecto 0.9f.

```
threshold: 0.90;
```

### 3.9 ShowDiagnostic

**type:** *boolean*

Mostrar pantallas de diagnóstico al final del proceso.

```
showDiagnostic: false;
```

#### 3.10. ShowPreviousTip

**type:** *boolean*

Muestra una pantalla de pre-lanzamiento con información del proceso a realizar y un botón de inicio.

```
showPreviousTip: false;
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
launchPhingers = async (): Promise<PhingersResult> => 
{
  console.log('Launching Phingers widget...');

  return SdkPhingers.startPhingers(this.getPhingersConfiguration());
}

getPhingersConfiguration() 
{
  let config: PhingersConfiguration = {
    reticleOrientation: PhingersCaptureOrientation.LEFT,
    useLiveness: true,
  };
  return config;
}
```

---

## 5. Retorno de resultado

Como se muestra en el ejemplo anterior, el resultado se devuelve en forma de objeto **JSON** a través de ***Promises***, ya sea una operación exitosa o un error:
```
return SdkPhingers.startPhingers(this.getPhingersConfiguration());
```

Independientemente de si el resultado es correcto/erróneo el resultado tendrá el siguiente formato:

``` java
export interface PhingersResult {
  finishStatus: number;
  finishStatusDescription?: string;
  errorType: string;
  errorMessage?: string;
  processedFingers?: any;
  rawFingers?: any;
  wsq?: any;
  focusQuality?: any;
  livenessConfidence?: any;
  fullFrameImage?: any;
}
```
<div class="note">
<span class="note">:information_source:</span>
El resultado será devuelto por medio de una Promise que contiene un objeto de la clase ***PhingersResult***. A continuación se amplía información sobre esos campos.
</div>

### 5.0 finishStatus

Devuelve el diagnóstico global de la operación.

- **1**: La operación fue exitosa.
- **2**: Se ha producido un error, el cuál se indicará en el string ***errorType*** y, opcionalmente, se mostrará un mensaje de información extra en la propiedad ***errorMessage***.

### 5.1 finishStatusDescription

Devuelve la descripción de finishStatus.
- **STATUS_OK**: La operación fue exitosa.
- **STATUS_ERROR**: Se ha producido un error, el cuál se indicará en el string ***errorType*** y, opcionalmente, se mostrará un mensaje de información extra en la propiedad ***errorMessage***.

### 5.2 errorType
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

### 5.3 errorMessage 
Indica un mensaje de error adicional en caso de ser necesario. Es un valor opcional.

### 5.3 fingers

Devuelve los dedos procesados. Y sus propiedades:

- **livenessScore**
- **position**
- **quality**
- **wsq**
- **displayImage**
- **minutiaesNumber**
- **nist2Quality**
- **nistQuality**
- **template**
- **proprietaryQuality**
- **imageWidth**
- **imageHeight**

### 5.4 slapImages

Devuelve las imágenes slapImage procesadas y sus propiedades:

- **image**
- **position**
- **livenessScore**