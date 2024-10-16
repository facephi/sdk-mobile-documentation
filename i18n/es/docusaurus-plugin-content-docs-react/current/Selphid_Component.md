# SelphID Component

## 1. Introducción
El Componente tratado en el documento actual recibe el nombre de SelphID Component. Éste se encarga de realizar capturas de documentos y la posterior extracción y análisis de los datos obtenidos de ellos. Sus principales funcionalidad son las siguientes:

- Gestión interna de cámaras.

- Gestión de permisos.

- Asistente en los procesos de captura de la parte frontal y trasera del documento.

- Extracción de la información contenida en el documento.

- Obtención de las imágenes del dorso y reverso del documento, así como otras imagénes incluidas en el documento: cara del usuario, firma del usuario,...

- Alto nivel de configuración: diferentes países, idiomas, tipos de documentos...

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

## 2. Integración del componente 
Antes de integrar este componente **se recomienda** leer la documentación relativa a **Core Component** y seguir las instrucciones indicadas en dicho documento.

<div class="note">
<span class="note">:information_source:</span>
En esta sección se explicará paso a paso cómo integrar el componente actual en un proyecto ya existente. 
Para esta sección, se considerarán los siguiente valores:
- **\<%APPLICATION_PATH%\>** - Path a la raíz de la aplicación (ejemplo: /folder/example)
- **\<%PLUGIN_CORE_PATH%\>** - Path a la raíz del plugin core, que es obligatorio (ejemplo: /folder/sdk-core)
- **\<%PLUGIN_SELPHID_PATH%\>** - Path a la raíz del plugin actual (ejemplo: /folder/sdk-selphid)
</div>

### 2.1. Instalación del plugin: Common
El plugin permite la ejecución en platafoma **Android y iOS**. En esta sección se explican los pasos comunes. Para instalar el plugin se deben seguir los siguientes pasos:

- Asegurarse de que React Native esté instalado.
- Acceda al **\<%APPLICATION_PATH%\>** en un terminal y ejecute:

```
yarn add @facephi/sdk-core-react-native
yarn add @facephi/sdk-selphid-react-native
```

Es importante verificar que la ruta al complemento esté correctamente definida en package.json:

