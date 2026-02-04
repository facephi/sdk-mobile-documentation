# Captura de huellas

## 1. Introducción

La captura de huellas se realiza con el **Phingers Component**. Este componente se encarga de realizar la captura de las huellas del usuario y la posterior extracción de plantillas. Sus principales procesos son:

- Gestión interna de cámara y permisos
- Diferentes modos de extracción (slap de cuatro dedos, solo pulgar, etc.)
- Detección de vivacidad incorporada
- Asistencia guiada durante la captura
- Generación de plantillas, imágenes y puntuaciones de calidad

**Importante:** Para generar plantillas de huellas (campo `template` en `FingerResponse`), el dispositivo debe tener **3 GB de RAM o más**.

En el apartado de [Lanzamiento simplificado](./Mobile_SDK) se detallan los pasos necesarios para la integración básica del SDK. En esta sección se añade la información para el lanzamiento de este componente.

---

## 2. Dependencia

La dependencia específica del componente es:

```java
implementation "com.facephi.androidsdk:phingers_tf_component:$version"
```

---

## 3. Controladores disponibles

| **Controlador**        | **Descripción**                                         |
| ---------------------- | ------------------------------------------------------- |
| PhingersTFController   | Controlador principal de captura Phingers TF            |
| FPhingersTFController  | Controlador de Flow para Phingers TF (solo Flow)        |

---

## 4. Lanzamiento simplificado

Una vez iniciado el SDK y creada una nueva operación se podrá lanzar el componente.

