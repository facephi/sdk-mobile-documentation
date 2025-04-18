# Voice Component

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
**_Voice Component_**. Éste se encarga de realizar la captura de voz del
usuario y la posterior extracción de las plantillas correspondientes.
Sus principales funcionalidades son las siguientes:

- Entrada de cierto número de frases para posteriormente leer cada una
  en un paso.

- Gestión interna del micrófono.

- Gestión de permisos.

- Análisis de los silencios.

- Análisis del progreso.

- Asistente en los procesos de captura.

- Generación de las plantillas con las características de la voz y
  puntuaciones.

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
  implementation "com.facephi.androidsdk:voice_component:$sdk_voice_component_version"
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

| **Controlador** | **Descripción**                         |
| --------------- | --------------------------------------- |
| VoiceController | Controlador principal de captura de voz |

---

## 5. Configuración del componente

Para configurar el componente actual, una vez inicializado, se deberá
crear un objeto

_VoiceConfigurationData_ y pasarlo como parámetro al SDKController
durante el lanzamiento del componente.

En el siguiente apartado se mostrarán los campos que forman parte de
esta clase y para qué se utiliza cada uno de ellos.

### 5.1. Class VoiceConfigurationData

#### 5.1.1. phrases

Indica la/las frases necesarias para capturar.

#### 5.1.2. vibrationEnabled

Indica la activación de la vibración cuando el widget termine
satisfactoriamente.

#### 5.1.3. showTutorial

Indica si el componente activa la pantalla de tutorial. En esta vista se
explica de forma intuitiva cómo se realiza la captura.

#### 5.1.4. extractionTimeout

Establece el tiempo máximo que se puede realizar la captura.

#### 5.1.5. showDiagnostic

Mostrar pantallas de diagnóstico al final del proceso

#### 5.1.6. enableQualityCheck

Activa o desactiva la comprobación de calidad del audio. Se recomienda tenerla siempre activa.

#### 5.1.7. showPreviousTip

