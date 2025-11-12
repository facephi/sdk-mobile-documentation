# Status Component

## 1. Introducción

El componente al que hace referencia esta documentación es **_StatusComponent_**. Se encarga de implementar y modificar multitud de aspectos relacionados con la UI de todos los componentes. Los elementos que se pueden personalizar son:

- Colores

- Imágenes

- Dimensiones (tamaños,...)

- Fuentes

---

### 1.1 Requisitos mínimos

La versión mínima de la SDK de iOS requerida es la siguiente:

Versión mínima de iOS: **13**

---

## 2. Integración del componente

Para utilizar Status Component con el SDK, es necesario enviar una instancia como parámetro en la función **_initSdk_**:

```
SDKController.shared.initSdk(
        ...,
        statusController: StatusController()
    )
```

### 2.1. Dependencias requeridas para la integración

Ninguna

#### Cocoapods

- Actualmente las librerías de FacePhi se distribuyen de forma remota a través de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias **obligatorias** que deberán haberse instalado previamente (añadiéndolas en el fichero Podfile del proyecto) son:


```
  pod 'FPHISDKMainComponent', '~> 2.4.0'
```

- Para instalar el componente de Status deberá incluirse la siguiente entrada en el Podfile de la aplicación:


```
  pod 'FPHISDKStatusComponent', '~> 2.4.0'
```

- Una vez instaladas las dependencias, se podrá hacer uso de las diferentes funcionalidades del componente.

#### SPM

- Las dependencias obligatorias que deberán haberse instalado previamente son:

```
//HTTPS
https://github.com/facephi-clienters/SDK-SdkPackage-SPM.git
//SSH
git@github.com:facephi-clienters/SDK-SdkPackage-SPM.git
```

- Para instalar el componente de Status deberá incluirse en los módulos del proyecto:

```
//HTTPS
https://github.com/facephi-clienters/SDK-StatusPackage-SPM.git
//SSH
git@github.com:facephi-clienters/SDK-StatusPackage-SPM.git
```

---


## 3. Controladores disponibles

|                  |                                          |
| ---------------- | ---------------------------------------- |
| **Controlador**  | **Descripción**                          |
| StatusController | Contiene los métodos expuestos en la API |

---

## 4. Personalización

La customización del componente se gestiona con "Themes". Estos temas implementan el ThemeStatusProtocol:

```
public protocol ThemeStatusProtocol {
    var name: String { get } // Description of the theme
    var fonts: [R.Font: String] { get }
    var dimensions: [R.Dimension: CGFloat] { get }
    var images: [R.Image: UIImage?] { get }
    var colors: [R.Color: UIColor?] { get }
}
```

Un custom theme puede editar esos valores. Por defecto hay un ThemeStatus que se utiliza en caso de no haberse configurado uno custom.

### 4.1 Colores

Colores disponibles para personalizar:

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

Por defecto:

![Image](/ios/Status/status_colors-001.png)

#### 4.1.1 Personalizar colores con xcassets

Al ser usado, el StatusComponent comprobará primero si un color con el mismo nombre existe ya entre los assets de la aplicación principal.

Si existe, sobreescribirá el valor por defecto.
Si no existe, se utilizará el valor configurado en el tema activo.

#### 4.1.2 Personalizar colors con un Theme

Los colores se pueden personalizar mediante una clase Theme:

```
import statusComponent
...

class CustomThemeStatus: ThemeStatusProtocol {
    ...
    var colors: [R.Color: UIColor?] = [
        R.Color.sdkPrimaryColor: UIColor.red,
        R.Color.sdkBackgroundColor: UIColor.white,
        ...
    ]
}
```

### 4.2 Imágenes

Imágenes disponibles para customizar:

```java
enum Image: String, CaseIterable {
    case ic_sdk_close
    case ic_sdk_close_arrow
    case ic_sdk_error_connection
    case ic_sdk_error_timeout
    case ic_sdk_unknown_error
    case ic_sdk_permission_camera
    case ic_sdk_permission_micro
    case ic_sdk_permission_generic
    case ic_sdk_logo
    case ic_sdk_info
    case ic_status_success
    case ic_status_dot_primary
    case ic_status_dot_variant
    case ic_sdk_pager_back
    case ic_sdk_pager_forward
}
```

Por defecto:

![Image](/ios/Status/status_images-001.png)

#### 4.2.1 Personalizar imágenes con xcassets

Al ser usado, el StatusComponent comprobará primero si una imagen con el mismo nombre existe ya entre los assets de la aplicación principal.

