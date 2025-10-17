# Captura de documentos

## 1. Introducción

La captura de documentos se realiza con el **_SelphID Component_**. 

Este componente se encarga de realizar capturas de documentos de identidad y 
del análisis de los datos obtenidos. Sus principales procesos son:

- Gestión interna de cámaras y permisos.

- Asistente en los procesos de captura de la parte frontal y trasera
  del documento.

- Extracción de la información contenida en el documento.

- Obtención de las imágenes del dorso y reverso del documento, así
  como otras imagénes incluidas en el documento: cara del usuario,
  firma del usuario,...

- Alto nivel de configuración: diferentes países, idiomas, tipos de
  documentos...

En el apartado de [Lanzamiento simplificado](./Mobile_SDK) se detallan los pasos necesarios para la integración básica del SDK. En esta sección se añade la información para el lanzamiento de este componente.

---

## 2. Dependencia

La dependencia específica del componente es:

  ```java
  implementation "com.facephi.androidsdk:selphid_component:$version"
  ```

---

## 3. Controladores disponibles

| **Controlador**   | **Descripción**                                       |
| ----------------- | ----------------------------------------------------- |
| SelphIDController | Controlador principal de reconocimiento de documentos |

---

## 4. Lanzamiento simplificado

Una vez iniciado el SDK y creada una nueva operación se podrá lanzar el componente. 
Se podrá hacer uso de cualquiera de sus controladores para ejecutar su funcionalidad.

Lanzamiento de la captura facial:

