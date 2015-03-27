import Ember from 'ember';
import template from 'dummy/raw-templates/some-component';
export default Ember.Controller.extend({
  renderTemplateWithPOJO: function(){
    return template({ value: 'prop1' });
  }.property(),

  renderTemplateWithEmberGet: function() {
    var obj = Ember.Object.extend({
      value: function(){
        return 'calcProp';
      }.property()
    });

    return template(obj.create());
  }.property()
});
