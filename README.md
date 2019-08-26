# Camunda Modeler Plugin Example

[![Compatible with Camunda Modeler version 2.2](https://img.shields.io/badge/Camunda%20Modeler-2.2+-blue.svg)](https://github.com/camunda/camunda-modeler)

This example serves as a starting point for creating your own plugin for the [Camunda Modeler](https://github.com/camunda/camunda-modeler).


## Setup

```sh
npm install
npm run all
```


## Building

You may spawn the development setup to watch source files and re-build the client plug-in on changes:

```sh
npm run dev
```

Prepare plug-in for release, executing all necessary steps:

```sh
npm run all
```


## Before you Publish

* [ ] Clearly state which Camunda Modeler version your plug-in is compatible with
* [ ] Ensure you renamed the [bpmn-js extension](./client/bpmn-js-extension/index.js#L17) from `PLEASE_CHANGE_ME` to something unique


## Additional Resources

* [Example Plugins](https://github.com/camunda/camunda-modeler-plugins)
* [Plugins documentation](https://github.com/camunda/camunda-modeler/tree/master/docs/plugins)


## Licence

MIT
