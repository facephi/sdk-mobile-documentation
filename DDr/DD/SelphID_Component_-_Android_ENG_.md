# SelphID Component - Android \[ENG\]

Este documento hace referencia la **versión 1.4.X** del componente

-   [1. Introducción](#SelphIDComponent-Android%5BENG%5D-1.Introducción)
    -   [1.1 Requisitos
        mínimos](#SelphIDComponent-Android%5BENG%5D-1.1Requisitosmínimos)
-   [2. Integración del
    componente](#SelphIDComponent-Android%5BENG%5D-2.Integracióndelcomponente)
    -   [2.1. Dependencias requeridas para la
        integración](#SelphIDComponent-Android%5BENG%5D-2.1.Dependenciasrequeridasparalaintegración)
-   [3. Iniciar nueva
    operación](#SelphIDComponent-Android%5BENG%5D-3.Iniciarnuevaoperación)
-   [4. Configuración del
    componente](#SelphIDComponent-Android%5BENG%5D-4.Configuracióndelcomponente)
    -   [4.1 Class
        SelphIDConfigurationData](#SelphIDComponent-Android%5BENG%5D-4.1ClassSelphIDConfigurationData)
        -   [4.1.1
            DocumentType](#SelphIDComponent-Android%5BENG%5D-4.1.1DocumentType)
        -   [4.1.2
            DocumentSide](#SelphIDComponent-Android%5BENG%5D-4.1.2DocumentSide)
        -   [4.1.3
            ScanMode](#SelphIDComponent-Android%5BENG%5D-4.1.3ScanMode)
        -   [4.1.4
            SpecificData](#SelphIDComponent-Android%5BENG%5D-4.1.4SpecificData)
        -   [4.1.5
            WizardMode](#SelphIDComponent-Android%5BENG%5D-4.1.5WizardMode)
        -   [4.1.6
            ShowAfterCapture](#SelphIDComponent-Android%5BENG%5D-4.1.6ShowAfterCapture)
        -   [4.1.7
            PreviousCaptureData](#SelphIDComponent-Android%5BENG%5D-4.1.7PreviousCaptureData)
        -   [4.1.8
            Locale](#SelphIDComponent-Android%5BENG%5D-4.1.8Locale)
        -   [4.1.9
            Timeout](#SelphIDComponent-Android%5BENG%5D-4.1.9Timeout)
        -   [4.1.10
            VideoFilename](#SelphIDComponent-Android%5BENG%5D-4.1.10VideoFilename)
        -   [4.1.11
            DocumentModels](#SelphIDComponent-Android%5BENG%5D-4.1.11DocumentModels)
        -   [4.1.12
            GenerateRawImages](#SelphIDComponent-Android%5BENG%5D-4.1.12GenerateRawImages)
        -   [4.1.13
            getWidgetVersion](#SelphIDComponent-Android%5BENG%5D-4.1.13getWidgetVersion)
-   [5. Uso del
    componente](#SelphIDComponent-Android%5BENG%5D-5.Usodelcomponente)
-   [6. Recepción del
    resultado](#SelphIDComponent-Android%5BENG%5D-6.Recepcióndelresultado)
    -   [6.1 Contenido del campo
        data](#SelphIDComponent-Android%5BENG%5D-6.1Contenidodelcampodata)
        -   [6.1.1 frontDocument /
            tokenFrontDocument:](#SelphIDComponent-Android%5BENG%5D-6.1.1frontDocument/tokenFrontDocument:)
        -   [6.1.2 backDocument /
            tokenBackDocument](#SelphIDComponent-Android%5BENG%5D-6.1.2backDocument/tokenBackDocument)
        -   [6.1.3 faceImage /
            tokenFaceImage](#SelphIDComponent-Android%5BENG%5D-6.1.3faceImage/tokenFaceImage)
        -   [6.1.4
            documentCaptured](#SelphIDComponent-Android%5BENG%5D-6.1.4documentCaptured)
        -   [6.1.5
            matchingSidesScore](#SelphIDComponent-Android%5BENG%5D-6.1.5matchingSidesScore)
        -   [6.1.6 Propiedad
            captureProgress](#SelphIDComponent-Android%5BENG%5D-6.1.6PropiedadcaptureProgress)
        -   [6.1.7
            ocrResults](#SelphIDComponent-Android%5BENG%5D-6.1.7ocrResults)

## 1.  Introducción

**SDK Mobile** es un conjunto de librerías (**Componentes**) que ofrece
una serie de funcionalidades y servicios, permitiendo a su vez su
integración en una aplicación Mobile de forma sencilla y totalmente
escalable. Dependiendo del caso de uso que se requiera, se deberá
realizar la instalación de unos determinados componentes. Su alto nivel
de modularidad permite que, en un futuro, se puedan añadir otros
componentes nuevos sin afectar en absoluto a los ya integrados en el
proyecto.

El *Componente* tratado en el documento actual recibe el nombre de
***SelphID Component***. Éste se encarga de realizar capturas de
documentos y la posterior extracción y análisis de los datos obtenidos
de ellos. Sus principales funcionalidad son las siguientes:

-   Gestión interna de cámaras.

-   Gestión de permisos.

-   Asistente en los procesos de captura de la parte frontal y trasera
    del documento.

-   Extracción de la información contenida en el documento.

-   Obtención de las imágenes del dorso y reverso del documento, así
    como otras imagénes incluidas en el documento: cara del usuario,
    firma del usuario,...

-   Alto nivel de configuración: diferentes países, idiomas, tipos de
    documentos...

### 1.1 Requisitos mínimos

La versión mínima de la SDK de Android requerida es la siguiente:

-   SDK mínima (minSdk): **23**

-   API Version: **33**

-   Kotlin: **1.8.0**

------------------------------------------------------------------------

## 2. Integración del componente

Antes de integrar este componente se recomienda leer la documentación
relativa a **<u>Core Component</u>** y seguir las instrucciones
indicadas en dicho documento.

En esta sección se explicará paso a paso cómo integrar el componente
actual en un proyecto ya existente.

### 2.1. Dependencias requeridas para la integración

Para evitar conflictos y problemas de compatibilidad, en caso de querer
instalar el componente en un proyecto que contenga una versión antigua
de las librerías de Facephi (*Widgets*), éstos deberán eliminarse por
completo antes de la instalación de los componentes de la
***SDKMobile***.

-   Actualmente las librerías de FacePhi se distribuyen de forma remota
    a través de diferentes gestores de dependencias. Las dependencias
    **obligatorias** que deberán haberse instalado previamente:

``` java
timber_version = '5.0.1'
core_ktx_version = '1.9.0'
appcompat_version = '1.6.1'
material_version = '1.8.0'
kotlinx_serialization_json_version = '1.3.3'
selphid_ml_version = '1.19.2'

// 3rd Parties Dependencies
implementation "androidx.core:core-ktx:$core_ktx_version"
implementation "androidx.appcompat:appcompat:$appcompat_version"
implementation "com.jakewharton.timber:timber:$timber_version"
implementation "com.google.android.material:material:$material_version"
implementation "org.jetbrains.kotlinx:kotlinx-serialization-json:$kotlinx_serialization_json_version"

// Facephi Dependencies
compileOnly "com.facephi.androidsdk:core:$versions.core"
implementation "com.facephi.selphid.android:widget-ml:$selphid_ml_version"
```

-   Una vez instaladas las dependencias necesarias, se podrá hacer uso
    de las diferentes funcionalidades del **componente** actual:

    ``` java
    implementation "com.facephi.androidsdk:selphid_component:$sdk_selphid_component_version"
    ```

     

------------------------------------------------------------------------

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la
información asociada correctamente en la plataforma deberá ejecutarse
previamente el comando **newOperation**.

Este comando debe ejecutarse **siempre**. Para saber más acerca de cómo
iniciar una nueva operación, se recomienda consultar la documentación de
**Core Component**, en el que se detalla y explica en qué consiste este
proceso.

------------------------------------------------------------------------

## 4. Configuración del componente

Para configurar el componente actual, una vez inicializado, se deberá
crear un objeto *SelphIDConfigurationData* y pasarlo como parámetro al
SDKController durante el lanzamiento del componente.

En el siguiente apartado se mostrarán los campos que forman parte de
esta clase y para qué se utiliza cada uno de ellos.

### 4.1 Class SelphIDConfigurationData

#### 4.1.1 *DocumentType*

Los valores permitidos son los siguientes:

-   **WidgetSelphIDDocumentType.DTIDCard**: El widget queda configurado
    para realizar la captura de documentos de identidad.

-   **WidgetSelphIDDocumentType.DTPassport**: El widget queda
    configurado para realizar la captura de pasaportes.

-   **WidgetSelphIDDocumentType.DTDriversLicense**: El widget queda
    configurado para realizar la captura de licencias de conducción.

-   **WidgetSelphIDDocumentType.DTForeignCard**: El widget queda
    configurado para realizar la captura de documentos extranjeros.

-   **WidgetSelphIDDocumentType.DTCreditCard**: El widget queda
    configurado para realizar la captura de tarjetas de crédito.

-   **WidgetSelphIDDocumentType.DTCustom**: El widget queda configurado
    para realizar la captura de otro tipo de documentos que no
    corresponden a ninguna de las categorias anteriores.

#### 4.1.2 *DocumentSide*

Los valores permitidos son los siguientes:

-   **WidgetSelphIDDocumentSide.DSFront**: El widget queda configurado
    para realizar la captura de la parte frontal del documento.

-   **WidgetSelphIDDocumentSide.DSBack**: El widget queda configurado
    para realizar la captura de la parte trasera del documento.

#### 4.1.3 *ScanMode*

Indica el modo de escaneo OCR de los documentos. Dependiendo de la
elección, se escanearán y buscarán varios tipos de documentos o uno en
concreto. Este modo puede ser de tres tipos:

-   **WidgetSelphIDScanMode.SMGeneric**: El modo genérico que permite
    escanear cualquier tipo de documento independiente del país o el
    tipo de documento. El resultado de este modo no es tan preciso como
    los siguientes pero permite escanear varios documentos estándar.

-   **WidgetSelphIDScanMode.SMSearch**: El modo de búsqueda permitirá
    utilizar una whitelist y blacklist, y buscará en los documentos que
    cumplan dichas condiciones. Estas condiciones se indican en la
    variable "specificData". De este modo se permite realizar la
    búsqueda acotando el número de plantillas, y haciendo que la
    búsqueda sea mucho más afinada que en el caso genérico.

-   **WidgetSelphIDScanMode.SMSpecific**: Búsqueda de un documento
    específico. Estas condiciones se indican en la propiedad
    "specificData" que se muestra en lo sucesivo.

#### 4.1.4 *SpecificData*

Esta propiedad permite definir qué documentos se escanearán durante el
proceso, en caso de declarar el modo de escaneo (scanMode) a SMSearch o
SMSpecific.

Un ejemplo de configuración que permita escanear todos los documentos de
nacionalidad española sería el siguiente:

``` java
// Search mode definition
conf.setScanMode(WidgetSelphIdScanMode.SMSearch);
conf.setSpecificData(“ES|<ALL>”); // Código ISO de España (ES)
```

#### 4.1.5 *WizardMode*

Indica si el widget queda configurado para realizar la captura de ambas
partes (frontal y trasera) del documento una a continuación de la otra.
En este modo el widget solo se lanzaría una vez y al terminar de
capturar el front, continuaría seguidamente con el back.

#### 4.1.6 *ShowAfterCapture*

Indica si mostrar o no una pantalla con la imagen capturada del
documento después del proceso de análisis. En esta pantalla se le da al
usuario la posibilidad de repetir el proceso de captura si la imagen que
se obtuvo del documento no fuera correcta.

#### 4.1.7 *PreviousCaptureData*

Cuando la captura del documento se realiza en 2 llamadas, esta propiedad
permite pasar un diccionario con la información de la captura previa. De
esta manera el widget puede combinar los resultados de ambas lecturas de
una manera inteligente y así devolver la información combinada de ambas
capturas. También permite al widget calcular un grado de similitud de
los datos de ambas caras.

En el caso que la captura de ambas caras del documento se realice en una
única llamada esto no es necesario ya que el widget internamente hace
este proceso.

#### 4.1.8 *Locale*

Es un string que permite cambiar la localización y el idioma del widget.
Ejemplos de valores que pueden tener son los siguientes:

-   “es” para español.

-   “en” para inglés.

-   “fr” para francés.

En definitiva, dependerá del nombre que aparezca en el fichero
`strings.xml` del lenguaje que se desee seleccionar (`strings-es.xml`,
`strings-en.xml`, `strings-fr.xml`).

En el zip de recursos, el cual se encuentra dentro de la carpeta
strings, se pueden añadir los ficheros `strings-xx.xml` correspondientes
a cada localización que se requiere incorporar en el widget.

#### 4.1.9 *Timeout*

Es un enumerado que define el timeout de la captura de un lado del
documento. Tiene 3 posibles valores:

-   WidgetTimeout.Short: 15 segundos.

-   WidgetTimeout.Medium: 20 segundos.

-   WidgetTimeout.Long: 25 segundos.

#### 4.1.10 *VideoFilename*

Establece la ruta absoluta del nombre del archivo en el que se grabará
un video del proceso de captura. La aplicación es la responsable de
solicitar los permisos necesarios al teléfono en caso de que esa ruta
requiera de permisos adicionales. El widget, por defecto, no realizará
ningún proceso de grabación a menos que se especifique una ruta de
archivo mediante este método.

#### 4.1.11 *DocumentModels*

Esta propiedad permite, mediante una cadena en formato xml, configurar
modelado de los documentos que el widget va a tratar de capturar. La
definición de este modelado se encentra, por defecto, en un .xml de
modelos que se encuentra en el .zip de recursos. Con esta propiedad se
permite a una aplicación actualizar, en caliente, los modelados de los
documentos.

Nota: Esta propiedad no altera el contenido del archivo de recursos.

#### 4.1.12 *GenerateRawImages*

Esta propiedad configura el widget para devolver la imagen completa de
la cámara que se utilizó para capturar el documento. Estas imágenes se
devuelven en las propiedades `rawFrontDocument` y `rawBackDocument` del
objeto `results` respectivamente.

#### 4.1.13 *getWidgetVersion*

Este método devuelve la version actual del widget en formato cadena.
Esta llamada es estática por lo que no requiere del lanzamiento del
widget para realizar esta operación.

------------------------------------------------------------------------

## 5. Uso del componente

Una vez iniciado el componente y creada una nueva operación (**apartado
3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

-   **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
    del componente con normalidad, pero **no se trackeará** ningún
    evento al servidor de *tracking*:

``` java
SDKController.launch(
    SelphIDController(SdkData.selphIDConfiguration) {
        when (it.finishStatus) {
            FinishStatus.STATUS_OK -> {
                //SelphID OK
            }
            FinishStatus.STATUS_ERROR -> //SelphID OK: it.errorType.name
        }
    }
)
```

-   **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
    del componente con normalidad, pero sí se trackearán los eventos
    internos al servidor de *tracking*:

``` java
SDKController.launchMethod(
    SelphIDController(SdkData.selphIDConfiguration) {
        when (it.finishStatus) {
            FinishStatus.STATUS_OK -> {
                //SelphID OK
            }
            FinishStatus.STATUS_ERROR -> //SelphID OK: it.errorType.name
        }
    }
)
```

El método **launch** debe usarse **por defecto**. Este método permite
utilizar ***tracking*** en caso de estar su componente activado, y no lo
usará cuando esté desactivado (o no se encuentre el componente
instalado).

Por el contrario, el método **launchMethod** cubre un caso especial, en
el cual el integrador tiene instalado y activado el tracking, pero en un
flujo determinado dentro de la aplicación no desea trackear información.
En ese caso se usa este método para evitar que se envíe esa información
a la plataforma.

------------------------------------------------------------------------

## 6. Recepción del resultado

El resultado es un objeto *SDKResult* que devuelve el SDK tendrá siempre
3 campos:

*finishStatus:* Que nos indicará si la operación ha finalizado
correctamente. Posibles valores:

``` java
FinishStatus.STATUS_OK
FinishStatus.STATUS_ERROR
```

*errorType:* Si el finishStatus indica que ha habido un error, este
campo tendrá la descripción del mismo:

``` java
CANCEL_BY_USER: El usuario ha cancelado la operación
TIMEOUT: Ha finalizado el tiempo establecido sin que se termine correctamente el proceso.
COMPONENT_CONTROLLER_ERROR: No se ha inicializado correctamente el controlador. Revisar las funciones de init y setup.
COMPONENT_CONTROLLER_DATA_ERROR: Los datos de inicio o configuración del controlador no son correctos.
NETWORK_CONNECTION: Error de conexión a internet
UNKNOWN_ERROR: Error no gestionado
ACTIVITY_RESULT_ERROR: Error en el flujo de pantallas interno del controlador.
LOW_QUALITY: La imagen capturada no tiene la calidad suficiente.
NFC_ERROR: Error de lectura de NFC
QR_ERROR: Error de lectura de QR
NO_ERROR: No se ha producido ningún error
HARDWARE_ERROR: Error de hardware de los widgets de Selphi/SelphId
EXTRACTION_LICENSE_ERROR: Error de licenciade los widgets de Selphi/SelphId
UNEXPECTED_CAPTURE_ERROR: Error durante el proceso de captura de los widgets de Selphi/SelphId
CONTROL_NOT_INITIALIZATED_ERROR: Error interno de los widgets de Selphi/SelphId
BAD_EXTRACTOR_CONFIGURATION_ERROR: Error interno de los widgets de Selphi/SelphId
TOKEN_ERROR: Error en la petición del token para tracking
PHINGERS_ERROR_CAPTURE: Error de captura de huellas
LICENSING_ERROR_PACKAGE_NAME: Error de licencia que indica que el package name es incorrecto.
LICENSING_ERROR_APPID_INVALID: Error de licencia que indica que el APPID es incorrecto.
LICENSING_ERROR_APIKEY_FORBIDDEN: Error de licencia que indica que el APIKEY es incorrecto.
LICENSING_ERROR_LICENSE_NOT_FOUND: Error de licencia que indica que no se ha encontrado ninguna licencia.
```

*data:* Tendrá los datos de respuesta de la función del componente
ejecutado. En el **apartado 7.1** se especifican los campos que se
incluyen en este componente.

### 6.1 Contenido del campo *data*

El resultado devuelve las imágenes en formato **Bitmap**, es posible
convertir las imágenes a **Base64** de la siguiente manera:

`Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)`

El campo *data* es variable y dependerá de qué componente se ha devuelto
el resultado. En el caso de este componente, los campos devueltos son
los siguientes:

#### 6.1.1 *frontDocument / tokenFrontDocument:*

La imagen frontal del documento procesada, limpiada y recortada por los
bordes y su token correspondiente.

#### 6.1.2 *backDocument / tokenBackDocument*

La imagen trasera del documento procesada, limpiada y recortada por los
bordes y su token asociado.

#### 6.1.3 *faceImage / tokenFaceImage*

La imagen del rostro que se ha encontrado en el documento, en caso de
que exista y su token asociado.

#### 6.1.4 *documentCaptured*

Esta propiedad indica el modelo de documento que se ha capturado cuando
se realiza una busqueda en modo SMSearch. De esta forma la aplicación
puede conocer qué modelo, de entre todos los permitidos, se ha
detectado.

#### 6.1.5 *matchingSidesScore*

Esta propiedad devuelve un cálculo de la similitud de los datos leídos
entre el front y el back del documento. El cálculo se realiza
comprobando la similitud entre los campos comunes leídos en ambas caras.
El resultado del cálculo será un valor entre 0.0 y 1.0 para el caso de
que existan campos comunes en el documento. Cuanto mayor es el valor,
más similares son los datos comparados. Si el cálculo devuelve -1.0 es
que el documento no contiene campos comunes o aún no se tiene
información de las dos caras.

#### 6.1.6 *Propiedad captureProgress*

Esta propiedad devuelve el estado en el que se encontraba el proceso de
captura cuando el widget terminó. Estos son los posibles valores:

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

-   **0**: En la lectura del Front, el widget termino sin poder haber
    detectado nada. Generalmente cuando no se pone ningún documento.

-   **1**: En la lectura del Front, el widget termino habiendo detectado
    parcialmente un documento. En este caso algunos de los elementos
    esperados se han conseguido detectar, pero no todos los necesarios.

-   **2**: En la lectura del Front, el widget termino habiendo
    completado la detección de todos los elementos del documento. Si el
    widget acaba en este estado es porque el análisis de OCR no se ha
    podido completar con éxito.

-   **3**: En la lectura del Front, el widget termino habiendo analizado
    y extraído todo el OCR del documento. Este es el estado en el que
    acabaría una lectura correcta del Front de un documento.

Los estados del **4** al **7** son exactamente iguales solo que se
refieren al resultado del proceso cuando se analiza el back.

#### 6.1.7 *ocrResults*

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

-   **FirstName**: El valor asociado a esta clave contiene el nombre del
    usuario.

-   **LastName**: El valor asociado a esta clave contiene los apellidos
    del usuario.

-   **DateOfBirth**: El valor asociado a esta clave contiene la fecha de
    nacimiento detectada en el documento.

-   **Gender**: El valor asociado a esta clave contiene el sexo del
    usuario detectado en el documento.

-   **Nationality**: El valor asociado a esta clave contiene la
    nacionalidad del usuario detectado en el documento.

-   **DocumentNumber**: El valor asociado a esta clave contiene el
    número de documento.

-   **DateOfExpiry**: El valor asociado a esta clave contiene la fecha
    de expiración del documento.

-   **Issuer**: El valor asociado a esta clave contiene el editor del
    documento.

-   **DateofIssue**: El valor asociado a esta clave contiene la fecha de
    expedición del documento.

-   **PlaceOfBirth**: El valor asociado a esta clave contiene el lugar
    de nacimiento del usuario.

-   **Address**: El valor asociado a esta clave contiene la dirección
    detectada en el documento.

Adicionalmente se añaden claves del propio objeto results para hacer más
fácil su búsqueda:

-   **DocumentCaptured**: Valor del modelo de documento que se ha
    capturado según el .xml de modelos. Corresponde a la propiedad
    documentCaptured.

-   **MatchingSidesScore**: Valor que indica la correspondencia entre
    las caras leídas del documento. Corresponde a la propiedad
    matchingSidesScore.

------------------------------------------------------------------------

## Attachments:

<img src="images/icons/bullet_blue.gif" width="8" height="8" />
[d886b449-da3f-4670-8f44-19f13fcb3d48.png](attachments/2562588792/2562588797.png)
(image/png)  
