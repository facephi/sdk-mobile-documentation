# How-to: Migration from 1.4.X to 2.0.X

## Actualizar compileSDKVersion
### Error

``` 
Execution failed for task ':app:checkDebugAarMetadata'.
 
 A failure occurred while executing com.android.build.gradle.internal.tasks.CheckAarMetadataWorkAction
   One or more issues found when checking AAR metadata values:
 
 Dependency 'androidx.navigation:navigation-common:2.7.7' requires 'compileSdkVersion' to be set to 34 or higher.
  
 Compilation target for module ':app' is 'android-33'

Dependency 'androidx.navigation:navigation-runtime:2.7.7' requires 'compileSdkVersion' to be set to 34 or higher.
  
Compilation target for module ':app' is 'android-33'
  
Dependency 'androidx.navigation:navigation-common-ktx:2.7.7' requires 'compileSdkVersion' to be set to 34 or higher.
  
Compilation target for module ':app' is 'android-33'
```


### Solución

Modificar en tu aplicación el mínimo de versión de la SDK a 24:

```
defaultConfig {
        // You can update the following values to match your application needs.
        // For more information, see: https://docs.flutter.dev/deployment/android#reviewing-the-build-configuration. 
        minSdkVersion 24
        targetSdkVersion flutter.targetSdkVersion // targetSdkVersion 34
        versionCode flutterVersionCode.toInteger()
        versionName flutterVersionName
    }
```





## Actualizar Gradle Build Tools
### Error

```
  Caused by: org.gradle.api.internal.artifacts.transform.TransformException: Execution failed for DexingNoClasspathTransform: /Users/username/.gradle/caches/transforms-3/e7c35f0a55ff407d71f0751a9bab00dd/transformed/jetified-lottie-compose-6.4.0-runtime.jar.
    at org.gradle.api.internal.artifacts.transform.DefaultTransformerInvocationFactory$1.lambda$mapResult$3(
    ... 2 more
  Caused by: com.android.builder.dexing.DexArchiveBuilderException: Error while dexing.
```

  or

```
  AGPBI: {"kind":"error","text":"com.android.tools.r8.internal.YI0: Sealed classes are not supported as program classes","sources":[{"file":"/Users/username/.gradle/caches/transforms-3/e7c35f0a55ff407d71f0751a9bab00dd/transformed/jetified-lottie-compose-6.4.0-runtime.jar"}],"tool":"D8"}
```

### Solución

En el fichero *android/build.gradle* file, modificar el *gradle.build.tools* a **7.4.0** o superior:

```
 buildscript {
      ext.kotlin_version = '1.8.10'
      repositories {
          google()
          mavenCentral()
      }

      dependencies {
          classpath 'com.android.tools.build:gradle:7.4.0' // 7.4.0
          classpath 'org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version'
      }
  }
```


En el fichero *gradle-wrapper.properties*:

```
  distributionBase=GRADLE_USER_HOME
  distributionPath=wrapper/dists
  zipStoreBase=GRADLE_USER_HOME
  zipStorePath=wrapper/dists
  distributionUrl=https\://services.gradle.org/distributions/gradle-7.5-all.zip // 7.5-all.zip
```




### Modificar el tipo del diagnóstico de error


El parámetro *errorDiagnostic*:

```
final SdkErrorType errorDiagnostic; 
```
Ahora es un String en la versión 2.0.0:

```
final String errorDiagnostic;
```