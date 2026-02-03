/*
Write a pair of functions that convert from ASCII to hexadecimal and the other way around.
To make the conversion well defined, each ASCII character is represented by exactly two hex digits, left-padding with a 0 if needed.
The conversion from ascii to hex should produce lowercase strings (i.e. f6 instead of F6).

Example
ascii to hex: "Look mom, no hands" => "4c6f6f6b206d6f6d2c206e6f2068616e6473"
hex to ascii: "4c6f6f6b206d6f6d2c206e6f2068616e6473" => "Look mom, no hands"
*/

class Converter {
  static toAscii(hex) {
    let result = '';
    
    for (let i = 0; i < hex.length; i += 2) {
      const hexPair = hex.substr(i, 2);
      result += String.fromCharCode(parseInt(hexPair, 16));
    }
    return result;
  }
  
  static toHex(ascii) {
    return [...ascii].map(char => 
        char.charCodeAt(0)
            .toString(16)
            .padStart(2, '0')
            .toLowerCase()
    ).join('');
  }
}

console.log(Converter.toHex("Look mom, no hands")); //"4c6f6f6b206d6f6d2c206e6f2068616e6473"
console.log(Converter.toAscii("4c6f6f6b206d6f6d2c206e6f2068616e6473")); //"Look mom, no hands"
