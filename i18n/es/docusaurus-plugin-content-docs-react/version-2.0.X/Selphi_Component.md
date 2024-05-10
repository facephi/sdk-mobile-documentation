# Selphi Component

## 1. Introducción
El Componente tratado en el documento actual recibe el nombre de Selphi Component. Éste se encarga de realizar la captura de un selfie del usuario y la posterior extracción de las características faciales más importantes. Sus principales funcionalidades son las siguientes:

- Gestión interna de cámaras.
- Gestión de permisos.
- Asistente en los procesos de captura de la cara del usuario.

Generación de las plantillas con las características faciales y de la imagen de la cara del usuario para el proceso de detección de vivacidad (Liveness)

### 1.1 Requisitos mínimos

La versión mínima nativa (Android y iOS) de la SDK son las siguientes:

- Versión mínima Android: **24 - JDK 11**
- Versión mínima iOS: **13**

En cuanto a la arquitectura del dispositivo móvil:

armeabi-v7, x86, arm64 y x64

### 1.2 Versión del plugin
La versión del plugin actual se puede consultar de la siguiente forma:

- Buscamos el archivo package.json en la raíz del plugin.
- En el KEY/TAG version se indica la versión.

---

## 2. Integración del componente 
<div class="note">
<span class="note">:information_source:</span>
Antes de integrar este componente se recomienda leer la documentación relativa a Core Component y seguir las instrucciones indicadas en dicho documento.
</div>

En esta sección se explicará paso a paso cómo integrar el componente actual en un proyecto ya existente. 

<div class="warning">
<span class="warning">:warning:</span>
Para esta sección, se considerarán los siguiente valores:

- **\<%APPLICATION_PATH%\>** - Path a la raíz de la aplicación (ejemplo: /folder/example)
- **\<%PLUGIN_CORE_PATH%\>** - Path a la raíz del plugin core, que es obligatorio (ejemplo: /folder/sdk-core)
- **\<%PLUGIN_SELPHI_FACE_PATH%\>** - Path a la raíz del plugin actual (ejemplo: /folder/sdk-selphi)
</div>

### 2.1. Instalación del plugin: Common
El plugin permite la ejecución en platafoma Android y iOS. En esta sección se explicaLos pasos comunes a todas instalar el plugin se deben seguir los siguientes pasos:

- Asegurarse de que React Native esté instalado.
- Acceda al **\<%APPLICATION_PATH%\>** en un terminal y ejecute:

```
yarn add @facephi/sdk-core-react-native // SOLO EJECUTAR SI EL PLUGIN NO ESTA INSTALADO. YA QUE ÉSTE COMPONENTE ERA MANDATORIO.
yarn add @facephi/sdk-selphi-react-native
```

Es importante verificar que la ruta al complemento esté correctamente definida en package.json:

```
"dependencies": {
  "@facephi/sdk-core-react-native": <% PLUGIN_CORE_PATH %>,
  "@facephi/sdk-selphi-react-native": <% PLUGIN_SELPHI_FACE_PATH %>
}
```
Después de ejecutar los pasos anteriores, puede iniciar la aplicación con el sdk/componente instalado.
Finalmente, para lanzar los proyectos, se deberá ejecutar los siguientes comandos de dos maneras:
Desde Terminal (Para Android):
```
npx react-native run-android 
ó 
npx react-native run-android --active-arch-only
```

Para iOS:
```
npx react-native run-ios
```

Desde diferentes IDE's, Los proyectos generados en las carpetas de Android e iOS se pueden abrir, compilar y depurar usando Android Studio y XCode respectivamente.

### 2.2 Instalación plugin: iOS
#### 2.2.1 Configuración del proyecto
Para la versión de iOS, a la hora de añadir nuestro plugin a la aplicación final, previamente se deben tener en cuenta los siguientes puntos:

Deshabilitar el BITCODE: Si la aplicación que va a integrar el plugin tiene activado el BITCODE dará error de compilación. Para evitar que esto suceda, el BITCODE debe estar desactivado. 
Dentro del XCODE simplemente accediendo a Build from Settings, en la sección Build Options, deberás indicar el parámetro Habilitar Bitcode como No.

Añadir los permisos de cámara: Para utilizar el componente, es necesario habilitar el permiso de la cámara en el archivo info.plist de la aplicación (incluido dentro del proyecto en la carpeta ios). Se deberá editar el archivo con un editor de texto y agregar el siguiente par clave/valor:

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

<div class="warning">
<span class="warning">:warning:</span>
Para saber más acerca de la configuración y uso de Cocoapods Artifactory, es necesario acceder al siguiente documento de Componente Core.
</div>

