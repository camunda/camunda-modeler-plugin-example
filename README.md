# Camunda Modeler Plugin Example

[![Compatible with Camunda Modeler version 2.2](https://img.shields.io/badge/Camunda%20Modeler-2.2+-blue.svg)](https://github.com/camunda/camunda-modeler)


This example serves as a starting point for creating your own plugin for the [Camunda Modeler](https://github.com/camunda/camunda-modeler).


## Building

Install dependencies:

```sh
npm install
```

Package plugin to `client/client-bundle.js`:

```sh
npm run bundle

# or

npm run bundle:watch
```


## Before you Publish

* [ ] Clearly state which Camunda Modeler version your plug-in is compatible with
* [ ] Ensure you rename the [bpmn-js extension](./client/module.js#L43) from `PLEASE_CHANGE_ME` to something unique


## Additional Resources

* [Example Plugins](https://github.com/camunda/camunda-modeler-plugins)
* [Plugins documentation](https://github.com/camunda/camunda-modeler/tree/master/docs/plugins)


## Licence

MIT
