/*
Given a positive integer as input, return the output as a string in the following format:
Each digit (from left to right) multiplied by the corresponding power of 10, so that the sum equals the input number.
  If the digit is zero, exclude it from the output;
  For the last digit, just use the digit itself, without *1.
  
Examples:
0     -->  ""
56    -->  "5*10+6"
60    -->  "6*10"
999   -->  "9*100+9*10+9"
10004 -->  "1*10000+4"

Note: input >= 0
*/

function simplify(number) {
  const str = String(number);
  const res = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') continue;
        
    if (i === str.length - 1) {
      res.push(str[i]);
    } else {
      res.push(str[i] + '*' + (10 ** (str.length - 1 - i)));
    }
  }
    
  return res.join('+');
}

console.log(simplify(0)); // ""
console.log(simplify(56)); // "5*10+6"
console.log(simplify(60)); // "6*10"
console.log(simplify(600)); // "6*100"
console.log(simplify(660)); // "6*100+6*10"
console.log(simplify(999)); // "9*100+9*10+9"
console.log(simplify(10004)); // "1*10000+4"
console.log(simplify(8964631)); // "8*1000000+9*100000+6*10000+4*1000+6*100+3*10+1"
