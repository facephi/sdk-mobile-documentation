# Phingers Component

## 1. Introducción
El Componente tratado en el documento actual recibe el nombre de ***Phingers Component***. Éste se encarga de realizar la captura de las huellas de los dedos (fingerprints) del usuario y la posterior extracción de las plantillas de las huellas posteriores. Sus principales funcionalidades son las siguientes:

- Dos modos de funcionamiento: extracción de los cuatro dedos de la mano (excepto el pulgar), o extracción únicamente del pulgar.
- Gestión interna de cámara.
- Gestión de permisos.
- Detección de vivacidad incorporada.
- Asistente en los procesos de captura de las huellas.
- Generación de las plantillas con las características de las huellas, imágenes y puntuaciones.

### 1.1 Requisitos mínimos

La versión mínima nativa (Android y iOS) de la SDK son las siguientes:

-   Versión mínima Android: **24 - JDK 17**
-   Versión mínima Build Tools: **8.3.0**
-   Versión mínima Kotlin Android: **1.9.0**
-   Versión mínima iOS: **13**
-   Versión mínima ReactNative: **0.73.0**

En cuanto a la arquitectura del dispositivo móvil:

- armeabi-v7, x86, arm64 y x64

### 1.2 Versión del plugin
La versión del plugin actual se puede consultar de la siguiente forma:

Buscamos el archivo ***package.json*** en la raíz del plugin.

En el ***KEY/TAG*** version se indica la versión.

## 2. Integración del componente 
Antes de integrar este componente **se recomienda** leer la documentación relativa a **Core Component** y seguir las instrucciones indicadas en dicho documento.

<div class="note">
<span class="note">:information_source:</span>
En esta sección se explicará paso a paso cómo integrar el componente actual en un proyecto ya existente. 
Para esta sección, se considerarán los siguiente valores:
- **\<%APPLICATION_PATH%\>** - Path a la raíz de la aplicación (ejemplo: /folder/example)
- **\<%PLUGIN_CORE_PATH%\>** - Path a la raíz del plugin core, que es obligatorio (ejemplo: /folder/sdk-core)
- **\<%PLUGIN_PHINGERS_PATH%\>** - Path a la raíz del plugin actual (ejemplo: /folder/sdk-phingers)
</div>

### 2.1. Instalación del plugin: Common
El plugin permite la ejecución en platafoma **Android y iOS**. En esta sección se explican los pasos comunes. Para instalar el plugin se deben seguir los siguientes pasos:

- Asegurarse de que React Native esté instalado.
- Acceda al **\<%APPLICATION_PATH%\>** en un terminal y ejecute:

```
yarn add @facephi/sdk-core-react-native
yarn add @facephi/sdk-phingers-react-native
```

Es importante verificar que la ruta al complemento esté correctamente definida en package.json:

```
"dependencies": {
  "@facephi/sdk-core-react-native": <% PLUGIN_CORE_PATH %>,
  "@facephi/sdk-phingers-react-native": <% PLUGIN_PHINGERS_PATH %>
}
```

Después de ejecutar los pasos anteriores, puede iniciar la aplicación con el sdk/componente instalado.
Finalmente, para lanzar los proyectos, se deberá ejecutar los siguientes comandos de dos maneras:

***Desde Terminal***(Para Android):

```
npx react-native run-android 
ó 
npx react-native run-android --active-arch-only
```
Para iOS:
```
npx react-native run-ios
```

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
---

## 3. Configuración del componente
El componente actual contiene una serie de métodos e interfaces de Typescript incluidos dentro del archivo ***node_modules/@facephi/sdk-phingers-react-native/src/index.tsx***. En este fichero se puede encontrar la API necesaria para la comunicación entre la aplicación y la funcionalidad nativa del componente. A continuación, se explica para qué sirve cada uno de los enumerados y las demás propiedades que afectan al funcionamiento del componente.

A continuación se muestra la clase *PhingersConfiguration*, que permite configurar el componente de **Phingers**:

```java
export interface PhingersConfiguration 
{
  reticleOrientation: ReticleOrientation;
  returnFullFrameImage?: boolean;
  returnProcessedImage?: boolean;
  returnRawImage?: boolean;
  useFlash?: boolean;
  useLiveness?: boolean;
  showTutorial?: boolean;
  extractionTimeout?: number;
  vibration?: boolean;
  showDiagnostic?: boolean;
  threshold?: number;
}
```

A continuación, se comentarán todas las propiedades que se pueden definir en el objeto **PhingersConfiguration**:

<div class="note">
<span class="note">:information_source:</span>
Toda la configuración se podrá encontrar en el archivo ***src/index.tsx*** del componente.
</div>

A la hora de realizar la llamada al component existe una serie de parámetros que se deben incluir. A continuación se comentarán brevemente.

### 3.0 reticleOrientation

**type:** *PhingersReticleOrientation*

Establece el modo de detección de huellas dactilares e indica qué dedos deben
ser detectado durante el proceso. Los valores permitidos son:

- **LEFT**: Permite la captura de los **cuatro** **dedos** del
  **mano izquierda**.

- **RIGHT**: Permite la captura de los **cuatro** **dedos** del
  **mano derecha**.

- **THUMB**: Se activa la captura de un **pulgar**.

