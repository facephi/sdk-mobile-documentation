#NFC Component

## 0. SDK Mobile Base Requirements

**SDK Mobile** is a set of libraries (**Components**) that offers
a series of functionalities and services, allowing in turn its
integration into a Mobile application in a simple and completely
scalable. Depending on the use case required, it must be
perform the installation of certain components. Its high level
Modularity allows, in the future, to add other
new components without affecting in any way those already integrated into the
project.

For more information on the base configuration, go to the [1.5.X][ES] section ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>***.

---

## 1. Introduction

The _Component_ discussed in the current document is called
**_NFC Component_**. This is responsible for reading NFC from
identity documents and passports. Its main functionalities
are the following:

- Internal management of the NFC sensor.

- Permit management.

- Document analysis.

- Analysis of progress.

- Assistant in the reading processes.

- Return of all possible information to read

- Return of images when they are available for reading

### 1.1 Minimum requirements
The minimum iOS SDK version required is as follows:

- Minimum iOS version: **13**

- Minimum device: iPhone 6s - the first to have an NFC reader

---

## 2. Component integration

Before integrating this component, it is recommended to read the documentation related to ** TO DO: [1.5.X][ES] iOS Mobile SDK** and follow the instructions indicated in said document.

This section will explain step by step how to integrate the component
current in an existing project.

### 2.1. Dependencies required for integration

