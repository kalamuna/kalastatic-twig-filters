'use strict';

/**
 * Adds all the filters to the given Twig intstance.
 */
module.exports = function( twigInstance ) {
  return twigInstance.extend( function(){
    twigInstance.extendFilter('slug', require('./filters/slug'));
    twigInstance.extendFilter('isSlugMatch', require('./filters/isSlugMatch'));
    twigInstance.extendFilter('limit', require('./filters/limit'));
    twigInstance.extendFilter('bustcache', require('./filters/bustcache'));
    twigInstance.extendFilter('phone', require('./filters/phone'));
  });
};
