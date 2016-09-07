import Ember from 'ember';
import Handlebars from 'npm:handlebars';

var initialize = function initialize(appInstance) {
  let mainContainer = appInstance.container;
  let emberGetHelper = function(args, options) {
    if (args) {
      return Ember.get(this, args);
    }
  };

  let componentHelper = (args,options) {
    let container = this.container || mainContainer;
    let componentName = args;
    let component = container.lookup('component:' + componentName);
    if (!component) throw new Error(`Component ${componentName} not found!`);
    component.setProperties(options.hash);
    let buffer = [];
    component.render(buffer);
    return new Handlebars.SafeString(buffer[0]);
  };

  let nonblockIfHelper = function(args, options) {
    if (args[0]){
      return args[1];
    } else {
      return args[2];
    }
  };

  Handlebars.registerHelper('get', emberGetHelper);
  Handlebars.registerHelper('component', componentHelper);
  Handlebars.registerHelper('iff', nonblockIfHelper);
};
export { initialize };
export default {
  name: 'ember-cli-raw-handlebars',
  initialize: initialize
};