Muestra una pantalla previa al lanzamiento de la captura con información sobre el proceso a realizar y un botón para el lanzamiento.

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
    VoiceController(VoiceConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("Voice: ERROR - ${result.error.name}")
    is SdkResult.Success -> Napier.d("Voice OK: ${result.data}")
}
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
val result = SDKController.launchMethod(
    VoiceController(VoiceConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("Voice: ERROR - ${result.error.name}")
    is SdkResult.Success -> Napier.d("Voice OK: ${result.data}")
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
  rel="nofollow">6. Retorno de resultado</a> del Android Mobile SDK.

### 7.1. Recepción de errores

En la parte del error, dispondremos de la clase VoiceError.

Listado de errores:

- ACTIVITY_RESULT_MSG_ERROR: El resultado de la actividad es incorrecto
- APPLICATION_CONTEXT_ERROR: El contexto de aplicación necesario es nulo
- CANCEL_BY_USER: El usuario ha cancelado el proceso
- CANCEL_LAUNCH: Se ha hecho una cancelación general del SDK
- COMPONENT_LICENSE_ERROR: La licencia del componente no es correcta
- EMPTY_LICENSE: El String de licencia está vacío
- FETCH_DATA_ERROR: Error en la recogida del resultado
- FLOW_ERROR: Error en el proceso de flow
- INITIALIZATION_ERROR: Error de inicialización
- INTERNAL_LICENSE_ERROR: Error interno relacionado con la licencia
- MANAGER_NOT_INITIALIZED: Los managers son nulos
- NO_DATA_ERROR: Los datos de entrada son nulos
- OPERATION_NOT_CREATED: No hay ninguna operación en curso
- PERMISSION_DENIED: El usuario ha rechazado los permisos
- TIMEOUT: Timeout en el proceso

### 7.2. Recepción de ejecución correcta - _data_

En la parte de _data_, dispondremos de la clase _VoiceResult_.

El campo _data_ es variable y dependerá de qué componente se ha devuelto
el resultado. En el caso de este componente, los campos devueltos son
los siguientes:

#### 7.2.1 _audios_

Contiene un listado de audios capturados en formato ByteArray.

#### 7.2.2 _tokenizedAudios_

Contiene el listado de audios capturados en formato tokenizado de
Facephi.

---

## 8. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de [Primeros Pasos](./Mobile_SDK)), este componente en concreto permite la
modificación de su interfaz.

### 8.1 Textos

Si se desea modificar los textos de la SDK habría que incluir el
siguiente fichero XML en la aplicación del cliente, y modificar el valor
de cada _String_ por el deseado.

```xml
    <!-- Previous Tip -->
    <string name="voice_component_tip_message">Habla claro y en voz alta. &lt;br&gt;&lt;br&gt; Asegúrate de estar en un entorno silencioso</string>
    <string name="voice_component_tip_title">Reconocimiento de voz</string>
    <string name="voice_component_tip_button">Comenzar</string>
    <!-- Process -->
    <string name="voice_component_success_message">Grabación registrada</string>
    <string name="voice_component_speech_message">Sin pulsar nada, habla claro y cercano al micrófono</string>
    <string name="voice_component_speech_more_message">Continúe hablando</string>
    <string name="voice_component_read_message">Di en voz alta:</string>
    <string name="voice_component_speech_noisy_message">Demasiado ruido. Busca un entorno silencioso</string>
    <string name="voice_component_success_records_message">grabaciones exitosas</string>
    <!-- Diagnostic -->
    <string name="voice_component_timeout_title">Tiempo superado</string>
    <string name="voice_component_timeout_desc">No hemos podido identificarte. Inténtalo de nuevo.</string>
    <string name="voice_component_internal_error_title">Hubo un problema técnico</string>
    <string name="voice_component_internal_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>
    
```

### 8.2. Animaciones

Si se desea modificar las animaciones (lottie) de la SDK habría que incluir las animaciones con el mismo nombre en la carpeta res/raw/ de la aplicación.

```text
voice_anim_enroll_ko.json
voice_anim_enroll_ok.json
voice_anim_enroll_progress.json
voice_anim_intro.json
```

### 8.3 Vistas externas

Es posible modificar completamente las pantallas del componente manteniendo su funcionalidad y navegación. Para ello deben implementarse los interfaces siguientes:

Pantalla de tip previo:

```kotlin

interface IVoicePreviousTipView {
    @Composable
    fun Content(
        onContinue: () -> Unit,
        onClose: () -> Unit
    )
}

```

Pantalla de diagnóstico de error:

```kotlin

interface IVoiceErrorDiagnosticView {
    @Composable
    fun Content(
        error: VoiceError,
        onRetry: () -> Unit,
        onClose: () -> Unit,
    )
}

```

Pantallas de captura:

```kotlin

interface IVoiceEnrollRecordingView {
    @Composable
    fun Content(
        phrase: String,
        numberRecordedPhrases: Int,
        numberTotalPhrases: Int,
        voiceAmplitude: Float,
        recordingProgress: Int,
        onClose: () -> Unit,
    )
}

```

```kotlin

interface IVoiceEnrollSuccessView {
    @Composable
    fun Content(
        phrase: String,
        numberRecordedPhrases: Int,
        numberTotalPhrases: Int,
        onClose: () -> Unit,
    )
}

```

```kotlin

interface IVoiceEnrollErrorView {
    @Composable
    fun Content(
        phrase: String,
        numberRecordedPhrases: Int,
        numberTotalPhrases: Int,
        onClose: () -> Unit,
    )
}

```

Una vez creadas las clases que implementan los interfaces, en el lanzamiento del componente se podrá añadir el parámetro "customViews" para que se utilicen en el SDK.

---

## 9. Logs

Para visualizar en consola los logs de este componente se podrá usar el filtro: "VOICE:"
