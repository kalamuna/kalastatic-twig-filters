'use strict';

var filters = require('./filters/index.js');

/**
 * Adds all the filters to the given Twig intstance.
 */
module.exports = function( twigInstance ) {
  return twigInstance.extend( function(){
    for (var filter in filters) {
      twigInstance.extendFilter(filter, filters[filter]);
    }
  });
};
