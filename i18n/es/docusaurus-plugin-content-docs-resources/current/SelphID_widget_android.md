## 1. ¿Qué es el widget?

FacePhi SelphID Android Widget es una utilidad con la que se podrán realizar las funciones de captura de documentos que ofrece la tecnología de FacePhi. Las funciones que facilita este widget son:

- Gestión interna de cámaras y resoluciones.
- Asistente en los procesos de captura de la parte frontal y trasera del documento.
- Extracción de la información contenida en el documento.
- Obtención de las imágenes de la parte frontal, trasera y otros datos relevantes.

***

## 2. ¿ Cómo se integra el widget?

### 2.1. Librerías Requeridas

FacePhi distribuye las librerías necesarias para integrar el widget en un proyecto de Android. Se distribuyen tanto librerías .aar, como recursos y licencias para el componente, las cuales se encuentran en el directorio lib.

Librerías:

- `fphi-selphid-core-android-X.X.X.aar`
- `fphi-selphid-drawer-android-X.X.X.aar`
- `fphi-selphid-extractor-X.X.X.aar`
- `fphi-selphid-license_manager-X.X.X.aar`

Recursos:

- `fphi-selphid-widget-resources-selphid-X.X.zip`
- `license.lic`

### 2.2. Instalación del plugin SelphID Android

La instalación del plugin se realizará una vez se completen las siguientes acciones en su IDE Android Studio

#### 2.2.1. Integración de las librerías

Las librerías de archivos de Android (Android Archive Library) llamadas `fphi-selphid-core-android-X.X.X.aar`, `fphi-selphid-drawer-android-X.X.X.aar` y `fphi-selphid-extractor-X.X.X.aar` deben añadirse como dependencias a su proyecto.

Adicionalmente, se entrega un archivo zip que contiene la configuración gráfica y de localización del widget, mediante el cual se puede personalizar la apariencia física del widget para una mejor integración con la aplicación final que lo va a contener y que debe integrarse en la carpeta assets de su proyecto Android. Este archivo zip debe mantenerse comprimido en dicha carpeta.

Además, junto con la SDK se proporciona un ejemplo de programación para Android Studio que ayuda al integrador a consumir el widget en una aplicación Android.

***

## 3. Configurar el widget

El widget de SelphID Android contiene una serie de atributos que le permiten configurar el comportamiento del mismo. A continuación, se muestran cada una de las propiedades configurables en la clase `WidgetSelphIDConfiguration`

#### 3.1. Propiedad DocumentType

Los valores permitidos son los siguientes:

- **WidgetSelphIDDocumentType.DTIDCard**: El widget queda configurado para realizar la captura de documentos de identidad.
- **WidgetSelphIDDocumentType.DTPassport**: El widget queda configurado para realizar la captura de pasaportes.
- **WidgetSelphIDDocumentType.DTVisa**: El widget queda configurado para realizar la captura de visados.
- **WidgetSelphIDDocumentType.DTDriversLicense**: El widget queda configurado para realizar la captura de licencias de conducción.
- **WidgetSelphIDDocumentType.DTForeignCard**: El widget queda configurado para realizar la captura de documentos extranjeros.
- **WidgetSelphIDDocumentType.DTCreditCard**: El widget queda configurado para realizar la captura de tarjetas de crédito.
- **WidgetSelphIDDocumentType.DTCustom**: El widget queda configurado para realizar la captura de otro tipo de documentos que no corresponden a ninguna de las categorias anteriores.

#### 3.2. Propiedad DocumentSide

Los valores permitidos son los siguientes:

- **WidgetSelphIDDocumentSide.DSFront**: El widget queda configurado para realizar la captura de la parte frontal del documento.
- **WidgetSelphIDDocumentSide.DSBack**: El widget queda configurado para realizar la captura de la parte trasera del documento.

#### 3.3. Propiedad ScanMode

