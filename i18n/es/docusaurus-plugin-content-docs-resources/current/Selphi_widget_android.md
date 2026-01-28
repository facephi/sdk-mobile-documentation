# Selphi Widget Android

## 1. Introducción

En este manual se documenta la configuración y funcionamiento de FacePhi Selphi Android Widget en aplicaciones desarrolladas para el sistema operativo Android, así como su integración en proyectos para este sistema operativo.
Se describen:

- Propiedades, métodos y comunicación que integran este widget.
- Creación de un proyecto Android que integre el widget para cualquier aplicación Android.

### 1.1. Versión del widget

La versión del widget se puede consultar, incluso estando ya integrado en una aplicación, de la siguiente manera:

- Buscamos el fichero `fphi-core-widget-android.aar`.
- Extraemos su contenido o accedemos a él como si fuera un archivo .zip.
- En el interior encontraremos el fichero `AndroidManifest.xml`.
- Lo abrimos como si fuera un documento de texto.
- En el interior, en una de las primeras líneas, encontramos el nombre de versión (android:versionName=”x.x.x.x”). El número de versión del widget será el que se indica en esa línea `android:versionName=”x.x.x.x”`.

### 1.2. Requerimientos mínimos

- Android API level: 15
- RAM: 2 GB

Si se usa la caracteristica de Detección de Ataques de Inyección (IAD) entonces:
- API level 24
- RAM: 3 GB

---

## 2. API (Interfaz de programación de aplicaciones)

### 2.1. Propiedades

El widget Android proporcionado es una clase de tipo `Activity` que permite iniciar una extracción de características faciales, así como configurar el mismo con valores adecuados para la extracción.

El paso de argumentos entre la clase principal del proyecto y el widget se sucede mediante clases Parcelables. La clase que se usa para dicha comunicación es la clase `WidgetConfiguration`.

Cuando se crea un nuevo widget en una aplicación Android, se pueden establecer ciertas propiedades del mismo que indican el modo de funcionamiento del mismo.
Esa configuración del widget se maneja mediante la clase `WidgetConfiguration`. Esta clase contiene varios métodos que le permiten establecer las siguientes propiedades:

#### 2.1.1. ResourcesPath

Establece la ruta del archivo de recursos que utilizará el widget para su configuración gráfica. La ruta de este archivo debe especificarse relativa a la carpeta ‘assets’ de la aplicación principal.

### 2.2. Métodos

Dispone de los siguientes métodos para configurar el widget, en la clase `WidgetConfiguration`:

#### 2.2.0. setLicense
```java
    public void setLicense(String license)
```
Establece el contenido de licencia que deberá utilizarse para acceder a algunas caracteristicas del widget.

#### 2.2.1. setLivenessMode
```java
    public void setLivenessMode(WidgetLivenessMode liveness)
```
Establece el modo liveness del widget.
Los valores permitidos son:

- **LIVENESS_NONE**: Indica que no debe activarse el modo detección de foto en los procesos de autenticación.
- **LIVENESS_MOVE**: Indica que debe activarse el modo de deteccion de movimiento activo.
- **LIVENESS_PASSIVE**: Indica que la prueba de vida pasiva se realiza en el servidor, enviando para tal fin la "BestImage" o el "TemplateRaw" correspondiente.

#### 2.2.2. setStabilizationMode
```java
    public void setStabilizationMode(boolean sm)
```
Establece un modo de estabilización previo a cualquier proceso de autenticación en el widget. Con este modo se obliga al widget a no empezar ningún proceso si el usuario no se encuentra con la cabeza mirando al frente y sin moverla.

#### 2.2.3. setQRFlag
```java
    public void setQRFlag(boolean qr)
```
Indica si se quiere o no activar la lectura de QR previo al proceso de autenticación.

#### 2.2.4. setUserTags
```java
    public void setUserTags(byte[] uTags)
```
Establece 4 bytes con datos que pueden ser configurados por la aplicación principal y que serán incorporados a las plantillas generadas por el extractor.

#### 2.2.5. setResourcesPath
```java
    public void setResourcesPath(String path)
```
Establece la ruta donde se encuentra el archivo de recursos del widget. Este archivo contiene tanto los recursos gráficos como los recursos de localización.
Esta ruta debe especificarse relativa a la carpeta ‘assets’ de la aplicación principal.

