# Migración Android - videoId (1.0.13 -\> 1.1.8)

A continuación se detallan los cambios para la migración del SDK con el
componente de video identificación a la versión **1.1.8**. El resto de
código debería mantenerse tal y como está.

## 1. Inicialización del SDK

### Código 1.0.13

-   En la **versión 1.0.13**, en la fase de inicialización de la SDK se
    creaba el controlador de **VideoID** al cual se le inyectaba la
    *Activity* actual. Este controlador se inyectaba a su vez en el
    controlador genérico de la SDK (***SDKController***).

``` java
private var videoIdController: VideoIdController = VideoIdController()

videoIdController.init(activity)

val sdkController = SDKController()
sdkController.initVideoIdController(videoIdController)
```

### **Código 1.1.8**

-   En la **versión 1.1.8**, en cambio, se realizan unos pequeños
    cambios. Estos son:

    -   Se inyecta el objeto de aplicación (***Application***) al
        controlador general (***SDKController***)

    -   Se crea el controlador de **VideoID** y se inyecta en el
        ***SDKController***.

    -   **\[NUEVO\]** Ahora hay un nuevo método de licenciamiento, lo
        que conlleva inyectar también la licencia como String (esta
        licencia os la tendrán que generar de nuevo desde **Soporte
        Facephi**)

``` java
val sdkController = SDKController(application)
sdkController.initVideoIdController(videoIdController)
sdkController.license = "LICENSE_IN_STRING"
```

## 2. Inicialización de VideoId

### Código 1.0.13

-   En la **versión 1.0.13**, lo primero es configurar el Controlador de
    **VideoID** con la información del backend y el *operationId*
    previamente generado.

-   Tras configurarlo, se puede lanzar el Controlador y esperar el
    resultado.

``` java
sdkController.setupVideoId(
    EnvironmentVideoIdData(
        socketUrl = "URL SOCKET",
        uuid = operationId,
        apiKey = "API_KEY"
    )
)
sdkController.launchVideoId { sdkResult ->
    log(
        "VIDEO_ID RESULT: \n " +
            "FinishStatus: ${sdkResult.finishStatus}\n " +
            "ErrorType: ${sdkResult.errorType}\n "
    )
}
```

### **Código 1.1.8**

-   En la **versión 1.1.8** se puede ver que es bastante similar, con la
    diferencia de que se puede añadir en la configuración el “mode” o
    flujo del componente (dependiendo de la elección saldrán diferentes
    peticiones de datos durante el proceso). En este caso concreto
    debería indicarse el modo **FACE_DOCUMENT_FRONT_BACK**.

-   El lanzamiento del controlador de **VideoID** debería mantenerse
    como en la versión anterior.

``` java
sdkController.setupVideoId(
    EnvironmentVideoIdData(
        uuid = operationId,
        mode = VideoIdMode.FACE_DOCUMENT_FRONT_BACK,
        url = "SOCKET_URL",
        apiKey = "API_KEY"
    )
)
sdkController.launchVideoId { sdkResult ->
    log(
        "VIDEO_ID RESULT: \n " +
            "FinishStatus: ${sdkResult.finishStatus}\n " +
            "ErrorType: ${sdkResult.errorType}\n " +
            "Data: ${sdkResult.data}\n "
    )
}
```
