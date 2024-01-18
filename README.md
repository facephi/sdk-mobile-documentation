# Facephi

Generar traducciones cuando se mete un plugin ID nuevo

```
npm run write-translations -- --locale es
```

Iniciar localmente el servicio

```
npm run start
```

Compilar el proyecto

```
npm run build
```

Generar una nueva versión partiendo del directorio de docs

```
npm run docusaurus docs:version:android 1.5.2
```

# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