```java
val response = SDKController.launch(
    SelphIDController(SelphIDConfiguration(..))
)
when (response) {
    is SdkResult.Error -> Napier.d("SelphID: ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

---

## 5. Configuración básica 

Para lanzar el componente actual, se deberá crear un objeto _SelphiConfigurationData_ 
que será la configuración del controlador del componente.

La configuración básica necesaria para es la siguiente:

```java
SelphIDConfiguration(
  resourcesPath = "resources_file.zip",
  wizardMode = true,
  specificData = "ES|<ALL>",
  documentType = SelphIDDocumentType.ID_CARD,
)
```

En el campo 'specificData' se deberá cambiar el código de país por el que corresponda (en este caso se está utilizando ES para España).

Los diferentes tipos de documento son:

- SelphIDDocumentType.ID_CARD
- SelphIDDocumentType.PASSPORT
- SelphIDDocumentType.DRIVERS_LICENSE
- SelphIDDocumentType.FOREIGN_CARD
- SelphIDDocumentType.CREDIT_CARD
- SelphIDDocumentType.CUSTOM
- SelphIDDocumentType.VISA

---

## 6. Recepción del resultado

El lanzamiento devolverá la información en formato SdkResult. Pudiendo diferenciarse entre un lanzamiento correcto y uno incorrecto:

```java
when (response) {
    is SdkResult.Error -> Napier.d("ERROR - ${response.error}")
    is SdkResult.Success -> response.data
}
```

### 6.1. Recepción de errores

Los errores se devolverán como un objeto 'SelphIdError'.

Listado de errores:

- SPD_ACTIVITY_RESULT_ERROR: El resultado de la actividad es incorrecto.
- SPD_ACTIVITY_RESULT_MSG_ERROR: El resultado de la actividad recibido en el msg es incorrecto.
- SPD_APPLICATION_CONTEXT_ERROR: El contexto de aplicación necesario es nulo.
- SPD_BAD_EXTRACTOR_CONFIGURATION_ERROR: Widget: Configuración del extractor incorrecta
- SPD_CAMERA_PERMISSION_DENIED: El usuario ha rechazado los permisos.
- SPD_CANCEL_BY_USER: El usuario ha cancelado el proceso.
- SPD_CANCEL_LAUNCH: Se ha hecho una cancelación general del SDK.
- SPD_COMPONENT_LICENSE_ERROR: La licencia del componente no es correcta.
- SPD_CONTROL_NOT_INITIALIZATED_ERROR: Widget: Error de inicialización
- SPD_EMPTY_LICENSE: El String de licencia está vacío.
- SPD_EXTRACTION_LICENSE_ERROR: Widget: Error de licencia
- SPD_FETCH_DATA_ERROR: Error en la recogida del resultado.
- SPD_FLOW_ERROR: Error en el proceso de flow.
- SPD_HARDWARE_ERROR: Widget: Error de hardware
- SPD_INITIALIZATION_ERROR: Error de inicialización.
- SPD_MANAGER_NOT_INITIALIZED: Los managers son nulos.
- SPD_MOVE_FAIL: El usuario no se ha movido como se le ha especificado en el proceso.
- SPD_NO_DATA_ERROR: Los datos de entrada son nulos.
- SPD_OPERATION_NOT_CREATED: No hay ninguna operación en curso.
- SPD_RESOURCES_NOT_FOUND: No se ha encontrado el zip de recursos
- SPD_SETTINGS_PERMISSION_ERROR: Widget: Error de permisos
- SPD_TIMEOUT: Timeout en el proceso.
- SPD_UNEXPECTED_CAPTURE_ERROR: Widget: Error en la captura
- SPD_UNKNOWN_ERROR: Error desconocido
- SPD_WIDGET_RESULT_DATA_ERROR: Error en los datos de salida del widget

### 6.2. Recepción del resultado correcto - _data_

En la parte de SdkResult.Success - _data_, dispondremos de la clase SelphIDResult.

El resultado devuelve las imágenes en formato **SdkImage**, es posible 
extraer el bitmap accediendo a _image.bitmap_. Si se quisiera convertir a base64 
se puede utilizar la función:

`Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)`

Los campos devueltos en el resultado son los siguientes:

#### 6.2.1 _frontDocument / tokenFrontDocument:_

La imagen frontal del documento procesada, limpiada y recortada por los
bordes y su token correspondiente.

#### 6.2.2 _backDocument / tokenBackDocument_

La imagen trasera del documento procesada, limpiada y recortada por los
bordes y su token asociado.

#### 6.2.3 _faceImage / tokenFaceImage_

La imagen del rostro que se ha encontrado en el documento, en caso de
que exista y su token asociado.

Válida para el proceso de MATCHING FACIAL.

#### 6.2.4 _documentCaptured_

Esta propiedad indica el modelo de documento que se ha capturado cuando
se realiza una busqueda en modo SMSearch. De esta forma la aplicación
puede conocer qué modelo, de entre todos los permitidos, se ha
detectado.

#### 6.2.5 _matchingSidesScore_

Esta propiedad devuelve un cálculo de la similitud de los datos leídos
entre el front y el back del documento. El cálculo se realiza
comprobando la similitud entre los campos comunes leídos en ambas caras.
El resultado del cálculo será un valor entre 0.0 y 1.0 para el caso de
que existan campos comunes en el documento. Cuanto mayor es el valor,
más similares son los datos comparados. Si el cálculo devuelve -1.0 es
que el documento no contiene campos comunes o aún no se tiene
información de las dos caras.

#### 6.2.6 _Propiedad captureProgress_

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

#### 6.2.7 _ocrResults_

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

#### 6.2.8 _timeoutDiagnostic_

Esta propiedad devuelve una cadena de texto que explica por qué se ha agotado el tiempo de espera del widget.
Esta cadena puede ser utilizada en una pantalla de tiempo de espera posterior donde la aplicación principal puede
dar más información al usuario sobre lo ocurrido durante la captura del documento.

#### 6.2.9 _countryCaptured_

País del documento.

#### 6.2.10 _documentTypeCaptured_

Tipo de documento. Se corresponde con los del apartado 5.1.10.

#### 6.2.11 _personalData_

Conjunto reducido de datos obtenidos del usuario:

- issuer
- documentNumber
- issueDate
- expiryDate
- name
- surname
- fullName
- gender
- birthDate
- birthPlace
- nationality
- address
- nfcKey
- numSupport
- mrz

---

## 7. Información avanzada

Este apartado amplía la información del componente.

### 7.1  Configuración avanzada del componente

Para lanzar el componente actual, se deberá crear un objeto  _SelphIDConfigurationData_ que será la configuración del controlador del componente.

A continuación se detallan todos los campos que forman parte de esta clase.

#### 7.1.0. _debug_

Activación del modo depuración del componente.

#### 7.1.1. _resourcesPath_

Indica el nombre de los recursos en formato zip del componente. Ejemplo:
“resources-selphid-2-0.zip“.

Este nombre irá a buscar el fichero a la ruta de _assets_.

![Image](/android/selphid_resources.png)

#### 7.1.2. _wizardMode_

Indica si el widget queda configurado para realizar la captura de ambas
partes (frontal y trasera) del documento una a continuación de la otra.
En este modo el widget solo se lanzaría una vez y al terminar de
capturar el front, continuaría seguidamente con el back.

#### 7.1.3. _showResultAfterCapture_

Indica si mostrar o no una pantalla con la imagen capturada del
documento después del proceso de análisis. En esta pantalla se le da al
usuario la posibilidad de repetir el proceso de captura si la imagen que
se obtuvo del documento no fuera correcta.

#### 7.1.4. _showTutorial_

Indica si el widget activa la pantalla de tutorial. En esta vista se
explica de forma intuitiva cómo se realiza la captura.

#### 7.1.5. _tutorialOnly_

Indica si el widget se quiere lanzar solo para mostrar el tutorial.

#### 7.1.6. _scanMode_

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

#### 7.1.7 _specificData_

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

#### 7.1.8 _locale_

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

#### 7.1.9 _fullscreen_

Indica si la vista va a tener prioridad para mostrarse en pantalla
completa, si el sistema lo permite.

#### 7.1.9 _tokenImageQuality_

Indica la cantidad de calidad que se quiere recibir en las imágenes
tokenizadas. Valor entre 0 y 1.

#### 7.1.10. _documentType_

Los valores permitidos son los siguientes:

- **SelphIDDocumentType.ID_CARD**: El widget queda configurado para
  realizar la captura de documentos de identidad.

- **SelphIDDocumentType.PASSPORT**: El widget queda configurado para
  realizar la captura de pasaportes.

- **SelphIDDocumentType.DRIVERS_LICENSE**: El widget queda configurado
  para realizar la captura de licencias de conducción.

- **SelphIDDocumentType.FOREIGN_CARD**: El widget queda configurado
  para realizar la captura de documentos extranjeros.

- **SelphIDDocumentType.CUSTOM**: El widget queda configurado para
  realizar la captura de otro tipo de documentos que no corresponden a
  ninguna de las categorías anteriores.

- **WidgetSelphIDDocumentType.VISA**: El widget queda configurado para
  realizar la captura del visado de un país. (SDK min 2.1.2)

#### 7.1.11 _documentSide_

Los valores permitidos son los siguientes:

- **SelphIDDocumentSide.FRONT**: El widget queda configurado para
  realizar la captura de la parte frontal del documento.

- **SelphIDDocumentSide.BACK**: El widget queda configurado para
  realizar la captura de la parte trasera del documento.

#### 7.1.12 _timeout_

Es un enumerado que define el timeout de la captura de un lado del
documento. Tiene 3 posibles valores:

- SelphIDTimeout.SHORT: 15 segundos.

- SelphIDTimeout.MEDIUM: 20 segundos.

- SelphIDTimeout.LONG: 25 segundos.

- SelphIDTimeout.VERY_LONG: 60 segundos.

#### 7.1.13 _videoFilename_

Establece la ruta absoluta del nombre del archivo en el que se grabará
un video del proceso de captura. La aplicación es la responsable de
solicitar los permisos necesarios al teléfono en caso de que esa ruta
requiera de permisos adicionales. El widget, por defecto, no realizará
ningún proceso de grabación a menos que se especifique una ruta de
archivo mediante este método.

#### 7.1.14 _DocumentModels_

Esta propiedad permite, mediante una cadena en formato xml, configurar
modelado de los documentos que el widget va a tratar de capturar. La
definición de este modelado se encentra, por defecto, en un .xml de
modelos que se encuentra en el .zip de recursos. Con esta propiedad se
permite a una aplicación actualizar, en caliente, los modelados de los
documentos.

Nota: Esta propiedad no altera el contenido del archivo de recursos.

#### 7.1.15 _generateRawImages_

Esta propiedad configura el widget para devolver la imagen completa de
la cámara que se utilizó para capturar el documento. Estas imágenes se
devuelven en las propiedades `rawFrontDocument` y `rawBackDocument` del
objeto `results` respectivamente.

#### 7.1.16 _tokenPreviousCaptureData_

Cuando la captura del documento se realiza en 2 llamadas, esta propiedad
permite pasar un diccionario con la información de la captura previa. De
esta manera el widget puede combinar los resultados de ambas lecturas de
una manera inteligente y así devolver la información combinada de ambas
capturas. También permite al widget calcular un grado de similitud de
los datos de ambas caras.

En el caso que la captura de ambas caras del documento se realice en una
única llamada esto no es necesario ya que el widget internamente hace
este proceso.

#### 7.1.17 _translationsContent_

Esta propiedad avanzada permite, mediante una cadena en formato xml,
configurar la traducción de los literales que se muestran durante el
proceso.

Nota: Esta propiedad no altera el contenido del archivo de recursos.

#### 7.1.18 _viewsContent_

Esta propiedad avanzada permite, mediante una cadena en formato xml,
configurar las vistas del widget.

Nota: Esta propiedad no altera el contenido del archivo de recursos.

#### 7.1.19. _showDiagnostic_

Mostrar pantallas de diagnóstico al final del proceso

#### 7.1.20. _showPreviousTip_

Muestra una pantalla previa al lanzamiento de la captura con información sobre el proceso a realizar y un botón para el lanzamiento.

#### 7.1.21. _vibrationEnabled_

Indica si se desea un feedback de vibración al acabar el proceso.

---

## 8. Personalización del componente

Además de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de [Ajustes avanzados](./Mobile_SDK_advanced)), este componente en concreto permite su propia personalización.

### 8.1 Textos

Si se desea modificar los textos de la SDK habría que incluir el
siguiente fichero XML en la aplicación del cliente, y modificar el valor
de cada _String_ por el deseado.

```xml
    <!-- Diagnostic -->
    <string name="selphid_component_timeout_title">Tiempo superado</string>
    <string name="selphid_component_timeout_desc">Comprueba que el documento está dentro del recuadro y los datos son visibles.</string>
    <string name="selphid_component_internal_error_title">Hubo un problema técnico</string>
    <string name="selphid_component_internal_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>
    <!-- Previous Tip -->
    <string name="selphid_component_tip_message">&lt;b&gt; Enfoca&lt;/b&gt; tu documento&lt;b&gt; dentro del recuadro.&lt;/b&gt; La foto se hará automáticamente.</string>
    <string name="selphid_component_tip_message_alt">Enfoca tu documento dentro del recuadro. La foto se hará automáticamente.</string>
    <string name="selphid_component_tip_anim_id_desc">Coloca tu documento de identidad en horizontal, y apunta con tu teléfono en posición vertical.</string>
    <string name="selphid_component_tip_anim_pass_desc">Coloca tu documento de identidad en horizontal, y apunta con tu teléfono en posición vertical.</string>
    <string name="selphid_component_tip_title">Foto del documento</string>
    <string name="selphid_component_tip_button">Comenzar</string>
    <string name="selphid_component_tip_button_alt">Comenzar captura de documento</string>
    <string name="selphid_component_tip_close_button_alt">Volver</string>
    <string name="selphid_component_tip_info_button_alt">Ver consejos</string>
    <!-- Tutorial -->
    <string name="selphid_component_tutorial_message_1">Busca un fondo con buen contraste.</string>
    <string name="selphid_component_tutorial_message_2">Coloca el documento dentro del recuadro.</string>
    <string name="selphid_component_tutorial_message_3">Evita brillos que dificulten la lectura del documento.</string>
    <string name="selphid_component_tutorial_message_1_anim_id_desc">Coloca el documento en una superficie con un color distinto al documento.</string>
    <string name="selphid_component_tutorial_message_2_anim_id_desc">Coloca tu documento de identidad en horizontal, y apunta con tu teléfono en posición vertical.</string>
    <string name="selphid_component_tutorial_message_3_anim_id_desc">Aparecen reflejos sobre el documento.</string>
    <string name="selphid_component_tutorial_message_1_anim_pass_desc">Coloca el documento en una superficie con un color distinto al documento.</string>
    <string name="selphid_component_tutorial_message_2_anim_pass_desc">Coloca tu documento de identidad en horizontal, y apunta con tu teléfono en posición vertical.</string>
    <string name="selphid_component_tutorial_message_3_anim_pass_desc">Aparecen reflejos sobre el documento.</string>
    <string name="selphid_component_tutorial_close_button_alt">Volver al tutorial previo</string>

