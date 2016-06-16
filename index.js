/* jshint node: true */
'use strict';

var path = require('path');
var checker = require('ember-cli-version-checker');
var rawHandlebarsCompiler = require('./raw-handlebars-compiler');
var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-raw-handlebars',

  init: function() {
    checker.assertAbove(this, '2.4.3');
  },

  included: function(app) {
  },

  projectConfig: function() {
    return this.project.config(process.env.EMBER_ENV);
  },

  rawTemplatesPath: function() {
    return this.app.options.rawTemplatesPath || path.join(this.app.trees.app._directoryPath, 'raw-templates');
  },

  treeForApp: function(tree) {
    var rawTemplates = mergeTrees([this.rawTemplatesPath()]);
    rawTemplates = new Funnel(rawTemplates, { destDir: 'raw-templates' });
    rawTemplates = this.processRawTemplates(rawTemplates);
    return this.mergeTrees([tree, rawTemplates]);
  },

  processRawTemplates: function(tree) {
    return rawHandlebarsCompiler(tree);
  }
};