```java
val response = SDKController.launch(
    PhingersTFController(
        PhingersConfigurationData(...)
    )
)

when (response) {
    is SdkResult.Error   -> Napier.d("PHINGERS: ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

---

## 5. Configuración básica

Para lanzar el componente actual, se deberá crear un objeto `PhingersConfigurationData`.

```java
PhingersConfigurationData(
  reticleOrientation = CaptureOrientation.LEFT,
  fingerFilter       = FingerFilter.SLAP,
  templateType       = TemplateType.NIST_TEMPLATE
)
```

**Opciones de ReticleOrientation**:

- `LEFT`
- `RIGHT`

**Opciones de FingerFilter**:

- `SLAP`
- `ALL_4_FINGERS_ONE_BY_ONE`
- `ALL_5_FINGERS_ONE_BY_ONE`
- `INDEX_FINGER`
- `MIDDLE_FINGER`
- `RING_FINGER`
- `LITTLE_FINGER`
- `THUMB_FINGER`

**Opciones de TemplateType**:

- `NIST_TEMPLATE`
- `ISO_TEMPLATE`
- `NIST_T5_TEMPLATE`

---

## 6. Recepción del resultado

El lanzamiento devolverá la información en formato `SdkResult`.

```java
when (response) {
    is SdkResult.Error   -> Napier.d("PHINGERS: ERROR - ${response.error}")
    is SdkResult.Success -> response.data
}
```

### 6.1. Recepción de errores

Los errores se devolverán como un objeto `PhingersError`. Posibles razones:

- PHG_ACTIVITY_RESULT_ERROR: El resultado de la actividad es incorrecto.
- PHG_ACTIVITY_RESULT_MSG_ERROR: El mensaje del resultado de la actividad es incorrecto.
- PHG_APPLICATION_CONTEXT_ERROR: El contexto de aplicación es nulo.
- PHG_CANCEL_BY_USER: El usuario ha cancelado el proceso.
- PHG_CANCEL_LAUNCH: Cancelación general del SDK.
- PHG_COMPONENT_LICENSE_ERROR: La licencia del componente no es correcta.
- PHG_EMPTY_LICENSE: El string de licencia está vacío.
- PHG_FETCH_DATA_ERROR: Error en la recogida del resultado.
- FLOW_ERROR: Error en el proceso de flow.
- PHG_INITIALIZATION_ERROR: Error de inicialización.
- PHG_INTERNAL_ERROR: Error interno.
- PHG_LOW_QUALITY: Baja calidad de la imagen.
- PHG_MANAGER_NOT_INITIALIZED: Los managers son nulos o no están inicializados.
- PHG_NO_DATA_ERROR: No se han recibido datos de la captura.
- PHG_OPERATION_NOT_CREATED: No hay ninguna operación en curso.
- PHG_PERMISSION_DENIED: El usuario ha rechazado los permisos.
- PHG_AUTOFOCUS_FAILURE: Fallo del autofocus.
- PHG_CAMERA_FAILURE: Fallo de la cámara.
- PHG_CAPTURE_FAILURE: Fallo en la captura.
- PHG_CONFIGURATION_FAILURE: Error de configuración.
- PHG_FINGERPRINT_CAPTURE_FAILURE: Fallo en la captura de huellas.
- PHG_FINGERPRINT_TEMPLATE_IO_ERROR: Fallo IO de plantilla.
- PHG_LICENSING_FAILURE: Error de licencia.
- PHG_LIVENESS_FAILURE: Error en la prueba de vida.
- PHG_NO_FINGERS_DETECTED: No se han detectado huellas.
- PHG_UNIQUE_USER_ID_NOT_SPECIFIED: Usuario no especificado.
- PHG_TIMEOUT: Timeout en el proceso.
- PHG_FLOW_VIDEO_RECORDING_ERROR: Error en la grabación de vídeo del flow.
- PHG_FLOW_TRACKING_ERROR: Error de tracking en el flow.
- PHG_TRACKING_STEP_ERROR: Error en el paso de tracking.

### 6.2. Recepción del resultado correcto - `data`

En la parte de `data`, dispondremos de la clase `PhingersResult`. Los campos binarios se devuelven como `ByteArray`. Para convertir a Base64:

```kotlin
Base64.encodeToString(byteArray, Base64.NO_WRAP)
```

El `PhingersResult` incluye los siguientes campos:

- **fingers**: Lista de `FingerResponse` (una entrada por dedo capturado)
- **slapImages**: Lista de `SlapResponse` (capturas slap cuando aplique)
- **livenessScore**: Media del score de vivacidad (nullable)

#### 6.2.1 `FingerResponse`

- **position**: Índice de posición del dedo
- **wsq**: Imagen WSQ (`ByteArray`)
- **displayImage**: Imagen de visualización (`ByteArray`, PNG)
- **minutiaesNumber**: Número de minutias detectadas
- **quality**: Puntuación de calidad
- **nistQuality**: Puntuación de calidad NIST
- **nist2Quality**: Puntuación de calidad NIST2
- **template**: Plantilla de huella (`ByteArray`)
- **proprietaryQuality**: Calidad propietaria del proveedor
- **templateType**: Identificador del tipo de plantilla
- **imageWidth**: Ancho de la imagen en píxeles
- **imageHeight**: Alto de la imagen en píxeles

#### 6.2.2 `SlapResponse`

- **position**: Índice de posición del slap
- **image**: Imagen slap (`ByteArray`)

---

## 7. Información avanzada

Este apartado amplía la información del componente Phingers Component.

### 7.1 Configuración avanzada del componente

Todos los campos de `PhingersConfigurationData`:

#### 7.1.1 reticleOrientation

Define la orientación de captura:

- **LEFT**: Captura los dedos de la mano izquierda
- **RIGHT**: Captura los dedos de la mano derecha

#### 7.1.2 fingerFilter

Selecciona el modo de captura (slap o dedo específico).

#### 7.1.3 templateType

Define el formato de plantilla a generar (variantes NIST/ISO).

#### 7.1.4 useLiveness

Activa o desactiva la detección de vivacidad. Por defecto `true`.

#### 7.1.5 extractionTimeout

Tiempo máximo de extracción en milisegundos. Por defecto `50000`.

#### 7.1.6 showPreviousTip

Muestra una pantalla previa con información y botón de inicio.

#### 7.1.7 showTutorial

Muestra la pantalla de tutorial con instrucciones de captura.

#### 7.1.8 showDiagnostic

Muestra pantallas de diagnóstico al final del proceso.

#### 7.1.9 threshold

Umbral de calidad de captura. El SDK limita este valor al rango `0.0-1.0`.

#### 7.1.10 showEllipses

Muestra las elipses durante la captura.

#### 7.1.11 cropWidth

Ancho de recorte de la imagen segmentada (px). Valores `<= 0` desactivan el recorte; se limitan a `64-2048`.

#### 7.1.12 cropHeight

Alto de recorte de la imagen segmentada (px). Valores `<= 0` desactivan el recorte; se limitan a `64-2048`.

#### 7.1.13 vibrationEnabled

Activa la vibración. Por defecto `true`.

#### 7.1.14 enableFlash

Activa el flash de la cámara. Por defecto `true`.

#### 7.1.15 reticle

Identificador opcional del retículo. Por defecto `"R_S"`.

#### 7.1.16 showPreviousFingerSelector

Muestra el selector de dedos antes de la captura.

#### 7.1.17 fingerSelectorHandOrientation

Define qué mano(s) se muestran en el selector (`LEFT`, `RIGHT`, `BOTH`).

#### 7.1.18 fingerSelectorOptions

Define la lista de filtros que se muestran en el selector. Si está vacía, el SDK usa:
`ALL_4_FINGERS_ONE_BY_ONE`, `SLAP`, `INDEX_FINGER`.

---

## 8. Personalización del componente

Más allá de la configuración a nivel SDK (ver [Ajustes avanzados](./Mobile_SDK_advanced)), puedes modificar la UI.

### 8.1 Textos

Para sobrescribir los textos por defecto, añade un XML en tu app:

```xml
<!-- Tutorial / Previous Tip -->
<string name="phingers_tf_component_tutorial_left_title">Huellas mano izquierda</string>
<string name="phingers_tf_component_tutorial_right_title">Huellas mano derecha</string>
<string name="phingers_tf_component_tutorial_thumb_title">Huella pulgar</string>
<string name="phingers_tf_component_tutorial_message_left_slap">Junta tus dedos. Acerca o aleja la mano hasta que se enfoquen tus huellas.</string>
<string name="phingers_tf_component_tutorial_message_right_slap">Junta tus dedos. Acerca o aleja la mano hasta que se enfoquen tus huellas.</string>
<string name="phingers_tf_component_tutorial_message_left_index_finger">Coloca el dedo índice de la mano izquierda. Acerca o aleja el dedo hasta que se enfoque tu huella.</string>
<string name="phingers_tf_component_tutorial_message_right_index_finger">Coloca el dedo índice de la mano derecha. Acerca o aleja el dedo hasta que se enfoque tu huella.</string>
<string name="phingers_tf_component_tutorial_thumb_message">Enfoca el pulgar dentro del círculo. Acerca o aleja el dedo hasta que se enfoque tu huella.</string>
<string name="phingers_tf_component_tutorial_button">Comenzar</string>
<!-- Diagnostic -->
<string name="phingers_tf_component_timeout_title">Tiempo superado</string>
<string name="phingers_tf_component_timeout_desc">Pedimos disculpas. No se ha podido hacer la captura</string>
<string name="phingers_tf_component_internal_error_title">Hubo un problema técnico</string>
<string name="phingers_tf_component_internal_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>
```

### 8.2 Animaciones

Si se desea modificar las animaciones (Lottie), incluir los ficheros en `res/raw/`:

```text
phingers_anim_left.json
phingers_anim_right.json
phingers_anim_thumb.json
phingers_anim_left_finger.json
phingers_anim_right_finger.json
```

### 8.3 Vistas externas

Es posible modificar completamente las pantallas del componente manteniendo su funcionalidad y navegación. Para ello deben implementarse las interfaces siguientes:

Pantalla de tip previo:

```kotlin
interface IPhingersPreviousTipView {
    @Composable
    fun Content(
        onContinue: () -> Unit,
        onClose: () -> Unit,
    )
}
```

Pantalla de diagnóstico de error:

```kotlin
interface IPhingersErrorDiagnosticView {
    @Composable
    fun Content(
        error: PhingersError,
        onRetry: () -> Unit,
        onClose: () -> Unit,
    )
}
```

Una vez creadas las clases que implementan las interfaces, en el lanzamiento del componente se podrá añadir el parámetro `customViews` para que se utilicen en el SDK.

---

## 9. Logs

Para visualizar en consola los logs de este componente se podrá usar el filtro: `"PHINGERS_TF:"`
