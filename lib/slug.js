var _str = require("underscore.string");

/* Slugifies the input using underscore.string
 * @example
 * {{varName|slug}}
 */
function slug(input) {
  return _str.slugify(input).toLowerCase();
}

module.exports = slug;
