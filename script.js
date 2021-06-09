// 1. Working with regular expressions

// In JavaScript there are 2 ways to going about this:

// A. Constructor
const regex = new RegExp('Hello');
const result = regex.test('Hello World!');

// console.log(result);
// Expected: true

// B. Literal
const match = /Hello/;
const output = match.test('Hello World!');

// console.log(output);
// Expected: true

// In both scenarios, the variables 'regex' and 'match' are objects. 
// However, the first example has a more familiar look, instancing an object with a `string` as a parameter.
// In the second scenario things look a bit weird, there is something that resembles a `string` but instead of quotes is wrapped in `/`.
//  As it turns out both ways represent the same. 

// 2.
// RegExp.prototype.test()
// The test() method executes a search for a match between a regular expression and a specified string. Returns `true` or `false`.

const regexExpression = (str)=>{

const regex = RegExp('foo')
console.log(regex.test(str));
}

console.log(regexExpression('table football'));



