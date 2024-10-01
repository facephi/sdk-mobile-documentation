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

En nuestro proyecto añadimos un nuevo target de tipo ***Broadcast Upload Extension:***

![Image](/iOS/VideoRecording/videoRecording-001.png)

Configuramos el nombre de la extensión, en este ejemplo será VideoRecording:

![Image](/iOS/VideoRecording/videoRecording-002.png)

Si aparece el siguiente modal, pulsamos en activate:

![Image](/iOS/VideoRecording/videoRecording-003.png)

Esto genera la siguiente estructura:

![Image](/iOS/VideoRecording/videoRecording-004.png)

Donde SampleHandler es la clase principal de la extensión.

**NOTA: Es importante tener en cuenta que el número de la version (MARKETING_VERSION) y el número de versión del proyecto debe ser siempre el mismo en ambos targets:**

![Image](/iOS/VideoRecording/videoRecording-005.png)

### 2.2 Creando el App Group compartido

Si no lo tenemos ya en nuestra app, podemos crear una nueva Capability de tipo App Group.

Esto servirá para crear el contenedor compartido entre nuestra extensión y el target de la aplicación.

![Image](/iOS/VideoRecording/videoRecording-006.png)

Asignamos un nombre al nuevo App Group después de hacer click sobre el icono +:

![Image](/iOS/VideoRecording/videoRecording-007.png)

Seleccionamos el mismo identificador en nuestra extensión. De este modo ambos tendrán chequeado el App Group que acabamos de crear:

![Image](/iOS/VideoRecording/videoRecording-008.png)

XCode generará o actualizará automáticamente los archivos de tipo entitlement implicados para añadir la capability a cada target:

![Image](/iOS/VideoRecording/videoRecording-009.png)

### 2.3 Dependencias requeridas para la integración

<div class="warning">
<span class="warning">:warning:</span>
Para evitar conflictos y problemas de compatibilidad, en caso de querer instalar el componente en un proyecto que contenga una versión antigua de las librerías de Facephi (Widgets), éstos deberán eliminarse por completo antes de la instalación de los componentes de la SDKMobile.
</div>

Actualmente las librerías de FacePhi se distribuyen de forma remota a través de diferentes gestores de dependencias.

### 2.3.1 Cocoapods

Las dependencias **obligatorias** que deberán haberse instalado previamente (añadiéndolas en el fichero Podfile del proyecto) son:

```
pod 'FPHISDKMainComponent' , '~> 1.5.0'
```

- Se recomienda utilizar también el componente de VideoRecording con el de tracking (`FPHISDKTrackingComponent`).

