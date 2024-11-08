# NFC Component

## 1. Introducción
El Componente tratado en el documento actual recibe el nombre de ***NFC Component***. La autenticación pasiva del chip NFC de un documento comprueba si realmente ha sido expedido por una autoridad certificada. La autenticación pasiva nos permite validar que:

- El documento ha sido expedido por la autoridad certificadora del país al que pertenece.
- El documento no ha sido alterado.
- El documento no es una copia o un documento clonado.

### 1.1 Requisitos mínimos

La versión mínima nativa (Android y iOS) de la SDK son las siguientes:

-   Versión mínima Android: **24 - JDK 17**
-   Versión mínima Build Tools: **8.3.0**
-   Versión mínima Kotlin Android: **1.9.0**
-   Versión mínima iOS: **13**
-   Versión mínima ReactNative: **0.73.0**

En cuanto a la arquitectura del dispositivo móvil:

- armeabi-v7, x86, arm64 y x64

<div class="warning">
<span class="warning">:warning:</span>
Este componente requiere una actualización a la versión ***React Native 0.72*** debido a dependencias internas, o actualizar ***Android Build Tools*** a la versión ***8.0*** o superior.
</div>


### 1.2 Versión del plugin
La versión del plugin actual se puede consultar de la siguiente forma:

Buscamos el archivo ***package.json*** en la raíz del plugin.

En el ***KEY/TAG*** version se indica la versión.

## 2. Integración del componente 
Antes de integrar este componente **se recomienda** leer la documentación relativa a **Core Component** y seguir las instrucciones indicadas en dicho documento.

<div class="note">
<span class="note">:information_source:</span>
En esta sección se explicará paso a paso cómo integrar el componente actual en un proyecto ya existente. 
Para esta sección, se considerarán los siguiente valores:
- **\<%APPLICATION_PATH%\>** - Path a la raíz de la aplicación (ejemplo: /folder/example)
- **\<%PLUGIN_CORE_PATH%\>** - Path a la raíz del plugin core, que es obligatorio (ejemplo: /folder/sdk-core)
- **\<%PLUGIN_NFC_PATH%\>** - Path a la raíz del plugin actual (ejemplo: /folder/sdk-nfc)
</div>

### 2.1. Instalación del plugin: Common
El plugin permite la ejecución en platafoma **Android y iOS**. En esta sección se explican los pasos comunes. Para instalar el plugin se deben seguir los siguientes pasos:

- Asegurarse de que React Native esté instalado.
- Acceda al **\<%APPLICATION_PATH%\>** en un terminal y ejecute:

```
yarn add @facephi/sdk-core-react-native
yarn add @facephi/sdk-nfc-react-native
```

Es importante verificar que la ruta al complemento esté correctamente definida en package.json:

```
"dependencies": {
  "@facephi/sdk-core-react-native": <% PLUGIN_CORE_PATH %>,
  "@facephi/sdk-nfc-react-native": <% PLUGIN_NFC_PATH %>
}
```

Después de ejecutar los pasos anteriores, puede iniciar la aplicación con el sdk/componente instalado.
Finalmente, para lanzar los proyectos, se deberá ejecutar los siguientes comandos de dos maneras:

***Desde Terminal***(Para Android):

```
npx react-native run-android 
ó 
npx react-native run-android --active-arch-only
```
Para iOS:
```
npx react-native run-ios
```

Desde diferentes IDE's, los proyectos generados en las carpetas de Android e iOS se pueden abrir, compilar y depurar usando **Android Studio** y **XCode** respectivamente.

## 2.2 Instalación plugin: iOS
### 2.2.1 Configuración del proyecto
Para la versión de iOS, a la hora de añadir nuestro plugin a la aplicación final, previamente se deben tener en cuenta los siguientes puntos:

- **Añadir los permisos de cámara**: Para utilizar el component, es necesario habilitar el permiso de la cámara en el archivo ***info.plist*** de la aplicación (incluido dentro del proyecto en la carpeta ***ios***). Se deberá editar el archivo con un editor de texto y agregar el siguiente par *clave/valor*:

