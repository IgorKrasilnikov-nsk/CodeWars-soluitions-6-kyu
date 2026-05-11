/*
Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

"aa" => "b", "bb" => "c", .. "zz" => "a".
The equal letters do not have to be adjacent.
Repeat this operation until there are no possible substitutions left.
Return a string.

Example:

let str = "zzzab"
    str = "azab"
    str = "bzb"
    str = "cz"
return "cz"

Notes:
-The order of letters in the result is not important.
-The letters "zz" transform into "a".
-There will only be lowercase letters.
*/

function lastSurvivors(str) {
  if (str == '') return '';
    
  let arr = str.split('');
    
  while (new Set(arr).size !== arr.length) {
    for (let i = 0; i < arr.length; i++) {
      let nextIndex = arr.indexOf(arr[i], i + 1);
      
      if (nextIndex !== -1) {
        let code = arr[i].charCodeAt(0);
        let nextChar = code === 122 ? 'a' : String.fromCharCode(code + 1);
        arr[i] = nextChar;
        arr.splice(nextIndex, 1);
        break;
      }
    }
  }
  
  return arr.sort().join('');
}
console.log(lastSurvivors('zzab')); // 'c'
console.log(lastSurvivors('')); // ''
console.log(lastSurvivors('abaa')); // 'ac' 
console.log(lastSurvivors('zzzab')); // 'cz'
