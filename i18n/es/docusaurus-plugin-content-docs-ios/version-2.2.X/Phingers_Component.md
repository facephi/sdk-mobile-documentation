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
[Primeros Pasos](./Mobile_SDK#11-requisitos-mínimos).


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

### 1.1 Requisitos mínimos
La versión mínima de la SDK de iOS requerida es la siguiente:

Versión mínima de iOS: **13**

---

## 2. Integración del componente

<div class="warning">
<span class="warning">:warning:</span>
Antes de integrar este componente se recomienda leer la documentación de [Integración](./Mobile_SDK#2-integración-inicial) y seguir las instrucciones indicadas en dicho documento.
</div>
En esta sección se explicará paso a paso cómo integrar el componente
actual en un proyecto ya existente.

### 2.1. Dependencias requeridas para la integración

Para evitar conflictos y problemas de compatibilidad, en caso de querer instalar el componente en un proyecto que contenga una versión antigua de las librerías de Facephi (*Widgets*), éstos deberán eliminarse por completo antes de la instalación de los componentes de la **SDKMobile**.

Actualmente las librerías de FacePhi se distribuyen de forma remota a través de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias **obligatorias** que deberán haberse instalado previamente (añadiéndolas en el fichero *Podfile* del proyecto) son:
```java
  pod 'FPHISDKMainComponent', '~> 2.2.0'
```
- Para instalar el componente actual deberá incluirse la siguiente entrada en el Podfile de la aplicación:
```java
pod 'FPHISDKPhingersComponent', '~> 2.2.0'
```
- Una vez instaladas las dependencias, se podrá hacer uso de las diferentes funcionalidades del componente.

### 2.2 Permisos y configuraciones
En la aplicación cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero **info.plist**
```
Es necesario permitir el uso de la cámara (Privacy - Camera Usage Description)
```

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la
información asociada correctamente en la plataforma deberá ejecutarse
previamente el comando **newOperation**.

Este comando debe haberse ejecutado **anteriormente al lanzamiento del
componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda
consultar la documentación de [Primeros Pasos](./Mobile_SDK#4-iniciar-nueva-operación), en el que se detalla y explica en qué consiste
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

#### 5.1.1. Configuración Básica

##### showTutorial
Indica si el componente activa la pantalla de tutorial. En esta vista se
explica de forma intuitiva cómo se realiza la captura.

##### VibrationEnabled
Si se le da valor true, se activa la vibración en errores y si la respuesta del widget es OK

##### reticleOrientation

Establece el modo de detección de huellas e indica qué dedos se van a
detectar durante el proceso. Los valores permitidos son:

- **LEFT**: Se activa la captura de los **cuatro dedos de la mano
  izquierda**.

- **RIGHT**: Se activa la captura de los **cuatro dedos de la mano
  izquierda**.

- **THUMB**: Se activa la captura de **un pulgar**.

##### extractionTimeout
Establece el tiempo máximo que se puede realizar la lectura.

##### useFlash
Activa o desactiva el flash de la cámara durante el proceso de captura
de huellas. Por defecto se encuentra a **true**.

##### showDiagnostic
Mostrar pantallas de diagnóstico al final del proceso


#### 5.1.2. Configuración Avanzada

##### returnProcessedImage
Si se establece a **true** se devolverá en el resultado las imágenes de
la misma forma en que se han capturado.

##### returnRawImage
Si se establece a **true** se devolverá en el resultado las imágenes de
la misma forma en que se han capturado.

##### useLiveness
Activa o desactiva el detector de vivacidad durante el proceso de
captura de huellas. Por defecto se encuentra a **true**.

##### returnFullFrameImage
Especifica si se debe devolver la imagen completa de la cámara en la que
se han detectado los dedos.

#### showSpinner
Indica si se quiere mostrar el spinner de carga.

##### cropWidth
Indica un ancho para realizar un recorte de la captura.

##### cropHeight
Indica una altura para realizar un recorte de la captura.

##### cropFactor
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
let controller = PhingersController(data: phingersConfigurationData, output: output, viewController: viewController)
SDKController.shared.launchMethod(controller: controller)
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
let controller = PhingersController(data: phingersConfigurationData, output: output, viewController: viewController)
SDKController.shared.launch(controller: controller)
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

Los controllers devolverán la información necesaria en formato SdkResult. 
Más información en la sección de [Retorno de Resultado](./Mobile_SDK#6-result-return).

### 7.1. Recepción de errores

```java
NO_OPERATION_CREATED_ERROR
COMPONENT_CONTROLLER_DATA_ERROR
CAMERA_PERMISSION_DENIED
LICENSE_CHECKER_ERROR_INVALID_COMPONENT_LICENSE
ERROR_CAPTURE_SUCCESS_WITHOUT_RESULT
CAMERA_PERMISSION_DENIED
CANCEL_BY_USER
TIMEOUT
```

### 7.2. Recepción de ejecución correcta - _data_

En la parte de _data_, dispondremos de la clase _PhingersResult_.

El campo _data_ es variable y dependerá de qué componente se ha devuelto
el resultado. En el caso de este componente, los campos devueltos son
los siguientes:

#### 7.2.1 _fingersResult_

##### 7.2.1.1 _fullFrameImage_
Devuelve una imagen recortada centrada en la cara del usuarioen formato
string Base64. Esta imagen se obtiene a partir de la _bestImage_. Ésta
es la imagen que se deberá utilizar como imagen característica del
usuario que realizó el proceso a modo de _avatar_.

#### 7.2.1.2 _focusQuality_
Devuelve la mejor imagen extraída del proceso de autenticación en
formato string Base64. Esta imagen es la imagen con el tamaño original
extraída de la cámara. Válido para el proceso de **liveness**.

#### 7.2.1.3 _livenessConfidence_
Devuelve un indicador del nivel de confianza de la captura.

##### 7.2.1.4. rawFingerprintImage

Devuelve el array de las imagenes de la huella actual en crudo, sin modificar.

##### 7.2.1.5. processedFingerprintImage

Devuelve el array de las imagenes de la huella procesada.

##### 7.2.1.6. wsqDataArray

Se devuelve el array de las capturas de huella en formato WSQ.

##### 7.2.1.7. fingerprintTemplate

Devuelve la plantilla en bruto que se genera después del proceso de
extracción. Válida para el proceso de AUTHENTICATION.

##### 7.2.1.8. nfiqMetrics

Son las métricas de la captura. Actualmente se devuelve el siguiente
valor:

- nfiqMetric: Es un valor entero, entre 1 y 5 (ambos inclusive), que
  indica la calidad de la captura de huella, siendo 1 el valor que
  indica la calidad más alta y 5 la peor calidad. Las huellas con este
  último valor suelen ser descartadas para posteriores validaciones.

---

## 8. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales se explican en el documento de Core Component), este componente en concreto permite la modificación de textos específicos.

### 8.1 Textos
```
<!-- PHINGERS -->
"phingers_component_tutorial_title_left" = "Huellas mano izquierda.";
"phingers_component_tutorial_title_right" = "Huellas mano derecha.";
"phingers_component_tutorial_title_thumb" = "Huellas dedo pulgar.";
"phingers_component_action_text" = "Comenzar";
"phingers_component_tutorial_description" = "Junta tus dedos. Acerca o aleja la mano hasta que se enfoquen tus huellas.";
"phingers_component_capture_phingers" = "Mantenga los dedos firmes";
"phingers_component_capture_thumb" = "Mantenga el dedo firme";
"phingers_component_capture_phingers_not_focus" = "Mueva los dedos hasta que estén enfocados";
"phingers_component_capture_thumb_not_focus" = "Mueva el dedo hasta que esté enfocado";
"phingers_component_ok"="Ok";
"phingers_component_cancel"="Cancel";
"phingers_component_end_confirmation_title" = "¿Seguro que finalizar el proceso?";
"phingers_component_text_results_finish_button" = "Finalizar";
"phingers_component_agree" = "Aceptar";
```