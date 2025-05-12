# Video Call Component

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
**_VideoCall Component_**. Éste se encarga de gestionar la comunicación
entre un usuario y un agente de forma remota, a través de un canal de
comunicación. Está orientado principalmente para casos de uso de
videoasistencia.

## 1.1 Requisitos mínimos

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
```

- Para instalar el componente de VideoCall deberá incluirse la siguiente entrada en el Podfile de la aplicación:

```java
  pod 'FPHISDKVideoCallComponent', '~> 2.2.0'
```

- Una vez instaladas las dependencias, se podrá hacer uso de las diferentes funcionalidades del componente.

- En caso de realizar el desarrollo con **xCode15** se deberá incluir un script de post-instalacion:

![Image](/ios/fix_ldClassic.png)

## 2.2 Permisos y configuraciones

En la aplicación cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero **info.plist**

```
Es necesario permitir el uso de la cámara (Privacy - Camera Usage Description)
```

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la
información asociada correctamente en la plataforma deberá ejecutarse
previamente el comando **newOperation**.

Este comando debe haberse ejecutado **anteriormente al lanzamiento del
componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda
consultar la documentación de [Iniciar nueva operación](./Mobile_SDK#4-iniciar-nueva-operacion), en el que se detalla y explica en qué consiste este proceso.

---

## 4. Controladores disponibles

| **Controlador**     | **Descripción**                       |
| ------------------- | ------------------------------------- |
| VideoCallController | Controlador principal de videollamada |

---

## 5. Configuración del componente

Para configurar el componente actual, una vez inicializado, se deberá
crear un objeto

_VideoCallConfigurationData_ y pasarlo como parámetro al SDKController
durante el lanzamiento del componente.

En el siguiente apartado se mostrarán los campos que forman parte de
esta clase y para qué se utiliza cada uno de ellos.

### 5.1. Class VideoCallConfigurationData

Los campos incluidos en la configuración, normalmente **no es necesario
que sean informados** ya que se completan internamente a través de la
licencia usada.

#### 5.1.1. Configuración Básica

##### activateScreenSharing

Activar la opción de compartir pantalla en la llamada.

#### 5.1.2. Configuración Avanzada

#### 5.1.2.1. url

Ruta al socket de video

#### 5.1.2.2 apiKey

ApiKey necesaria para la conexión con el socket de video

#### 5.1.2.3 tenantId

Identificador del tenant que hace referencia al cliente actual,
necesario para la conexión con el servicio de video.

#### 5.1.3. Otros parametros

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
let controller = VideoCallController(data: videoCallConfigurationData, output: output, viewController: viewController)
SDKController.shared.launch(controller: controller)
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
let controller = VideoCallController(data: videoCallConfigurationData, output: output, viewController: viewController)
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

En los datos de configuración (`VideoCallConfigurationData`) también se podrán modificar:

- **Datos opcionales que normalmente se incluyen dentro de la licencia**

  - **tenantId**: Identificador del tenant que hace referencia al cliente actual, necesario para la conexión con el servicio de video.

  - **url**: Ruta al socket de video.

  - **apiKey**: ApiKey necesaria para la conexión con el socket de video.

---

### Ejemplo de configuración

```
  log("LAUNCH VIDEO CALL")

  let videocallController = VideoCallController(data: VideoCallConfigurationData(
                                                          url: "Enter URL",
                                                          apikey: "Enter the ApiKey",
                                                          tenantId: "Enter the tenantId"),
                                                output: output, viewController: viewController)
  SDKController.shared.launchMethod(controller: videocallController)
```

<blockquote>
*** IMPORTANTE ***
Los valores se asignan por defecto. **SOLO** se debe configurar en caso de usar una plataforma externa a la proporcionada por Facephi, dentro de la licencia.
</blockquote>

## 7. Recepción del resultado

Los controllers devolverán la información necesaria en formato SdkResult.
Más información en la sección de [Retorno de Resultado](./Mobile_SDK#6-result-return).

### 7.1. Recepción de errores

En la parte del error, dispondremos de la clase _VideoCallError_.

```java
 VIDEO_CALL_CANCEL_BY_USER
 VIDEO_CALL_TIMEOUT
 VIDEO_CALL_INTERNAL_ERROR
 VIDEO_CALL_DECODER_ERROR
