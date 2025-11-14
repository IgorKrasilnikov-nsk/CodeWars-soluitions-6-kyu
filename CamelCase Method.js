/*
Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
*/

String.prototype.camelCase=function(){
  return this
    .trim()
    .split(" ")
    .filter(item => item.length > 0)
    .map(item => item[0].toUpperCase() + item.slice(1).toLowerCase())
    .join('');
}

console.log("hello case".camelCase()); //"HelloCase"
console.log("camel case word".camelCase()); //"CamelCaseWord"
