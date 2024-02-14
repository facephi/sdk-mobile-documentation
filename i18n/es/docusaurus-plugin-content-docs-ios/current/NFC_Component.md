# NFC Component

## 0. Requisitos base de SDK Mobile

**SDK Mobile** es un conjunto de librerías (**Componentes**) que ofrece
una serie de funcionalidades y servicios, permitiendo a su vez su
integración en una aplicación Mobile de forma sencilla y totalmente
escalable. Dependiendo del caso de uso que se requiera, se deberá
realizar la instalación de unos determinados componentes. Su alto nivel
de modularidad permite que, en un futuro, se puedan añadir otros
componentes nuevos sin afectar en absoluto a los ya integrados en el
proyecto.

Para más información sobre la configuración base, vaya a la sección de [1.5.X][ES] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>***.

---

## 1. Introducción

El _Componente_ tratado en el documento actual recibe el nombre de
**_NFC Component_**. Éste se encarga de realizar la lectura de nfc de
documentos de identidad y pasaportes. Sus principales funcionalidades
son las siguientes:

- Gestión interna del sensor de NFC.

- Gestión de permisos.

- Análisis de documento.

- Análisis del progreso.

- Asistente en los procesos de lectura.

- Devolución de toda la información posible a leer

- Devolución de imágenes cuando estén disponible para su lectura

### 1.1 Requisitos mínimos
La versión mínima de la SDK de iOS requerida es la siguiente:

- Versión mínima de iOS: **13**

- Dispositivo mínimo: iPhone 6s - el primero en llevar lector NFC

---

## 2. Integración del componente

Antes de integrar este componente se recomienda leer la documentación relativa a [1.5.X][ES] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>*** y seguir las instrucciones indicadas en dicho documento.

En esta sección se explicará paso a paso cómo integrar el componente
actual en un proyecto ya existente.

### 2.1. Dependencias requeridas para la integración

Para evitar conflictos y problemas de compatibilidad, en caso de querer
instalar el componente en un proyecto que contenga una versión antigua
de las librerías de Facephi (_Widgets_), éstos deberán eliminarse por
completo antes de la instalación de los componentes de la
**_SDKMobile_**.

Actualmente las librerías de FacePhi se distribuyen de forma remota a través de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias **obligatorias** que deberán haberse instalado previamente (añadiéndolas en el fichero Podfile del proyecto) son:

#### Cocoapods
Las dependencias obligatorias que deberán haberse instalado previamente (añadiéndolas en el fichero Podfile del proyecto) son:
```
pod 'FPHISDKMainComponent', '~> 1.4.0'
```
Para instalar el componente de NFC deberá incluirse la siguiente entrada en el Podfile de la aplicación:
```
pod 'FPHISDKNFCComponent', '~> 2.6.0'
```
#### SPM
Las dependencias obligatorias que deberán haberse instalado previamente son:

```
//HTTPS
https://github.com/facephi-clienters/SDK-SdkPackage-SPM.git
//SSH
git@github.com:facephi-clienters/SDK-SdkPackage-SPM.git

```
Para instalar el componente de NFC deberá incluirse en los módulos del proyecto:
```
//HTTPS
https://github.com/facephi-clienters/SDK-NFC_component-SPM.git
//SSH
git@github.com:facephi-clienters/SDK-NFC_component-SPM.git
```

Una vez instaladas las dependencias, se podrá hacer uso de las diferentes funcionalidades del componente.

- En caso de realizar el desarrollo con **xCode15** se deberá incluir un script de post-instalacion:

![Image](/iOS/fix_ldClassic.png)

### 2.2 Permisos y configuraciones
En la aplicación cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero **Info.plist**:


```
Es necesario permitir el uso de NFC - (Privacy - NFC Scan Usage Description)
Indicar identificadores NFC - (ISO7816 application identifiers for NFC Tag Reader Session)
A0000002471001
A0000002472001
00000000000000
Es necesario añadir en el apartado Signing & Capabilities del target la opción Near Field Communication Tag Reading
```

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la información asociada correctamente en la plataforma deberá ejecutarse previamente el comando **newOperation**.

