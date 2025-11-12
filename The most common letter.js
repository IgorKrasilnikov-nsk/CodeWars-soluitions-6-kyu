/*
Find the most common letter (not a space) in the given string (comprised of at least 3 lowercase words) and replace it with the given letter.
If such letters are two or more, choose the one that appears earliest in the string.

For example:
('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'
*/

function replaceCommon(string, letter) {
  const letters = string.split(" ").join("");
  const count = {};
  let maxCount = 0;
  
  for (const char of letters) {
    count[char] = (count[char] || 0) + 1;

    if (count[char] > maxCount) {
      maxCount = count[char];
    }
  }

  let mostCommon = null;
  
  for (const char of letters) {
    if (count[char] === maxCount) {
      mostCommon = char;
      break;
    }
  }
  
  const regex = new RegExp(mostCommon, 'g');
  return string.replace(regex, letter);
}

console.log(replaceCommon('my mom loves me as never did', 't')); // 'ty tot loves te as never did'
console.log(replaceCommon('real talk bro', 'n')); // 'neal talk bno'
console.log(replaceCommon('great job go ahead', 'k')); // 'grekt job go khekd'
console.log(replaceCommon('yyyaaa twwww ttt uuu ccca', 'p')); // 'yyyppp twwww ttt uuu cccp'
