/*
Write
function combine()
that combines arrays by alternatingly taking elements passed to it.

E.g

combine(['a', 'b', 'c'], [1, 2, 3]) == ['a', 1, 'b', 2, 'c', 3]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) == ['a', 1, 'b', 2, 'c', 3, 4, 5]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) == ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
Arrays can have different lengths.
*/

function combine(...args) {
  let res = [];
  let max = Math.max(...args.map(item => item.length));
    
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < args.length; j++) {
      if (i < args[j].length) {
        res.push(args[j][i]);
      }
    }
  }
  return res;
}

console.log(combine(['a', 'b', 'c'], [1, 2, 3])); // ['a', 1, 'b', 2, 'c', 3]
console.log(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5])); // ['a', 1, 'b', 2, 'c', 3, 4, 5]
console.log(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8])); // ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
console.log(combine( [{ a: 1 }, { b: 2 }], [1, 2] )); // [ { a: 1 }, 1, { b: 2 }, 2 ]
console.log(combine( [{ a: 2, b: 1 }, { a: 1, b: 2 }], [1, 2, 3, 4],[5,6],[7] )); // [ { a: 2, b: 1 }, 1, 5, 7, { a: 1, b: 2 }, 2, 6, 3, 4 ]
