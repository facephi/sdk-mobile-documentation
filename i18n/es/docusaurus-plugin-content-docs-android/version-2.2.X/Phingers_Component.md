# Phingers Component

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
**_Phingers Component_**. Éste se encarga de realizar la captura de las
huellas de los dedos (fingerprints) del usuario y la posterior
extracción de las plantillas de las huellas posteriores. Sus principales
funcionalidades son las siguientes:

- Dos modos de funcionamiento: extracción de los cuatro dedos de la
  mano (excepto el pulgar), o extracción únicamente del pulgar.

- Gestión interna de cámara.

- Gestión de permisos.

- Detección de vivacidad incorporada.

- Asistente en los procesos de captura de las huellas.

- Generación de las plantillas con las características de las huellas,
  imágenes y puntuaciones.

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
  implementation "com.facephi.androidsdk:phingers_component:$sdk_phingers_component_version"
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

| **Controlador**    | **Descripción**                             |
| ------------------ | ------------------------------------------- |
| PhingersController | Controlador principal de captura de huellas |

---

## 5. Configuración del componente

Para configurar el componente actual, una vez inicializado, se deberá
crear un objeto

_PhingersConfigurationData_ y pasarlo como parámetro al SDKController
durante el lanzamiento del componente.

En el siguiente apartado se mostrarán los campos que forman parte de
esta clase y para qué se utiliza cada uno de ellos.

### 5.1. Class PhingersConfigurationData

#### 5.1.1. reticleOrientation

Establece el modo de detección de huellas e indica qué dedos se van a
detectar durante el proceso. Los valores permitidos son:

- **LEFT**: Se activa la captura de los **cuatro dedos de la mano
  izquierda**.

- **RIGHT**: Se activa la captura de los **cuatro dedos de la mano
  izquierda**.

#### 5.1.2. useFlash

Activa o desactiva el flash de la cámara durante el proceso de captura
de huellas. Por defecto se encuentra a **true**.

#### 5.1.3. returnProcessedImage

Si se establece a **true** se devolverá en el resultado las imágenes procesadas.

#### 5.1.4. returnRawImage

Si se establece a **true** se devolverá en el resultado las imágenes de
la misma forma en que se han capturado.

#### 5.1.5. useLiveness

Activa o desactiva el detector de vivacidad durante el proceso de
captura de huellas. Por defecto se encuentra a **true**.

#### 5.1.6. returnFullFrameImage

Especifica si se debe devolver la imagen completa de la cámara en la que
se han detectado los dedos.

#### 5.1.7. extractionTimeout

Establece un tiempo de extracción.

#### 5.1.8. showTutorial

Indica si el componente activa la pantalla de tutorial. En esta vista se
explica de forma intuitiva cómo se realiza la captura.

#### 5.1.9. threshold

El parámetro configura un captureQualityThreshold, para definir un
threshold de calidad para realizar la captura.

#### 5.1.10. showSpinner

Indica si se quiere mostrar el spinner de carga.

#### 5.1.11. cropWidth

Indica un ancho para realizar un recorte de la captura.

#### 5.1.12. cropHeight

Indica una altura para realizar un recorte de la captura.

#### 5.1.13. cropFactor

Indica la relación para el recorte de la captura.

#### 5.1.14. showDiagnostic

Mostrar pantallas de diagnóstico al final del proceso

#### 5.1.15. showPreviousTip

Muestra una pantalla previa al lanzamiento de la captura con información sobre el proceso a realizar y un botón para el lanzamiento.

#### 5.1.16. fingerFilter