Indica el modo de escaneo OCR de los documentos. Dependiendo de la elección, se escanearán y buscarán varios tipos de documentos o uno en concreto. Este modo puede ser de tres tipos:

- **WidgetSelphIDScanMode.SMGeneric**: El modo genérico que permite escanear cualquier tipo de documento independiente del país o el tipo de documento. El resultado de este modo no es tan preciso como los siguientes pero permite escanear varios documentos estándar.
- **WidgetSelphIDScanMode.SMSearch**: El modo de búsqueda permitirá utilizar una whitelist y blacklist, y buscará en los documentos que cumplan dichas condiciones. Estas condiciones se indican en la variable "specificData". De este modo se permite realizar la búsqueda acotando el número de plantillas, y haciendo que la búsqueda sea mucho más afinada que en el caso genérico.
- **WidgetSelphIDScanMode.SMSpecific**: Búsqueda de un documento específico. Estas condiciones se indican en la propiedad "specificData" que se muestra en lo sucesivo.

#### 3.4. Propiedad SpecificData (string)

Esta propiedad permite definir qué documentos se escanearán durante el proceso, en caso de declarar el modo de escaneo (scanMode) a SMSearch o SMSpecific.

Un ejemplo de configuración que permita escanear todos los documentos de nacionalidad española sería el siguiente:

	// Search mode definition
	conf.setScanMode(WidgetSelphIdScanMode.SMSearch);
	conf.setSpecificData(“ES|<ALL>”); // Código ISO de España (ES)

#### 3.5. Propiedad WizardMode

Indica si el widget queda configurado para realizar la captura de ambas partes (frontal y trasera) del documento una a continuación de la otra. En este modo el widget solo se lanzaría una vez y al terminar de capturar el front, continuaría seguidamente con el back.

#### 3.6. Propiedad ShowAfterCapture

Indica si mostrar o no una pantalla con la imagen capturada del documento después del proceso de análisis. En esta pantalla se le da al usuario la posibilidad de repetir el proceso de captura si la imagen que se obtuvo del documento no fuera correcta.

#### 3.7. Propiedad PreviousCaptureData

Cuando la captura del documento se realiza en 2 llamadas, esta propiedad permite pasar un diccionario con la información de la captura previa. De esta manera el widget puede combinar los resultados de ambas lecturas de una manera inteligente y así devolver la información combinada de ambas capturas. También permite al widget calcular un grado de similitud de los datos de ambas caras.

En el caso que la captura de ambas caras del documento se realice en una única llamada esto no es necesario ya que el widget internamente hace este proceso.

#### 3.8. Propiedad Locale (string)

Es un string que permite cambiar la localización y el idioma del widget. Ejemplos de valores que pueden tener son los siguientes:

- “es” para español.
- “en” para inglés.
- “fr” para francés.

En definitiva, dependerá del nombre que aparezca en el fichero `strings.xml` del lenguaje que se desee seleccionar (`strings-es.xml`, `strings-en.xml`, `strings-fr.xml`).

En el zip de recursos, el cual se encuentra dentro de la carpeta strings, se pueden añadir los ficheros `strings-xx.xml` correspondientes a cada localización que se requiere incorporar en el widget.

#### 3.9. Propiedad Timeout

Es un enumerado que define el timeout de la captura de un lado del documento. Tiene 3 posibles valores:

- WidgetTimeout.Short: 15 segundos.
- WidgetTimeout.Medium: 20 segundos.
- WidgetTimeout.Long: 25 segundos.
- WidgetTimeout.VeryLong: 60 segundos.

#### 3.10.  Propiedad VideoFilename

Establece la ruta absoluta del nombre del archivo en el que se grabará un video del proceso de captura. La aplicación es la responsable de solicitar los permisos necesarios al teléfono en caso de que esa ruta requiera de permisos adicionales. El widget, por defecto, no realizará ningún proceso de grabación a menos que se especifique una ruta de archivo mediante este método.

#### 3.11 Propiedad DocumentModels

