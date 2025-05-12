# Selphi Component

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
**_Selphi Component_**. Éste se encarga de realizar la captura de un
selfie del usuario y la posterior extracción de las características
faciales más importantes. Sus principales funcionalidades son las
siguientes:

- Gestión interna de cámaras.

- Gestión de permisos.

- Asistente en los procesos de captura de la cara del usuario.

- Generación de las plantillas con las características faciales y de
  la imagen de la cara del usuario para el proceso de detección de
  vivacidad (Liveness)

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

Para evitar conflictos y problemas de compatibilidad, en caso de querer
instalar el componente en un proyecto que contenga una versión antigua
de las librerías de Facephi (_Widgets_), éstos deberán eliminarse por
completo antes de la instalación de los componentes de la
**_SDKMobile_**.

#### Cocoapods

- Actualmente las librerías de FacePhi se distribuyen de forma remota a través de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias **obligatorias** que deberán haberse instalado previamente (añadiéndolas en el fichero Podfile del proyecto) son:

```java
  pod 'FPHISDKMainComponent', '~> 2.2.0'
  pod 'zipzap'
```

- Para instalar el componente de Selphi deberá incluirse la siguiente entrada en el Podfile de la aplicación:

```java
  pod 'FPHISDKSelphiComponent', '~> 2.2.0'
```

- Una vez instaladas las dependencias, se podrá hacer uso de las diferentes funcionalidades del componente.

- En caso de realizar el desarrollo con **xCode15** se deberá incluir un script de post-instalacion:

![Image](/ios/fix_ldClassic.png)

#### SPM

- Las dependencias obligatorias que deberán haberse instalado previamente son:

```java
//HTTPS
https://github.com/facephi-clienters/SDK-SdkPackage-SPM.git
//SSH
git@github.com:facephi-clienters/SDK-SdkPackage-SPM.git
```

- Para instalar el componente de NFC deberá incluirse en los módulos del proyecto:

```java
//HTTPS
https://github.com/facephi-clienters/SDK-Selphi_component-SPM.git
//SSH
git@github.com:facephi-clienters/SDK-Selphi_component-SPM.git
```

### 2.2 Permisos y configuraciones

En la aplicación cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero info.plist

```java
Es necesario permitir el uso de la cámara (Privacy - Camera Usage Description)
```

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la información asociada correctamente en la plataforma deberá ejecutarse previamente el comando **newOperation**.

