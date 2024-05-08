# SelphID Component

## 0. Requisitos base de SDK Mobile

**SDK Mobile** es un conjunto de librerías (**Componentes**) que ofrece
una serie de funcionalidades y servicios, permitiendo a su vez su
integración en una aplicación Mobile de forma sencilla y totalmente
escalable. Dependiendo del caso de uso que se requiera, se deberá
realizar la instalación de unos determinados componentes. Su alto nivel
de modularidad permite que, en un futuro, se puedan añadir otros
componentes nuevos sin afectar en absoluto a los ya integrados en el
proyecto.

Para más información sobre la configuración base, vaya a la sección de
[Primeros Pasos](./Mobile_SDK).

---

## 1. Introducción

El _Componente_ tratado en el documento actual recibe el nombre de
**_SelphID Component_**. Éste se encarga de realizar capturas de
documentos y la posterior extracción y análisis de los datos obtenidos
de ellos. Sus principales funcionalidad son las siguientes:

- Gestión interna de cámaras.

- Gestión de permisos.

- Asistente en los procesos de captura de la parte frontal y trasera
  del documento.

- Extracción de la información contenida en el documento.

- Obtención de las imágenes del dorso y reverso del documento, así
  como otras imagénes incluidas en el documento: cara del usuario,
  firma del usuario,...

- Alto nivel de configuración: diferentes países, idiomas, tipos de
  documentos...

---

## 2. Integración del componente

Antes de integrar este componente se recomienda leer la documentación
relativa a

[Primeros Pasos](./Mobile_SDK) y seguir las instrucciones indicadas en dicho
documento.

En esta sección se explicará paso a paso cómo integrar el componente
actual en un proyecto ya existente.

### 2.1. Dependencias requeridas para la integración

Para evitar conflictos y problemas de compatibilidad, en caso de querer
instalar el componente en un proyecto que contenga una versión antigua
de las librerías de Facephi (_Widgets_), éstos deberán eliminarse por
completo antes de la instalación de los componentes de la
**_SDKMobile_**.

- Actualmente las librerías de FacePhi se distribuyen de forma remota
  a través de diferentes gestores de dependencias. Las dependencias
  **obligatorias** que deberán haberse instalado previamente:

  ```java
  implementation "com.facephi.androidsdk:selphid_component:$sdk_selphid_component_version"
  ```

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la
información asociada correctamente en la plataforma deberá ejecutarse
previamente el comando **newOperation**.

Este comando debe haberse ejecutado **anteriormente al lanzamiento del
componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda
consultar la documentación de [Primeros Pasos](./Mobile_SDK), en el que se detalla y explica en qué consiste este
proceso.

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

### 5.1. Class SelphIDConfigurationData

#### 5.1.0. _debug_

Activación del modo depuración del componente.

#### 5.1.1. _resourcesPath_

Indica el nombre de los recursos en formato zip del componente. Ejemplo:
“resources-selphid-2-0.zip“.

Este nombre irá a buscar el fichero a la ruta de _assets_.

![Image](/android/selphid_resources.png)

#### 5.1.2. _wizardMode_

Indica si el widget queda configurado para realizar la captura de ambas
partes (frontal y trasera) del documento una a continuación de la otra.
En este modo el widget solo se lanzaría una vez y al terminar de
capturar el front, continuaría seguidamente con el back.

#### 5.1.3. _showResultAfterCapture_

Indica si mostrar o no una pantalla con la imagen capturada del
documento después del proceso de análisis. En esta pantalla se le da al
usuario la posibilidad de repetir el proceso de captura si la imagen que
se obtuvo del documento no fuera correcta.

#### 5.1.4. _showTutorial_

Indica si el widget activa la pantalla de tutorial. En esta vista se
explica de forma intuitiva cómo se realiza la captura.

#### 5.1.5. _tutorialOnly_

Indica si el widget se quiere lanzar solo para mostrar el tutorial.

#### 5.1.6. _scanMode_

Indica el modo de escaneo OCR de los documentos. Dependiendo de la
elección, se escanearán y buscarán varios tipos de documentos o uno en
concreto. Este modo puede ser de tres tipos:

- **SelphIDScanMode.MODE_GENERIC**: El modo genérico que permite
  escanear cualquier tipo de documento independiente del país o el
  tipo de documento. El resultado de este modo no es tan preciso como
  los siguientes pero permite escanear varios documentos estándar.

