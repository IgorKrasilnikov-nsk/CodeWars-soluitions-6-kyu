/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
Your task is to process a string with "#" symbols.
Examples:
"abc#d##c" ==> "ac"
"abc##d######" ==> ""
"#######" ==> ""
"" ==> ""
*/

function cleanString(s) {
  let arr = s.split('');
  let result = [];

  for (let char of arr) {
    if (char === '#') {
      if (result.length > 0) {
        result.pop();
      }
    } else {
      result.push(char);
    }
  }
  return result.join('');
}

console.log(cleanString('abc#d##c')); //'ac'
console.log(cleanString('abc####d##c#')); // ''