Esta propiedad permite, mediante una cadena en formato xml, configurar modelado de los documentos que el widget va a tratar de capturar. La definición de este modelado se encentra, por defecto, en un .xml de modelos que se encuentra en el .zip de recursos. Con esta propiedad se permite a una aplicación actualizar, en caliente, los modelados de los documentos. 

Nota: Esta propiedad no altera el contenido del archivo de recursos.

#### 3.12 Propiedad GenerateRawImages

Esta propiedad configura el widget para devolver la imagen completa de la cámara que se utilizó para capturar el documento. Estas imágenes se devuelven en las propiedades `rawFrontDocument` y `rawBackDocument` del objeto `results` respectivamente.

#### 3.13 Método getWidgetVersion

Este método devuelve la version actual del widget en formato cadena. Esta llamada es estática por lo que no requiere del lanzamiento del widget para realizar esta operación.

***

## 4. Crear el widget

### 4.1. Clase FPhiSelphIDWidget

`FPhiSelphIDWidget` es la clase que se encarga de la comunicación entre la aplicación y el widget. Para poder ejecutar el mismo deberá utilizarse un Intent. En el siguiente ejemplo de código java se muestra la configuración e instancia del widget:

	WidgetSelphIDConfiguration conf = new WidgetSelphIDConfiguration();
	conf.setResourcesPath(RESOURCES_PATH);
	conf.setFullscreen(true);
	conf.setLicense(license);

	conf.setDocumentSide(WidgetSelphIDDocumentSide.DSFront);
	conf.setScanMode(WidgetSelphIDScanMode.SMSearch);
	conf.setSpecificData(country+"|<ALL>");

	conf.setShowAfterCapture(true);
	conf.setWizardMode(true);
	
	if (conf.getWizardMode()) 
		tokenPreviousData = "";
	conf.setTokenPreviousCaptureData(tokenPreviousData);

	Intent intent = new Intent(this, com.facephi.selphid.Widget.class);
	intent.putExtra("configuration", conf);
	this.startActivityForResult(intent, 1);

La propiedad “License” contiene la licencia de las librerías de SelphID. En el ejemplo de programación se muestra una forma de gestionar esta licencia según la plataforma utilizada.

### 4.2. Interfaz IFPhiWidgetSelphIDEventListener

Este interfaz permite que el widget se comunique con la aplicación principal en tiempo real y notifique sobre eventos importantes que ocurran durante el transcurso de los procesos de registro y autenticación.

Para esto será necesario que la aplicación cree una clase que implemente este interfaz el cual consta de un único método: 

	public void onEvent(long time, @NonNull String type, @NonNull String info)

Esta función recibe como parámetros el tiempo en el que se lanzó el evento, codificado como UnixTime en milisegundos, el tipo de evento que se ha producido y la información adicional asociada a dicho evento.

Los eventos recibidos son principalmente de 3 tipos:

- Eventos relacionados con cambios de pantalla o de estados en los que se encuentra el widget
- Eventos de usuario como pueden ser pulsaciones de botones o movimientos tipo swipe.
- Eventos relacionados con los procesos de captura de documentos que se están llevando acabo, como pueden ser errores en la captura de los documentos, entre otros.

Mediante estos eventos se comunica a la aplicación principal aquellos datos que puedan ser de interés a la hora de analizar el comportamiento de los usuarios cuando usan la tecnología.

Una vez creada la clase que implementa este interfaz, la aplicación llamará al método del objeto de configuración: 

	conf.setIFPhiWidgetSelphIDEventListener_classname(“nombre.clase.interfaz”)

Pasándole el nombre de la clase que implementa dicho interfaz.

***

## 5. Recepción del resultado.

