/*
Your task is to write a higher order function for chaining together a list of unary functions. 
In other words, it should return a function that does a left fold on the given functions.

chained([a,b,c,d])(input)
Should yield the same result as

d(c(b(a(input))))
*/
function chained(functions) {
  return input => functions.reduce((res, func) => func(res), input);
}
   
const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;
const chain1 = chained([addOne, double, square]);
console.log(chain1(2)); // 36
console.log(chain1(5)); // 144

const chain2 = chained([x => x * 3, x => x - 2, x => x.toString()]);
console.log(chain2(4)); //"10"
