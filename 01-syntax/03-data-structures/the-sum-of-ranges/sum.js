/**
 *  [The sum of a range](file:///projects/Eloquent-JavaScript/html/04_data.html#h_8ZspxiCEC/)
 *
 */
/* global sum range */
function sum(arr) {
  var result = 0;
  var j;
  for (j = 0; j < arr.length; j++) {
    result += arr[j];
  }
  return result;
}
console.log(sum(range(1, 10)));
// → 55
