var phoneFormatter = require('phone-formatter');

module.exports = function(input) {
  var number = phoneFormatter.normalize(input);
  return phoneFormatter.format(number, '(NNN) NNN-NNNN');
};
