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
[Primeros Pasos](./Mobile_SDK#11-requisitos-mínimos).

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
Antes de integrar este componente se recomienda leer la documentación de [Integración Inicial](./Mobile_SDK#2-integración-inicial) y seguir las instrucciones indicadas en dicho documento.
</div>

En esta sección se explicará paso a paso cómo integrar el componente
actual en un proyecto ya existente.

### 2.1 Dependencias requeridas para la integración

Actualmente las librerías de FacePhi se distribuyen de forma remota a través de diferentes gestores de dependencias.

### 2.1.1 Cocoapods

Las dependencias **obligatorias** que deberán haberse instalado previamente (añadiéndolas en el fichero Podfile del proyecto) son:

```
pod 'FPHISDKMainComponent', '~> 2.6.0'
```

- Se recomienda utilizar también el componente de VideoRecording con el de tracking (`FPHISDKTrackingComponent`).

- Para instalar el componente actual deberá incluirse la siguiente entrada en el Podfile de la aplicación:

```
pod 'FPHISDKVideoRecordingComponent', '~> 2.6.0'
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

#### 2.1.2 SPM

Añadimos nuestra dependencia al proyecto y la asignamos al target de VideoRecording:

![Image](/ios/VideoRecording/videoRecording-010.png)

Debemos luego añadirlo también al target de la app en General → Framework, Libraries and Embedded Content:

![Image](/ios/VideoRecording/videoRecording-011.png)

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la información asociada correctamente en la plataforma deberá ejecutarse previamente el comando **newOperation**.

<blockquote>
    <p>
Este comando debe ejecutarse siempre. Para saber más acerca de cómo iniciar una nueva operación, se recomienda consultar la documentación de Core Component, en el que se detalla y explica en qué consiste este proceso.
    </p>
</blockquote>

---

## 4. Uso de componente

Una vez iniciado el componente y creada una nueva operación (apartado 3) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar el componente:

- **[SIN TRACKING]** Esta llamada permite lanzar la funcionalidad del componente con normalidad, pero **no se trackeará** ningún evento al servidor de tracking:

```java
let controller = VideoRecordingController(data: VideoRecordingConfigurationData(), output: { _ in })
SDKController.shared.launchMethod(controller: controller)
```

- **[CON TRACKING]** Esta llamada permite lanzar la funcionalidad del componente con normalidad, pero sí se trackearán los eventos internos al servidor de tracking:

```java
let controller = VideoRecordingController(data: VideoRecordingConfigurationData(), output: { _ in })
SDKController.shared.launch(controller: controller)
```

<blockquote>
    <p>
El método **launch** debe usarse **por defecto**. Este método permite utilizar **tracking** en caso de estar su componente activado, y no lo usará cuando esté desactivado (o no se encuentre el componente instalado).

Por el contrario, el método **launchMethod** cubre un caso especial, en el cual el integrador tiene instalado y activado el tracking, pero en un flujo determinado dentro de la aplicación no desea trackear información. En ese caso se usa este método para evitar que se envíe esa información a la plataforma.
</p>

</blockquote>

En los datos de configuración (_VideoRecordingConfigurationData_) también se podrán modificar:

- **Datos opcionales que normalmente se incluyen dentro de la licencia**

  - **url**: Ruta al socket de video.
  - **apiKey**: ApiKey necesaria para la conexión con el socket de video.
  - **tenantId**: Identificador del tenant que hace referencia al cliente actual, necesario para la conexión con el servicio de video.
  - **extractionTimeout**: Cuanto tiempo (milisegundos) se quedará el componente esperando al socket antes de generar un error de timeout.
  - **showDiagnostic**: En caso de que ocurra algún error el error se mostrará por pantalla además de enviarlo con el output.

## 5. Personalización del componente

### 5.1 Colores

- El único color disponible para modificar en este componente es:

```java
case sdkPrimaryColor
```

Para modificarlo, se debe crear un asset con ese mismo nombre en el Bundle.main de la aplicación.

### 5.2 Textos

Los literales disponibles son:

```java
"video_recording_component_title_message"="¿Permitir captura de pantalla en %@?";
"video_recording_component_desc_message"="Esta aplicación hará una captura de tu pantalla que no podrás revisar.";
"video_recording_component_cancel_message"="No permitir";
"video_recording_component_confirm_message"="Grabar pantalla";
```

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
