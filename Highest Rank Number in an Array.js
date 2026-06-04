/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples:
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function highestRank(arr) {
  const freq = new Map();
  for (let num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  
  let maxCount = 0;
  for (let count of freq.values()) {
    if (count > maxCount) maxCount = count;
  }
    
  const mostFrequent = [];
  for (let [num, count] of freq) {
    if (count === maxCount) {
      mostFrequent.push(num);
    }
  }
    
  return Math.max(...mostFrequent);
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); // 12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])); // 12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])); // 3