Al finalizar la llamada del widget, es posible adquirir toda la información obtenida de la captura del documento (ya sea la parte frontal, trasera o ambas a la vez). Para ello es necesario utilizar la devolución de llamada `onActivityResult()`:

	protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
	
		switch (requestCode) {
			case 1:
				WidgetSelphIDResult result = data.getParcelableExtra("result");
				String text = "";
				if (result != null && result.getException() != null) {
					switch (result.getException().getExceptionType()) {
						case StoppedManually:
							Log.w("<SelphID>", "Widget cancelled");
							break;
						case Timeout:
							Log.w("<SelphID>", "Widget timed out");
							break;
					}
				}

				Bitmap front = result.getDocumentFrontImage();
				Bitmap back = result.getDocumentBackImage();
				Bitmap face = result.getFaceImage();

				// Obtenemos los tokens
				String tknOCR = result.getTokenOCR();
				String tknFD = result.getTokenFrontDocument();
				String tknBD = result.getTokenBackDocument();
				String tknFI = result.getTokenFaceImage();

				// Nos guardamos los resultados de la ejecución previa
				if (conf.getWizardMode()) {
					tokenPreviousData = "";
				} else {
					tokenPreviousData = result.getTokenOCR();
				}

				if (result.ocrResults == null) return;

				if (result.ocrResults.size() > 0) {
					text += "OCR Results --------------"; text += "\n";
					for (String key: result.ocrResults.keySet()) {
						text += (key + ": " + result.ocrResults.get(key)); text += "\n";
					}
				}
				break;
		}
	}

Es importante reseñar que la información obtenida en este objeto se devuelve duplicada, mostrándola a su vez en abierto (por ejemplo, `frontDocumentImage` para la imagen de la captura frontal del documento), como tokenizado y encriptado (por ejemplo, `tokenFrontDocumentImage` para la imagen de la captura frontal del documento). 

Dependiendo del tipo de licencia utilizada se podrán obtener un tipo de parámetros o ambos. Es recomendable utilizar la información tokenizada para enviarla de forma segura al servidor donde esté instalada la SDK de SelphID, mientras que los datos en abierto deben utilizarse únicamente en fases de desarrollo y test.

### 5.1. Propiedad results

Contiene todas las imágenes y tokens generados por el widget, enumerados a continuación:

#### 5.1.1. Propiedades frontDocument / tokenFrontDocument

La imagen frontal del documento procesada, limpiada y recortada por los bordes y su token correspondiente.

#### 5.1.2. Propiedades backDocument / tokenBackDocument

La imagen trasera del documento procesada, limpiada y recortada por los bordes y su token asociado.

#### 5.1.3. Propiedades faceImage / tokenFaceImage

La imagen del rostro que se ha encontrado en el documento, en caso de que exista y su token asociado.

#### 5.1.4. Propiedades documentCaptured, countryCaptured y documentTypeCaptured

Estas propiedades indican el modelo de documento, el pais y el tipo de documento, respectivamente, que se ha capturado.

#### 5.1.5. Propiedades matchingSidesScore, matchingFrontScore y matchingBackScore

- La propiedad 'matchingSidesScore' devuelve un cálculo de la similitud de los datos leídos entre el front y el back del documento. El cálculo se realiza comprobando la similitud entre los campos comunes leídos en ambas caras. El resultado del cálculo será un valor entre 0.0 y 1.0 para el caso de que existan campos comunes en el documento. Cuanto mayor es el valor, más similares son los datos comparados.
- La propiedad 'matchingFrontScore' devuelve un cálculo de la similitud de los datos leídos del front del documento. El cálculo se realiza comprobando la similitud entre los campos comunes leídos en el frontal del document. El resultado del cálculo será un valor entre 0.0 y 1.0 para el caso de que existan campos comunes en el frontal. Cuanto mayor es el valor, más similares son los datos comparados.
- La propiedad 'matchingBackScore' devuelve un cálculo de la similitud de los datos leídos del back del documento. El cálculo se realiza comprobando la similitud entre los campos comunes leídos en el dorsal del document. El resultado del cálculo será un valor entre 0.0 y 1.0 para el caso de que existan campos comunes en el dorsal. Cuanto mayor es el valor, más similares son los datos comparados.

