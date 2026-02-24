/*
Story:
Jumbo Juice makes a fresh juice out of fruits of your choice.Jumbo Juice charges $5 for regular fruits and $7 for special ones. 
Regular fruits are Banana, Orange, Apple, Lemon and Grapes. Special ones are Avocado, Strawberry and Mango. 
Others fruits that are not listed are also available upon request. Those extra special fruits cost $9 per each. 
There is no limit on how many fruits she/he picks.The price of a cup of juice is the mean of price of chosen fruits. 
In case of decimal number (ex. $5.99), output should be the nearest integer (use the standard rounding function of your language of choice).

Input:
The function will receive an array of strings, each with the name of a fruit. The recognition of names should be case insensitive. There is no case of an empty array input.

Example:
['Mango', 'Banana', 'Avocado'] //the price of this juice bottle is (7+5+7)/3 = $6($6.333333...)
*/

function mixFruit (arr) {
  let regular = ['banana', 'orange', 'apple', 'lemon', 'grapes'];
  let special = ['avocado', 'strawberry', 'mango'];
  let res = 0;
  
  for (let fruit of arr) {
    if (regular.indexOf(fruit.toLowerCase()) !== -1 ) {
      res += 5;
    } else if (special.indexOf(fruit.toLowerCase()) !== -1 ) {
      res += 7;
    } else {
      res += 9;
    }
  }
  return Math.round(res / arr.length)
}

console.log(mixFruit(['banana','mango','avocado'])); // 6
console.log(mixFruit(['melon','Mango','kiwi'])); // 8
console.log(mixFruit(['watermelon','cherry','avocado'])); // 8
console.log(mixFruit(['apple','Banana'])); // 5
console.log(mixFruit(['watermelon','lime','tomato'])); // 9
console.log(mixFruit(['blackBerry','coconut','avocado'])); // 8
console.log(mixFruit(['waterMelon','mango'])); // 8
console.log(mixFruit(['watermelon','pEach'])); // 9
console.log(mixFruit(['watermelon','Orange','grapes'])); // 6
console.log(mixFruit(['watermelon'])); // 9
console.log(mixFruit(['BlACKbeRrY','cOcONuT','avoCaDo'])); // 8