```
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) uses the camera</string>
```
- **Añadir Privacy - NFC Scan Usage Description**:  Para utilizar el widget, es necesario habilitar el permiso de nfc en el archivo info.plist de la aplicación (incluido dentro del proyecto en la carpeta ios).
```
<key>NFCReaderUsageDescription</key>
<string>The app needs this permission for the correct usage.</string>
```
Añadir ISO7816 application identifiers for NFC Tag Reader Session: Para utilizar el widget, es necesario habilitar el permiso de nfc en el archivo info.plist de la aplicación (incluido dentro del proyecto en la carpeta ios). Se deberá editar el archivo con un editor de texto y agregar el siguiente par clave/valor:
```
<array>
    <string>A0000002471001</string>
    <string>A0000002472001</string>
    <string>00000000000000</string>
</array>
```
- **Añadir el Capability Near field Communication Tag Reading**:

Es necesario añadir en el apartado **Signing & Capabilities** del *target* la opción ***Near Field Communication Tag Reading***.

### 2.2.2 Actualizar el Podfile
En el podfile del proyecto será necesario añadir la información del repositorio privado (ver apartado 2.1). Para ello, se deberá agregar las siguientes lineas al inicio del fichero:

```
platform :ios, '13.0' //MIN VERSION
plugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']
source 'https://cdn.cocoapods.org/'
```

<div class="note">
<span class="note">:information_source:</span>
Para saber más acerca de la configuración y uso de **Cocoapods Artifactory**, es necesario acceder al siguiente documento de *Componente Core*.
</div>

### 2.2.3 Establecer la versión de Swift
En *Xcode*, para que la aplicación y todos sus métodos funcionen correctamente, se debe establecer la versión mínima de swift a la versión 5. Los cambios se podrán realizar siguiendo estos pasos:

- Target -> Project -> Build Settings -> Swift Compiler - Language -> Swift Language Version -> Choose Swift 5.

### 2.2.4 Posibles incidencias
Si ocurren problemas de entorno o no se actualiza el plugin tras realizar nuevos cambios (por ejemplo, problemas ocurridos debido a que no se genera correctamente el bundle, o no se actualizan las librerías a las versiones adecuadas), se recomienda ejecutar la siguiente secuencia de instrucciones tras lanzar el plugin:

- Abrir la carpeta **ios** de la aplicación en un terminal.
- Ejecutar el siguiente comando:

```
pod deintegrate
```

- Eliminar el ***Podfile.lock***
- Ejecutar el siguiente comando (o abrir el proyecto con Xcode y ejecutarlo):

```
pod install --repo-update
```

## 2.3 Instalación plugin: Android
### 2.3.1 Establecer la versión de Android SDK
En el caso de Android, la versión mínima de SDK requerida por nuestras bibliotecas nativas es **24**, por lo que si la aplicación tiene un *SDK mínimo* definido menor que éste, deberá modificarse para evitar un error de compilación. Para ello accede al fichero ***build.gradle*** de la aplicación (ubicado en la carpeta ***android***) y modifica el siguiente parámetro:

```
buildscript {
  ext {
    minSdkVersion = 24
  }
}
```

La versión mínima del android.tools(AGP) es ***8.3.0***. Para modificarlo, en caso de ser necesario, se deberá modificar el archivo ***build.gradle*** (ubicado en la carpeta ***android***) y modificar lo siguiente:

```
dependencies {
    classpath "com.android.tools.build:gradle:8.3.0"
}
```

En el mismo archivo, es obligatorio agregar lo siguiente:

```
android {
    packagingOptions {
        pickFirst("META-INF/versions/9/OSGI-INF/MANIFEST.MF") // NFC
    }
```

---

