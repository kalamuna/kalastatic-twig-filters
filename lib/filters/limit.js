/* Take the input and provides a truncated version cutting off at the last full word, and appending an ellipsis…
 * @example
 * {{varName|limit}} or {{varName|limit(120)}}
 */
function limit(input, limit) {
  let output;
  const inputString = String(input);
  if (!limit) {
    limit = 140;
  }

  if (inputString.length < limit) {
    return inputString;
  }

  if (inputString.lastIndexOf(' ') > 0) {
    output = inputString.slice(0, inputString.lastIndexOf(' ', limit)) + '…';
  } else {
    output = inputString.slice(0, -1) + '…';
  }

  return output;
}

module.exports = limit;