- Para instalar el componente actual deberá incluirse la siguiente entrada en el Podfile de la aplicación:
```
pod 'FPHISDKVideoRecordingComponent' , '~> 1.5.0'
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

#### 2.3.2 SPM

Añadimos nuestra dependencia al proyecto y la asignamos al target de VideoRecording:

![Image](/iOS/VideoRecording/videoRecording-010.png)

Debemos luego añadirlo también al target de la app en General → Framework, Libraries and Embedded Content:

![Image](/iOS/VideoRecording/videoRecording-011.png)

### 2.4 Implementar la extensión

En este punto se debe desarrollar la funcionalidad en nuestro recién creado SampleHandler.swift. Para ello, copiamos/sustituimos el siguiente código:

```
class SampleHandler: RPBroadcastSampleHandler {
    var bufferCopy: CMSampleBuffer?
    var lastSendTs = Int64(Date().timeIntervalSince1970 * 1000)
    var timer: Timer?
    // Shared info between app and extension
    private let kAppGroupName = "group.com.facephi.sdk.demo" // SET YOUR APP_GROUP_NAME, you can get it from your entitlements' file
    override func broadcastStarted(withSetupInfo setupInfo: [String: NSObject]?) {
        // Load shared info from app
        let sharedContainer = UserDefaults(suiteName: kAppGroupName)!
        let uid = sharedContainer.string(forKey: "UID")!
        let token = sharedContainer.string(forKey: "TOKEN")!
        let channel = sharedContainer.string(forKey: "CHANNEL")!
        // Passing data to app
        sharedContainer.setValue(true, forKey: "BROADCASTSTARTED")
        sharedContainer.synchronize()
        print("uid: \(uid)")
        print("token: \(token)")
        print("channelName: \(channel)")
        // In-App Screen Capture
        AgoraUploader.startBroadcast(uid: uid, token: token, channel: channel)
        AgoraUploader.sharedAgoraEngine.delegate = self
        DispatchQueue.main.async {
            self.timer = Timer.scheduledTimer(withTimeInterval: 0.1, repeats: true) { [weak self] (_: Timer) in
                guard let weakSelf = self else { return }
                let elapse = Int64(Date().timeIntervalSince1970 * 1000) - weakSelf.lastSendTs
                print("elapse: \(elapse)")
                // if frame stopped sending for too long time, resend the last frame
                // to avoid stream being frozen when viewed from remote
                if elapse > 300 {
                    if let buffer = weakSelf.bufferCopy {
                        weakSelf.processSampleBuffer(buffer, with: .video)
                    }
                }
            }
        }
    }
    override func broadcastPaused() {
        // User has requested to pause the broadcast. Samples will stop being delivered.
    }
    override func broadcastResumed() {
        // User has requested to resume the broadcast. Samples delivery will resume.
    }
    override func broadcastFinished() {
        timer?.invalidate()
        timer = nil
        AgoraUploader.stopBroadcast()
    }
    override func processSampleBuffer(_ sampleBuffer: CMSampleBuffer, with sampleBufferType: RPSampleBufferType) {
        DispatchQueue.main.async { [weak self] in
            switch sampleBufferType {
            case .video:
                if let weakSelf = self {
                    weakSelf.bufferCopy = sampleBuffer
                    weakSelf.lastSendTs = Int64(Date().timeIntervalSince1970 * 1000)
                }
                AgoraUploader.sendVideoBuffer(sampleBuffer)
            @unknown default:
                break
            }
        }
    }
}
```

**NOTA: Hay que asegurarse de introducir el App Group Name correcto en la linea 6. En nuestro ejemplo era group.com.facephi.demosdk-videoRecording.**

Opcionalmente puedes escuchar los distintos eventos que ocurren cuando el usuario interacciona con la funcionalidad de grabación si haces que la clase SampleHandler extienda `AgoraRtcEngineDelegate`:

```
import AgoraRtcKit

extension SampleHandler: AgoraRtcEngineDelegate {
    /// callback when warning occured for agora sdk, warning can usually be ignored, still it's nice to check out
    /// what is happening
    /// Warning code description can be found at:
    /// en: https://docs.agora.io/en/Voice/API%20Reference/oc/Constants/AgoraWarningCode.html
    /// cn: https://docs.agora.io/cn/Voice/API%20Reference/oc/Constants/AgoraWarningCode.html
    /// @param warningCode warning code of the problem
    func rtcEngine(_ engine: AgoraRtcEngineKit, didOccurWarning warningCode: AgoraWarningCode) {}
    
    /// callback when error occured for agora sdk, you are recommended to display the error descriptions on demand
    /// to let user know something wrong is happening
    /// Error code description can be found at:
    /// en: https://docs.agora.io/en/Voice/API%20Reference/oc/Constants/AgoraErrorCode.html
    /// cn: https://docs.agora.io/cn/Voice/API%20Reference/oc/Constants/AgoraErrorCode.html
    /// @param errorCode error code of the problem
    func rtcEngine(_ engine: AgoraRtcEngineKit, didOccurError errorCode: AgoraErrorCode) {}
    
    /// callback when the local user joins a specified channel.
    /// @param channel
    /// @param uid uid of local user
    /// @param elapsed time elapse since current sdk instance join the channel in ms
    func rtcEngine(_ engine: AgoraRtcEngineKit, didJoinChannel channel: String, withUid uid: UInt, elapsed: Int) {}
    
    /// callback when a remote user is joinning the channel, note audience in live broadcast mode will NOT trigger this event
    /// @param uid uid of remote joined user
    /// @param elapsed time elapse since current sdk instance join the channel in ms
    func rtcEngine(_ engine: AgoraRtcEngineKit, didJoinedOfUid uid: UInt, elapsed: Int) {}
    