## 3. Configuración del componente
El componente actual contiene una serie de métodos e interfaces de Typescript incluidos dentro del archivo ***node_modules/@facephi/sdk-nfc-react-native/src/index.tsx***. En este fichero se puede encontrar la API necesaria para la comunicación entre la aplicación y la funcionalidad nativa del componente. A continuación, se explica para qué sirve cada uno de los enumerados y las demás propiedades que afectan al funcionamiento del componente.

A continuación se muestra la clase *NfcConfiguration*, que permite configurar el componente de **Nfc**:

```java
export interface NfcConfiguration {
  docNumber: string;
  birthDate: string;
  expirationDate: string;
  extractionTimeout?: number;
  docType?: NfcDocumentType;
  showTutorial?: boolean;
  vibrationEnabled?: boolean;
  skipPACE?: boolean;
  debug?: boolean;
  showDiagnostic?: boolean;
}
```

A continuación, se comentarán todas las propiedades que se pueden definir en el objeto **NfcConfiguration**:

<div class="note">
<span class="note">:information_source:</span>
Toda la configuración se podrá encontrar en el archivo ***src/index.tsx*** del componente.
</div>

A la hora de realizar la llamada al component existe una serie de parámetros que se deben incluir. A continuación se comentarán brevemente.

### 3.1 docNumber

**type:** *string*

Indica el número de documento o número de soporte dependiendo del documento a realizar la lectura.

Éste campo es obligatorio.

```
docNumber: 2115000
```

### 3.2 birthDate

**type:** *string*

Indica la fecha de nacimiento que aparece en el documento ("dd/MM/yyyy").

Éste campo es obligatorio.

```
birthDate: dd/mm/yyyy;
```

### 3.3 expirationDate

**type:** *number*

Indica la fecha de expiración que aparece en el documento ("dd/MM/yyyy").

Éste campo es obligatorio.

```
expirationDate: dd/mm/yyyy;
```

### 3.4 extractionTimeout

**type:** *number*

Establece el tiempo máximo que se puede realizar la lectura.

```
extractionTimeout: 5000;
```

### 3.5 docType

**type:** *NfcDocumentType*

Tipo de documento que se pretende escanear.

```
docType: NfcDocumentType;
```
### 3.6 showTutorial

**type:** *boolean*

Indica si el componente activa la pantalla de tutorial. En esta vista se explica de forma intuitiva cómo se realiza la captura.


```
showTutorial: true;
```

### 3.7 showDiagnostic

**type:** *boolean*

Mostrar pantallas de diagnóstico al final del proceso.

```
showDiagnostic: false;
```

### 3.8 vibrationEnabled

**type:** *boolean*

Indica si se desea o no habilitar la vibración.

```
vibrationEnabled: false;
```

### 3.9 skipPACE

**type:** *boolean*

Indica que solo se desea realizar la lectura BAC de NFC. Es una lectura con información más simple y rápida que permite la lectura de más variedad de documentos.

```
skipPACE: false;
```

### 3.10 debug

**type:** *boolean*

Habilita o no que se muestren datos de debug en pantalla.

```
debug: false;
```
---

## 4. Uso del componente

A continuación se mostrará la manera de ejecutar la funcionalidad del componente actual.

<div class="warning">
<span class="warning">:warning:</span>
Se recuerda que para lanzar un componente determinado previamente habrá que inicializar el SDK con su respectiva licencia, y después iniciar una nueva operación. Para más información consulte la documentación del *Componente Core.*
</div>

Una vez configurado el componente, para lanzarlo se deberá ejecutar el siguiente código:

``` java
const startNfc = async () => 
{ 
  try 
  {
    console.log("Starting startNfc...");

    return await SdkMobileNfc.nfc(getNfcConfiguration())
    .then((result: NfcResult) => 
    {
      console.log("result", result);
      if (result.finishStatus == SdkFinishStatus.Error) {
        drawError(setMessage, result);
      }
    })
    .catch((error: any) => 
    {
      console.log(error);
    })
    .finally(()=> {
      console.log("End startNfc...");
    });
  } 
  catch (error) {
    setMessage(JSON.stringify(error));
  }
};

const getNfcConfiguration = () => {
  let config: NfcConfiguration = {
    docNumber: "AAA439684", 
    birthDay: "16/08/1979", 
    expirationDay: "29/11/2022", 
    extractionTimeout: 50000
  };
  return config;
};
```

