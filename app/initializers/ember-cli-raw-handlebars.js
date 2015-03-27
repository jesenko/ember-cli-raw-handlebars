import Ember from 'ember';
var initialize = function initialize(/* container, application */) {
  Handlebars.registerHelper('helperMissing', function(/* [args, ] options */) {
    var options = arguments[arguments.length - 1];
    if (arguments.length === 1) {
      return Ember.get(this, options.name);
    }
  });
};
export { initialize };
export default {
  name: 'ember-cli-raw-handlebars',
  initialize: initialize
};