```

### 8.2. Animaciones

Si se desea modificar las animaciones (lottie) de la SDK habría que incluir las animaciones con el mismo nombre en la carpeta res/raw/ de la aplicación.

```text
selphid_anim_tip_driver_h.json
selphid_anim_tip_driver_m.json
selphid_anim_tip_health.json
selphid_anim_tip_id_h.json
selphid_anim_tip_id_m.json
selphid_anim_tip_mrz.json
selphid_anim_tip_pass_h.json
selphid_anim_tip_pass_m.json

selphid_anim_tuto_driver_h_1.json
selphid_anim_tuto_driver_h_2.json
selphid_anim_tuto_driver_h_3.json
selphid_anim_tuto_driver_m_1.json
selphid_anim_tuto_driver_m_2.json
selphid_anim_tuto_driver_m_3.json

selphid_anim_tuto_id_h_1.json
selphid_anim_tuto_id_h_2.json
selphid_anim_tuto_id_h_3.json
selphid_anim_tuto_id_m_1.json
selphid_anim_tuto_id_m_2.json
selphid_anim_tuto_id_m_3.json

selphid_anim_tuto_pass_h_1.json
selphid_anim_tuto_pass_h_2.json
selphid_anim_tuto_pass_h_3.json
selphid_anim_tuto_pass_m_1.json
selphid_anim_tuto_pass_m_2.json
selphid_anim_tuto_pass_m_3.json

```

---

## 9. Fichero zip de recursos

Tabla de versiones de sdk y versiones de recursos asociados (Se pueden encontrar en el apartado de **Resources**):

| **Versión SDK** | **Selphi versión de recursos** |
| --------------- | ------------------------------ |
| 2.0.2           | 1.25.1                         |
| 2.0.3           | 1.26.0                         |
| 2.1.0           | 1.27.0                         |
| 2.1.1           | 1.28.1                         |
| 2.1.2           | 1.29.0                         |
| 2.2.0           | 1.30.1                         |
| 2.2.1           | 1.31.0                         |
| 2.2.2           | 1.31.2                         |
| 2.2.3           | 1.32.2                         |
| 2.3.2           | 1.33.1                         |
| 2.3.3           | 1.33.4                         |
| 2.3.4           | 1.33.6                         |
| 2.3.5           | 1.34.1                         |
| 2.3.6           | 1.34.6                         |
| 2.3.7           | 1.34.7                         |
| 2.4.0           | 1.35.0                         |
