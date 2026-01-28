## 1. ¿Qué es el widget?

**FacePhi Selphi iOS Widget** es una utilidad diseñada mediante Objective C con la que poder realizar las funciones de reconocimiento facial que ofrece la tecnología de FacePhi. Se trata de una herramienta diseñada para facilitar a los desarrolladores la integración de esta tecnología en las aplicaciones de reconocimiento facial.

Las utilidades disponibles en este widget son:

- Gestión interna de cámaras y resoluciones
- Asistente en los procesos de autenticación
- Extracción de patrones faciales de forma transparente para el integrador

### 1.1. Requerimientos mínimos

- iOS Deployment target: 13

***

## 2. ¿Cómo se integra el widget?

### 2.1. Librerías requeridas y configuración

Para añadir las librerías necesarias, desde la pestaña “Build Phases”, añadir las siguientes librerías en el apartado “Embedded binaries”:

- Librería del extractor: `FPBExtractoriOS.framework`
- Librería del widget selphi: `FPhiWidgetSelphi.framework`
- Librería del widget core: `FPhiWidgetCore.framework`
- Libreria ZipZap: `ZipZap.xcframework`
- Librería nativa: `libc++.tbd`

En el apartado “Copy bundle resources” hay que añadir los recursos del widget que se encuentran en el archivo `fphi-widget-resources-SelphiLive-1.2.zip`.
 
Desde la versión de iOS 10.0, si la aplicación hace uso de la cámara, es necesario añadir la descripción del motivo para el que se accede a ella. Para esto hay que modificar el archivo info.plist de la aplicación añadiendo la descripción a la clave NSCameraUsageDescription:

    <key>NSCameraUsageDescription</key>
    <string>Description</string>

### 2.2. Integración del widget

Para integrar el widget desde un controlador, una vez están enlazadas las librerías necesarias, hay que realizar las siguientes acciones:

- Importar el fichero de cabeceras: `#import "FPhiWidgetSelphi/FPhiWidgetSelphi.h"`
- Declarar una variable para el widget, de tipo “FPhiWidget”: `@property FPhiWidget *widget;`

**Instanciar el widget:**

    // Reserva de memoria para la clase y llama al método init. (Constructor)
    NSError *error = nil;
    NSBundle *bundle = [NSBundle bundleForClass:[AddUserViewController class]];
    _widget = [[SelphiWidget alloc] initWithFrontCameraIfAvailable:true resources:[bundle pathForResource:@"fphi-widget-resources-SelphiLive-1.2" ofType:@"zip"] delegate:self error:&error];
    
    // Evaluar problemas con permisos de la cámara y otras situaciones 
    if (error != nil) {
        switch (error.code) {
            case FWEUnknown:
                NSLog(@"Widget - construction error. Unknown error");
                break;
                   
            case FWECameraPermission:
                NSLog(@"Widget - construction error. Camera permission denied");
                break;
        }
        return;
    }

    // Inicialización de la cámara y comienzo del ciclo de extracción.
    [_widget StartExtraction];

    // Carga de la vista del Widget y oculta la vista actual.
    [self presentViewController:_widget animated:true completion:nil];

Durante la llamada al constructor se especifica en su primer parámetro la cámara a utilizar, siendo “true” el valor para usar la cámara delantera y “false” para la cámara trasera. El segundo parámetro contiene la clase que implementa los eventos del protocolo de la clase. El tercer parámetro “error” se utiliza para consultar posibles problemas en la creación del widget, como, por ejemplo, no disponer de los permisos de cámara requeridos. 

***

## 3. Configurar el widget

Puedes usar las siguientes propiedades para configurar el widget:

### 3.1. ResourcesPath

Establece la ruta del archivo de recursos que utilizará el widget para su configuración gráfica.

### 3.2. Propiedades

Dispone de las siguientes propiedades para configurar el widget:

#### 3.2.1. livenessMode

Establece el modo liveness del widget.
Los valores permitidos son:

- **LMLivenessNone**: Indica que no debe activarse el modo detección de foto en los procesos de autenticación.
- **LMLivenessMove**: Indica que debe activarse el modo de deteccion de movimiento activo.
- **LMLivenessPassive**: Indica que la prueba de vida se realizará en el servidor, enviando la “BestImage” o el correspondiente “tokenTemplateRaw”

#### 3.2.2. stabilizationMode

Establece un modo de estabilización previo a cualquier proceso del widget. Con este modo se obliga al widget a no empezar ningún proceso si el usuario no se encuentra con la cabeza mirando al frente y sin moverla.

#### 3.2.3. qrMode

Indica si se quiere o no activar la lectura de QR previo al proceso de autenticación.

#### 3.2.4. userTags

