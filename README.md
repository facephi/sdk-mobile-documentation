# Facephi

Para ejecutar el proyecto lo primero es instalar los paquetes.

```
npm install
```

Iniciar localmente el servicio (http://localhost:3000)

```
npm run start
```

Iniciar localmente el servicio en español

```
npm run start -- --locale es
```

Compilar el proyecto

```
npm run build
```

Generar una nueva versión partiendo del directorio de docs

```
npm run docusaurus docs:version:android 2.0.X
```

Generar traducciones cuando se mete un plugin ID nuevo

```
npm run write-translations -- --locale es
```

Generar Warning/Alert/Note

```
<div class="warning">
<span class="warning">:warning:</span>
Esta es una propiedad avanzada, y en la mayoría de casos de uso no es necesario modificarla. Su uso incorrecto puede provocar un funcionamiento incorrecto del componente.
</div>
```

En el custom.css estan los style que hacen referencia a las clases que dan estilos a los carteles de advertencia.
