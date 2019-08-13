
/*
*Functions: allow us to create of block and we can use it any many times we want

* 1. First we must define the function meaning giving your function something to do and 
* give it a specific code to excute

* 2. Function parameters are placeholders for the arguments thats going to be passed to the function.

* - Function arguments takes place of the parameters when passing into a function.

* 3. The syntax for a name function: keyword function | nameofthefunction with parenthesis then curly braces
function person(nickname, hairStyle) {

};

* 4. You assign a variable to a function by making a variable with name then

use the assignment operator to assign it to the function.

let func = function() {

};

* 5. Functions can control its inputs but how many arguments it takes in. 

* - we specify outputs by the return statement inside of the function body

* 6. Functions can see and modify variables in the parent scope not the global scope

**/

// named function: 

function movie(title, year) {

    return title + ' ' + year;

}

movie('The Warriors', '1979');

// function expression: 

// we make a function expression by assigning a fucntion to a variable

let fullName = function(firstName, lastName) {

    return firstName + ' ' + lastName;

}

//Functions can see and modify variables in the global scope 

// ex 

let name = "William";

function newName() {

name = "Antonio";

} 

console.log(name); // prints William

newName();// to access Antonio I have to call the function then check for name

console.log(name); // prints Antonio

 // SCOPE
 /*
  * Scope refers to how and where variables are accessible throughout your code.
  * There are 2 scope types.
  *
  * 1) GLOBAL SCOPE
  * If a variable is defined outside of a function, it is in the global scope and can be accessed.
  */
  
let x = 10;
function studies() {
    x = 50;
}
console.log(x); // 10
studies();
console.log(x); // 50

 /*
  * 2) LOCAL SCOPE
  * Local scope is the area inside of a function body.
  * Anything declared in here is only available within the function or other functions declared within it.
  */
  
function studies1() {
    let y = 27;
}
// console.log(y); // reference error

// CLOSURE
/*
 * Closure is when a function references variables inside another function body.
 * In the example below, closure occurs on line 110.
 * It is trying to reference outside of its function.
 */
 
function myName(firstName, lastName) {
    var greeting = 'Hello';
    return firstName + lastName;
    function closure() {
        return greeting + firstName + lastName;
    }
}
myName('william', 'shelby'); // outputs william shelby