#### 2.2.6 setLocale
```java
    public void setLocale(String locale)
```
Fuerza al widget a utilizar la configuración de idioma indicado por el parámetro locale.
Este parámetro acepta tanto un código de idioma (p. ej. ‘en’) como un código de identificación regional (p. ej. ‘en_US’). Si el archivo de recursos del widget no tuviera una localización para el ‘locale’ seleccionado su configuración pasaría a utilizar el idioma por defecto.

#### 2.2.7. setFullscreen
```java
    public void setFullscreen(boolean fs)
```
Establece si se desea que el widget se arranque en modo pantalla completa, ocultando el status bar de Android.

#### 2.2.8. setCameraPreviewSize
```java
    public void setCameraPreviewSize(Point cameraPreviewSize)
```
Establece la resolución de cámara pasando un objeto que contiene el ancho y alto en píxels de la imagen.

#### 2.2.9 setFrontFacingCameraAsPreferred
```java
    public void setFrontFacingCameraAsPreferred()
```
Establece como cámara preferida para los procesos de autenticación la cámara frontal del dispositivo.

#### 2.2.10 setBackFacingCameraAsPreferred
```java
    public void setBackFacingCameraAsPreferred()
```
Establece como cámara preferida para los procesos de autenticación la cámara trasera del dispositivo.

#### 2.2.11 logImages
```java
    public void logImages(boolean logImages)
```
Activa o no el retorno de la lista de imágenes que se han capturado durante la ejecución de proceso de extracción. Si el parámetro de entrada se encuentra a `true`, a la hora de ejecutar el método `getImages()` se devolverá la lista de imágenes procesadas. En caso contrario, devolverá una lista vacía.
En el caso de no utilizar imágenes, se recomienda mantener este modo desactivado con el fin de conseguir mejorar el rendimiento de memoria en los dispositivos.

#### 2.2.12 setTutorialFlag
```java
    public void setTutorialFlag (boolean debug)
```
Establece la opción de mostrar un tutorial del proceso que se va a realizar a continuación. Una vez concluya el tutorial, el widget continuará con el proceso configurado.

#### 2.2.13 setDebug
```java
    public void setDebug(boolean debug)
```
Establece el modo de depuración del widget.

#### 2.2.14 setVideoFilename
```java
    public void setVideoFilename(String filename)
```
Establece la ruta absoluta del nombre del archivo en el que se grabará un video del proceso de autenticación. La aplicación es la responsable de solicitar los permisos necesarios al teléfono en caso de que esa ruta requiera de permisos adicionales. El widget, por defecto, no realizará ningún proceso de grabación a menos que se especifique una ruta de archivo mediante este método.

#### 2.2.15 generateTemplateRawFromBitmap
```java
    public static byte[] generateTemplateRawFromBitmap(Bitmap img)
```
Genera un templateRaw a partir de una imagen nativa de Android. Esta llamada es estática por lo que no requiere del lanzamiento del widget para realizar esta operación.

#### 2.2.16 generateTemplateRawFromByteArray
```java
    public static byte[] generateTemplateRawFromByteArray(byte[] img)
```
Genera un templateRaw a partir de una imagen en formato array de bytes. Este array debe contener la representación de la imagen en formato jpg o png. Esta llamada es estática por lo que no requiere del lanzamiento del widget para realizar esta operación.

#### 2.2.17 getWidgetVersion
```java
    public static String getWidgetVersion()
```
Devuelve la version actual del widget en formato cadena. Esta llamada es estática por lo que no requiere del lanzamiento del widget para realizar esta operación.

#### 2.2.18 setShowAfterCapture
```java
    public void setShowAfterCapture(boolean value)
```
Activa una preview de la selfie obtenida para que el usuario pueda aceptar la captura o repetirla.

#### 2.2.19 setExtractionDuration
```java
    public void setExtractionDuration(FPhiWidgetExtractionDuration extractionDuration)
```
Configura la cantidad de tiempo que el widget permanecerá extrayendo las caracteristicas faciales del usuario.

Los valores posibles son:
- **Short**: Duración de la extracción de 1 segundo. (Por defecto)
- **Medium**: Duración de la extracción de 2 segundos.
- **Long**: Duración de la extracción de 3 segundos.

