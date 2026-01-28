# SelphID Widget Android

## 1. What is the widget?

FacePhi SelphID Android Widget is a useful tool to perform document capture functions offered by FacePhi technology. The functions provided by this widget are:

- Internal management of cameras and resolutions.
- Wizard for capture processes of front and back sides of the document.
- Extracting information from the document.
- Obtaining images from the front, back sides and other relevant data.

---

## 2. How do I integrate the widget?

### 2.1. Required Libraries

FacePhi distributes the required libraries to integrate the widget into an Android project. Both .aar libraries, and resources & licenses for the component are distributed and can be found in the lib directory:

Libraries:

- `fphi-selphid-core-android-X.X.X.aar`
- `fphi-selphid-drawer-android-X.X.X.aar`
- `fphi-selphid-extractor-X.X.X.aar`
- `fphi-selphid-license_manager-X.X.X.aar`

Resources:

- `fphi-selphid-widget-resources-selphid-X.X.zip`
- `license.lic`

### 2.2. SelphID Android plug-in installation

Plug-in installation shall be made once the following actions are completed in your Android Studio IDE.

### 2.2.1 Libraries integration

Android Archive Library so-called `fphi-selphid-core-android-X.X.X.aar`, `fphi-selphid-drawer-android-X.X.X.aar` and `fphi-selphid-extractor-X.X.X.aar` should be added as dependencies to your project.

Additionally, a zip file containing the graphic and locale settings of the widget is provided, whereby you can customize the physical appearance of the widget for a better integration with the final application containing it and which must be integrated into the assets folder of your Android project. This zip file must remain zipped in the assets folder.

Also, along with the SDK, a programming example for Android Studio is provided which helps widget consumption by the integrator in an Android application.

---

## 3. Widget Configuration

SelphID Android widget contains a series of attributes that allow you to configure its behavior. Each of the configurable properties in the `WidgetSelphIDConfiguration` class is shown below:

#### 3.1. DocumentType Property

Allowed values are as follows:

- **WidgetSelphIDDocumentType.DTIDCard**: The widget is configured to capture ID Cards.
- **WidgetSelphIDDocumentType.DTPassport**: The widget is configured to capture passports.
- **WidgetSelphIDDocumentType.DTVisa**: The widget is configured to capture visas.
- **WidgetSelphIDDocumentType.DTDriversLicense**: The widget is configured to capture driver licenses.
- **WidgetSelphIDDocumentType.DTForeignCard**: The widget is configured to capture foreign cards.
- **WidgetSelphIDDocumentType.DTCreditCard**: The widget is configured to capture credit cards.
- **WidgetSelphIDDocumentType.DTCustom**: The widget is configured to capture documents outside the previous mentioned categories.

#### 3.2. DocumentSide Property

Enabled values are as follows:

- **WidgetSelphIDDocumentSide.DSFront**: The widget is configured to capture the front side of the document.
- **WidgetSelphIDDocumentSide.DSBack**: The widget is configured to capture the back side of the document.

#### 3.3. ScanMode Property

This indicates the OCR scan mode of documents. Depending on the choice, several types of documents or one particular document will be scanned and searched. There are three types of mode:

- **WidgetSelphIDScanMode.SMGeneric**: The generic mode allows you to scan any type of document regardless of the country or type of document. This mode is not as precise as the other two, but it allows to scan various types of standard documents.
- **WidgetSelphIDScanMode.SMSearch**: The search mode will enable the use of a whitelist and a blacklist and will search documents that meet these conditions. These conditions are indicated in the "specificData” variable. This way it is possible to make the search limiting the number of templates and making the search much more precise than in the generic case.
- **WidgetSelphIDScanMode.SMSpecific**: Scan a specific document. These conditions are indicated in the "specificData" property shown below.

#### 3.4. SpecificData (string) Property 

This property enables to define which documents will be scanned during the process, in case of setting the scanning mode (scanMode) to SMSearch or SMSpecific.

A configuration example that enables all documents of Spanish nationality to be scanned would be as follows:
```java
	// Search mode definition
	conf.setScanMode(WidgetSelphIdScanMode.SMSearch);
	conf.setSpecificData("ES|<ALL>"); // ISO code for Spain (ES)
```
#### 3.5. WizardMode Property

This indicates if the widget is configured to capture both sides (front and back side) of the document at the same time.

#### 3.6. ShowAfterCapture Property

