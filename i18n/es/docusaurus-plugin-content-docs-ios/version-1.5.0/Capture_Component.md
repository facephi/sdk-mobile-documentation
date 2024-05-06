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

Para más información sobre la configuración base, vaya a la sección de <a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">Mobile SDK</a>.

---

## 1. Introducción

El _Componente_ tratado en el documento actual recibe el nombre de
**_Capture Component_**. Éste se encarga de realizar la captura de facturas y la captura y generación de QRs.

### 1.1 Requisitos mínimos
La versión mínima de la SDK de iOS requerida es la siguiente:

Versión mínima de iOS: **13**

---

## 2. Integración del componente

Antes de integrar este componente se recomienda leer la documentación
relativa a: 
<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">Mobile SDK</a> y seguir las instrucciones indicadas en dicho documento.

En esta sección se explicará paso a paso cómo integrar el componente
actual en un proyecto ya existente.

### 2.1. Dependencias requeridas para la integración

Para evitar conflictos y problemas de compatibilidad, en caso de querer
instalar el componente en un proyecto que contenga una versión antigua
de las librerías de Facephi (_Widgets_), éstos deberán eliminarse por
completo antes de la instalación de los componentes de la
**_SDKMobile_**.

#### Cocoapods
- Actualmente las librerías de FacePhi se distribuyen de forma remota a través de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias **obligatorias** que deberán haberse instalado previamente (añadiéndolas en el fichero Podfile del proyecto) son:


```
  pod 'FPHISDKMainComponent', '~> 1.5.0'
```
- Para instalar el componente de Capture deberá incluirse la siguiente entrada en el Podfile de la aplicación:
```
  pod 'FPHISDKCaptureComponent', '~> 1.5.0'
```
- Una vez instaladas las dependencias, se podrá hacer uso de las diferentes funcionalidades del componente.

- En caso de realizar el desarrollo con **xCode15** se deberá incluir un script de post-instalacion:

![Image](/iOS/fix_ldClassic.png)

### 2.2 Permisos y configuraciones
En la aplicación cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero info.plist
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
consultar la documentación de <a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">Mobile SDK</a>, en el que se detalla y explica en qué consiste
este proceso.

---

## 4. Controladores disponibles

| **Controlador**            | **Descripción**                                    |
| -------------------------- | -------------------------------------------------- |
| InvoiceReaderController  | Controlador para la captura de facturas      |
| QrReaderController | Controlador para la captura de QRs |
| QrGeneratorController | Controlador para la generación de QRs |

---

## 5. Configuración del componente

Para configurar el componente actual, una vez inicializado, se deberá
crear un objeto _CaptureConfigurationData_ y pasarlo como parámetro al SDKController durante el lanzamiento del componente para capturas.

_QrGeneratorConfiguration_ y pasarlo como parámetro al SDKController
durante el lanzamiento del componente para generación de QRs.

En el siguiente apartado se mostrarán los campos que forman parte de
estas clased y para qué se utiliza cada uno de ellos.

### 5.1. Class CaptureConfigurationData
#### 5.1.1 Configuración Básica

##### cameraSelected
Cámara seleccionada: FRONT, BACK

##### vibrationEnabled
Habilitar vibración durante el proceso

##### cameraShape
Forma de la máscara que se quiere mostrar sobre la cámara: 
- SQUARE: Cuadrado 
- CIRCULAR: Círculo
- RECTANGLE_TALL: Rectángulo

##### showDiagnostic
Mostrar pantallas de diagnóstico al final del proceso

##### extractionTimeout
Tiempo de extracción máximo


#### 5.1.2 Configuración Avanzada

##### showStroke
Mostrar una línea como borde de la cámara

##### transparentBackground
Máscara sobre la cámara semitransparente

### 5.2. Class QrGeneratorConfiguration

##### source
Texto que se va a incluir en el QR

##### width
Ancho del QR generado

##### height
Alto del QR generado

---

## 6. Uso del componente

### 6.1 Captura de factura

Una vez iniciado el componente y creada una nueva operación (**apartado
3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero sí se trackearán los eventos
  internos al servidor de _tracking_:

```java
   let controller = InvoiceReaderController(output: output, viewController: viewController)
   SDKController.shared.launch(controller: controller)
)
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
   let controller = InvoiceReaderController(output: output, viewController: viewController)
   SDKController.shared.launchMethod(controller: controller)
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

### 6.2 Captura de QR

Una vez iniciado el componente y creada una nueva operación (**apartado
3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero sí se trackearán los eventos
  internos al servidor de _tracking_:

```java
        let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)
        SDKController.shared.launch(controller: controller)
)
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
        let controller = QrReaderController(data: qrReaderConfigurationData, output: output, viewController: viewController)
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

### 6.3 Generación de QR

Una vez iniciado el componente y creada una nueva operación (**apartado
3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero sí se trackearán los eventos
  internos al servidor de _tracking_:

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
SdkResult. Más información en la sección de <a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">Mobile SDK</a>
  
### 7.1. Recepción de errores

```java
NO_OPERATION_CREATED_ERROR
CAMERA_PERMISSION_DENIED
CANCEL_BY_USER
TIMEOUT
INTERNAL_ERROR
```

### 7.2. Recepción de ejecución correcta - _data_

En la ejecución correcta, simplemente se informa de que todo ha ido bien
con el SdkResult.Success.

---

## 8. Personalización del componente
### 8.1. Textos

```java
"qr_reader_component_exit_alert_question"="Are you sure you will finish the process?";
"qr_reader_component_camera_message_circle"="Keep the QR inside the circle";
"qr_reader_component_camera_message_square"="Keep the QR inside the square";
"invoice_reader_component_camera_message_circle"="Keep the document inside the circle";
"invoice_reader_component_camera_message_square"="Keep the document inside the square";
"capture_component_camera_unauthorized_title"="Camara unauthorized";
"capture_component_camera_unauthorized_description"="It seems you haven't given this app permission to use the camera. Please go to Settings and enable it.";
"capture_component_image_capture_error"="Image capture error";
"capture_component_preview_image"="Captured image preview";
"capture_component_take_again"="Capture again";
"capture_component_accept"="Accept";
"capture_component_capture"="Capture";
"capture_component_ok"="Ok";
"capture_component_cancel"="Cancel";
"capture_component_end_confirmation_title" = "Are you sure you will finish the process?";
"capture_component_text_results_finish_button" = "Finish";
"capture_component_agree" = "Accept";

```