- **SelphIDScanMode.MODE_SEARCH**: El modo de búsqueda permitirá
  utilizar una whitelist y blacklist, y buscará en los documentos que
  cumplan dichas condiciones. Estas condiciones se indican en la
  variable "specificData". De este modo se permite realizar la
  búsqueda acotando el número de plantillas, y haciendo que la
  búsqueda sea mucho más afinada que en el caso genérico.

- **SelphIDScanMode.MODE_SPECIFIC**: Búsqueda de un documento
  específico. Estas condiciones se indican en la propiedad
  "specificData" que se muestra en lo sucesivo.

#### 5.1.7 _specificData_

Esta propiedad permite definir qué documentos se escanearán durante el
proceso, en caso de declarar el modo de escaneo (scanMode) a
**MODE_SEARCH** o **MODE_SPECIFIC**.

Un ejemplo de configuración que permita escanear todos los documentos de
nacionalidad española sería el siguiente:

```java
val selphIDConfiguration = SelphIDConfigurationData(
    scanMode = SelphIDScanMode.MODE_SEARCH,
    specificData = "ES|<ALL>",  // Código ISO de España (ES)
)
```

#### 5.1.8 _locale_

Es un string que permite cambiar la localización y el idioma del widget.
Ejemplos de valores que pueden tener son los siguientes:

- ““ para el de sistema

- “es” para español.

- “en” para inglés.

- “fr” para francés.

En definitiva, dependerá del nombre que aparezca en el fichero
`strings.xml` del lenguaje que se desee seleccionar (`strings-es.xml`,
`strings-en.xml`, `strings-fr.xml`).

En el zip de recursos, el cual se encuentra dentro de la carpeta
strings, se pueden añadir los ficheros `strings-xx.xml` correspondientes
a cada localización que se requiere incorporar en el widget.

#### 5.1.9 _fullscreen_

Indica si la vista va a tener prioridad para mostrarse en pantalla
completa, si el sistema lo permite.

#### 5.1.9 _tokenImageQuality_

Indica la cantidad de calidad que se quiere recibir en las imágenes
tokenizadas. Valor entre 0 y 1.

#### 5.1.10. _documentType_

Los valores permitidos son los siguientes:

- **SelphIDDocumentType.ID_CARD**: El widget queda configurado para
  realizar la captura de documentos de identidad.

- **SelphIDDocumentType.PASSPORT**: El widget queda configurado para
  realizar la captura de pasaportes.

- **SelphIDDocumentType.DRIVERS_LICENSE**: El widget queda configurado
  para realizar la captura de licencias de conducción.

- **SelphIDDocumentType.FOREIGN_CARD**: El widget queda configurado
  para realizar la captura de documentos extranjeros.

- **SelphIDDocumentType.CREDIT_CARD**: El widget queda configurado
  para realizar la captura de tarjetas de crédito.

- **SelphIDDocumentType.CUSTOM**: El widget queda configurado para
  realizar la captura de otro tipo de documentos que no corresponden a
  ninguna de las categorías anteriores.

#### 5.1.11 _documentSide_

Los valores permitidos son los siguientes:

- **SelphIDDocumentSide.FRONT**: El widget queda configurado para
  realizar la captura de la parte frontal del documento.

- **SelphIDDocumentSide.BACK**: El widget queda configurado para
  realizar la captura de la parte trasera del documento.

#### 5.1.12 _timeout_

Es un enumerado que define el timeout de la captura de un lado del
documento. Tiene 3 posibles valores:

- SelphIDTimeout.SHORT: 15 segundos.

- SelphIDTimeout.MEDIUM: 20 segundos.

- SelphIDTimeout.LONG: 25 segundos.

#### 5.1.13 _videoFilename_

Establece la ruta absoluta del nombre del archivo en el que se grabará
un video del proceso de captura. La aplicación es la responsable de
solicitar los permisos necesarios al teléfono en caso de que esa ruta
requiera de permisos adicionales. El widget, por defecto, no realizará
ningún proceso de grabación a menos que se especifique una ruta de
archivo mediante este método.

#### 5.1.14 _DocumentModels_

Esta propiedad permite, mediante una cadena en formato xml, configurar
modelado de los documentos que el widget va a tratar de capturar. La
definición de este modelado se encentra, por defecto, en un .xml de
modelos que se encuentra en el .zip de recursos. Con esta propiedad se
permite a una aplicación actualizar, en caliente, los modelados de los
documentos.

