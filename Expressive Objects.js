/*
Write

function evaluate(left, op, right)
that given two operands (left and right) and an operator (op), will evaluate and return the result.

For example:
const left = {
    'multiply': {
        'add': [1, 2, 3, 4, 5],
        'subtract': [5, 6, 7, 8, 9],
        'multiply': [1, 2, 3, 4, 5],
        'divide': [1, 2, 3, 4, 5]
    }
};
// You will reduce each array based on its key. So you will start of with add(ing) [1,2,3,4,5] => 15
// then subtract(ing) [5, 6, 7, 8, 9] => -25 etc. Once all arrays have been reduced, you will perform the
// root key operation on all the reduced arrays. So in this case, you will multiply each reduced array with
// each other. The order is ALWAYS value of 'add' key first, then 'subtract', then 'multiply' and finally 
// 'divide'.

const right = {
    'subtract': {
        'add': [1, 2, 3, 4, 5],
        'subtract': [1, 2, 3, 4, 5],
        'multiply': [1, 2, 3, 4, 5],
        'divide': [1, 2, 3, 4, 5]
    }
};
evaluate(left, 'add', right) === -467.0083333333333
*/

function evaluate(left, op, right) {
  const calc = {
    add:      arr => arr.reduce((a, b) => a + b, 0),
    subtract: arr => arr.slice(1).reduce((a, b) => a - b, arr[0]),
    multiply: arr => arr.reduce((a, b) => a * b, 1),
    divide:   arr => arr.slice(1).reduce((a, b) => a / b, arr[0])
  };

  function compute(obj) {
    const rootOp = Object.keys(obj)[0];
    const data = obj[rootOp];
    const order = ['add', 'subtract', 'multiply', 'divide'];
    const results = order.map(key => calc[key](data[key] || [0]));

    return calc[rootOp](results);
  }

  const L = compute(left);
  const R = compute(right);

  return calc[op]([L, R]);
}

const left = {
  'multiply': {
    'add': [1, 2, 3, 4, 5],
    'subtract': [5, 6, 7, 8, 9],
    'multiply': [1, 2, 3, 4, 5],
    'divide': [1, 2, 3, 4, 5]
  }
};
const right = {
  'subtract': {
    'add': [1, 2, 3, 4, 5],
    'subtract': [1, 2, 3, 4, 5],
    'multiply': [1, 2, 3, 4, 5],
    'divide': [1, 2, 3, 4, 5]
  }
};
console.log(evaluate(left, 'add', right)); //-467.0083333333333
console.log(evaluate(left, 'subtract', right)); //-282.9916666666667
console.log(evaluate(left, 'multiply', right)); //34503.125
console.log(evaluate(left, 'divide', right)); //4.075717779186667
console.log(evaluate(right, 'subtract', left)); //282.9916666666667
console.log(evaluate(right, 'divide', left)); //0.24535555555555558
   
