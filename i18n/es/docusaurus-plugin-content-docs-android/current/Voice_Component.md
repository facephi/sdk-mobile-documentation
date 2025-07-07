# Captura de voz

## 1. Introducción

La captura facial se realiza con el **_Voice Component_**. 

Este componente se encarga de realizar la captura de voz del
usuario y la posterior extracción de las plantillas correspondientes.
Sus principales procesos son:

- Gestión interna del micrófono y permisos.

- Entrada de cierto número de frases para posteriormente leer cada una
  en un paso.

- Análisis de los silencios.

- Análisis del progreso.

- Asistente en los procesos de captura.

- Generación de las plantillas con las características de la voz y
  puntuaciones.

---

## 2. Dependencia

La dependencia específica del componente es:

  ```java
  implementation "com.facephi.androidsdk:voice_component:$version"
  ```

---

## 3. Controladores disponibles

| **Controlador** | **Descripción**                         |
| --------------- | --------------------------------------- |
| VoiceController | Controlador principal de captura de voz |

---

## 4. Lanzamiento simplificado

Una vez iniciado el SDK y creada una nueva operación se podrá lanzar el componente. 
Se podrá hacer uso de cualquiera de sus controladores para ejecutar su funcionalidad.

Lanzamiento de la captura:

```java
val response = SDKController.launch(
    VoiceController(VoiceConfigurationData(...))
)
when (response) {
    is SdkResult.Error -> Napier.d("ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

--- 

## 5. Configuración básica

Para lanzar el componente actual, se deberá crear un objeto _VoiceConfigurationData_ que será la configuración del 
controlador del componente.

La configuración básica necesaria para es la siguiente:

```java
VoiceConfigurationData(
  phrases = arrayOf(
            "Tu nombre complet y tu dirección",
            "Tu número de documento con letra",
        )
)
```

Se puede editar el listado de frases que se van a mostrar al usuario.

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

Los errores se devolverán como un objeto 'VoiceError'.

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

### 6.2. Recepción del resultado correcto - _data_

En la parte de SdkResult.Success - _data_, dispondremos de la clase  _VoiceResult_.

Los campos devueltos en el resultado son los siguientes:

#### 6.2.1 _audios_

Contiene un listado de audios capturados en formato ByteArray.

#### 6.2.2 _tokenizedAudios_

Contiene el listado de audios capturados en formato tokenizado de
Facephi.

---

## 7. Información avanzada

Este apartado amplía la información del componente.

### 7.1  Configuración avanzada del componente

Para lanzar el componente actual, se deberá crear un objeto _VoiceConfigurationData_ 
que será la configuración del controlador del componente.

A continuación se detallan todos los campos que forman parte de esta clase.

#### 7.1.1. phrases

Indica la/las frases necesarias para capturar.

#### 7.1.2. vibrationEnabled

Indica la activación de la vibración cuando el widget termine
satisfactoriamente.

#### 7.1.3. showTutorial

Indica si el componente activa la pantalla de tutorial. En esta vista se
explica de forma intuitiva cómo se realiza la captura.

#### 7.1.4. extractionTimeout

Establece el tiempo máximo que se puede realizar la captura.

#### 7.1.5. showDiagnostic

Mostrar pantallas de diagnóstico al final del proceso

#### 7.1.6. enableQualityCheck

Activa o desactiva la comprobación de calidad del audio. Se recomienda tenerla siempre activa.

#### 7.1.7. showPreviousTip

Muestra una pantalla previa al lanzamiento de la captura con información sobre el proceso a realizar y un botón para el lanzamiento.

---

## 8. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de [Ajustes avanzados](./Mobile_SDK_advanced)), este componente en concreto permite la
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

---