Nota: Esta propiedad no altera el contenido del archivo de recursos.

#### 5.1.15 _generateRawImages_

Esta propiedad configura el widget para devolver la imagen completa de
la cámara que se utilizó para capturar el documento. Estas imágenes se
devuelven en las propiedades `rawFrontDocument` y `rawBackDocument` del
objeto `results` respectivamente.

#### 5.1.16 tokenPreviousCaptureData

Cuando la captura del documento se realiza en 2 llamadas, esta propiedad
permite pasar un diccionario con la información de la captura previa. De
esta manera el widget puede combinar los resultados de ambas lecturas de
una manera inteligente y así devolver la información combinada de ambas
capturas. También permite al widget calcular un grado de similitud de
los datos de ambas caras.

En el caso que la captura de ambas caras del documento se realice en una
única llamada esto no es necesario ya que el widget internamente hace
este proceso.

#### 5.1.17 translationsContent

Esta propiedad avanzada permite, mediante una cadena en formato xml,
configurar la traducción de los literales que se muestran durante el
proceso.

Nota: Esta propiedad no altera el contenido del archivo de recursos.

#### 5.1.18 viewsContent

Esta propiedad avanzada permite, mediante una cadena en formato xml,
configurar las vistas del widget.

Nota: Esta propiedad no altera el contenido del archivo de recursos.

#### 5.1.19. showDiagnostic

Mostrar pantallas de diagnóstico al final del proceso

---

## 6. Uso del componente

