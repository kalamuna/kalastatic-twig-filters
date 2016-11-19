var phoneFormatter = require('phone-formatter');

/* Apply a nice, user facing format to a phone number.
 *
 * See https://github.com/stevekinney/node-phone-formatter for options and use.
 *
 * @example
 * {{varName|phone}}
 * {{varName|phone('(NNN) NNN-NNNN')}}
 */
module.exports = function(input, format) {
  // Set a default value if no format was passed.
  format = typeof(format)==='undefined' ? '(NNN) NNN-NNNN' : format;
  var number = phoneFormatter.normalize(input);
  return phoneFormatter.format(number, format);
};