Este comando debe haberse ejecutado **anteriormente al lanzamiento del componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda consultar la documentación de ***TO DO: enlace***[1.5.X][ES] iOS Mobile SDK , en el que se detalla y explica en qué consiste este proceso.

---

## 4. Controladores disponibles

| **Controlador** | **Descripción**                      |
| --------------- | ------------------------------------ |
| NFCController   | Controlador principal de lectura NFC |

---

## 5. Configuración del componente
Para configurar el componente actual, una vez inicializado, se deberá crear un objeto

*NFCConfigurationData* y pasarlo como parámetro en la inicialización de *NFCController*.

En el siguiente apartado se mostrarán los campos que forman parte de esta clase y para qué se utiliza cada uno de ellos.

### 5.1. Class NFCConfigurationData

#### 5.1.1. Documentación Básica

#####  showTutorial
Indica si el componente activa la pantalla de tutorial. En esta vista se explica de forma intuitiva cómo se realiza la captura.

##### vibrationEnabled 
iOS no permite añadir vibración mientras se hacen lecturas de NFC.

##### showDiagnostic
Si se le da valor true, al producirse un error o una falta de permisos, el sdk mostrará una pantalla con el error devuelto por el widget.

##### extractionTimeout
Establece el tiempo máximo que se puede realizar la lectura.

#### 5.1.2. Documentación Avanzada

##### enableDebugMode

Activación del modo depuración del componente.

##### skipPace

Indica que solo se desea realizar la lectura BAC de NFC. Es una lectura
con información más simple y rápida que permite la lectura de más
variedad de documentos.

#### 5.1.3 Otros parametros

##### documentNumber

Indica el número de documento o número de soporte dependiendo del
documento a realizar la lectura.

Éste campo es obligatorio.

##### birthDate

Indica la fecha de nacimiento que aparece en el documento
("dd/MM/yyyy").

Éste campo es obligatorio.

##### expirationDate

Indica la fecha de expiración que aparece en el documento
("dd/MM/yyyy").

Éste campo es obligatorio.

##### issuer

##### documentType

##### readableTags



---

## 6. Uso del componente

