import Ember from 'ember';
var initialize = function initialize(container, application) {
  let mainContainer = container;
  let emberGetHelper = function(/* [args, ] options */) {
    console.log(arguments);
    var options = arguments[arguments.length - 1];
    if (arguments.length === 1) {
      return Ember.get(this, options.name);
    }
  };
  let componentHelper = function(args,options) {
    let container = this.container || mainContainer;
    let componentName = Ember.get(this, args);
    let component = container.lookup('component:' + componentName);
    if (!component) throw new Error(`Component ${componentName} not found!`);
    let props = {};
    Object.keys(options.hash).forEach((k) => {
      props[k] = Ember.get(this, options.hash[k]);
    });
    console.log(props);
    component.setProperties(props);
    let buffer = [];
    component.render(buffer);
    return new Handlebars.SafeString(buffer[0]);
  };
  Handlebars.registerHelper('helperMissing', emberGetHelper);
  Handlebars.registerHelper('component', componentHelper);
};
export { initialize };
export default {
  name: 'ember-cli-raw-handlebars',
  initialize: initialize
};
