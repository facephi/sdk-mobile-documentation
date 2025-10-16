# Captura de huellas

## 1. Introducción

La captura de huellas se realiza con el **_Phingers Component_**. 

Este componente se encarga de realizar la captura de las
huellas de los dedos (fingerprints) del usuario y la posterior
extracción de las plantillas. Sus principales procesos son:

- Gestión interna de cámara y permisos.

- Diferentes modos de extracción: extracción de los cuatro dedos de la
  mano (excepto el pulgar), extracción únicamente del pulgar, ...

- Detección de vivacidad incorporada.

- Asistente en los procesos de captura de las huellas.

- Generación de las plantillas con las características de las huellas,
  imágenes y puntuaciones.


En el apartado de [Lanzamiento simplificado](./Mobile_SDK) se detallan los pasos necesarios para la integración básica del SDK. En esta sección se añade la información para el lanzamiento de este componente.

---

## 2. Dependencia

La dependencia específica del componente es:

  ```java
  implementation "com.facephi.androidsdk:phingers_component:$version"
  ```

---

## 3. Controladores disponibles

| **Controlador**    | **Descripción**                             |
| ------------------ | ------------------------------------------- |
| PhingersController | Controlador principal de captura de huellas |

---

## 4. Lanzamiento simplificado

Una vez iniciado el SDK y creada una nueva operación se podrá lanzar el componente. 
Se podrá hacer uso de cualquiera de sus controladores para ejecutar su funcionalidad.

Lanzamiento de la captura:

```java
val response = SDKController.launch(
    PhingersController(PhingersConfigurationData(...))
)
when (response) {
    is SdkResult.Error -> Napier.d("ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

---

## 5. Configuración básica

Para lanzar el componente actual, se deberá crear un objeto _PhingersConfigurationData_ 
que será la configuración del controlador del componente.

La configuración básica necesaria para es la siguiente:

```java
PhingersConfigurationData(
  reticleOrientation = CaptureOrientation.LEFT,
  fingerFilter = FingerFilter.SLAP,
)
```

Las diferentes orientaciones son:

- CaptureOrientation.LEFT
- CaptureOrientation.RIGHT

Los diferentes filtros son:

- FingerFilter.SLAP,
- FingerFilter.ALL_4_FINGERS_ONE_BY_ONE,
- FingerFilter.ALL_5_FINGERS_ONE_BY_ONE,
- FingerFilter.INDEX_FINGER,
- FingerFilter.MIDDLE_FINGER,
- FingerFilter.RING_FINGER,
- FingerFilter.LITTLE_FINGER,
- FingerFilter.THUMB_FINGER,

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

Los errores se devolverán como un objeto 'PhingersError'.

Listado de errores:

- PHG_ACTIVITY_RESULT_ERROR: El resultado de la actividad es incorrecto.
- PHG_ACTIVITY_RESULT_MSG_ERROR: El resultado de la actividad en el msg es incorrecto.
- PHG_APPLICATION_CONTEXT_ERROR: El contexto de aplicación necesario es nulo.
- PHG_CANCEL_BY_USER: El usuario ha cancelado el proceso.
- PHG_CANCEL_LAUNCH: Se ha hecho una cancelación general del SDK.
- PHG_COMPONENT_LICENSE_ERROR: La licencia del componente no es correcta.
- PHG_EMPTY_LICENSE: El String de licencia está vacío.
- PHG_FETCH_DATA_ERROR: Error en la recogida del resultado.
- PHG_FLOW_ERROR: Error en el proceso de flow.
- PHG_INITIALIZATION_ERROR: Error de inicialización.
- PHG_INTERNAL_ERROR: Error interno.
- PHG_LOW_QUALITY: Baja calidad de la imagen.
- PHG_MANAGER_NOT_INITIALIZED: Los managers son nulos.
- PHG_OPERATION_NOT_CREATED: No hay ninguna operación en curso.
- PHG_PERMISSION_DENIED: El usuario ha rechazado los permisos.
- PHG_PHINGERS_AUTOFOCUS_FAILURE: Fallo del autofocus.
- PHG_PHINGERS_CAMERA_FAILURE: Fallo de la cámara.
- PHG_PHINGERS_CAPTURE_FAILURE: Fallo en la captura de la imagen.
- PHG_PHINGERS_CONFIGURATION_FAILURE: Error de configuración.
- PHG_PHINGERS_FINGERPRINT_CAPTURE_FAILURE: Fallo en la captura de huellas.
- PHG_PHINGERS_FINGERPRINT_TEMPLATE_IO_ERROR: Fallo IO
- PHG_PHINGERS_LICENSING_FAILURE: Error de licencia
- PHG_PHINGERS_LIVENESS_FAILURE: Error en la prueba de vida
- PHG_PHINGERS_NO_FINGERS_DETECTED: Error en la detección de huellas
- PHG_PHINGERS_UNIQUE_USER_ID_NOT_SPECIFIED: Usuario no especificado.
- PHG_TIMEOUT: Timeout en el proceso.

### 6.2. Recepción del resultado correcto - _data_

En la parte de _data_, dispondremos de la clase _PhingersResult_.

El resultado devuelve las imágenes en formato **SdkImage**, es posible 
extraer el bitmap accediendo a _image.bitmap_. Si se quisiera convertir a base64 
se puede utilizar la función:

`Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)`

Los campos devueltos en el resultado son los siguientes:

#### 6.2.1. _rawFingerprintImage_

Devuelve la imagen de la huella actual en crudo, sin modificar.

#### 6.2.2. _processedFingerprintImage_

Devuelve la imagen de la huella procesada.

#### 6.2.3. _wsq_

Se devuelve la captura de huella en formato WSQ.

#### 6.2.4. _fingerprintTemplate_

Devuelve la plantilla en bruto que se genera después del proceso de
extracción. Válida para el proceso de AUTHENTICATION.

#### 6.2.5. _nfiqMetrics_

Son las métricas de la captura. Actualmente se devuelve el siguiente
valor:

- nfiqMetric: Es un valor entero, entre 1 y 5 (ambos inclusive), que
  indica la calidad de la captura de huella, siendo 1 el valor que
  indica la calidad más alta y 5 la peor calidad. Las huellas con este
  último valor suelen ser descartadas para posteriores validaciones.

#### 6.2.6 _fullFrameImage_

Devuelve una imagen recortada centrada en la cara del usuarioen formato
string Base64. Esta imagen se obtiene a partir de la _bestImage_. Ésta
es la imagen que se deberá utilizar como imagen característica del
usuario que realizó el proceso a modo de _avatar_.

#### 6.2.7 _focusQuality_

Devuelve la mejor imagen extraída del proceso de autenticación en
formato string Base64. Esta imagen es la imagen con el tamaño original
extraída de la cámara. Válido para el proceso de **liveness**.

#### 6.2.8 _livenessConfidence_

Devuelve un indicador del nivel de confianza de la captura.

---

## 7. Información avanzada

Este apartado amplía la información del componente.

### 7.1  Configuración avanzada del componente

Para lanzar el componente actual, se deberá crear un objeto _PhingersConfigurationData_ 
que será la configuración del controlador del componente.

A continuación se detallan todos los campos que forman parte de esta clase.

#### 7.1.1. reticleOrientation

Establece el modo de detección de huellas e indica qué dedos se van a
detectar durante el proceso. Los valores permitidos son:

- **LEFT**: Se activa la captura de los **cuatro dedos de la mano
  izquierda**.

- **RIGHT**: Se activa la captura de los **cuatro dedos de la mano
  izquierda**.

#### 7.1.2. useFlash

Activa o desactiva el flash de la cámara durante el proceso de captura
de huellas. Por defecto se encuentra a **true**.

#### 7.1.3. returnProcessedImage

Si se establece a **true** se devolverá en el resultado las imágenes procesadas.

#### 7.1.4. returnRawImage

Si se establece a **true** se devolverá en el resultado las imágenes de
la misma forma en que se han capturado.

#### 7.1.5. useLiveness

Activa o desactiva el detector de vivacidad durante el proceso de
captura de huellas. Por defecto se encuentra a **true**.

#### 7.1.6. returnFullFrameImage

Especifica si se debe devolver la imagen completa de la cámara en la que
se han detectado los dedos.

#### 7.1.7. extractionTimeout

Establece un tiempo de extracción.

#### 7.1.8. showTutorial

Indica si el componente activa la pantalla de tutorial. En esta vista se
explica de forma intuitiva cómo se realiza la captura.

#### 7.1.9. threshold

El parámetro configura un captureQualityThreshold, para definir un
threshold de calidad para realizar la captura.

#### 7.1.10. showSpinner

Indica si se quiere mostrar el spinner de carga.

#### 7.1.11. cropWidth

Indica un ancho para realizar un recorte de la captura.

#### 7.1.12. cropHeight

Indica una altura para realizar un recorte de la captura.

#### 7.1.13. cropFactor

Indica la relación para el recorte de la captura.

#### 7.1.14. showDiagnostic

Mostrar pantallas de diagnóstico al final del proceso

#### 7.1.15. showPreviousTip

Muestra una pantalla previa al lanzamiento de la captura con información sobre el proceso a realizar y un botón para el lanzamiento.

#### 7.1.16. fingerFilter

Filtro para elegir la mano entera o un dedo en concreto: SLAP, INDEX_FINGER, MIDDLE_FINGER, RING_FINGER, LITTLE_FINGER, THUMB_FINGER.

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
    <string name="phingers_component_tip_left_title">Huellas mano izquierda</string>
    <string name="phingers_component_tip_right_title">Huellas mano derecha</string>
    <string name="phingers_component_tip_thumb_title">Huella pulgar</string>
    <string name="phingers_component_tip_message">Junta tus dedos. Acerca o aleja la mano hasta que se enfoquen tus huellas.</string>
    <string name="phingers_component_tip_thumb_message">Enfoca el pulgar dentro del círculo. Acerca o aleja el dedo hasta que se enfoque tu huella.</string>
    <string name="phingers_component_tip_button">Comenzar</string>
    <!-- Process -->
    <string name="phingers_component_capture_phingers">Mantenga los dedos firmes</string>
    <string name="phingers_component_capture_thumb">Mantenga el dedo firme</string>
    <string name="phingers_component_capture_phingers_not_focus">Mueva los dedos hasta que estén enfocados</string>
    <string name="phingers_component_capture_thumb_not_focus">Mueva el dedo hasta que esté enfocado</string>
    <!-- Diagnostic -->
    <string name="phingers_component_timeout_title">Tiempo superado</string>
    <string name="phingers_component_timeout_desc">Pedimos disculpas. No se ha podido hacer la captura</string>
    <string name="phingers_component_internal_error_title">Hubo un problema técnico</string>
    <string name="phingers_component_internal_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>

```

### 8.2. Animaciones

Si se desea modificar las animaciones (lottie) de la SDK habría que incluir las animaciones con el mismo nombre en la carpeta res/raw/ de la aplicación.

```text
phingers_anim_left.json
phingers_anim_right.json
phingers_anim_thumb.json
```

### 8.3 Vistas externas

Es posible modificar completamente las pantallas del componente manteniendo su funcionalidad y navegación. Para ello deben implementarse los interfaces siguientes:

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

Una vez creadas las clases que implementan los interfaces, en el lanzamiento del componente se podrá añadir el parámetro "customViews" para que se utilicen en el SDK.

---

## 9. Logs

Para visualizar en consola los logs de este componente se podrá usar el filtro: "PHINGERS:"

---

