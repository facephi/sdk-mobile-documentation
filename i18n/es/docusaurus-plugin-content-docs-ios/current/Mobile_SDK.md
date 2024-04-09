# Getting Started

## 1. Introducción

**SDK Mobile** es un conjunto de librerías (**_Componentes_**) que ofrece una serie de funcionalidades y servicios, permitiendo a su vez su integración en una aplicación Mobile de forma sencilla y totalmente escalable. Dependiendo del caso de uso que se requiera, se deberá realizar la instalación de unos determinados componentes. Su alto nivel de modularidad permite que, en un futuro, se puedan añadir otros componentes nuevos sin afectar en absoluto a los ya integrados en el proyecto.

### 1.1 Requisitos mínimos

La versión mínima de la SDK de iOS requerida es la siguiente:

- iOS: **13**

---

## 2. Integración inicial

En esta sección se explicará paso a paso cómo integrar el componente actual en un proyecto ya existente.

### 2.1 Añadir repositorio privado

Para tener acceso a nuestro repositorio privado, se requiere haber instalado previamente **Cocoapods** en la máquina.

Por cuestiones de seguridad y mantenimiento, los nuevos componentes de la **_SDKMobile_** se almacenan en unos repositorios privados que requieren de unas credenciales específicas para poder acceder a ellos. Esas credenciales deberá obtenerlas a través del equipo de soporte de Facephi. A continuación se indica como preparar el entorno para consumir los componentes:


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

### 2.2. Dependencias requeridas para la integración

Para evitar conflictos y problemas de compatibilidad, en caso de querer instalar el componente en un proyecto que contenga una versión antigua de las librerías de Facephi (Widgets), éstos deberán eliminarse por completo antes de la instalación de los componentes de la **SDKMobile**.

- Actualmente las librerías de FacePhi se distribuyen de forma remota a través de diferentes gestores de dependencias. Las dependencias **obligatorias** que deberán haberse instalado previamente:

```java
plugin 'cocoapods-art', :sources => [
  'cocoa-pro-fphi’
]

source 'https://cdn.cocoapods.org/'

target 'Example' do
  pod 'JWTDecode'
  pod 'SwiftFormat/CLI'
  pod 'IQKeyboardManagerSwift'
  pod 'FPHISDKMainComponent'
  pod 'FPHISDKCoreComponent'

   post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings['EXPANDED_CODE_SIGN_IDENTITY'] = ""
      config.build_settings['CODE_SIGNING_REQUIRED'] = "NO"
      config.build_settings['CODE_SIGNING_ALLOWED'] = "NO"
    end
  end
end
...
end
```

- Cuando se quiera actualizar dependencias, antes de ejecutar el **_pod install_** hay que usar el siguiente comando para actualizar el repositorio local:

  ```java
  pod repo-art update cocoa-pro-fphi
  ```

### Posibles incidencias

En el caso de que el integrador utilice un Macbook con Chip **M1**, cabe la posibilidad de que la instalación de cocoapods-art no se realice correctamente. Por ello, se debe tener en cuenta los siguientes puntos:

- Si cocoapods se ha instalado mediante Homebrew puede haber problemas.

- Se recomienda instalar cocoapods y cocoapods-art usando gem.

A continuación incluimos un script que permite realizar todos los pasos necesarios para dejar el entorno preparado para poder funcionar correctamente:

