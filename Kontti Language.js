/*
Kontti language is a finnish word play game.
You add -kontti to the end of each word and then swap their characters until and including the first vowel ("aeiouy");
For example the word tame becomes kome-tantti; fruity becomes koity-fruntti and so on.
If no vowel is present, the word stays the same.
Write a string method that turns a sentence into kontti language!
*/

String.prototype.kontti = function() {
  return this.split(' ').map(word => {
    const match = word.match(/^([^aeiouy]*[aeiouy])(.*)$/i);
    if (!match) return word;
    return 'ko' + match[2] + '-' + match[1] + 'ntti';
  }).join(' ');
}

console.log("lamppu".kontti());        // "komppu-lantti"
console.log("lamppu sofia".kontti());  // "komppu-lantti kofia-sontti"
console.log("silly game".kontti());    // "kolly-sintti kome-gantti"
console.log("".kontti());              // ""
console.log("silly grrr".kontti());    // "kolly-sintti grrr"
