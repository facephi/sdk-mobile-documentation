# Phingers Component

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
consultar la documentación de <a href="ES_Android_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page"><strong><u>Android Mobile
SDK</u></strong></a>, en el que se detalla y explica en qué consiste
este proceso.

---

## 4. Controladores disponibles

|                    |                                             |
| ------------------ | ------------------------------------------- |
| **Controlador**    | **Descripción**                             |
| PhingersController | Controlador principal de captura de huellas |

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

- **THUMB**: Se activa la captura de **un pulgar**.

#### 5.1.2. useFlash

Activa o desactiva el flash de la cámara durante el proceso de captura
de huellas. Por defecto se encuentra a **true**.

#### 5.1.3. returnProcessedImage

Si se establece a **true** se devolverá en el resultado las imágenes de
la misma forma en que se han capturado.

#### 5.1.4. returnRawImage

Si se establece a **true** se devolverá en el resultado las imágenes de
la misma forma en que se han capturado.

#### 5.1.5. useLiveness

Activa o desactiva el detector de vivacidad durante el proceso de
captura de huellas. Por defecto se encuentra a **true**.

#### 5.1.6. returnWSQ

Si se establece a **true** entonces en el resultado de la captura se
devolverá, para cada una de las huellas, el dato comprimido mediante
_Wavelet Scalar Quatization_ (WSQ). WSQ es un algortimo de compresión en
grises, siendo un estándar (NIST) para este tipo de capturas. Orientado
a la validación contra las diferentes bases de datos gubernamentales
existentes.

#### 5.1.7. returnFullFrameImage

Especifica si se debe devolver la imagen completa de la cámara en la que
se han detectado los dedos.

#### 5.1.8. extractionTimeout

Establece un modo de estabilización previo a cualquier proceso de
autenticación en el widget. Con este modo se obliga al widget a no
empezar ningún proceso si el usuario no se encuentra con la cabeza
mirando al frente y sin moverla.

#### 5.1.9. showTutorial

Indica si el componente activa la pantalla de tutorial. En esta vista se
explica de forma intuitiva cómo se realiza la captura.

#### 5.1.10. threshold

El parámetro configura un captureQualityThreshold, para definir un
threshold de calidad para realizar la captura.

#### 5.1.11. showSpinner

Indica si se quiere mostrar el spinner de carga.

#### 5.1.12. cropWidth

Indica un ancho para realizar un recorte de la captura.

#### 5.1.13. cropHeight

Indica una altura para realizar un recorte de la captura.

#### 5.1.14. cropFactor

Indica la relación para el recorte de la captura.

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
    PhingersController(PhingersConfigurationData()) {
        when (it) {
            is SdkResult.Error -> Napier.d("Phingers: KO - ${it.error.javaClass.simpleName}")
            is SdkResult.Success -> Napier.d("Phingers OK: ${it.data}")
        }
    }
)
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
SDKController.launchMethod(
    PhingersController(PhingersConfigurationData()) {
        when (it) {
            is SdkResult.Error -> Napier.d("Phingers: KO - ${it.error.javaClass.simpleName}")
            is SdkResult.Success -> Napier.d("Phingers OK: ${it.data}")
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

En la parte del error, dispondremos de la clase PhingersError.

```java
val message = when(it.error){
    PhingersError.ACTIVITY_RESULT_ERROR -> "ACTIVITY_RESULT_ERROR"
    PhingersError.CANCEL_BY_USER -> "CANCEL_BY_USER"
    is PhingersError.INITIALIZATION_ERROR -> "INITIALIZATION_ERROR: ${(it.error as PhingersError.INITIALIZATION_ERROR).error}"
    PhingersError.LOW_QUALITY -> "LOW_QUALITY"
    PhingersError.NO_ERROR -> "NO_ERROR"
    PhingersError.PERMISSION_DENIED -> "PERMISSION_DENIED"
    PhingersError.PHINGERS_AUTOFOCUS_FAILURE -> "PHINGERS_AUTOFOCUS_FAILURE"
    PhingersError.PHINGERS_CAMERA_FAILURE -> "PHINGERS_CAMERA_FAILURE"
    PhingersError.PHINGERS_CAPTURE_FAILURE -> "PHINGERS_CAPTURE_FAILURE"
    PhingersError.PHINGERS_CONFIGURATION_FAILURE -> "PHINGERS_CONFIGURATION_FAILURE"
    PhingersError.PHINGERS_FINGERPRINT_CAPTURE_FAILURE -> "PHINGERS_FINGERPRINT_CAPTURE_FAILURE"
    PhingersError.PHINGERS_FINGERPRINT_TEMPLATE_IO_ERROR -> "PHINGERS_FINGERPRINT_TEMPLATE_IO_ERROR"
    PhingersError.PHINGERS_LICENSING_FAILURE -> "PHINGERS_LICENSING_FAILURE"
    PhingersError.PHINGERS_LIVENESS_FAILURE -> "PHINGERS_LIVENESS_FAILURE"
    PhingersError.PHINGERS_NO_FINGERS_DETECTED -> "PHINGERS_NO_FINGERS_DETECTED"
    PhingersError.PHINGERS_UNIQUE_USER_ID_NOT_SPECIFIED -> "PHINGERS_UNIQUE_USER_ID_NOT_SPECIFIED"
    PhingersError.TIMEOUT -> "TIMEOUT"
}
```

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

Devuelve la mejor imagen extraída del proceso de autenticación en
formato Bitmap. Esta imagen es la imagen con el tamaño original extraída
de la cámara. Válido para el proceso de **liveness**.

---

## 8. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de <a href="ES_Android_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page"><strong><u>Android Mobile
SDK</u></strong></a>), este componente en concreto permite la
modificación de textos específicos.

### 8.1 Textos

Si se desea modificar los textos de la SDK habría que incluir el
siguiente fichero XML en la aplicación del cliente, y modificar el valor
de cada _String_ por el deseado.

```java
<!-- PHINGERS -->
    <string name="phingers_component_tutorial_left_message">Prepare your left hand for the catch</string>
    <string name="phingers_component_tutorial_left_title">Prepare your left hand for the catch</string>
    <string name="phingers_component_turorial_right_message">Prepare your right hand for capture</string>
    <string name="phingers_component_tutorial_right_title">Prepare your right hand for capture</string>
    <string name="phingers_component_tutorial_button">Take fingerprints</string>
    <string name="phingers_component_capture_phingers">Hold fingers steady</string>
    <string name="phingers_component_capture_thumb">Hold finger steady</string>
    <string name="phingers_component_capture_phingers_not_focus">Move fingers until in focus</string>
    <string name="phingers_component_capture_thumb_not_focus">Move finger until in focus</string> 
```
