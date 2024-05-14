/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }
  return newArr;
};

// Examples
const plusone = function(n) { return n + 1; };
const plusI = function(n, i) { return n + i; };
const constant = function() { return 42; };

console.log(map([1,2,3], plusone)); // [2,3,4]
console.log(map([1,2,3], plusI));   // [1,3,5]
console.log(map([10,20,30], constant)); // [42,42,42]