---

## 5. Retorno de resultado

Como se muestra en el ejemplo anterior, el resultado se devuelve en forma de objeto **JSON** a través de ***Promises***, ya sea una operación exitosa o un error:
```
return await SdkMobileNfc.nfc(getNfcConfiguration())
.then((result: NfcResult) => 
{
  console.log("result", result);
})
.catch((error: any) => 
{
  console.log(error);
})
.finally(()=> {
  console.log("End startNfc...");
});
```

Independientemente de si el resultado es correcto/erróneo el resultado tendrá el siguiente formato:

```
export interface NfcResult 
{
  finishStatus: number;
  finishStatusDescription?: string;
  errorType: string;
  errorMessage?: string;
  nfcDocumentInformation?: any;
  nfcPersonalInformation?: any;
  nfcValidations?: any;
  facialImage?: string;
  fingerprintImage?: string;
  signatureImage?: string;
}
```
<div class="note">
<span class="note">:information_source:</span>
El resultado será devuelto por medio de una Promise que contiene un objeto de la clase ***NfcResult***. A continuación se amplía información sobre esos campos.
</div>

### 5.1 finishStatus

Devuelve el diagnóstico global de la operación.

- **1**: La operación fue exitosa.
- **2**: Se ha producido un error, el cuál se indicará en el string ***errorType*** y, opcionalmente, se mostrará un mensaje de información extra en la propiedad ***errorMessage***.


### 5.2 finishStatusDescription

Devuelve el diagnóstico global de la operación.

- **STATUS_OK**: La operación fue exitosa.
- **STATUS_ERROR**: Se ha producido un error, el cuál se indicará en el string ***errorType*** y, opcionalmente, se mostrará un mensaje de información extra en la propiedad ***errorMessage***.


### 5.3 errorType
 Devuelve el tipo de error que se ha producido (en el caso de que haya habido uno, lo cual se indica en el parámetro finishStatus con el valor Error). Se definen en la clase *SdkErrorType*. Los valores que puede tener son los siguientes:

```
    ACTIVITY_RESULT_ERROR
    CANCEL_BY_USER
    INITIALIZATION_ERROR
    NFC_ERROR
    NFC_ERROR_DATA
    NFC_ERROR_DISABLED
    NFC_ERROR_ILLEGAL_ARGUMENT
    NFC_ERROR_IO
    NFC_ERROR_NOT_SUPPORTED
    NFC_ERROR_READING
    NFC_ERROR_TAG_LOST
    NO_DATA_ERROR
    TIMEOUT
    LAST_COMMAND_EXPECTED
```

### 5.4 errorMessage: 
Indica un mensaje de error adicional en caso de ser necesario. Es un valor opcional.

### 5.5 nfcDocumentInformation

Información obtenida del documento ordenada por:

- documentNumber

- expirationDate

- issuer

- mrzString

- type

### 5.6 nfcPersonalInformation

Información obtenida del documento ordenada por:

- address

- birthdate

- city

- gender

- name

- nationality

- personalNumber

- placeOfBirth

- surname


### 5.7 nfcValidations

Información de las validaciones del documento ordenada por:

- accessType

- activeAuthenticationSupported

- activeAuthenticationValidation

- chipAuthenticationValidation

- dataGroupsHashesValidation

- documentSigningValidation

- issuerSigningValidation

### 5.8 facialImage

Información de la imagen de la cara obtenida del documento.

### 5.9 fingerprintImage

Información de la imagen de la huella dactilar obtenida del documento.

### 5.10 signatureImage

Información de la imagen de la firma obtenida del documento.