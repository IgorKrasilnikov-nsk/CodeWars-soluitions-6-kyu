/*
Write a function that:
returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.
*/

function isIntArray(arr) {
  return Array.isArray(arr) && arr.every(item => 
    typeof item === 'number' && !isNaN(item) && item % 1 === 0);
}

console.log(isIntArray([])); true
console.log(isIntArray([1, 2, 3, 4])); true
console.log(isIntArray([-11, -12, -13, -14])); true
console.log(isIntArray([1.0, 2.0, 3.0])); true
console.log(isIntArray(true)); false
console.log(isIntArray(null)); false
console.log(isIntArray(undefined)); false
console.log(isIntArray('')); false
console.log(isIntArray([null])); false
console.log(isIntArray([undefined])); false
console.log(isIntArray([NaN])); false
console.log(isIntArray([1.0, 2.0, 3.0001])); false
console.log(isIntArray(['-1'])); false
console.log(isIntArray([1.23e-7, 2])); false
console.log(isIntArray([1.2, 1.8, 3])); false
