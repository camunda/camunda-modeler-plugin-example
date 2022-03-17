# Camunda Modeler Plugin Example

 [![Compatible with Camunda Modeler version 5](https://img.shields.io/badge/Modeler_Version-5.0.0+-blue.svg)](#) [![Plugin Type](https://img.shields.io/badge/Plugin%20Type-BPMN-orange.svg)](#)

This example serves as a starting point for creating your own plugin for the [Camunda Modeler](https://github.com/camunda/camunda-modeler).


## Development Setup

Use [npm](https://www.npmjs.com/), the [Node.js](https://nodejs.org/en/) package manager to download and install required dependencies:

```sh
npm install
```

To make the Camunda Modeler aware of your plug-in you must link the plug-in to the [Camunda Modeler plug-in directory](https://github.com/camunda/camunda-modeler/tree/develop/docs/plugins#plugging-into-the-camunda-modeler) via a symbolic link.
Available utilities to do that are [`mklink /d`](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/mklink) on Windows and [`ln -s`](https://linux.die.net/man/1/ln) on MacOS / Linux.

Re-start the app in order to recognize the newly linked plug-in.


## Building the Plug-in

You may spawn the development setup to watch source files and re-build the client plug-in on changes:

```sh
npm run dev
```

Given you've setup and linked your plug-in [as explained above](#development-setup), you should be able to reload the modeler to pick up plug-in changes. To do so, open the app's built in development toos via `F12`. Then, within the development tools press the reload shortcuts `CTRL + R` or `CMD + R` to reload the app.


To prepare the plug-in for release, executing all necessary steps, run:

```sh
npm run all
```


## Before you Publish

* [ ] Clearly state which Camunda Modeler version your plug-in is compatible with and which type of plugin it is by changing the badges at the top of this README 
* [ ] Ensure you renamed the [bpmn-js extension](./client/bpmn-js-extension/index.js#L17) from `PLEASE_CHANGE_ME` to something unique
* [ ] Ensure you've removed the menu and style folders as well as their references in `./index.js` if you do not need them

## Additional Resources

* [List of existing plug-ins](https://github.com/camunda/camunda-modeler-plugins)
* [Plug-ins documentation](https://docs.camunda.io/docs/components/modeler/desktop-modeler/plugins/)


## Licence

MIT
