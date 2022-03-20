# Quasar Calculator

## Table Of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)

## Introduction

A simple Quasar calculator project. The goal is to learn Quasar technology along with Vue 3 composition API and Pinia store management.

## Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [Quasar](https://quasar.dev/)
- [Vue 3](https://vuejs.org/)
- [Pinia](https://reactnavigation.org/)
- [MathJS](https://www.npmjs.com/package/mathjs)

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

To build the app in order to deploy it in a server, use the following command:

```bash
quasar build
```

For building Linux app (.deb target) the following configuration has been added to `quasar.config.js`:

```js
electron: {
  bundler: 'builder', // 'packager' or 'builder'

  builder: {
    linux: {
      target: 'deb',
    },
  },
}
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).
