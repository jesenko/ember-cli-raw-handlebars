'use strict';

var Filter = require('broccoli-filter');

var Ember = { assert: function() {}, FEATURES: { isEnabled: function() {} } };
// ES6Todo: when ember-debug is es6'ed import this.
// var emberAssert = Ember.assert;
var Handlebars;

function TemplateCompiler (inputTree) {
  if (!(this instanceof TemplateCompiler)) {
    return new TemplateCompiler(inputTree);
  }

  Filter.call(this, inputTree); // this._super()

  Handlebars = require('handlebars');
  this.inputTree = inputTree;
};

TemplateCompiler.prototype = Object.create(Filter.prototype);
TemplateCompiler.prototype.constructor = TemplateCompiler;
TemplateCompiler.prototype.extensions = ['hbs', 'handlebars'];
TemplateCompiler.prototype.targetExtension = 'js';

TemplateCompiler.prototype.registerPlugins = function registerPlugins() {
};

TemplateCompiler.prototype.initializeFeatures = function initializeFeatures() {
};

TemplateCompiler.prototype.processString = function (string/*, relativePath */) {
  return "import Handlebars from 'npm:handlebars'; export default Handlebars.template(" + this.precompile(string, false) + ");";
};

TemplateCompiler.prototype.precompile = function(value, asObject) {
  var ast = Handlebars.parse(value);

  var options = {};

  asObject = asObject === undefined ? true : asObject;

  var environment = new Handlebars.Compiler().compile(ast, options);
  return new Handlebars.JavaScriptCompiler().compile(environment, options, undefined, asObject);
};

module.exports = TemplateCompiler;