### 2.2.3 Establecer la versión de Swift
En Xcode, para que la aplicación y todos sus métodos funcionen correctamente, se debe establecer la versión mínima de swift a la versión 5. Los cambios se podrán realizar siguiendo estos pasos:

- Target -> Project -> Build Settings -> Swift Compiler - Language -> Swift Language Version -> Choose Swift 5.

### 2.2.4 Posibles incidencias
Si ocurren problemas de entorno o no se actualiza el plugin tras realizar nuevos cambios (por ejemplo, problemas ocurridos debido a que no se genera correctamente el bundle, o no se actualizan las librerías a las versiones adecuadas), se recomienda ejecutar la siguiente secuencia de instrucciones tras lanzar el plugin:

Abrir la carpeta ios de la aplicación en un terminal. Ejecutar el siguiente comando:

```
pod deintegrate
```

- Eliminar el Podfile.lock
- Ejecutar el siguiente comando (o abrir el proyecto con Xcode y ejecutarlo):

```
pod install --repo-update
```

### 2.3 Instalación plugin: Android
#### 2.3.1 Establecer la versión de Android SDK
En el caso de Android, la versión mínima de SDK requerida por nuestras bibliotecas nativas es 23, por lo que si la aplicación tiene un SDK mínimo definido menor que éste, deberá modificarse para evitar un error de compilación. Para ello accede al fichero build.gradle de la aplicación (ubicado en la carpeta android) y modifica el siguiente parámetro:

```
buildscript {
  ext {
    minSdkVersion = 24
  }
}
```

### 2.3.2 Permisos para geolocalización(Sólo si se usa tracking)
Debido a que el componente de Tracking tiene opciones de geolocalización, es necesario añadir los permisos para ello. En el AndroidManifest agregar los siguientes permisos:

```
<!-- Always include this permission -->
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<!-- Include only if your app benefits from precise location access. -->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

---

## 3. Configuración del componente
El componente actual contiene una serie de métodos e interfaces de Typescript incluidos dentro del archivo ***node_modules/@facephi/sdk-selphi-react-native/src/index.ts***. En este fichero se puede encontrar la API necesaria para la comunicación entre la aplicación y la funcionalidad nativa del componente. A continuación, se explica para qué sirve cada uno de los enumerados y las demás propiedades que afectan al funcionamiento del componente.

A continuación se muestra la clase **SelphiConfiguration**, que permite configurar el componente de Selphi:

```
export interface SelphiConfiguration {
  debug?: boolean;
  fullscreen?: boolean;
  cropPercent?: number;
  locale?: string;
  stabilizationMode?: boolean;
  templateRawOptimized?: boolean;
  resourcesPath?: string;
  enableGenerateTemplateRaw?: boolean;
  livenessMode?: SdkLivenessMode;
  showResultAfterCapture?: boolean;
  cameraFlashEnabled?: boolean;
  translationsContent?: string;
  viewsContent?: string;
  showTutorial?: boolean;
  videoFilename?: string;
  qrMode?: boolean;
  showDiagnostic?: boolean;
  logImages?: boolean;
  compressFormat?: SdkCompressFormat,
  jpgQuality?: number
}
```

A continuación, se comentarán todas las propiedades que se pueden definir en el objeto **SelphiConfiguration**:
<div class="note">
<span class="note">:information_source:</span>
Toda la configuración se podrá encontrar en el archivo node_modules/@facephi/sdk-selphi-react-native/src/src/index.tsx del componente.
</div>

A la hora de realizar la llamada al componente existe una serie de parámetros que se deben incluir. A continuación se comentarán brevemente.

### 3.1. resourcesPath 

**type:** *string*

Establece el nombre del archivo de recursos que utilizará el componente para su configuración gráfica. Éste archivo es personalizable y se encuentra en el complemento en la carpeta ***src/main/assets*** para **Android** y en ***ios/Frameworks*** y de la carpeta Resources para **iOS**. Su instalación es transparente para el usuario, simplemente se agregará a los proyectos de las respectivas plataformas durante la instalación del complemento. Más detalles sobre cómo funciona este paquete de recursos y cómo modificarlo se explican en ***apartado 6***.

```
resourcesPath: "fphi-selphi-widget-resources-sdk.zip",
```

```
crop: false
```

### 3.2. cropPercent

**type:** *float*

Especifica el porcentaje de ampliación del área del rostro detectado para componer la imagen que se devuelve.

```
cropPercent: 1.0
```


### 3.3. debug

**type:** *boolean*

Establece el modo de depuración del componente.

```
debug: false
```

### 3.4. livenessMode

**type:** *SdkLivenessMode*

 Establece el modo liveness del componente. Los valores posibles son:

- **NoneMode**: Indica que no se debe habilitar el modo de fotodetección en los procesos de autenticación.

- **PassiveMode**: Indica que se realiza la prueba de vida pasiva en el servidor, enviando la "BestImage" correspondiente para tal efecto



```
livenessMode: SdkSelphiEnums.SdkLivenessMode.PassiveMode
```

### 3.5. stabilizationMode

**type:** *boolean*

Propiedad que permite activar o desactivar el modo estabilizado antes del proceso de detección de rostros. En el caso de estar activado dará unas pautas para saber si está correctamente ubicado o no.

```
stabilizationMode: true
```

### 3.6. locale

**type:** *string*

Obliga al sdk a usar la configuración del idioma indicada por el parámetro locale.

Este parámetro acepta tanto un código de idioma (por ejemplo, *en*) como un código de identificación regional (por ejemplo, *en_US*). Si el archivo de recursos del componente no tiene una *configuración regional* para la configuración regional seleccionada, su configuración volverá al idioma predeterminado que es ES.

```
locale: 'ES'
```

### 3.7. fullScreen

**type:** *string*

Establece si desea que el sdk se inicie en modo de pantalla completa, ocultando la barra de estado.

```
fullscreen: true
```

### 3.8. logImages

**type:** *string*

Indica si el sdk devuelve a la aplicación las imágenes utilizadas durante la extracción o no. Cabe señalar que la devolución de imágenes puede resultar en un aumento considerable en el uso de recursos del dispositivo:

```
logImages: false
```

### 3.9. templateRawOptimized

**type:** *boolean*

Indica si el token del selfie obtenido debe estar optimizado o no.

```
templateRawOptimized: false
```

### 3.10. showDiagnostic

**type:** *boolean*

Muestra un pop-up con el diagnóstico en caso de que el proceso falle.

```
showDiagnostic: true
```

### 3.11 enableGenerateTemplateRaw

**type:** *boolean*

Parámetro opcional. Visible sólo si el parámetro *enableGenerateTemplateRaw* está activado a **true**. El componente retornará el *bestImage* encriptado y en formato *stringBase64*.

```
enableGenerateTemplateRaw: true
```


###  3.12 showResultAfterCapture

**type:** *boolean*

Indica si se debe mostrar o no la imagen capturada de la cara después del proceso. Esta pantalla le da al usuario la opción de repetir el proceso de captura si la imagen obtenida no es correcta.

```
showResultAfterCapture: false
```


###  3.13 showTutorial

**type:** *boolean*

Indica si se debe mostrar o no el tutorial antes de ejecutarse el proceso. Después de que termine el tutorial, el proceso continuará con normalidad.

```
showTutorial: true
```

###  3.14 compressFormat

**type:** *SdkCompressFormat*

Indica el formato de compresión de la imagen. Los valores posibles son:

- PNG
- JPG

```
compressFormat: "JPG“;
```   


###  3.15 jpgQuality

**type:** *number*

Si la propiedad ***compressFormat*** está configurada como **JPG**, es posible establecer la calidad de compresión de la imagen. Este parámetro se ignorará si el valor de la propiedad ***compressFormat*** es **PNG**.   


```
jpgQuality: 95
```   

###  3.16 videoFilename

**type:** *string*

<div class="warning">
<span class="warning">:warning:</span>
Esta es una **propiedad avanzada**, y en la mayoría de casos de uso no es necesario modificarla. Su uso incorrecto puede provocar un funcionamiento incorrecto del componente.
</div>

Establece la ruta absoluta del nombre del archivo en el que se grabará un video del proceso de captura. La aplicación es la responsable de solicitar los permisos necesarios al teléfono en caso de que esa ruta requiera de permisos adicionales. El componente, por defecto, no realizará ningún proceso de grabación a menos que se especifique una ruta de archivo mediante este método.

```
videoFilename: “\<videofile-path\>“;
```


###  3.17 translationsContent

**type:** *string*

<div class="warning">
<span class="warning">:warning:</span>
Esta es una **propiedad avanzada**, y en la mayoría de casos de uso no es necesario modificarla. Su uso incorrecto puede provocar un funcionamiento incorrecto del componente.
</div>

Esta propiedad permite, mediante una cadena en formato xml, configurar la localización actual del componente. La definición de este modelado se puede encontrar, por defecto, en una carpeta interna de traducciones  dentro del .zip de recursos. Con esta propiedad se permite a una aplicación actualizar y sustituir, en ejecución, la localización actual del componente.
```
translationsContent: “\<translation-content-string\>“;
```


###  3.18 viewsContent

**type:** *string*

<div class="warning">
<span class="warning">:warning:</span>
Esta es una **propiedad avanzada**, y en la mayoría de casos de uso no es necesario modificarla. Su uso incorrecto puede provocar un funcionamiento incorrecto del componente.
</div>


Esta propiedad permite, mediante una cadena en formato xml, configurar las vistas del componente actual. La definición de este modelado se puede encontrar, por defecto, en un fichero llamado **widget.xml** dentro del .zip de recursos. Con esta propiedad se permite a una aplicación actualizar y sustituir, en ejecución, el diseño de las pantallas internas del componente.
```
viewsContent: “\<views-content-string\>“;
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
const getSelphiConfiguration = () => {
    let config: SelphiConfiguration = {
      debug: false,
      fullscreen: true,
      livenessMode: SdkSelphiEnums.SdkLivenessMode.PassiveMode,
      resourcesPath: "fphi-selphi-widget-resources-sdk.zip",
      //enableGenerateTemplateRaw: true,
      logImages: true
    };
    return config;
};

