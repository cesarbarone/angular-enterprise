'use strict';
var yeoman = require('yeoman-generator');

var MainGenerator = yeoman.generators.Base.extend({
  
  compose: function() {
    this.composeWith('ng-component', {
      options: {
        'routeDirectory': 'app/',
      }
    }, { local: require.resolve('generator-ng-component/app/index.js') });    
  },
});

module.exports = MainGenerator;
