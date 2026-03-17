/*
How much is the fish! (- Scooter )
The ocean is full of colorful fishes. We as programmers want to know the hexadecimal value of these fishes.

Task
Take all hexadecimal valid characters (a,b,c,d,e,f) of the given name and XOR them. Return the result as an integer.

Input
The input is always a string, which can contain spaces, upper and lower case letters but no digits.

Example
fisHex("redlionfish") -> e,d,f -> XOR -> 12
*/

function fisHex(name) {
  let arr = name.toLowerCase().match(/[a-f]/g);
  if (!arr) return 0;

  let val = [];
  let res = 0

  for (let elem of arr) {
    val.push(parseInt( elem, 16 ))
  }

  for (let elem of val) {
    res ^= elem;
  }
  
  return res;
}

console.log(fisHex("pufferfish")); // 1
console.log(fisHex("puffers")); // 14
console.log(fisHex("balloonfish")); // 14
console.log(fisHex("blowfish")); // 4
console.log(fisHex("bubblefish")); // 10
console.log(fisHex("globefish")); // 10
console.log(fisHex("swellfish")); // 1
console.log(fisHex("toadfish")); // 8
console.log(fisHex("toadies")); // 9
console.log(fisHex("honey toads")); // 9
console.log(fisHex("sugar toads")); // 13
console.log(fisHex("sea squab")); // 5
