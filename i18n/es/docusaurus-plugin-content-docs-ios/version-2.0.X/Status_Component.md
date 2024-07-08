# Status Component

## 1. Introducción

El _Componente_ del que se trata en el documento actual se llama **_StatusComponent_**. Se encarga de la interfaz de usuario común utilizada en los componentes. Este _Componente_ puede ser completamente personalizado. Los elementos que puede sobreescribir/cambiar son:

- Animaciones

- Colores

- Imágenes

- Dimensions (valores para el tamaño, bordes,...)

- Fuentes

---

### 1.1 Requisitios minimos
La versión mínima requerida del SDK de iOS es la siguiente:

Versión mínima de iOS: **13**

---

## 2. Integración del componente

Antes de integrar este componente, se recomienda leer la documentación relacionada con [Primeros Pasos](./Mobile_SDK) y seguir sus instrucciones.

Para usar el StatusComponent con el SDK, se necesita pasar una instancia como parámetro en la función initSdk:

```
SDKController.shared.initSdk(
        ...,
        statusController: StatusController()
    )
```

Cuando se proporciona una instancia de StatusController, los Componentes mostrarán un tutorial antes del lanzamiento, una pantalla de diagnóstico en caso de errores, etc.

### 2.1. Dependencias necesarias para la integración

Ninguna

#### CocoaPods

- Actualmente, las librerías FacePhi se distribuyen de forma remota a través de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias **obligatorias** que deben haberse instalado previamente (añadiéndolas en el archivo Podfile del proyecto) son:

```
  pod 'FPHISDKMainComponent', '~> 2.0.0'
```

- Para instalar el StatusComponent, se debe incluir la siguiente entrada en el Podfile de la aplicación:


```
  pod 'FPHISDKStatusComponent', '~> 2.0.0'
```

- Una vez instaladas las dependencias, se podrán utilizar las diferentes funcionalidades del componente.

#### SPM

- Las dependencias obligatorias que deben haberse instalado previamente son:

```
//HTTPS
https://github.com/facephi-clienters/SDK-SdkPackage-SPM.git
//SSH
git@github.com:facephi-clienters/SDK-SdkPackage-SPM.git
```

- Para instalar el StatusComponent, debe incluirse en los módulos del proyecto:

```
//HTTPS
https://github.com/facephi-clienters/SDK-StatusPackage-SPM.git
//SSH
git@github.com:facephi-clienters/SDK-StatusPackage-SPM.git
```

## 3. Controladores disponibles

|                   |                                      |
| ----------------- | ------------------------------------ |
| **Controller**    | **Description**                      |
| StatusController  | Contiene los métodos API expuestos   |

---


## 4 Personalizar

La personalización del componente se gestiona con "Temas".  Estos temas implementan ThemeStatusProtocol:

```
public protocol ThemeStatusProtocol {
    var name: String { get } // Description of the theme
    var fonts: [R.Font: String] { get }
    var dimensions: [R.Dimension: CGFloat] { get }
    var images: [R.Image: UIImage?] { get }
    var colors: [R.Color: UIColor?] { get }
}
```

Un tema personalizado puede editar cualquiera de esos valores. De forma predeterminada, existe un ThemeStatus que se usa cuando un parámetro no está configurado.

### 4.1 Colores

Colores disponibles para personalizar:

```
enum Color: String, CaseIterable {
    case sdkPrimaryColor
    case sdkSecondaryColor
    case sdkBackgroundColor
    case sdkTitleTextColor
    case sdkBodyTextColor
    case sdkPrimaryVariantColor
    case sdkTopIconsColor
    case sdkErrorColor
    case sdkSuccessColor
    case sdkNeutralColor
    case sdkAccentColor
}
```

#### 4.1.1 Personalizar colores con xcassets

Cuando se usa, el StatusComponent comprobará primero si existe un recurso de color con el mismo nombre que el "case" del enum en la aplicación principal.

Esta opción sobreescribe lo configurado por el "Theme".
Si el recurso no se encuentra en la aplicación principal, tomará el valor del "Theme" configurado.

#### 4.1.2 Personalizar colores con un tema

Los colores se pueden personalizar con la creación de una clase Theme:

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

Imágenes dispnibles para personalizar:

```
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
}
```

#### 4.2.1 Personalizar imágenes con xcassets

Cuando se usa, el StatusComponent comprobará primero si existe un recurso de imagen con el mismo nombre que el "case" del enum en la aplicación principal.

Esta opción reemplaza el tema.
Si el recurso no se encuentra en la aplicación principal, tomará el valor del "Tema" configurado.

#### 4.2.2 Personalizar imágenes con un tema

Las imágenes se pueden personalizar con la creación de una clase Theme:

```
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

#### 4.3.1 Personalizar fuentes

Las fuentes se pueden personalizar con la creación de una clase Theme:

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

### 4.4 Dimensiones

Dimensiones disponibles para personalizar:

```
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

#### 4.4.1 Personalizar dimensiones 

Las dimensiones se pueden personalizar con la creación de una clase Theme:

```
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

### 4.5 Ejemplo funcional

Un ejemplo práctico completo sería:

```
import statusComponent

class CustomThemeStatus: ThemeStatusProtocol {
    var name: String {
        "custom"
    }

    var images: [R.Image: UIImage?] = [
        R.Image.ic_sdk_close_arrow: UIImage(named: "custom_arrow_icon"),
        // Los parámetros no configurados no serán sobreescritos, se seguirá utilizando su valor por defecto
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

Una vez implementado, asignamos la instancia a nuestro "theme" personalizado de la siguiente manera:

````
import statusComponent
...
ThemeStatusManager.setup(theme: CustomThemeStatus())
...
```