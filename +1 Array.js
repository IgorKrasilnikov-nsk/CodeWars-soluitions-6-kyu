/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

If the array is invalid (empty, or contains negative integers or integers with more than 1 digit), return nil (or your language's equivalent).

Examples:

Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6] (4325 + 1 = 4326)
[1, 2, 3, 9] would return [1, 2, 4, 0] (1239 + 1 = 1240)
[9, 9, 9, 9] would return [1, 0, 0, 0, 0] (9999 + 1 = 10000)
[0, 1, 3, 7] would return [0, 1, 3, 8] (0137 + 1 = 0138)

Invalid arrays

[] is invalid because it is empty
[1, -9] is invalid because -9 is not a non-negative integer
[1, 2, 33] is invalid because 33 is not a single-digit integer
*/
function upArray(arr){
  if (arr.length === 0) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    const digit = arr[i];
    
    if (!Number.isInteger(digit) || digit < 0 || digit > 9) {
      return null;
    }
  }

  const result = [...arr];
  let carry = 1;

  for (let i = result.length - 1; i >= 0; i--) {
    const sum = result[i] + carry;
    if (sum === 10) {
      result[i] = 0;
      carry = 1;
    } else {
      result[i] = sum;
      carry = 0;     
      break;         
    }
  }

  if (carry === 1) {
    result.unshift(1);
  }

  return result;
}

console.log(upArray([4,3,2,5])); // [4,3,2,6]
console.log(upArray([2,3,9,9])); // [2,4,0,0]
console.log(upArray([9,9])); // [1,0,0]
console.log(upArray([0,7])); // [0,8]
console.log(upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0])); // [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,1]
console.log(upArray([1,-9])); // null
console.log(upArray([1,10])); // null