Este comando debe haberse ejecutado **anteriormente al lanzamiento del componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda
consultar la documentación de [Iniciar nueva operación](./Mobile_SDK#4-iniciar-nueva-operacion), en el que se detalla y explica en qué consiste este proceso.

---

## 4. Controladores disponibles

| **Controlador**           | **Descripción**                                                |
| ------------------------- | -------------------------------------------------------------- |
| SelphiController          | Controlador principal de reconocimiento facial                 |
| RawTemplateController     | Controlador para generar un RawTemplate a partir de una imagen |
| SignatureSelphiController | Controlador para firmar un proceso con una Captura             |

---

## 5. Configuración del componente

Para configurar el componente actual, una vez inicializado, se deberá
crear un objeto _SelphiConfigurationData_ y pasarlo como parámetro al
SDKController durante el lanzamiento del componente.

En el siguiente apartado se mostrarán los campos que forman parte de
esta clase y para qué se utiliza cada uno de ellos.

### 5.1. Class SelphiConfigurationData

#### 5.1.1 Configuración Básica

##### resourcesPath

Establece la ruta donde se encuentra el archivo de recursos del widget. Este archivo contiene tanto los recursos gráficos como los recursos de localización. Esta ruta debe especificarse relativa a la carpeta ‘assets’ de la aplicación principal.

##### showTutorial

Esta propiedad permite mostrar el tutorial previo al proceso de captura.

##### showDiagnostic

Si se le da valor true, al producirse un error o una falta de permisos, el sdk mostrará una pantalla con el error devuelto por el widget.

##### showResultAfterCapture

Indica si mostrar o no una pantalla con la imagen capturada del documento después del proceso de análisis. En esta pantalla se le da al usuario la posibilidad de repetir el proceso de captura si la imagen que se obtuvo del documento no fuera correcta.

#### 5.1.2 Configuración Avanzada

##### debug

Activación del modo depuración del componente.

##### fullscreen

Indica si la vista va a tener prioridad para mostrarse en pantalla
completa, si el sistema lo permite.

##### cropPercent

Permite modificar el porcentaje de recortado de la cara. Cuanto mayor
sea el número mayor será el recorte del rectángulo con respecto a la
cara.

##### locale

Fuerza al widget a utilizar la configuración de idioma indicado por el
parámetro locale. Este parámetro acepta tanto un código de idioma (p.
ej. ‘en’) como un código de identificación regional (p. ej. ‘en_US’). Si
el archivo de recursos del widget no tuviera una localización para el
‘locale’ seleccionado su configuración pasaría a utilizar el idioma por
defecto.

##### livenessMode

Establece el modo liveness del widget. Los valores permitidos son:

- **SelphiFaceLivenessMode.NONE**: Indica que no debe activarse el modo detección de foto en los procesos de autenticación.

- **SelphiFaceLivenessMode.PASSIVE**: Indica que la prueba de vida pasiva se realiza en el servidor, enviando para tal fin la “BestImage” o el “TemplateRaw” correspondiente.

- **SelpiFaceLivenessMode.MOVE**: Indica que el test de liveness es activo, mostrando unas instrucciones durante la captura, y devolviendo el correspondiente resultado del proceso.

##### stabilizationMode

Establece un modo de estabilización previo a cualquier proceso de autenticación en el widget. Con este modo se obliga al widget a no empezar ningún proceso si el usuario no se encuentra con la cabeza mirando al frente y sin moverla.

##### templateRawOptimized

Indica si el template (templateRaw) generado tras el selfie debe optimizarse o no.

##### qrMode

Booleano que indica si se quiere o no activar la lectura de QR previo al proceso de autenticación.

##### videoFilename

Establece la ruta absoluta del nombre del archivo en el que se grabará
un video del proceso de captura. La aplicación es la responsable de
solicitar los permisos necesarios al teléfono en caso de que esa ruta
requiera de permisos adicionales. El widget, por defecto, no realizará
ningún proceso de grabación a menos que se especifique una ruta de
archivo mediante este método.

##### cameraFlashEnabled

Indica si se activa el flash de la cámara del dispositivo.

##### translationsContent

Esta propiedad avanzada permite, mediante una cadena en formato xml,
configurar la traducción de los literales que se muestran durante el
proceso.

##### viewsContent

Esta propiedad avanzada permite, mediante una cadena en formato xml,
configurar las vistas del widget.

#### 5.1.3 Otros parametros

##### vibrationEnabled

Si se le da valor true, se activa la vibración en errores y si la respuesta del widget es OK

---

## 6. Uso del componente

Una vez iniciado el componente y creada una nueva operación (**apartado
3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero sí se trackearán los eventos
  internos al servidor de _tracking_:

```java
let controller = SelphiController(data: selphiConfigurationData, output: output, viewController: viewController)
SDKController.shared.launch(controller: controller)
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
let controller = SelphiController(data: selphiConfigurationData, output: output, viewController: viewController)
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

## 7. Recepción del resultado.

Los controllers devolverán la información necesaria en formato
SdkResult. Más información en la sección de [Retorno de Resultado](./Mobile_SDK#6-result-return).

### 7.1. Recepción de errores

_finishStatus_: Que nos indicará si la operación ha finalizado correctamente. Posibles valores:

```
FinishStatus.STATUS_OK
FinishStatus.STATUS_ERROR
```

_errorType_: Errores propios del widget.

```
SELPHID_CANCEL_BY_USER
SELPHID_TIMEOUT
SELPHID_INTERNAL_ERROR
EXTRACTION_FINISHED_WITH_NO_RESULTS
COULD_NOT_CREATE_WIDGET_INSTANCE
RESOURCES_FILE_NOT_FOUND
```

### 7.2. Recepción de ejecución correcta - _data_

El campo data es variable y dependerá de qué componente se ha devuelto el resultado. En el caso de este componente, los campos devueltos son los siguientes:

#### 7.2.1 template

Devuelve la plantilla que se genera después del proceso de extracción. Válida para el proceso de AUTHENTICATION.

#### 7.2.2 templateRaw

Devuelve la plantilla en bruto que se genera después del proceso de extracción. Válida para el proceso de AUTHENTICATION.

#### 7.2.3 bestImageData

Devuelve la mejor imagen extraída del proceso de autenticación en formato array de bytes. Esta imagen es la imagen con el tamaño original extraída de la cámara. Válido para el proceso de **liveness**.

#### 7.2.4 bestImageCroppedData

Devuelve una imagen recortada centrada en la cara del usuario en formato array de bytes. Esta imagen se obtiene a partir de la bestImage. Ésta es la imagen que se deberá utilizar como imagen característica del usuario que realizó el proceso a modo de avatar.

#### 7.2.5 QrData

Devuelve la información proveniente de la lectura del QR en formato String

#### 7.2.6 bestImageTokenized

Devuelve la mejor imagen extraída del proceso cifrada. Válido para el proceso de **liveness**.


---

## 8. Controladores Adicionales

### 8.1. RawTemplateController

Controlador para generar un RawTemplate se puede usar tanto la imagen en base64 como en data.

Ejemplo de uso:

```java
let controller = RawTemplateController(
	base64: bestImageData.base64EncodedString(),
	output: { sdkResult in
		guard let result = sdkResult.data else {return}
		print(result.base64EncodedString())
	})
SDKController.shared.launchMethod(controller: controller)
```

o

```java
let controller = RawTemplateController(
	data: bestImageData,
	output: { sdkResult in
		guard let result = sdkResult.data else {return}
		print(result.base64EncodedString())
	})
SDKController.shared.launchMethod(controller: controller)
```

---

## 9. Personalizando el componente

Además de los cambios a nivel de SDK (que se explican en [Mobile SDK](./Mobile_SDK)), este componente específico permite la modificación de sus animaciones.

### 9.1 Personalizando las animaciones

El componente de Selphi utiliza las siguientes animaciones:

```
public enum Animation : String, CaseIterable {
	case selphi_anim_tip
	case selphi_anim_tip_move
	case selphi_anim_tuto_1
	case selphi_anim_tuto_2
	case selphi_anim_tuto_3
}
```

Las animaciones configuradas por defecto pueden sobreescribirse creando un archivo en el proyecto con el mismo nombre y extensión (.json en este caso).

También pueden configurarse de forma dinamica en tiempo de ejecución. Para hacer esto, es necesario crear una clase "tema custom" (custom "theme") que implemente la interfaz **ThemeSelphiProtocol**.

```
import selphiComponent
class CustomThemeSelphi: ThemeSelphiProtocol {
	var name: String = "custom"

	public var customBoolean: Bool = true
	var animations: [R.Animation : String] {
		[.selphi_anim_tip: customBoolean ? "primary_custom_selphi_anim_tip": "secondary_custom_selphi_anim_tip",
		 .selphi_anim_tip_move: customBoolean ? "primary_custom_selphi_anim_tip_move": "secondary_custom_selphi_anim_tip_move",
		 .selphi_anim_tuto_1: customBoolean ? "primary_custom_selphi_anim_tuto_1": "secondary_custom_selphi_anim_tuto_1",
		 .selphi_anim_tuto_2: customBoolean ? "primary_custom_selphi_anim_tuto_2": "secondary_custom_selphi_anim_tuto_2",
		 .selphi_anim_tuto_3: customBoolean ? "primary_custom_selphi_anim_tuto_3": "secondary_custom_selphi_anim_tuto_3"]
	}
}
```

Para que la personalización se aplique al componente, se debe ejecutar **ThemeSelphiManager.setup(theme: CustomThemeSelphi())** antes de lanzar el selphidController.

```
let selphiController = SelphiController(data: SelphiConfigurationData(), output: output, viewController: viewController)
ThemeSelphiManager.setup(theme: CustomThemeSelphi())
SDKController.shared.launch(controller: selphiController)
```

#### 9.1.1 Guía de animaciones

- **_selphi_anim_tip_**
	Esta animación se muestra si el livenessMode **NO** es _MOVE_.

```
var configSelphi = SelphiConfigurationData()
...
configSelphi.livenessMode = SelphiFaceLivenessMode.PASSIVE
```

![MobileCapture](/ios/Selphi/tips-001.png)

- **_selphi_anim_tip_move_**
	Esta animación se muestra si el livenessMode es _MOVE_.

```
var configSelphi = SelphiConfigurationData()
...
configSelphi.livenessMode = SelphiFaceLivenessMode.MOVE
```

![MobileCapture](/ios/Selphi/tips-002.png)

- **_selphi_anim_tuto_1_**

![MobileCapture](/ios/Selphi/tutorial-001.png)

- **_selphi_anim_tuto_2_**

![MobileCapture](/ios/Selphi/tutorial-002.png)

- **_selphi_anim_tuto_3_**

![MobileCapture](/ios/Selphi/tutorial-003.png)

### 9.2 Colores, imágenes, tamaños y fuentes

Al contrario que con las animaciones, la personalización de estos elementos se hace desde el [Componente de Status](./Status_Component).

### 9.3 Textos

Los textos pueden ser customizados sobreescribiendo el valor de las siguientes claves en un Localizable.strings. 
Las claves que contienen el sufijo **_\_alt_** son los literales utilizados en las etiquetas de accesibilidad necesarias para la funcionalidad de **_voice over_**.

```
"selphi_component_tutorial_1"="Place your face in the centre and look straight into the camera.";
"selphi_component_tutorial_2"="Remove any object that covers your face.";
"selphi_component_tutorial_3"="Look for a well-lit environment, without shadows on your face.";
"selphi_component_tip_desc"="Place your face in the center of the circle";
"selphi_component_tip_title"="Face Recognition";
"selphi_component_tip_button_message"="START";
"selphi_component_tip_alt"="Animation of a mobile screen with the front camera activated. A circle appears in the center of the screen. A person shows their face inside the circle and the application takes a photo.";
"selphi_component_tip_move_alt"="Animation of a mobile screen with the front camera activated. A circle appears in the center of the screen. A person shows their face inside the circle, moves it slightly to the side and the application takes a photo of it. ";
"selphi_component_tutorial_1_alt"="A circle appears in the center of the screen. A person shows their face. Their entire head can be seen inside the circle. When they are correctly positioned, the application takes a photo of them.";
"selphi_component_tutorial_2_alt"="A circle appears in the center of the screen. Inside the circle there is a person, wearing sunglasses, and his hair covering part of his face. He takes off his glasses and removes his hair from his face. The application detects your entire face and takes a photo.";
"selphi_component_tutorial_3_alt"="A dark circle appears in the center of the screen. Inside the circle, it is difficult to see a person's face. A light turns on and their face can be clearly seen. After this, the application makes a photo.";
"selphi_component_tutorial_move_desc"="Place your face in the center of the circle and follow the directions.";
"selphi_component_timeout_title" = "Timeout";
"selphi_component_timeout_desc" = "We were unable to identify you. Please try again";
```

### 9.4 Personalización del Widget

Selphi está dividido en dos partes, la primera es la espeicifcada en las secciones previas y contiene las pantallas de "tutorial" y "Más información". La segunda es el widget de captura con cámara.

![MobileCapture](/ios/Selphi/capture-001.png)

Este widget puede ser personalizado también, pero para hacerlo se deben modificar los recursos de Selphi.