/*
The aim of this Kata is to write a function which will reverse the case of all consecutive duplicate letters in a string. That is, any letters that occur one after the other and are identical.
If the duplicate letters are lowercase then they must be set to uppercase, and if they are uppercase then they need to be changed to lowercase.

Examples:
"puzzles" --> "puZZles"
"massive" --> "maSSive"
"LITTLE"  --> "LIttLE"
"shhh"    --> "sHHH"
*/

function reverseCase(string) {
  let res = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1] && string[i] !== string[i - 1]) {
      res += string[i];
    } else {
      res += (string[i].codePointAt(0) < 97) ? string[i].toLowerCase() : string[i].toUpperCase();
    }
  }
  return res;
}

console.log(reverseCase('hello')); // 'heLLo'
console.log(reverseCase('hello world')); // 'heLLo world'
console.log(reverseCase('HELLO WORLD')); // 'HEllO WORLD'
console.log(reverseCase('HeLlo World')); // 'HeLlo World'
console.log(reverseCase('WWW')); // 'www'
console.log(reverseCase('puzzles')); // 'puZZles'
console.log(reverseCase('massive')); // 'maSSive'
console.log(reverseCase('LITTLE')); // 'LIttLE'
console.log(reverseCase('shhh')); // 'sHHH'
