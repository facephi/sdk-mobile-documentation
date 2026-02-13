# Phingers Component

## 1. Introducción
El Componente tratado en el documento actual recibe el nombre de ***Phingers Component***. Éste se encarga de realizar la captura de las huellas de los dedos (fingerprints) del usuario y la posterior extracción de las plantillas de las huellas posteriores. Sus principales funcionalidades son las siguientes:

- Dos modos de funcionamiento: extracción de los cuatro dedos de la mano (excepto el pulgar), o extracción únicamente del pulgar.
- Gestión interna de cámara.
- Gestión de permisos.
- Detección de vivacidad incorporada.
- Asistente en los procesos de captura de las huellas.
- Generación de las plantillas con las características de las huellas, imágenes y puntuaciones.

### 1.2 Versión del plugin
La versión del plugin actual se puede consultar de la siguiente forma:

Buscamos el archivo ***pubspec.yaml*** en la raíz del plugin.

En el ***KEY/TAG*** version se indica la versión.

## 2. Integración del componente 
Antes de integrar este componente **se recomienda** leer la documentación relativa a **Core Component** y seguir las instrucciones indicadas en dicho documento.

<div class="note">
<span class="note">:information_source:</span>
En esta sección se explicará paso a paso cómo integrar el componente actual en un proyecto ya existente. 
Para esta sección, se considerarán los siguiente valores:
- **\<%APPLICATION_PATH%\>** - Path a la raíz de la aplicación (ejemplo: /folder/example)
- **\<%PLUGIN_CORE_PATH%\>** - Path a la raíz del plugin core, que es obligatorio (ejemplo: /folder/sdk-core)
- **\<%PLUGIN_PHINGERS_PATH%\>** - Path a la raíz del plugin actual (ejemplo: /folder/sdk-phingers)
</div>

### 2.1. Instalación del plugin: Common
El plugin permite la ejecución en platafoma **Android y iOS**. En esta sección se explican los pasos comunes. Para instalar el plugin se deben seguir los siguientes pasos:

- Asegurarse de que Flutter esté instalado.
- Acceda al APPLICATION_PATH en un terminal y ejecute:
```
dart pub token add "https://facephicorp.jfrog.io/artifactory/api/pub/pub-pro-fphi"
```
- Acceda al **\<%APPLICATION_PATH%\>**, y en el fichero pubspec.yaml y añadir:

```
fphi_sdkmobile_phingers:
  hosted:
    name: fphi_sdkmobile_phingers
    url: https://facephicorp.jfrog.io/artifactory/api/pub/pub-pro-fphi/
  version: ^2.5.0
```

Después de ejecutar los pasos anteriores, puede iniciar la aplicación con el sdk/componente instalado.
Desde diferentes IDE's, los proyectos generados en las carpetas de Android e iOS se pueden abrir, compilar y depurar usando **Android Studio** y **XCode** respectivamente.

## 2.2 Instalación plugin: iOS
### 2.2.1 Configuración del proyecto
Para la versión de iOS, a la hora de añadir nuestro plugin a la aplicación final, previamente se deben tener en cuenta los siguientes puntos:

- **Añadir los permisos de cámara**: Para utilizar el widget, es necesario habilitar el permiso de la cámara en el archivo ***info.plist*** de la aplicación (incluido dentro del proyecto en la carpeta ***ios***). Se deberá editar el archivo con un editor de texto y agregar el siguiente par *clave/valor*:

```
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) uses the camera</string>
```

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
pod repo-art update cocoa-pro-fphi
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

---

## 3. Configuración del componente
El componente actual contiene una serie de métodos e interfaces de ***dart*** incluidos dentro del archivo ***fphi_sdkmobile_phingers_configuration.dart***. En este fichero se puede encontrar la API necesaria para la comunicación entre la aplicación y la funcionalidad nativa del componente. A continuación, se explica para qué sirve cada uno de los enumerados y las demás propiedades que afectan al funcionamiento del componente.

