# SelphID Resources

## 0. SelphID requirements

**SelphID legacy widget** is a Facephi product contained by SelphID Component. 

For proper functionality, it requires a zip file of resources that is updated for the various software versions.

---

## 1. Zip resource

The resource zip file can be downloaded from the following link:

| **SelphID version** | **Link**            |
| -------------- | -------------------------- |
| 1.25.0  | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphid-resources/1.25.0/fphi-selphid-widget-resources-selphid-1.25.0.zip" rel="nofollow"> Resources v.1.25.0</a> |
| 1.25.1  | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphid-resources/1.25.1/fphi-selphid-widget-resources-selphid-1.25.1.zip" rel="nofollow"> Resources v.1.25.1</a> |
| 1.26.0  | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphid-resources/1.26.0/fphi-selphid-widget-resources-selphid-1.26.0.zip" rel="nofollow"> Resources v.1.26.0</a> |
| 1.27.0  | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphid-resources/1.27.0/fphi-selphid-widget-resources-selphid-1.27.0.zip" rel="nofollow"> Resources v.1.27.0</a> |
| 1.28.1  | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphid-resources/1.28.1/fphi-selphid-widget-resources-selphid-1.28.1.zip" rel="nofollow"> Resources v.1.28.1</a> |
| 1.29.0  | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphid-resources/1.29.0/fphi-selphid-widget-resources-selphid-1.29.0.zip" rel="nofollow"> Resources v.1.29.0</a> |
| 1.30.1  | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphid-resources/1.30.1/fphi-selphid-widget-resources-selphid-1.30.1.zip" rel="nofollow"> Resources v.1.30.1</a> |
| 1.31.0  | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphid-resources/1.31.0/fphi-selphid-widget-resources-selphid-1.31.0.zip" rel="nofollow"> Resources v.1.31.0</a> |
| 1.31.2  | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphid-resources/1.31.2/fphi-selphid-widget-resources-selphid-1.31.2.zip" rel="nofollow"> Resources v.1.31.2</a> |
| 1.32.2  | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphid-resources/1.32.2/fphi-selphid-widget-resources-selphid-1.32.2.zip" rel="nofollow"> Resources v.1.32.2</a> |
| 1.33.1  | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphid-resources/1.33.1/fphi-selphid-widget-resources-selphid-1.33.1.zip" rel="nofollow"> Resources v.1.33.1</a> |
| 1.33.4  | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphid-resources/1.33.4/fphi-selphid-widget-resources-selphid-1.33.4.zip" rel="nofollow"> Resources v.1.33.4</a> |

---

## 2. Integration of the zip file

The resource zip must be included in applications that will make use of SelphID.

### 2.1. Android Apps

The resource zip must be included in the application's assets folder.

---

## 3. Zip Customization 

This component allows the customization of texts, images, fonts and
colours. Customization is done using the internally supplied **.zip
file**. This zip is made up of a file called ***widget.xml*** that
contains the definition of all the widget screens, each one of them with
a series of elements which allow customization. The zip file also
contains a folder with graphic resources and another folder with the
translations of the texts.

### 3.1. Basic description

#### 3.1.1. Text customization

Text customization is carried out by editing the texts of the existing
translation files in the resource .zip.

>     /strings/strings.es.xml
>
>     /strings/strings.xml

#### 3.1.2. Image customization

To customize the images used by the widget, you must add the images to
the resource .zip. In the zip there are 3 folders:

>     /resources/163dpi
>
>     /resources/326dpi
>
>     /resources/489dpi

These folders correspond to the different screen densities and you can
create as many density folders as you want. These folders contain the
versions of the images for each of the resolutions.

It is necessary to add the images in all the folders, since once the
optimal resolution for the device has been determined, the widget only
loads images from the folder with the chosen resolution.

The images are referenced from the *widget.xml* file.

#### 3.1.3. Colour 

Button colour customization is carried out from the *widget.xml* file.
In it you can customize any colour of any graphic element that appears
in the widget. Simply modify the colour of the desired property.

#### 3.1.4. Font type customization

