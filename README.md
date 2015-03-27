# ember-cli-raw-handlebars

Ember-CLI addon that enables server-side precompilation of raw Handlebars
templates, which can be used in Ember app in addition to Ember-flavoured
Htmlbars/Handlebars templates.

Main aim of this addon is to enable perf optimization where `Ember.View` and
`Ember.Component` have too much overhead.

**This is currently work in progress**
-[x] Compile handlebars templates in `app/raw-templates` folder using Handlebars version in `bower_components/` folder, export them as `<app-name>/raw-templates/template-name` for use on client.
-[] Provide `{{raw-template object}}` helper that renders raw template with given context
-[x] Enable usage of computed properties in raw templates (i.e. using `Ember.get`)
-[] Enable rendering of raw templates witin raw templates by providing appropriate helpers to handlebars.
-[] Add blueprint for installing handlebars into application `bower.js`.
-[] Add some more unit and acceptance tests.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
