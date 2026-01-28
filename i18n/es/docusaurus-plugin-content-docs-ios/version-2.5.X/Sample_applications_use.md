# Aplicaciones de ejemplo

## Introducción

Las aplicaciones de ejemplo se pueden encontrar en el repositorio de GitHub:

[![IOS Repository](@site/static/img/github_50.png)](https://github.com/facephi/sdk-mobile-ios-samples)<a href="https://github.com/facephi/sdk-mobile-ios-samples" rel="nofollow">Repositorio IOS</a>


### Pasos para configurar y ejecutar las aplicaciones

1. Para tener acceso a nuestro repositorio privado, se requiere haber instalado previamente Cocoapods en la máquina como se indica en la <a
   href="Mobile_SDK#21-a%C3%B1adir-repositorio-privado" rel="nofollow">documentación del SDK</a>
2. Es necesario incluir el applicationId de la licencia facilitada por Facephi en el Bundle Identifier de la aplicación.
3. Rellenar los datos de SdkConfigurationManager.

### SdkConfigurationManager - Datos necesarios para el uso del SDK

Para que la aplicación funcione correctamente se deberán rellenar los siguientes datos.

En la clase SdkConfigurationManager:

- Datos necesarios si se va a utilizar un servicio para obtener las licencias:

```java
static let APIKEY_LICENSING = "..."
static let LICENSING_URL = URL(string: "...")!
```

- String de la licencia si no se va a utilizar un servicio:

```java
static let license = ""
```

- Dependiendo de cómo se haya añadido la licencia adaptar el valor de la variable:

```java
static let onlineLicensing = true
```

- Identificador del cliente y tipo de operación que se va a utilizar en la inicialización:

```java
static let CUSTOMER_ID = "sdk-full-ios@ejemplo"
```

- Para Selphi, en la clase selphiConfiguration, el nombre del fichero ZIP de recursos (que estará en la carpeta assets de la aplicación) y los datos de configuración:

```java
var configSelphi = SelphiConfigurationData()

let resourcesSelphi: String = {
    let selphiZipName = "fphi-selphi-widget-resources-sdk"
    return Bundle.main.path(
        forResource: selphiZipName,
        ofType: "zip") ?? ""
}()

...
configSelphi.resourcesPath = resourcesSelphi
...

```

- Para SelphID, en la clase selphIDConfiguration, el nombre del fichero ZIP de recursos (que estará en la carpeta assets de la aplicación) y los datos de configuración:

```java
var configSelphID = SelphIDConfigurationData()

let resourcesSelphID: String = {
    let selphiZipName = "fphi-selphid-widget-resources-sdk"
    return Bundle.main.path(
        forResource: selphiZipName,
        ofType: "zip") ?? ""
}()

...
configSelphID.resourcesPath = resourcesSelphID
...
```
- Para hacer uso de los servicios de verificacion hay que incluir la BASE_URL:

```java
static let BASE_URL = ""
static let METHOD_PASSIVE_LIVENES = ""
static let METHOD_AUTH_FACIAL = ""
```

**IMPORTANTE: El applicationId de la aplicación debe coincidir con el que se ha solicitado en la licencia**
