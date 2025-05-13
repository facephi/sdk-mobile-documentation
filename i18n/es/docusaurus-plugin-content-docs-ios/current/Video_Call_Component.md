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
Antes de integrar este componente se recomienda leer la documentación de [Integración Inicial](./Mobile_SDK#2-integración-inicial) y seguir las instrucciones indicadas en dicho documento.
</div>

En esta sección se explicará paso a paso cómo integrar el componente
actual en un proyecto ya existente.

### 2.1. Dependencias requeridas para la integración

Para evitar conflictos y problemas de compatibilidad, en caso de querer
instalar el componente en un proyecto que contenga una versión antigua
de las librerías de Facephi (_Widgets_), éstos deberán eliminarse por
completo antes de la instalación de los componentes de la **_SDKMobile_**.

#### Cocoapods

- Actualmente las librerías de FacePhi se distribuyen de forma remota a través de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias **obligatorias** que deberán haberse instalado previamente (añadiéndolas en el fichero Podfile del proyecto) son:

```java
  pod 'FPHISDKMainComponent', '~> 2.3.0'
```

- Para instalar el componente de VideoCall deberá incluirse la siguiente entrada en el Podfile de la aplicación:

```java
  pod 'FPHISDKVideoCallComponent', '~> 2.3.0'
```

- Una vez instaladas las dependencias, se podrá hacer uso de las diferentes funcionalidades del componente.

- En caso de realizar el desarrollo con **XCode15** se deberá incluir un script de post-instalacion:

![Image](/ios/fix_ldClassic.png)

## 2.2 Permisos y configuraciones

En la aplicación cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero **Info.plist**.

Es necesario permitir el uso de la cámara (Privacy - Camera Usage Description)

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la
información asociada correctamente en la plataforma deberá ejecutarse
previamente el comando **newOperation**.


<div class="note">
<span class="note">:information_source:</span>
Este comando debe haberse ejecutado **antes del lanzamiento del componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda
consultar la documentación de [Iniciar nueva operación](./Mobile_SDK#4-iniciar-nueva-operacion), en el que se detalla y explica en qué consiste este proceso.
</div>

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

Los campos incluidos en la configuración, normalmente **no es necesario que sean informados** ya que se completan internamente a través de la
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

Una vez iniciado el componente y creada una nueva operación (**Apartado 3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, y **trackeando los eventos** internos al servidor de _tracking_:

```java
let controller = VoiceController(
    data: data,
    output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
SDKController.shared.launch(controller: controller)
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
let controller = VideoCallController(data: videoCallConfigurationData, output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
SDKController.shared.launchMethod(controller: controller)
```

El método **launch** debe usarse **por defecto**. Este método permite
utilizar **_tracking_** en caso de estar su componente activado, y no lo
usará cuando esté desactivado (o no se encuentre el componente instalado).

Por el contrario, el método **launchMethod** cubre un caso especial, en
el cual el integrador tiene instalado y activado el tracking, pero en un
flujo determinado dentro de la aplicación no desea trackear información.
En ese caso se usa este método para evitar que se envíe esa información
a la plataforma.

En los datos de configuración (`VideoCallConfigurationData`) también se podrán modificar:

- **_Datos <u>opcionales</u> que normalmente se incluyen dentro de la licencia_**

  - **tenantId**: Identificador del tenant que hace referencia al cliente actual, necesario para la conexión con el servicio de video.

  - **url**: Ruta al socket de video.

  - **apiKey**: ApiKey necesaria para la conexión con el socket de video.

---

### Ejemplo de configuración

```java
  log("LAUNCH VIDEO CALL")

  let videocallController = VideoCallControlle(
    data: VideoCallConfigurationData(
      vibrationEnabled: true,
      activateScreenSharing: true,
      timeout: 8000
    ),
    output: output,
    viewController: viewController)
  SDKController.shared.launch(controller: videocallController)
```

## 7. Recepción del resultado

Los controllers devolverán la información necesaria en formato SdkResult.
Más información en la sección de [Retorno de Resultado](./Mobile_SDK#6-retorno-de-resultado).

### 7.1. Recepción de errores

En la parte del error, dispondremos de la clase común _ErrorType_.

```java
public enum ErrorType: Equatable, Error {
    //COMMON - BASIC
    case NO_ERROR
    case UNKNOWN_ERROR
    case OTHER(String)
    
    //COMMON - REQUIREMENTS
    case NO_DATA_ERROR
    case NO_OPERATION_CREATED_ERROR
    case NETWORK_CONNECTION
    
    //COMMON - PERMISSIONS
    case CAMERA_PERMISSION_DENIED
    case MIC_PERMISSION_DENIED
    case LOCATION_PERMISSION_DENIED
    case STORAGE_PERMISSION_DENIED
    
    //COMMON - USER'S INTERACTION
    case CANCEL_BY_USER
    case TIMEOUT
    
    //COMMON - LICENSE ERROR
    case LICENSE_CHECKER_ERROR(String)
    case MISSING_COMPONENT_LICENSE_DATA
}
```

### 7.2. Recepción de ejecución correcta - _data_

En la ejecución correcta, simplemente se informa de que todo ha ido bien
con el SdkResult.Success.

Cuando el resultado sea Success y esté activo el flag _sharingScreen_ se podrá activar compartir pantalla.

---

## 8. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de [Personalización de la SDK](./Mobile_SDK#9-personalización-de-la-sdk)), este componente en concreto permite la modificación de animaciones, imágenes, fuentes, colores y textos específicos.

Para personalizar el componente, se debe llamar a ThemeVideoCallManager.setup(theme: CustomThemeVideoCall()) antes de lanzar videocallController:

```java
let videocallController = VideoCallController(data: VideoCallConfigurationData(), output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
ThemeVideoCallManager.setup(theme: CustomThemeVideoCall())
SDKController.shared.launch(controller: videocallController)
```

Un ejemplo de la clase CustomThemeVideoCall sería este (debe extender ThemeVideoCallProtocol):

```java
class CustomThemeVideoCall: ThemeVideoCallProtocol {
    var images: [R.Image: UIImage?] = [R.Image.ic_sdk_close: UIImage(named: "closeIcon")!]

    var colors: [R.Color: UIColor?] = [R.Color.sdkPrimaryColor: UIColor.red]

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

### 8.1 Imágenes

Las imagenes inicializan en la variable _images_, pasándole un diccionario, siendo la clave uno de los enumerados que representan las distintas imágenes de la pantalla, y el valor la imagen personalizada que se deba mostrar.

```java
case ic_sdk_close
case ic_sdk_close_arrow
case ic_video_call_camera_off
case ic_video_call_camera_on
case ic_video_call_hangout
case ic_video_call_micro
case ic_video_call_mute
case ic_video_call_phone
case ic_video_call_recording
case ic_video_call_share
case ic_video_call_timeout
case ic_video_call_camera_toggle
```

### 8.2 Colores

Los colores se inicializan similarmente en la variable colors con un diccionario, teniendo como valor un UIColor que se desee.

```java
// COMMON SDK Colors 
case sdkPrimaryColor
case sdkBackgroundColor
case sdkSecondaryColor
case sdkBodyTextColor
case sdkTitleTextColor
case sdkSuccessColor
case sdkErrorColor
case sdkNeutralColor
case sdkAccentColor
case sdkTopIconsColor
// VideoCall Specific Colors
case sdkBackgroundDisabled
```

### 8.3 Fuentes

Las fuentes se inicializan similarmente en la variable fonts con un diccionario, teniendo como valor un String con el nombre de la UIFont que se desee.

```java
case regular
case bold
```

El tamaño de los textos se inicializa similarmente en la variable dimensions con un diccionario, teniendo como valor un CGFloat con el tamaño deseado.

### 8.4 Animaciones

Las animaciones a usar se inicializan similarmente en la variable animations con un diccionario, teniendo como valor una string con el nombre de la animación que se encuentre en xcassets que se desee usar.

```java
case video_call_anim_waiting
```

### 8.5 Textos - Multiidioma

#### 8.5.1 Configuración de idiomas por defecto

Si se instala el paquete mediante **SPM**, para que funcione la localización de textos, es necesario añadir en el archivo **Info.plist** de la app integradora lo siguiente:

**CFBundleAllowMixedLocalizations = YES**

Quedaría así:

![Image](/ios/sdkVideo-infoplist-image.png)

- Inglés

- Español - España

- Portugués - Portugal

El idioma del componente se selecciona en función del idioma que tenga el móvil establecido.

- Si el idioma es cualquiera cuya raíz es el Español (p.e Español - México), por defecto, usará Español - España.

- Si el idioma es cualquiera cuya raíz es el Portugués (p.e Portugués - Brasil), por defecto, usará Portugués - Portugal.

- Para cualquier otro caso, se hará uso del Inglés.

#### 8.5.2 Configuración de idiomas personalizada

El componente permite la personalización de los textos según el idioma, el cual al igual que en el anterior caso, será definido por el lenguaje que esté seleccionado en el dispositivo.

Esta personalización se aplica tanto a nuevas localizaciones como al caso de los idiomas predeterminados (es, en y pt). Se hace a través del uso de los archivos **Localizable.strings.**

#### 8.5.3 Keys para multiidioma

Los textos pueden ser customizados sobreescribiendo el valor de las siguientes claves en un **Localizable.strings**. 
Las claves que contienen el sufijo **_\_alt_** son los literales utilizados en las etiquetas de accesibilidad necesarias para la funcionalidad de **_voice over_**.

```java
/* VideoAssistance view */
"video_call_component_exit_alert_question" = "¿Seguro que quieres finalizar la llamada?";

/* Other */
"video_call_component_exit_alert_finish" = "Finalizar";
"video_call_component_exit_alert_accept" = "Aceptar";
"video_call_component_exit_alert_cancel" = "Cancelar";
"video_call_component_exit_alert_skip" = "OMITIR";
"video_call_component_exit_alert_retry" = "REINTENTAR";

"video_call_component_agent_label" = "Asistente";
"video_call_component_text_waiting_agent_title" = "Conectando con un asistente...";
"video_call_component_close_alt" = "Cerrar";
"video_call_component_back_alt" = "Atrás";
"video_call_component_timeout_title" = "Tiempo superado";
"video_call_component_timeout_desc" = "No se ha podido conectar con un agente.";
```

De este modo, si se desea modificar por ejemplo el texto “_Finalizar_” de la clave `video_call_component_exit_alert_finish` para el idioma **es-MX**, se deberá ir al archivo **Localizable.strings** de la carpeta **es-MX.lproj** si es que existe (si no, se deberá crear) y ahí, añadir:

`"video_call_component_exit_alert_finish"="Terminar";`

Si un mensaje no se especifica en el fichero del idioma, este se rellenará con el mensaje por defecto.