```java
 #! /bin/zsh

install_cocoapods () {
    echo "Installing cocoapods with gem"
    # Creating new gems home if it doesnt't exist
    if [ ! -d "$HOME/.gem" ]; then
        mkdir "$HOME/.gem"
    fi
    # Adding to current session
    export GEM_HOME="$HOME/.gem"
    export PATH="$GEM_HOME/bin:$PATH"

    # Adding for future sessions
    if test -f "$HOME/.zshrc"; then
        echo 'Adding $GEM_HOME env var and then adding it to your $PATH'
        echo '' >> "$HOME/.zshrc"
        echo 'export GEM_HOME="$HOME/.gem"' >> "$HOME/.zshrc"
        echo 'export PATH="$GEM_HOME/bin:$PATH"' >> "$HOME/.zshrc"
        echo 'alias pod='arch -x86_64 pod'' >> "$HOME/.zshrc"
    fi

    # Installing cocoapods
    gem install cocoapods
    sudo arch -x86_64 gem install ffi
    which pod
    pod --version
    gem install cocoapods-art
}

uninstall_cocoapods_homebrew () {
    which -s brew
    if [[ $? != 0 ]] ; then
        echo "Homebrew not installed, skipping uninstalling cocoapods from
homebrew"
    else
        brew uninstall cocoapods
    fi
}

if ! type "pod" > /dev/null; then
    echo "You don't have cocoapods installed..."
else
    echo "Trying to uninstall it from homebrew first"
    uninstall_cocoapods_homebrew
fi

install_cocoapods
```

En caso de usar **_xCode15_** se deberá realizar la siguiente configuración:

![Image](/iOS/fix_ldClassic.png)

Se deberá añadir **_-ld_classic_** en Other Linker Flags, en el Build Settings de la aplicación.

---

## 3. SDK initialization

**Debe evitarse inicializar un controlador que no vaya a usarse.**

Cada uno de los componentes tiene un controlador (_Controller_) que permitirá acceder a su propia funcionalidad. Antes de poder utilizarse, deberán inicializarse correctamente. Los pasos a seguir en la inicialización son:

Se inicializan los controladores que se van a utilizar.

Se decide si la licencia se incluirá a través de un String o con un servicio de licenciamiento remoto (consultar **apartado 3.1**), y se inicia la sdk.

Si la inicialización devuelve un .STATUS_OK el controlador del SDK estará listo para su uso.

```java
 let trackingController = TrackingController(trackingError: { trackingError in
      self.log("TRACKING ERROR: \(trackingError)")
  })

// MANUAL License
SDKController.shared.initSdk(license: SdkConfigurationManager.LICENSE, output: { sdkResult in
    if sdkResult.finishStatus == .STATUS_OK {
        self.log("Licencia manual seteada correctamente")
    } else {
        self.log("La licencia manual no es correcta")
    }
}, trackingController: trackingController)

// AUTO License
SDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in
    if sdkResult.finishStatus == .STATUS_OK {
        self.log("Licencia automática seteada correctamente")
    } else {
        self.log("Ha ocurrido un error al intentar obtener la licencia: \(sdkResult.errorType)")
    }
}, trackingController: trackingController)


```

###  3.1 Inyección de licencias

Como se ha comentado previamente, actualmente existen dos formas de inyectar la licencia:

#### a. Obteniendo la licencia a través de un servicio

A través de un servicio que simplemente requerirá una URL y un API-KEY como identificador. Esto evitaría problemas a la hora de manipular la licencia, así como la constante sustitución de dichas licencias a la hora de surgir algún problema con ella (malformación o modificación indebida, expiración de la licencia…)

```java
// AUTO License
SDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in
    if sdkResult.finishStatus == .STATUS_OK {
        self.log("Licencia automática seteada correctamente")
    } else {
        self.log("Ha ocurrido un error al intentar obtener la licencia: \(sdkResult.errorType)")
    }
}, trackingController: trackingController)
```

#### b. Inyectando la licencia como String

Se puede asignar la licencia directamente como un String, de la siguiente manera:

```java
// MANUAL License
SDKController.shared.initSdk(license: SdkConfigurationManager.LICENSE, output: { sdkResult in
    if sdkResult.finishStatus == .STATUS_OK {
        self.log("Licencia manual seteada correctamente")
    } else {
        self.log("La licencia manual no es correcta")
    }
}, trackingController: trackingController)
```

### 3.2 Opcionales

Los siguientes controller son opcionales, se añaden al final del initSDK de la siguiente forma:

#### 3.2.1 TrackingController