Si existe, sobreescribirá el valor por defecto.
Si no existe, se utilizará el valor configurado en el tema activo.

#### 4.2.2 Personalizar imágenes con un Theme

Las imágenes se pueden personalizar mediante una clase Theme:

```java
import statusComponent
...

class CustomThemeStatus: ThemeStatusProtocol {
    ...
    var images: [R.Image: UIImage?] = [
        R.Image.ic_sdk_close_arrow: UIImage(named: "custom_arrow_icon"),
        ...
    ]
}
```

### 4.3 Fuentes

Fuentes disponibles para personalizar:

```
enum Font: String {
    case regular
    case bold
}
```

Por defecto:

```
public var fonts: [R.Font: String] {
    [.bold: "Poppins-SemiBold",
     .regular: "Poppins-Regular"]
}
```

**_Poppins-Regular_**
![Image](/ios/Status/status_fonts-001.png)

**_Poppins-SemiBold_**
![Image](/ios/Status/status_fonts-002.png)

#### 4.3.1 Personalizando las fuentes

Las fuentes se pueden personalizar mediante la creación de una clase Theme:

```
import statusComponent
...

class CustomThemeStatus: ThemeStatusProtocol {
    ...
    var fonts: [R.Font: String] = [
        .bold: "Comic Sans Bold"
    ]
}
```

<div class="warning">
<span class="warning">:warning:</span>
***Usando una fuente custom:*** Las fuentes necesitan ser registradas antes de lanzar el componente. Cada ThemeManager registra sus propias fuentes, pero esta operación es asíncrona y puede causar _race conditions_. Al usar fuentes custom, se recomienda llamar a ThemeManager.setup(...) lo antes posible.
</div>

### 4.4 Dimensiones/Tamaños

Dimensiones disponibles para personalizar:

```java
enum Dimension: CGFloat {
    case fontExtraSmall
    case fontSmall
    case fontRegular
    case fontLarge
    case fontExtraLarge
    case radiusCorner
    case radiusCornerSmall
    case outlinedBorderWidth
}
```

Por defecto:

```java
public var dimensions: [R.Dimension : CGFloat] {
        [.fontExtraSmall: 16,
         .fontSmall: 18,
         .fontRegular: 20,
         .fontLarge: 24,
         .fontExtraLarge: 32,
         .radiusCorner: 30,
         .radiusCornerSmall: 12,
         .outlinedBorderWidth: 1]
```

#### 4.4.1 Personalizar dimensiones

Las dimensiones pueden ser personalizadas mediante la creación de una clase Theme:

```java
import statusComponent
...

class CustomThemeStatus: ThemeStatusProtocol {
    ...
    var dimensions: [R.Dimension: CGFloat] = [
        .fontBig: 8,
        R.Dimension.radiusCorner: 5,
        ...
    ]
}
```

### 4.5 Textos - Multiidioma

#### 4.5.1 Configuración de idiomas por defecto

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

#### 4.5.2 Configuración de idiomas personalizada

El componente permite la personalización de los textos según el idioma, el cual al igual que en el anterior caso, será definido por el lenguaje que esté seleccionado en el dispositivo.

Esta personalización se aplica tanto a nuevas localizaciones como al caso de los idiomas predeterminados (es, en y pt). Se hace a través del uso de los archivos **Localizable.strings.**

#### 4.5.3 Keys para multiidioma

Los textos pueden ser customizados sobreescribiendo el valor de las siguientes claves en un **Localizable.strings**. 
Las claves que contienen el sufijo **_\_alt_** son los literales utilizados en las etiquetas de accesibilidad necesarias para la funcionalidad de **_voice over_**.

