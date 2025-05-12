# Video Recording Component

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
<a href="Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page">Mobile SDK</a>.

---

## 1. Introducción

El _Componente_ tratado en el documento actual recibe el nombre de
**_VideoRecording Component_**. Éste se encarga de capturar la pantalla
del dispositivo en segundo plano. Está orientado principalmente para la
grabación del proceso de onboarding.

## 1.1 Minimum requirements

The minimum iOS SDK version required is as follows:

Minimum iOS version: **13**

---

## 2. Integración del componente

<div class="warning">
<span class="warning">:warning:</span>
Antes de integrar este componente se recomienda leer la documentación
relativa a:

<a href="Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page"><strong><u>Mobile SDK</u></strong></a>
y seguir las instrucciones indicadas en dichodocumento.

</div>

En esta sección se explicará paso a paso cómo integrar el componente
actual en un proyecto ya existente.

### 2.1 Creando la extensión

Para el ejemplo documentado se ha utilizado una app con SwiftUI pero el componente y la documentación son válidos independientemente de que se use UIKit o SwiftUI.

En nuestro proyecto añadimos un nuevo target de tipo **_Broadcast Upload Extension:_**

![Image](/ios/VideoRecording/videoRecording-001.png)

Configuramos el nombre de la extensión, en este ejemplo será VideoRecording:

![Image](/ios/VideoRecording/videoRecording-002.png)

Si aparece el siguiente modal, pulsamos en activate:

![Image](/ios/VideoRecording/videoRecording-003.png)

Esto genera la siguiente estructura:

![Image](/ios/VideoRecording/videoRecording-004.png)

Por defecto, un archivo llamado `SampleHandler` es creado. Este archivo contiene la clase principal de la extensión.

Para hacer uso de la funcionalidad de Facephi para compartir pantalla debemos modificar la clave `NSExtensionPrincipalClass` del Info.plist y asignar en su lugar:

```
videoRecordingComponent.VideoRecordingHandler
```

![Image](/ios/VideoRecording/videoRecording-2.1.InfoPList.png)

**NOTA: Es importante tener en cuenta que el número de la version (MARKETING_VERSION) y el número de versión del proyecto debe ser siempre el mismo en ambos targets:**

![Image](/ios/VideoRecording/videoRecording-005.png)

### 2.2 Asignando el NSMicrophoneUsageDescription

La funcionalidad de Video Recording también puede compartir los datos recogidos por el micrófono del dispositivo. Por esa razón, es necesario añadir:

```
NSMicrophoneUsageDescription
```

Al Info.plist de nuestra app, detallando por qué es necesario que el usuario permita el acceso al micrófono.

### 2.3 Crando el App Group compartido

Ahora necesitamos crear una nueva capability de tipo `App Group`.

Esto servirá para crear el contenedor compartido entre nuestra extensión y el target de la aplicación.

![Image](/ios/VideoRecording/videoRecording-006.png)

Tras hacer click en el icono `+` para añadir.

**Es importante que el valor asignado al App Group sea siempre:**

```
group.com.facephi.videoRecording
```

![Image](/ios/VideoRecording/videoRecording-007.png)

Seleccionamos el mismo identificador en nuestra extensión. De este modo ambos tendrán chequeado el App Group que acabamos de crear:

![Image](/ios/VideoRecording/videoRecording-008.png)

XCode generará o actualizará automáticamente los archivos de tipo entitlement implicados para añadir la capability a cada target:

![Image](/ios/VideoRecording/videoRecording-009.png)

### 2.4 Dependencias requeridas para la integración

<div class="warning">
<span class="warning">:warning:</span>
Para evitar conflictos y problemas de compatibilidad, en caso de querer instalar el componente en un proyecto que contenga una versión antigua de las librerías de Facephi (Widgets), éstos deberán eliminarse por completo antes de la instalación de los componentes de la SDKMobile.
</div>

Actualmente las librerías de FacePhi se distribuyen de forma remota a través de diferentes gestores de dependencias.

### 2.4.1 Cocoapods

Las dependencias **obligatorias** que deberán haberse instalado previamente (añadiéndolas en el fichero Podfile del proyecto) son:

```
pod 'FPHISDKMainComponent' , '~> 2.0.0'
```

- Se recomienda utilizar también el componente de VideoRecording con el de tracking (`FPHISDKTrackingComponent`).

- Para instalar el componente actual deberá incluirse la siguiente entrada en el Podfile de la aplicación:

```
pod 'FPHISDKVideoRecordingComponent' , '~> 2.0.0'
```

- Se debe declarar esta dependencia dentro del target de la app y de la extensión (esto último se explicará a continuación)

- Un ejemplo de cómo se vería el Podfile:

```
target 'demoApp' do
...
  pod 'FPHISDKMainComponent', 'X.Y.Z'
  pod 'FPHISDKVideoRecordingComponent', 'A.B.C'
  pod 'FPHISDKTrackingComponent', 'D.E.F' ### Optional, recommended
...
end
target 'VideoRecording' do ### Our extension target
  use_frameworks! ### We want to use frameworks instead of Static Libs
  pod 'FPHISDKVideoRecordingComponent', 'A.B.C'
end
```

NOTA: Hay que tener cuidado de poner el target de la extensión fuera del target de la aplicación. De no hacerlo así, los pods de la aplicación se compilarían también en la extensión, dando como resultado problemas colaterales.

#### 2.4.2 SPM