Font files should be placed in the \`/resources/163dpi\` folder and once
there they can be referenced from the \`widget.xml\` file. To change the
font of a text element, it would be enough to modify the 'font' property
and put the name of the corresponding file.

In the next section, the information about the content of the resource
bundle and the way to modify it will be elaborated on.

### 3.2. Advanced description

#### 3.2.1. Widget.xml

This file contains the definition of all the properties that are
configurable in the authentication and registration processes. It is
divided by navigation screens and within each screen label are all the
properties that can be modified.

#### 3.2.2. Strings folder

This folder contains a *strings.xml* file for each translation you want
to support. The name must be formed as follows:

>     strings.(language).xml

Where (language) is the language code. For example, \`strings.es.xml\`
would be the Spanish translation, *strings.en.xml* the English
translation, *strings.es_ES.xml* the Spanish of Spain or
*strings.es_AR.xml* the Spanish of Argentina.

You can force the language or let the widget choose it based on device
settings. When deciding which language to apply, the following order is
followed:

-   Search by location code (for example, “es_AR”).

-   If it doesn't find a match, it would look for one for the generic
    language (i.e., in this case it would be "es").

-   If there were no results either, then it would use the default
    language.

At the code level it is possible to select the localisation using the
locale property. This parameter accepts a string with the language code
to be used (for example, "es" or "es_ES").

#### 3.2.3. Resources folder

It contains the folders with all the necessary resources to be able to
be modified, divided into densities. It is mandatory to generate the
images in all densities as the widget expects to find them in the folder
corresponding to the density of the device. New folders with the desired
density can also be created.

#### 3.2.4. BACKGROUND element

The *background* element is made up of 4 segments that can be coloured
independently:

-   **top**: Defines the background colour of the top segment or panel.

-   **middle_top**: defines the background colour of the segment or
    panel where the camera image is located.

-   **middle_bottom**: defines the background colour of the segment or
    panel below the camera image.

-   **bottom**: defines the background colour of the bottom segment or
    panel.

You can also set certain properties that are used only on specific
screens. We have listed them below referring to the screens on which
they are used:

-   **pagination_separator (RegistrationTips, FaceMovementTips)**:
    Defines the colour of the separation between the bottom panel and
    the panel below the camera.

-   **mirror_border_colour (RegistrationTips, FaceMovementTips**):
    Defines the colour of the border of the circle around the camera or
    video image of the registration tips. This element is also called a
    mirror.

-   **mirror_border_width (RegistrationTips, FaceMovementTips)**:
    Defines the width of the border of the circle around the camera or
    video image of the registration tips. If we didn't want to display a
    border, we would have to assign a value of 0.0 to this property.

-   **mirror_mist_colour (StartExtractor)**: Defines the colour of the
    centre circle on the pre-extraction screen. This colour should
    always have a transparency value since we must show the image of the
    camera so that the user can position himself correctly before
    starting the extraction. The colour format when a transparency value
    is included is RGBA (The alpha value will be indicated with the last
    byte).

-   **mirror_colour (Results)**: defines the background colour of the
    circle that displays the results of the registration process.

#### 3.2.5. BUTTON element

-   **background**: defines the background colour of the button

-   **decorator**: defines the colour of the button's shadow

-   **foreground**: defines the colour of the button font in case the
    content is text

-   **content_type**: defines the content type of the button. There are
    2 different types:

-   **resource_id:** Content must contain the name of a file in the
    resource bundle

-   **text_id:** Content must contain the identifier of a literal from
    the translations file of the resource bundle

-   **content**: defines the content of the button. It can be either an
    image or the identifier of a literal.

-   **align:** Defines the alignment of the button content, be it an
    image or a text

-   **font:** Defines the font used if the button content is text

-   **font_size**: Defines the font size if the button content is text

#### 3.2.6. TEXT element

The *text* elements are used to define the graphic aspect of the texts
of each of the widget's screens. These are the properties that can be
modified:

-   **colour**: defines the colour of the text.

-   **font**: defines the type of font used to display the text.

-   **font_size**: defines the font size.

It must be borne in mind that on the registration results screen, the
two texts that define the quality of the registration have their colour
forced to the colour of the bar that indicates the score.

#### 3.2.7. IMAGE element

-   **value**: defines the name of the file that contains the image to
    display.

*image* elements only have the property that defines the file where the
image is physically located in the resource bundle. The images are
obtained from the bundle by looking in the appropriate folder according
to the density of the device.

#### 3.2.8. VIDEO element

-   **value**: defines the name of the file that contains the video to
    display.

*Video* elements only have the property that defines the file when the
video is physically located in the resource bundle.

## 4. Databases (ONLY FOR RG DEPENDENCY)

If the Facephi team indicates that the SelphID dependency needs a database, one of the following databases can be downloaded:

| **Database** | **Link**            |
| -------------- | -------------------------- |
| Europa  | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphid-databases/eur/db.dat" rel="nofollow"> Base de datos</a> |
| Africa  | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphid-databases/africa/db.dat" rel="nofollow"> Base de datos</a> |
| Middle East  | <a href="https://facephicorp.jfrog.io/artifactory/resources-public-fphi/selphid-databases/middle-east/db.dat" rel="nofollow"> Base de datos</a> |

The database "db.dat" must always have the same name and shall be stored in the **assets/Regula/** folder of the application.

Only one database file can be included.

