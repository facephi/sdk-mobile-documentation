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

Indica la duración de cada una de las secciones en las que se muestra el
mensaje de grabación.

#### 5.1.5. mode

- ONLY_FACE: El proceso se realiza siendo necesariamente solo
  mostrando la cara.

- FACE_DOCUMENT_FRONT: El proceso se realiza usando tanto la cara como
  el frontal del documento de identidad.

- FACE_DOCUMENT_FRONT_BACK: El proceso se realiza usando la cara, el
  frontal del documento de identidad y la parte trasera del documento.

#### 5.1.6. showCompletedTutorial

Indica si se quiere mostrar el tutorial inicial completo. Si no, se
mostrará un progress indicator.

#### 5.1.7. timeoutServerConnection

Tiempo de espera en ms para la respuesta del servidor.

#### 5.1.8. timeoutFaceDetection

Tiempo de espera en ms para detectar si hay una cara y comenzar la grabación.

#### 5.1.9. camera

Cámara con la que se quiere realizar el proceso: FRONT, BACK

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

### 7.2. Recepción de ejecución correcta - _data_

En la ejecución correcta, simplemente se informa de que todo ha ido bien
con el SdkResult.Success.

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
    <string name="video_id_component_text_waiting_agent_title">Video ID</string>
    <string name="video_id_component_first_message">Coloca tu rostro y el frente de tu documento en las marcas</string>
    <string name="video_id_component_init_message_face_content_desc">Coloca tu rostro en frente de la cámara e inicia la grabación</string>
    <string name="video_id_component_init_message_face_docu_content_desc">Coloca tu rostro y tu documento en frente de la cámara e inicia la grabación</string>
    <string name="video_id_component_second_message">Ahora coloca el reverso de tu documento</string>
    <string name="video_id_component_third_message">Ahora en voz alta di “Yo (nombre y apellidos) acepto los términos y condiciones”.</string>
    <string name="video_id_component_finish_message">¡Videograbación finalizada!</string>
    <string name="video_id_component_record_init_button">Iniciar grabación</string>
    <string name="video_id_component_ready_button">Continuar</string>
    <string name="video_id_component_first_message_face">Coloque su cara dentro del marco</string>
    <string name="video_id_component_restart">Repetir grabación</string>
    <string name="video_id_component_timeout_title">Tiempo superado</string>
    <string name="video_id_component_timeout_desc">Pedimos disculpas. No se ha podido hacer la captura</string>
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