El controlador de TrackingController solo se añadirá en caso de tener el tracking de la sdkMobile.

Se añade el import:

```
import trackingComponent
```

trackingController: trackingController

Inicializamos:

```
let trackingController = TrackingController(trackingError: { trackingError in
      print("TRACKING ERROR: \(trackingError)")
})
```
Se añade en el initSDK:

```
// AUTO License
SDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in
    if sdkResult.finishStatus == .STATUS_OK {
        self.log("Licencia automática seteada correctamente")
    } else {
        self.log("Ha ocurrido un error al intentar obtener la licencia: \(sdkResult.errorType)")
    }
}, trackingController: trackingController)
```

#### 3.2.2. TokenizeController

Se añade el import:
```
import tokenizeComponent
```

Inicializamos:

```
let tokenizeController = TokenizeController()
```

Se añade en el initSDK:

```
// AUTO License
SDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in
    if sdkResult.finishStatus == .STATUS_OK {
        self.log("Licencia automática seteada correctamente")
    } else {
        self.log("Ha ocurrido un error al intentar obtener la licencia: \(sdkResult.errorType)")
    }
}, tokenizeController: tokenizeController)
```

#### 3.2.3 BehaviorController

Se añade el import:

```
import behaviorComponent
```

Inicializamos:
```

behaviorController = BehaviorController(autoLogoutAction: {
                      print("ACTIVE DEFENSE")
                      return true
                    },
                    behaviorError: { behaviorError in
                      print("BEHAVIOR ERROR: \(behaviorError)")
                    }, debugMode: false)
```

Se añade en el initSDK:

```

// AUTO License
SDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in
    if sdkResult.finishStatus == .STATUS_OK {
        self.log("Licencia automática seteada correctamente")
    } else {
        self.log("Ha ocurrido un error al intentar obtener la licencia: \(sdkResult.errorType)")
    }
}, behaviorController: behaviorController

```

#### 3.2.4 StatusController

Se añade el import:

```
import statusComponent
```

Inicializamos:
```
let statusController = StatusController()
```
Se añade en el initSDK:
```
// AUTO License
SDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in
    if sdkResult.finishStatus == .STATUS_OK {
        self.log("Licencia automática seteada correctamente")
    } else {
        self.log("Ha ocurrido un error al intentar obtener la licencia: \(sdkResult.errorType)")
    }
}, statusController: statusController)
```
---

## 4. Iniciar nueva operación

Cada vez que se desee iniciar el flujo de alguna operación nueva (ejemplos de operaciones serían: onboarding, authentication, videoCall,…) es esencial indicarle al **SDKController** que ésta va a comenzar, y así la SDK sabrá que las próximas llamadas de **Componentes** (también llamados **Steps**) formarán parte de dicha operación. Esto es necesario para trackear a la plataforma la información global de esta operación de forma satisfactoria.

Al iniciar un proceso o flujo, **<u> siempre </u>** se deberá realizar la llamada al método **newOperation**

Este método tiene 3 parámetros de entrada:

1. **operationType**: Indica si se va a hacer un proceso de ONBOARDING o de AUTHENTICATION

2. **customerId**: Id único del usuario si se tiene (controlado a nivel de aplicación)

3. **steps**: Lista de pasos de la operación si se han definido previamente

Hay 2 maneras de realizar este inicio de operación, dependiendo de si **se conocen los pasos** que formarán el flujo del proceso de registro o autenticación (en caso de que los componentes se ejecuten de forma secuencial y siempre de la misma forma) o, en caso contrario, de que el flujo **no esté definido** y sea desconocido (por ejemplo, el cliente final es el que decide el orden de ejecución de los componentes).

- Flujo **conocido** (aparecerá la operación trackeada en la plataforma con todos los pasos de la lista). Ejemplo de implementación:

```java
SDKController.shared.newOperation(operationType: OperationType.X, customerId: "customerId", steps: [.SELPHI, .SELPHID, .OTHER("CUSTOM_STEP")], output: { _ in })
```

