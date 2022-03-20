# Quasar App (quasar-project)

A Quasar Project

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
