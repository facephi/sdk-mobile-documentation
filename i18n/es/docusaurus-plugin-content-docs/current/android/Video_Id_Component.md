# Video Id Component

Este documento hace referencia la **versión 1.5.X** del componente

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
<a href="ES_Android_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page">Android Mobile SDK</a>.

---

## 1. Introducción

El _Componente_ tratado en el documento actual recibe el nombre de
**_VideoID Component_**. Éste se encarga de realizar la grabación de un
usuario identificándose, mostrando la cara y su documento de identidad.

---

## 2. Integración del componente

Antes de integrar este componente se recomienda leer la documentación
relativa a:

<a href="ES_Android_Mobile_SDK"
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
consultar la documentación de <a href="ES_Android_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page"><strong><u>Android Mobile
SDK</u></strong></a>, en el que se detalla y explica en qué consiste
este proceso.

---

## 4. Controladores disponibles

|                   |                                               |
| ----------------- | --------------------------------------------- |
| **Controlador**   | **Descripción**                               |
| VideoIdController | Controlador principal de video identificación |

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
    VideoIdController(VideoIdConfigurationData()) {
        when (it) {
            is SdkResult.Error -> Napier.d("VideoId: KO - ${it.error.name}")
            is SdkResult.Success -> Napier.d("VideoId OK: ${it.data}")
        }
    }
)
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
SDKController.launchMethod(
    VideoIdController(VideoIdConfigurationData()) {
        when (it) {
            is SdkResult.Error -> Napier.d("VideoId: KO - ${it.error.name}")
            is SdkResult.Success -> Napier.d("VideoId OK: ${it.data}")
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

En la parte del error, dispondremos de la clase _VideoIdError_.

```java
val message = when(it.error){
    is VideoIdError.ACTIVITY_RESULT_ERROR -> it.error.name
    is VideoIdError.CANCEL_BY_USER -> it.error.name
    is VideoIdError.INITIALIZATION_ERROR -> it.error.name
    is VideoIdError.NETWORK_CONNECTION -> it.error.name
    is VideoIdError.NO_DATA_ERROR -> it.error.name
    is VideoIdError.PERMISSION_DENIED -> it.error.name
    is VideoIdError.TIMEOUT -> it.error.name
    is VideoIdError.VIDEO_ERROR -> it.error.name
}
```

### 7.2. Recepción de ejecución correcta - _data_

En la ejecución correcta, simplemente se informa de que todo ha ido bien
con el SdkResult.Success.

---

## 8. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de <a href="ES_Android_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page"><strong><u>Android Mobile
SDK</u></strong></a>), este componente en concreto permite la
modificación de textos específicos.

### 8.1. Textos

Si se desea modificar los textos de la SDK habría que incluir el
siguiente fichero XML en la aplicación del cliente, y modificar el valor
de cada _String_ por el deseado.

```java
<string name="video_id_text_waiting_agent_title">Video recording</string>
<string name="video_id_first_message">Place your face and the front of your document within the frame</string>
<string name="video_id_init_message_face_content_desc">Place your face in front of the camera and start recording</string>
<string name="video_id_init_message_face_docu_content_desc">Place your face and your document in front of the camera and start recording</string>
<string name="video_id_second_message">Now place the back of your document</string>
<string name="video_id_third_message">Now please say out loud "I (name and surname) accept the terms and conditions".</string>
<string name="video_id_finish_message">Video recording finished!</string>
<string name="video_id_record_init_button">Start recording</string>
<string name="video_id_ready_button">Ready</string>
<string name="video_id_first_message_face">Place your face within the frame</string>
<string name="video_id_restart">Repeat recording</string>
```
