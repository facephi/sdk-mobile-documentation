# Recursos de Selphi

## 0. Requisitos de Selphi

**Selphi legacy widget** es un producto de Facephi que va integrado en el componente de Selphi.

Para su correcto funcionamiento hace uso de un fichero zip de recursos que se va actualizando por versión.

---

## 1. Zip resource

El fichero de recursos se puede obtener de los siguientes enlaces:

| **Versión de Selphi** | **Enlace**                                                                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.12.6                | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphi-resources/5.12.6/fphi-selphi-widget-resources-selphi-live-5.12.6.zip" rel="nofollow"> Recursos v.5.12.6</a>  |
| 5.13.1                | <a href="hhttps://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphi-resources/5.13.1/fphi-selphi-widget-resources-selphi-live-5.13.1.zip" rel="nofollow"> Recursos v.5.13.1</a> |
| 5.13.3                | <a href="hhttps://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphi-resources/5.13.3/fphi-selphi-widget-resources-selphi-live-5.13.3.zip" rel="nofollow"> Recursos v.5.13.3</a> |
| 5.13.4                | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphi-resources/5.13.4/fphi-selphi-widget-resources-selphi-live-5.13.4.zip" rel="nofollow"> Resources v.5.13.4</a> |
| 5.14.1                | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphi-resources/5.14.1/fphi-selphi-widget-resources-selphi-live-5.14.1.zip" rel="nofollow"> Resources v.5.14.1</a> |
| 5.14.2                | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphi-resources/5.14.2/fphi-selphi-widget-resources-selphi-live-5.14.2.zip" rel="nofollow"> Resources v.5.14.2</a> |
| 5.15.0                | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphi-resources/5.15.0/fphi-selphi-widget-resources-selphi-live-5.15.0.zip" rel="nofollow"> Resources v.5.15.0</a> |
| 5.16.1                | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphi-resources/5.16.1/fphi-selphi-widget-resources-selphi-live-5.16.1.zip" rel="nofollow"> Resources v.5.16.1</a> |
| 5.16.2                | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphi-resources/5.16.2/fphi-selphi-widget-resources-selphi-live-5.16.2.zip" rel="nofollow"> Resources v.5.16.2</a> |
| 5.17.1                | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphi-resources/5.17.1/fphi-selphi-widget-resources-selphi-live-5.17.1.zip" rel="nofollow"> Resources v.5.17.1</a> |
| 5.17.2                | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphi-resources/5.17.2/fphi-selphi-widget-resources-selphi-live-5.17.2.zip" rel="nofollow"> Resources v.5.17.2</a> |
| 5.17.3                | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphi-resources/5.17.3/fphi-selphi-widget-resources-selphi-live-5.17.3.zip" rel="nofollow"> Resources v.5.17.3</a> |
| 5.17.5                | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphi-resources/5.17.5/fphi-selphi-widget-resources-selphi-live-5.17.5.zip" rel="nofollow"> Resources v.5.17.5</a> |
| 5.18.2                | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphi-resources/5.18.2/fphi-selphi-widget-resources-selphi-live-5.18.2.zip" rel="nofollow"> Resources v.5.18.2</a> |


---

## 2. Integración del fichero zip

Este fichero se debe incluir en todas las aplicaciones que utilicen Selphi.

### 2.1. Aplicaciones Android

El zip de recursos debe guardarse en la carpeta _assets_ de la aplicación.

---

## 3. Personalización del zip

Este componente permite la personalización de textos, imágenes, fuentes de letra y colores. La personalización se realiza mediante el archivo .zip suministrado internamente. Este zip está compuesto de un fichero llamado widget.xml que contiene la definición de todas las pantallas del widget, cada una de ellas con una serie de elementos los cuales permiten realizar la personalización. El archivo zip también contiene una carpeta con recursos gráficos y otra carpeta con las traducciones de los textos.

### 3.1. Descripción básica

#### 3.1.1. Personalización de textos

La personalización de textos se realiza editando los textos de los archivos de traducciones existentes en el .zip de recursos.

    /strings/strings.es.xml

    /strings/strings.xml

#### 3.1.2. Personalización de imágenes

Para personalizar las imágenes que usa el widget se deben añadir las imágenes en el .zip de recursos. En el zip vienen 3 carpetas:

    /resources/163dpi
    /resources/326dpi
    /resources/489dpi

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

Este fichero contiene la definición de todas las propiedades que son configurables en los procesos de autenticación y registro. Está dividido por pantallas de navegación y dentro de cada etiqueta de pantalla se encuentran todas las propiedades que pueden modificarse.

#### 3.2.2. Carpeta strings

Esta carpeta contiene un fichero `strings.xml` por cada traducción que se desee soportar. El nombre debe estar formado de la siguiente manera:

    strings.(idioma).xml