Establece 4 bytes con datos que pueden ser configurados por la aplicación principal y que serán incorporados a las plantillas generadas por el extractor.

#### 3.2.5. locale

Fuerza al widget a utilizar la configuración de idioma indicado por el parámetro locale.
Este parámetro acepta tanto un código de idioma (p. ej. ‘en’) como un código de identificación regional (p. ej. ‘en_US’). Si el archivo de recursos del widget no tuviera una localización para el ‘locale’ seleccionado su configuración pasaría a utilizar el idioma por defecto.

#### 3.2.6. logImages

Activa o no el retorno de la lista de imágenes que se han capturado durante la ejecución de proceso de extracción. Si el parámetro de entrada se encuentra a “true”, se devolverá la lista de imágenes procesadas. En caso contrario, devolverá una lista vacía.

#### 3.2.7. tutorialFlag

Establece la opción de mostrar un tutorial del proceso que se va a realizar a continuación. Una vez concluya el tutorial, el widget continuará con el proceso configurado.

#### 3.2.8. debugMode

Establece el modo de depuración del widget.

#### 3.2.9. videoFilename

Establece la ruta absoluta del nombre del archivo en el que se grabará un video del proceso de autenticación. La aplicación es la responsable de solicitar los permisos necesarios al teléfono en caso de que esa ruta requiera de permisos adicionales. El widget, por defecto, no realizará ningún proceso de grabación a menos que se especifique una ruta de archivo mediante esta propiedad.

#### 3.2.10. showAfterCapture

Activa una preview de la selfie obtenida para que el usuario pueda aceptar la captura o repetirla.

#### 3.2.11 extractionDuration

Configura la cantidad de tiempo que el widget permanecerá extrayendo las caracteristicas faciales del usuario.

Los valores posibles son:
- **FPhiWidgetExtractionDurationShort**: Duración de la extracción de 1 segundo. (Por defecto)
- **FPhiWidgetExtractionDurationMedium**: Duración de la extracción de 2 segundos.
- **FPhiWidgetExtractionDurationLong**: Duración de la extracción de 3 segundos.

#### 3.2.11 preferredOrientation

Configura las orientaciones que el widget permitirá en la ejecución.

Los posibles valores son:
- **FPhiWidgetOrientationFullSensor**: Todas las orientaciones son permitidas.
- **FPhiWidgetOrientationFullSensorNoReverse**: Todas las orientaciones excepto portrait invertido son permitidas.
- **FPhiWidgetOrientationPortrait**: Portrait permitida. (Por defecto)
- **FPhiWidgetOrientationLandscapeLeft**: Landscape izquierda permitida.
- **FPhiWidgetOrientationLandscapeRight**: Landscape derecha permitida.
- **FPhiWidgetOrientationPortraitReverse**: Portrait invertido permitida.
- **FPhiWidgetOrientationPortraitSensor**: Portrait y portrait invertido permitidas.
- **FPhiWidgetOrientationLandscapeSensor**: Landscape izquierda y derecha permitidas.
- **FPhiWidgetOrientationLocked**: Todas las orientaciones permitidas pero el widget no cambiará de orientación dinámicamente.

### 3.3. Métodos

El widget dispone de los siguientes métodos:

#### 3.3.0. setLicense

Establece el contenido de licencia que deberá utilizarse para acceder a algunas caracteristicas del widget.

#### 3.3.1. generateTemplateRawFromUIImage:(UIImage \*)img

Genera un templateRaw a partir de una imagen nativa de iOS. Esta llamada es estática por lo que no requiere del lanzamiento del widget para realizar esta operación.

#### 3.3.2. generateTemplateRawFromNSData:(NSData \*)img

Genera un templateRaw a partir de un NSData. Este NSData debe contener la representación de la imagen en formato jpg o png. Esta llamada es estática por lo que no requiere del lanzamiento del widget para realizar esta operación.

#### 3.3.3 widgetVersion

Devuelve la version actual del widget en formato cadena. Esta llamada es estática por lo que no requiere del lanzamiento del widget para realizar esta operación.

***

## 4. Personalización del Widget

El widget permite la personalización de textos, imágenes, fuentes de letra y colores. La personalización se realiza mediante el archivo .zip suministrado con el widget. Este zip está compuesto de un fichero llamado `widget.xml` que contiene la definición de todas las pantallas del widget, cada una de ellas con una serie de elementos los cuales permiten realizar la personalización. El archivo zip también contiene una carpeta con recursos gráficos y otra carpeta con las traducciones de los textos.

### 4.1. Descripción básica

#### 4.1.1. Personalización de textos

La personalización de textos se realiza editando los textos de los archivos de traducciones existentes en el .zip de recursos.

    /strings/strings.es.xml
    /strings/strings.xml

