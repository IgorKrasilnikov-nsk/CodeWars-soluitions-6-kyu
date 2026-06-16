/*
Given a string, remove any characters that are unique from the string.

Example:
input: "abccdefee"
output: "cceee"
*/

function onlyDuplicates(str) {
  const arr = str.split('');
  const counts = arr.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  return arr.filter(char => counts[char] > 1).join('');
}
    
console.log(onlyDuplicates('abccdefee')); // 'cceee'
console.log(onlyDuplicates('hello')); // 'll'
console.log(onlyDuplicates('colloquial')); // 'ollol'
console.log(onlyDuplicates('foundersandcoders')); // 'ondersndoders'