```
reticleOrientation: PhingersReticleOrientation.DT_LEFT;,
```

### 3.1 returnFullFrameImage

**type:** *boolean*

Especifica si se debe devolver la imagen completa de la cámara en la que se
Se han detectado dedos.

```
returnFullFrameImage: true,
```

### 3.2 returnProcessedImage

**type:** *boolean*

Si se establece en **true** devolverá en el resultado las imágenes del mismo
forma tal como han sido capturados.

```
returnProcessedImage: true;
```

### 3.3 returnRawImage

**type:** *boolean*

Si se establece en **true** devolverá en el resultado las imágenes del mismo
forma tal como han sido capturados.

```
mReturnRawImage: true;
```

### 3.4 useFlash

**type:** *boolean*

Activa o desactiva el flash de la cámara durante la captura de huellas dactilares.
proceso. El valor predeterminado está establecido en **true**.

```
useFlash: false;
```

### 3.5 useLiveness

**type:** *boolean*

Activa o desactiva el detector de vida durante la captura de huellas dactilares.
proceso. El valor predeterminado está establecido en **true**.

```
useLiveness: false;
```

### 3.6 showTutorial

**type:** *boolean*

Indica si el componente activa la pantalla del tutorial. Esta vista
Explica intuitivamente cómo se realiza la captura.

```
showTutorial: false;
```

### 3.7 vibration

**type:** *boolean*

Indica si se desea feedback de vibración al final del
proceso.

```
vibration: false;
```

### 3.8 extractionTimeout

**type:** *int*

Establece el tiempo máximo que se puede realizar la lectura.

```
extractionTimeout: false;
```

### 3.9 showDiagnostic

**type:** *boolean*

Mostrar pantallas de diagnóstico al final del proceso.

```
showDiagnostic: false;
```
### 3.10 threshold

**type:** *double*

El parámetro configura un captureQualityThreshold, para definir una calidad
umbral para realizar la captura.

```
threshold: 0.8;
```

#### 3.11. showPreviousTip

**type:** *boolean*

Muestra una pantalla de prelanzamiento con información sobre el proceso a realizar y un botón de inicio.

---

## 4. Uso del componente

A continuación se mostrará la manera de ejecutar la funcionalidad del componente actual.

<div class="warning">
<span class="warning">:warning:</span>
Se recuerda que para lanzar un componente determinado previamente habrá que inicializar el SDK con su respectiva licencia, y después iniciar una nueva operación. Para más información consulte la documentación del Componente Core.
</div>

Una vez configurado el componente, para lanzarlo se deberá ejecutar el siguiente código:

``` java
const startPhingers = async () => 
{ 
  try 
  {
    console.log("Starting startPhingers...");

    return await SdkMobilePhingers.phingers(getPhingersConfiguration())
    .then((result: PhingersResult) => 
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
      console.log("End startPhingers...");
    });
  } 
  catch (error) {
    setMessage(JSON.stringify(error));
  }
};

const getPhingersConfiguration = () => 
{
  let config: PhingersConfiguration = 
  {
    reticleOrientation: ReticleOrientation.Left,
    returnFullFrameImage: true,
    returnProcessedImage: true,
    returnRawImage: true,
    useFlash: true,
    useLiveness: true,
  };

  return config;
};
```

---

## 5. Retorno de resultado

Como se muestra en el ejemplo anterior, el resultado se devuelve en forma de objeto **JSON** a través de ***Promises***, ya sea una operación exitosa o un error:
```
return await SdkMobilePhingers.phingers(getPhingersConfiguration())
.then((result: PhingersResult) => 
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
  console.log("End startPhingers...");
});
```

Independientemente de si el resultado es correcto/erróneo el resultado tendrá el siguiente formato:

```
export interface PhingersResult 
{
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

Devuelve el diagnóstico global de la operación.

- **STATUS_OK**: La operación fue exitosa.
- **STATUS_ERROR**: Se ha producido un error, el cuál se indicará en el string ***errorType*** y, opcionalmente, se mostrará un mensaje de información extra en la propiedad ***errorMessage***.

### 5.2 errorType
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

### 5.3 errorMessage

Indica un mensaje de error adicional en caso de ser necesario. Es un valor opcional.

### 5.4 fullFrameImage

Devuelve la imagen completa capturada por la cámara. No se ha aplicado todavía ningún proceso sobre ella.

### 5.5 focusQuality

Devuelve el nivel de calidad focal. Un valor bajo puede afectar al proceso de captura.

### 5.6 livenessConfidence

Devuelve un indicador del nivel de confianza de la captura.

### 5.7 processedFingers

Devuelve la imagen de la huella digital procesada.

### 5.8 rawImages

Devuelve la imagen sin editar y sin modificar de la huella digital actual.

### 5.9 wsq

Se devuelve la captura de huellas en formato WSQ.

### 5.10 nfiqMetrics

Estas son las métricas de la captura. Actualmente el siguiente valor es
devuelto:

- nfiqMetric: Este es un valor entero, entre 1 y 5 (inclusive),
  indica la calidad de la captura de huellas dactilares, donde 1 indica
  la de mayor calidad y 5 la de peor calidad. Huellas dactilares
  con este último valor generalmente se descartan para una mayor validación.