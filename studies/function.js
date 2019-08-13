
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

* 7. Closures: is where the inner function can access the outer function variables

* 8. Scope: refers to what variables are accessible and where we can access them. 

*  Global scope - anything outside the function scope

*  Local scope - anthing inside the function body
* Functions hold their variables in a scope to protect them from thier protect scope.

* Child scope can access the variables of it's parent scope plus global scope but the parent scope doesnt

* have access to the child scope.

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