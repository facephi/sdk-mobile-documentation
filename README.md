# Facephi - Documentation README

## Commands

Install the packages needed for the project:

```
npm install
```

Launch service in (http://localhost:3000) or available port:

```
npm run start
```

Launch service with an specific locale:

```
npm run start -- --locale es
```

Build the project

```
npm run build
```

Generate new version from docs' folder

```
npm run docusaurus docs:version:android 2.0.X
```

Generate translations when a new Product or language is added

```
npm run write-translations -- --locale es
```

## Project Structure

### docs/

This is the project main folder. There is a folder for each product. Modifications to content should be done here.

### i18n/

This is the folder that contains the documentation translated. Each language has a unique folder. In the case of *en*, it is void because the *docs/* folder is in english by default.

The latest version is always inside the *current/* folder.


### static/

This is the folder where all the resources are located. Those resources could be images needed to further detail a functionality on a Markdown page.

### src/

Contains the documentation's Home page.

The folder *css/* contains the styles used on the project. For example, we use them to customize the warning's appearance:

```
<div class="warning">
<span class="warning">:warning:</span>
This is an advanced property. Not supported in all the use cases and can provoke an unexpected behavior.
</div>
```

### docusaurus.config.js

This file is where we create the global project configuration. Here we can add or remove the products, their sidebars, versions...


### sidebarsXYZ.js

This file is where we configure a sidebar referenced inside the docusaurus.config.js. We can add or remove elements and decide in which order they are set.

### versions.json

This file is generated automatically. Lists the availabe versions. Currently, we don't have a global version for the documentation because we have specific versions for each product. So instead of only being one versions.json there is an android_versions.json, ios_versions.json,...

For each version specified in this file, exists a cloned *product*_versioned_sidebars and *product*_versioned_docs' folder. Those folders save the state of that specific version.

## Known Issues

You can't change between languages once the local service is launch. This is not an issue on production, where it works properly.
