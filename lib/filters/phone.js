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
  // Make sure the format is passed in corrently.
  if (Array.isArray(format)) {
    format = format[0];
  }
  // If the format is not provided, use a default one.
  if (!format) {
    format = '(NNN) NNN-NNNN';
  }
  // Set a default value if no format was passed.
  var number = phoneFormatter.normalize(input);
  return phoneFormatter.format(number, format);
};
