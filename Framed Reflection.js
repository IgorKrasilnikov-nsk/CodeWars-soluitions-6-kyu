/*
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:
'Hello World'
would give:

**********
* olleH' *
* 'dlroW *
**********

Words in your solution should be left-aligned.
*/
function mirror(text) {
  const words = text.split(' ');
  console.log(words);
  const reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });
  console.log(reversedWords);
  const maxLength = Math.max(...reversedWords.map(word => word.length));
  console.log(maxLength);
  const border = '*'.repeat(maxLength + 4);
  console.log(border);
  const lines = reversedWords.map(word => {
    const paddedWord = word.padEnd(maxLength, ' ');
    return `* ${paddedWord} *`;
  });
  console.log(lines);
  return [border, ...lines, border].join('\n');
}
console.log(mirror("Hello World")); 
/*
**********
* olleH' *
* 'dlroW *
**********
*/
console.log(mirror('Codewars'));
/*
************
* srawedoC *
************
*/
