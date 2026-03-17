/*
In this Kata you will be given an array (or another language-appropriate collection) representing contestant ranks.
You must eliminate contestant in series of rounds comparing consecutive pairs of ranks and store all initial and intermediate results in an array.

During one round, the lowest rank of a pair is eliminated while the highest proceeds to the next round. 
This goes on until one contestant only is left. If the number of contestants is odd, the last one of the current array becomes the first of the next round.

At the end of the competition, return the results of all the rounds in the form of array of arrays.

Example:
input = [9, 5, 4, 7, 6, 3, 8, 2];

output = [
  [9, 5, 4, 7, 6, 3, 8, 2],  // first round is initial input
  [9, 7, 6, 8],              // results of 9 vs 5, 4 vs 7, 6 vs 3, and 8 vs 2 
  [9, 8],                    // results of 9 vs 7 and 6 vs 8
  [9]                        // results of 9 vs 8
];

Notes:
- Array length will alway be >= 2 and <= 100
- Elements of the array will always be >=1 and <= 100
- Input must not be altered.
*/

const tourney = array => {
  if (array.length === 0) return [];
  const result = [array];
  
  function playRound(current, output) {
    if (current.length === 1) return output;
    
    const next = [];
        
    if (current.length % 2 === 1) {
      next.push(current[current.length - 1]);
      
      for (let i = 0; i < current.length - 1; i += 2) {
        next.push(Math.max(current[i], current[i + 1]));
      }
      
    } else {
      for (let i = 0; i < current.length; i += 2) {
        next.push(Math.max(current[i], current[i + 1]));
      }
    }
    
    output.push(next);
    
    return playRound(next, output);
  }
  
  return playRound(array, result);
}

console.log(tourney([]));  
console.log(tourney([9, 5, 4, 7, 6, 3, 8, 2]));
