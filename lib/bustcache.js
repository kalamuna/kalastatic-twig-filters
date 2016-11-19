/* Simple Cache buster
 * @example
 * {{/path/to/image.jpg|bustcache}}
 */
function bustcache(input){
  return input + "?" + Date.now();
}

module.exports = bustcache;
