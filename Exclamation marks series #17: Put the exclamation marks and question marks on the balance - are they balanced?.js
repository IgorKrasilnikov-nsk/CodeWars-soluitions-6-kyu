/*
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?
If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples:
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/
function balance(left, right) {
  let leftSide = left
      .replace( /!/g, '2' )
      .replace( /\?/g, '3' )
      .split('')
      .reduce((sum, current) => sum + (+current), 0);
  let rightSide = right
      .replace( /!/g, '2' )
      .replace( /\?/g, '3' )
      .split('')
      .reduce((sum, current) => sum + (+current), 0);
  
  if (leftSide > rightSide) {
    return "Left";
  } else if (leftSide < rightSide) {
    return "Right";
  } else {
    return "Balance";
  }
}

console.log(balance("!!", "??")); // "Right"
console.log(balance("!??", "?!!")); // "Left"
console.log(balance("!?!!", "?!?")); // "Left"
console.log(balance("!!???!????", "??!!?!!!!!!!")); // "Balance"
