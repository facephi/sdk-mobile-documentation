# Video Call Component

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
**_VideoCall Component_**. Éste se encarga de gestionar la comunicación
entre un usuario y un agente de forma remota, a través de un canal de
comunicación. Está orientado principalmente para casos de uso de
videoasistencia.

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
  implementation "com.facephi.androidsdk:videocall_component:$sdk_videocall_component_version"
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

| **Controlador**     | **Descripción**                       |
| ------------------- | ------------------------------------- |
| VideoCallController | Controlador principal de videollamada |

---

## 5. Configuración del componente

Para configurar el componente actual, una vez inicializado, se deberá
crear un objeto

_VideoCallConfigurationData_ y pasarlo como parámetro al SDKController
durante el lanzamiento del componente.

En el siguiente apartado se mostrarán los campos que forman parte de
esta clase y para qué se utiliza cada uno de ellos.

### 5.1. Class VideoCallConfigurationData

Los campos incluidos en la configuración, normalmente **no es necesario
que sean informados** ya que se completan internamente a través de la
licencia usada.

Estos campos suelen informarse **solo** cuando el **servidor** es
**OnPremise**.

#### 5.1.1. url

Ruta al socket de video

#### 5.1.2. apiKey

ApiKey necesaria para la conexión con el socket de video

#### 5.1.3. tenantId

Identificador del tenant que hace referencia al cliente actual,
necesario para la conexión con el servicio de video.

#### 5.1.4. activateScreenSharing

Activar la opción de compartir pantalla en la llamada.

#### 5.1.5. timeout

Tiempo de espera para que un agente coja la llamada (ms)

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
    VideoCallController(VideoCallConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("VideoCall: ERROR - ${result.error.name}")
    is SdkResult.Success -> Napier.d("VideoCall: OK - ScreenSharing: ${result.data.sharingScreen}")
}
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
val result = SDKController.launchMethod(
    VideoCallController(VideoCallConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("VideoCall: ERROR - ${result.error.name}")
    is SdkResult.Success -> Napier.d("VideoCall: OK - ScreenSharing: ${result.data.sharingScreen}")
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

En la parte del error, dispondremos de la clase _VideoCallError_.

```java
NO_DATA_ERROR
TIMEOUT
CANCEL_BY_USER
CANCEL_LAUNCH
NETWORK_CONNECTION
SOCKET_ERROR
VIDEO_ERROR
ACTIVITY_RESULT_ERROR
INITIALIZATION_ERROR -> it.error
UNKNOWN_ERROR
```

### 7.2. Recepción de ejecución correcta - _data_

En la ejecución correcta, simplemente se informa de que todo ha ido bien
con el SdkResult.Success.

Cuando el resultado sea Success y esté activo el flag _sharingScreen_ se podrá activar compartir pantalla.

---

## 8. Compartir pantalla

La funcionalidad de compartir pantalla se podrá ejecutar haciendo uso de la clase _VideoCallScreenSharingManager_.
Con ella se podrá tanto comenzar y finalizar la compartición de pantalla como recoger los estados en los que se encuentra.

```java
val videoCallScreenSharingManager = VideoCallScreenSharingManager(
            SdkApplication(application)
        )

videoCallScreenSharingManager.setOutput { state ->
            Napier.d("SCREEN SHARING STATE: ${state.name}")
        }
```

Los posibles estados son:

```java
    AGENT_HANGUP,
    PERMISSION_ERROR,
    UNKNOWN_ERROR,
    SHARING,
    FINISH
```

Donde SHARING indica que se está grabando la pantalla y FINISH que ha finalizado el proceso.

Si se quiere habilitar la opción de compartir pantalla se deberá lanzar el controlador de video llamada con el flag _activateScreenSharing_ de su configuración activo. En la salida del lanzamiento de la video llamada se indicará si el usuario ha solicitado compartir pantalla con el flag _sharingScreen_.

```java
val result = SDKController.launch(
    VideoCallController(VideoCallConfigurationData(activateScreenSharing = true)))

when (result) {
    is SdkResult.Error -> {
        Napier.d("VideoCall: ERROR - ${result.error.name}")
    }

    is SdkResult.Success -> {
            Napier.d("VideoCall: OK - ScreenSharing: ${result.data.sharingScreen}")
            if (result.data.sharingScreen) {
                videoCallScreenSharingManager.startScreenSharingService()
            }
        }
    }
}
```

Para comenzar y finalizar la compartición de pantalla en la llamada:

```java
// START
videoCallScreenSharingManager.startScreenSharingService()

// STOP
videoCallScreenSharingManager.stopScreenSharingService()
```

---

## 9. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de [Primeros Pasos](./Mobile_SDK)), este componente en concreto permite la
modificación de su interfaz.

### 9.1. Textos

Si se desea modificar los textos de la SDK habría que incluir el
siguiente fichero XML en la aplicación del cliente, y modificar el valor
de cada _String_ por el deseado.

```xml
    <string name="video_call_component_text_waiting_agent_title">Conectando con un agente…</string>
    <string name="video_call_component_agent">Agente</string>
    <string name="video_call_component_local">Tú</string>
    <string name="video_call_component_exit">Salir</string>
    <string name="video_call_component_text_finish">La video asistencia ha finalizado</string>
    <string name="video_call_component_accesibility_phone">Teléfono</string>
    <string name="video_call_component_accesibility_switch">Cambiar cámara</string>
    <string name="video_call_component_restart">Repetir llamada</string>
    <string name="video_call_component_timeout_title">Tiempo superado</string>
    <string name="video_call_component_timeout_desc">No se ha podido contactar con un asistente.</string>
    <string name="video_call_component_internal_error_title">Hubo un problema técnico</string>
    <string name="video_call_component_internal_error_desc">No se ha podido contactar con un asistente.</string>

```

### 9.2. Colores

```xml
<color name="colorVideoCallActionsBackground">#30333d</color>
<color name="colorVideoCallButtonBackground">#FF526080</color>
```

### 9.3 Vistas externas

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

## 10. Logs

Para visualizar en consola los logs de este componente se podrá usar el filtro: "VIDEO_CALL:"