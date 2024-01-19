# Video Recording Component

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
<a href="ES_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page">Android Mobile SDK</a>.

---

## 1. Introducción

El _Componente_ tratado en el documento actual recibe el nombre de
**_VideoRecording Component_**. Éste se encarga de capturar la pantalla
del dispositivo en segundo plano. Está orientado principalmente para la
grabación del proceso de onboarding.

---

## 2. Integración del componente

Antes de integrar este componente se recomienda leer la documentación
relativa a:

<a href="ES_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page"><strong><u>Android Mobile
SDK</u></strong></a> y seguir las instrucciones indicadas en dicho
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
  implementation "com.facephi.androidsdk:video_recording_component:$sdk_video_recording_component_version"
  ```

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la
información asociada correctamente en la plataforma deberá ejecutarse
previamente el comando **newOperation**.

Este comando debe haberse ejecutado **anteriormente al lanzamiento del
componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda
consultar la documentación de <a href="ES_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page"><strong><u>Android Mobile
SDK</u></strong></a>, en el que se detalla y explica en qué consiste
este proceso.

---

## 4. Controladores disponibles

|                              |                                                            |
| ---------------------------- | ---------------------------------------------------------- |
| **Controlador**              | **Descripción**                                            |
| VideoRecordingController     | Controlador principal de video grabación.                  |
| StopVideoRecordingController | Controlador para realizar la parada de la video grabación. |

## 5. Configuración del componente

Para configurar el componente actual, una vez inicializado, se deberá
crear un objeto

_VideoRecordingConfigurationData_ y pasarlo como parámetro al
SDKController durante el lanzamiento del componente.

En el siguiente apartado se mostrarán los campos que forman parte de
esta clase y para qué se utiliza cada uno de ellos.

### 5.1. Class VideoRecordingConfigurationData

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

---

## 6. Uso del componente

Una vez iniciado el componente y creada una nueva operación (**apartado
3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero sí se trackearán los eventos
  internos al servidor de _tracking_:

```java
SDKController.launch(
    VideoRecordingController(VideoRecordingConfigurationData()) {
        when (it) {
            is SdkResult.Error -> Napier.d("VideoRecording: KO - ${it.error.name}")
            is SdkResult.Success -> Napier.d("VideoRecording OK: ${it.data}")
        }
    }
)
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
SDKController.launchMethod(
    VideoRecordingController(VideoRecordingConfigurationData()) {
        when (it) {
            is SdkResult.Error -> Napier.d("VideoRecording: KO - ${it.error.name}")
            is SdkResult.Success -> Napier.d("VideoRecording OK: ${it.data}")
        }
    }
)
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
href="https://facephicorporative.atlassian.net/wiki/spaces/DD/pages/2605285492#6.-Retorno-de-resultado"
rel="nofollow">6. Retorno de resultado</a> del Android Mobile SDK.

### 7.1. Recepción de errores

En la parte del error, dispondremos de la clase `VideoRecordingError`.

```java
val message = when(it.error){
    VideoRecordingError.CANCEL_BY_USER -> "CANCEL_BY_USER"
    is VideoRecordingError.INITIALIZATION_ERROR ->
        "INITIALIZATION_ERROR: ${(it.error as VideoRecordingError.INITIALIZATION_ERROR).error}"
    VideoRecordingError.NETWORK_CONNECTION -> "NETWORK_CONNECTION"
    VideoRecordingError.NO_DATA_ERROR -> "NO_DATA_ERROR"
    VideoRecordingError.PERMISSION_DENIED -> "PERMISSION_DENIED"
    VideoRecordingError.TIMEOUT -> "TIMEOUT"
    VideoRecordingError.UNKNOWN_ERROR -> "UNKNOWN_ERROR"
    VideoRecordingError.VIDEO_ERROR -> "VIDEO_ERROR"
}
```

### 7.2. Recepción de ejecución correcta - _data_

En la ejecución correcta, simplemente se informa de que todo ha ido bien
con el SdkResult.Success.

---

## 10. Controladores Adicionales

### 10.1. StopVideoRecordingController

Este controlador permite la parada de una grabación en curso.

```java
SDKController.launch(
    StopVideoRecordingController {
        when (it) {
            is SdkResult.Error -> Napier.d(
                "VideoRecording-STOP: KO - ${it.error.javaClass.simpleName}"
            )
            is SdkResult.Success -> Napier.d("VideoRecording-STOP: OK")
        }
    }
)
```
