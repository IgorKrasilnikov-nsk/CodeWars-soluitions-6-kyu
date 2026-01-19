/*
You are given two strings (st1, st2) as inputs. Your task is to return a string containing the numbers in st2 which are not in str1. Make sure the numbers are returned in ascending order. All inputs will be a string of numbers.

Here are some examples:
findAdded('4455446', '447555446666'); // '56667'
findAdded('44554466', '447554466'); // '7'
findAdded('9876521', '9876543211'); // '134'
findAdded('678', '876'); // ''
findAdded('678', '6'); // ''
*/

function findAdded(st1, st2){
  const count = (str) => {
    const freq = {};
    for (const d of str) freq[d] = (freq[d] || 0) + 1;
    return freq;
  };

  const c1 = count(st1);
  const c2 = count(st2);

  return Object.keys(c2)
    .map(d => Array(c2[d] - (c1[d] || 0)).fill(d))
    .filter(arr => arr.length > 0)
    .flat()
    .sort()
    .join('');
}

console.log(findAdded('4455446', '447555446666')); // '56667'
console.log(findAdded('44554466', '447554466')); // '7'
console.log(findAdded('9876521', '9876543211')); // '134'
console.log(findAdded('678', '876')); // ''
console.log(findAdded('678', '6')); // ''
