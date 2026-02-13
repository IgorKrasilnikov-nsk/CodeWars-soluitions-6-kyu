/*
Build a function that finds the sum of all numbers in a series of nested arrays raised to the power of their respective nesting levels.
Numbers in the outer most array should be raised to the power of 1.

For example,
[1, [2], 3, [4, [5]]]
should return 1 + 2*2 + 3 + 4*4 + 5*5*5 == 149
*/

function sumNestedNumbers(arr) {
  function recursiveSum(arr, level) {
    let total = 0;
            
    for (let item of arr) {
      if (Array.isArray(item)) {
        total += recursiveSum(item, level + 1);
      } else {
        total += Math.pow(item, level);
      }
    }
            
    return total;
  }
    
  return recursiveSum(arr, 1);
}

console.log(sumNestedNumbers([1, [2], 3, [4, [5]]])); // 149