```

### 7.2. Recepción de ejecución correcta - _data_

En la ejecución correcta, simplemente se informa de que todo ha ido bien
con el SdkResult.Success.

Cuando el resultado sea Success y esté activo el flag _sharingScreen_ se podrá activar compartir pantalla.

---

## 8. Personalización del componente

Los cambios que se pueden realizar a nivel de SDK (que son
explicado en el <a href="ES_Mobile_SDK"
ID-recurso-vinculado-datos="2605678593" Versión-recurso-vinculado-datos="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a>
documento), este componente en particular permite la modificación de datos específicos
textos.

Para personalizar el componente, se debe llamar a ThemeVideoCallManager.setup(theme: CustomThemeVideoCall() ) antes de lanzar videocallController:

```java
let videocallController = VideoCallController(data: VideoCallConfigurationData(), output: output, viewController: viewController)
ThemeVideoCallManager.setup(theme: CustomThemeVideoCall())
SDKController.shared.launch(controller: videocallController)
```

Un ejemplo de la clase CustomThemeVideoCall sería este (debe implementar ThemeVideoCallProtocol):

```java
class CustomThemeVideoCall: ThemeVideoCallProtocol {
    var images: [R.Image: UIImage?] = [:]

    var colors: [R.Color: UIColor?] = [R.Color.TitleText: UIColor.red]

    var animations: [R.Animation: String] = [:]

    var name: String {
        "custom"
    }

    var fonts: [R.Font: String] = [:]

    var dimensions: [R.Dimension: CGFloat] {
        [.fontBig: 8]
    }
}
```

### 8.1 Colores e imágenes

Las imagenes inicializan en la variable images , pasándole un diccionario, siendo la clave uno de los enumerados que representan las distintas imágenes de la pantalla, y el valor la imagen personalizada que se deba mostrar.

```
case close
```

Los colores se inicializan similarmente en la variable colors con un diccionario, teniendo como valor un UIColor que se desee.

```
case sdkPrimaryColor
case sdkBackgroundColor
case sdkSecondaryColor
case sdkBodyTextColor
case sdkTitleTextColor
case sdkSuccessColor
case sdkErrorColor
case sdkNeutralColor
case sdkAccentColor
case sdkTopIconsVideoColor
case sdkTopIconsColor
```

### 8.2 Fuentes

Las fuentes se inicializan similarmente en la variable fonts con un diccionario, teniendo como valor un String con el nombre de la UIFont que se desee.

```
case regular
case bold
```

Las animaciones a usar se inicializan similarmente en la variable animations con un diccionario, teniendo como valor una string con el nombre de la animación que se encuentre en xcassets que se desee usar.

````
case phone_calling
``
El tamaño de los textos se inicializa similarmente en la variable dimensions con un diccionario, teniendo como valor un CGFloat con el tamaño deseado.

### 8.3 Textos

If you want to modify the SDK texts, you would have to include the
following XML file in the client application, and modify the value
of each _String_ by the desired one.

```java
 <!-- VIDEO CALL -->
    <string name="video_call_text_waiting_agent_title">Connecting with an assistant…</string>
    <string name="video_call_agent">Agent</string>
    <string name="video_call_exit_alert_title">Cancel process</string>
    <string name="video_call_exit_alert_question">Are you sure you want to leave the video assistance?</string>
    <string name="video_call_exit_alert_exit">Quit</string>
    <string name="video_call_exit_alert_cancel">Cancel</string>
    <string name="video_call_exit">Exit</string>
    <string name="video_call_network_connection_error">Check your internet connection.</string>
    <string name="video_call_image_description">Phone</string>
    <string name="video_call_text_finish">Video assistance is complete</string>
    <string name="video_call_text_finish_button">Exit</string>
    <string name="video_call_accesibility_phone">Phone</string>
````

### 8.4 Colores

```java
<!-- VIDEO CALL -->
<color name="colorVideoCallPhoneButtonBackground">#F44336</color>
<color name="colorVideoCallActionsBackground">#30333d</color>
<color name="colorVideoCallCardText">#ffffff</color>
<color name="colorVideoCallButtonBackground">#FF526080</color>
```
