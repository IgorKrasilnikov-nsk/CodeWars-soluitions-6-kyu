/*
Welcome young Jedi!
In this Kata, you must create a function that takes an amount of US currency in cents, and returns a dictionary/hash which shows the least amount of coins used to make up that amount.
The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢).
Therefore, the dictionary returned should contain exactly 4 key/value pairs.

Notes:
If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
If a float is passed into the function, its value should be rounded down, and the resulting dictionary should never contain fractions of a coin.

Examples:
56    ==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
-435  ==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
4.935 ==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}
*/

function looseChange(cents){
  if (cents <= 0) {
    return { 'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0 };
  }

  cents = Math.floor(cents);

  return {
    'Nickels': Math.floor(cents % 25 % 10 / 5),
    'Pennies': cents % 25 % 10 % 5,
    'Dimes': Math.floor(cents % 25 / 10),
    'Quarters': Math.floor(cents / 25)
  };
}

console.log(looseChange(56)); // {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2});
console.log(looseChange(100)); // {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 4});
console.log(looseChange(0)); // {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0});
console.log(looseChange(-3)); // {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
console.log(looseChange(7.9)); // {'Nickels': 1, 'Pennies': 2, 'Dimes': 0, 'Quarters': 0}