#### 4.1.2. Personalización de imágenes

Para personalizar las imágenes que usa el widget se deben añadir las imágenes en el .zip de recursos. En el zip vienen 3 carpetas: 

    /resources/163dpi
    /resources/326dpi
    /resources/489dpi

Estas carpetas corresponden a las diferentes densidades de pantalla y se pueden crear tantas carpetas de densidad como se desee. En estas carpetas están las versiones de las imágenes para cada una de las resoluciones.

Es necesario añadir las imágenes en todas las carpetas, ya que una vez determinada la resolución óptima para el dispositivo, el widget sólo carga imágenes de la carpeta con la resolución elegida. Las imágenes son referenciadas desde el archivo `widget.xml`.

#### 4.1.3. Personalización de colores

La personalización de los colores de los botones se realiza desde el archivo `widget.xml`. En él se puede personalizar cualquier color de cualquier elemento gráfico que aparece en el widget. Simplemente basta con modificar el color de la propiedad deseada.

#### 4.1.4. Personalización de tipo de fuente de letra

Los archivos de tipografía deben colocarse en la carpeta `/resources/163dpi` y una vez ahí pueden ser referenciados desde el archivo `widget.xml`.
Para cambiar el tipo de letra de un elemento de texto bastaría con modificar la propiedad ‘font’ y poner el nombre del archivo correspondiente.
En el siguiente apartado se ampliará la información acerca del contenido del bundle de recursos y el modo de modificar.

### 4.2. Descripción avanzada

#### 4.2.1. Widget.xml

Este fichero contiene la definición de todas las propiedades que son configurables en los procesos de autenticación. Está dividido por pantallas de navegación y dentro de cada etiqueta de pantalla se encuentran todas las propiedades que pueden modificarse.

#### 4.2.2. Carpeta strings

Esta carpeta contiene un fichero `strings.xml` por cada traducción que se desee soportar. El nombre debe estar formado de la siguiente manera:

    strings.(idioma).xml

Siendo (idioma) el código del idioma. Por ejemplo, `strings.es.xml` sería la traducción en castellano, `strings.en.xml` la traducción en inglés, `strings.es_ES.xml` el español de España o `strings.es_AR.xml` el español de Argentina.

Se puede forzar el idioma o dejar que el widget lo escoja en función de la configuración del dispositivo. A la hora de decidir cuál es el idioma a aplicar se sigue el siguiente orden:

- Buscar por código de localización (por ejemplo, “es_AR”).
- Si no encuentra ninguna que coincida, buscaría uno para el idioma genérico (es decir, en este caso sería “es”).
- Si tampoco existiese ningún resultado, entonces usaría el idioma por defecto.
 
A nivel de código es posible seleccionar la localización mediante la propiedad locale. Este parámetro acepta un string con el código de lenguaje que se desea utilizar (por ejemplo, “es” o “es_ES”).

#### 4.2.3. Carpeta resources

Contiene las carpetas con todos los recursos necesarios para poder modificarse, divididos en densidades. Es obligatorio generar las imágenes en todas las densidades ya que el widget espera encontrarlas en la carpeta correspondiente a la densidad del dispositivo. También se pueden crear nuevas carpetas con la densidad deseada.

#### 4.2.4. Elemento BACKGROUND

El elemento background se compone de 4 segmentos a los que se puede dar color independientemente:

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

#### 4.2.5. Elemento BUTTON

- **background**: define el color de fondo el botón.
- **decorator**: define el color de la sombra del botón.
- **foreground**: define el color de la fuente del botón en caso de que el contenido sea un texto.
- **content_type**: define el tipo de contenido del botón. Existen 2 tipos diferentes:
    + resource_id: Content debe contener el nombre de un archivo en el bundle de recursos.
    + text_id: Content debe contener el identificador de un literal del fichero de traducciones del bundle de recursos.
- **content**: define el contenido del botón. Puede ser tanto una imagen como el identificador de un literal.
- **align**: Define la alineación del contenido del botón, ya sea una imagen o un texto.
- **font**: Define el tipo de letra utilizado si el contenido del botón es un texto.
- **font_size**: Define el tamaño de la letra si el contenido del botón es un texto.

#### 4.2.6. Elemento TEXT

Los elementos text se utilizan para definir el aspecto gráfico de los textos de cada una de las pantallas del widget. Estas son las propiedades que se pueden modificar:

- **color**: define el color del texto.
- **font**: define el tipo de fuente utilizado para mostrar el texto.
- **font_size**: define el tamaño de la fuente.

Hay que tener en cuenta que en la pantalla de resultados del registro los dos textos que definen la calidad del registro tienen forzado su color al color de la barra que indica la puntuación.

