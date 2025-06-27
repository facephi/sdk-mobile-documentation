# Video Id Component

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
**_VideoID Component_**. Éste se encarga de realizar la grabación de un
usuario identificándose, mostrando la cara y su documento de identidad.

---

## 2. Integración del componente

Antes de integrar este componente se recomienda leer la documentación
relativa a:

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
  implementation "com.facephi.androidsdk:video_id_component:$sdk_videoid_component_version"
  ```

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la
información asociada correctamente en la plataforma deberá ejecutarse
previamente el comando **newOperation**.

Este comando debe haberse ejecutado **anteriormente al lanzamiento del
componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda
consultar la documentación de [Primeros Pasos](./Mobile_SDK), en el que se detalla y explica en qué consiste
este proceso.

---

## 4. Controladores disponibles

| **Controlador**            | **Descripción**                                    |
| -------------------------- | -------------------------------------------------- |
| VideoIdController          | Controlador principal de video identificación      |
| SignatureVideoIdController | Controlador para firmar un proceso con una Captura |

---

## 5. Configuración del componente

Para configurar el componente actual, una vez inicializado, se deberá
crear un objeto

_VideoIdConfigurationData_ y pasarlo como parámetro al SDKController
durante el lanzamiento del componente.

En el siguiente apartado se mostrarán los campos que forman parte de
esta clase y para qué se utiliza cada uno de ellos.

### 5.1. Class VideoIdConfigurationData

Los campos incluidos en la configuración (**url, apiKey, tenantId**),
normalmente **no es necesario que sean informados** ya que se completan
internamente a través de la licencia usada.

Estos campos suelen informarse **solo** cuando el **servidor** es
**OnPremise**.

#### 5.1.1. url

Ruta al socket de video

#### 5.1.2. apiKey

ApiKey necesaria para la conexión con el socket de video

#### 5.1.3. tenantId

Identificador del tenant que hace referencia al cliente actual,
necesario para la conexión con el servicio de video.

#### 5.1.4. sectionTime

Indica la duración de las secciones con tiempo asociado (captura facial y cambio de cámara).

#### 5.1.5. mode

- ONLY_FACE: El proceso se realiza capturando la cara del usuario.

- FACE_DOCUMENT_FRONT: El proceso se realiza capturando la cara del usuario y la parte delantera 
  del documento de identidad.

- FACE_DOCUMENT_FRONT_BACK: El proceso se realiza capturando la cara del usuario y el documento de 
  identidad completo.

- DOCUMENT_FRONT: El proceso extrae la información sólo de la cara delantera del documento.

- DOCUMENT_FRONT_BACK: El proceso extrae la información sólo del documento completo.

#### 5.1.6. timeoutServerConnection

Tiempo máximo de espera en ms para la respuesta del servidor.

#### 5.1.7. sectionTimeout

Tiempo máximo permitido para completar una sección (en ms).

#### 5.1.8. autoFaceDetection

Activa/Desactiva la detección automática de cara.

#### 5.1.9. debug

Habilita la visualización de información adicional útil para el diagnóstico y seguimiento del comportamiento interno.

#### 5.1.10. countryFilter

Permite restringir el procesamiento a un conjunto específico de países, aceptando un array de strings que representan los alias en formato ISO3 (código de 3 letras según el estándar ISO 3166-1).

#### 5.1.11. documentFilter

Permite restringir los tipos de documentos aceptados durante la captura. Los valores posibles son:

- "IDC": Documento de Identidad (ID Card)
- "PSP": Pasaporte (Passport)
- "DLI": Licencia de Conducir (Driver License)
- "VIS": Visado (Visa)
- "FOC": Tarjeta de Extranjero (Foreign Card)
- "INV": Factura (Invoice)
- "CUS": Documento Personalizado (Custom Document)

#### 5.1.12. speechText

Texto que el usuario deberá pronunciar durante la grabación del video.

#### 5.1.13. ocrValidations

Diccionario con las validaciones OCR a realizar. Las claves son los campos a validar y los valores son instancias de OcrValidationValue.

OcrValidationValue tiene los siguientes campos:

- value: El valor a validar.
- tolerance: El nivel de tolerancia para la validación.
  - STRICT: Validación estricta.
  - LOW_TOLERANCE: Validación con baja tolerancia.
  - MEDIUM_TOLERANCE: Validación con tolerancia media.
  - HIGH_TOLERANCE: Validación con alta tolerancia.
- validationType: El tipo de validación a realizar.
  - OPTIONAL: Validación opcional.
  - REQUIRED: Validación obligatoria.

#### 5.1.14. ocrMaxWarnings

Número máximo de advertencias permitidas en la validación OCR.

#### 5.1.15. maxRetries

Número máximo de reintentos permitidos para la validación OCR. El valor por defecto es 3.

## 6. Uso del componente

Una vez iniciado el componente y creada una nueva operación (**apartado
3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero sí se trackearán los eventos
  internos al servidor de _tracking_:

```java
val result = SDKController.launch(
    VideoIdController(VideoIdConfigurationData())
)
when (it) {
    is SdkResult.Error -> Napier.d("VideoId: ERROR - ${result.error.name}")
    is SdkResult.Success -> Napier.d("VideoId OK: ${result.data}")
}
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
val result = SDKController.launchMethod(
    VideoIdController(VideoIdConfigurationData())
)
when (it) {
    is SdkResult.Error -> Napier.d("VideoId: ERROR - ${result.error.name}")
    is SdkResult.Success -> Napier.d("VideoId OK: ${result.data}")
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

En la parte del error, dispondremos de la clase _VideoIdError_.

Lista de errores:

- ACTIVITY_RESULT_MSG_ERROR: El resultado de la actividad es incorrecto
- APPLICATION_CONTEXT_ERROR: El contexto de aplicación necesario es nulo
- CANCEL_BY_USER: El usuario ha cancelado el proceso
- CANCEL_LAUNCH: Se ha hecho una cancelación general del SDK
- COMPONENT_LICENSE_ERROR: La licencia del componente no es correcta
- EMPTY_LICENSE: El String de licencia está vacío
- FACE_DETECTION_TIMEOUT: No se ha detectado cara
- FETCH_DATA_ERROR: Error en la recogida del resultado
- FLOW_ERROR: Error en el proceso de flow
- INITIALIZATION_ERROR: Error de inicialización
- MANAGER_NOT_INITIALIZED: Los managers son nulos
- NETWORK_CONNECTION: Error en la conexión a internet
- NO_DATA_ERROR: Los datos de entrada son nulos
- OPERATION_NOT_CREATED: No hay ninguna operación en curso
- PERMISSION_DENIED: El usuario ha rechazado los permisos
- SOCKET_ERROR: Error en la conexiónde los servicios
- TIMEOUT: Timeout en el proceso
- VIDEO_ERROR: Error en el procesamiento del vídeo
- VIDEO_RECORDING_ACTIVE: No se puede iniciar porque el proceso de vídeo grabación está activo

### 7.2. Recepción de ejecución correcta - _data_

El campo _data_ es variable y dependerá de qué componente se ha devuelto
el resultado. En el caso de este componente, los campos devueltos son
los siguientes:

#### 7.2.1 frontDocumentData

Datos del frente del documento. Incluye:

- documentImage: Imagen del documento
- documentFaceImage: Si se ha encontrado una cara en el documento se devuelve la imagen de la misma.
- iqaOverExposure: Valor numérico entre 0 y 1 que indica el nivel de sobreexposición de la imagen;
  un valor alto sugiere que la imagen está demasiado iluminada, lo que puede dificultar la lectura del documento.
- iqaReadable: Valor numérico entre 0 y 1 que indica la legibilidad del texto del documento; valores más altos
  implican que el texto es más claro y fácil de reconocer.
- iqaSharpness: Valor numérico entre 0 y 1 que indica la nitidez de la imagen del documento; valores altos reflejan una
  imagen más enfocada, lo que mejora la capacidad de extracción de datos.
- documentFaceImageTokenized: Si se ha encontrado una cara en el documento se devuelve la imagen cifrada de la misma.

#### 7.2.2 backDocumentData

Datos del reverso del documento. Incluye:

- documentImage: Imagen del documento
- documentFaceImage: Si se ha encontrado una cara en el documento se devuelve la imagen de la misma.
- iqaOverExposure: Valor numérico entre 0 y 1 que indica el nivel de sobreexposición de la imagen;
  un valor alto sugiere que la imagen está demasiado iluminada, lo que puede dificultar la lectura del documento.
- iqaReadable: Valor numérico entre 0 y 1 que indica la legibilidad del texto del documento; valores más altos
  implican que el texto es más claro y fácil de reconocer.
- iqaSharpness: Valor numérico entre 0 y 1 que indica la nitidez de la imagen del documento; valores altos reflejan una
  imagen más enfocada, lo que mejora la capacidad de extracción de datos.
- documentFaceImageTokenized: Si se ha encontrado una cara en el documento se devuelve la imagen cifrada de la misma.

#### 7.2.3 faceImage

Imagen del usuario capturada en la primera sección del proceso.

#### 7.2.4 ocrMap

Mapa del OCR extraído del documento.

#### 7.2.5 ocrDiagnostic

Diccionario con el diagnóstico OCR del documento. Las claves son los campos a validar y los valores son instancias de OcrDiagnostic.

Diagnóstico OCR extraído del documento.

- OK: El OCR es correcto.
- NOT_FOUND: No se encuentra la clave OCR.
- TOLERANCE_ERROR: El OCR no es correcto.
- WARNING: El OCR no es correcto, pero es solo una advertencia porque es un campo opcional.

#### 7.2.6 matchingSidesScore

Valor numérico entre 0 y 1 que estima el nivel de coincidencia entre las caras del documento (frontal y trasera).

#### 7.2.7 documentType

Tipo de documento obtenido.

#### 7.2.8 personalData

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

#### 7.2.9 speechText

Texto que el usuario deberá pronunciar durante la grabación del video.

#### 7.2.10 faceImageTokenized

Imagen cifrada del usuario capturada en la primera sección del proceso.

---

## 8. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de [Primeros Pasos](./Mobile_SDK)), este componente en concreto permite la
modificación de su interfaz.

### 8.1. Textos

Si se desea modificar los textos de la SDK habría que incluir el
siguiente fichero XML en la aplicación del cliente, y modificar el valor
de cada _String_ por el deseado.

```xml
    <!-- Waiting -->
    <string name="video_id_component_text_waiting_agent_title">Video ID</string>
    <!-- Process -->
    <string name="video_id_component_document_front_message">Coloca el frente de tu documento en las marcas</string>
    <string name="video_id_component_document_front_message_readable">Mantén el frente de tu documento en las marcas</string>
    <string name="video_id_component_document_front_message_not_readable">Acerca el frente de tu documento a las marcas</string>
    <string name="video_id_component_document_front_message_finish">Frente del documento capturado correctamente</string>
    <string name="video_id_component_document_back_message">Ahora coloca el reverso de tu documento</string>
    <string name="video_id_component_document_back_message_readable">Mantén el reverso de tu documento en las marcas</string>
    <string name="video_id_component_document_back_message_not_readable">Acerca el reverso de tu documento a las marcas</string>
    <string name="video_id_component_document_back_message_finish">Reverso del documento capturado correctamente</string>
    <string name="video_id_component_switch_camera_message">Prepare su documento mientras se procede al cambio de cámara</string>
    <string name="video_id_component_init_message_face_content_desc">Coloca tu rostro en frente de la cámara e inicia la grabación</string>
    <string name="video_id_component_init_message_face_docu_content_desc">Coloca tu rostro y tu documento en frente de la cámara e inicia la grabación</string>
    <string name="video_id_component_speech_message">Yo (nombre y apellidos) acepto los términos y condiciones de uso</string>
    <string name="video_id_component_speech_say_out_loud">Di en voz alta </string>
    <string name="video_id_component_finish_message">Videograbación\ncompletada</string>
    <string name="video_id_component_record_init_button">Iniciar grabación</string>
    <string name="video_id_component_ready_button">Continuar</string>
    <string name="video_id_component_first_message_face">Coloque su cara dentro del marco</string>
    <string name="video_id_component_first_message_multiple_face">Varias caras detectadas. Coloque sólo su cara dentro del marco</string>
    <!-- Diagnostic -->
    <string name="video_id_component_restart">Repetir grabación</string>
    <string name="video_id_component_timeout_title">Tiempo superado</string>
    <string name="video_id_component_timeout_desc">Pedimos disculpas. No se ha podido hacer la captura</string>
    <string name="video_id_component_face_timeout_desc">Por favor, colócate en las marcas para que empiece la grabación.</string>
    <string name="video_id_component_internal_error_title">Hubo un problema técnico</string>
    <string name="video_id_component_internal_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>

```

### 8.2. Animaciones

Si se desea modificar las animaciones (lottie) de la SDK habría que incluir las animaciones con el mismo nombre en la carpeta res/raw/ de la aplicación.

```text
video_id_anim_doc_and_face.json
video_id_anim_face.json
video_id_anim_loading.json
```

### 8.3 Vistas externas

Es posible modificar completamente las pantallas del componente manteniendo su funcionalidad y navegación. Para ello deben implementarse los interfaces siguientes:

Pantalla de diagnóstico de error:

```kotlin

interface IVideoIdErrorDiagnosticView {
    @Composable
    fun Content(
        error: VideoIdError,
        onRetry: () -> Unit,
        onClose: () -> Unit,
    )
}

```

Una vez creadas las clases que implementan los interfaces, en el lanzamiento del componente se podrá añadir el parámetro "customViews" para que se utilicen en el SDK.

---

## 9. Logs

Para visualizar en consola los logs de este componente se podrá usar el filtro: "VIDEO_ID:"
