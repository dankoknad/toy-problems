/*
Given a set of n elements find their kth permutation. Consider the following set of elements:
NUMBER:
1
2
3
All permutations of the above elements are (with ordering):

1st - 123
2nd - 132
3rd - 213
4th - 231
5th - 312
6th - 321

*/
function factorial(n, a, b) {
  if (n === 0 || n === 1) {
    return 1;
  }
  var a = 0;
  var b = 1;
  for (var i = 2; i < n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return a + b;
}

function findKthPermutation(v, k, result) {
  if (!v || v.length === 0) {
    return +result;
  }

  var n = v.length;
  var count = factorial(n - 1);
  var selected = Math.floor((k - 1) / count);
  result += v[selected];
  v.splice(selected, 1);
  k = k - (count * selected);

  return findKthPermutation(v, k, result);
}
