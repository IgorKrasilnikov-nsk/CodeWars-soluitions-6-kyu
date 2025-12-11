/*
Create range generator function that will take up to 3 parameters - start value, step and stop value. 
This function should return an iterable object with numbers. For simplicity, assume all parameters to be positive numbers.

Examples:
range(5) --> 1,2,3,4,5
range(3, 7) --> 3,4,5,6,7
range(2, 3, 15) --> 2,5,8,11,14
*/

function range(...args) {
  let [start, step, stop] = args;

  if (args.length === 1) {
    [start, step, stop] = [1, 1, start];
  } else if (args.length === 2) {
    [start, step, stop] = [start, 1, step];
  }

  const result = [];

  for (let i = start; i <= stop; i += step) {
    result.push(i);
  }
  
  return result;
}

console.log(range(5)); // [1,2,3,4,5]
console.log(range(3, 7)); // [3,4,5,6,7]
console.log(range(2, 3, 15)); // [2,5,8,11,14]
console.log(range(1 ,1)); // [1]
console.log(range(1, 1, 1)); // [1]
console.log(range(2 ,1)); // []