This indicates whether or not to display a screen showing the captured document image after the document analysis process. On this screen, the user is given the possibility to repeat the capture process if the image obtained from the document was not correct.

#### 3.7. PreviousCaptureData Property

When capturing the document in 2 steps, this property allows you to pass a dictionary with the information of the previous capture. This way the widget can intelligently combine the results of both readings and return the combined information of both captures. It also allows the widget to calculate a degree of similarity for the data on both sides.

In the case that the capture is done in a single step, this is not necessary since the widget does this process internally.

#### 3.8. Locale (string) Property

This is a string that enables to change the widget locale and language. Examples of possible values are as follows:

- "es" for Spanish.
- "en" for English.
- "fr" for French.

In short, it will depend on the name that appears in the `strings.xml` file of the language you want to select (`strings-es.xml`, `strings-en.xml`, `strings-fr.xml`).

In the zip resource you can add all the necessary `strings-xx.xml` files (within the strings folder) in order to integrate all the required locations.

#### 3.9. Timeout Property

This enum defines the time the widget is going to try to capture one side of the document. It has 3 possible values

- WidgetTimeout.Short: 15 seconds.
- WidgetTimeout.Medium: 20 seconds.
- WidgetTimeout.Long: 25 seconds.
- WidgetTimeout.VeryLong: 60 seconds.

#### 3.10. VideoFilename Property

Sets the absolute path of the file name where a video of the capture process will be recorded. The application is responsible for requesting the necessary permissions to the phone in case that path requires additional permissions. The Widget won't record anything if this property is not set.

#### 3.11 DocumentModels Property

This property allows, with a string in xml format, to configure the document models the widget is going to capture. This definition is found, normally, in a .xml file inside the resources zipfile. With this property an app is able to 'hotload' this models.

Note: This property do not alter the contents of the resource file.

#### 3.12 GenerateRawImages Property

This property sets the widget to return the full camera image that was used to extract the OCR. These images are returned in the `rawFrontDocument` and `rawBackDocument` properties of the `results` object respectively.

#### 3.13 widgetVersion Method

Returns the widget's actual version in string format. This method is static so it doesn´t require launching the widget to perform this operation.

---

## 4. Widget Creation

### 4.1. FPhiSelphIDWidget Class

`FPhiSelphIDWidget` is the class responsible for the communication between application and widget. In order to execute it, you have to use an Intent. The following java code example shows the configuration and instance of the widget:
```java
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
```
The "License" property contains the license for the SelphID libraries. The programming example shows a way to manage this license according to the platform used.

### 4.2. IFPhiWidgetSelphIDEventListener interface

This interface allows our widget to send information to the main application about important events that occur during document capture processes.
To achieve this, you need to create a class that implements this interface, which only has one method:
```java
	public void onEvent(long time, @NonNull String type, @NonNull String info)
```
This method receives as parameters the time of the event, encoded as UnixTime in milliseconds, the type of event and the information of the event associated with this particular event.

There are mainly 3 types of events:

- Events about view changes or widget status changes.
- User events such as button clicks or swipe movements.
- Events about the registration or authentication that is currently in progress. These events can be about errors not detecting a document, about wrong movements or even not following the indications about the current process.

With these events we can communicate important data to analyze user behavior while using our technology.

After creating the class that implements this interface, the application will call the configuration object method:
```java
	conf.setIFPhiWidgetSelphIDEventListener_classname("name.class.interface")
```
Passing the name of the class that implements this interface.

---

## 5. Result Reception.

At the end of the plug-in call, it is possible to acquire all the information obtained from the capture of the document (either the front, rear or both sides at the same time). This requires using the onActivityResult() callback:
```java
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

	        // We get the tokens
	        String tknOCR = result.getTokenOCR();
	        String tknFD = result.getTokenFrontDocument();
	        String tknBD = result.getTokenBackDocument();
	        String tknFI = result.getTokenFaceImage();
	        // We save execution results
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
```
It is important to note that the information obtained in this object is returned duplicated, showing it unencrypted (for example, frontDocumentImage for the image of the front side of the document), and tokenized and encrypted (for example, tokenFrontDocumentImage for the image of the front side capture of the document). Depending on the type of license used, one or both types of parameters can be obtained. The tokenized information should be used to send the information securely to the server where the SelphID SDK is installed, while the open data should only be used in development and testing purposes.

### 5.1. Results Property

This contains all the images captured by the widget, listed below:

