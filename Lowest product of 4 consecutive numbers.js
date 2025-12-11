/*
Create a function that receives a string consists of only digit characters ('0' to '9'), and returns the lowest product of 4 consecutive digits within that string.
This should only work if the number has 4 digits or more. If not, return "Number is too small" instead.

Example
"123456789" --> 24    // 1*2*3*4
"35" --> "Number is too small"
*/

function lowestProduct(input) { 
  if (input.length < 4) return "Number is too small";

  let min = Infinity;

  for (let i = 0; i <= input.length - 4; i++) {
     const product = input.slice(i, i + 4)
                          .split('')
                          .reduce((a, b) => a * parseInt(b), 1);
    min = Math.min(min, product);
  }

  return min;
}
console.log(lowestProduct("123456789")); //24
console.log(lowestProduct("234567899")); //120
console.log(lowestProduct("2345611117899")); //1
console.log(lowestProduct("333")); //"Number is too small"
console.log(lowestProduct("1234111")); //4
