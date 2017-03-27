'use strict';

function ClientPlugin(eventBus) {
  eventBus.on('shape.added', function(event) {
    console.log('%c A shape was added to the diagram!', 'color: #52b415; font-size: 24px;');
  });
}

module.exports = {
  __init__: [ 'clientPlugin' ],
  clientPlugin: [ 'type', ClientPlugin ]
};