Si el cálculo devuelve -1.0 es que el documento no contiene campos comunes o aún no se tiene información de las dos caras.

#### 5.1.6. Propiedad captureProgress

Esta propiedad devuelve el estado en el que se encontraba el proceso de captura cuando el widget terminó. Estos son los posibles valores:

	Front_Detection_None = 0
	Front_Detection_Uncertain = 1
	Front_Detection_Completed = 2
	Front_Document_Analyzed = 3
	Back_Detection_None = 4
	Back_Detection_Uncertain = 5
	Back_Detection_Completed = 6
	Back_Document_Analyzed = 7

- **0**: En la lectura del Front, el widget terminó sin poder haber detectado nada. Generalmente cuando no se pone ningún documento.
- **1**: En la lectura del Front, el widget terminó habiendo detectado parcialmente un documento. En este caso algunos de los elementos esperados se han conseguido detectar, pero no todos los necesarios.
- **2**: En la lectura del Front, el widget terminó habiendo completado la detección de todos los elementos del documento. Si el widget acaba en este estado es porque el análisis de OCR no se ha podido completar con éxito
- **3**: En la lectura del Front, el widget terminó habiendo analizado y extraído todo el OCR del documento. Este es el estado en el que acabaría una lectura correcta del Front de un documento.

Los estados del 4 al 7 son exactamente iguales solo que se refieren al resultado del proceso cuando se analiza el back.

#### 5.1.7. Propiedad timeoutDiagnostic

Esta propiedad devuelve una cadena de texto donde se explica cuál ha sido el motivo de que el widget haya terminado por timeout. Dicha cadena de texto puede ser utilizada en una posterior pantalla de timeout donde la aplicación principal puede dar más información al usuario sobre lo que ocurrió durante la captura del documento. 

### 5.2. Diccionario ocrResults

Este diccionario contiene todos los datos detectados en el documento. Las claves de cada campo están codificadas de tal forma que la propia clave contiene información de donde se ha obtenido el valor. Así, por ejemplo, la clave `Front/MRZ/DocumentNumber` indica el valor del DocumentNumber que se ha leído en el Front del documento y en la región del MRZ. Estas claves dependen del documento capturado y por tanto serán diferentes entre distintos países y modelos de documento. 

El diccionario también contiene claves con nombres más genéricos y que no llevan información relativa a la ubicación. Estas claves contienen el dato más completo de todos los leídos para dicho campo.

Estas claves son los siguientes:

- **FirstName**: El valor asociado a esta clave contiene el nombre del usuario.
- **LastName**: El valor asociado a esta clave contiene los apellidos del usuario.
- **DateOfBirth**: El valor asociado a esta clave contiene la fecha de nacimiento detectada en el documento.
- **Gender**: El valor asociado a esta clave contiene el sexo del usuario detectado en el documento.
- **Nationality**: El valor asociado a esta clave contiene la nacionalidad del usuario detectado en el documento.
- **DocumentNumber**: El valor asociado a esta clave contiene el número de documento.
- **DateOfExpiry**: El valor asociado a esta clave contiene la fecha de expiración del documento.
- **Issuer**: El valor asociado a esta clave contiene el editor del documento.
- **DateofIssue**: El valor asociado a esta clave contiene la fecha de expedición del documento.
- **PlaceOfBirth**: El valor asociado a esta clave contiene el lugar de nacimiento del usuario.
- **Address**: El valor asociado a esta clave contiene la dirección detectada en el documento.

Adicionalmente se añaden claves del propio objeto results para hacer más fácil su búsqueda:

- **DocumentCaptured**: Valor del modelo de documento que se ha capturado según el .xml de modelos. Corresponde a la propiedad documentCaptured.
- **MatchingSidesScore**: Valor que indica la correspondencia entre las caras leidas del documento. Corresponde a la propiedad matchingSidesScore.
