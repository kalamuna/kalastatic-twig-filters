/* Slugifies the input using underscore.string
 * @example
 * {{varName|slug}}
 */
function slug(input) {
  const _str = require('underscore.string');
  return _str.slugify(input).toLowerCase();
}

module.exports = slug;