Siendo (idioma) el código del idioma. Por ejemplo, `strings.es.xml` sería la traducción en castellano, `strings.en.xml` la traducción en inglés, `strings.es_ES.xml` el español de España o `strings.es_AR.xml` el español de Argentina.

Se puede forzar el idioma o dejar que el widget lo escoja en función de la configuración del dispositivo. A la hora de decidir cuál es el idioma a aplicar se sigue el siguiente orden:

Buscar por código de localización (por ejemplo, “es_AR”).

Si no encuentra ninguna que coincida, buscaría uno para el idioma genérico (es decir, en este caso sería “es”).

Si tampoco existiese ningún resultado, entonces usaría el idioma por defecto.

A nivel de código es posible seleccionar la localización mediante la propiedad locale. Este parámetro acepta un string con el código de lenguaje que se desea utilizar (por ejemplo, “es” o “es_ES”).

#### 3.2.3. Carpeta resources

Contiene las carpetas con todos los recursos necesarios para poder modificarse, divididos en densidades. Es obligatorio generar las imágenes en todas las densidades ya que el widget espera encontrarlas en la carpeta correspondiente a la densidad del dispositivo. También se pueden crear nuevas carpetas con la densidad deseada.

#### 3.2.4. Elemento BACKGROUND

El elemento `background` se compone de 4 segmentos a los que se puede dar color independientemente:

**top**: define el color de fondo el segmento o panel superior.

**middle_top**: define el color de fondo del segmento o panel donde está situada la imagen de la cámara.

**middle_bottom**: define el color de fondo el segmento o panel situado debajo de la imagen de la cámara.

**bottom**: define el color de fondo el segmento o panel inferior.

También se pueden configurar ciertas propiedades que se usan solo en pantallas específicas. A continuación, las enumeramos haciendo referencia a las pantallas en la que son utilizadas:

**pagination_separator (RegistrationTips, FaceMovementTips)**: define el color de la separación entre el panel inferior y el panel de debajo de la cámara.

**mirror_border_color (RegistrationTips, FaceMovementTips)**: define el color del borde del círculo que rodea a la imagen de la cámara o del video de los consejos de registro. A este elemento también se le llama mirror o espejo.

**mirror_border_width (RegistrationTips, FaceMovementTips)**: define el ancho del borde del círculo que rodea a la imagen de la cámara o del video de los consejos de registro. Si no deseáramos mostrar un borde, tendríamos que asignar un valor de 0.0 a esta propiedad.

**mirror_mist_color (StartExtractor)**: define el color del círculo central en la pantalla previa a la extracción. Este color deberá tener siempre un valor de transparencia ya que debemos dejar ver la imagen de la cámara para que el usuario pueda colocarse correctamente antes de empezar con la extracción. El formato del color cuando se incluye un valor de transparencia es RGBA (El valor de alpha se indicará con el último byte).

mirror_color (Results): define el color de fondo del círculo que muestra los resultados del proceso de registro.

#### 3.2.5. Elemento BUTTON

**background**: define el color de fondo el botón

**decorator**: define el color de la sombra del botón

**foreground**: define el color de la fuente del botón en caso de que el contenido sea un texto

**content_type**: define el tipo de contenido del botón. Existen 2 tipos diferentes:

**resource_id**: Content debe contener el nombre de un archivo en el bundle de recursos

**text_id**: Content debe contener el identificador de un literal del fichero de traducciones del bundle de recursos

**content**: define el contenido del botón. Puede ser tanto una imagen como el identificador de un literal.

**align**: Define la alienación del contenido del botón, ya sea una imagen o un texto

**font**: Define el tipo de letra utilizado si el contenido del botón es un texto

**font_size**: Define el tamaño de la letra si el contenido del botón es un texto

#### 3.2.6. Elemento TEXT

Los elementos `text` se utilizan para definir el aspecto gráfico de los textos de cada una de las pantallas del widget. Estas son las propiedades que se pueden modificar:

**color**: define el color del texto.

**font**: define el tipo de fuente utilizado para mostrar el texto.

**font_size**:. define el tamaño de la fuente.

Hay que tener en cuenta que en la pantalla de resultados del registro los dos textos que definen la calidad del registro tienen forzado su color al color de la barra que indica la puntuación.

#### 3.2.7. Elemento IMAGE

value: define el nombre del archivo que contiene la imagen a mostrar.

Los elementos `image` solo tienen la propiedad que define el archivo donde se encuentra la imagen físicamente en el bundle de recursos. Las imágenes se obtienen del bundle buscando en la carpeta apropiada de acuerdo con la densidad del dispositivo.

#### 3.2.8. Elemento VIDEO

value: define el nombre del archivo que contiene el video a mostrar.

Los elementos `video` solo tienen la propiedad que define el archivo donde se encuentra el video físicamente en el bundle de recursos.
