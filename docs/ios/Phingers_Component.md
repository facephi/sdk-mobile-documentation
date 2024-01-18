# Phingers Component

Este documento hace referencia la **versión 1.4.X** del componente

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

### 1.1 Requisitos mínimos

La versión mínima de la SDK de iOS requerida es la siguiente:

- Versión mínima de iOS: **13**

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
  a través de diferentes gestores de dependencias, en este caso
  Cocoapods. Las dependencias **obligatorias** que deberán haberse
  instalado previamente (añadiéndolas en el fichero *Podfile* del
  proyecto) son:

```java
  pod 'FPHISDKMainComponent', '~> 1.4.0'
```

- Para instalar el componente actual deberá incluirse la siguiente
  entrada en el *Podfile* de la aplicación:

  ```java
  pod 'FPHISDKPhingersComponent', '~> 1.4.0'
  ```

- Una vez instaladas las dependencias, se podrá hacer uso de las
  diferentes funcionalidades del componente.

### 2.2 Permisos y configuraciones

En la aplicación cliente donde se vayan a integrar los componentes es
necesario incorporar el siguiente elementos en el fichero **info.plist**

```java
Es necesario permitir el uso de la cámara (Privacy - Camera Usage Description)
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

## 4. Configuración del componente

Para configurar el componente actual, una vez inicializado, se deberá
crear un objeto _PhingersConfigurationData_ y pasarlo como parámetro al
SDKController durante el lanzamiento del componente.

En el siguiente apartado se mostrarán los campos que forman parte de
esta clase y para qué se utiliza cada uno de ellos.

### 4.1 Class PhingersConfigurationData

#### 4.1.1 reticleOrientation

Establece el modo de detección de huellas e indica qué dedos se van a
detectar durante el proceso. Los valores permitidos son:

- **LEFT**: Se activa la captura de los **cuatro dedos de la mano
  izquierda**.

- **RIGHT**: Se activa la captura de los **cuatro dedos de la mano
  izquierda**.

- **THUMB**: Se activa la captura de **un pulgar**.

#### 4.1.2 extractionTimeout

Establece un modo de estabilización previo a cualquier proceso de
autenticación en el widget. Con este modo se obliga al widget a no
empezar ningún proceso si el usuario no se encuentra con la cabeza
mirando al frente y sin moverla.

#### 4.1.3 returnWSQ

Si se establece a **true** entonces en el resultado de la captura se
devolverá, para cada una de las huellas, el dato comprimido mediante
_Wavelet Scalar Quatization_ (WSQ). WSQ es un algortimo de compresión en
grises, siendo un estándar (NIST) para este tipo de capturas. Orientado
a la validación contra las diferentes bases de datos gubernamentales
existentes.

#### 4.1.4 returnRawImage

Si se establece a **true** se devolverá en el resultado las imágenes de
la misma forma en que se han capturado.

#### 4.1.5 returnProcessedImage

Si se establece a **true** se devolverá en el resultado las imágenes de
la misma forma en que se han capturado.

#### 4.1.6 returnFingerprintTemplate

Especifica si el proceso de captura retornará el template de huellas en
el resultado. Es un enumerado del tipo **_FingerprintTemplateType_**, y
cada valor sería: \*\*

- **ISO**: Este tipo de plantilla se refiere al estándar **ISO/IEC
  19794-4**.

- **INNOVATRICS**: Este tipo de plantilla es una plantilla propietaria
  compatible con el cambio de escalado, y muy útil para los diferentes
  procesos de validación.

- **NONE**: Desactivado el retorno del template.

#### 4.1.7 returnFullFrameImage

Especifica si se debe devolver la imagen completa de la cámara en la que
se han detectado los dedos.

#### 4.1.8 useLiveness

Activa o desactiva el detector de vivacidad durante el proceso de
captura de huellas. Por defecto se encuentra a **true**.

#### 4.1.9 useFlash

Activa o desactiva el flash de la cámara durante el proceso de captura
de huellas. Por defecto se encuentra a **true**.

#### 4.1.10 captureFingersText

Establece el mensaje (string) que se muestra en pantalla una vez se han
detectado los cuatro dedos y debe indicarse al usuario que no los mueva.

#### 4.1.11 captureThumbText

Establece el mensaje (string) que se muestra en pantalla una vez se ha
detectado el dedo pulgar y debe indicarse al usuario que no lo mueva.

#### 4.1.12 thumbNotInFocusText

Establece el mensaje (string) que se muestra en pantalla mientras se
intenta

#### 4.1.13 captureFingerText

Establece el mensaje (string) que se muestra en pantalla durante el
proceso de captura del dedo pulgar.

---

## 5. Uso del componente

Una vez iniciado el componente y creada una nueva operación (**apartado
3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
let controller = PhingersController(data: phingersConfigurationData, output: output, viewController: viewController)
SDKController.shared.launch(controller: controller)
```



- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero sí se trackearán los eventos
  internos al servidor de _tracking_:

```java
let controller = PhingersController(data: phingersConfigurationData, output: output, viewController: viewController)
SDKController.shared.launchMethod(controller: controller)
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

## 6. Recepción del resultado.

El resultado es un objeto _SDKResult_ que devuelve el SDK tendrá siempre
3 campos:

_finishStatus:_ Que nos indicará si la operación ha finalizado
correctamente. Posibles valores:

```java
FinishStatus.STATUS_OK
FinishStatus.STATUS_ERROR
```

_errorType:_ Si el finishStatus indica que ha habido un error, este
campo tendrá la descripción del mismo:

```java
CANCEL_BY_USER: El usuario ha cancelado la operación
TIMEOUT: Ha finalizado el tiempo establecido sin que se termine correctamente el proceso.
COMPONENT_CONTROLLER_ERROR: No se ha inicializado correctamente el controlador. Revisar las funciones de init y setup.
COMPONENT_CONTROLLER_DATA_ERROR: Los datos de inicio o configuración del controlador no son correctos.
NETWORK_CONNECTION: Error de conexión a internet
UNKNOWN_ERROR: Error no gestionado
ACTIVITY_RESULT_ERROR: Error en el flujo de pantallas interno del controlador.
LOW_QUALITY: La imagen capturada no tiene la calidad suficiente.
NFC_ERROR: Error de lectura de NFC
QR_ERROR: Error de lectura de QR
NO_ERROR: No se ha producido ningún error
HARDWARE_ERROR: Error de hardware de los widgets de Selphi/SelphId
EXTRACTION_LICENSE_ERROR: Error de licenciade los widgets de Selphi/SelphId
UNEXPECTED_CAPTURE_ERROR: Error durante el proceso de captura de los widgets de Selphi/SelphId
CONTROL_NOT_INITIALIZATED_ERROR: Error interno de los widgets de Selphi/SelphId
BAD_EXTRACTOR_CONFIGURATION_ERROR: Error interno de los widgets de Selphi/SelphId
TOKEN_ERROR: Error en la petición del token para tracking
PHINGERS_ERROR_CAPTURE: Error de captura de huellas
LICENSING_ERROR_PACKAGE_NAME: Error de licencia que indica que el package name es incorrecto.
LICENSING_ERROR_APPID_INVALID: Error de licencia que indica que el APPID es incorrecto.
LICENSING_ERROR_APIKEY_FORBIDDEN: Error de licencia que indica que el APIKEY es incorrecto.
LICENSING_ERROR_LICENSE_NOT_FOUND: Error de licencia que indica que no se ha encontrado ninguna licencia.
```

_data:_ Tendrá los datos de respuesta de la función del componente
ejecutado. En el **apartado 7.1** se especifican los campos que se
incluyen en este componente.

### 6.1 Contenido del campo _data_

El resultado devuelve las imágenes en formato **Bitmap**, es posible
convertir las imágenes a **Base64** de la siguiente manera:

`Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)`

El campo _data_ es variable y dependerá de qué componente se ha devuelto
el resultado. En el caso de este componente, los campos devueltos son
los siguientes:

#### 6.1.1 _focusQuality_

Devuelve la mejor imagen extraída del proceso de autenticación en
formato string Base64. Esta imagen es la imagen con el tamaño original
extraída de la cámara. Válido para el proceso de **liveness**.

#### 6.1.2 _fullFrameImage_

Devuelve una imagen recortada centrada en la cara del usuarioen formato
string Base64. Esta imagen se obtiene a partir de la _bestImage_. Ésta
es la imagen que se deberá utilizar como imagen característica del
usuario que realizó el proceso a modo de _avatar_.

#### 6.1.3 _livenessConfidence_

Devuelve la mejor imagen extraída del proceso de autenticación en
formato Bitmap. Esta imagen es la imagen con el tamaño original extraída
de la cámara. Válido para el proceso de **liveness**.

#### 6.1.4 _fingersResult_

Es una lista de objetos **_FingerResult_**, que contiene toda la
información asociada a cada uno de los dedos capturados.

#### 6.1.4.1 wsq

Se devuelve la captura de huella en formato WSQ.

#### 6.1.4.2 fingerprintTemplate

Devuelve la plantilla de la huella, usada para posteriores validaciones.

#### 6.1.4.3 rawFingerprintImage

Devuelve la imagen de la huella actual en crudo, sin modificar.

#### 6.1.4.4 processedFingerprintImage

Devuelve la imagen de la huella procesada.

#### 6.1.4.5 nfiqMetrics

Son las métricas de la captura. Actualmente se devuelve el siguiente
valor:

- **nfiqMetric**: Es un valor entero, entre 1 y 5 (ambos inclusive),
  que indica la calidad de la captura de huella, siendo 1 el valor que
  indica la calidad más alta y 5 la peor calidad. Las huellas con este
  último valor suelen ser descartadas para posteriores validaciones.

---

## 7. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de **Core Component**), este componente en
concreto permite la modificación de textos específicos.

### 7.1 Textos

Si se desea modificar los textos de la SDK habría que incluir el
siguiente fichero XML en la aplicación del cliente, y modificar el valor
de cada _String_ por el deseado.

```java
<!-- PHINGERS -->
<string name="phingers_component_left_hand">Prepare your left hand for the catch</string>
<string name="phingers_component_right_hand">Prepare your right hand for capture</string>
<string name="phingers_component_action_text">Take fingerprints</string>
<string name="phingers_component_capture_phingers">Hold fingers steady</string>
<string name="phingers_component_capture_thumb">Hold finger steady</string>
<string name="phingers_component_capture_phingers_not_focus">Move fingers until in focus</string>
<string name="phingers_component_capture_thumb_not_focus">Move finger until in focus</string>
```



---
