/*
Array Exchange and Reversing
It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed. 
The arrays may be of unequal lengths, in which case you will have to expand the shorter one in-place.

# before
my_array = ['a', 'b', 'c']
other_array = [1, 2, 3]

exchange_arrays(my_array, other_array)

# after
my_array == [3, 2, 1]
other_array == ['c', 'b', 'a']
*/

function exchangeWith(a, b) {
  const reversedB = [...b].reverse();
  const reversedA = [...a].reverse();

  a.length = 0;
  a.push(...reversedB);

  b.length = 0;
  b.push(...reversedA);
}

const a = ["1", "2", "3", "4", "5", "6", "7"];
const b = ["a", "b", "c"];

exchangeWith(a, b);
console.log(a); // ["c", "b", "a"]
console.log(b); // ["7", "6", "5", "4", "3", "2", "1"]
