(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var assign = Object.assign;

function ClientPlugin(eventBus, canvas) {
  var img = document.createElement('img');
  img.src = getPluginsDirectory() + '/camunda-modeler-plugin-example/logo.png';
  img.width = '50';

  assign(img.style, {
    position: 'absolute',
    bottom: '20px',
    left: '20px'
  });

  canvas.getContainer().appendChild(img);

  eventBus.on('shape.added', function(event) {
    console.log('%c A shape was added to the diagram!', 'color: #52b415; font-size: 24px;');
  });
}

ClientPlugin.$inject = [ 'eventBus', 'canvas' ];

module.exports = {
  __init__: [ 'clientPlugin' ],
  clientPlugin: [ 'type', ClientPlugin ]
};

},{}],2:[function(require,module,exports){
var registerBpmnJSPlugin = require('camunda-modeler-plugin-helpers').registerBpmnJSPlugin;
var plugin = require('./ClientPlugin');

registerBpmnJSPlugin(plugin);

},{"./ClientPlugin":1,"camunda-modeler-plugin-helpers":3}],3:[function(require,module,exports){
/**
 * Validate and register a client plugin.
 *
 * @param {Object} plugin
 * @param {String} type
 */
function registerClientPlugin(plugin, type) {
  var plugins = window.plugins || [];
  window.plugins = plugins;

  if (!plugin) {
    throw new Error('plugin not specified');
  }

  if (!type) {
    throw new Error('type not specified');
  }

  plugins.push({
    plugin: plugin,
    type: type
  });
}

/**
 * Validate and register a bpmn-js plugin.
 *
 * Example use:
 *
 *    var registerBpmnJSPlugin = require('./camundaModelerPluginHelpers').registerBpmnJSPlugin;
 *    var module = require('./index');
 *
 *    registerBpmnJSPlugin(module);
 *
 * @param {Object} plugin
 */
function registerBpmnJSPlugin(plugin) {
  registerClientPlugin(plugin, 'bpmn.modeler.additionalModules');
}

module.exports.registerBpmnJSPlugin = registerBpmnJSPlugin;

},{}]},{},[2]);
