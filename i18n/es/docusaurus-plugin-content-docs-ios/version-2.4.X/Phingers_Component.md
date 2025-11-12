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
Antes de integrar este componente se recomienda leer la documentación de [Integración Inicial](./Mobile_SDK#2-integración-inicial) y seguir las instrucciones indicadas en dicho documento.
</div>

En esta sección se explicará paso a paso cómo integrar el componente
actual en un proyecto ya existente.

### 2.1. Dependencias requeridas para la integración

Para evitar conflictos y problemas de compatibilidad, en caso de querer instalar el componente en un proyecto que contenga una versión antigua de las librerías de Facephi (*Widgets*), éstos deberán eliminarse por completo antes de la instalación de los componentes de la **SDKMobile**.

Actualmente las librerías de FacePhi se distribuyen de forma remota a través de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias **obligatorias** que deberán haberse instalado previamente (añadiéndolas en el fichero *Podfile* del proyecto) son:
```java
  pod 'FPHISDKMainComponent', '~> 2.4.0'
```
- Para instalar el componente actual deberá incluirse la siguiente entrada en el Podfile de la aplicación:
```java
pod 'FPHISDKPhingersTFComponent', '~> 2.4.0'
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

<div class="note">
<span class="note">:information_source:</span>
Este comando debe haberse ejecutado **anteriormente al lanzamiento del
componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda
consultar la documentación de [Primeros Pasos](./Mobile_SDK#4-iniciar-nueva-operación), en el que se detalla y explica en qué consiste
este proceso.
</div>

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

#### 5.1.1 reticleOrientation

Configura qué mano se va a proceder a capturar. Los valores permitidos son:

- **LEFT**: Activa la captura de los dedos de la mano **izquierda**.

- **RIGHT**: Activa la captura de los dedos de la mano **derecha**.

#### 5.1.2 fingerFilter

Configura el modo de detección de huellas dactilares que se usará durante la captura.
Los valores permitidos son:

- **INDEX_FINGER**: Configura la captura con el dedo **índice**.

- **MIDDLE_FINGER**: Configura la captura con el dedo **corazón**.

- **RING_FINGER**: Configura la captura con el dedo **anular**.

- **LITTLE_FINGER**: Configura la captura con el dedo **meñique**.

- **THUMB_FINGER**: Configura la captura con el dedo **pulgar**.

- **SLAP**: Configura la captura de los **cuatro** dedos con una solo foto.

- **ALL_4_FINGERS_ONE_BY_ONE**: Configura la captura de los **cuatro** dedos
haciendo una foto por cada uno de ellos.

- **ALL_5_FINGERS_ONE_BY_ONE**: Configura la captura de los **cinco** dedos
haciendo una foto por cada uno de ellos.

#### 5.1.3 templateType

Especifica la plantilla con la que se devolverá la huella dactilar en el resultado.
El enumerado **_TemplateType_** tiene los siguientes valores posibles:

- **ISO_TEMPLATE**: Este template hace referencia al estandar **ISO/IEC 19794-4**.

- **NIST_TEMPLATE**: Este template hace referencia al estandar NIST.

- **NIST_TF_TEMPLATE**: **Este es el valor por defecto.** Este template hace referencia a una variante
  del estandar NIST que facilita el procesado y evaluación de la muestra.

#### 5.1.4 extractionTimeout

Establece el tiempo máximo que se puede realizar la lectura.

#### 5.1.5 showPreviousTip

Muestra una pantalla previa al lanzamiento de la captura con información sobre el proceso a realizar y un botón para el lanzamiento.

#### 5.1.6. showTutorial

Indica si el componente activa la pantalla de tutorial. En esta vista se
explica de forma intuitiva cómo se realiza la captura.

#### 5.1.7. vibrationEnabled

Si se le da valor true, se activa la vibración en errores y si la respuesta del widget es OK.

#### 5.1.8 showDiagnostic

Mostrar pantallas de diagnóstico al final del proceso.

#### 5.1.9 threshold

Configura el threshold del detector de huellas. **El valor por defecto es 0.7.**

#### 5.1.10 showEllipses

Dibuja una elipsa durante la captura cuando se detecta una posible huella.

#### 5.1.11 cropWidth & cropHeight

Indica un ancho y alto para realizar un recorte de la captura.

---

## 6. Uso del componente

Una vez iniciado el componente y creada una nueva operación (**Apartado 3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, y **trackeando los eventos** internos al servidor de _tracking_:

```java
let controller = PhingersController(data: phingersConfigurationData, output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
SDKController.shared.launch(controller: controller)
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
let controller = PhingersController(data: phingersConfigurationData, output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
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
    case COMPONENT_LICENSE_ERROR
    case EMPTY_LICENSE
}
```

Los errores 'ErrorType.OTHER' y 'ErrorType.LICENSE_CHECKER_ERROR' son especiales porque además pueden informar del detalle del error.

El _String_ puede tener los siguientes valores en el caso del 'ErrorType.OTHER':

```java
public enum PhingersError: String {
    case INITIALIZATION_ERROR
    case NO_FINGER_DETECTED
    case FINGERPRINT_TEMPLATE_IO_ERROR
    case LOW_QUALITY
    case CAMERA_FAILURE
    case CAPTURE_FAILURE
    case CONFIGURATION_FAILURE
    case TEMPLATE_CREATION_ERROR
}
```

### 7.2. Recepción de ejecución correcta - _data_

En la parte de _data_, dispondremos de la clase _PhingersResult_.

El campo _data_ es variable y dependerá de qué componente se ha devuelto
el resultado. En el caso de este componente, los campos devueltos son
los siguientes:

#### 7.1.1 _fingers_

##### 7.1.1.1. position

Devuelve un entero que representa el elemento capturado. Este valor se establece según
las instrucciones del NIST_POS_CODE.

##### 7.1.1.2. displayImage

Contiene la imagen procesada.

##### 7.1.1.3. wsq

La huella dactilar en formato WSQ.

##### 7.1.1.4. minutiaesNumber

Devuelve el número de minucias encontradas en la captura biométrica.

##### 7.1.1.5. quality

Entero que representa la calidad del elemento procesado.

##### 7.1.1.6 nistQuality

Entero que representa la calidad del elemento procesado usando los estándares NIST.

##### 7.1.1.7 nist2Quality

Entero que representa la calidad del elemento procesado usando una versión alternativa de los estándares NIST.

##### 7.1.1.8 livenessScore

Contiene un valor del indicador de confianza en la captura.

#### 7.1.2 _slapImages_

##### 7.1.2.1. position

Devuelve un entero que representa el elemento capturado. Este valor se establece según
las instrucciones del NIST_POS_CODE.

##### 7.1.2.2. image

Contiene la imagen procesada.

##### 7.1.2.3. livenessScore

Contiene un valor del indicador de confianza en la captura.

---

## 8. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de [Personalización de la SDK](./Mobile_SDK#9-personalización-de-la-sdk)), este componente en concreto permite la modificación de animaciones, imágenes, fuentes, colores y textos específicos.

Para personalizar el componente, se debe llamar a ThemePhingersManager.setup(theme: CustomThemePhingers()) antes de lanzar phingersController:

```java
let phingersController = PhingersController(data: PhingersConfigurationData(), output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
ThemePhingersManager.setup(theme: CustomThemePhingers())
SDKController.shared.launch(controller: phingersController)
```

Un ejemplo de la clase CustomThemePhingers sería este (debe extender ThemePhingersProtocol):

```java
class CustomThemePhingers: ThemePhingersProtocol {
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
// Phingers Specific Colors
case sdkButtonTextColor
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
case phingers_anim_tip_left
case phingers_anim_tip_right
case phingers_anim_tip_thumb
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

El idioma del componente se puede configurar en el *_initSdk_* mediante el parámetro **_locale_**.
En caso de no configurarse, el SDK escoge el idioma establecido en el dispositivo.

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
/*  PhingersLocalizable view  */
"phingers_tf_component_tip_title_left" = "Huellas mano izquierda";
"phingers_tf_component_tip_title_right" = "Huellas mano derecha";
"phingers_tf_component_tip_title_thumb" = "Huella pulgar";
"phingers_tf_component_tip_button_message" = "COMENZAR";
"phingers_tf_component_tip_desc" = "Junta tus dedos. Acerca o aleja la mano hasta que se enfoquen tus huellas.";
"phingers_tf_component_capture_phingers" = "Mantenga los dedos firmes";
"phingers_tf_component_capture_thumb" = "Mantenga el dedo firme";
"phingers_tf_component_capture_phingers_not_focus" = "Mueva los dedos hasta que estén enfocados";
"phingers_tf_component_capture_thumb_not_focus" = "Mueva el dedo hasta que esté enfocado";
"phingers_tf_component_timeout_title"="Tiempo superado";
"phingers_tf_component_timeout_desc"="Pedimos disculpas. No se ha podido hacer la captura.";
"phingers_tf_component_exit_alert_cancel"="Cancel";
"phingers_tf_component_exit_alert_question" = "¿Seguro que finalizar el proceso?";
"phingers_tf_component_exit_alert_finish" = "Finalizar";
"phingers_tf_component_exit_alert_accept" = "Aceptar";

// WIDGET
"phingers_tf_component_label_frame" = "Mantenga los dedos firmes";
"phingers_tf_component_label_morethan_expected_fingers" = "Más de %d %@";
"phingers_tf_component_label_fingers" = "Dedos";
"phingers_tf_component_label_finger" = "Dedo";
"phingers_tf_component_label_hold_fingers_horizantally" = "Sostén %@ horizontalmente";
"phingers_tf_component_label_hold_fingers_vertically" = "Sostén %@ verticalmente";
"phingers_tf_component_label_tooFar" = "Por favor, acerca tu mano";
"phingers_tf_component_label_tooClose" = "Por favor, aleja tu mano";
"phingers_tf_component_label_lowFocus" = "Bajo enfoque. Intenta mover la mano";
"phingers_tf_component_label_goodFocus" = "Mantén tu mano firme";
"phingers_tf_component_label_right_4_fingers" = "4 dedos derechos";
"phingers_tf_component_label_left_4_fingers" = "4 dedos izquierdos";
"phingers_tf_component_label_thumbs" = "Pulgares";
"phingers_tf_component_label_right_thumb" = "Pulgar derecho";
"phingers_tf_component_label_left_thumb" = "Pulgar izquierdo";
"phingers_tf_component_label_right_index" = "Índice derecho";
"phingers_tf_component_label_right_middle" = "Medio derecho";
"phingers_tf_component_label_right_ring" = "Anular derecho";
"phingers_tf_component_label_right_little" = "Meñique derecho";
"phingers_tf_component_label_left_index" = "Índice izquierdo";
"phingers_tf_component_label_left_middle" = "Medio izquierdo";
"phingers_tf_component_label_left_ring" = "Anular izquierdo";
"phingers_tf_component_label_left_little" = "Meñique izquierdo";
"phingers_tf_component_label_progress" = "Procesando...";
"phingers_tf_component_label_right" = "Derecha";
"phingers_tf_component_label_left" = "Izquierda";
"phingers_tf_component_label_four_fingers" = "4 dedos";
"phingers_tf_component_label_left_or_right_num_fingers" = "%@ %d dedos";
"phingers_tf_component_label_thumb" = "Pulgar";
"phingers_tf_component_label_hand" = "Mano";
"phingers_tf_component_label_wronghand" = "Se ha detectado la mano incorrecta\nPor favor, presenta %@";
"phingers_tf_component_label_too_few_fingers_detected" = "Se han detectado muy pocos dedos";

```

De este modo, si se desea modificar por ejemplo el texto “_Finalizar_” de la clave `phingers_tf_component_exit_alert_finish` para el idioma **es-MX**, se deberá ir al archivo **Localizable.strings** de la carpeta **es-MX.lproj** si es que existe (si no, se deberá crear) y ahí, añadir:

`"phingers_tf_component_exit_alert_finish"="Terminar";`

Si un mensaje no se especifica en el fichero del idioma, este se rellenará con el mensaje por defecto.