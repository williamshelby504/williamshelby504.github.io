/* 
1
* Dataytypes:
2
* 0. In Javascript, it has two different datatypes simple/primitive and 
3
* complex datatypes.
4
*
5
* 1. Simple/Primitive dataypes: 
6
* - simple datatypes are immutable. they dont hold or collect other values and 
7
*  it operation on simple values return new simple values. They dont alter the 
8
* original value. copy by value
9
*
10
* - list of simple datatypes: number, string, boolean, Nan, undefined, and null
11
* 
12
*
13
* 2. Complex datatypes:
14
* - complex datatypes can take in other values so they can be indefinite size. 
15
* - they are copied by reference when assigning or passing.
16
* - list of complex datatypes: array, object, and function 
17
*
18
*
19
*3. The differnce between simple and complex datatypes are that simple datatypes dont
20
* hold or collect value. Complex datatype can take other values can grow into any size.
21
* - Simple datatypes are copied by value and complex datatypes are copied by Reference
22
* when assigning or passing it. You cant alter the original simple datatype. 
23
*
24
*
25
*4. The way simple datatypes are copied by value it takes the copy of the data 
26
* and dont alter the original data. The way complex datatypes are copied by reference it 
27
* stores the value from another object and it changes the original object.
28
*
29
*/
30
31
// number: numberic datatype
32
var num = 5; 
33
34
// string: a character datatype stored inside parenthesis 
35
let str = "this is a string"; 
36
37
// boolean:  true or false
38
console.log(true);
39
console.log(false);
40
41
// NaN: not a number 
42
// you check type of a value is a number and it will give you back boolean {true or false} 
43
typeof NaN; // prints 'number'
44
console.log(isNaN(33)); // prints false
45
console.log(isNaN('vvvykb')); // prints true
46
47
// undefined: is property of the global object. 
48
var name;
49
console.log(name); // prints undefined 
50
51
// null: a variable points to no object
52
var nul = null; 
53
54
// array: is a collection of data stored in braces. []
55
56
let arr = [ 1, 2, 3]; 
57
58
// object: is collection of key value pairs stored in curly braces. {}
59
let myObj = { favColor: "black", FavFood: "Anything spicy"};
60
61
// function: its a resusable block code. It take in two parameters with a function body. 
62
// You use the keyword function with () {};
63
function fullName(name1, name2) {
64
    
65
    console.log(name1 + ' ' + name2);
66
   // run code here 
67
}
68
console.log("William", "Shelby"); // prints titus charles 
69
70
// infinity: its a numberic value representing infinity 
71
// -infinity: its a number value representing negative infinity.
72
73
console.log(Infinity); // prints Infinity
74
console.log(-Infinity); // prints -Infinity
75
console.log(Infinity +1); // prints Infinity
76
77
//copy by value
78
var money = 1001;
79
var newMoney = money; // the value stored in money copied into newMoney
80
newMoney = 3000; // changing the value in newMoney doesnt changed the value assigned to money
81
console.log(money); // prints 1001
82
83
// copy by reference: copying a value stored in a object makes a reference of that data. 
84
let obj1 = {
85
    car: 'Galant',
86
    color: 'grey',
87
    speed: 'unknown',
88
};
89
90
obj1['speed'] = 'unknown'; 
91
obj1['cost'] = '2,000';
92
93
let obj2 = obj1;
94
obj2['color'] = 'black';
95
console.log(obj2); // prints { car: 'audi', color: 'blue', speed: 'V8', cost: '33,000' }