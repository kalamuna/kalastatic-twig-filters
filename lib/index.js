'use strict';

/**
 * Adds all the filters to the given Twig intstance.
 */
module.exports = function( twigInstance ) {
  return twigInstance.extend( function(){
    twigInstance.extendFilter('slug', require('./slug'));
    twigInstance.extendFilter('isSlugMatch', require('./isSlugMatch'));
    twigInstance.extendFilter('limit', require('./limit'));
    twigInstance.extendFilter('bustcache', require('./bustcache'));
    twigInstance.extendFilter('phone', require('./phone'));
  });
};
