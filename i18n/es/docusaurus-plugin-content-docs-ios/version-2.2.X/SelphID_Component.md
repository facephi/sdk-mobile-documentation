# SelphID Component

## 0. Requisitos base de SDK Mobile

**SDK Mobile** es un conjunto de librerías (**Componentes**) que ofrece una serie de funcionalidades y servicios, permitiendo a su vez su integración en una aplicación Mobile de forma sencilla y totalmente escalable. Dependiendo del caso de uso que se requiera, se deberá realizar la instalación de unos determinados componentes. Su alto nivel de modularidad permite que, en un futuro, se puedan añadir otros componentes nuevos sin afectar en absoluto a los ya integrados en el proyecto.

Para más información sobre la configuración base, vaya a la sección de
[Primeros Pasos](./Mobile_SDK#11-requisitos-mínimos).

---

## 1. Introducción

El Componente tratado en el documento actual recibe el nombre de **_SelphID Component_**. Éste se encarga de realizar capturas de documentos y la posterior extracción y análisis de los datos obtenidos de ellos. Sus principales funcionalidad son las siguientes:

- Gestión interna de cámaras.
- Gestión de permisos.
- Asistente en los procesos de captura de la parte frontal y trasera del documento.
- Extracción de la información contenida en el documento.
- Obtención de las imágenes del dorso y reverso del documento, así como otras imagénes incluidas en el documento: cara del usuario, firma del usuario,...
- Alto nivel de configuración: diferentes países, idiomas, tipos de documentos...

### 1.1 Requisitos mínimos

La versión mínima de la SDK de iOS requerida es la siguiente:

Versión mínima de iOS: **13**

---

## 2. Integración del componente

<div class="warning">
<span class="warning">:warning:</span>
Antes de integrar este componente se recomienda leer la documentación de [Integración Inicial](./Mobile_SDK#2-integración-inicial) y seguir las instrucciones indicadas en dicho documento.
</div>

En esta sección se explicará paso a paso cómo integrar el componente
actual en un proyecto ya existente.

### 2.1. Dependencias requeridas para la integración

Para evitar conflictos y problemas de compatibilidad, en caso de querer instalar el componente en un proyecto que contenga una versión antigua de las librerías de Facephi (Widgets), éstos deberán eliminarse por completo antes de la instalación de los componentes de la **SDKMobile**.

#### Cocoapods

- Actualmente las librerías de FacePhi se distribuyen de forma remota a través de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias **obligatorias** que deberán haberse instalado previamente (añadiéndolas en el fichero Podfile del proyecto) son:

```
  pod 'FPHISDKMainComponent', '~> 2.2.0'
```

- Para instalar el componente de SelphID deberá incluirse la siguiente entrada en el Podfile de la aplicación:

```
  pod 'FPHISDKSelphIDComponent', '~> 2.2.0'
```

- Una vez instaladas las dependencias, se podrá hacer uso de las diferentes funcionalidades del componente.

- En caso de realizar el desarrollo con **XCode15** se deberá incluir un script de post-instalacion:

![Image](/ios/fix_ldClassic.png)

#### SPM

- Las dependencias obligatorias que deberán haberse instalado previamente son:

```
//HTTPS
https://github.com/facephi-clienters/SDK-SdkPackage-SPM.git
//SSH
git@github.com:facephi-clienters/SDK-SdkPackage-SPM.git
```

- Para instalar el componente de NFC deberá incluirse en los módulos del proyecto:

```
//HTTPS
https://github.com/facephi-clienters/SDK-SelphidComponentLight.git
//SSH
git@github.com:facephi-clienters/SDK-SelphidComponentLight.git
```

### 2.2 Permisos y configuraciones

En la aplicación cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero info.plist

Es necesario permitir el uso de la cámara (Privacy - Camera Usage Description)

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la información asociada correctamente en la plataforma deberá ejecutarse previamente el comando **newOperation**.

<div class="note">
<span class="note">:information_source:</span>
Este comando debe haberse ejecutado **anteriormente al lanzamiento del componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda consultar la documentación de [Iniciar nueva operación](./Mobile_SDK#4-iniciar-nueva-operacion), en el que se detalla y explica en qué consiste este proceso.
</div>

---

## 4. Controladores disponibles

| **Controlador**   | **Descripción**                                       |
| ----------------- | ----------------------------------------------------- |
| SelphIDController | Controlador principal de reconocimiento de documentos |

---

## 5. Configuración del componente

Para configurar el componente actual, una vez inicializado, se deberá
crear un objeto _SelphIDConfigurationData_ y pasarlo como parámetro al
SDKController durante el lanzamiento del componente.

En el siguiente apartado se mostrarán los campos que forman parte de
esta clase y para qué se utiliza cada uno de ellos.

### 5.1 Class SelphIDConfigurationData

#### 5.1.1 Configuración Básica

##### ResourcesPath

Es el nombre del bundle de recursos que contiene todos los elementos de la interfaz

##### WizardMode

Indica si el widget queda configurado para realizar la captura de ambas partes (frontal y trasera) del documento una a continuación de la otra. En este modo el widget solo se lanzaría una vez y al terminar de capturar el front, continuaría seguidamente con el back.

##### ShowResultAfterCapture

Indica si mostrar o no una pantalla con la imagen capturada del documento después del proceso de análisis. En esta pantalla se le da al usuario la posibilidad de repetir el proceso de captura si la imagen que se obtuvo del documento no fuera correcta.

##### ShowTutorial

Esta propiedad permite mostrar el tutorial previo al proceso de captura.

##### ScanMode

Indica el modo de escaneo OCR de los documentos. Dependiendo de la elección, se escanearán y buscarán varios tipos de documentos o uno en concreto. Este modo puede ser de tres tipos:

- **SelphIDScanMode.MODE_GENERIC:** El modo genérico que permite escanear cualquier tipo de documento independiente del país o el tipo de documento. El resultado de este modo no es tan preciso como los siguientes pero permite escanear varios documentos estándar.

- **SelphIDScanMode.MODE_SPECIFIC:** El modo de búsqueda permitirá utilizar una whitelist y blacklist, y buscará en los documentos que cumplan dichas condiciones. Estas condiciones se indican en la variable "specificData". De este modo se permite realizar la búsqueda acotando el número de plantillas, y haciendo que la búsqueda sea mucho más afinada que en el caso genérico.

- **SelphIDScanMode.MODE_SEARCH:** Búsqueda de un documento específico. Estas condiciones se indican en la propiedad "specificData" que se muestra en lo sucesivo.

##### SpecificData

Esta propiedad permite definir qué documentos se escanearán durante el proceso, en caso de declarar el modo de escaneo (scanMode) a SMSearch o SMSpecific.

Un ejemplo de configuración que permita escanear todos los documentos de nacionalidad española sería el siguiente:

```
// Search mode definition
conf.scanMode = SelphIDScanMode.MODE_SEARCH
conf.specificData = “ES|<ALL>” // Código ISO de España (ES)
```

##### DocumentType

Los valores permitidos son los siguientes:

- **SelphIDDocumentType.ID_CARD:** El widget queda configurado para realizar la captura de documentos de identidad.

- **SelphIDDocumentType.PASSPORT:** El widget queda configurado para realizar la captura de pasaportes.

- **SelphIDDocumentType.DRIVERS_LICENSE:** El widget queda configurado para realizar la captura de licencias de conducción.

- **SelphIDDocumentType.FOREIGN_CARD:** El widget queda configurado para realizar la captura de documentos extranjeros.

- **SelphIDDocumentType.CUSTOM:** El widget queda configurado para realizar la captura de otro tipo de documentos que no corresponden a ninguna de las categorias anteriores.

##### ShowDiagnostic

Si se le da valor true, al producirse un error o una falta de permisos, el sdk mostrará una pantalla con el error devuelto por el widget.

#### 5.1.2 Configuración avanzada

##### Debug

Al poner a true este atributo, aumentamos el número de trazas y nos muestra por pantalla técnica información del mismo.

**Una vez acabado el desarrollo debe estar a false.**

##### TutorialOnly

Esta propiedad permite mostrar **únicamente el tutorial**, sin lanzar posteriormente el proceso de captur

##### TokenImageQuality

Se indica la calidad del JPEG que se genera y luego se tokeniza, su valor por defecto y recomendada es **“0.5”**. Su resultado es meramente informativo, no se recomienda su uso para autenticar.

##### Locale

Es un String que permite cambiar la localización y el idioma del widget. Ejemplos de valores que pueden tener son los siguientes:

- “es” para español.

- “en” para inglés.

- “fr” para francés.

En definitiva, dependerá del nombre que aparezca en el fichero strings.xml del lenguaje que se desee seleccionar (`strings-es.xml`, `strings-en.xml`, `strings-fr.xml`).

En el zip de recursos, el cual se encuentra dentro de la carpeta strings, se pueden añadir los ficheros `strings-xx.xml` correspondientes a cada localización que se requiere incorporar en el widget.

##### DocumentSide

Los valores permitidos son los siguientes:

- **SelphIDDocumentSide.FRONT:** El widget queda configurado para realizar la captura de la parte frontal del documento.

- **SelphIDDocumentSide.BACK:** El widget queda configurado para realizar la captura de la parte trasera del documento.

- **SelphIDDocumentSide.ALL:** El widget queda configurado para realizar la captura de ambas partes del documento.

##### Timeout

Es un enumerado que define el timeout de la captura de un lado del documento. Tiene 3 posibles valores:

- **SelphIDTimeout.SHORT:** 15 segundos.

- **SelphIDTimeout.MEDIUM:** 20 segundos.

- **SelphIDTimeout.LONG:** 25 segundos.

##### GenerateRawImages

Esta propiedad configura el widget para devolver la imagen completa de la cámara que se utilizó para capturar el documento. Estas imágenes se devuelven en las propiedades `rawFrontDocument` y `rawBackDocument` del objeto `results respectivamente.`

##### TranslationsContent

Esta propiedad admite un xml donde se le proporciona traducciones a los mensajes que están definidos en el widget

##### ViewsContent

Esta propiedad admite un xml donde se le proporciona modificaciones en la apariencia del widget, colores, proporciones… que están definidos.

##### DocumentModels

Esta propiedad permite, mediante una cadena en formato xml, configurar modelado de los documentos que el widget va a tratar de capturar. La definición de este modelado se encentra, por defecto, en un .xml de modelos que se encuentra en el .zip de recursos. Con esta propiedad se permite a una aplicación actualizar, en caliente, los modelados de los documentos.

Nota: Esta propiedad no altera el contenido del archivo de recursos.

#### 5.1.3 Otros parametros

##### VideoFilename

Establece la ruta absoluta del nombre del archivo en el que se grabará un video del proceso de captura. La aplicación es la responsable de solicitar los permisos necesarios al teléfono en caso de que esa ruta requiera de permisos adicionales. El widget, por defecto, no realizará ningún proceso de grabación a menos que se especifique una ruta de archivo mediante este método.

##### TokenPreviousCaptureData

Cuando la captura del documento se realiza en 2 llamadas, esta propiedad permite pasar un diccionario con la información de la captura previa. De esta manera el widget puede combinar los resultados de ambas lecturas de una manera inteligente y así devolver la información combinada de ambas capturas. También permite al widget calcular un grado de similitud de los datos de ambas caras.

En el caso que la captura de ambas caras del documento se realice en una única llamada esto no es necesario ya que el widget internamente hace este proceso.

##### vibrationEnabled

Si se le da valor true, se activa la vibración en errores y si la respuesta del widget es OK

## 6. Uso del componente

Una vez iniciado el componente y creada una nueva operación (**Apartado 3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, y **trackeando los eventos** internos al servidor de _tracking_:

```java
let controller = SelphIDController(data: selphIDConfigurationData, output: output, viewController: viewController)
SDKController.shared.launch(controller: controller)
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
let controller = SelphIDController(data: selphIDConfigurationData, output: output, viewController: viewController)
SDKController.shared.launchMethod(controller: controller)
```

El método **launch** debe usarse **por defecto**. Este método permite
utilizar **_tracking_** en caso de estar su componente activado, y no lo
usará cuando esté desactivado (o no se encuentre el componente
instalado).

Por el contrario, el método **launchMethod** cubre un caso especial, en
el cual el integrador tiene instalado y activado el tracking, pero en un
flujo determinado dentro de la aplicación no desea trackear información.
En ese caso se usa este método para evitar que se envíe esa información
a la plataforma.

---

## 7. Recepción del resultado.

Los controllers devolverán la información necesaria en formato SdkResult. Más información en la sección de [Retorno de Resultado](./Mobile_SDK#6-result-return).

### 7.1. Recepción de errores

_finishStatus_: Que nos indicará si la operación ha finalizado correctamente. Posibles valores:

```
FinishStatus.STATUS_OK
FinishStatus.STATUS_ERROR
```

_errorType_: Errores propios del widget.

```
case SELPHID_CANCEL_BY_USER
case SELPHID_TIMEOUT
case SELPHID_INTERNAL_ERROR
```

_data_: Tendrá los datos de respuesta de la función del componente ejecutado. En el apartado 7.2 se especifican los campos que se incluyen en este componente.

### 7.2. Recepción de ejecución correcta - data

El campo data es variable y dependerá de qué componente se ha devuelto el resultado. En el caso de este componente, los campos devueltos son los siguientes:

#### 7.2.1 rawFrontDocumentData / rawFrontDocument / frontDocument / frontDocumentData / tokenFrontDocument / tokenRawFrontDocument:

La imagen frontal del documento procesada, limpiada y recortada por los bordes y su token correspondiente.

#### 7.2.2 rawBackDocumentData / rawBackDocument / backDocument / backDocumentData / tokenBackDocument / tokenRawBackDocument:

La imagen trasera del documento procesada, limpiada y recortada por los bordes y su token asociado.

#### 7.2.3 faceImage / faceImageData / tokenFaceImage

La imagen del rostro que se ha encontrado en el documento, en caso de que exista y su token asociado.

#### 7.2.4 documentCaptured

Esta propiedad indica el modelo de documento que se ha capturado cuando se realiza una busqueda en modo SMSearch. De esta forma la aplicación puede conocer qué modelo, de entre todos los permitidos, se ha detectado.

#### 7.2.5 matchingSidesScore

Esta propiedad devuelve un cálculo de la similitud de los datos leídos entre el front y el back del documento. El cálculo se realiza comprobando la similitud entre los campos comunes leídos en ambas caras. El resultado del cálculo será un valor entre 0.0 y 1.0 para el caso de que existan campos comunes en el documento. Cuanto mayor es el valor, más similares son los datos comparados. Si el cálculo devuelve -1.0 es que el documento no contiene campos comunes o aún no se tiene información de las dos caras.

#### 7.2.6 Propiedad captureProgress

Esta propiedad devuelve el estado en el que se encontraba el proceso de captura cuando el widget terminó. Estos son los posibles valores:

```
Front_Detection_None = 0
Front_Detection_Uncertain = 1
Front_Detection_Completed = 2
Front_Document_Analyzed = 3
Back_Detection_None = 4
Back_Detection_Uncertain = 5
Back_Detection_Completed = 6
Back_Document_Analyzed = 7
```

- **0**: En la lectura del Front, el widget termino sin poder haber detectado nada. Generalmente cuando no se pone ningún documento.

- **1**: En la lectura del Front, el widget termino habiendo detectado parcialmente un documento. En este caso algunos de los elementos esperados se han conseguido detectar, pero no todos los necesarios.

- **2**: En la lectura del Front, el widget termino habiendo completado la detección de todos los elementos del documento. Si el widget acaba en este estado es porque el análisis de OCR no se ha podido completar con éxito.

- **3**: En la lectura del Front, el widget termino habiendo analizado y extraído todo el OCR del documento. Este es el estado en el que acabaría una lectura correcta del Front de un documento.

Los estados **del 4 al 7** son exactamente iguales solo que se refieren al resultado del proceso cuando se analiza el back.

#### 7.2.7 ocrResults / tokenOCR

Este diccionario contiene todos los datos detectados en el documento. Las claves de cada campo están codificadas de tal forma que la propia clave contiene información de donde se ha obtenido el valor. Así, por ejemplo, la clave Front/MRZ/DocumentNumber indica el valor del DocumentNumber que se ha leído en el Front del documento y en la región del MRZ. Estas claves dependen del documento capturado y por tanto serán diferentes entre distintos países y modelos de documento. El diccionario también contiene claves con nombres más genéricos y que no llevan información relativa a la ubicación. Estas claves contienen el dato más completo de todos los leídos para dicho campo.

Estas claves son los siguientes:

- **FirstName**: El valor asociado a esta clave contiene el nombre del usuario.

- **LastName**: El valor asociado a esta clave contiene los apellidos del usuario.

- **DateOfBirth**: El valor asociado a esta clave contiene la fecha de nacimiento detectada en el documento.

- **Gender**: El valor asociado a esta clave contiene el sexo del usuario detectado en el documento.

- **Nationality**: El valor asociado a esta clave contiene la nacionalidad del usuario detectado en el documento.

- **DocumentNumber**: El valor asociado a esta clave contiene el número de documento.

- **DateOfExpiry**: El valor asociado a esta clave contiene la fecha de expiración del documento.

- **Issuer**: El valor asociado a esta clave contiene el editor del documento.

- **DateofIssue**: El valor asociado a esta clave contiene la fecha de expedición del documento.

- **PlaceOfBirth**: El valor asociado a esta clave contiene el lugar de nacimiento del usuario.

- **Address**: El valor asociado a esta clave contiene la dirección detectada en el documento.

Adicionalmente se añaden claves del propio objeto results para hacer más fácil su búsqueda:

- **DocumentCaptured**: Valor del modelo de documento que se ha capturado según el .xml de modelos. Corresponde a la propiedad documentCaptured.

- **MatchingSidesScore**: Valor que indica la correspondencia entre las caras leídas del documento. Corresponde a la propiedad matchingSidesScore.

---

## 8. Personalizando el componente

Además de los cambios a nivel de SDK (que se explican en [Mobile SDK](./Mobile_SDK)), este componente específico permite la modificación de sus animaciones.

### 8.1 Personalizando las animaciones

El componente de SelphID utiliza las siguientes animaciones:

```
    enum Animation: String, CaseIterable {
        case selphid_anim_tip
        case selphid_anim_tip_id_male
        case selphid_anim_tip_id_female
        case selphid_anim_tip_pass_male
        case selphid_anim_tip_pass_female
        case selphid_anim_tip_driver_male
        case selphid_anim_tip_driver_female
        case selphid_anim_tip_custom
        case selphid_anim_tuto_id_1
        case selphid_anim_tuto_id_2
        case selphid_anim_tuto_id_3
        case selphid_anim_tuto_pass_1
        case selphid_anim_tuto_pass_2
        case selphid_anim_tuto_pass_3
        case selphid_anim_tuto_driving_1
        case selphid_anim_tuto_driving_2
        case selphid_anim_tuto_driving_3
        case selphid_anim_tuto_custom_1
        case selphid_anim_tuto_custom_2
        case selphid_anim_tuto_custom_3
}
```

Las animaciones configuradas por defecto pueden sobreescribirse creando un archivo en el proyecto con el mismo nombre y extensión (.json en este caso).

También pueden configurarse de forma dinamica en tiempo de ejecución. Para hacer esto, es necesario crear una clase "tema custom" (custom "theme") que implemente la interfaz **ThemeSelphIDProtocol**.

```
import selphidComponent
class CustomThemeSelphID: ThemeSelphIDProtocol {
  var name: String = "custom"

  public var customBoolean: Bool = true
  var animations: [selphidComponent.R.Animation : String] {
    [.selphid_anim_tuto_id_1: "animation_step_id_card_first",
    .selphid_anim_tuto_id_2: "animation_step_id_card_second",
    .selphid_anim_tuto_id_3: "animation_step_id_card_third"
    ]
  }
}
```

Para que la personalización se aplique al componente, se debe ejecutar **ThemeSelphIDManager.setup(theme: CustomThemeSelphID())** antes de lanzar el selphidController.

```
let selphidController = SelphIDController(data: SelphIDConfigurationData(), output: output, viewController: viewController)
ThemeSelphIDManager.setup(theme: CustomThemeSelphID())
SDKController.shared.launch(controller: selphidController)
```

##### 8.1.1 Pantalla de información principal

- **_selphid_anim_tip_**
  Esta animación se muestra si el **documentType** configurado es _FOREIGN_CARD_ or _CREDIT_CARD_.

```
var configSelphID = SelphIDConfigurationData()
...
configSelphi.documentType = SelphIDDocumentType.FOREIGN_CARD
```

![MobileCapture](/ios/SelphID/tips-001.png)

- **_selphid_anim_tip_id_male & selphid_anim_tip_id_female_**
  Ambas animaciones muestran el mismo proceso. La diferencia es que en una de ellas el proceso lo realiza un hombre, y en la otra una mujer. Por defecto se utiliza la animación _male_.
  Esta animación se muestra si el **documentType** configurado es _ID_CARD_.

```
var configSelphID = SelphIDConfigurationData()
...
configSelphi.documentType = SelphIDDocumentType.ID_CARD
```

- **_selphid_anim_tip_pass_male & selphid_anim_tip_pass_female_**
  Ambas animaciones muestran el mismo proceso. La diferencia es que en una de ellas el proceso lo realiza un hombre, y en la otra una mujer. Por defecto se utiliza la animación _male_.
  Esta animación se muestra si el **documentType** configurado es _PASSPORT_.

```
var configSelphID = SelphIDConfigurationData()
...
configSelphi.documentType = SelphIDDocumentType.PASSPORT
```

- **_selphid_anim_tip_driver_male & selphid_anim_tip_driver_female_**
  Ambas animaciones muestran el mismo proceso. La diferencia es que en una de ellas el proceso lo realiza un hombre, y en la otra una mujer. Por defecto se utiliza la animación _male_.
  Esta animación se muestra si el **documentType** configurado es _DRIVERS_LICENSE_.

```
var configSelphID = SelphIDConfigurationData()
...
configSelphi.documentType = SelphIDDocumentType.DRIVERS_LICENSE
```

- **_selphid_anim_tip_custom_**
  Ambas animaciones muestran el mismo proceso. La diferencia es que en una de ellas el proceso lo realiza un hombre, y en la otra una mujer. Por defecto se utiliza la animación _male_.
  Esta animación se muestra si el **documentType** configurado es _CUSTOM_.

```
var configSelphID = SelphIDConfigurationData()
...
configSelphi.documentType = SelphIDDocumentType.CUSTOM
```

##### 8.1.2 Más Información - Pantalla de tutorial por pasos

La vista que contiene las animaciones es accesible desde la vista 8.1.1. Es necesario clickar en el botón de "Más información" o el icono "i" de la parte superior.

- **_selphid_anim_tuto_id_1_**
  Esta animación se muestra si el documentType es _ID_CARD_, _FOREIGN_CARD_ or _CREDIT_CARD_. Se trata del primer paso del tutorial.

![MobileCapture](/ios/SelphID/tutorial-001.png)

- **_selphid_anim_tuto_id_2_**
  Esta animación se muestra si el documentType es _ID_CARD_, _FOREIGN_CARD_ or _CREDIT_CARD_. Se trata del segundo paso del tutorial.

![MobileCapture](/ios/SelphID/tutorial-002.png)

- **_selphid_anim_tuto_id_3_**
  Esta animación se muestra si el documentType es _ID_CARD_, _FOREIGN_CARD_ or _CREDIT_CARD_. Se trata del tercer y último paso del tutorial.

![MobileCapture](/ios/SelphID/tutorial-003.png)

- **_selphid_anim_tuto_pass_1_**
  Esta animación se muestra si el documentType es _PASSPORT_. Se trata del primer paso del tutorial.

- **_selphid_anim_tuto_pass_2_**
  Esta animación se muestra si el documentType es _PASSPORT_. Se trata del segundo paso del tutorial.

- **_selphid_anim_tuto_pass_3_**
  Esta animación se muestra si el documentType es _PASSPORT_. Se trata del tercer y último paso del tutorial.

- **_selphid_anim_tuto_driving_1_**
  Esta animación se muestra si el documentType es _DRIVERS_LICENSE_. Se trata del primer paso del tutorial.

- **_selphid_anim_tuto_driving_2_**
  Esta animación se muestra si el documentType es _DRIVERS_LICENSE_. Se trata del segundo paso del tutorial.

- **_selphid_anim_tuto_driving_3_**
  Esta animación se muestra si el documentType es _DRIVERS_LICENSE_. Se trata del tercer y último paso del tutorial.

- **_selphid_anim_tuto_custom_1_**
  Esta animación se muestra si el documentType es _CUSTOM_. Se trata del primer paso del tutorial.

- **_selphid_anim_tuto_custom_2_**
  Esta animación se muestra si el documentType es _CUSTOM_. Se trata del segundo paso del tutorial.

- **_selphid_anim_tuto_custom_3_**
  Esta animación se muestra si el documentType es _CUSTOM_. Se trata del tercer y último paso del tutorial.

### 8.2 Colores, imágenes, tamaños y fuentes

Al contrario que con las animaciones, la personalización de estos elementos se hace desde el [Componente de Status](./Status_Component).

### 8.3 Textos

Los textos pueden ser customizados sobreescribiendo el valor de las siguientes claves en un **Localizable.strings**. 
Las claves que contienen el sufijo **_\_alt_** son los literales utilizados en las etiquetas de accesibilidad necesarias para la funcionalidad de **_voice over_**.

```
"selphid_component_tutorial_1_desc"="Look for a background with good contrast.";
"selphid_component_tutorial_2_desc"="Place the document inside the box.";
"selphid_component_tutorial_3_desc"="Avoid glare that makes the document difficult to read.";
"selphid_component_tip_desc"="**Focus** your document **inside the box.** The photo will be taken automatically.";
"selphid_component_tip_title"="Document photo";
"selphid_component_tip_button_message"="START";
"selphid_component_tip_return_message"="RETURN";
"selphid_component_tip_id_alt" = "Animation of a mobile phone taking a photo of an identity document. The document appears horizontally, and the mobile phone appears vertically. A box appears on the mobile phone's screen. When the document fits inside the box, the app takes a photo.";
"selphid_component_tip_passport_alt" = "Animation of a mobile phone taking a photo of a passport. The document appears horizontally, open to the page where the photo appears. The mobile phone in a vertical position. A box appears on the mobile screen. When the page of the passport fits inside the box, the application takes a photo.";
"selphid_component_tip_driving_alt" = "Animation of a mobile phone taking a photo of a driving license. The document appears horizontally, and the mobile phone vertically. A box appears on the mobile screen. When the document fits inside the box, the app takes a photo.";
"selphid_component_tutorial_1_id_alt"="A white ID document is shown on a white background. The edges of the document are not clearly visible. Through an animation, the background changes color.";
"selphid_component_tutorial_2_id_alt"="A mobile phone takes a photo of an identity document. The document appears horizontally, and the mobile phone appears vertically. A box appears on the mobile phone's screen. When the document fits inside the box, the application takes a picture.";
"selphid_component_tutorial_3_id_alt"="An identity document, seen from the front. When tilted, reflections appear on the document.";
"selphid_component_tutorial_1_passport_alt"="A white passport is shown on a white background. The edges of the document are not clearly visible. Through an animation, the background changes color.";
"selphid_component_tutorial_2_passport_alt"="A mobile phone takes a photo of a passport. The document appears horizontally, and the mobile phone appears vertically. A box appears on the mobile phone's screen. When the document fits inside the box, the application takes a photo ";
"selphid_component_tutorial_3_passport_alt"="A passport, seen from the front. When tilted, reflections appear on the document.";
"selphid_component_tutorial_1_driving_alt"="A white driving license is shown on a white background. The edges of the document are not clearly visible. Through an animation, the background changes color.";
"selphid_component_tutorial_2_driving_alt"="A mobile phone takes a photo of a driving license. The document appears horizontally, and the mobile phone appears vertically. A box appears on the mobile phone's screen. When the document fits inside the box, the application does a picture.";
"selphid_component_tutorial_3_driving_alt"="A driving license, seen from the front. When tilted, reflections appear on the document.";
"selphid_component_tip_health_mad_alt"="Animation of a mobile phone taking a photo of a health card. The document appears horizontally, and the mobile phone in a vertical position. A box appears on the mobile screen. When the document fits inside the box, the application takes a photo.";
"selphid_component_tutorial_1_health_mad_alt"="A white health card is shown on a white background. The edges of the document are not clearly visible. Through an animation, the background changes color.";
"selphid_component_tutorial_2_health_mad_alt"="A mobile phone takes a photo of a health card. The document appears horizontally, and the mobile phone appears vertically. A box appears on the mobile phone's screen. When the document fits inside the box, the application makes a photo.";
"selphid_component_tutorial_3_health_mad_alt"="A health card, seen from the front. When tilted, reflections appear on the document.";
"selphid_component_tip_custom_alt" = "";
"selphid_component_tutorial_1_custom_alt" = "";
"selphid_component_tutorial_2_custom_alt" = "";
"selphid_component_tutorial_3_custom_alt" = "";
"selphid_component_timeout_title" = "Time exceeded";
"selphid_component_timeout_front_desc" = "Check that the front of the document is inside the box and the data are visible.";
"selphid_component_timeout_back_desc" = "Check that the back of the document is inside the box and the data are visible.";
"selphid_component_timeout_generic_desc" = "Check that the document is inside the box and the data is visible.";
```

### 8.4 Personalización del Widget

SelphID está dividido en dos partes, la primera es la espeicifcada en las secciones previas y contiene las pantallas de "tutorial" y "Más información". La segunda es el widget de captura con cámara.

![MobileCapture](/ios/SelphID/capture-001.png)

Este widget puede ser personalizado también, pero para hacerlo se deben modificar los recursos de SelphID.