Filtro para elegir la mano entera o un dedo en concreto: SLAP, INDEX_FINGER, MIDDLE_FINGER, RING_FINGER, LITTLE_FINGER, THUMB_FINGER.

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
    PhingersController(PhingersConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("Phingers: ERROR - ${result.error.name}")
    is SdkResult.Success -> Napier.d("Phingers OK: ${result.data}")
}
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
val result = SDKController.launchMethod(
    PhingersController(PhingersConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("Phingers: ERROR - ${result.error.name}")
    is SdkResult.Success -> Napier.d("Phingers OK: ${result.data}")
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

En la parte del error, dispondremos de la clase PhingersError.

Listado de errores:

- ACTIVITY_RESULT_ERROR: El resultado de la actividad es incorrecto.
- ACTIVITY_RESULT_MSG_ERROR: El resultado de la actividad en el msg es incorrecto.
- APPLICATION_CONTEXT_ERROR: El contexto de aplicación necesario es nulo.
- CANCEL_BY_USER: El usuario ha cancelado el proceso.
- CANCEL_LAUNCH: Se ha hecho una cancelación general del SDK.
- COMPONENT_LICENSE_ERROR: La licencia del componente no es correcta.
- EMPTY_LICENSE: El String de licencia está vacío.
- FETCH_DATA_ERROR: Error en la recogida del resultado.
- FLOW_ERROR: Error en el proceso de flow.
- INITIALIZATION_ERROR: Error de inicialización.
- INTERNAL_ERROR: Error interno.
- LOW_QUALITY: Baja calidad de la imagen.
- MANAGER_NOT_INITIALIZED: Los managers son nulos.
- OPERATION_NOT_CREATED: No hay ninguna operación en curso.
- PERMISSION_DENIED: El usuario ha rechazado los permisos.
- PHINGERS_AUTOFOCUS_FAILURE: Fallo del autofocus.
- PHINGERS_CAMERA_FAILURE: Fallo de la cámara.
- PHINGERS_CAPTURE_FAILURE: Fallo en la captura de la imagen.
- PHINGERS_CONFIGURATION_FAILURE: Error de configuración.
- PHINGERS_FINGERPRINT_CAPTURE_FAILURE: Fallo en la captura de huellas.
- PHINGERS_FINGERPRINT_TEMPLATE_IO_ERROR: Fallo IO
- PHINGERS_LICENSING_FAILURE: Error de licencia
- PHINGERS_LIVENESS_FAILURE: Error en la prueba de vida
- PHINGERS_NO_FINGERS_DETECTED: Error en la detección de huellas
- PHINGERS_UNIQUE_USER_ID_NOT_SPECIFIED: Usuario no especificado.
- TIMEOUT: Timeout en el proceso.

### 7.2. Recepción de ejecución correcta - _data_

En la parte de _data_, dispondremos de la clase _PhingersResult_.

El resultado devuelve las imágenes en formato **Bitmap**, es posible
convertir las imágenes a **Base64** de la siguiente manera:

`Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)`

El campo _data_ es variable y dependerá de qué componente se ha devuelto
el resultado. En el caso de este componente, los campos devueltos son
los siguientes:

#### 7.2.1 _fingersResult_

##### 7.2.1.1. rawFingerprintImage

Devuelve la imagen de la huella actual en crudo, sin modificar.

##### 7.2.1.2. processedFingerprintImage

Devuelve la imagen de la huella procesada.

##### 7.2.1.3. wsq

Se devuelve la captura de huella en formato WSQ.

##### 7.2.1.4. fingerprintTemplate

Devuelve la plantilla en bruto que se genera después del proceso de
extracción. Válida para el proceso de AUTHENTICATION.

##### 7.2.1.5. nfiqMetrics

Son las métricas de la captura. Actualmente se devuelve el siguiente
valor:

- nfiqMetric: Es un valor entero, entre 1 y 5 (ambos inclusive), que
  indica la calidad de la captura de huella, siendo 1 el valor que
  indica la calidad más alta y 5 la peor calidad. Las huellas con este
  último valor suelen ser descartadas para posteriores validaciones.

##### 7.2.2 _fullFrameImage_

Devuelve una imagen recortada centrada en la cara del usuarioen formato
string Base64. Esta imagen se obtiene a partir de la _bestImage_. Ésta
es la imagen que se deberá utilizar como imagen característica del
usuario que realizó el proceso a modo de _avatar_.

#### 7.2.3 _focusQuality_

Devuelve la mejor imagen extraída del proceso de autenticación en
formato string Base64. Esta imagen es la imagen con el tamaño original
extraída de la cámara. Válido para el proceso de **liveness**.

#### 7.2.4 _livenessConfidence_

Devuelve un indicador del nivel de confianza de la captura.

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