A continuación se muestra la clase *PhingersConfiguration*, que permite configurar el componente de **Phingers**:

```java
class PhingersConfiguration
{
  PhingersReticleOrientation mReticleOrientation;
  FingersFilter mFingersFilter;
  bool mShowEllipses;
  bool mUseLiveness;
  bool mShowTutorial;
  bool mVibration;
  int mExtractionTimeout;
  bool? mShowDiagnostic;
  double? mThreshold;
  bool? mShowPreviousTip;
}
```

A continuación, se discutirán todas las propiedades que se pueden definir en el objeto **PhingersConfiguration**:

<div class="note">
<span class="note">:information_source:</span>
Toda la configuración se puede encontrar en el archivo ***fphi_sdkmobile_voice/fphi_sdkmobile_phingers_configuration.dart.*** del componente.
</div>

Al llamar al componente, se deben incluir una serie de parámetros. Se explicarán brevemente a continuación.

### 3.0 ReticleOrientation

**type:** *PhingersReticleOrientation*

Establece el modo de detección de huellas e indica qué mano se detectará durante el proceso. 
Los valores permitidos son:

- **DT_LEFT**: Enables the capture of the **four** **fingers** of the
  **left** **hand**.

- **DT_RIGHT**: Enables the capture of the **four** **fingers** of the
  **right** **hand**.

```
mReticleOrientation = PhingersReticleOrientation.DT_LEFT
```

### 3.1 FingersFilter

Permite definir qué dedos se capturan durante el proceso:

**type:** *FingersFilter*

Los valores permitidos son:

- **DT_RING_FINGER**
- **DT_THUMB_FINGER**
- **DT_INDEX_FINGER**
- **DT_LITTLE_FINGER**
- **DT_MIDDLE_FINGER**
- **DT_SLAP**
- **DT_ALL_4_FINGERS_ONE_BY_ONE**
- **DT_ALL_5_FINGERS_ONE_BY_ONE**

```
mFingersFilter = FingersFilter.DT_ALL_5_FINGERS_ONE_BY_ONE
```

### 3.2 ShowEllipses

**type:** *boolean*

Dibuja una elipse en la pantalla de captura sobre la huella dactilar detectada.

```
mShowEllipses = true,
```

### 3.3 UseLiveness

**type:** *boolean*

Habilita o deshabilita el detector de vida durante la captura de huellas dactilares. 
El valor predeterminado es **verdadero**.

```
mUseLiveness = true;
```

### 3.4 ShowTutorial

**type:** *boolean*

Si se establece en **true**, indica si el componente activa la pantalla del tutorial. Esta vista explica intuitivamente cómo se realiza la captura.

```
mShowTutorial = true;
```

### 3.5 Vibration

**type:** *boolean*

Si se establece en **verdadero**, indica si se desea retroalimentación de vibración al final del proceso.

```
mVibration = false;
```

### 3.6 ExtractionTimeout

**type:** *number*

Establece el tiempo máximo que se puede realizar la lectura.
Valor expresado en milisegundos.

```
mExtractionTimeout = 30000;
```

### 3.8 Threshold

**type:** *float*

El parámetro configura un captureQualityThreshold, para definir un umbral de calidad para realizar la captura. 
Valor por defecto 0.9f.

```
mThreshold = 0.90;
```

### 3.9 ShowDiagnostic

**type:** *boolean*

Mostrar pantallas de diagnóstico al final del proceso.

```
mShowDiagnostic = false;
```

#### 3.10. ShowPreviousTip

**type:** *boolean*

Muestra una pantalla de pre-lanzamiento con información del proceso a realizar y un botón de inicio.

```
mShowPreviousTip = false;
```

---

## 4. Uso del componente

A continuación se mostrará cómo ejecutar la funcionalidad del componente actual.