```
"dependencies": {
  "@facephi/sdk-core-cordova": <% PLUGIN_CORE_PATH %>,
  "@facephi/sdk-selphid-cordova": <% PLUGIN_SELPHID_PATH %>
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
El componente actual contiene una serie de métodos e interfaces de Typescript incluidos dentro del archivo ***node_modules/@facephi/sdk-selphid-react-native/src/index.tsx***. En este fichero se puede encontrar la API necesaria para la comunicación entre la aplicación y la funcionalidad nativa del componente. A continuación, se explica para qué sirve cada uno de los enumerados y las demás propiedades que afectan al funcionamiento del componente.

A continuación se muestra la clase *SelphidConfiguration*, que permite configurar el componente de **SelphID**:

```java
 export interface SelphidConfiguration {
  debug?: boolean;
  fullScreen?: boolean;
  tokenImageQuality?: number;
  widgetTimeout?: number;
  showResultAfterCapture?: boolean;
  showTutorial?: boolean;
  tutorialOnly?: boolean;
  scanMode?: string;
  specificData?: string;
  documentType?: string;
  videoFilename?: stirng;
  locale?: string;
  documentModels?: string;
  generateRawImages?: boolean;
  translationsContent?: string;
  viewsContent?: string;
  resourcesPath?: string;
  tokenPrevCaptureData?: string;
  wizardMode?: boolean;
  documentSide?: string;
  showDiagnostic?: boolean;
  compressFormat?: SdkCompressFormat,
  imageQuality?: number,
}
```

A continuación, se comentarán todas las propiedades que se pueden definir en el objeto **SelphidConfiguration**:

<div class="note">
<span class="note">:information_source:</span>
Toda la configuración se podrá encontrar en el archivo ***src/index.tsx*** del componente.
</div>

A la hora de realizar la llamada al component existe una serie de parámetros que se deben incluir. A continuación se comentarán brevemente.

### 3.1 resourcesPath

**type:** *string*

Establece el nombre del archivo de recursos que utilizará el componente para su configuración gráfica. Éste archivo es personalizable y se encuentra en el complemento en la carpeta **src/main/assets** para ***Android*** y en **ios/Frameworks** y de la carpeta Resources para ***iOS***. Su instalación es transparente para el usuario, simplemente se agregará a los proyectos de las respectivas plataformas durante la instalación del complemento. Más detalles sobre cómo funciona este paquete de recursos y cómo modificarlo se explican en **apartado 6**.

> resourcesPath: "fphi-selphid-widget-resources-sdk.zip"

### 3.2 showResultAfterCapture

**type:** *boolean*

Indica si mostrar o no una pantalla con la imagen capturada del documento después del proceso de análisis. En esta pantalla se le da al usuario la posibilidad de repetir el proceso de captura si la imagen que se obtuvo del documento no fuera correcta.

> showResultAfterCapture: false


### 3.3 scanMode

**type:** *WidgetScanMode*

Este enumerado se define en la clase ***SdkSelphidEnum.tsx***. Indica el modo de escaneo OCR de los documentos. Dependiendo de la elección, se escanearán y buscarán varios tipos de documentos o uno en concreto. Este modo puede ser de tres tipos:

- ***SelphIDScanMode.Generic***: El modo genérico que permite escanear cualquier tipo de documento independiente del país o el tipo de documento. El resultado de este modo no es tan preciso como los siguientes pero permite escanear varios documentos estándar.
- ***SelphIDScanMode.Search***: El modo de búsqueda permitirá utilizar una whitelist y blacklist, y buscará en los documentos que cumplan dichas condiciones. Estas condiciones se indican en la variable "specificData". De este modo se permite realizar la búsqueda acotando el número de plantillas, y haciendo que la búsqueda sea mucho más afinada que en el caso genérico.
- ***SelphIDScanMode.Specific***: Búsqueda de un documento específico. Estas condiciones se indican en la propiedad "specificData" que se muestra en lo sucesivo.

```
scanMode: SdkSelphidEnums.SdkScanMode.Search;
```

### 3.4 specificData

**type:** *string*

Esta propiedad permite definir qué documentos se escanearán durante el proceso, en caso de declarar el modo de escaneo (scanMode) a GenericMode, SpecificMode o SearchMode.

Un ejemplo de configuración que permita escanear todos los documentos de nacionalidad española sería el siguiente:

> scanMode: WidgetScanMode.Search;
> specificData: “ES|\<ALL>”; // Spanish ISO code(ES)


### 3.5 fullScreen

**type:** *boolean*

Establece si se desea que el componente se arranque en modo pantalla completa, ocultando el status bar.
```
fullscreen: true;
```
### 3.6 locale

**type:** *string*

Es un string que permite cambiar la localización y el idioma del componente. Ejemplos de valores que pueden tener son los siguientes:

- “es” para español.
- “en” para inglés.
- “fr” para francés.

En definitiva, dependerá del nombre que aparezca en el fichero strings.xml del lenguaje que se desee seleccionar (strings-es.xml, strings-en.xml, strings-fr.xml).

En el zip de recursos, el cual se encuentra dentro de la carpeta strings, se pueden añadir los ficheros strings-xx.xml correspondientes a cada localización que se requiere incorporar en el componente.

> locale: "es";

### 3.7 documentType

**type:** *string*

Este enumerado se define en la clase `SdkSelphidEnums.tsx`. Especificado en el enum `SdkDocumentType`:

- ***IDCard***: Establece que se capturarán documentos de identidad o tarjetas.
- ***Passport***: Establece que se capturarán pasaportes. (Adicionamente habrá que setear el scanMode en SelphIDScanMode.Generic)
- ***DriverLicense***: Establece que se capturarán licencias de conducir.
- ***ForeignCard***: Establece que se capturarán tarjetas de identidad de Extranjeros.
- ***Custom***: Engloba documentos que no se encuentran en ninguna de las categorías anteriores.

> documentType: SdkSelphidEnums.SdkDocumentType.IDCard;


### 3.8 tokenImageQuality

**type:** *double*

Especifica la calidad de compresión del tokenFaceImage.3.9 enableImages (boolean)

Indica si el sdk devuelve a la aplicación las imágenes utilizadas durante la extracción o no. Cabe señalar que la devolución de imágenes puede resultar en un aumento considerable en el uso de recursos del dispositivo:

 tokenFaceImage: 0.9;

### 3.9 generateRawImages

**type:** *boolean*

Esta propiedad configura el componente para devolver la imagen completa de la cámara que se utilizó para capturar el documento:

- rawFrontDocument: Imagen frontal del documento sin procesar.
- rawBackDocument:  Imagen trasera del documento sin procesar.
- tokenRawFrontDocument:  Tokenizado de la imagen frontal del documento sin procesar.
- tokenRawBackDocument:  Tokenizado de la imagen trasera del documento sin procesar.

```
generateRawImages: true;
```

### 3.10 widgetTimeout

**type:** *number*

Es un enumerado que define el timeout de la captura de un lado del documento. Tiene 3 posibles valores:

- SdkTimeout.Short: 15 segundos.
- SdkTimeout.Medium: 20 segundos.
- SdkTimeout.Long: 25 segundos

### 3.11 tutorialOnly

**type:** *boolean*

Establece si se desea lanzar el componente en modo Tutorial. Esto permite mostrar el tutorial del componente previo, pero SIN realizar el proceso posterior de captura. Útil en caso de que se desee mostrar el tutorial de forma aislada.

>     **tutorialOnly**: true;


###  3.12 debug

**type:** *boolean*

Establece el modo debug del componente.

```
debug: false
```

###  3.13 showTutorial

**type:** *boolean*

Indica si se debe mostrar o no el tutorial antes de ejecutarse el proceso. Después de que termine el tutorial, el proceso continuará con normalidad.

```
showTutorial: true
```

###  3.14 wizardMode

**type:** *boolean*

Indica si el componente se configurará para capturar ambas partes del documento (frontal y dorso) una después de la otra. En este modo, el componente se lanzará sólo una vez, y capturará el dorso del documento justo después de capturar el frontal.



###  3.15 tokenPrevCaptureData

**type:** *string*

Cuando el documento se captura mediante dos pasos (para ello, ***wizardMode*** debe establecerse a *false*), esta propiedad permite inyectar un diccionario con la información de la captura previa. De este modo, el componente puede combinar el resultado de ambas lecturas de forma inteligente, y de ese modo devolver la información combinada de ambas capturas. También permite calcular el grado de similitud de los datos de ambos lados.

Si ambos lado del documento se capturan en una única llamada al componente (***wizardMode*** debe establecerse a *true*), esto sería innecesario ya que el componente realiza este proceso internamente.

> tokenPrevCaptureData: selphIDResult.tokenOCR


### 3.16. showDiagnostic

**type:** *boolean*

Muestra un popup con el diagnóstico del componente en caso de que el proceso falle.

```
showDiagnostic: true
```



###  3.17 compressFormat

**type:** *SdkCompressFormat*

Indica el formato de compresión de la imagen. Los valores posibles son:

- PNG
- JPG

>     **compressFormat**: "JPG“;


###  3.18 imageQuality

**type:** *number*

Si la propiedad ***compressFormat*** está configurada como **JPG**, es posible establecer la calidad de compresión de la imagen. Este parámetro se ignorará si el valor de la propiedad ***compressFormat*** es **PNG**.

>     **imageQuality**: 95


### 3.19 videoFilename

**type:** *string*

<div class="warning">
<span class="warning">:warning:</span>
Esta es una propiedad avanzada, y que en la mayoría de casos no es necesario modificar. Su uso incorrecto puede provocar un funcionamiento incorrecto del componente.
</div>

Establece la ruta absoluta del nombre del archivo en el que se grabará un video del proceso de captura. La aplicación es la responsable de solicitar los permisos necesarios al teléfono en caso de que esa ruta requiera de permisos adicionales. El componente, por defecto, no realizará ningún proceso de grabación a menos que se especifique una ruta de archivo mediante este método.

>     **videoFilename**: “\<videofile-path\>“;

### 3.20 documentModels

**type:** *string*

<div class="warning">
<span class="warning">:warning:</span>
Esta es una propiedad avanzada, y en la mayoría de casos de uso no es necesario modificarla. Su uso incorrecto puede provocar un funcionamiento incorrecto del componente.
</div>

Esta propiedad permite, mediante una cadena en formato xml, configurar modelado de los documentos que el componente va a tratar de capturar. La definición de este modelado se puede encontrar, por defecto, en  un .xml de modelos dentro del .zip de recursos. Con esta propiedad se permite a una aplicación actualizar y sustituir, en ejecución, los modelados de los documentos actuales del componente.

>     **documentModels**: “\<document-models-content-string\>“;

### 3.21 translationsContent

**type:** *string*

<div class="warning">
<span class="warning">:warning:</span>
Esta es una propiedad avanzada, y en la mayoría de casos de uso no es necesario modificarla. Su uso incorrecto puede provocar un funcionamiento incorrecto del componente.
</div>

Esta propiedad permite, mediante una cadena en formato xml, configurar la localización actual del componente. La definición de este modelado se puede encontrar, por defecto, en una carpeta interna de traducciones  dentro del .zip de recursos. Con esta propiedad se permite a una aplicación actualizar y sustituir, en ejecución, la localización actual del componente.

>     **translationsContent**: “\<translation-content-string\>“;

### 3.22 viewsContent

**type:** *string*

<div class="warning">
<span class="warning">:warning:</span>
Esta es una propiedad avanzada, y en la mayoría de casos de uso no es necesario modificarla.  Su uso incorrecto puede provocar un funcionamiento incorrecto del componente.
</div>

Esta propiedad permite, mediante una cadena en formato xml, configurar las vistas del componente actual. La definición de este modelado se puede encontrar, por defecto, en un fichero llamado widget.xml dentro del .zip de recursos. Con esta propiedad se permite a una aplicación actualizar y sustituir, en ejecución, el diseño de las pantallas internas del componente.

>  **viewsContent**: “\<views-content-string\>“;

---

## 4. Uso del componente

A continuación se mostrará la manera de ejecutar la funcionalidad del componente actual.

<div class="warning">
<span class="warning">:warning:</span>
Se recuerda que para lanzar un componente determinado previamente habrá que inicializar el SDK con su respectiva licencia, y después iniciar una nueva operación. Para más información consulte la documentación del Componente Core.
</div>

Una vez configurado el componente, para lanzarlo se deberá ejecutar el siguiente código:

``` java
const getSelphidConfiguration = () => {
    let config: SelphidConfiguration = {
      debug: false,
      showResultAfterCapture: true,
      showTutorial: false,
      scanMode: SdkSelphidEnums.SdkScanMode.Search,
      specificData: 'AR|<ALL>',
      documentType: SdkSelphidEnums.SdkDocumentType.IdCard,
      fullscreen: true,
      locale: '',
      resourcesPath: "fphi-selphid-widget-resources-sdk.zip",
    };
    return config;
};