#### 5.1.1. FrontDocument / tokenFrontDocument Properties

This is the front image of the document processed, cleaned and trimmed by the edges and its corresponding token.

#### 5.1.2. BackDocument / tokenBackDocument Properties

This is the back image of the document processed, cleaned and trimmed by the edges and its associated token.

#### 5.1.3. FaceImage / tokenFaceImage Properties

This is the image of the face that has been found in the document, where appropriate, and its associated token.

#### 5.1.4. documentCaptured, countryCaptured and documentTypeCaptured Properties

These properties store the document's model, the document's country and the document's type of the scanned document.

#### 5.1.5. matchingSidesScore, matchingFrontScore and matchingBackScore Properties

- The 'matchingSidesScore' property returns a calculation of the similarity of the data between the front and the back of the document. This calculation is made by checking the similarity between the common fields read on both sides. If there are common fields in the document, the result of the calculation is a value between 0.0 and 1.0. The more similar the data is, the greater the value.
- The 'matchingFrontScore' property returns a calculation of the similarity of the front's data of the document. This calculation is made by checking the similarity between the common fields read on the front side. If there are common fields in the front side, the result of the calculation is a value between 0.0 and 1.0. The more similar the data is, the greater the value.
- The 'matchingBackScore' property returns a calculation of the similarity of the back's data of the document. This calculation is made by checking the similarity between the common fields read on the back side. If there are common fields in the back side, the result of the calculation is a value between 0.0 and 1.0. The more similar the data is, the greater the value.

If the calculation returns -1.0, the document does not contain common fields or there is still no information on both sides.

#### 5.1.6. captureProgress Property

This property returns the state in the capture process the widget was in when it finished. These are the possible values:
```
    Front_Detection_None = 0
    Front_Detection_Uncertain = 1
    Front_Detection_Completed = 2
    Front_Document_Analyzed = 3
    Back_Detection_None = 4
    Back_Detection_Uncertain = 5
    Back_Detection_Completed = 6
    Back_Document_Analyzed = 7
```
- **0**: While reading the Front, the widget ended without being able to detect anything. Generally, when no document is placed.
- **1**: While reading the Front, the widget ended up having partially detected a document. In this case, some of the expected elements have been detected, but not all the necessary ones.
- **2**: While reading the Front, the widget ended up having completed the detection of all the elements of the document. If the widget ends in this state it is because the OCR analysis could not be completed successfully.
- **3**: While reading the Front, the widget ended up having analyzed and extracted all the OCR of the document. This is the state in which a correct reading of the document’s front would end.

States 4 through 7 are exactly the same except that they refer to the process of analyzing the document’s back.

#### 5.1.7. timeoutDiagnostic Property

This property returns a string explaining the reason the widget timed out. This string can be used in a later timeout screen where the main app can give more information to the user about what happened during the document capture.

### 5.2. ocrResults Dictionary

This dictionary contains all the data detected in the document. The key of each field is encoded in such a way that the key itself contains information from where the value was obtained. For example, the key Front/MRZ/DocumentNumber indicates that the value of the DocumentNumber was read in the Front of the document and in the MRZ region. These keys depend on the captured document and therefore will be different between different countries and document models.

The dictionary also contains keys with a more generic name that do not carry source-related information. These keys contain the most accurate data of all the values for that particular field. These keys are as follows:

- **FirstName**: The value associated with this key contains the name of the user.
- **LastName**: The value associated with this key contains the surname of the user.
- **DateOfBirth**: The value associated with this key contains the date of birth detected in the document.
- **Gender**: The value associated with this key contains the gender of the user detected in the document.
- **Nationality**: The value associated with this key contains the nationality of the user detected in the document.
- **DocumentNumber**: The value associated with this key contains the document number.
- **DateOfExpiry**: The value associated with this key contains the expiration date of the document.
- **Issuer**: The value associated with this key contains the issuer of the document.
- **DateofIssue**: The value associated with this key contains the date of issue of the document.
- **PlaceOfBirth**: The value associated with this key contains the place of birth of the user.
- **Address**: The value associated with this key contains the address detected in the document.

Additionally we include keys from the results object for an easy access:

- **DocumentCaptured**: The value associated with the document model that has been scanned according to the .xml model file. This value corresponds to the documentCaptured property.
- **MatchingSidesScore**: The value associated with the similarity between the front and the back od the document. this value corresponds to the matchingSidesScore property.