#### 2.2.20 setPreferredOrientation
```java
    public void setPreferredOrientation(WidgetOrientation value)
```
Configura las orientaciones que el widget permitirá en la ejecución.

Los posibles valores son:
- **FULL_SENSOR**: Todas las orientaciones son permitidas.
- **FULL_SENSOR_NO_REVERSE**: Todas las orientaciones excepto portrait invertido son permitidas.
- **PORTRAIT**: Portrait permitida. (Por defecto)
- **LANDSCAPE_LEFT**: Landscape izquierda permitida.
- **LANDSCAPE_RIGHT**: Landscape derecha permitida.
- **PORTRAIT_REVERSE**: Portrait invertido permitida.
- **PORTRAIT_SENSOR**: Portrait y portrait invertido permitidas.
- **LANDSCAPE_SENSOR**: Landscape izquierda y derecha permitidas.
- **LOCKED**: Todas las orientaciones permitidas pero el widget no cambiará de orientación dinámicamente.

### 2.3. Integración del widget Android

El siguiente ejemplo de código ilustra la forma de integrar el widget en una aplicación Android:
```java
    /**
    * Creates an intent that invokes the widget.
    */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.main);

        Intent intent = new Intent(this, Widget.class);
        startActivityForResult(intent, 1);
    } 
```
En el código proporcionado, se crea un objeto `Intent`, el cual nos va a permitir cambiar entre activities. Este objeto se genera llamando a la clase del widget de Android:
```java
    Intent intent = new Intent(this, Widget.class);
```
Para poder ejecutar un `Activity` desde nuestra aplicación principal, en nuestro `AndroidManifest.xml` debemos declarar nuestras actividades.
```xml
    <activity
    android:name="com.facephi.selphi.Widget"
    android:label="Your app name"
    android:screenOrientation="portrait">
    </activity>
```
Se le deben conceder permisos a la cámara para poder hacer uso de ella:
```xml
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-feature android:name="android.hardware.camera" />
```
Es necesario establecer el archivo de donde se va a obtener la personalizacion gráfica del widget.
```java
    Intent intent = new Intent(this, Widget.class);
    WidgetConfiguration conf = new WidgetConfiguration("fphi-widget-resources-SelphiLive-1.2.zip");
    intent.putExtra("configuration", conf);
    startActivityForResult(intent, 1);
```
Se genera un objeto de tipo `WidgetConfiguration` que nos va a servir para la comunicación con el widget e indicarle la configuración que va a tener el extractor. La instrucción para pasarle la configuración al extractor es la siguiente:
```java
    intent.putExtra("configuration", conf);
```
Donde `conf` es nuestro objeto `WidgetConfiguration`.

Es indispensable que el primer parámetro del método `putExtra(…, …)` sea un `String` cuyo contenido sea "configuration", tal y como se indica en el ejemplo, ya que el widget espera recibir esta cadena en su llamada. En caso contrario, la comunicación no se va a realizar.
El siguiente paso será inicializar la `Activity` usando el método `startActivityForResult()`. Este método lanzará la `Activity` del widget y esperará respuesta del mismo. La llamada será la siguiente:
```java
    startActivityForResult(intent, 1);
```
Se le pasa como primer parámetro el intent al que le habremos insertado la configuración del extractor. Como segundo parámetro se le pasa una constante utilizada para saber desde dónde se ha realizado esta llamada, cada llamada deberá de usar una constante diferente para poder diferenciar el flujo de la aplicación.

### 2.4. Respuesta del widget

Cuando una actividad que ha sido llamada termina y vuelve a otra, se produce un evento llamado “onActivityResult(…)”. Cuando el proceso de extracción de patrones haya finalizado en el widget, este evento se lanzará, devolviendo la información necesaria para su comunicación. 

Parámetros recibidos:

- **requestCode**: Código tipo entero que coincide con la constante que le hayamos pasado a la actividad principal como segundo parámetro en `startActivityForResult()`.
- **resultCode**: El widget devolverá result_canceled o result_ok según si el proceso entero ha generado algún fallo durante la extracción, se ha cancelado de forma manual o si, por el contrario, termina de forma exitosa.
- **data**: El widget al finalizar su proceso devuelve un `Intent` con su resultado final.

