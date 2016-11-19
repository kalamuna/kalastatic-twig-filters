/* Take the input and provides a truncated version cutting off at the last full word, and appending an ellipsis…
 * @example
 * {{varName|limit}} or {{varName|limit(120)}}
 */
function limit(input, limit) {
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
}

module.exports = limit;
