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

Para más información sobre la configuración base, vaya a la sección de
[Primeros Pasos](./Mobile_SDK#1-introducción)

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
completo antes de la instalación de los componentes de la
**_SDKMobile_**.

Actualmente las librerías de FacePhi se distribuyen de forma remota a través de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias **obligatorias** que deberán haberse instalado previamente (añadiéndolas en el fichero Podfile del proyecto) son:

#### Cocoapods

Las dependencias obligatorias que deberán haberse instalado previamente (añadiéndolas en el fichero Podfile del proyecto) son:

```java
pod 'FPHISDKMainComponent', '~> 2.3.0'
```

Para instalar el componente de NFC deberá incluirse la siguiente entrada en el Podfile de la aplicación:

```java
pod 'FPHISDKNFCComponent', '~> 2.11.0'
```

#### SPM

Las dependencias obligatorias que deberán haberse instalado previamente son:

```java
//HTTPS
https://github.com/facephi-clienters/SDK-SdkPackage-SPM.git
//SSH
git@github.com:facephi-clienters/SDK-SdkPackage-SPM.git

```

Para instalar el componente de NFC deberá incluirse en los módulos del proyecto:

```java
//HTTPS
https://github.com/facephi-clienters/SDK-NFC_component-SPM.git
//SSH
git@github.com:facephi-clienters/SDK-NFC_component-SPM.git
```

Una vez instaladas las dependencias, se podrá hacer uso de las diferentes funcionalidades del componente.

- En caso de realizar el desarrollo con **XCode15** se deberá incluir un script de post-instalacion:

![Image](/ios/fix_ldClassic.png)

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

<div class="note">
<span class="note">:information_source:</span>
Este comando debe haberse ejecutado **anteriormente al lanzamiento del componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda consultar la documentación de [Iniciar nueva operación](./Mobile_SDK#4-iniciar-nueva-operacion), en el que se detalla y explica en qué consiste este proceso.
</div>

---

## 4. Controladores disponibles

| **Controlador** | **Descripción**                      |
| --------------- | ------------------------------------ |
| NFCController   | Controlador principal de lectura NFC |

---

## 5. Configuración del componente

Para configurar el componente actual, una vez inicializado, se deberá crear un objeto

_NFCConfigurationData_ y pasarlo como parámetro en la inicialización de _NFCController_.

En el siguiente apartado se mostrarán los campos que forman parte de esta clase y para qué se utiliza cada uno de ellos.

### 5.1. Class NFCConfigurationData

#### 5.1.1. Documentación Básica

##### showTutorial

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

Indicamos el pais de origen del documento a leer.

##### documentType

Indica el tipo de documento que se va a leer: - ID_CARD - PASSPORT - FOREIGN_CARD

##### readableTags

---

## 6. Uso del componente

Una vez iniciado el componente y creada una nueva operación (**apartado 3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar el componente:

- **[CON TRACKING]** Esta llamada permite lanzar la funcionalidad del componente con normalidad, pero sí se trackearán los eventos internos al servidor de tracking:

```java
let controller = NFCController(data: nfcConfigurationData, output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
SDKController.shared.launch(controller: controller)
```

- **[SIN TRACKING]** Esta llamada permite lanzar la funcionalidad del componente con normalidad, pero no se trackeará ningún evento al servidor de tracking:

```java
let controller = NFCController(data: nfcConfigurationData, output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
NFCController.shared.launchMethod(controller: controller)
```

El método **launch** debe usarse **por defecto.** Este método permite utilizar\* **tracking\*** en caso de estar su componente activado, y no lo usará cuando esté desactivado (o no se encuentre el componente instalado).

Por el contrario, el método **launchMethod** cubre un caso especial, en el cual el integrador tiene instalado y activado el tracking, pero en un flujo determinado dentro de la aplicación no desea trackear información. En ese caso se usa este método para evitar que se envíe esa información a la plataforma.

---

## 7. Recepción del resultado

Los controllers devolverán la información necesaria en formato SdkResult. Más información en la sección de [Retorno de Resultado](./Mobile_SDK#6-retorno-de-resultado).

### 7.1. Recepción de errores

En la parte del error, **internamente** disponemos de la clase NFCPassportReaderError. Este enumerado contiene muchos errores específicos que no aportan información útil si son devueltos al integrador, por lo que son transformados a un tipo más simple (**ErrorType**):

```java
    CANCEL_BY_USER
    TIMEOUT
    UNKNOWN_ERROR
    NFC_INVALID_MRZ_KEY
    NFC_NOT_SUPPORTED
    TAG_CONNECTION_LOST
    SECURITY_STATUS_NOT_SATISFIED
    SYSTEM_RESOURCE_UNAVAILABLE
```

**NOTA**: `NFC_INVALID_MRZ_KEY` _implica que la conexión no se ha podido establecer por culpa de que los datos de entrada de la configuración (documentNumber, birthDate, expiryDate) no son correctos.
Todos los lanzamientos de lectura para ese NFC fallarán mientras no se inicialice un NFCController nuevo con los datos correctos._

### 7.2. Recepción de ejecución correcta - _data_

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

extension NfcResult {
    public var personalData: [String: String]
    {
        ...
    }
}
```

En el caso de este componente, los campos devueltos son los siguientes:

#### 7.2.1. nfcRawData

Información obtenida por cada tipo de dato en formato crudo.

#### 7.2.2. nfcDocumentInformation

Información obtenida del documento ordenada por:

- type
- documentNumber
- issuer
- expirationDate
- mrzString

#### 7.2.3. nfcPersonalInformation

Información obtenida del documento ordenada por:

- name
- surname
- address
- nationality
- personalNumber
- birthdate
- placeOfBirth
- gender

#### 7.2.4. nfcImages

Información de imágenes obtenida del documento ordenada por:

- facialImage
- fingerprintImage
- signatureImage

#### 7.2.5 nfcSecurityData

Información de datos de seguridad del documento ordenada por:

- ldsVersion
- dataGroupsHashes
- dataGroupsRead
- documentSigningCertificateData
- issuerSigningCertificateData

#### 7.2.6. nfcValidations

Información de las validaciones del documento ordenada por:

- accessProtocol
- activeAuthenticationSupported
- activeAuthenticationValidation
- chipAuthenticationValidation
- dataGroupsHashesValidation
- documentSigningValidation
- issuerSigningValidation

#### 7.2.7 personalData

- issuer
- documentNumber
- issueDate
- expiryDate
- name
- surname
- fullName
- gender
- birthDate
- birthPlace
- nationality
- address
- nfcKey
- numSupport
- mrz

---

## 8. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de [Personalización de la SDK](./Mobile_SDK#9-personalización-de-la-sdk)), este componente en concreto permite la modificación de animaciones, imágenes, fuentes, colores y textos específicos.

Para personalizar el componente, se debe llamar a ThemeNFCManager.setup(theme: CustomThemeNFC()) antes de lanzar nfcController:

```java
let nfcController = NFCController(data: NfcConfigurationData(), output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
ThemeNFCManager.setup(theme: CustomThemeNFC())
SDKController.shared.launch(controller: nfcController)
```

Un ejemplo de la clase CustomThemeNFC sería este (debe extender ThemeNFCProtocol):

```java

```java
class CustomThemeNFC: ThemeNFCProtocol {
    public var name: String {
        "customNfc"
    }

    public var fonts: [R.Font: String] {
        [.bold: "Arial"] // the font is overrided
    }

    var images: [R.Image: UIImage?] = [R.Image.ic_sdk_close: UIImage(named: "closeIcon")!]

    var colors: [R.Color: UIColor?] = [R.Color.sdkPrimaryColor: UIColor.red]

    var fonts: [R.Font: String] = [:]

    var animations: [R.Animation: String] = [:]

    public var dimensions: [R.Dimension: CGFloat] {
        [.fontSmall: 7,
         .fontRegular: 12,
         .fontBig: 20,
         .radiusCorner: 16]
    }
}
```

### 8.1 Imágenes

Las imagenes inicializan en la variable _images_, pasándole un diccionario, siendo la clave uno de los enumerados que representan las distintas imágenes de la pantalla, y el valor la imagen personalizada que se deba mostrar.

```java
case ic_sdk_close
case ic_sdk_close_arrow
case ic_nfc_dot_primary
case ic_nfc_dot_variant
case ic_nfc_pager_arrow
case ic_sdk_info
case tag_connection_lost
case selphid_error
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
// NFC Specific Colors
case sdkDisabledBackgroundColor
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
case nfc_anim_tuto_id_male
case nfc_anim_tuto_id_male_iphone_15
case nfc_anim_tuto_id_female
case nfc_anim_tuto_passport
case nfc_anim_tuto_1
case nfc_anim_tuto_2
case nfc_anim_tuto_2_iphone_15
case nfc_anim_tuto_3
case nfc_anim_tuto_3_pass
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
"nfc_component_start_message" = "\nDesliza el documento\nhasta que el dispositivo lo detecte\n";
"nfc_component_reading_face_message" = "Extrayendo imagen de la cara.";
"nfc_component_reading_images_message" = "Extrayendo imágenes.";
"nfc_component_reading_document_message" = "Extrayendo los datos del documento.";
"nfc_component_error_retrieving_document_data_message" = "Ha ocurrido un error durante la captura de los datos del documento";
"nfc_component_read_successful_title" = "NFC leído exitosamente";
"nfc_component_error" = "¡Ups! El NFC no ha podido ser leído";
"text_error_tag_connection_lost" = "Lectura interrumpida. Vuelve a poner el documento en la parte superior.";
"text_error_tag_connection_lost_timer" = "Hubo un error en la lectura. Por favor, cancela para reiniciar el proceso.";
"nfc_component_timeout_desc" = "Has excedido el tiempo de lectura de NFC. Por favor intenta de nuevo";
"text_chip_duplicated_session_error" = "El proceso de captura se ha duplicado, por favor vuelva a intentarlo tras desaparecer este mensaje";
"text_chip_security_serial_number_title" = "Número de serie";
"text_chip_security_algorithm_sign_title" = "Algoritmo de firma";
"text_chip_security_algorithm_public_key_title" = "Algoritmo de clave pública";
"text_chip_security_certificated_impress_title" = "Impresión de certificado";
"text_chip_security_editor_title" = "Editor";
"text_chip_security_subject_title" = "Sujeto";
"text_chip_security_valid_from_title" = "Válido desde";
"text_chip_security_valid_still_title" = "Válido hasta";
"text_loading_optional_description" = "Leyendo, por favor, no mueva el documento";
"icon_loading_filled_circle" = "🟢";
"icon_loading_void_circle" = "⚪️";
"nfc_component_end_confirmation_title" = "Finalizar";
"nfc_component_end_confirmation_message" = "¿Seguro que finalizar el proceso?";
"nfc_component_cancel" = "Cancelar";
"nfc_component_agree" = "Aceptar";
"nfc_component_tutorial" = "Pon **en contacto** el documento con la parte trasera de tu dispositivo.";
"nfc_component_tutorial_iphone_15"="Pon **en contacto** el documento con la parte delantera de tu dispositivo.";
"text_tutorial_nfc_title" = "Lectura de NFC";
"text_tutorial_nfc_button_ok" = "COMENZAR";
"text_tutorial_nfc_button_tip" = "MIRA ESTOS CONSEJOS";
"nfc_component_tutorial_title" = "Escanear NFC";
"nfc_component_tutorial_button_disabled" = "PREPARANDO NFC";
"nfc_component_tutorial_1" = "Cuando pasamos una tarjeta por un sensor, hay un intercambio de información llamado NFC.";
"nfc_component_tutorial_2" = "En tu móvil, el sensor está en la zona marcada. Aquí deberás juntar tu documento.";
"nfc_component_tutorial_3" = "Para una mejor lectura, quita la funda de tu móvil.";
"nfc_component_tutorial_3_pass"="Mantén **cerrado** el pasaporte para hacer la lectura.";
"nfc_component_next" = "SIGUIENTE";
"nfc_component_previous" = "ANTERIOR";
"nfc_component_more_info_finish" = "FINALIZAR";
"diagnostic_tag_connection_lost_title" = "La lectura no finalizó";
"diagnostic_tag_connection_lost_description" = "Mantén la posición hasta que finalice la lectura";
"diagnostic_invalid_mrz_error_title" = "Hubo un problema técnico";
"diagnostic_invalid_mrz_error_description" = "Pedimos disculpas. Necesitamos una nueva foto del documento";
```

De este modo, si se desea modificar por ejemplo el texto “_COMENZAR_” de la clave `text_tutorial_nfc_button_ok` para el idioma **es-MX**, se deberá ir al archivo **Localizable.strings** de la carpeta **es-MX.lproj** si es que existe (si no, se deberá crear) y ahí, añadir:

`"text_tutorial_nfc_button_ok"="EMPEZAR";`

Si un mensaje no se especifica en el fichero del idioma, este se rellenará con el mensaje por defecto.

---

## 9. Troubleshooting

### 9.1 OpenSSL contains bitcode

El error específico puede verse al intentar subir un IPA. Ocurre en XCode 16.

```
Asset validation failed (90482) Invalid Executable. The executable 'Runner.app/Frameworks/OpenSSL.framework/OpenSSL' contains bitcode. (ID: 769a1928-0b74-4b3d-b58a-0cb36799d1df)
```

El error puede evitarse copiando el siguiente script dentro del Podfile:

```
post_install do |installer|
  ### XCode 16 fix
  bitcode_strip_path = `xcrun --find bitcode_strip`.chop!
  def strip_bitcode_from_framework(bitcode_strip_path, framework_relative_path)
  framework_path = File.join(Dir.pwd, framework_relative_path)
  command = "#{bitcode_strip_path} #{framework_path} -r -o #{framework_path}"
  puts "Stripping bitcode: #{command}"
  system(command)
  end
  framework_paths = [
  "Pods/OpenSSL-Universal/Frameworks/OpenSSL.xcframework/ios-arm64_armv7/OpenSSL.framework/OpenSSL",
  "Pods/OpenSSL-Universal/Frameworks/OpenSSL.xcframework/ios-arm64_i386_x86_64-simulator/OpenSSL.framework/OpenSSL",
  "Pods/OpenSSL-Universal/Frameworks/OpenSSL.xcframework/ios-arm64_x86_64-maccatalyst/OpenSSL.framework/OpenSSL",
  "Pods/OpenSSL-Universal/Frameworks/OpenSSL.xcframework/macos-arm64_x86_64/OpenSSL.framework/OpenSSL",
  ]

  framework_paths.each do |framework_relative_path|
    strip_bitcode_from_framework(bitcode_strip_path, framework_relative_path)
  end
end
```

Tras pegar el script y ejecutar `pod install` el error debería desaparecer.