```java
"sdk_network_connection_desc"="Comprueba que tu conexión es estable e inténtalo de nuevo.";
"sdk_network_connection_title"="Revisa tu conexión a internet";
"sdk_retry_button_message"="REINTENTAR";
"sdk_finish_button_message"="FINALIZAR";
"sdk_timeout_desc"="";
"sdk_timeout_title"="Tiempo superado";
"sdk_unknown_desc"="";
"sdk_unknown_title"="Se ha producido un error";
"sdk_permissions_camera_title"="Permite el acceso a cámara";
"sdk_permissions_microphone_title"="Permite el acceso al micrófono";
"sdk_permissions_microphone_desc"="El permiso de voz es necesario para realizar la grabación.";
"sdk_permissions_camera_desc"="Para capturar las imágenes necesitamos que actives este permiso.";
"sdk_permissions_settings_message"="IR A PERMISOS";
"sdk_tutorial_skip_button_message"="OMITIR";
"sdk_tutorial_next_button_message"="SIGUIENTE";
"sdk_tutorial_previous_button_message"="ANTERIOR";
"sdk_tutorial_finish_button_message"="FINALIZAR";
"sdk_exit_alert_cancel" = "Cancel";
"sdk_exit_alert_question" = "¿Seguro que quiere finalizar el proceso?";
"sdk_exit_alert_finish" = "Finalizar";
"sdk_exit_alert_accept" = "Aceptar";
"sdk_close_alt" = "Cerrar";
"sdk_back_alt" = "Atrás";
"sdk_tutorial_alt" = "Tutorial";
"sdk_tutorial_skip_button_alt"="Omitir";
"sdk_tutorial_next_button_alt"="Siguiente consejo";
"sdk_tutorial_previous_button_alt"="Consejo anterior";
"sdk_tutorial_finish_button_alt"="Finalizar";
```

De este modo, si se desea modificar por ejemplo el texto “_Finalizar_” de la clave `sdk_exit_alert_finish` para el idioma **es-MX**, se deberá ir al archivo **Localizable.strings** de la carpeta **es-MX.lproj** si es que existe (si no, se deberá crear) y ahí, añadir:

`"sdk_exit_alert_finish"="Terminar";`

Si un mensaje no se especifica en el fichero del idioma, este se rellenará con el mensaje por defecto.

### 4.6 Ejemplo Completo

Un ejemplo completo de CustomThemeStatus podría ser:

```java
import statusComponent

class CustomThemeStatus: ThemeStatusProtocol {
    var name: String {
        "custom"
    }

    var images: [R.Image: UIImage?] = [
        R.Image.ic_sdk_close_arrow: UIImage(named: "custom_arrow_icon"),
        // If the rest is not configured, only the ic_sdk_close_arrow is overrided and customized
    ]

    var colors: [R.Color: UIColor?] = [
        R.Color.sdkPrimaryColor: UIColor.red,
        R.Color.sdkBackgroundColor: UIColor.white,
    ]

    var dimensions: [R.Dimension: CGFloat] = [
        .fontBig: 8,
        R.Dimension.radiusCorner: 5,
    ]
    var fonts: [R.Font: String] = [
        .bold: "Comic Sans Bold"
    ]
}
```

Una vez implementado, asignamos la instancia de nuestro tema custom de la siguiente manera:

```java
import statusComponent
...
ThemeStatusManager.setup(theme: CustomThemeStatus())
...
```

---

## 5. Ejemplo funcional

Hay 4 vistas distintas dentro de StatusComponent que pueden ser configuradas.

Además de usando un tema, la customización puede realizarse utilizando assets. En este ejemplo, podemos ver el resultado de crear los recursos personalizados con los siguientes valores: 

![Image](/ios/Status/status_assets_customization-001.png)

### 5.1 Vista de Información principal

Esta vista se muestra en todos los componentes por defecto, aunque puede omitirse si en el controlador específico, se asigna a _false_ el parámetro _showTutorial_.

Normalmente es la primera página que el usuario ve tras lanzar el controlador.

![MobileCapture](/ios/Status/status_tips-001.png)

### 5.2 Vistas de tutorial por pasos

El tutorial es accesible desde el botón  **_Más Información_**. Se trata de un conjunto de vistas que ayudan a detallar el proceso al usuario.

![MobileCapture](/ios/Status/status_tutorial-001.png)

### 5.3 Vista de Diagnóstico

La vista de Diagnóstico se muestra para informar al usuario de algo importante que ocurre durante el proceso.

![MobileCapture](/ios/Status/status_diagnostic-001.png)

### 5.4 Vista de Permisos

Similar a la vista de Diagnóstico. Se muestra cuando el proceso de captura necesita la aprobación del usuario para que la aplicación pueda acceder a alguna funcionalidad del dispositivo (cámara, micrófono,...). Una diferencia importante entre esta vista y la de Diagnóstico es que en esta existe un botón que al pulsarlo te lleva a los Ajustes de Permisos del dispositivo.

**_Permiso de acceso a la cámara rechazado_**

![MobileCapture](/ios/Status/status_permissions-001.png)

**_Permiso de acceso al micrófono rechazado_**

![MobileCapture](/ios/Status/status_permissions-002.png)