Ejemplo de código:
```java
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (data == null) return;
    
        WidgetResult result = data.getParcelableExtra("result");
        if (result == null){
            Toast.makeText(getBaseContext(), getResources().getString(R.string.message_no_results),Toast.LENGTH_LONG).show();
            return;
        }

        // 1. La extracción finaliza con errores
        if (resultCode == RESULT_CANCELED) {
            if (result.getException() != null){
                if(result.getException().getExceptionType() != null) {
                    String exc_message = "";
                    switch(result.getException().getExceptionType()) {
                        case StoppedManually:
                            exc_message = getResources().getString (R.string.message_user_stopped_manually);
                            break;
                        case Timeout:
                            exc_message = getResources().getString(R.string.message_timeout_error);
                            break;
                        case CameraPermissionDenied:
                            exc_message = getResources().getString(R.string.message_camera_permission_error);
                            break;
                        case SettingsPermissionDenied:
                            exc_message = getResources().getString(R.string.message_settings_permission_error);
                            break;
                        default:
                            exc_message = getResources().getString(R.string.message_unexpected_error);
                            break;
                    }
                } 
                Toast.makeText(getBaseContext(),exc_message, Toast.LENGTH_LONG).show();
            }
        }
    }

    // 2. La extracción ha finalizado con éxito. 
    // La aplicación puede recuperar la información del "templateRaw".
    byte[] templateRaw = result.getTemplateRaw();
```
En cualquier modo utilizado (Authenticate, Register) se obtiene el resultado de la extracción en un objeto de la clase `WidgetResult`.
Para obtener la plantilla resultante de la extracción, usar la siguiente llamada:
```java
    WidgetResult wResult = data.getParcelableExtra("result");
    byte[] templateRaw = wResult.getTemplateRaw();
```

Cada `WidgetResult` contiene la siguiente información:

- **getTemplateRaw()**: Devuelve la plantilla en bruto que se genera después del proceso de extracción.
- **getImages()**: Si el flag logImages() se activó, devuelve las imágenes que se obtienen durante el proceso de extracción. Las imágenes se devuelven ordenadas por el instante de tiempo en el que se obtubieron.
- **getBestImage()**: Devuelve la mejor imagen extraída del proceso de autenticación. Esta imagen es la imagen con el tamaño original extraída de la cámara. 
- **getBestImageCropped()**: Devuelve una imagen recortada centrada en la cara del usuario. Esta imagen se obtiene a partir de la "bestImage". Ésta es la imagen que se deberá utilizar como imagen característica del usuario que realizó el proceso a modo de ‘avatar’
- **getLivenessDiagnostic()**: Devuelve el diagnóstico final de la ejecución del proceso de liveness.
- **getQRData()**: Devuelve los datos del código QR capturado.
- **getIADBundle()**: Devuelve los datos encriptados del analisis de deteccion de ataques de inyección de video.
- **getException()**: Devuelve la excepción generada desde el widget.

El método `getException()` devuelve un objeto de tipo WidgetException que contiene tanto el mensaje de la excepción `getMessage()` como el tipo de excepción `getExceptionType()`.

Los posibles valores para el tipo de excepción son:

- **WidgetExceptionType.StoppedManually**: Excepción que se produce cuando el usuario para la extracción de forma manual.
- **WidgetExceptionType.Timeout**: Excepción que se produce cuando transcurre un tiempo máximo sin conseguir finalizar la extracción con éxito.
- **WidgetExceptionType.CameraPermissionDenied**: Excepción que se produce cuando el widget no tiene permiso de acceso a la cámara.
- **WidgetExceptionType.SettingsPermissionDenied**: Excepción que se produce cuando el widget no tiene permiso para modificar ajustes de configuración.
- **Otros Valores**: Otras excepciones producidas en el widget.

#### 2.4.1. El interfaz IFPhiWidgetEventListener

Este interfaz permite que el widget se comunique con la aplicación principal en tiempo real y notifique sobre eventos importantes que ocurran durante el transcurso de la ejecución.

