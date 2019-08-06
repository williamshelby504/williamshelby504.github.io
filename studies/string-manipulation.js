
/*
1
*0. Sting Manipulation: strings are immutable.That means it can't be changed but 
2
* there are methods you can use to alter the string. String methods are pure because 
3
* - you use theses methods when you need 
4
* methods - toUpperCase, toLowerCase, slice, replace, concat, split,
5
* 
6
*
7
**/
8
9
// toUpperCase: to upper case the string
10
let up = 'up';
11
12
console.log(up.toUpperCase());  // prints 'UP'
13
14
// toLowerCase: to lower case the string
15
let down = 'DOWN';
16
17
console.log(down.toLowerCase()); // prints 'down'
18
19
// slice: take out elements from a string from (start, end)
20
let stuff = 'tjcdef3f';
21
let newStr = stuff.slice(0,2);
22
console.log(newStr); // prints 'tj'
23
24
// length: return the length of the string
25
let name = 'william';
26
console.log(name.length); // prints 7
27
28
// replace: replace a element with a element you provides
29
let replaceStr = ' I will be great!';
30
let replaceStr1 = replaceStr.replace('great', 'good');
31
console.log(replaceStr1); // prints 'I will be good'
32
33
// concat: join two strings together using the concat method operator and return a new string
34
let examp = 'I cant wait';
35
let strExamp = 'to be successful!';
36
console.log(examp.concat(' ', strExamp)); // prints I cant wait to be successful!
37
38
// split: splits a String object into an array of strings by separating the string into substrings,
39
// using a specified separator string to determine where to make each split.
40
41
let longStr = 'This weekend I made wild rice pilaf and it was wonderful.';
42
let takeWordsOut = longStr.split(' ');
43
console.log(takeWordsOut[1]); // prints weekend
44
console.log(takeWordsOut[6]); // prints rice