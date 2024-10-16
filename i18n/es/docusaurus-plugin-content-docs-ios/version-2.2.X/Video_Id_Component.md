# Video Id Component

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
**_VideoID Component_**. Éste se encarga de realizar la grabación de un
usuario identificándose, mostrando la cara y su documento de identidad.

## 1.1 Requisitos mínimos

La versión mínima de la SDK de iOS requerida es la siguiente:

Versión mínima de iOS: **13**

---

## 2. Integración del componente

Antes de integrar este componente se recomienda leer la documentación de [Integración](./Mobile_SDK#2-integración-inicial) y seguir las instrucciones indicadas en dicho documento.

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

- Para instalar el componente de VideoID deberá incluirse la siguiente entrada en el Podfile de la aplicación:

```
	pod 'VideoIdController', '~> 1.5.0'
```

- Una vez instaladas las dependencias, se podrá hacer uso de las diferentes funcionalidades del componente.

- En caso de realizar el desarrollo con **xCode15** se deberá incluir un script de post-instalacion:
  ![Image](/ios/fix_ldClassic.png)

## 2.2 Permisos y configuraciones

En la aplicación cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero **info.plist**

```
Es necesario permitir el uso de la cámara (Privacy - Camera Usage Description)
```

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la información asociada correctamente en la plataforma deberá ejecutarse previamente el comando **newOperation**.

Este comando debe haberse ejecutado **anteriormente al lanzamiento del componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda consultar la documentación de [Iniciar nueva operación](./Mobile_SDK#4-iniciar-nueva-operacion), en el que se detalla y explica en qué consiste este proceso.

---

## 4. Controladores disponibles

| **Controlador**            | **Descripción**                                    |
| -------------------------- | -------------------------------------------------- |
| VideoIdController          | Controlador principal de video identificación      |
| SignatureVideoIdController | Controlador para firmar un proceso con una Captura |

---

## 5. Configuración del componente

Los campos incluidos en la configuración (**url, apiKey, tenantId**),
normalmente **no es necesario que sean informados** ya que se completan
internamente a través de la licencia usada.

Estos campos suelen informarse **solo** cuando el **servidor** es
**OnPremise**.

### 5.1. Class VideoIdConfigurationData

#### 5.1.1. Configuración Básica

##### sectionTime

Indica la duración de cada una de las secciones en las que se muestra el
mensaje de grabación.

##### showCompletedTutorial

Indica si se quiere mostrar el tutorial inicial completo. Si no, se
mostrará un progress indicator.

##### mode

- ONLY_FACE: El proceso se realiza siendo necesariamente solo
  mostrando la cara.

- FACE_DOCUMENT_FRONT: El proceso se realiza usando tanto la cara como
  el frontal del documento de identidad.

- FACE_DOCUMENT_FRONT_BACK: El proceso se realiza usando la cara, el
  frontal del documento de identidad y la parte trasera del documento.

#### 5.1.2 Configuración Avanzada

##### url

Ruta al socket de video

##### apiKey

ApiKey necesaria para la conexión con el socket de video

##### tenantId

Identificador del tenant que hace referencia al cliente actual,
necesario para la conexión con el servicio de video.

#### 5.1.3. Otros

##### extractionTimeout

Establece el tiempo máximo que se puede realizar la lectura.

##### VibrationEnabled

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
let controller = VideoIdController(data: VideoIdConfigurationData, output: output, viewController: viewController)
SDKController.shared.launchMethod(controller: controller)
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
let controller = VideoIdController(data: VideoIdConfigurationData, output: output, viewController: viewController)
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

En los datos de configuración (VideoIDConfigurationData) también se podrán modificar:

- **sectionTime**: Tiempo que se permanecerá en cada pantalla del proceso en ms

- **mode**: Modo que se aplicará para la grabación. Los posibles valores de VideoIdMode serán:

  - ONLY_FACE: Sólo tienes que mostrar la cara durante el proceso.

  - FACE_DOCUMENT_FRONT: Tienes que mostrar la cara y la parte frontal del documento.

  - FACE_DOCUMENT_FRONT_BACK: Tienes que mostrar la cara, la parte frontal y el dorso del documento.

- **showCompletedTutorial**: Indica si se desea mostrar el tutorial completo del proceso o sólo la versión simplificada.

- **Datos <u>opcionales</u> que normalmente se incluyen dentro de la licencia**

  - **tenantId**: Identificador del tenant que hace referencia al cliente actual, necesario para la conexión con el servicio de video.

  - **url**: Ruta al socket de video.

  - **apiKey**: ApiKey necesaria para la conexión con el socket de video.

---

## 7. Recepción del resultado

Los controllers devolverán la información necesaria en formato
SdkResult. Más información en <a href="ES_Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a>

### 7.1. Recepción de errores

En la parte del error, dispondremos de la clase _VideoIdError_.

```java
NO_DATA_ERROR
TIMEOUT
CANCEL_BY_USER
CANCEL_LAUNCH
NETWORK_CONNECTION
SOCKET_ERROR
VIDEO_ERROR
ACTIVITY_RESULT_ERROR
INITIALIZATION_ERROR -> it.error
UNKNOWN_ERROR
PERMISSION_DENIED
```

## 8. Customizing the component

Para personalizar el componente, se debe llamar a ThemeVideoIdManager.setup(theme:`CustomThemeVideoId()` ) antes de lanzar el videoIdController:

```
let videoidController = VideoIdController(data: data, output: output, viewController: viewController)
ThemeVideoIdManager.setup(theme: CustomThemeVideoId())
SDKController.launchVideoId(controller: videoidController)
```

Un ejemplo de la clase CustomThemeVideoId sería este (debe implementar ThemeVideoIdProtocol):

```
class CustomThemeVideoId: ThemeVideoIdProtocol {
    var images: [R.Image: UIImage?] = [:]

    var colors: [R.Color: UIColor?] = [R.Color.MessageText: UIColor.red]

    // var animations: [R.Animation: String] = [:]

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

- Las imágenes inicializan en la variable images , pasándole un diccionario, siendo la clave uno de los enumerados que representan las distintas imágenes de la pantalla, y el valor la imagen personalizada que se deba mostrar.

```
case ic_video_id_back_id
case ic_video_id_check
case ic_video_id_close
case ic_video_id_front_id
case ic_video_id_record_back
case ic_video_id_record_face
case ic_video_id_record_front
case ic_video_id_user
case intro
```

- Los colores se inicializan similarmente en la variable colors con un diccionario, teniendo como valor un UIColor que se desee.

```
case MainBackground
case TitleText
case MessageText
case PrimaryButtonText
case Button
case CheckText
case Primary
```

### 8.2 Fuentes

Las fuentes se inicializan similarmente en la variable `fonts` con un diccionario, teniendo como valor un **String** con el nombre de la **UIFont** que se desee.

```
case regular
case bold
```

- El tamaño de los textos se inicializa similarmente en la variable dimensions con un diccionario, teniendo como valor un **CGFloat** con el tamaño deseado.

### 8.3 Personalizar el tiempo entre pantallas

Para modificar el tiempo que se permanece en cada pantalla de grabación hay que modificar el valor del parámetro time (en ms) del VideoIDConfigurationData:

`VideoIDConfigurationData(time = TIEMPO EN MS)`

Siempre será el mínimo 5000.

Este objeto se pasará al hacer el setup del video ID.

### 8.4 Textos - Multiidioma

#### 8.4.1 Configuración de idiomas por defecto

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

#### 8.4.2 Configuración de idiomas personalizada

El componente permite la personalización de los textos según el idioma, el cual al igual que en el anterior caso, será definido por el lenguaje que esté seleccionado en el dispositivo.

Esta personalización se aplica tanto a nuevas localizaciones como al caso de los idiomas predeterminados (es, en y pt-PT). Se hace a través del uso de los archivos **Localizable.strings.**

#### 8.4.3 Keys para multiidioma

El archivo **Localizable.strings** de la carpeta **es.lproj** del componente es el siguiente:

```
"video_id_text_waiting_agent_title"="Video grabación";
"video_id_permission_denied"="Permiso denegado";
"video_id_network_connection_error"="Revise su conexión a internet";
"video_id_exit_alert_question"="¿Quieres abandonar la identificación?";
"video_id_exit_alert_exit"="Abandonar";
"video_id_exit_alert_cancel"="Cancelar";
"video_id_exit_alert_ok"="Ok";
"video_id_exit"="Salir";
"video_id_tip_message_face_document"="Coloca tu rostro y el frente de tu documento en las marcas e inicia la grabación";
"video_id_tip_message_only_face"="Coloca tu rostro en las marcas e inicia la grabación";
"video_id_info_message_back"="Ahora coloca el reverso de tu documento en la marca correspondiente"; // DOCUMENTO? DNI?
"video_id_info_message_face_old"="Coloca tu rostro y en voz alta di los datos de tu domicilio y nombre completo";
"video_id_finish_message"="¡Videograbación finalizada!";
"video_id_finish_button"="Finalizar";
"video_id_record_retry_button"="Repetir grabación";
"video_id_record_init_button"="Iniciar grabación";
"video_id_ready_button"="CONTINUAR";
"video_id_generic_error"="Ha habido un error en la grabación";
"video_id_tip_info_message"="En la parte inferior de la pantalla aparecerán las instrucciones y el tiempo para llevar a cabo la grabación";
"video_id_face_instructions"="Ahora en voz alta di \"Yo (nombre y apellidos)  acepto los términos y condiciones\".";
"video_id_face_document_instructions"="Coloca tu rostro y el frente de tu documento en las marcas";

```

De este modo, si se desea modificar por ejemplo el texto “_Finalizar_” de la clave `video_id_finish_button` para el idioma **es-MX**, se deberá ir al archivo **Localizable.strings** de la carpeta **es-MX.lproj** si es que existe (si no, se deberá crear) y ahí, añadir:

`"video_id_finish_button"="Terminar";`

Si un mensaje no se especifica en el fichero del idioma, este se rellenará con el mensaje por defecto.
