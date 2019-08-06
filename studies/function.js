
/*
1
*
2
* 0. Functions: allow us to create of block and we can use it any many times we want
3
*
4
*
5
* 1. First we must define the function meaning giving your function something to do and 
6
* give it a specific code to excute
7
*
8
* 2. Function parameters are placeholders for the arguments thats going to be passed to the function.
9
* - Function arguments takes place of the parameters when passing into a function.
10
*
11
* 3. The syntax for a name function: keyword function | nameofthefunction with parenthesis then curly braces
12
function person(nickname, hairStyle) {
13
    
14
};
15
16
*
17
* 4. You assign a variable to a function by making a variable with name then
18
use the assignment operator to assign it to the function.
19
20
let func = function() {
21
    
22
};
23
*
24
* 5. Functions can control its inputs but how many arguments it takes in. 
25
* - we specify outputs by the return statement inside of the function body
26
*
27
* 6. Functions can see and modify variables in the parent scope not the global scope
28
*
29
*
30
* 7. Closures: is where the inner function can access the outer function variables
31
*
32
*
33
* 8. Scope: refers to what variables are accessible and where we can access them. 
34
*  Global scope - anything outside the function scope
35
*  Local scope - anthing inside the function body
36
*
37
* Functions hold their variables in a scope to protect them from thier protect scope.
38
* Child scope can access the variables of it's parent scope plus global scope but the parent scope doesnt
39
* have access to the child scope.
40
*
41
*
42
*
43
**/
44
45
// named function: 
46
function movie(title, year) {
47
    return title + ' ' + year;
48
}
49
movie('The Warriors', '1979');
50
51
// function expression: 
52
// we make a function expression by assigning a fucntion to a variable
53
let fullName = function(firstName, lastName) {
54
    return firstName + ' ' + lastName;
55
}
56
57
58
//Functions can see and modify variables in the global scope 
59
60
// ex 
61
let name = "William";
62
function newName() {
63
name = "Antonio";
64
} 
65
// console.log(name);// prints William
66
newName();// to access Antonio I have to call the function then check for name
67
console.log(name); // prints Antonio