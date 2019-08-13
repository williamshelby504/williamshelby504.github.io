
/*
 * VARIABLES:
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our variable.
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //

var name;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized it to anything
 */

console.log(name); // prints => undefined

// 2. initialization or assignment //

name = 'Khalil';

console.log(name); // prints => Khalil

// 3. re-assignment //

name = 'Tillie';

console.log(name); // prints => Tillie
// NOTE: We can assign and re-assign anything to a variable with the var keyword  - we cannot do this with constants //

var myVar = 1;

myVar = true;

myVar = "Anything";
console.log(myVar); // prints "Anything"

/* We can also declare variables with var, let, and const. You uses the key words
"var", "let", or "const". 
*/

/* var is a global variable. you can reassigned it at anytime. The variable and its name will always be read by the computer first then whats assigned to it will get read. 
*/

var myName = "William";

myName = "Will"; // I reassigned name to Will

console.log(myName); // prints Will

// let is local scope variable. You can use it like var. its blocked scope

let favFood = "Hot Wings";

favFood = "ALWAYS HOT WINGS";

console.log(favFood); // prints chicken wings  

// const is block scope variable. You cant reassigned it. its blocked scope

const message = "Hey";

console.log(message); // prints Hey 

message = "hi";

console.log(message); // typeError: assignment to constant variable

/* Hoisting is what will the computer read first before it excutes your code. 
Before the statements of a program are executed all var and function declaractions are hoisted to the top.
Because of this, var values will not throw a ReferenceErrors if you try referencing them before they are declared
*/

console.log(name); // prints undefined

 var newName = "Khalil"; 

 console.log(newName); // prints Khalil

 /* let and const values are not hoisted and therefore if you referencing them before they are declared 
 you will get a ReferenceError.
 */

 

 console.log(poof); // prints ReferenceError

 console.log(F); // prints RefereneceError

 let poof = "fairy";

 let F = "Is";
