/*
Write a function that returns the smallest distance between two factors of a number. The input will always be a number greater than one.

Example:
13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

Hence the answer will be 2 (=13-11)
*/
function minDistance(n) {
  const divisors = [];
    
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  
  divisors.sort((a, b) => a - b);

  if (divisors.length < 2) return null;

  let minDiff = divisors[1] - divisors[0];
    
  for (let i = 2; i < divisors.length; i++) {
    const diff = divisors[i] - divisors[i - 1];
    if (diff < minDiff) {
      minDiff = diff;
    }
  }
  
  return minDiff;
}

console.log(minDistance(8)); //1
console.log(minDistance(25)); //4
console.log(minDistance(13013)); //2
console.log(minDistance(218683)); //198
