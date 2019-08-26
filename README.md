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

## Link into Camunda Modeler

For the best development experience, link your plug-in into the Camunda Modeler [plugin directory](https://github.com/camunda/camunda-modeler/tree/develop/docs/plugins#plugging-into-the-camunda-modeler) via a symlink.

Available utilities to do that are [`mklink /d`](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/mklink) on Windows and [`ln -s`](https://linux.die.net/man/1/ln) on MacOS / Linux.


## Before you Publish

* [ ] Clearly state which Camunda Modeler version your plug-in is compatible with
* [ ] Ensure you renamed the [bpmn-js extension](./client/bpmn-js-extension/index.js#L17) from `PLEASE_CHANGE_ME` to something unique


## Additional Resources

* [Example Plugins](https://github.com/camunda/camunda-modeler-plugins)
* [Plugins documentation](https://github.com/camunda/camunda-modeler/tree/master/docs/plugins)


## Licence

MIT