- Flujo **desconocido** (aparecerá la operación trackeada en la plataforma con puntos suspensivos). Ejemplo de implementación:

```java
SDKController.shared.newOperation(operationType: OperationType.X, customerId: "customerId", output: { _ in})
```

`sdkResult` → Contiene en data la información de la operación creada.

**Una vez creada la operación** se podrán ejecutar los componentes de la SDK asociados a esta operación. Consultar la documentación específica de cada componente para saber cómo hacerlo.

### 4.1 Tipos de operación existentes

En la actualidad, existen las siguientes operaciones, durante las cuales se hacen uso de unos determinados **Componentes (STEPS)**. A continuación se muestra una tabla con la relación entre operaciones y steps:

| **Operación (OperationType)** | **Componente (Step)**                  | Descripción                                                                                                                             |
| ----------------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ONBOARDING                    | SELPHI_COMPONENT<br/>SELPHID_COMPONENT | - Validación facial de un selfie contra la cara de un documento <br/> - Extracción del OCR del documento <br/> - Detección de vivacidad |
| AUTHENTICATION                | SELPHI_COMPONENT                       | - Validación facial mediante plantillas <br/> - Detección de vivacidad                                                          |

Esta lista se irá ampliando en próximas actualizaciones de la SDK, según vayan apareciendo nuevos componentes y casos de uso.

---

## 5. Lanzamiento de componentes

Una vez creada la **nueva operación (apartado 4)**, se podrán lanzar los diferentes controladores de la SDK. Para consultar esta información se deberá acceder a la **documentación de cada uno de los componentes específicos**.


---

## 6. Retorno de resultado

El resultado de cada componente será devuelto a través de la SDK manteniendo siempre la misma estructura de 3 campos:

1.  **finishStatus**: Que nos indicará si la operación ha finalizado
    correctamente. Posibles valores `FinishStatus.STATUS_OK`,
    `FinishStatus.STATUS_ERROR`

2.  **errorType**: Si _finishStatus_ indica que ha habido un error, este
    campo tendrá la descripción del mismo.

3.  **data**: Tendrá los datos de respuesta de la función del SDK. Este
    campo será diferente dependiendo del componente que se haya
    ejecutado. En la documentación de cada componente específico se
    desglosarán los diferentes campos que puede devolver este objeto.

En la documentación de cada componente específico se desglosarán los diferentes campos que puede devolver este objeto

---

## 7. Cierre de sesión / Logout

**Antes de que la aplicación se vaya a destruir**, se deberá cerrar la sesión de la SDK para así avisar a la plataforma de su finalización. Para ello, se ejecuta la siguiente línea de código:

```java
SDKController.shared.closeSession()
```

Si se realiza un cierre de sesión, no se van a poder lanzar controladores hasta que se vuelva a iniciar una nueva operación.

---

## 8. Opciones de depuración y gestión de errores

Si un componente es llamado, devolverá un SdkResult como salida. El siguiente fragmento de código de
siguiente fragmento de código es un ejemplo de esto:

```java
        let controlador = ComponentController(datos: ComponentConfigurationData, output: { sdkResultado en
           print(sdkResult.errorType)
        }, viewController: viewController)
        SDKController.shared.launch(controlador: controlador)
```

El atributo .errorType contiene la tipología de los errores. Se definen
en la documentación de cada componente.

Los posibles tipos de error son los siguientes:

