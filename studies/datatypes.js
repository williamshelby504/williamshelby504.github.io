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
// number: numberic datatype

var num = 5; 

// string: a character datatype stored inside parenthesis 

let str = "this is a string"; 

// boolean:  true or false

console.log(true);

console.log(false);

// NaN: not a number 

// you check type of a value is a number and it will give you back boolean {true or false} 

typeof NaN; // prints 'number'

console.log(isNaN(33)); // prints false

console.log(isNaN('vvvykb')); // prints true

// undefined: is property of the global object. 

var name;

console.log(name); // prints undefined 

// null: a variable points to no object

var nul = null; 

// array: is a collection of data stored in braces. []

let arr = [ 1, 2, 3]; 

// object: is collection of key value pairs stored in curly braces. {}

let myObj = { favColor: "black", FavFood: "Anything spicy"};

// function: its a resusable block code. It take in two parameters with a function body. 

// You use the keyword function with () {};

function fullName(name1, name2) {

    console.log(name1 + ' ' + name2);

   // run code here 

}

console.log("William", "Shelby"); // prints william shelby

// infinity: its a numberic value representing infinity 

// -infinity: its a number value representing negative infinity.

console.log(Infinity); // prints Infinity

console.log(-Infinity); // prints -Infinity

console.log(Infinity +1); // prints Infinity

//copy by value

var money = 1001;

var newMoney = money; // the value stored in money copied into newMoney

newMoney = 3000; // changing the value in newMoney doesnt changed the value assigned to money

console.log(money); // prints 1001

// copy by reference: copying a value stored in a object makes a reference of that data. 

let obj1 = {

    car: 'Galant',

    color: 'grey',

    speed: 'unknown',

};

obj1['speed'] = 'unknown'; 

obj1['cost'] = '2,000';

let obj2 = obj1;

obj2['color'] = 'black';

console.log(obj2); // prints { car: 'galant', color: 'grey', speed: 'unknown', cost: '2,000' }