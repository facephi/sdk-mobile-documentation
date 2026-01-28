## 1. What is the widget?

FacePhi SelphID iOS Widget is a useful tool to perform document capture functions offered by FacePhi technology. The functions provided by this widget are:

- Internal management of cameras and resolutions.
- Wizard for capture processes of front and back sides of the document.
- Extracting information from the document.
- Obtaining images from the front, back sides and other relevant data.

---

## 2. How do I integrate the widget?

### 2.1. Required Libraries

FacePhi distributes the required libraries to integrate the widget into an iOS project. Both libraries (frameworks) and resources & licenses for the component are distributed and can be found in the .lib directory:

Frameworks:

- `FPhiSelphIDWidgetiOS.framework`
- `Microblink.xcframework`

Resources:

- `fphi-selphid-widget-resources-SelphID-1.0.zip`
- `license.lic`

### 2.2. SelphID iOS Widget plug-in installation

Plug-in installation shall be made once the following actions are completed in your XCode IDE:

#### 2.2.1. Frameworks integration

Include FPhiSelphIDWidgetiOS.framework and Microblink.xcframework in Embedded Binaries and only Microblink.xcframework in Linked Frameworks and Libraries.

#### 2.2.2. Resources integration

Include `fphi-selphid-widget-resources-SelphID-1.0.zip` (without decompressing) in Copy bundle Resources, within the Build Phases section.

---

## 3. Widget Configuration

SelphID iOS widget contains a series of attributes that allow you to configure its behavior. Each of the configurable properties in the `FPhiSelphIDWidget` class is shown below:

#### 3.1. ScanType Property

Allowed values are as follows:

- **DTIDCard**: The widget is configured to capture ID Cards.
- **DTPassport**: The widget is configured to capture passports.
- **DTVisa**: The widget is configured to capture visas.
- **DTDriversLicense**: The widget is configured to capture driver licenses.
- **DTForeignCard**: The widget is configured to capture foreign cards.
- **DTCreditCard**: The widget is configured to capture credit cards.
- **DTCustom**: The widget is configured to capture documents outside the previous mentioned categories.

#### 3.2. ScanSide Property

Allowed values are as follows:

- **DSFront**: The widget is configured to capture the front side of the document.
- **DSBack**: The widget is configured to capture the back side of the document.

#### 3.3. ScanMode Property

This indicates the OCR scan mode of documents. Depending on the choice, several types of documents or one particular document will be scanned and searched. There are three types of mode:

- **SMGeneric**: The generic mode allows you to scan any type of document regardless of the country or type of document. This mode is not as precise as the other two, but it allows to scan varios standard document types.
- **SMSearch**: The search mode will enable the use of a whitelist and a blacklist and will search documents that meet these conditions. These conditions are indicated in the "specificData” variable. This way it is possible to make the search limiting the number of templates and making the search much more precise than in the generic case.
- **SMSpecific**: Search for a specific document. These conditions are specified in the "specificData” variable 

#### 3.4. SpecificData (string) Property 

This property enables to define which documents will be scanned during the process, in case of setting the scanning mode (scanMode) to SMSearch or SMSpecific.

A configuration example that enables all documents of Spanish nationality to be scanned would be as follows:
```objc
    // Search mode definition
    _selphidWidget.scanMode = SMSearch;
    _selphidwidget.specificData = "ES|<ALL>"; // ISO code for Spain (ES)
```
#### 3.5. WizardMode Property

The widget is configured to capture both sides (front and back side) of the document one after the other on the same widget call.

#### 3.6. ShowAfterCapture Property

This indicates whether or not to display a screen showing the captured document image after the document analysis process.

#### 3.7. PreviousCaptureData Property

Dictionary with information of the previous captures, in order to improve the processing of the images in each new iteration.

#### 3.8. Locale (string) Property

This is a string that enables to change the widget locale and language. Examples of possible values are as follows: 

- "es" for Spanish.
- "en" for English.
- "fr" for French.

In short, it will depend on the name that appears in the `strings.xml` file of the language you want to select (`strings-es.xml`, `strings-en.xml`, `strings-fr.xml`).

In the zip resource you can add all the necessary `strings-xx.xml` files (within the strings folder) in order to integrate all the required locations.

#### 3.9. Timeout Property

This enum defines the time the widget is going to try to capture one side of the document. It has 3 possible values

- TShort: 15 seconds.
- TMedium: 20 seconds.
- TLong: 25 seconds.

#### 3.10. VideoFilename Property

Sets the absolute path of the file name where a video of the capture process will be recorded. The application is responsible for requesting the necessary permissions to the phone in case that path requires additional permissions. The Widget won't record anything if this property is not set.

#### 3.11 DocumentModels Property

