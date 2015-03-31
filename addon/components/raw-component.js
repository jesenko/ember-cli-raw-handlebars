import Ember from 'ember';

export default Ember.Component.extend({
  rawTemplate: null,
  render(buffer) {
    buffer.push(this.rawTemplate(this));
  }
});
