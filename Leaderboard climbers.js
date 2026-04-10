/*
Leaderboard climbers
In this kata you will be given a leaderboard of unique names for example:
['John',
 'Brian',
 'Jim',
 'Dave',
 'Fred']

Then you will be given a list of strings for example:
['Dave +1', 'Fred +4', 'Brian -1']

Then you sort the leaderboard.
The steps for our example would be:
# Dave up 1
['John',
 'Brian',
 'Dave',
 'Jim',
 'Fred']
# Fred up 4
['Fred',
 'John',
 'Brian',
 'Dave',
 'Jim']
# Brian down 1
['Fred',
 'John',
 'Dave',
 'Brian',
 'Jim']

Then once you have done this you need to return the leaderboard.
All inputs will be valid. All strings in the second list will never ask to move a name up higher or lower than possible eg. "John +3" could not be added to the end of the second input list in the example above.
The strings in the second list will always be something in the leaderboard followed by a space and a + or - sign followed by a number.
*/

function leaderboardSort(leaderboard, changes) {
  let result = [...leaderboard];
    
  for (const change of changes) {
    const match = change.match(/([a-zA-Z]+)\s*([+-])(\d+)/);
    const name = match[1];
    const sign = match[2];
    const number = Number(match[3]);
        
    const oldIndex = result.indexOf(name);
    result.splice(oldIndex, 1);
        
    let newIndex;

    if (sign === '+') {
      newIndex = oldIndex - number;
    } else {
      newIndex = oldIndex + number;
    }
            
    if (newIndex < 0) newIndex = 0;
    if (newIndex > result.length) newIndex = result.length;
            
    result.splice(newIndex, 0, name);
  }
  
  return result;
}

console.log(leaderboardSort(['John', 'Brian', 'Jim', 'Dave', 'Fred'], ['Dave +1', 'Fred +4', 'Brian -1'])); //['Fred', 'John', 'Dave', 'Brian', 'Jim']
console.log(leaderboardSort(['Bob', 'Larry', 'Kevin', 'Jack', 'Max'], ['Max +3', 'Kevin -1', 'Kevin +3'])); //['Bob', 'Kevin', 'Max', 'Larry', 'Jack']
