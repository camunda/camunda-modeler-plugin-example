/**
 * A bpmn-js extension service, providing the actual
 * plug-in feature.
 */
function ExamplePluginService(eventBus, canvas) {
  var img = document.createElement('img');
  img.src = getPluginsDirectory() + '/camunda-modeler-plugin-example/logo.png';
  img.width = '50';

  Object.assign(img.style, {
    position: 'absolute',
    bottom: '20px',
    left: '20px'
  });

  canvas.getContainer().appendChild(img);

  eventBus.on('shape.added', function(event) {
    console.log('%c A shape was added to the diagram!', 'color: #52b415; font-size: 24px;');
  });
}

ExamplePluginService.$inject = [ 'eventBus', 'canvas' ];


/**
 * The service and it's dependencies, exposed as a bpmn-js module.
 *
 * --------
 *
 * WARNING: This is an example plug-in.
 *
 * Make sure you rename the plugin and the name it is exposed (PLEASE_CHANGE_ME)
 * to something unique.
 *
 * --------
 *
 */
export default {
  __init__: [ 'PLEASE_CHANGE_ME' ],
  PLEASE_CHANGE_ME: [ 'type', ExamplePluginService ]
};
