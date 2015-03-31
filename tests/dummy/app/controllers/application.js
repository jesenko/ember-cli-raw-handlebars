import Ember from 'ember';
import template from 'dummy/raw-templates/some-component';
export default Ember.Controller.extend({
  renderTemplateWithPOJO: function(){
    return template({
      value: 'prop1',
      nestedComponent: 'nested-component'});
  }.property(),

  renderTemplateWithEmberGet: function() {
    var obj = Ember.Object.extend({
      value: function(){
        return 'calcProp';
      }.property(),
      nestedComponent: function(){
        return 'nested-component';
      }.property()
    });

    return template(obj.create());
  }.property()
});
