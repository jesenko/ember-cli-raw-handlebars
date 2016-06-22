'use strict';
const Handlebars = require('handlebars');
const Filter = require('broccoli-filter');

class TemplateCompiler extends Filter {
  constructor(inputTree) {
    super(inputTree);
    this.inputTree = inputTree;
    this.extensions = ['hbs', 'handlebars'];
    this.targetExtension = 'js';
  }
  registerPlugins() {}
  initializeFeatures() {}
  processString(string/*, relativePath */) {
    return `
      import Handlebars from 'npm:handlebars';

      export default Handlebars.template(${this.precompile(string, false)})
    `;
  }
  precompile(value, asObject = true) {
    const ast = Handlebars.parse(value);
    const options = {};

    const environment = new Handlebars.Compiler().compile(ast, options);
    return new Handlebars.JavaScriptCompiler().compile(environment, options, undefined, asObject);
  }
};

module.exports = TemplateCompiler;
