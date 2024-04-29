# Aplicaciones de ejemplo

## Introducción

Las aplicaciones de ejemplo se pueden encontrar en el repositorio de GitHub:

[![IOS Repository](@site/static/img/github_50.png)](https://github.com/facephi/sdk-mobile-ios-samples)<a href="https://github.com/facephi/sdk-mobile-ios-samples" rel="nofollow">Repositorio IOS</a>


### Pasos para configurar y ejecutar las aplicaciones

#### 1.Integración inicial

En esta sección se explicará paso a paso cómo integrar el componente actual en un proyecto ya existente.

##### Añadir repositorio privado
<div class="warning">
<span class="warning">:warning:</span>
Para tener acceso a nuestro repositorio privado, se requiere haber instalado previamente **Cocoapods** en la máquina.

Por cuestiones de seguridad y mantenimiento, los nuevos componentes de la **_SDKMobile_** se almacenan en unos repositorios privados que requieren de unas credenciales específicas para poder acceder a ellos. Esas credenciales deberá obtenerlas a través del equipo de soporte de Facephi. A continuación se indica como preparar el entorno para consumir los componentes:
</div>

- Primero instalamos el comando que nos dará acceso a usar cocoapods con **Artifactory**.

```java
sudo gem install cocoapods-art
```

- En caso de utilizar un Mac con **chip M1**, pueden surgir errores durante la instalación es posible que surjan errores en el futuro, de ser así, se recomienda usar en cambio el siguiente comando:
```java
sudo arch -arm64 gem install ffi; sudo arch -arm64 gem install cocoapods-art
```

En caso de tener problemas con la instalación, desinstalar completamente cocoapods y todas sus dependencias para hacer una instalación limpia.

- Necesitaremos añadir el repositorio a la lista del fichero **netrc**. Para ello, desde un Terminal, se ejecuta el siguiente comando:

```java
$ nano ~/.netrc
```

Y copiamos el siguiente fragmento con los datos correspondientes al final del fichero:

```java
machine facephicorp.jfrog.io
  login <USERNAME>
  password <TOKEN>
```

Es importante copiar de manera **exacta** el anterior fragmento de código. El indentado previo a las palabras **login** y **password** está formado por dos espacios.

- Finalmente se añadirá el repositorio que contiene dependencias privada:

```java
pod repo-art add cocoa-pro-fphi "https://facephicorp.jfrog.io/artifactory/api/pods/cocoa-pro-fphi"
```

#### 2. Licencia
Es necesario incluir el applicationId de la licencia facilitada por Facephi en el Gradle de la aplicación.

#### 3. Configuración
Rellenar los datos de SdkData.


### SdkData - Datos necesarios para el uso del SDK

Para que la aplicación funcione correctamente se deberán rellenar los siguientes datos.

En la clase SdkData:

- Datos necesarios si se va a utilizar un servicio para obtener las licencias:
	- licensingUrl
	- apiKey
```java
        SDKController.shared.initSdk(
            licensingUrl: SdkConfigurationManager.LICENSING_URL,
            apiKey: SdkConfigurationManager.APIKEY_LICENSING,
            output: { sdkResult in
                if sdkResult.finishStatus == .STATUS_OK {
                    self.sdkData = sdkResult.data ?? ""
                    self.log("Licencia automática seteada correctamente")
                } else {
                    self.log("Ha ocurrido un error al intentar obtener la licencia: \(sdkResult.errorType)")
                }
            })
```

- String de la licencia si no se va a utilizar un servicio:

```java
        SDKController.shared.initSdk(
            license: SdkConfigurationManager.license,
            output: { sdkResult in
                if sdkResult.finishStatus == .STATUS_OK {
                    self.log("Licencia manual seteada correctamente")
                } else {
                    self.log("La licencia manual no es correcta")
                }
            })
```

- Identificador del cliente y tipo de operación que se va a utilizar en la inicialización:

```java
const val CUSTOMER_ID = "...."
val OPERATION_TYPE = OperationType.ONBOARDING

```

- Para Selphi el nombre del fichero ZIP de recursos (que estará en la carpeta assets de la aplicación) y los datos de configuración:

```java
var configSelphi = SelphiConfigurationData()

let resourcesSelphi: String = {
    let selphiZipName = "fphi-selphi-widget-resources-sdk"
    return Bundle.main.path(
        forResource: selphiZipName,
        ofType: "zip") ?? ""
}()
```

- Para SelphID el nombre del fichero ZIP de recursos (que estará en la carpeta assets de la aplicación) y los datos de configuración:
```java
var configSelphID = SelphIDConfigurationData()

let resourcesSelphID: String = {
    let selphiZipName = "fphi-selphid-widget-resources-sdk"
    return Bundle.main.path(
        forResource: selphiZipName,
        ofType: "zip") ?? ""
}()
        
```


- ***IMPORTANTE: El applicationId de la aplicación debe coincidir con el que se ha solicitado en la licencia***