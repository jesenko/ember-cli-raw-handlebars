import Ember from 'ember';
import { initialize } from '../../../initializers/ember-cli-raw-handlebars';
import { module, test } from 'qunit';

var container, application;
/* global Handlebars */
module('EmberCliRawHandlebarsInitializer', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('adds missingHelper to Handlebars', function(assert) {
  initialize(container, application);
  assert.ok(Handlebars.helpers.helperMissing);
});
