/*
Create a function which takes a string as input and returns an array containing the characters in the string whose binary representation of their ASCII code has more zeroes than ones.
The returned array must not contain duplicate characters. Only the first occurrence of each character in the input should be included, keeping the order of appearance.
All input will be valid strings of length > 0. Leading zeroes in binary should not be counted.

Examples:
input = 'abcdea'

characters = [
     'a',     'b',        'c',       'd',       'e',       'a'
]
ascii codes = [
    97,       98,         99,        100,       101,       97
]

binary = [
  0b1100001, 0b1100010, 0b1100011, 0b1100100, 0b1100101, 0b1100001
]

has more zeroes than ones = [
    true,      true,      false,     true,      false,      true
]

result = [
    'a',        'b',                 'd'                  // duplicate character
]


'DIGEST'--> ['D','I','E','T']
*/

function moreZeros(s){
  let result = [];

  for (let char of s) {
    const code = char.charCodeAt(0);
    const binary = code.toString(2);
        
    let zero = 0;
    let ones = 0;
        
    for (let digit of binary) {
      if (digit === '0') zero++;
        else ones++;
    }

    if (zero > ones && !result.includes(char)) {
      result.push(char);
    }
  }
  
  return result;
}

console.log(moreZeros('abcde')); //['a','b','d']
console.log(moreZeros('Great job!')); // ['a', ' ', 'b', '!']
console.log(moreZeros('DIGEST')); //['D','I','E','T']
console.log(moreZeros('abcdeabcde')); // ['a','b','d']