Añadimos nuestra dependencia al proyecto y la asignamos al target de VideoRecording:

![Image](/ios/VideoRecording/videoRecording-010.png)

Debemos luego añadirlo también al target de la app en General → Framework, Libraries and Embedded Content:

![Image](/ios/VideoRecording/videoRecording-011.png)

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la información asociada correctamente en la plataforma deberá ejecutarse previamente el comando **newOperation**.

<div class="note">
<span class="note">:information_source:</span>
Este comando debe ejecutarse siempre. Para saber más acerca de cómo iniciar una nueva operación, se recomienda consultar la documentación de Core Component, en el que se detalla y explica en qué consiste este proceso.
</div>

---

## 4. Uso de componente

### 4.1 Creando la instancia

Esta funcionalidad es configurada y lanzada gracias a la clase `VideoRecordingController`.

Para crear una instancia utilizamos su método `init()`:

```swift
init(data: VideoRecordingConfigurationData?, extensionName: String?, output: @escaping (SdkResult<String>) -> Void)
```

- `data`: El objeto de configuración
- `extensionName`: El nombre que le pusimos a la `Broadcast Upload Extension` que creamos anteriormente.
- `output`: El _callback_ al que se llama cuando el inicio de la instancia se resuelve (ya sea con un éxito o un fracaso). En el caso de este componente, el éxito es reportado cuando se consigue establecer una conexión con el backend y se está compartiendo la pantalla.

### 4.2 Configurando la instancia

Se puede modificar el comportamiento de la instancia a través de la clase (_VideoRecordingConfigurationData_):

- **Parámetros opcionales que normalmente se incluyen dentro de la licencia**
  - **url**: dirección del socket de video.
  - **apiKey**: clave requerida para la conexión con socket de video.
  - **tenantId**: identificador que referencia al cliente que está lanzando la funcionalidad.
  - **extractionTimeout**: Tiempo en milisegundos que tarda el componente en devolver un error de tipo `TIMEOUT`si no se establece conexión con el socket.
  - **showDiagnostic**: Booleano que indica si se desea que el usuario vea una pantalla de diagnóstico cuando ocurre un error antes de llamar al `output`.

### 4.3 Lanzando el componente

Una vez hemos tenemos una operación válida ([Sección 3](#3-start-new-operation)) y hemos generado una instancia de nuestro controlador, podemos lanzarlo.

Hay dos formas de hacerlo:

- **[SIN TRACKING]** Esta llamada permite lanzar la funcionalidad del componente con normalidad, pero **no se trackeará** ningún evento al servidor de tracking:

```swift
let controller = VideoRecordingController(data: VideoRecordingConfigurationData(), extensionName: "VideoRecording", output: { _ in })
SDKController.shared.launchMethod(controller: controller)
```

- **[CON TRACKING]** Esta llamada permite lanzar la funcionalidad del componente con normalidad, pero sí se trackearán los eventos internos al servidor de tracking:

```swift
let controller = VideoRecordingController(data: VideoRecordingConfigurationData(), extensionName: "VideoRecording", output: { _ in })
SDKController.shared.launch(controller: controller)
```

**Nota:**

<div class="warning">
<span class="warning">:warning:</span>
El método **launch** debe usarse **por defecto**. Este método permite utilizar **tracking** en caso de estar su componente activado, y no lo usará cuando esté desactivado (o no se encuentre el componente instalado).

Por el contrario, el método **launchMethod** cubre un caso especial, en el cual el integrador tiene instalado y activado el tracking, pero en un flujo determinado dentro de la aplicación no desea trackear información. En ese caso se usa este método para evitar que se envíe esa información a la plataforma.

</div>

En los datos de configuración (_VideoRecordingConfigurationData_) también se podrán modificar:

## 5. Personalización del componente

Ahora mismo no existen recursos que configurar en el componente.

## 6. Errores y problemas frecuentes

### 6.1 En tiempo de compilación

#### 6.1.1 Permisos de escritura - Sandbox: rsync.samba(67364) deny(1) file-write-create

Si aparece un error de compilación en referencia a permisos de escritura:

![Image](/ios/VideoRecording/videoRecording-012.png)

Revisar el estado en Build Settings del parámetro **ENABLE_USER_SCRIPT_SANDBOXING**, su valor debe ser **NO**.

![Image](/ios/VideoRecording/videoRecording-013.png)

### 6.2 En tiempo de ejecución

#### 6.2.1 Starscream - EXC_BAD_ACCESS

Al lanzar el componente puede aparecer un error en la dependencia Starscream:

![Image](/ios/VideoRecording/videoRecording-014.png)

**_Solución_** - Subir la versión del Pod mínima de iOS11 a iOS12:

![Image](/ios/VideoRecording/videoRecording-015.png)

#### 6.2.2 QuickTime Player

Al lanzar el componente, si el iPhone está ya conectado y compartiendo la pantalla con una sesión de QuickTime Player, la videograbación no funcionará.

**_Solución_** - Cerrar QuickTime Player, la aplicación y volver a iniciar el proceso.

#### 6.2.3 La videograbación no comienza

Lanzando el componente, no podemos ver el modal nativo de videograbación o lo vemos pero al iniciar la grabación no comienza.

Posible Causa: La extensión creada en la aplicación tiene un "Bundle Identifier". Si este identificador ha sido modificado, el dispositivo puede tener cacheado el valor antiguo.

**_Posible Solución_** - Desinstalar la app, instalarla de nuevo. Reiniciar si es necesario.