Para esto será necesario que la aplicación cree una clase que implemente este interfaz el cual consta de un único método: 
```java
    public void onEvent(long time, @NonNull String type, @NonNull String info)
```
Esta función recibe como parámetros el tiempo en el que se lanzó el evento, codificado como UnixTime en milisegundos, el tipo de evento que se ha producido y la información adicional asociada a dicho evento.

Los eventos recibidos son principalmente de 3 tipos:

- Eventos relacionados con cambios de pantalla o de estados en los que se encuentra el widget.
- Eventos de usuario como pueden ser pulsaciones de botones o movimientos tipo swipe.
- Eventos relacionados con los procesos que se están llevando acabo, como pueden ser errores por ausencia de cara, por movimientos incorrectos, o por no hacer caso a las indicaciones que se reciben, entre otros.

Mediante estos eventos se comunica a la aplicación principal aquellos datos que puedan ser de interés a la hora de analizar el comportamiento de los usuarios cuando usan la tecnología.
Una vez creada la clase que implementa este interfaz, la aplicación llamará al método del objeto de configuración: 
```java
    conf.setIFPhiWidgetEventListener_classname("nombre.clase.interfaz")
```
Pasándole el nombre completo de la clase que implementa dicho interfaz.

### 2.5. Ejemplo recuperación datos del widget

En el siguiente código se muestra al usuario el correcto uso para la recuperación de la información proveniente del widget:
```java
    // Recoge la respuesta del widget
    WidgetResult result = data.getParcelableExtra("result");
```
La clase `WidgetResult` contiene información acerca del resultado de extracción, cualquier excepción que pueda suceder y una lista de imágenes para cada paso.
```java
    // Devuelve un objeto de excepción que contiene el mensaje y su tipo.
    result.getException(); 
    // Devuelve la lista de imágenes
    result.getImages();
    // Devuelve plantilla obtenida en la extracción.
    result.getTemplateRaw();
```
El método `getImages()` devuelve una lista de `FPhiImage` guardadas en la memoria nativa del dispositivo.
Para transformar este tipo de objeto a Bitmap, usar el método estático del widget `FPhiWidgetAndroid.GetBitmap(width, height, config)`

NOTA IMPORTANTE: Para poder devolver las imágenes del usuario, en la configuración del widget se debe establecer la propiedad `logImages` a `true`.
Dada la importante carga de memoria que se produce al procesar las imágenes desde cámara, se requiere activar la propiedad `largeHeap` para las actividades de Android en su `AndroidManifest.xml`:
```xml
    <application android:largeHeap="true">
        ...
    </application>
```
---

## 3. Personalización del Widget

El widget permite la personalización de textos, imágenes, fuentes de letra y colores. La personalización se realiza mediante el archivo .zip suministrado con el widget. Este zip está compuesto de un fichero llamado `widget.xml` que contiene la definición de todas las pantallas del widget, cada una de ellas con una serie de elementos los cuales permiten realizar la personalización. El archivo zip también contiene una carpeta con recursos gráficos y otra carpeta con las traducciones de los textos.

### 3.1. Descripción básica

#### 3.1.1. Personalización de textos

La personalización de textos se realiza editando los textos de los archivos de traducciones existentes en el .zip de recursos.
```
    /strings/strings.es.xml
    /strings/strings.xml
```
#### 3.1.2. Personalización de imágenes

Para personalizar las imágenes que usa el widget se deben añadir las imágenes en el .zip de recursos. En el zip vienen 3 carpetas: 
```
    /resources/163dpi
    /resources/326dpi
    /resources/489dpi
```
Estas carpetas corresponden a las diferentes densidades de pantalla y se pueden crear tantas carpetas de densidad como se desee. En estas carpetas están las versiones de las imágenes para cada una de las resoluciones.

Es necesario añadir las imágenes en todas las carpetas, ya que una vez determinada la resolución óptima para el dispositivo, el widget sólo carga imágenes de la carpeta con la resolución elegida.
Las imágenes son referenciadas desde el archivo `widget.xml`.

#### 3.1.3. Personalización de colores

La personalización de los colores de los botones se realiza desde el archivo `widget.xml`. En él se puede personalizar cualquier color de cualquier elemento gráfico que aparece en el widget. Simplemente basta con modificar el color de la propiedad deseada.

#### 3.1.4. Personalización de tipo de fuente

