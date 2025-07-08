# Vídeo identificación

## 1. Introducción

ELa captura facial se realiza con el **_VideoID Component_**. 

Este componente se encarga de realizar la grabación de un
usuario identificándose, mostrando la cara y su documento de identidad.

- Gestión interna de cámaras, micro y permisos.

- Conexión con los servicios.

- Lectura del OCR y captura del documento.

En el apartado de [Lanzamiento simplificado](./Mobile_SDK) se detallan los pasos necesarios para la integración básica del SDK. En esta sección se añade la información para el lanzamiento de este componente.

---

## 2. Dependencia

La dependencia específica del componente es:

  ```java
  implementation "com.facephi.androidsdk:video_id_component:$version"
  ```

---

## 3. Controladores disponibles

| **Controlador**            | **Descripción**                                    |
| -------------------------- | -------------------------------------------------- |
| VideoIdController          | Controlador principal de video identificación      |
| SignatureVideoIdController | Controlador para firmar un proceso con una Captura |

---

## 4. Lanzamiento simplificado

Una vez iniciado el SDK y creada una nueva operación se podrá lanzar el componente. 
Se podrá hacer uso de cualquiera de sus controladores para ejecutar su funcionalidad.

Lanzamiento:

```java
val response = SDKController.launch(
    VideoIdController(VideoIdConfigurationData(...))
)
when (response) {
    is SdkResult.Error -> Napier.d("ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```
--- 

## 5. Configuración básica

Para lanzar el componente actual, se deberá crear un objeto _VideoIdConfigurationData_ que será la configuración del 
controlador del componente.

La configuración básica necesaria para es la siguiente:

```java
VideoIdConfigurationData(
    mode = VideoIdMode.DOCUMENT_FRONT_BACK,
)
```

Los diferentes modos son:

- VideoIdMode.ONLY_FACE
- VideoIdMode.FACE_DOCUMENT_FRONT
- VideoIdMode.FACE_DOCUMENT_FRONT_BACK
- VideoIdMode.DOCUMENT_FRONT
- VideoIdMode.DOCUMENT_FRONT_BACK

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

Los errores se devolverán como un objeto 'VideoIdError'.

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

### 6.2. Recepción de ejecución correcta - _data_

En la parte de SdkResult.Success - _data_, dispondremos de la clase VideoIdResult.

El resultado devuelve las imágenes en formato **SdkImage**, es posible 
extraer el bitmap accediendo a _image.bitmap_. Si se quisiera convertir a base64 
se puede utilizar la función:

`Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)`

Los campos devueltos en el resultado son los siguientes:

#### 6.2.1 frontDocumentData

Datos del frente del documento. Incluye:

- documentImage: Imagen del documento
- documentFullImage: Imagen completa capturada
- documentFaceImage: Si se ha encontrado una cara en el documento se devuelve la imagen de la misma.
- iqaOverExposure: Valor numérico entre 0 y 1 que indica el nivel de sobreexposición de la imagen;
  un valor alto sugiere que la imagen está demasiado iluminada, lo que puede dificultar la lectura del documento.
- iqaReadable: Valor numérico entre 0 y 1 que indica la legibilidad del texto del documento; valores más altos
  implican que el texto es más claro y fácil de reconocer.
- iqaSharpness: Valor numérico entre 0 y 1 que indica la nitidez de la imagen del documento; valores altos reflejan una
  imagen más enfocada, lo que mejora la capacidad de extracción de datos.
- documentFaceImageTokenized: Si se ha encontrado una cara en el documento se devuelve la imagen cifrada de la misma.

#### 6.2.2 backDocumentData

Datos del reverso del documento. Incluye:

- documentImage: Imagen del documento
- documentFullImage: Imagen completa capturada
- documentFaceImage: Si se ha encontrado una cara en el documento se devuelve la imagen de la misma.
- iqaOverExposure: Valor numérico entre 0 y 1 que indica el nivel de sobreexposición de la imagen;
  un valor alto sugiere que la imagen está demasiado iluminada, lo que puede dificultar la lectura del documento.
- iqaReadable: Valor numérico entre 0 y 1 que indica la legibilidad del texto del documento; valores más altos
  implican que el texto es más claro y fácil de reconocer.
- iqaSharpness: Valor numérico entre 0 y 1 que indica la nitidez de la imagen del documento; valores altos reflejan una
  imagen más enfocada, lo que mejora la capacidad de extracción de datos.
