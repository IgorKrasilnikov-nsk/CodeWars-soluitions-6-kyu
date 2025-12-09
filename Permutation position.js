/*
#Permutation position In this kata you will have to permutate through a string of lowercase letters, each permutation will start at a and you must calculate how many iterations it takes to reach the current permutation.
##examples:

input: 'a'
result: 1

input: 'c'
result: 3

input: 'z'
result: 26

input: 'foo'
result: 3759

input: 'aba'
result: 27

input: 'abb'
result: 28
*/

function permutationPosition(perm) {
  const n = perm.length;
  let position = 0;
  const base = 26;

  for (let i = 0; i < n; i++) {
    const char = perm[i];
    const value = char.charCodeAt(0) - 'a'.charCodeAt(0);
    position = position * base + value;
  }
  
  return position + 1;
}

console.log(permutationPosition('a')); // 1
console.log(permutationPosition('c')); // 3
console.log(permutationPosition('z')); // 26
console.log(permutationPosition('foo')); // 3759
console.log(permutationPosition('aba')); // 27
console.log(permutationPosition('abb')); // 28
