/*
In numerology, every number has a certain meaning that expresses someones connection to the universe! This single digit integer can be calculated by adding up every digit in the birthdate: year, month, and date.

Task
Calculate the single integer digit by adding up every digit in the birthdate: month, date, full year, from left to right (MMDDYYYY). If the sum is greater or equal to 10, add up the two digits of the sum.
You will be passed in a Date object corresponding to your language.

Example
For example, with date '06/14/2010'
=> 06142010

sum	  digits left	  action
0	    06142010	      0+0
0	    6142010	        0+6
6	     142010	        6+1
7	      42010	        7+4
11	      2010	      1+1 (sum is greater or equal to 10)
2	        2010	      2+2
4	         010	      4+0
4	          10	      4+1
5	           0	      5+0
5	        done	
So, what is your number?
*/
function solution(date){
  let numder = `${date.getMonth() + 1}${date.getDate()}${date.getFullYear()}`;
  let sum = 0;

  for (let char of numder) {
    sum += +char;
  }
       
  while (sum > 9) {
    let temp = 0;

    while (sum > 0) {
      temp += sum % 10;
      sum = Math.floor(sum / 10);
    }
    
    sum = temp;
  }
  
  return sum;
}
console.log(solution(new Date('10/13/1964'))); //7
console.log(solution(new Date('01/02/2008'))); //4
console.log(solution(new Date('06/14/2010'))); //5
console.log(solution(new Date('02/04/2010'))); //9
console.log(solution(new Date('10/22/1984'))); //9
