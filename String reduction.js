/*
In this Kata, we are going to see how a Hash (or Map or dict) can be used to keep track of characters in a string.

Consider two strings "aabcdefg" and "fbd". How many characters do we have to remove from the first string to get the second string? 
Although not the only way to solve this, we could create a Hash of counts for each string and see which character counts are different. 
That should get us close to the answer. I will leave the rest to you.

For this example, solve("aabcdefg","fbd") = 5. Also, solve("xyz","yxxz") = 0, because we cannot get second string from the first since the second string is longer.

More examples in the test cases.
Good luck!
*/
function solve(a, b) {
  if (a.length < b.length) return 0;

  let countA = {};
  let countB = {};

  for (let charA of a) {
    countA[charA] = (countA[charA] || 0) + 1;
  }

  for (let charB of b) {
    countB[charB] = (countB[charB] || 0) + 1;
  }

  for (let char in countB) {
    if (!countA[char] || countA[char] < countB[char]) {
      return 0;
    }
  }
  
  return a.length - b.length;
};

console.log(solve("xyz","yxz")); // 0
console.log(solve("abcxyz","ayxz")); // 2
console.log(solve("abcdexyz","yxz")); // 5
console.log(solve("axyyz","yxxz")); // 0
console.log(solve("abdegfg","ffdb")); // 0
console.log(solve("aabcdefg","fbd")); // 5
console.log(solve("aabcdefg","fdb")); // 5
console.log(solve("xyz","yxxz")); // 0
