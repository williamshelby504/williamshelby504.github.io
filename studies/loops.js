
/* 

*Loops: for loop, for-in loops, while loops

* - its a built in feature in javascript that allow us to excute a block of code as many

* times you want to and you can iterating over a collection of data.

*  For loops/While loops:

* - You should use a for loop over a while loop if you know how many times you want to loop through.

* - you should use a while loop over a for loop if you dont know how many times you should loop through

*/

// for loop: its best to use this loop to iterate through an array

// they are three conditions that goes inside (); the start, stop, incrementing

// loop forward

let arr = [0, 1, 2, 3, 4, 5 , 6, 7 ];
// the start is when i assign i to 0
//the stopping condition is when I compare i to the  length of the array.
// then I increment by one
for(let i = 0; i < arr.length; i++) {

    console.log(i); // prints 0,1,2,3,4,5,6,7

}

// looping backwards

for(let i = arr.length - 1; i > -1; i--) {

    console.log(i); // prints 7,6,5,4,3,2,1,0

}

/*
 * The For In Loop iterates through the properties of an object and executes the code once for each property of the object.
 */

var me = {

  name: "william",

  city: 'Algiers',

  favGame: 'The Warriors'

};
// for in loops dont have a stopping condition.
 for(let key in me) {

     console.log(key); // prints name, city, favGame

    console.log(me[key]); // prints william, Algiers, The Warriors

 }

 /* while loops:
 * While the condition is true, the block of statements following the while statement is executed.
 * This is repeated until the condition becomes false.
 * A stopping condition must always be included to prevent an infinite loop.
 */

 var ex = 4;

let greetings = [];

while (ex < 10) { // everytime this condition is true run this code block

  greetings += "guacumole";

  ex++;

}

console.log(greetings); // prints "guacumole" 6 times