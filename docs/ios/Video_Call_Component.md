# VideoCall Component

## 1. Introducción

**SDK Mobile** es un conjunto de librerías (**Componentes**) que ofrece
una serie de funcionalidades y servicios, permitiendo a su vez su
integración en una aplicación Mobile de forma sencilla y totalmente
escalable. Dependiendo del caso de uso que se requiera, se deberá
realizar la instalación de unos determinados componentes. Su alto nivel
de modularidad permite que, en un futuro, se puedan añadir otros
componentes nuevos sin afectar en absoluto a los ya integrados en el
proyecto.

El _Componente_ tratado en el documento actual recibe el nombre de
**_VideoCall Component_**. Éste se encarga de gestionar la comunicación
entre un usuario y un agente de forma remota, a través de un canal de
comunicación. Está orientado principalmente para casos de uso de
videoasistencia.

For more information on the base configuration, go to the [1.5.X][EN] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>*** section. 

### 1.1 Requisitos mínimos

La versión mínima de la SDK de Android requerida es la siguiente:

- SDK mínima (minSdk): **23**

- API Version: **33**

- Kotlin: **1.8.0**

---

## 2. Integración del componente

Antes de integrar este componente se recomienda leer la documentación
relativa a **<u>Core Component</u>** y seguir las instrucciones
indicadas en dicho documento.

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
timber_version = '5.0.1'
core_ktx_version = '1.9.0'
kotlinx_serialization_json_version = '1.3.3'
agora_version = '4.2.0'
okhttp3_version = '4.9.3'
lottie_version = '5.2.0'
androidx_lifecycle_version = '2.5.1'

//***********************************

implementation "androidx.core:core-ktx:$core_ktx_version"
implementation "com.jakewharton.timber:timber:$timber_version"
implementation "org.jetbrains.kotlinx:kotlinx-serialization-json:$kotlinx_serialization_json_version"
implementation "androidx.lifecycle:lifecycle-viewmodel-ktx:$androidx_lifecycle_version"
implementation "com.airbnb.android:lottie:$lottie_version"
implementation "com.squareup.okhttp3:okhttp:$okhttp3_version"
implementation "io.agora.rtc:full-sdk:$agora_version"
implementation "io.agora.rtc:full-screen-sharing:$agora_version"

// FACEPHI
compileOnly "com.facephi.androidsdk:core:$versions.core"
implementation "com.facephi.androidsdk:sdk_composables:$versions.sdk_composables"
implementation "com.facephi.androidsdk:license_checker_component:$versions.license_checker_component"
```

Una vez instaladas las dependencias necesarias, se podrá hacer uso de
las diferentes funcionalidades del **componente** actual:

```java
implementation "com.facephi.androidsdk:videocall_component:$sdk_videocall_component_version"
```

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la
información asociada correctamente en la plataforma deberá ejecutarse
previamente el comando **newOperation**.

Este comando debe ejecutarse **siempre**. Para saber más acerca de cómo
iniciar una nueva operación, se recomienda consultar la documentación de
**Core Component**, en el que se detalla y explica en qué consiste este
proceso.

---

## 4. Uso del componente

Una vez iniciado el componente y creada una nueva operación (**apartado
3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **sí se trackearán** los eventos
  internos al servidor de _tracking_ en el caso de que el componente
  de tracking esté instalado y activo:

```java
SDKController.launchMethod(
    VideoCallController(EnvironmentVideoCallData()) {
        when (it.finishStatus) {
            FinishStatus.STATUS_OK -> {
                //VideoCall OK
            }
            FinishStatus.STATUS_ERROR -> //VideoCall OK: it.errorType.name
        }
    }
)
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_ en caso de que esté activado el
  tracking:

  ```java
  SDKController.launch(
      VideoCallController(EnvironmentVideoCallData()) {
          when (it.finishStatus) {
              FinishStatus.STATUS_OK -> {
                  //VideoCall OK
              }
              FinishStatus.STATUS_ERROR -> //VideoCall OK: it.errorType.name
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

En los datos de configuración (`EnvironmentVideoCallData`) también se
podrán modificar:

- **_Datos <u>opcionales</u> que normalmente se incluyen dentro de la
  licencia_**

  - **tenantId**: Identificador del tenant que hace referencia al
    cliente actual, necesario para la conexión con el servicio de
    video.

  - **url**: Ruta al socket de video.

  - **apiKey**: ApiKey necesaria para la conexión con el socket de
    video.

---

## 5. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de **Core Component**), este componente en
concreto permite la modificación de textos específicos.

### 5.1 Textos

Si se desea modificar los textos de la SDK habría que incluir el
siguiente fichero XML en la aplicación del cliente, y modificar el valor
de cada _String_ por el deseado.

```java
 <!-- VIDEO CALL -->
    <string name="video_call_text_waiting_agent_title">Connecting with an assistant…</string>
    <string name="video_call_agent">Agent</string>
    <string name="video_call_exit_alert_title">Cancel process</string>
    <string name="video_call_exit_alert_question">Are you sure you want to leave the video assistance?</string>
    <string name="video_call_exit_alert_exit">Quit</string>
    <string name="video_call_exit_alert_cancel">Cancel</string>
    <string name="video_call_exit">Exit</string>
    <string name="video_call_network_connection_error">Check your internet connection.</string>
    <string name="video_call_image_description">Phone</string>
    <string name="video_call_text_finish">Video assistance is complete</string>
    <string name="video_call_text_finish_button">Exit</string>
    <string name="video_call_accesibility_phone">Phone</string>
```

### 5.2 Colores

```java
<!-- VIDEO CALL -->
<color name="colorVideoCallPhoneButtonBackground">#F44336</color>
<color name="colorVideoCallActionsBackground">#30333d</color>
<color name="colorVideoCallCardText">#ffffff</color>
<color name="colorVideoCallButtonBackground">#FF526080</color>
```
