/**
 * A bpmn-js extension service, providing the actual
 * plug-in feature.
 */
function ExamplePluginService(eventBus) {
  eventBus.on('shape.added', function(context) {
    var element = context.element;

    console.log('🎉 A shape was added!', element);
  });

  eventBus.on('connection.added', function(context) {
    var element = context.element;

    console.log('🎊 A connection was added!', element);
  });
}

ExamplePluginService.$inject = [ 'eventBus' ];


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