To avoid conflicts and compatibility problems, if you want
install the component in a project that contains an old version
from the Facephi libraries (_Widgets_), these must be removed by
complete before installing the components of the
**_SDKMobile_**.

Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The **mandatory** dependencies that must have been previously installed (adding them to the project's Podfile file) are:

#### Cocoapods
The mandatory dependencies that must have been previously installed (adding them to the project's Podfile file) are:
```
pod 'FPHISDKMainComponent', '~> 1.4.0'
```
To install the NFC component, the following entry must be included in the application's Podfile:
```
pod 'FPHISDKNFCComponent', '~>2.6.0'
```
#### SPM
The mandatory dependencies that must have been previously installed are:

```
//HTTPS
https://github.com/facephi-clienters/SDK-SdkPackage-SPM.git
//SSH
git@github.com:facephi-clienters/SDK-SdkPackage-SPM.git

```
To install the NFC component, it must be included in the project modules:
```
//HTTPS
https://github.com/facephi-clienters/SDK-NFC_component-SPM.git
//SSH
git@github.com:facephi-clienters/SDK-NFC_component-SPM.git
```

Once the dependencies are installed, you can use the different functionalities of the component.

- If developing with **xCode15**, a post-installation script must be included:

![Image](/iOS/fix_ldClassic.png)

### 2.2 Permissions and settings
In the client application where the components are going to be integrated, it is necessary to incorporate the following elements in the **Info.plist** file:


```
It is necessary to allow the use of NFC - (Privacy - NFC Scan Usage Description)
Indicate NFC identifiers - (ISO7816 application identifiers for NFC Tag Reader Session)
A0000002471001
A0000002472001
00000000000000
It is necessary to add the Near Field Communication Tag Reading option in the Signing & Capabilities section of the target
```

---

## 3. Start new operation

When you want to perform a certain operation, to generate the associated information correctly on the platform, the **newOperation** command must be previously executed.

This command must have been run **prior to launching the component**.

To learn more about how to start a new operation, it is recommended to consult the documentation for [1.5.X][ES] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>*** , which details and explains what this process consists of.

---

## 4. Available drivers

| **Controller** | **Description**                      |
| --------------- | ------------------------------------ |
| NFCController   | NFC reading main controller |

---

## 5. Component configuration
To configure the current component, once it has been initialised, create an object

*NFCConfigurationData* object and pass it as a parameter in the initialisation of *NFCController*.

The following section will show the fields that are part of this class and what each of them is used for.

### 5.1. Class NFCConfigurationData

#### 5.1.1. Basic Documentation

##### showTutorial
Indicates if the component activates the tutorial screen. This view explains intuitively how the capture is performed.

##### vibrationEnabled 
iOS does not allow vibration to be added while taking NFC readings.

##### showDiagnostic
If set to true, if an error or lack of permissions occurs, the sdk will display a screen with the error returned by the widget.

##### extractionTimeout
Sets the maximum time the readout can be performed.

#### 5.1.2. Advanced Documentation

##### enableDebugMode

Enable debug mode for the component.

##### skipPace

Indicates that only NFC BAC reading is desired. This is a simpler and faster
simpler and faster information that allows reading of a wider variety of documents.
variety of documents.

#### 5.1.3 Other parameters

##### documentNumber

Indicates the document number or media number depending on the document to be read.
document to be read.

This field is mandatory.

##### birthDate

Indicates the date of birth appearing in the document
("dd/MM/yyyy").

This field is mandatory.

##### expirationDate

Indicates the expiry date as it appears in the document
("dd/MM/yyyy").

This field is mandatory.

##### issuer

##### documentType

##### readableTags

---

## 6. Using the component

Once the component has been started and a new operation has been created (**section 3**), the SDK components can be launched. There are two ways to launch the component:

- **[WITH TRACKING]** This call allows the component functionality to be launched normally, but internal events will be tracked to the tracking server:

```
let controller = NFCController(data: nfcConfigurationData, output: output, viewController: viewController)
SDKController.shared.launch(controller: controller)
```
- **[NO TRACKING]** This call allows the component's functionality to be launched normally, but no events will be tracked to the tracking server:
```
let controller = NFCController(data: nfcConfigurationData, output: output, viewController: viewController)
NFCController.shared.launchMethod(controller: controller)
```
 

The **launch** method must be used **by default.** This method allows **tracking*** to be used if your component is enabled, and will not use it when it is disabled (or the component is not installed).

On the contrary, the **launchMethod** method covers a special case, in which the integrator has tracking installed and activated, but in a certain flow within the application does not want to track information. In that case, this method is used to avoid sending that information to the platform.


---

## 7. Recepción del resultado

Los controllers devolverán la información necesaria en formato SdkResult. Más información en la sección de [1.5.X][ES] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>***.	

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

**NOTE**: `NFC_INVALID_MRZ_KEY` *implies that the connection could not be established because the configuration input data (documentNumber, birthDate, expiryDate) is not correct.
All read launches for that NFC shall fail as long as a new NFCController is not initialised with the correct data.*.

### 7.2. Receiving successful execution - *data*

In the _data_ part, we will have the _NfcResult_ class.

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

In the case of this component, the fields returned are the following:

#### 7.2.1. nfcRawData

Information obtained for each data type in raw format.

#### 7.2.2. nfcDocumentInformation

Information retrieved from the document sorted by:

- documentNumber

- expirationDate

- issuer

- mrzString

- type

#### 7.2.3. nfcPersonalInformation

Information obtained from the document sorted by:

- address

- birthdate

- gender

- name

- nationality

- personalNumber

- placeOfBirth

- surname

#### 7.2.4. nfcImages

Image information obtained from the document ordered by:

- facialImage

- fingerprintImage

- signatureImage

#### 7.2.5 nfcSecurityData

Document security data information sorted by:

- dataGroupsHashes

- dataGroupsRead

- documentSigningCertificateData

- issuerSigningCertificateData

- ldsVersion

#### 7.2.6. nfcValidations

Information of the document validations sorted by:

- accessProtocol

- activeAuthenticationSupported

- activeAuthenticationValidation

- chipAuthenticationValidation

- dataGroupsHashesValidation

- documentSigningValidation

- issuerSigningValidation

---

## 8. Component customisation

The NFC component has parameterisable visual resources that modify the interface, animations, texts and translations,...

The customisation system is based on themes. By default, the component has a theme called ThemeNFC.

To modify the visual interface (UX/UI) you can create a new CustomTheme that extends the following protocol:

### 8.1 Texts

If you want to modify the SDK texts you would have to include the following
XML file in the client application, and modify the value of each _String_ to
value of each _String_ to the desired one.
```
public protocol ThemeNFCProtocol {
    var name: String { get }
    var fonts: [R.Font: String] { get }
    var dimensions: [R.Dimension: CGFloat] { get }
    var images: [R.Image: UIImage?] { get }
    var colours: [R.Color: UIColor?] { get }
    var animations: [R.Animation: String] { get }
}
```
For example:
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
To apply this custom theme we must use the following instruction before launching the component:
```
ThemeNFCManager.setup(theme: CustomThemeNFC())
```