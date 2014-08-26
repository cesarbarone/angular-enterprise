'use strict'

var yeoman = require('yeoman-generator');
var Generator = yeoman.generators.Base.extend({
  askForModuleName: function() {
    var done = this.async();
    var prompts = {
      name: 'name',
      message: 'Whats is the name of the module?',
    }

    this.prompt(prompts, function (module) {
      this.log(module.name);
      done();
   }.bind(this));
  }
});

module.exports = Generator;
