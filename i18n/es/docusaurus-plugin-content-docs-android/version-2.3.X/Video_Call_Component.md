# Videollamada

## 1. Introducción

La captura facial se realiza con el **_VideoCall Component_**. 

Este componente se encarga de gestionar la comunicación
entre un usuario y un agente (videoasistencia). Sus principales procesos son:

- Gestión interna de cámaras, micro y permisos.

- Conexión con los servicios.

---

## 2. Dependencia

La dependencia específica del componente es:

  ```java
  implementation "com.facephi.androidsdk:videocall_component:$version"
  ```

---

## 3. Controladores disponibles

| **Controlador**         | **Descripción**                       |
| ----------------------- | ------------------------------------- |
| VideoCallController     | Controlador principal de videollamada |
| StopVideoCallController | Detener la compartición de pantalla y la llamada en curso |

---

## 4. Lanzamiento simplificado

Una vez iniciado el SDK y creada una nueva operación se podrá lanzar el componente. 
Se podrá hacer uso de cualquiera de sus controladores para ejecutar su funcionalidad.

Lanzamiento:

```java
val response = SDKController.launch(
    VideoCallController(VideoCallConfigurationData(...))
)
when (response) {
    is SdkResult.Error -> Napier.d("ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```
--- 

## 5. Configuración básica

Para lanzar el componente actual, se deberá crear un objeto _VideoCallConfigurationData_ que será la configuración del 
controlador del componente.

La configuración básica necesaria no necesitará ningún parámetro:

```java
VideoCallConfigurationData()
```
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

Los errores se devolverán como un objeto 'VideoCallError'.

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
- UNKNOWN_ERROR: Error desconocido
- VIDEO_RECORDING_ACTIVE: No se puede iniciar porque el proceso de vídeo grabación está activo

### 6.2. Recepción del resultado correcto - _data_

En la parte de SdkResult.Success - _data_, dispondremos de la clase  _VideoCallResult_ que tendrá una única propiedad.

Cuando el resultado sea Success y esté activo el flag _sharingScreen_ se podrá activar compartir pantalla.

---

## 7. Información avanzada

Este apartado amplía la información del componente.

### 7.1.  Configuración avanzada del componente

Para lanzar el componente actual, se deberá crear un objeto _VideoCallConfigurationData_ 
que será la configuración del controlador del componente.

A continuación se detallan todos los campos que forman parte de esta clase.

Los campos incluidos en la configuración, normalmente **no es necesario
que sean informados** ya que se completan internamente a través de la
licencia usada.

Estos campos suelen informarse **solo** cuando el **servidor** es
**OnPremise**.

#### 7.1.1. url

Ruta al socket de video

#### 7.1.2. apiKey

ApiKey necesaria para la conexión con el socket de video

#### 7.1.3. tenantId

Identificador del tenant que hace referencia al cliente actual,
necesario para la conexión con el servicio de video.

#### 7.1.4. activateScreenSharing

Activar la opción de compartir pantalla en la llamada.

#### 7.1.5. timeout

Tiempo de espera para que un agente coja la llamada (ms)

### 7.2. Compartir pantalla

Cuando el usuario active la funcionalidad de compartir pantalla se recibirá en el controlador el resultado con "sharingScreen = true". Esto indica que la llamada sigue en curso.

```java
val result = SDKController.launch(
    VideoCallController(VideoCallConfigurationData(activateScreenSharing = true)))

when (result) {
    is SdkResult.Error -> {
        Napier.d("VideoCall: ERROR - ${result.error.name}")
    }

    is SdkResult.Success -> {
            Napier.d("VideoCall: OK - ScreenSharing: ${result.data.sharingScreen}")
        }
    }

```

Para detener la llamada se hará uso del controlador StopVideoCallController.

```java
val controller = StopVideoCallController()

controller.setOutput { state ->
    Napier.d { "VIDEOCALL: SCREEN SHARING STATE: ${state.name}" }
}
viewModelScope.launch {
    SDKController.launch(controller)
}
```

Los posibles estados son:

```java
AGENT_HANGUP,
PERMISSION_ERROR,
NETWORK_CONNECTION_ERROR,
UNKNOWN_ERROR,
SHARING,
CANCEL_BY_USER,
FINISH
```

El estado que indica la finalización completa de la llamada es FINISH.

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
    <string name="video_call_component_text_waiting_agent_title">Conectando con un asistente…</string>
    <!-- Process -->
    <string name="video_call_component_agent">Asistente</string>
    <string name="video_call_component_local">Tú</string>
    <string name="video_call_component_exit">Salir</string>
    <string name="video_call_component_text_finish">La video asistencia ha finalizado</string>
    <string name="video_call_component_accesibility_phone">Teléfono</string>
    <string name="video_call_component_accesibility_switch">Cambiar cámara</string>
    <!-- Diagnostic -->
    <string name="video_call_component_restart">Repetir llamada</string>
    <string name="video_call_component_timeout_title">Tiempo superado</string>
    <string name="video_call_component_timeout_desc">No se ha podido contactar con un asistente.</string>
    <string name="video_call_component_internal_error_title">Hubo un problema técnico</string>
    <string name="video_call_component_internal_error_desc">No se ha podido contactar con un asistente.</string>
    
```

### 8.2. Colores

```xml
<color name="colorVideoCallActionsBackground">#30333d</color>
<color name="colorVideoCallButtonBackground">#FF526080</color>
```

### 8.3. Animaciones

Si se desea modificar las animaciones (lottie) de la SDK habría que incluir las animaciones con el mismo nombre en la carpeta res/raw/ de la aplicación.

```text
video_call_anim_waiting.json
```

### 8.4 Vistas externas

Es posible modificar completamente las pantallas del componente manteniendo su funcionalidad y navegación. Para ello deben implementarse los interfaces siguientes:

Pantalla de diagnóstico de error:

```kotlin

interface IVideoCallErrorDiagnosticView {
    @Composable
    fun Content(
        error: VideoCallError,
        onRetry: () -> Unit,
        onClose: () -> Unit,
    )
}

```

Una vez creadas las clases que implementan los interfaces, en el lanzamiento del componente se podrá añadir el parámetro "customViews" para que se utilicen en el SDK.

---

## 9. Logs

Para visualizar en consola los logs de este componente se podrá usar el filtro: "VIDEO_CALL:"

---