Los archivos de tipografía deben colocarse en la carpeta `/resources/163dpi` y una vez ahí pueden ser referenciados desde el archivo `widget.xml`. Para cambiar el tipo de letra de un elemento de texto bastaría con modificar la propiedad ‘font’ y poner el nombre del archivo correspondiente.

En el siguiente apartado se ampliará la información acerca del contenido del bundle de recursos y el modo de modificar.

### 3.2. Descripción avanzada

#### 3.2.1. Widget.xml

Este fichero contiene la definición de todas las propiedades que son configurables en los procesos de autenticación. Está dividido por pantallas de navegación y dentro de cada etiqueta de pantalla se encuentran todas las propiedades que pueden modificarse.

#### 3.2.2. Carpeta strings

Esta carpeta contiene un fichero `strings.xml` por cada traducción que se desee soportar. El nombre debe estar formado de la siguiente manera:
```
    strings.(idioma).xml
```
Siendo (idioma) el código del idioma. Por ejemplo, `strings.es.xml` sería la traducción en castellano, `strings.en.xml` la traducción en inglés, `strings.es_ES.xml` el español de España o `strings.es_AR.xml` el español de Argentina.

Se puede forzar el idioma o dejar que el widget lo escoja en función de la configuración del dispositivo. A la hora de decidir cuál es el idioma a aplicar se sigue el siguiente orden:

- Buscar por código de localización (por ejemplo, "es_AR").
- Si no encuentra ninguna que coincida, buscaría uno para el idioma genérico (es decir, en este caso sería "es").
- Si tampoco existiese ningún resultado, entonces usaría el idioma por defecto.
 
A nivel de código es posible seleccionar la localización mediante la propiedad locale. Este parámetro acepta un string con el código de lenguaje que se desea utilizar (por ejemplo, "es" o "es_ES").

#### 3.2.3. Carpeta resources

Contiene las carpetas con todos los recursos necesarios para poder modificarse, divididos en densidades. Es obligatorio generar las imágenes en todas las densidades ya que el widget espera encontrarlas en la carpeta correspondiente a la densidad del dispositivo. También se pueden crear nuevas carpetas con la densidad deseada.

#### 3.2.4. Elemento BACKGROUND

El elemento `background` se compone de 4 segmentos a los que se puede dar color independientemente:

- **top**: define el color de fondo el segmento o panel superior.
- **middle_top**: define el color de fondo del segmento o panel donde está situada la imagen de la cámara.
- **middle_bottom**: define el color de fondo el segmento o panel situado debajo de la imagen de la cámara.
- **bottom**: define el color de fondo el segmento o panel inferior.

También se pueden configurar ciertas propiedades que se usan solo en pantallas específicas. A continuación, las enumeramos haciendo referencia a las pantallas en la que son utilizadas:

- **pagination_separator (RegistrationTips, FaceMovementTips)**: define el color de la separación entre el panel inferior y el panel de debajo de la cámara.
- **mirror_border_color (RegistrationTips, FaceMovementTips)**: define el color del borde del círculo que rodea a la imagen de la cámara o del video de los consejos de registro. A este elemento también se le llama mirror o espejo.
- **mirror_border_width (RegistrationTips, FaceMovementTips)**: define el ancho del borde del círculo que rodea a la imagen de la cámara o del video de los consejos de registro. Si no deseáramos mostrar un borde, tendríamos que asignar un valor de 0.0 a esta propiedad.
- **mirror_mist_color (StartExtractor)**: define el color del círculo central en la pantalla previa a la extracción. Este color deberá tener siempre un valor de transparencia ya que debemos dejar ver la imagen de la cámara para que el usuario pueda colocarse correctamente antes de empezar con la extracción. El formato del color cuando se incluye un valor de transparencia es RGBA (El valor de alpha se indicará con el último byte).
- **mirror_color (Results)**: define el color de fondo del círculo que muestra los resultados del proceso de registro.

#### 3.2.5. Elemento BUTTON

