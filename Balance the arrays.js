/*
Check that the two provided arrays both contain the same number of different unique items, regardless of order. For example in the following:
[a,a,a,a,b,b] and [c,c,c,d,c,d]
Both arrays have four of one item and two of another, so balance should return true.
*/

function balance(arr1, arr2){
  let counts1 = {};
  let counts2 = {};
  
  for (let item of arr1) {
    counts1[item] = (counts1[item] || 0) + 1;
  }
  
  for (let item of arr2) {
    counts2[item] = (counts2[item] || 0) + 1;
  }
  
  let res1 = Object.values(counts1);
  let res2 = Object.values(counts2);
  return res1.sort().join(',') == res2.sort().join(',');
}

console.log( balance(["a","a","a","a","b","b"], ["c","c","c","d","c","d"]) ); // true
console.log( balance(["a","a","a","a","a","b","b","b"], ["c","c","c","c","c","d","d","d"]) ); // true
console.log( balance(["a","a"], ["c"]) ); // false
console.log( balance(["a","b","c","d","e","f","g","g"], ["h","h","i","j","k","l","m","n"]) ); // true
console.log( balance(["a"], ["c"]) ); // true
console.log( balance(["a","b","c","d","e","f","g","g"], ["h","h","i","j","k","l","m","m"]) ); // false
