/* When slugified and lowercased does input match the slugified and lowercased compareTo?
 * @example
 * {% set navItemIsActivePage = navItem.name|isSlugMatch(title) %}
 * {% if navItemIsActivePage == true %}
 *  <li class="active">…</li>
 * {% else %}
 *  <li>…</li>
 */
function isSlugMatch(input, compareTo) {
  const _str = require('underscore.string');
  return _str.slugify(input).toLowerCase() === _str.slugify(compareTo).toLowerCase();
}

module.exports = isSlugMatch;