Una vez iniciado el componente y creada una nueva operación (**apartado 3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar el componente:

- **[CON TRACKING]** Esta llamada permite lanzar la funcionalidad del componente con normalidad, pero sí se trackearán los eventos internos al servidor de tracking:

```
let controller = NFCController(data: nfcConfigurationData, output: output, viewController: viewController)
SDKController.shared.launch(controller: controller)
```
- **[SIN TRACKING]** Esta llamada permite lanzar la funcionalidad del componente con normalidad, pero no se trackeará ningún evento al servidor de tracking:
```
let controller = NFCController(data: nfcConfigurationData, output: output, viewController: viewController)
NFCController.shared.launchMethod(controller: controller)
```
 

El método **launch** debe usarse **por defecto.** Este método permite utilizar* **tracking*** en caso de estar su componente activado, y no lo usará cuando esté desactivado (o no se encuentre el componente instalado).

Por el contrario, el método **launchMethod** cubre un caso especial, en el cual el integrador tiene instalado y activado el tracking, pero en un flujo determinado dentro de la aplicación no desea trackear información. En ese caso se usa este método para evitar que se envíe esa información a la plataforma.


---

## 7. Recepción del resultado

Los controllers devolverán la información necesaria en formato SdkResult. Más información en la sección de ***TO DO: Enlace*** [1.5.X][ES] iOS Mobile SDK | 7. Retorno de resultado  del iOS Mobile SDK.	

### 7.1. Recepción de errores

En la parte del error, **internamente** disponemos de la clase NFCPassportReaderError. Este enumerado contiene muchos errores específicos que no aportan información útil si son devueltos al integrador, por lo que son transformados a un tipo más simple (**ErrorType**):

```java
extension NFCPassportReaderError {
    func toErrorType() -> ErrorType {
        switch self {
        case .UserCanceled:
            return .CANCEL_BY_USER
        case .NFCNotSupported:
            return .NFC_ERROR
        case .InvalidMRZKey:
            return .NFC_INVALID_MRZ_KEY
        case .Timeout:
            return .TIMEOUT
        default:
            return .UNKNOWN_ERROR
        }
    }
}
```

**NOTA**: `NFC_INVALID_MRZ_KEY` *implica que la conexión no se ha podido establecer por culpa de que los datos de entrada de la configuración (documentNumber, birthDate, expiryDate) no son correctos.
Todos los lanzamientos de lectura para ese NFC fallarán mientras no se inicialice un NFCController nuevo con los datos correctos.*

### 7.2. Recepción de ejecución correcta - *data*

En la parte de _data_, dispondremos de la clase _NfcResult_.

```
public class NfcResult {
    public let nfcRawData: NfcRawData
    public private(set) var nfcDocumentInformation: NfcDocumentInformation?
    public private(set) var nfcPersonalInformation: NfcPersonalInformation?
    public let nfcImages: NfcImages?
    public let nfcSecurityData: NfcSecurityData
    public private(set) var nfcValidations: NfcValidations?
}
```

En el caso de este componente, los campos devueltos son los siguientes:

#### 7.2.1. nfcRawData

Información obtenida por cada tipo de dato en formato crudo.

#### 7.2.2. nfcDocumentInformation

Información obtenida del documento ordenada por:

- documentNumber

- expirationDate

- issuer

- mrzString

- type

#### 7.2.3. nfcPersonalInformation

Información obtenida del documento ordenada por:

- address

- birthdate

- gender

- name

- nationality

- personalNumber

- placeOfBirth

- surname

#### 7.2.4. nfcImages

Información de imágenes obtenida del documento ordenada por:

- facialImage

- fingerprintImage

- signatureImage

#### 7.2.5 nfcSecurityData

Información de datos de seguridad del documento ordenada por:

- dataGroupsHashes

- dataGroupsRead

- documentSigningCertificateData

- issuerSigningCertificateData

- ldsVersion

#### 7.2.6. nfcValidations

Información de las validaciones del documento ordenada por:

- accessProtocol

- activeAuthenticationSupported

- activeAuthenticationValidation

- chipAuthenticationValidation

- dataGroupsHashesValidation

- documentSigningValidation

- issuerSigningValidation


---

## 8. Personalización del componente

El componente de NFC dispone de recursos visuales parametrizables que modifican la interfaz, animaciones, textos y traducciones,…

El sistema de personalización se basa en temas (themes). Por defecto, el componente tiene un tema llamado ThemeNFC.

Para modificar la interfaz visual (UX/UI) se puede crear un nuevo CustomTheme que extienda el siguiente protocolo:

### 8.1 Textos

Si se desea modificar los textos de la SDK habría que incluir el
siguiente fichero XML en la aplicación del cliente, y modificar el valor
de cada _String_ por el deseado.
```
public protocol ThemeNFCProtocol {
    var name: String { get }
    var fonts: [R.Font: String] { get }
    var dimensions: [R.Dimension: CGFloat] { get }
    var images: [R.Image: UIImage?] { get }
    var colors: [R.Color: UIColor?] { get }
    var animations: [R.Animation: String] { get }
}
```
Por ejemplo:
```
class CustomThemeNFC: ThemeNFCProtocol {
    public var name: String {
        "customNfc"
    }

    public var fonts: [R.Font: String] {
        [.bold: "Arial"] // the font is overrided
    }

    public var dimensions: [R.Dimension: CGFloat] {
        [.fontSmall: 7,
         .fontRegular: 12,
         .fontBig: 20,
         .radiusCorner: 16]
    }
    ...
}
```
Para aplicar este custom theme debemos usar la siguiente instrucción antes de lanzar el componente:
```
ThemeNFCManager.setup(theme: CustomThemeNFC())
```