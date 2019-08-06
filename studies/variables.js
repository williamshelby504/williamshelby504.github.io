
/*
1
 * VARIABLES:
2
 *
3
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
4
 * are named identifiers that can point to values of a particular type, like a Number, String,
5
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
6
 * can CHANGE the value (and type of value) to which they point.
7
 *
8
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
9
 * variable.
10
 *
11
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
12
 */
13
14
// 1. declaration //
15
var name;
16
17
/*
18
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
19
 * it to anything
20
 */
21
console.log(name); // prints => undefined
22
23
// 2. initialization or assignment //
24
name = 'Khalil';
25
console.log(name); // prints => Khalil
26
27
// 3. re-assignment //
28
name = 'Tillie';
29
console.log(name); // prints => Tillie
30
31
// NOTE: We can assign and re-assign anything to a variable with the var keyword  - we cannot do this with constants //
32
var myVar = 1;
33
myVar = true;
34
myVar = "Anything";
35
console.log(myVar); // prints "Anything"
36
37
38
/* We can also declare variables with var, let, and const. You uses the key words
39
"var", "let", or "const". 
40
*/
41
42
/* var is a global variable. you can reassigned it at anytime. The variable and its name 
43
* will always be read by the computer first then whats assigned to it will get read. 
44
*/
45
var myName = "William";
46
myName = "Will"; // I reassigned name to Will
47
console.log(myName); // prints Will
48
49
// let is local scope variable. You can use it like var. its blocked scope
50
let favFood = "Hot Wings";
51
favFood = "ALWAYS HOT WINGS";
52
console.log(favFood); // prints chicken wings  
53
54
// const is block scope variable. You cant reassigned it. its blocked scope
55
const message = "Hey";
56
console.log(message); // prints Hey 
57
message = "hi";
58
console.log(message); // typeError: assignment to constant variable
59
60
/* Hoisting is what will the computer read first before it excutes your code. 
61
Before the statements of a program are executed all var and function declaractions are hoisted to the top.
62
Because of this, var values will not throw a ReferenceErrors if you try referencing them before they are declared
63
*/
64
65
console.log(name); // prints undefined
66
 var newName = "Khalil"; 
67
 console.log(newName); // prints Khalil
68
 
69
 /* let and const values are not hoisted and therefore if you referencing them before they are declared 
70
 you will get a ReferenceError.
71
 */
72
 
73
 console.log(poof); // prints ReferenceError
74
 console.log(F); // prints RefereneceError
75
 
76
 let poof = "fairy";
77
 let F = "Is";
78