#### 4.2.7. Elemento IMAGE

- **value**: define el nombre del archivo que contiene la imagen a mostrar.

Los elementos image solo tienen la propiedad que define el archivo donde se encuentra la imagen físicamente en el bundle de recursos. Las imágenes se obtienen del bundle buscando en la carpeta apropiada de acuerdo con la densidad del dispositivo.

#### 4.2.8. Elemento VIDEO

- **value**: define el nombre del archivo que contiene el video a mostrar.

Los elementos video solo tienen la propiedad que define el archivo donde se encuentra el video físicamente en el bundle de recursos.

***

## 5. Mensajes del widget

La comunicación desde el widget hacia la aplicación una vez ha terminado la extracción de características faciales se realiza mediante eventos. Para indicar qué clase implementará estos eventos (implementación del protocolo), debe indicarlo en el segundo parámetro del método “init” (en este ejemplo, “self”):

    _widget = [[SelphiWidget alloc] initWithFrontCameraIfAvailable:true resources:[bundle pathForResource:@"fphi-widget-resources-SelphiLive-1.2" ofType:@"zip"] delegate:self error:&error];

En este caso, al indicar “self” se indica que se implementará en la propia clase que realiza la llamada.

### 5.1. Eventos del protocolo

El widget iOS proporcionado por FacePhi es el responsable de realizar la extracción de las características faciales del usuario, y de esta forma generar una plantilla facial (Raw) representativa del mismo.

#### 5.1.1. Evento ExtractionFinished

Se ejecuta al finalizar un proceso completo de extracción.

    (void) ExtractionFinished {

        // Elementos disponibles de la extracción
        FPhiWidgetExtractionData *results = _widget.results;
        FPBExtractionResult *result = results.result;

        // Plantilla obtenida de la extracción
        NSData *templateRaw = [result getTemplateRaw];

        // Mejor Imagen del proceso
        UIImage *bestImage = results.bestImage.image;

        // Mejor Imagen del proceso recortada al tamaño de la cara
        UIImage *bestImageCropped = results.bestImageCropped.image;
    }

El objeto `results` contiene los siguientes campos:

- **templateRaw**: Devuelve la plantilla en bruto que se genera después del proceso de extracción.
- **images**: Si el flag `logImages` se activó, devuelve las imágenes que se obtienen durante el proceso de extracción. Las imágenes se devuelven ordenadas por el instante de tiempo en el que se obtubieron.
- **bestImage**: Devuelve la mejor imagen extraída del proceso de autenticación. Esta imagen es la imagen con el tamaño original extraída de la cámara. 
- **bestImageCropped**: Devuelve una imagen recortada centrada en la cara del usuario. Esta imagen se obtiene a partir de la “bestImage”. Ésta es la imagen que se deberá utilizar como imagen característica del usuario que realizó el proceso a modo de ‘avatar’
- **livenessDiagnostic**: Devuelve el diagnóstico final de la ejecución del proceso de liveness.
- **qrData**: Devuelve los datos del código QR capturado.
- **iadBundle**: Devuelve los datos encriptados del analisis de deteccion de ataques de inyección de video.

#### 5.1.2. Evento ExtractionFailed

Se ejecuta si ha existido algún problema en el proceso de extracción.
  
    (void) ExtractionFailed:(NSError *)error { 
    }

#### 5.1.3. Evento ExtractionCancelled

Se ejecuta si el usuario pulsa sobre la opción de cancelar.
  
    (void)ExtractionCancelled {
    }

#### 5.1.4. Evento ExtractionTimeout

Se ejecuta si el widget supera el tiempo máximo permitido sin detectar caras.
  
    (void)ExtractionTimeout {
    }

#### 5.1.5. Evento onEvent

Se ejecuta cada vez que el widget tiene que comunicar eventos importantes que ocurren durante el transcurso de la ejecución.    
Esta función recibe como parámetros el tiempo en el que se lanzó el evento, codificado como un `NSDate`, el tipo de evento que se ha producido y la información adicional asociada a dicho evento. Los eventos recibidos son principalmente de 3 tipos:

- Eventos relacionados con cambios de pantalla o de estados en los que se encuentra el widget.
- Eventos de usuario como pueden ser pulsaciones de botones o movimientos tipo swipe.
- Eventos relacionados con los procesos que se están llevando acabo, como pueden ser errores por ausencia de cara, por movimientos incorrectos, o no hacer caso a las indicaciones que se reciben, entre otros.

Mediante estos eventos se comunica a la aplicación principal aquellos datos que puedan ser de interés a la hora de analizar el comportamiento de los usuarios cuando usan la tecnología.

    (void)onEvent:(NSDate *)time type:(NSString *)type info:(NSString *)info {
    }
