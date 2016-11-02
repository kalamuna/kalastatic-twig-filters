'use strict';

var _str = require("underscore.string"),
    debug = require("debug");


module.exports = function( twigInstance ) {

  return twigInstance.extend( function(){

    /* Slugifies the input using underscore.string
     * @example
     * {{varName|slug}}
     */
    twigInstance.extendFilter('slug', function(input) {
      return _str.slugify(input).toLowerCase();
    });


    /* When slugified and lowercased does input match the slugified and lowercased compareTo?
     * @example
     * {% set navItemIsActivePage = navItem.name|isSlugMatch(title) %}
     * {% if navItemIsActivePage == true %}
     *  <li class="active">…</li>
     * {% else %}
     *  <li>…</li>
     */
    twigInstance.extendFilter('isSlugMatch', function(input,compareTo) {
      return _str.slugify(input).toLowerCase() == _str.slugify(compareTo).toLowerCase();
    });


    /* Take the input and provides a truncated version cutting off at the last full word, and appending an ellipsis…
     * @example
     * {{varName|limit}} or {{varName|limit(120)}}
     */
    twigInstance.extendFilter('limit', function(input,limit) {
      var output,
      input = String ( input );
      if(!limit) limit = 140;
      if( input.length < limit ) return input;
      if( input.lastIndexOf( ' ' ) > 0 ) {
        output = input.substr( 0, input.lastIndexOf( ' ', limit ) ) + '…';
      } else {
        output = input.substr( 0, -1 ) + '…';
      }
      return output;
    });

    /* Simple Cache buster
     * @example
     * {{/path/to/image.jpg|bustcache}}
     */
    twigInstance.extendFilter('bustcache', function(input){
      return input + "?" + Date.now();
    });
  });
};