Una vez iniciado el componente y creada una nueva operación (**apartado
3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero sí se trackearán los eventos
  internos al servidor de _tracking_:

```java
val result = SDKController.launch(
    SelphIDController(SelphIDConfiguration(..))
)
when (result) {
    is SdkResult.Error -> Napier.d("SelphID: KO - ${result.error.name}")
    is SdkResult.Success -> result.data
}
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
val result = SDKController.launchMethod(
    SelphIDController(SelphIDConfiguration(..))
)
when (result) {
    is SdkResult.Error -> Napier.d("SelphID: KO - ${result.error.name}")
    is SdkResult.Success -> result.data
}
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

## 7. Recepción del resultado

Los controllers devolverán la información necesaria en formato
SdkResult. Más información en la sección de <a
  href="Mobile_SDK#6-retorno-de-resultado"
  rel="nofollow">6. Retorno de resultado</a> del Android Mobile SDK

### 7.1. Recepción de errores

En la parte del error, dispondremos de la clase SelphIdError.

```java
    SelphIDError.ACTIVITY_RESULT_ERROR
    SelphIDError.BAD_EXTRACTOR_CONFIGURATION_ERROR
    SelphIDError.CAMERA_PERMISSION_DENIED
    SelphIDError.CANCEL_BY_USER
    SelphIDError.CONTROL_NOT_INITIALIZATED_ERROR
    SelphIDError.EXTRACTION_LICENSE_ERROR
    SelphIDError.HARDWARE_ERROR
    is SelphIDError.INITIALIZATION_ERROR -> it.error // Para más detalles
    SelphIDError.NO_ERROR
    SelphIDError.RESOURCES_NOT_FOUND
    SelphIDError.SETTINGS_PERMISSION_ERROR
    is SelphIDError.TIMEOUT
    SelphIDError.UNEXPECTED_CAPTURE_ERROR
    SelphIDError.UNKNOWN_ERROR
```

### 7.2. Recepción de ejecución correcta - _data_

En la parte de _data_, dispondremos de la clase SelphIdResult.

El resultado devuelve las imágenes en formato **Bitmap**, es posible
convertir las imágenes a **Base64** de la siguiente manera:

`Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)`

El campo _data_ es variable y dependerá de qué componente se ha devuelto
el resultado. En el caso de este componente, los campos devueltos son
los siguientes:

#### 7.2.1 _frontDocument / tokenFrontDocument:_

La imagen frontal del documento procesada, limpiada y recortada por los
bordes y su token correspondiente.

#### 7.2.2 _backDocument / tokenBackDocument_

La imagen trasera del documento procesada, limpiada y recortada por los
bordes y su token asociado.

#### 7.2.3 _faceImage / tokenFaceImage_

La imagen del rostro que se ha encontrado en el documento, en caso de
que exista y su token asociado.

Válida para el proceso de MATCHING FACIAL.

#### 7.2.4 _documentCaptured_

Esta propiedad indica el modelo de documento que se ha capturado cuando
se realiza una busqueda en modo SMSearch. De esta forma la aplicación
puede conocer qué modelo, de entre todos los permitidos, se ha
detectado.

#### 7.2.5 _matchingSidesScore_

Esta propiedad devuelve un cálculo de la similitud de los datos leídos
entre el front y el back del documento. El cálculo se realiza
comprobando la similitud entre los campos comunes leídos en ambas caras.
El resultado del cálculo será un valor entre 0.0 y 1.0 para el caso de
que existan campos comunes en el documento. Cuanto mayor es el valor,
más similares son los datos comparados. Si el cálculo devuelve -1.0 es
que el documento no contiene campos comunes o aún no se tiene
información de las dos caras.

#### 7.2.6 _Propiedad captureProgress_

Esta propiedad devuelve el estado en el que se encontraba el proceso de
captura cuando el widget terminó. Estos son los posibles valores:

```java
Front_Detection_None = 0
Front_Detection_Uncertain = 1
Front_Detection_Completed = 2
Front_Document_Analyzed = 3
Back_Detection_None = 4
Back_Detection_Uncertain = 5
Back_Detection_Completed = 6
Back_Document_Analyzed = 7
```

- **0**: En la lectura del Front, el widget termino sin poder haber
  detectado nada. Generalmente cuando no se pone ningún documento.

- **1**: En la lectura del Front, el widget termino habiendo detectado
  parcialmente un documento. En este caso algunos de los elementos
  esperados se han conseguido detectar, pero no todos los necesarios.

- **2**: En la lectura del Front, el widget termino habiendo
  completado la detección de todos los elementos del documento. Si el
  widget acaba en este estado es porque el análisis de OCR no se ha
  podido completar con éxito.

- **3**: En la lectura del Front, el widget termino habiendo analizado
  y extraído todo el OCR del documento. Este es el estado en el que
  acabaría una lectura correcta del Front de un documento.

Los estados del **4** al **7** son exactamente iguales solo que se
refieren al resultado del proceso cuando se analiza el back.

#### 7.2.7 _ocrResults_

Este diccionario contiene todos los datos detectados en el documento.
Las claves de cada campo están codificadas de tal forma que la propia
clave contiene información de donde se ha obtenido el valor. Así, por
ejemplo, la clave `Front/MRZ/DocumentNumber` indica el valor del
DocumentNumber que se ha leído en el Front del documento y en la región
del MRZ. Estas claves dependen del documento capturado y por tanto serán
diferentes entre distintos países y modelos de documento. El diccionario
también contiene claves con nombres más genéricos y que no llevan
información relativa a la ubicación. Estas claves contienen el dato más
completo de todos los leídos para dicho campo.

Estas claves son los siguientes:

- **FirstName**: El valor asociado a esta clave contiene el nombre del
  usuario.

- **LastName**: El valor asociado a esta clave contiene los apellidos
  del usuario.

- **DateOfBirth**: El valor asociado a esta clave contiene la fecha de
  nacimiento detectada en el documento.

- **Gender**: El valor asociado a esta clave contiene el sexo del
  usuario detectado en el documento.

- **Nationality**: El valor asociado a esta clave contiene la
  nacionalidad del usuario detectado en el documento.

- **DocumentNumber**: El valor asociado a esta clave contiene el
  número de documento.

- **DateOfExpiry**: El valor asociado a esta clave contiene la fecha
  de expiración del documento.

- **Issuer**: El valor asociado a esta clave contiene el editor del
  documento.

- **DateofIssue**: El valor asociado a esta clave contiene la fecha de
  expedición del documento.

- **PlaceOfBirth**: El valor asociado a esta clave contiene el lugar
  de nacimiento del usuario.

- **Address**: El valor asociado a esta clave contiene la dirección
  detectada en el documento.

Adicionalmente se añaden claves del propio objeto results para hacer más
fácil su búsqueda:

- **DocumentCaptured**: Valor del modelo de documento que se ha
  capturado según el .xml de modelos. Corresponde a la propiedad
  documentCaptured.

- **MatchingSidesScore**: Valor que indica la correspondencia entre
  las caras leídas del documento. Corresponde a la propiedad
  matchingSidesScore.

---