const startSelphi = async () => 
{ 
    try 
    {
      console.log("Starting startSelphi...");
      clearAll();

      return await SdkMobileSelphi.selphi(getSelphiConfiguration())
      .then((result: any) => 
      {
        console.log("result", result);
        processSelphiResult(result);
      })
      .catch((error: any) => 
      {
        console.log(error);
      })
      .finally(()=> {
        console.log("End startSelphi...");
      });
    } 
    catch (error) {
      setMessage(JSON.stringify(error));
    }
};
```

---

## 5. Retorno de resultado
Como se muestra en el ejemplo anterior, el resultado se devuelve en forma de objeto JSON a través de Promises, ya sea una operación exitosa o un error:

```
return await SdkMobileSelphi.selphi(getSelphiConfiguration())
.then((result: any) => 
{
    console.log("result", result);
})
.catch((error: any) => 
{
    console.log(error);
})
.finally(()=> {
    console.log("End startSelphi...");
});
```

Independientemente de si el resultado es correcto/erróneo el resultado tendrá el siguiente formato:

```
export interface SelphiResult {
  finishStatus?: number;
  errorType?: string;
  finishStatusDescription?: string;
  errorMessage?: string;
  bestImage?: string;
  bestImageCropped?: string;
  bestImageTemplateRaw?: string;
  qrData?: string;
  templateRaw?: string;
}
```
 

El resultado será devuelto por medio de una Promise que contiene un objeto de la clase SelphiResult. A continuación se amplía información sobre esos campos. 
Se podrá encontrar en el archivo www/SdkSephiResult.js 


### 5.1 finishStatus

    - **1**: La operación fue exitosa.
    - **2**: Se ha producido un error, el cuál se indicará en el enumerado ***`errorType`*** y, opcionalmente, se mostrará un mensaje de información extra en la propiedad ***`errorMessage`***.

### 5.2 finishStatusDescription

 Devuelve una descripción global de la operación. Parámetro opcional.

### 5.3 errorMessage 
  
  Indica un mensaje de error adicional en caso de ser necesario. Es un valor opcional.

### 5.4 errorType

 Devuelve el tipo de error que se ha producido (en el caso de que haya habido uno, lo cual se indica en el parámetro `finishStatus` con el valor `Error`). Se definen en la clase `SdkErrorType`. Los valores que puede tener son los siguientes:

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
    - **errorMessage**: Indica un mensaje de error adicional en caso de ser necesario. Es un valor opcional.

### 5.5 templateRaw

Devuelve la plantilla en bruto que se genera después del proceso de extracción.

### 5.6 bestImage

 Devuelve la mejor imagen extraída del proceso de registro o autenticación. Esta imagen es la imagen con el tamaño original extraída de la cámara.

### 5.7 bestImageCropped

Devuelve una imagen recortada centrada en la cara del usuario. Esta imagen se obtiene a partir de la “bestImage”. Ésta es la imagen que se deberá utilizar como imagen característica del usuario que realizó el proceso de registro o autenticación a modo de ‘avatar’.

### 5.8 qrData

Devuelve los datos del código QR capturado.

### 5.9 bestImageTemplateRaw

Parámetro opcional. Solo visible si se setea el parámetro enableGenerateTemplateRaw en true. El componente devolverá el templateRaw en formato stringBase64.

---

## 6. Personalización de componente (Opcional)
Este componente permite la personalización de textos, imágenes, fuentes de letra y colores. La personalización se realiza mediante el archivo .zip suministrado internamente. Este zip está compuesto de un fichero llamado widget.xml que contiene la definición de todas las pantallas del componente, cada una de ellas con una serie de elementos los cuales permiten realizar la personalización. El archivo zip también contiene una carpeta con recursos gráficos y otra carpeta con las traducciones de los textos.

### 6.1. Descripción básica
#### 6.1.1. Personalización de textos
La personalización de textos se realiza editando los textos de los archivos de traducciones existentes en el .zip de recursos.

    /strings/strings.es.xml

    /strings/strings.xml

#### 6.1.2. Personalización de imágenes
Para personalizar las imágenes que usa el componente se deben añadir las imágenes en el .zip de recursos. En el zip vienen 3 carpetas:

    /resources/163dpi
    /resources/326dpi
    /resources/489dpi

Estas carpetas corresponden a las diferentes densidades de pantalla y se pueden crear tantas carpetas de densidad como se desee. En estas carpetas están las versiones de las imágenes para cada una de las resoluciones.

Es necesario añadir las imágenes en todas las carpetas, ya que una vez determinada la resolución óptima para el dispositivo, el componente sólo carga imágenes de la carpeta con la resolución elegida.

Las imágenes son referenciadas desde el archivo `widget.xml`.

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

**top**: define el color de fondo el segmento o panel superior.

**middle_top**: define el color de fondo del segmento o panel donde está situada la imagen de la cámara.

**middle_bottom**: define el color de fondo el segmento o panel situado debajo de la imagen de la cámara.

**bottom**: define el color de fondo el segmento o panel inferior.

También se pueden configurar ciertas propiedades que se usan solo en pantallas específicas. A continuación, las enumeramos haciendo referencia a las pantallas en la que son utilizadas:

**pagination_separator (RegistrationTips, FaceMovementTips)**: define el color de la separación entre el panel inferior y el panel de debajo de la cámara.

**mirror_border_color (RegistrationTips, FaceMovementTips)**: define el color del borde del círculo que rodea a la imagen de la cámara o del video de los consejos de registro. A este elemento también se le llama mirror o espejo.

**mirror_border_width (RegistrationTips, FaceMovementTips)**: define el ancho del borde del círculo que rodea a la imagen de la cámara o del video de los consejos de registro. Si no deseáramos mostrar un borde, tendríamos que asignar un valor de 0.0 a esta propiedad.

**mirror_mist_color (StartExtractor)**: define el color del círculo central en la pantalla previa a la extracción. Este color deberá tener siempre un valor de transparencia ya que debemos dejar ver la imagen de la cámara para que el usuario pueda colocarse correctamente antes de empezar con la extracción. El formato del color cuando se incluye un valor de transparencia es RGBA (El valor de alpha se indicará con el último byte).

mirror_color (Results): define el color de fondo del círculo que muestra los resultados del proceso de registro.

#### 6.2.5. Elemento BUTTON
**background**: define el color de fondo el botón

**decorator**: define el color de la sombra del botón

**foreground**: define el color de la fuente del botón en caso de que el contenido sea un texto

**content_type**: define el tipo de contenido del botón. Existen 2 tipos diferentes:

**resource_id**: Content debe contener el nombre de un archivo en el bundle de recursos

**text_id**: Content debe contener el identificador de un literal del fichero de traducciones del bundle de recursos

**content**: define el contenido del botón. Puede ser tanto una imagen como el identificador de un literal.

**align**: Define la alienación del contenido del botón, ya sea una imagen o un texto

**font**: Define el tipo de letra utilizado si el contenido del botón es un texto

**font_size**: Define el tamaño de la letra si el contenido del botón es un texto

#### 6.2.6. Elemento TEXT
Los elementos `text` se utilizan para definir el aspecto gráfico de los textos de cada una de las pantallas del componente. Estas son las propiedades que se pueden modificar:

**color**: define el color del texto.

**font**: define el tipo de fuente utilizado para mostrar el texto.

**font_size**:. define el tamaño de la fuente.

Hay que tener en cuenta que en la pantalla de resultados del registro los dos textos que definen la calidad del registro tienen forzado su color al color de la barra que indica la puntuación.

#### 6.2.7. Elemento IMAGE
value: define el nombre del archivo que contiene la imagen a mostrar.

Los elementos `image` solo tienen la propiedad que define el archivo donde se encuentra la imagen físicamente en el bundle de recursos. Las imágenes se obtienen del bundle buscando en la carpeta apropiada de acuerdo con la densidad del dispositivo.

#### 6.2.8. Elemento VIDEO
value: define el nombre del archivo que contiene el video a mostrar.

Los elementos `video` solo tienen la propiedad que define el archivo donde se encuentra el video físicamente en el bundle de recursos.