- **background**: define el color de fondo el botón
- **decorator**: define el color de la sombra del botón
- **foreground**: define el color de la fuente del botón en caso de que el contenido sea un texto
- **content_type**: define el tipo de contenido del botón. Existen 2 tipos diferentes:
- **resource_id**: Content debe contener el nombre de un archivo en el bundle de recursos
- **text_id**: Content debe contener el identificador de un literal del fichero de traducciones del bundle de recursos
- **content**: define el contenido del botón. Puede ser tanto una imagen como el identificador de un literal.
- **align**: Define la alienación del contenido del botón, ya sea una imagen o un texto
- **font**: Define el tipo de letra utilizado si el contenido del botón es un texto
- **font_size**: Define el tamaño de la letra si el contenido del botón es un texto

#### 3.2.6. Elemento TEXT

Los elementos `text` se utilizan para definir el aspecto gráfico de los textos de cada una de las pantallas del widget. Estas son las propiedades que se pueden modificar:

- **color**: define el color del texto.
- **font**: define el tipo de fuente utilizado para mostrar el texto.
- **font_size**: define el tamaño de la fuente.

Hay que tener en cuenta que en la pantalla de resultados del registro los dos textos que definen la calidad del registro tienen forzado su color al color de la barra que indica la puntuación.
 
#### 3.2.7. Elemento IMAGE

- **value**: define el nombre del archivo que contiene la imagen a mostrar.

Los elementos `image` solo tienen la propiedad que define el archivo donde se encuentra la imagen físicamente en el bundle de recursos. Las imágenes se obtienen del bundle buscando en la carpeta apropiada de acuerdo con la densidad del dispositivo.

#### 3.2.8. Elemento VIDEO

- **value**: define el nombre del archivo que contiene el video a mostrar.

Los elementos `video` solo tienen la propiedad que define el archivo donde se encuentra el video físicamente en el bundle de recursos.
 
---

## 4. Integración en aplicaciones Android

### 4.1. Requisitos mínimos

Para la correcta integración del widget de reconocimiento facial en una aplicación Android, es necesario disponer de la siguiente versión del sistema operativo Android:

- API level 15 (Android 4.0.3)
- RAM: 2 GB

Si se usa la caracteristica de Detección de Ataques de Inyección (IAD) entonces:
- API level 24 (Android 7.0)
- RAM: 3 GB

En cuanto a la arquitectura del dispositivo móvil:

- armeabi-v7, x86, arm64 y x64

### 4.2. Contenido suministrado

Los elementos que se proporcionan con la SDK para la integración del widget se componen de:

- Android Studio: Las librerías de archivos de Android (Android Archive Library) llamadas `fphi-core-widget-android.aar` y `fphi-selphi-widget-android.aar`
 
Adicionalmente, se entrega un archivo zip que contiene la configuración gráfica y de localización del widget, mediante el cual se puede personalizar la apariencia física del widget para una mejor integración con la aplicación final que lo va a contener.
Además, junto con la SDK se proporciona un ejemplo de programación para Android Studio que ayuda al integrador a consumir el widget en una aplicación Android.

### 4.3. Configuración del widget Android

Resumen de los métodos para configurar el widget:
```java
    //Crear el objeto de configuración con todos los valores anteriores.
    WidgetConfiguration conf = new WidgetConfiguration();

    //Establecer la ruta del archivo de recursos gráficos y de localización
    conf.setResourcesPath(path);

    //Establecer el modo de liveness de extracción (LIVENESS_NONE, LIVENESS_PASSIVE)
    conf.setLivenessMode(mode);

    //Establecer si se quiere o no que el widget obligue a la lectura de un QR antes del proceso de autenticación
    conf.setQRFlag(QRflag);
        
    //Establecer la resolución de la cámara 
    conf.setCameraPreviewSize(cameraPreviewSize);
```
El widget Android proporcionado por FacePhi es el responsable de realizar la extracción de las características faciales del usuario, y de esta forma generar una plantilla facial (template) representativa del mismo. Esta plantilla facial debe ser enviada a un servidor web para realizar el registro de los usuarios mediante el rostro, la autenticación y la identificación de usuarios. 

Por tanto, la aplicación Android que integra el widget debe consultar un servicio web que estará publicado en un servidor accesible mediante Internet.
En el lado del servidor, la aplicación web utiliza las librerías de reconocimiento facial de FacePhi para realizar los procesos que impliquen el registro y mejora de usuarios y la comparación de plantillas faciales.
