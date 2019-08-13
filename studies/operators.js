/* 
1
*
2
*0.  Operators: 
3
* -   Operators can take action on datatypes like assigning them, comparing them, 
4
* or include them in arthimetic operators. Operators are categorized by 
5
* what they can do and how many operands they require. Operands are the values that 
6
* operators act on. 
7
* Ternary - three values
8
* Binary  - two values 
9
* Unary - one values 
10
* 
11
*
12
*1. Assignment operators:  =, +=, -=, *=, /=, %= 
13
* - assigns a value to its left over operand based on the value to  whats on the right operand. 
14
* 
15
*2. Arithmetic operators: addition (+), subtract (-), divide (/), multiplication (*). 
16
* - takes a numberical value as their operands and return a new single value.
17
*
18
*
19
*3. Comparsion & Binary comparsion operators:[  <, >, <=, >=,  ===, !== ]
20
* - compare two values that evaluates to boolean, true or false 
21
*
22
*
23
*4. Logical operators: &&, ||, !.
24
*-  && And operator:checks to see if both condtions are true. 
25
*- || Or operator: checks to see if one of the conditions are true
26
* - ! Bang operator: flips the value truthiness 
27
* 
28
*5. Unary operators: typeof, !, - 
29
* - is a operator with only one operand
30
* - flips the truthiness of a value or check
31
* - can check the type of a value
32
* - can turn a value negative
33
* 
34
*
35
*6. Ternary operators: condition ? value1 : value2;
36
* - its a conditional operator thats three operand. 
37
* - the operator can have one or two values based on a condition
38
* - if the condition is true, the operator has value of value1 or 
39
* otherwise it has the value of value2.
40
*/
// Assignment operator: assign a datatype to a variable 

// the operators: =, +=,-=, /=, %=, *=
// assignment operator: assign a datatype to a variable

// the operator: = 

var name = "khalil"; // I assign khalil to the variable name.

// additional  assignment operator: adds value assigned to the variable and assigns the result to the variable

// the operator: +=

var num = 0;

num += 5;

console.log(num); // prints  5 

//  subtraction assignment operator: subtracts value assigned to the variable and assigns the result to the variable

// the operator: -=

var total = 100;

total -= 55;

console.log(total); // prints 45

/* multiplication assignment operator: multiplies the value assigned to the variable 
65
and assigns the result to the variable */ 

// the operator: *=

var multi = 9;

multi *= 9;

console.log(multi); // prints 81

// divison assignment operator: divides the value assigned to the variable and assigns the result to the variable

// the operator: /=

var div = 49;

div /= 7;

console.log(div); // prints 7

// remainder assignment operator: divides the value assigned to the variable and assigns the remainder to the variable

// the operator: %= 

var remain = 11; 

remain %= 5;

console.log(remain); // prints 1

// Arithmetic operator: { +, - , /, * }

// addition: add two numbers. 

// the operator: + 

console.log(5 + 8); // prints 13

// subtract: subtract two numbers. 

// the operator: - 

console.log(20 - 10); // prints 10

// divide: divide two numbers 

// the operator: / 

console.log(49 / 7); // prints 7

// Comparsion & Binary comparsion operator: [  <, >, <=, >=,  ===, !==, /,]

// less than: the number on the left of the less than operator is less than the number of right operator.

// the operator: < 

// returns boolean: true or false. 

console.log(5 < 7); // prints true
console.log(3573289771224 < 3); // prints false

// less than or equal to: the number on the left of the operator is less than or equal to the number of right operator

// the operator: <= 

// return boolean: true or false

console.log(6 <= 10); // prints true

console.log(8 <= 5); // prints false

// greater than: the number on the left of the operator is greater than the number of right operator

// the operator: >

// return boolean: true or false

console.log(8 > 3); // prints true

console.log(4 > -1); // prints false

/*greater than or equal to: the number on the left of the operator is greater than or equal to the numnber right of the 
128
operator.
129
the operator: >= 
130
returns booleans: true or false
131
*/

console.log(5 >= 4); // prints true

console.log(7 >= 33); // prints false 

// strict equal to: checks to see if the datatype is stricty equal to the datatype left of the operator

// the operator: === 

// returns boolean: true or false

console.log(98 === 98); // prints true

console.log(22 === "22"); // prints false

// srictly not equal to : checks to see if the dataype is not strictly equal to the datatype on the left of the operator

// the operator: !== 

// returns booleans: true or false

console.log( 2 !== 3); // prints true

console.log(2 !== 2); // prints false

// Logical operators: { &&, ||, ! }

// And operator: && 

// both conditions have to be true

// returns boolean: true or false

console.log(5 > 4 && 67 < 100); // prints true

console.log("william" === "william" && 5 < 2); // prints false

// Or operator: || 

// one of the condtions have to be true

// returns boolean: true or false

console.log(21 > 5 || 5 < 2); // prints true

console.log(44 < 32 || 55 > 111); // prints false
// Bang operator: !

// flips the truthiness of the value

// returns boolean: true or false 

console.log(!true); // prints false

console.log(!false); // prints true

// Unary operator: typeof

// returns a string of type of datatype the value are 

console.log(typeof 2); // prints "number"

console.log(typeof "2"); // prints "string"

// Ternary operator: condition ? value1 : value2

// based on the condition is true

var myAge = 19;

var age = (myAge < 21) ? "my age" : "not my age";

console.log(age); // prints "my age"