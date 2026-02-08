/*
Suppose we know the process by which a string s was encoded to a string r (see explanation below). The aim of the kata is to decode this string r to get back the original string s.

Explanation of the encoding process:
input: a string s composed of lowercase letters from "a" to "z", and a positive integer num
we know there is a correspondence between abcde...uvwxyzand 0, 1, 2 ..., 23, 24, 25 : 0 <-> a, 1 <-> b ...
if c is a character of s whose corresponding number is x, apply to x the function f: x-> f(x) = num * x % 26, then find ch the corresponding character of f(x)
Accumulate all these ch in a string r
concatenate num and r and return the result
For example:

encode("mer", 6015)  -->  "6015ekx"

m --> 12,   12 * 6015 % 26 = 4,    4  --> e
e --> 4,     4 * 6015 % 26 = 10,   10 --> k
r --> 17,   17 * 6015 % 26 = 23,   23 --> x

So we get "ekx", hence the output is "6015ekx"

Task:
A string s was encoded to string r by the above process. complete the function to get back s whenever it is possible.
Indeed it can happen that the decoding is impossible for strings composed of whatever letters from "a" to "z" when positive integer num has not been correctly chosen. In that case return "Impossible to decode".

Examples:
decode "6015ekx" -> "mer"
decode "5057aan" -> "Impossible to decode"
*/
function decode(r) {
  let num = +(r.replace(/[^0-9]/g, ''));
  let encodedStr = r.replace(/[^a-zA-Z]/g, '');
  num = num % 26;

  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  if (gcd(num, 26) !== 1) {
    return "Impossible to decode";
  }

  let inv = -1;
  for (let i = 1; i < 26; i++) {
    if ((num * i) % 26 === 1) {
      inv = i;
      break;
    }
  }

  let result = '';
  for (let char of encodedStr) {
    let y = char.charCodeAt(0) - 97;
    let x = (y * inv) % 26;
    if (x < 0) x += 26;  
    result += String.fromCharCode(x + 97);
  }
  return result;
}

console.log(decode("6015ekx")); //"mer"
console.log(decode("5057aan")); //"Impossible to decode"
console.log(decode("1273409kuqhkoynvvknsdwljantzkpnmfgf")); //"uogbucwnddunktsjfanzlurnyxmx"
console.log(decode("1544749cdcizljymhdmvvypyjamowl")); //"mfmwhbpoudfujjozopaugcb"
console.log(decode("105860ymmgegeeiwaigsqkcaeguicc")); //"Impossible to decode"
console.log(decode("1122305vvkhrrcsyfkvejxjfvafzwpsdqgp")); //"rrsxppowmjsrclfljrajtybwviqb"