This property allows, with a string in xml format, to configure the document models the widget is going to capture. This definition is found, normally, in a .xml file inside the resources zipfile. With this property an app is able to 'hotload' these models.

Note: This property do not alter the contents of the resource file.

#### 3.12 GenerateRawImages Property

This property sets the widget to return the full camera image that was used to extract the OCR. These images are returned in the `rawFrontDocument` and `rawBackDocument` properties of the `results` object respectively.

#### 3.13 widgetVersion Method

Returns the widget's actual version in string format. This method is static so it doesn´t require launching the widget to perform this operation.

---

## 4. Widget Creation

### 4.1. FPhiSelphIDWidget Class 

`FPhiSelphIDWidget` is the class responsible for the communication between application and widget. To be able to execute it, the StartExtraction method must be called. 

The following example, in Objective C, shows the widget configuration and instantiation:
```objc
    (IBAction)takeButtonTapped:(id)sender {

        NSString *license = [self readLicense:LICENSE_PATH];
        NSError *error = nil;
        NSBundle *bundle = [NSBundle bundleForClass:[BackViewController class]];

        _selphidWidget = [[FPhiSelphIDWidget alloc] initWithFrontCameraIfAvailable :true resources:[bundle pathForResource:RESOURCES_PATH ofType:@"zip"] delegate:self license:license:error&error];

            if (error != nil) {
                switch (error.code) {
                    case FWMEUnknown:
                        NSLog(@"Widget - construction error. Unknown error");
                        break;
                    case FWMECameraPermission: 
                        NSLog(@"Widget - construction error. Camera permission denied");
                        break;
            }
            return;
        }

        _selphidWidget.scanSide = DSFront;
        _selphidWidget.scanMode = SMSearch;
        _selphidWidget.specificData = @"ES|<All>"; // ISO Code for Spain
        _selphidWidget.wizardMode = false;
        _selphidWidget.showAfterCapture = true;

        if (_selphidWidget.wizardMode) self.previousData = nil;
        _selphidWidget.tokenPreviousCaptureData = self.previousData;

        [_selphidWidget StartExtraction];
        [self presentViewController:_selphidWidget animated:true completion:nil];
    }
```
The parameters required in the instantiation are discussed below:

#### 4.1.1. BundlePathForResouce (string) Argument

There is a .zip file (added in the plug-in root folder) that contains all the resources of the widget UI to abstract them from the logic and facilitate their customization by the client. Simply modify the "bundlePathForResource" variable with the name without the extension of the compressed file and the widget will be able to localize and apply it. 

#### 4.1.2. License (string) Argument

This contains the license for the SelphID libraries. The programming example shows a way to manage this license according to the platform used. If the license argument is not correctly used then we will have an exception when the widget is invoked, in which the following error messages can occur:

1. "License not parsed properly": The route where the license is stored has not been correctly obtained, or the license itself is not correctly formed.
2. "License package name mismatch": The application bundle identifier is not the same as that of the license.
3. "License package name mismatch": The date of the license has expired.
4. "License content not valid": The license is not correct, or it is not correctly formed.
5. "Unknown": Unknown cause.

### 4.2. Protocol FPhiSelphIDWidgetProtocol

#### 4.2.1. CaptureFinished

It is executed when a successful capture is performed.

#### 4.2.2. CaptureFailed

It is executed when a failure is produced while capturing the document.

#### 4.2.3. CaptureCancelled

It is executed when the user interrupts the capturing process.

#### 4.2.4. CaptureTimeout

It is executed when a maximum allowed time is reached without capturing the document.

#### 4.2.5. onEvent

This event allows our widget to send information to the main application about important events that occur during the capturing processes. This method receives as parameters the time of the event, encoded as UnixTime in milliseconds, the type of event and the information of the event associated with this particular event. There are mainly 3 types of events:

- Events about view changes or widget status changes.
- User events such as button clicks or swipe movements.
- Events about the capturing process that is currently in progress. These events can be about errors such as not detecting the document, not having enough image quality or even not following the indications about the current process.

With these events we can communicate important data to analyze user behavior while using our technology
```objc
    (void)onEvent:(NSDate *)time type:(NSString *)type info:(NSString *)info {
    }
```
---

## 5. Result Reception.

At the end of the widget call, it is possible to retrieve all the information obtained from the capture of the document (either the front, back or both sides at the same time). This requires the implementation of the `FPhiSelphIDWidgetProtocol` delegate and the following function:
```objc
    (void)CaptureFinished {

        if (_selphidWidget.wizardMode)
            self.previousData = nil;
        else
            self.previousData = _selphidWidget.results.tokenOCR;
        
        _frontImageView.image = _selphidWidget.results.frontDocument;

        // [self getAllValues];
        // or
        [self getIndividualValues];    
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