- documentFaceImageTokenized: Si se ha encontrado una cara en el documento se devuelve la imagen cifrada de la misma.

#### 6.2.3 faceImage

Imagen del usuario capturada en la primera sección del proceso.

#### 6.2.4 ocrMap

Mapa del OCR extraído del documento.

#### 6.2.5 ocrDiagnostic

Diccionario con el diagnóstico OCR del documento. Las claves son los campos a validar y los valores son instancias de OcrDiagnostic.

Diagnóstico OCR extraído del documento.

- OK: El OCR es correcto.
- NOT_FOUND: No se encuentra la clave OCR.
- TOLERANCE_ERROR: El OCR no es correcto.
- WARNING: El OCR no es correcto, pero es solo una advertencia porque es un campo opcional.

#### 6.2.6 matchingSidesScore

Valor numérico entre 0 y 1 que estima el nivel de coincidencia entre las caras del documento (frontal y trasera).

#### 6.2.7 documentType

Tipo de documento obtenido.

#### 6.2.8 personalData

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

#### 6.2.9 speechText

Texto que el usuario deberá pronunciar durante la grabación del video.

#### 6.2.10 faceImageTokenized

Imagen cifrada del usuario capturada en la primera sección del proceso.

---

## 7. Información avanzada

Este apartado amplía la información del componente.

### 7.1  Configuración avanzada del componente

Para lanzar el componente actual, se deberá crear un objeto  _VideoIdConfigurationData
_ que será la configuración del controlador del componente.

Los campos incluidos en la configuración (**url, apiKey, tenantId**),
normalmente **no es necesario que sean informados** ya que se completan
internamente a través de la licencia usada.

Estos campos suelen informarse **solo** cuando el **servidor** es
**OnPremise**.

#### 7.1.1. url

Ruta al socket de video

#### 7.1.2. apiKey

ApiKey necesaria para la conexión con el socket de video

#### 7.1.3. tenantId

Identificador del tenant que hace referencia al cliente actual,
necesario para la conexión con el servicio de video.

#### 7.1.4. sectionTime

Indica la duración de las secciones con tiempo asociado (captura facial y cambio de cámara).

#### 7.1.5. mode

- ONLY_FACE: El proceso se realiza capturando la cara del usuario.

- FACE_DOCUMENT_FRONT: El proceso se realiza capturando la cara del usuario y la parte delantera 
  del documento de identidad.

- FACE_DOCUMENT_FRONT_BACK: El proceso se realiza capturando la cara del usuario y el documento de 
  identidad completo.

- DOCUMENT_FRONT: El proceso extrae la información sólo de la cara delantera del documento.

- DOCUMENT_FRONT_BACK: El proceso extrae la información sólo del documento completo.

#### 7.1.6. timeoutServerConnection

Tiempo máximo de espera en ms para la respuesta del servidor.

#### 7.1.7. sectionTimeout

Tiempo máximo permitido para completar una sección (en ms).

#### 7.1.8. autoFaceDetection

Activa/Desactiva la detección automática de cara.

#### 7.1.9. debug

Habilita la visualización de información adicional útil para el diagnóstico y seguimiento del comportamiento interno.

#### 7.1.10. countryFilter

Permite restringir el procesamiento a un conjunto específico de países, aceptando un array de strings que representan los alias en formato ISO3 (código de 3 letras según el estándar ISO 3166-1).

#### 7.1.11. documentFilter

Permite restringir los tipos de documentos aceptados durante la captura. Los valores posibles son:

- "IDC": Documento de Identidad (ID Card)
- "PSP": Pasaporte (Passport)
- "DLI": Licencia de Conducir (Driver License)
- "VIS": Visado (Visa)
- "FOC": Tarjeta de Extranjero (Foreign Card)
- "INV": Factura (Invoice)
- "CUS": Documento Personalizado (Custom Document)

#### 7.1.12. speechText

Texto que el usuario deberá pronunciar durante la grabación del video.

#### 7.1.13. ocrValidations

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

#### 7.1.14. ocrMaxWarnings

Número máximo de advertencias permitidas en la validación OCR.

#### 7.1.15. maxRetries

Número máximo de reintentos permitidos para la validación OCR. El valor por defecto es 3.

---

## 8. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de [Ajustes avanzados](./Mobile_SDK_advanced)), este componente en concreto permite la
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

---