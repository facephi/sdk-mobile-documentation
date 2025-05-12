# Capture Component

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
**_Capture Component_**. Éste se encarga de realizar la captura de facturas y la captura y generación de QRs.

## 1.1 Requisitos mínimos

La versión mínima de la SDK de iOS requerida es la siguiente:

## Versión mínima de iOS: **14**

## 2. Integración del componente

<div class="warning">
<span class="warning">:warning:</span>
Antes de integrar este componente se recomienda leer la documentación de [Integración Inicial](./Mobile_SDK#2-integración-inicial) y seguir las instrucciones indicadas en dicho documento.
</div>

En esta sección se explicará paso a paso cómo integrar el componente
actual en un proyecto ya existente.

### 2.1. Dependencias requeridas para la integración

<div class="warning">
<span class="warning">:warning:</span>
Para evitar conflictos y problemas de compatibilidad, en caso de querer
instalar el componente en un proyecto que contenga una versión antigua
de las librerías de Facephi (_Widgets_), éstos deberán eliminarse por
completo antes de la instalación de los componentes de la
**_SDKMobile_**.
</div>
#### Cocoapods
- Actualmente las librerías de FacePhi se distribuyen de forma remota a través de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias **obligatorias** que deberán haberse instalado previamente (añadiéndolas en el fichero Podfile del proyecto) son:

```
  pod 'FPHISDKMainComponent', '~> 2.2.0'
```

- Para instalar el componente de VideoID deberá incluirse la siguiente entrada en el Podfile de la aplicación:

```
	pod 'FPHISDKCaptureComponent', '~> 2.2.0'
```

- Una vez instaladas las dependencias, se podrá hacer uso de las diferentes funcionalidades del componente.

- En caso de realizar el desarrollo con **XCode15** se deberá incluir un script de post-instalacion:
  ![Image](/ios/fix_ldClassic.png)

## 2.2 Permisos y configuraciones

En la aplicación cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero **info.plist**

```
Es necesario permitir el uso de la cámara (Privacy - Camera Usage Description)
```

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la información asociada correctamente en la plataforma deberá ejecutarse previamente el comando **newOperation**.

<div class="note">
<span class="note">:information_source:</span>
Este comando debe haberse ejecutado **anteriormente al lanzamiento del componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda consultar la documentación de [Iniciar nueva operación](./Mobile_SDK#4-iniciar-nueva-operacion), en el que se detalla y explica en qué consiste este proceso.
</div>

---

## 4. Controladores disponibles

| **Controlador**         | **Descripción**                         |
| ----------------------- | --------------------------------------- |
| InvoiceReaderController | Controlador para la captura de facturas |
| QrReaderController      | Controlador para la captura de QRs      |
| QrGeneratorController   | Controlador para la generación de QRs   |

---

## 5. Configuración del componente

Los tres controladores tienen funcionalidades independientes por lo que sus configuraciones también lo son:

- _InvoiceCaptureConfigurationData_ y pasarlo como parámetro al SDKController durante el lanzamiento del componente para Invoice.

- _QrCaptureConfigurationData_ y pasarlo como parámetro al SDKController durante el lanzamiento del componente de captura de QR

- _QrGeneratorConfiguration_ y pasarlo como parámetro al SDKController durante el lanzamiento del componente para generación de QRs.

En el siguiente apartado se mostrarán los campos que forman parte de estas clased y para qué se utiliza cada uno de ellos.

### 5.1. Class InvoiceCaptureConfigurationData

#### 5.1.1 vibrationEnabled

Habilitar vibración durante el proceso

#### 5.1.2 showDiagnostic

Mostrar pantallas de diagnóstico al final del proceso y en caso de error

#### 5.1.3 showTutorial

Indica si el componente activa la pantalla de tutorial. En esta vista se explica de forma intuitiva cómo se realiza la captura.

#### 5.1.4 timePreview

Se define el tiempo en milisegundos que dura la preview tras la captura, por defecto está en 2000

#### 5.1.6 previewAfterCapture

Se habilita la preview tras la captura

#### 5.1.7 maxScannedDocs

Número máximo de documentos capturados

#### 5.1.8 showPreviousTip

Mostrar la pantalla de Tips previos

#### 5.1.9 autoCapture

Habilitar la captura automática


### 5.2. Class QrCaptureConfigurationData

#### 5.2.1. extractionTimeout

Tiempo de extracción máximo

#### 5.2.2. cameraSelected

Cámara seleccionada: FRONT, BACK

#### 5.2.3. cameraShape

Forma de la máscara que se quiere mostrar sobre la cámara:

- SQUARE: Cuadrado
- CIRCULAR: Círculo
- RECTANGLE_TALL: Rectángulo

#### 5.2.4. vibrationEnabled

Habilitar vibración durante el proceso

#### 5.2.5. showStroke

Mostrar una línea como borde de la cámara

#### 5.2.6. showDiagnostic

Mostrar pantallas de diagnóstico al final del proceso y en caso de error

#### 5.2.7. transparentBackground

Máscara sobre la cámara semitransparente

### 5.3. Class QrGeneratorConfiguration

#### 5.3.1. source

Texto que se va a incluir en el QR

#### 5.3.2. width

Ancho del QR generado

#### 5.3.3. height

Alto del QR generado

#### 5.3.4 showDiagnostic

Mostrar pantallas de diagnóstico al final del proceso y en caso de error

---

## 6. Uso del componente

### 6.1 Captura de factura

Una vez iniciado el componente y creada una nueva operación (**Apartado 3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, y **trackeando los eventos** internos al servidor de _tracking_:

```java
let controller = InvoiceReaderController(data: invoiceCaptureConfigurationData, output: output, viewController: viewController)
SDKController.shared.launch(controller: controller)
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
let controller = InvoiceReaderController(data: invoiceCaptureConfigurationData, output: output, viewController: viewController)
SDKController.shared.launchMethod(controller: controller)
```

<div class="warning">
<span class="warning">:warning:</span>
El método **launch** debe usarse **por defecto**. Este método permite
utilizar **_tracking_** en caso de estar su componente activado, y no lo
usará cuando esté desactivado (o no se encuentre el componente
instalado).

Por el contrario, el método **launchMethod** cubre un caso especial, en
el cual el integrador tiene instalado y activado el tracking, pero en un
flujo determinado dentro de la aplicación no desea trackear información.
En ese caso se usa este método para evitar que se envíe esa información
a la plataforma.

</div>

### 6.2 Captura de QR

Una vez iniciado el componente y creada una nueva operación (**Apartado 3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, y **trackeando los eventos** internos al servidor de _tracking_:

```java
  let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)

  SDKController.shared.launch(controller: controller)

```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
  let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)
  SDKController.shared.launchMethod(controller: controller)

```

<div class="warning">
<span class="warning">:warning:</span>
El método **launch** debe usarse **por defecto**. Este método permite
utilizar **_tracking_** en caso de estar su componente activado, y no lo
usará cuando esté desactivado (o no se encuentre el componente
instalado).

Por el contrario, el método **launchMethod** cubre un caso especial, en
el cual el integrador tiene instalado y activado el tracking, pero en un
flujo determinado dentro de la aplicación no desea trackear información.
En ese caso se usa este método para evitar que se envíe esa información
a la plataforma.

</div>

### 6.3 Generación de QR

Una vez iniciado el componente y creada una nueva operación (**Apartado 3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, y **trackeando los eventos** internos al servidor de _tracking_:

```java
  let controller = QrGeneratorController(data: qrGeneratorConfigurationData, output: output, viewController: viewController)
  SDKController.shared.launch(controller: controller)

```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
  let controller = QrGeneratorController(data: qrGeneratorConfigurationData, output: output, viewController: viewController)
  SDKController.shared.launchMethod(controller: controller)
```

<div class="warning">
<span class="warning">:warning:</span>
El método **launch** debe usarse **por defecto**. Este método permite
utilizar **_tracking_** en caso de estar su componente activado, y no lo
usará cuando esté desactivado (o no se encuentre el componente
instalado).

Por el contrario, el método **launchMethod** cubre un caso especial, en
el cual el integrador tiene instalado y activado el tracking, pero en un
flujo determinado dentro de la aplicación no desea trackear información.
En ese caso se usa este método para evitar que se envíe esa información
a la plataforma.

</div>

---

## 7. Recepción del resultado

Los controllers devolverán la información necesaria en formato SdkResult. Más información en la sección de [Retorno de Resultado](./Mobile_SDK#6-retorno-de-resultado).

### 7.1. Recepción de errores

En la parte del error, dispondremos de la clase _CaptureError_.

```java
 NO_DATA_ERROR
 TIMEOUT
 CANCEL_BY_USER
 CANCEL_LAUNCH
 CAMERA_ERROR
 QR_GENERATION_ERROR
 ACTIVITY_RESULT_ERROR
 QR_CAPTURE_ERROR
 PHACTURAS_CAPTURE_ERROR
 CAMERA_PERMISSION_DENIED
 INITIALIZATION_ERROR
```

### 7.2. Recepción de ejecución correcta - _data_

En la ejecución correcta, simplemente se informa de que todo ha ido bien
con el SdkResult.Success.

#### 7.2.1 Result InvoiceReader

##### ScannedDocs

Array de documentos escaneados:

- image: UIImage.

- date: Date.

---

## 8. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de <a href="ES_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page"><strong><u> Mobile
SDK</u></strong></a>), este componente en concreto permite la
modificación de textos específicos.

### 8.1. Textos

Si se desea modificar los textos de la SDK habría que incluir el
siguiente fichero XML en la aplicación del cliente, y modificar el valor
de cada _String_ por el deseado.

```java
"capture_component_qr_camera_message" = "Mantén el QR en el centro";
"capture_component_qr_tutorial_title" = "Escanea el código QR";
"capture_component_qr_tutorial_desc" = "Enfoca el código QR dentro del recuadro";
"capture_component_qr_tutorial_button_message" = "COMENZAR";
"capture_component_qr_tutorial_1" = "Asegúrate de que el código QR tiene luz suficiente y no hay reflejos o destellos sobre el código.";
"capture_component_qr_tutorial_2" = "Encaja los bordes del código QR dentro del recuadro. ";
"capture_component_invoice_tip_button_message" = "COMENZAR";
"capture_component_exit_alert_question" = "¿Seguro que quiere finalizar el proceso? ";
"capture_component_exit_alert_accept" = "Aceptar";
"capture_component_exit_alert_cancel" = "Cancelar";
"capture_component_invoice_finish_button_message" = "Finalizar";
"capture_component_invoice_preview_finish_button_message" = "FINALIZAR";
"capture_component_invoice_remove_question" = "¿Quieres eliminar este documento?";
"capture_component_invoice_image_count_label" = "Imagen";
"capture_component_invoice_retry_button_message" = "NO, QUIERO REPETIR LA FOTOGRAFÍA";
"capture_component_invoice_retry_add_image_message" = "AÑADIR NUEVA FOTOGRAFÍA";
"capture_component_invoice_tip_title" = "Escanea tus documentos";
"capture_component_invoice_tip_desc" = "Haz una foto al documento, o sube una imagen. \nPuedes escanear varios documentos antes de finalizar";
"capture_component_invoice_close_alt" = "Cerrar";
"capture_component_invoice_upload_alt" = "Subir foto";
"capture_component_invoice_capture_alt" = "Capturar";
"capture_component_invoice_remove_alt" = "Eliminar";
"capture_component_invoice_back_image_alt" = "Imagen anterior";
"capture_component_invoice_forward_image_alt" = "Siguiente imagen";
"capture_component_timeout_title"="Tiempo superado";
"capture_component_timeout_desc"="Pedimos disculpas. No se ha podido hacer la captura.";
```
