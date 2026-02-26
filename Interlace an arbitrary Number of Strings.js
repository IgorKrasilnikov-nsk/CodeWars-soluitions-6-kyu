/*
Write a function that takes an arbitrary number of strings and interlaces them (combines them by alternating characters from each string).
For example combineStrings('abc', '123') should return 'a1b2c3'.
If the strings are different lengths the function should interlace them until each string runs out, continuing to add characters from the remaining strings.
For example combineStrings('abcd', '123') should return 'a1b2c3d'.
The function should take any number of arguments and combine them.
For example combineStrings('abc', '123', '£$%') should return 'a1£b2$c3%'.
Note: if only one argument is passed return only that string. If no arguments are passed return an empty string.
*/

function combineStrings(...strings) {
  if (strings.length == 0) return "";
  if (strings.length == 1) return strings[0];
        
  let res =''
  const maxLength = Math.max(...strings.map(str => str.length));
    
  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < strings.length; j++) {
      if (i < strings[j].length) {
        res += strings[j][i];
      }
    }
  }
  return res;
}

console.log(combineStrings('abc', '123')); // 'a1b2c3'
console.log(combineStrings('abcd', '123')); // 'a1b2c3d'
console.log(combineStrings('abcd', '123', '£$%')); // 'a1£b2$c3%d'
 