const startSelphid = async () => 
{ 
    try 
    {
      console.log("Starting startSelphid...");
      clearAll();
 
      return await SdkMobileSelphid.selphid(getSelphidConfiguration())
      .then((result: any) => 
      {
        let r: SelphidResult = result;
        console.log("result parsed", r);

        console.log("result", result);
        processSelphidResult(result);
      })
      .catch((error: any) => 
      {
        console.log(error);
        setMessage(JSON.stringify(error));
        setFrontDocumentImage(null);
        setBackDocumentImage(null);
        setFaceImage(null);
        setTokenFaceImage(null);
        setOcrContent(null);
        setShowError(true);
        setTextColorMessage('#DE2222');
      })
      .finally(()=> {
        console.log("End startSelphid...");
      });
    } 
    catch (error) {
      setMessage(JSON.stringify(error));
    }
};
```

---

## 5. Retorno de resultado

Como se muestra en el ejemplo anterior, el resultado se devuelve en forma de objeto **JSON** a través de ***Promises***, ya sea una operación exitosa o un error:
```
facephi.plugins.sdkselphid.launchSelphID(config_id).then(
    (result) => onSuccessSelphIDCapture(result),
    (err) => onErrorSelphIDCapture(err)
)
.finally (() =>
{
    console.log("callSelphID finished...");
    isStartingSDK = false
});
```

Independientemente de si el resultado es correcto/erróneo el resultado tendrá el siguiente formato:

```
SdkSelphidResult {
  finishStatus: number;
  finishStatusDescription?: string;
  errorType: number;
  errorMessage?: string;
  frontDocumentImage?: string;
  backDocumentImage?: string;
  faceImage?: string;
  signatureImage?: string;
  fingerprintImage?: string;
  documentData?: string;
  tokenFrontDocumentImage?: string;
  tokenBackDocumentImage?: string;
  tokenFaceImage?: string;
  tokenOCR?: string;
  documentCaptured?: string;
  captureProgress: number;
  matchingSidesScore: number;
  rawFrontDocument?: string;
  rawBackDocument?: string;
  tokenRawFrontDocument?: string;
  tokenRawBackDocument?: string;
  lastActionBeforeCapture?: string;
}
```
<div class="note">
<span class="note">:information_source:</span>
El resultado será devuelto por medio de una Promise que contiene un objeto de la clase ***SdkSelphidResult***. A continuación se amplía información sobre esos campos.
</div>

### 5.1 finishStatus

Devuelve el diagnóstico global de la operación.

- **SdkFinishStatus.Ok**: La operación fue exitosa.
- **SdkFinishStatus.Error**: Se ha producido un error, el cuál se indicará en el enumerado ***errorType*** y, opcionalmente, se mostrará un mensaje de información extra en la propiedad ***errorMessage***.


### 5.2 finishStatusDescription

Devuelve la descripción de finishStatus. Es un valor opcional.


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

### 5.5 frontDocument/tokenFrontDocument
- ***frontDocument***: La imagen frontal del documento procesada, limpiada y recortada por los bordes y su token correspondiente.
- ***tokenFrontDocument***: Contiene la misma información que frontDocument, sólo que se encuentra encriptada, tokenizada y convertida a stringBase64. Este campo podrá destokenizarse en el servicio de SelphID.

### 5.6 backDocument/tokenBackDocument
- ***backDocument***: La imagen trasera del documento procesada, limpiada y recortada por los bordes.
- ***tokenBackDocument***: Contiene la misma información que backDocument, sólo que se encuentra encriptada, tokenizada y convertida a stringBase64. Este campo podrá destokenizarse en el servicio de SelphID.

### 5.7 rawFrontDocument/tokenRawFrontDocument
- ***rawFrontDocument***: La imagen frontal del documento sin procesar, tal y como se obtiene de la cámara.
- ***tokenRawFrontDocument***: Contiene la misma información que rawFrontDocument, sólo que se encuentra encriptada y tokenizada, y convertida a stringBase64. Este campo podrá destokenizarse en el servicio de SelphID.

### 5.8 rawBackDocument/tokenRawBackDocument
- ***rawBackDocument***: La imagen trasera del documento sin procesar, tal y como se obtiene de la cámara.
- ***tokenRawBackDocument***: Contiene la misma información que rawBackDocument, sólo que se encuentra encriptada y tokenizada, y convertida a stringBase64. Este campo podrá destokenizarse en el servicio de SelphID.

### 5.9 faceImage/tokenFaceImage
- ***faceImage***: La imagen frontal del documento procesada, limpiada y recortada por los bordes.
- ***tokenFaceImage***: Contiene la misma información que faceImage, sólo que se encuentra encriptada y tokenizada, y convertida a stringBase64. Este campo podrá destokenizarse en el servicio de SelphID.

### 5.10 documentData/tokenOCR
- ***documentData***: Los datos OCR obtenidos durante la captura del documento. La información contenida en este objeto variará dependiendo del tipo de documento y del país de éste.
- ***tokenOCR***: Contiene la misma información que documentData, sólo que se encuentra encriptada y tokenizada, y convertida a stringBase64. Este campo podrá destokenizarse en el servicio de SelphID.

### 5.11 matchingSidesScore
Esta propiedad devuelve un cálculo de la similitud de los datos leídos entre el front y el back del documento. El cálculo se realiza comprobando la similitud entre los campos comunes leídos en ambas caras. El resultado del cálculo será un valor entre 0.0 y 1.0 para el caso de que existan campos comunes en el documento. Cuanto mayor es el valor, más similares son los datos comparados.

Si el cálculo devuelve -1.0 es que el documento no contiene campos comunes o aún no se tiene información de las dos caras.

### 5.12 captureProgress/timeoutStatus
Esta propiedad devuelve el estado en el que se encontraba el proceso de captura cuando el componente terminó. Estos son los posibles valores:

``` java
Front_Detection_None = 0
Front_Detection_Uncertain = 1
Front_Detection_Completed = 2
Front_Document_Analyzed = 3
Back_Detection_None = 4
Back_Detection_Uncertain = 5
Back_Detection_Completed = 6
Back_Document_Analyzed = 7
```

- 0: En la lectura del Front, el componente termino sin poder haber detectado nada. Generalmente cuando no se pone ningún - documento.
- 1: En la lectura del Front, el componente termino habiendo detectado parcialmente un documento. En este caso algunos de los elementos esperados se han conseguido detectar, pero no todos los necesarios.
- 2: En la lectura del Front, el componente termino habiendo completado la detección de todos los elementos del documento. Si el componente acaba en este estado es porque el análisis de OCR no se ha podido completar con éxito
- 3: En la lectura del Front, el componente termino habiendo analizado y extraído todo el OCR del documento. Este es el estado en el que acabaría una lectura correcta del Front de un documento.
- Los estados del **4 al 7 son exactamente iguales** solo que se refieren al resultado del proceso cuando se analiza el back.


### 5.13 documentCaptured

Devuelve el modelo o versión del documento capturado.


---

## 6. Personalización de componente (Opcional)
Este componente permite la personalización de textos, imágenes, fuentes de letra y colores. La personalización se realiza mediante el archivo .zip suministrado internamente. Este zip está compuesto de un fichero llamado widget.xml que contiene la definición de todas las pantallas del componente, cada una de ellas con una serie de elementos los cuales permiten realizar la personalización. El archivo zip también contiene una carpeta con recursos gráficos y otra carpeta con las traducciones de los textos.

### 6.1. Descripción básica
#### 6.1.1. Personalización de textos
La personalización de textos se realiza editando los textos de los archivos de traducciones existentes en el .zip de recursos.

    - /strings/strings.es.xml
    - /strings/strings.xml

#### 6.1.2. Personalización de imágenes
Para personalizar las imágenes que usa el componente se deben añadir las imágenes en el .zip de recursos. En el zip vienen 3 carpetas:

    - /resources/163dpi
    - /resources/326dpi
    - /resources/489dpi

Estas carpetas corresponden a las diferentes densidades de pantalla y se pueden crear tantas carpetas de densidad como se desee. En estas carpetas están las versiones de las imágenes para cada una de las resoluciones.

Es necesario añadir las imágenes en todas las carpetas, ya que una vez determinada la resolución óptima para el dispositivo, el componente sólo carga imágenes de la carpeta con la resolución elegida.

Las imágenes son referenciadas desde el archivo `componente.xml`.

#### 6.1.3. Personalización de colores
La personalización de los colores de los botones se realiza desde el archivo `widget.xml`. En él se puede personalizar cualquier color de cualquier elemento gráfico que aparece en el componente. Simplemente basta con modificar el color de la propiedad deseada.

#### 6.1.4. Personalización de tipo de fuente
Los archivos de tipografía deben colocarse en la carpeta `/resources/163dpi` y una vez ahí pueden ser referenciados desde el archivo `widget.xml`. Para cambiar el tipo de letra de un elemento de texto bastaría con modificar la propiedad ‘font’ y poner el nombre del archivo correspondiente.

En el siguiente apartado se ampliará la información acerca del contenido del bundle de recursos y el modo de modificar.

### 6.2. Descripción avanzada
#### 6.2.1. Widget.xml
Este fichero contiene la definición de todas las propiedades que son configurables en los procesos de autenticación y registro. Está dividido por pantallas de navegación y dentro de cada etiqueta de pantalla se encuentran todas las propiedades que pueden modificarse.

#### 6.2.2. Carpeta strings
Esta carpeta contiene un fichero `strings.xml` por cada traducción que se desee soportar. El nombre debe estar formado de la siguiente manera:

    strings.(idioma).xml

Siendo (idioma) el código del idioma. Por ejemplo, `strings.es.xml` sería la traducción en castellano, `strings.en.xml` la traducción en inglés, `strings.es_ES.xml` el español de España o `strings.es_AR.xml` el español de Argentina.

Se puede forzar el idioma o dejar que el componente lo escoja en función de la configuración del dispositivo. A la hora de decidir cuál es el idioma a aplicar se sigue el siguiente orden:

Buscar por código de localización (por ejemplo, “es_AR”).
Si no encuentra ninguna que coincida, buscaría uno para el idioma genérico (es decir, en este caso sería “es”).
Si tampoco existiese ningún resultado, entonces usaría el idioma por defecto.

A nivel de código es posible seleccionar la localización mediante la propiedad locale. Este parámetro acepta un string con el código de lenguaje que se desea utilizar (por ejemplo, “es” o “es_ES”).

#### 6.2.3. Carpeta resources
Contiene las carpetas con todos los recursos necesarios para poder modificarse, divididos en densidades. Es obligatorio generar las imágenes en todas las densidades ya que el componente espera encontrarlas en la carpeta correspondiente a la densidad del dispositivo. También se pueden crear nuevas carpetas con la densidad deseada.

#### 6.2.4. Elemento BACKGROUND
El elemento `background` se compone de 4 segmentos a los que se puede dar color independientemente:

- **top**: define el color de fondo el segmento o panel superior.
- **middle_top**: define el color de fondo del segmento o panel donde está situada la imagen de la cámara.
- **middle_bottom**: define el color de fondo el segmento o panel situado debajo de la imagen de la cámara.
- **bottom**: define el color de fondo el segmento o panel inferior.

También se pueden configurar ciertas propiedades que se usan solo en pantallas específicas. A continuación, las enumeramos haciendo referencia a las pantallas en la que son utilizadas:

pagination_separator (RegistrationTips, FaceMovementTips): define el color de la separación entre el panel inferior y el panel de debajo de la cámara.

- **mirror_border_color (RegistrationTips, FaceMovementTips)**: define el color del borde del círculo que rodea a la imagen de la cámara o del video de los consejos de registro. A este elemento también se le llama mirror o espejo.
- **mirror_border_width (RegistrationTips, FaceMovementTips)**: define el ancho del borde del círculo que rodea a la imagen de la cámara o del video de los consejos de registro. Si no deseáramos mostrar un borde, tendríamos que asignar un valor de 0.0 a esta propiedad.
- **mirror_mist_color (StartExtractor)**: define el color del círculo central en la pantalla previa a la extracción. Este color deberá tener siempre un valor de transparencia ya que debemos dejar ver la imagen de la cámara para que el usuario pueda colocarse correctamente antes de empezar con la extracción. El formato del color cuando se incluye un valor de transparencia es RGBA (El valor de alpha se indicará con el último byte).
- **mirror_color (Results)**: define el color de fondo del círculo que muestra los resultados del proceso de registro.

#### 6.2.5. Elemento BUTTON
- **background**: define el color de fondo el botón
- **decorator**: define el color de la sombra del botón
- **foreground**: define el color de la fuente del botón en caso de que el contenido sea un texto
- **content_type**: define el tipo de contenido del botón. Existen 2 tipos diferentes:
- **resource_id**: Content debe contener el nombre de un archivo en el bundle de recursos
- **text_id**: Content debe contener el identificador de un literal del fichero de traducciones del bundle de recursos
- **content**: define el contenido del botón. Puede ser tanto una imagen como el identificador de un literal.
- **align**: Define la alienación del contenido del botón, ya sea una imagen o un texto
- **font**: Define el tipo de letra utilizado si el contenido del botón es un texto
- **font_size**: Define el tamaño de la letra si el contenido del botón es un texto

#### 6.2.6. Elemento TEXT
Los elementos `text` se utilizan para definir el aspecto gráfico de los textos de cada una de las pantallas del componente. Estas son las propiedades que se pueden modificar:

- **color**: define el color del texto.
- **font**: define el tipo de fuente utilizado para mostrar el texto.
- **font_size**:. define el tamaño de la fuente.

Hay que tener en cuenta que en la pantalla de resultados del registro los dos textos que definen la calidad del registro tienen forzado su color al color de la barra que indica la puntuación.

#### 6.2.7. Elemento IMAGE
value: define el nombre del archivo que contiene la imagen a mostrar.

Los elementos `image` solo tienen la propiedad que define el archivo donde se encuentra la imagen físicamente en el bundle de recursos. Las imágenes se obtienen del bundle buscando en la carpeta apropiada de acuerdo con la densidad del dispositivo.

#### 6.2.8. Elemento VIDEO
value: define el nombre del archivo que contiene el video a mostrar.

Los elementos *`video`* solo tienen la propiedad que define el archivo donde se encuentra el video físicamente en el bundle de recursos.

