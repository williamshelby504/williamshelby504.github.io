
/*
*Sting Manipulation: strings are immutable.That means it can't be changed but 
* there are methods you can use to alter the string. String methods are pure because 
* - you use theses methods when you need 
* methods - toUpperCase, toLowerCase, slice, replace, concat, split,
**/ 

// toUpperCase: to upper case the string

let up = 'up';

console.log(up.toUpperCase());  // prints 'UP'

// toLowerCase: to lower case the string

let down = 'DOWN';

console.log(down.toLowerCase()); // prints 'down'

// slice: take out elements from a string from (start, end)

let stuff = 'tjcdef3f';

let newStr = stuff.slice(0,2);

console.log(newStr); // prints 'tj'


// replace: replace a element with a element you provides

let replaceStr = ' I will be great!';

let replaceStr1 = replaceStr.replace('great', 'good');

console.log(replaceStr1); // prints 'I will be good'

// concat: join two strings together using the concat method operator and return a new string

let examp = 'I cant wait';

let strExamp = 'to be successful!';

console.log(examp.concat(' ', strExamp)); // prints I cant wait to be successful!

// split: splits a String object into an array of strings by separating the string into substrings,

// using a specified separator string to determine where to make each split.

let longStr = 'This weekend I made wild rice pilaf and it was wonderful.';

let takeWordsOut = longStr.split(' ');

console.log(takeWordsOut[1]); // prints weekend

console.log(takeWordsOut[6]); // prints rice


// String Manipulation with Operators
    // strings can be concateneated together by using the + operator.

// examples //

var good = 'good';
var day = 'day';
var sir = 'sir!';
console.log(good + day + sir); // prints good day sir!


// STRING PROPERTIES //

// .length - reflects the length of a string.
var firstName = 'william';
console.log(firstName.length); // prints 7