```java
public enum ErrorType: String, Error {
    case CANCEL_BY_USER
    case TIMEOUT
    case COMPONENT_CONTROLLER_ERROR
    case COMPONENT_CONTROLLER_DATA_ERROR
    case NETWORK_CONNECTION
    case UNKNOWN_ERROR
    case NFC_ERROR
    case NFC_INVALID_MRZ_KEY 
    case CAPTURE_ERROR
    case NO_ERROR
    case CAMERA_PERMISSION_DENIED
    case PERMISSION_DENIED
    case SETTINGS_PERMISSION_ERROR
    case HARDWARE_ERROR
    case EXTRACTION_LICENSE_ERROR
    case UNEXPECTED_CAPTURE_ERROR
    case CONTROL_NOT_INITIALIZATED_ERROR 
    case BAD_EXTRACTOR_CONFIGURATION_ERROR
    case TOKEN_ERROR
    case PHINGERS_ERROR_CAPTURE 
    case LICENSING_ERROR_PACKAGE_NAME
    case LICENSING_ERROR_APPID_INVALID
    case LICENSING_ERROR_APIKEY_FORBIDDEN
    case LICENSING_ERROR_LICENSE_NOT_FOUND
    case VIDEO_SOCKET_TIMEOUT
    case VIDEO_ERROR
    case LICENSE_CHECKER_ERROR_INVALID_LICENSE
    case LICENSE_CHECKER_ERROR_INVALID_COMPONENT_LICENSE
    case NO_OPERATION_CREATED_ERROR
}
```

Si no hay ningún error y el resultado se devuelve correctamente, el tipo de error
será **NO_ERROR**.

---

## 9. Control de errores

Al realizar la llamada a cualquiera de los componentes, siempre tendremos como respuesta un output de tipo SdkResult como vemos en el código de ejemplo:

```java
        let controller = ComponentController(data: ComponentConfigurationData, output: { sdkResult in
           print(sdkResult.errorType)
        }, viewController: viewController)
        SDKController.shared.launch(controller: controller)
```

En el atributo .errorType, tendremos la tipología del error. Las tipologías de error están definidas en la documentación propia de cada componente.

Los códigos de error que podría recibir son los siguientes.

```java
public enum ErrorType: String, Error {
    case NO_ERROR
    case UNKNOWN_ERROR
    case OTHER(String)
    case COMPONENT_CONTROLLER_DATA_ERROR
    case NO_OPERATION_CREATED_ERROR
    case NETWORK_CONNECTION
    case CAMERA_PERMISSION_DENIED
    case MIC_PERMISSION_DENIED
    case LOCATION_PERMISSION_DENIED
    case STORAGE_PERMISSION_DENIED
    case CANCEL_BY_USER
    case TIMEOUT
    case LICENSE_CHECKER_ERROR_INVALID_LICENSE
    case LICENSE_CHECKER_ERROR_INVALID_COMPONENT_LICENSE
}
```

En caso de no existir ningún error y el resultado se devuelva correctamente, el errorType seria del tipo **NO_ERROR**.

---

## 10. Personalización de la SDK

La personalización se realiza mediante una clase del componente llamada Theme***Component***Manager. Donde ***Component*** debe sustituirse por el componente deseado.

Por ejemplo, videoidComponent contiene `ThemeVideoIdManager`, mientras que videocallComponent `ThemeVideoCallManager` …

Este manager posee una instancia del tipo Theme***Component***Protocol. Si queremos personalizar cualquier detalle, tendríamos que crear una nueva clase que se adhiera a esta interfaz e inyectarla al Theme***Component***Manager.

```java
class CustomThemeComponent: ThemeComponentProtocol {
    var images: [R.Image: UIImage?] = [:]

    var colors: [R.Color: UIColor?] = [R.Color.MessageText: UIColor.red]

    var name: String {
        "custom"
    }

    var fonts: [R.Font: String] = [.regular: UIFont(...)]

    var dimensions: [R.Dimension: CGFloat] {
        [.fontBig: 8]
    }
}
```

Esto debe hacerse siempre después de haber inicializado el controlador del componente que queremos utilizar/personalizar:

```java
// Controller component intialization
let controller = ComponentController(...)
// Instance of the custom instance
ThemeComponentManager.setup(theme: CustomThemeComponent())
// Controller launch
SDKController.shared.launch(controller: controller)
```

<u>**Cada componente tiene su apartado de personalización,**</u> colores, imagenes, tipos de letra, tamaños
