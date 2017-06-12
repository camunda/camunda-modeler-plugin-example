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