    /// callback when a remote user is leaving the channel, note audience in live broadcast mode will NOT trigger this event
    /// @param uid uid of remote joined user
    /// @param reason reason why this user left, note this event may be triggered when the remote user
    /// become an audience in live broadcasting profile
    func rtcEngine(_ engine: AgoraRtcEngineKit, didOfflineOfUid uid: UInt, reason: AgoraUserOfflineReason) {
        // Replace domain's value with your Bundle Identifier
        let error = NSError(domain: "com.facephi.demosdk-videoRecording", code: 0, userInfo: [NSLocalizedDescriptionKey: NSLocalizedString("Call ended", comment: "")])
        
        finishBroadcastWithError(error)
    }
}
```

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la información asociada correctamente en la plataforma deberá ejecutarse previamente el comando **newOperation**.

<div class="warning">
<span class="warning">:warning:</span>
Este comando debe ejecutarse siempre. Para saber más acerca de cómo iniciar una nueva operación, se recomienda consultar la documentación de Core Component, en el que se detalla y explica en qué consiste este proceso.
</div>

---

## 4. Uso de componente

Una vez iniciado el componente y creada una nueva operación (apartado 3) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar el componente:

- **[SIN TRACKING]** Esta llamada permite lanzar la funcionalidad del componente con normalidad, pero **no se trackeará** ningún evento al servidor de tracking:


```java
let controller = VideoRecordingController(data: VideoRecordingConfigurationData(), appGroupName: "group.com.facephi.demosdk-videoRecording", extensionName: "VideoRecording", output: { _ in })
SDKController.shared.launchMethod(controller: controller)
```
 

- **[CON TRACKING]** Esta llamada permite lanzar la funcionalidad del componente con normalidad, pero sí se trackearán los eventos internos al servidor de tracking:


```java
let controller = VideoRecordingController(data: VideoRecordingConfigurationData(), appGroupName: "group.com.facephi.demosdk-videoRecording", extensionName: "VideoRecording", output: { _ in })
SDKController.shared.launch(controller: controller)
```

<div class="warning">
<span class="warning">:warning:</span>
El método **launch** debe usarse **por defecto**. Este método permite utilizar **tracking** en caso de estar su componente activado, y no lo usará cuando esté desactivado (o no se encuentre el componente instalado).

Por el contrario, el método **launchMethod** cubre un caso especial, en el cual el integrador tiene instalado y activado el tracking, pero en un flujo determinado dentro de la aplicación no desea trackear información. En ese caso se usa este método para evitar que se envíe esa información a la plataforma.
</div>

En los datos de configuración (*VideoRecordingConfigurationData*) también se podrán modificar:

- **Datos opcionales que normalmente se incluyen dentro de la licencia**

    -   **url**: Ruta al socket de video.
    -   **apiKey**: ApiKey necesaria para la conexión con el socket de video.
    -   **tenantId**: Identificador del tenant que hace referencia al cliente actual, necesario para la conexión con el servicio de video.
    -   **extractionTimeout**: Cuanto tiempo (milisegundos) se quedará el componente esperando al socket antes de generar un error de timeout.
    -   **showDiagnostic**: En caso de que ocurra algún error el error se mostrará por pantalla además de enviarlo con el output.

## 5. Personalización del componente

Ahora mismo no existen recursos que configurar en el componente.

## 6. Errores y problemas frecuentes

### 6.1 En tiempo de compilación

#### 6.1.1 Permisos de escritura - Sandbox: rsync.samba(67364) deny(1) file-write-create 
Si aparece un error de compilación en referencia a permisos de escritura:

![Image](/iOS/VideoRecording/videoRecording-012.png)

Revisar el estado en Build Settings del parámetro **ENABLE_USER_SCRIPT_SANDBOXING**, su valor debe ser **NO**.

![Image](/iOS/VideoRecording/videoRecording-013.png)

### 6.2 En tiempo de ejecución

#### 6.2.1 Starscream - EXC_BAD_ACCESS

Al lanzar el componente puede aparecer un error en la dependencia Starscream:

![Image](/iOS/VideoRecording/videoRecording-014.png)

***Solución*** - Subir la versión del Pod mínima de iOS11 a iOS12:

![Image](/iOS/VideoRecording/videoRecording-015.png)

#### 6.2.2 QuickTime Player

Al lanzar el componente, si el iPhone está ya conectado y compartiendo la pantalla con una sesión de QuickTime Player, la videograbación no funcionará.

***Solución*** - Cerrar QuickTime Player, la aplicación y volver a iniciar el proceso.


#### 6.2.3 La videograbación no comienza

Lanzando el componente, no podemos ver el modal nativo de videograbación o lo vemos pero al iniciar la grabación no comienza.

Posible Causa: La extensión creada en la aplicación tiene un "Bundle Identifier". Si este identificador ha sido modificado, el dispositivo puede tener cacheado el valor antiguo.

***Posible Solución*** - Desinstalar la app, instalarla de nuevo. Reiniciar si es necesario.
