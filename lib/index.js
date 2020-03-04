'use strict';

const filters = require('./filters');

/**
 * Adds all the filters to the given Twig intstance.
 */
module.exports = function (twigInstance) {
  return twigInstance.extend(() => {
    for (const filter in filters) {
      if (filters[filter]) {
        twigInstance.extendFilter(filter, filters[filter]);
      }
    }
  });
};
