/*
Reverse all elements in an array that occur an odd number of times.
['a', 'a', 'b', 'c', 'c', 'd'] will output:
['a', 'a', 'd', 'c', 'c', 'b']
Since there are 2 a's and 2 c's, they will stay in place. There is 1 d and 1 b, so they will swap places.
*/

function reverseOddCount(array) {
  const map = new Map();
    
  array.forEach(item => {
    map.set(item, (map.get(item) || 0) + 1);
  });

  const oddItems = [...map.entries()]
    .filter(([item, count]) => count % 2 !== 0)
    .map(([item, count]) => item);

  const oddElements = [];

  array.forEach(item => {
    if (oddItems.includes(item)) {
      oddElements.push(item);
    }
  });
  
  const reversed = [...oddElements].reverse();
  
  let index = 0;
  const result = array.map(item => {
    if (oddItems.includes(item)) {
        return reversed[index++];
    }
    return item;
  });
  
  return result;
}
    
console.log(reverseOddCount(['a', 'a', 'b', 'c', 'c', 'd'])); // ['a', 'a', 'd', 'c', 'c', 'b']
   
