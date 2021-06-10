// ******************************************
// 1. Working with regular expressions
// ******************************************

// In JavaScript there are 2 ways to going about this:

// A. Constructor
// ******************************************

const regex = new RegExp('Hello');
const result = regex.test('Hello World!');

// console.log(result);
// Expected: true

// B. Literal
// ******************************************

const match = /Hello/;
const output = match.test('Hello World!');

// console.log(output);
// Expected: true

// In both scenarios, the variables 'regex' and 'match' are objects.
// However, the first example has a more familiar look, instancing an object with a `string` as a parameter.
// In the second scenario things look a bit weird, there is something that resembles a `string` but instead of quotes is wrapped in `/`.
//  As it turns out both ways represent the same.

// ******************************************
// 2. RegExp.prototype.test()
// ******************************************

// The test() method executes a search for a match between a regular expression and a specified string. Returns `true` or `false`.

const regexExpression = str => {
  const regex = RegExp('foo');
  return regex.test(str);
};

// console.log(regexExpression('table football'));     //true

// ******************************************
// 3. RegExp.prototype.exec()
// ******************************************

// The `exec(`) method executes a search for a match in a specified string. Returns a result array, or null.

const regexExec = str => {
  const regex = /foo/g;
  let output = '';
  let result;
  while ((result = regex.exec(str)) !== null) {
    output += `Found ${result[0]} at ${result.index}.\n`;
  }
  return output;
};

// console.log(regexExec('table football, foosball'));
// Found foo at 6.
// Found foo at 16.

// ******************************************
// 4. String.prototype.match()
// ******************************************

// The `match()` method retrieves the result of matching a string against a regular expression.
const matchString = str => {
  const regex = /[A-Z]/g;
  return (found = str.match(regex));
};

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// console.log(matchString(paragraph));  // ["T", "I"]

// ******************************************
// 5. String.prototype.matchAll()
// ******************************************

// The `matchAll()` method returns an iterator of all results matching a string against a regular expression, including capturing groups.

const regexMatchAll = str => {
  const regex = /t(e)(st(\d?))/g;
  return (arr = [...str.matchAll(regex)]);
};

// console.log(regexMatchAll('test1'));
// ["test1", "e", "st1", "1", index: 0, input: "test1", groups: undefined]

// console.log(regexMatchAll('test1test2'));
// (2) [Array(4), Array(4)]
// 0: (4) ["test1", "e", "st1", "1", index: 0, input: "test1test2", groups: undefined]
// 1: (4) ["test2", "e", "st2", "2", index: 5, input: "test1test2", groups: undefined]
// length: 2
// __proto__: Array(0)

// ******************************************
// 6. String.prototype.search()
// ******************************************

// The `search()` method executes a search for a match between a regular expression and this string object. It returns the index at which the matched happened, or -1 if there is no match.

// Find the position of any character that is not a word character or white space
const regexSearch = str => {
  const regex = /[^\w\s]/g;
  return str.search(regex);
};

const text =
  'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// console.log(regexSearch(text)); // 43; position of dot (.);
// 61 position of (?) after omitting dot(.);

// ******************************************
// 7. String.prototype.replace()
// ******************************************

// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.

// If the pattern is a string but not RegExp, only the first occurrence will be replaced.

// Note that the original string will remain unchanged.

const regexReplace = str => {
  const regex = /dog/gi;
  return str.replace(regex, 'monkey');
};

const stringReplace = str => {
  return str.replace('dog', 'monkey');
};

const para =
  'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// console.log(regexReplace(para));
// The quick brown fox jumps over the lazy monkey. If the monkey barked, was it really lazy?

// console.log(stringReplace(para));
// The quick brown fox jumps over the lazy monkey. If the dog barked, was it really lazy?

// Compare the differences of outputs

// ******************************************
// 8. String.prototype.replaceAll()
// ******************************************

// The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.

const regexReplaceAll = str => {
  const regex = /dog/gi;
  return str.replaceAll('dog', 'monkey');
  // return str.replaceAll(regex, 'monkey');
};

// console.log(regexReplaceAll(para));
// The quick brown fox jumps over the lazy monkey. If the monkey barked, was it really lazy?

// Similar to before (7), but now we replace all the matches.

// avoid this function as we can always do it with regular expressions and using the replace() function plus is a function that is not supported in all platforms/browsers.

// ******************************************
// 9. String.prototype.split()
// ******************************************

// The split() method divides a String into an ordered set of substrings, puts these substrings into an array, and returns the array.
// The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method’s call.
const splitString = (str, regex) => {
  const sections = str.split(regex);
  return sections;
};

const string2 = 'a1 b2 c3 d4 la f5';
const string3 = 'a1b2 c3d4 laf5';

// console.log(splitString(string2, /\d/)); // ["a", " b", " c", " d", " la f", ""];

// console.log(splitString(string2, /[a-z]/));
//  ["", "1 ", "2 ", "3 ", "4 ", "", " ", "5"]

// console.log(splitString(string2, /\s/));
//["a1", "b2", "c3", "d4", "la", "f5"]


// ******************************************
// 10. Anchoring
// ******************************************

// To match `hello` wherever it was put inside the string --> /hello/

// If you want to match strings that start with `hello`, use the (^) operator: /^hello/

// If you want to match strings that end with `world`, use the ($) operator: /world$/

const regexAnchoring = (regex, str)=>{
  return regex.test(str);
}

// console.log(regexAnchoring(/^hello/, "hello world"));   //true
// console.log(regexAnchoring(/^hello/, "It is JS, hello world!"));    //false
// console.log(regexAnchoring(/world$/, "hello world"));   //true
// console.log(regexAnchoring(/world$/, "hello world!"));    //false

// To find strings with wildcards in the middle you can use (.*), which matches any characted repeated 0 or more times:

console.log(regexAnchoring(/^hello.*Juan$/, 'hello world Juan'))  //true;
console.log(regexAnchoring(/^hello.*Juan$/, "helloJuan"));    //true
console.log(regexAnchoring(/^hello.*Juan$/, 'hello Juan!')) //false;