<div class="warning">
<span class="warning">:warning:</span>
Recuerde que para ejecutar un componente previamente determinado, deberá inicializar el SDK con su licencia correspondiente y luego iniciar una nueva operación. Para más información, consulte la documentación del componente principal.
</div>

Una vez configurado el componente, para lanzarlo se debe ejecutar el siguiente código:

```
  Future<Either<Exception, PhingersResult>> launchPhingers() async {
    return launchPhingersWithConfiguration(createStandardConfiguration());
  }

  Future<Either<Exception, PhingersResult>>
    launchPhingersWithConfiguration(PhingersConfiguration configuration) async {
    try
    {
      FphiSdkmobilePhingers phingers = FphiSdkmobilePhingers();
      Map? resultJson = await phingers.startPhingersComponent(widgetConfigurationJSON: configuration);

      return Right(PhingersResult.fromMap(resultJson));
    } on Exception catch (e) {
      return (Left(e));
    }
  }

  /// Sample of standard plugin configuration 
  PhingersConfiguration createStandardConfiguration() {
    PhingersConfiguration configurationWidget;
    configurationWidget = PhingersConfiguration();
    configurationWidget.mReticleOrientation   = PhingersReticleOrientation.DT_LEFT; // LEFT or RIGHT
    configurationWidget.mUseLiveness          = true;
    configurationWidget.mExtractionTimeout    = 50000;
    configurationWidget.mShowTutorial         = false;
    configurationWidget.mFingersFilter        = FingersFilter.DT_ALL_5_FINGERS_ONE_BY_ONE;
    return configurationWidget;
  }
```

---

## 5. Resultado Obtenido
Como se muestra en el ejemplo anterior, el resultado se devuelve en forma de un objeto **PhingersResult** a través de ***Promises***, ya sea una operación exitosa o un error:

```
FphiSdkmobilePhingers phingers = FphiSdkmobilePhingers();
Map? resultJson = await phingers.startPhingersComponent(widgetConfigurationJSON: configuration);

return Right(PhingersResult.fromMap(resultJson));
```

Independientemente de si el resultado es correcto o incorrecto, el resultado tendrá el siguiente formato:

```
class PhingersResult
{
  final SdkFinishStatus finishStatus;
  final String finishStatusDescription;
  final String errorDiagnostic;
  final String? errorMessage;
  final dynamic fingers;
  final dynamic slapImages;
}
```
<div class="note">
<span class="note">:information_source:</span>
El resultado se devolverá mediante una promesa que contiene un objeto de la clase ***PhingersResult***. A continuación, encontrará más información sobre estos campos.
</div>

### 5.0 finishStatus

- **1**: La operación se realizó correctamente.
- **2**: Se produjo un error, que se indicará en la cadena errorType y, opcionalmente, se mostrará un mensaje de información adicional en la propiedad errorMessage.

### 5.1 finishStatusDescription

- **STATUS_OK**: La operación se realizó correctamente.
- **STATUS_ERROR**: Se ha producido un error, que se indicará en la cadena errorType y, opcionalmente, se mostrará un mensaje de información adicional en la propiedad errorMessage.

### 5.2 errorDiagnostic

Returns the type of error that occurred (if there was one, which is
indicated in the *finishStatus* parameter with the value *Error*).

### 5.3 errorType

Devuelve el tipo de error que se ha producido.

### 5.4 errorMessage 
  
Indica un mensaje de error adicional si es necesario. Es un valor opcional.

### 5.5 fingers

Devuelve los dedos procesados. Y sus propiedades:

- **livenessScore**
- **position**
- **quality**
- **wsq**
- **displayImage**
- **minutiaesNumber**
- **nist2Quality**
- **nistQuality**
- **template**
- **proprietaryQuality**
- **imageWidth**
- **imageHeight**

### 5.6 slapImages

Devuelve las imágenes slapImage procesadas y sus propiedades:

- **image**
- **position**
- **livenessScore**