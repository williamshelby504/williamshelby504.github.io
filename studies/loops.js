
/* 
1
*0. Loops: for loop, for-in loops, while loops
2
* - its a built in feature in javascript that allow us to excute a block of code as many
3
* times you want to and you can iterating over a collection of data.
4
*
5
*  For loops/While loops:
6
* - You should use a for loop over a while loop if you know how many times you want to loop through.
7
* - you should use a while loop over a for loop if you dont know how many times you should loop through
8
* - 
9
*/

// for loop: its best to use this loop to iterate through an array

// they are three conditions that goes inside (); the start, stop, incrementing

// loop forward

let arr = [0, 1, 2, 3, 4, 5 , 6, 7 ];

for(let i = 0; i < arr.length; i++) {

    console.log(i); // prints 0,1,2,3,4,5,6,7

}

// looping backwards

for(let i = arr.length - 1; i > -1; i--) {

    console.log(i); // prints 7,6,5,4,3,2,1,0

}

// for-in loops: designed to loop over objects and get keys or the values out of it

// 

var me = {

  name: "william",

  city: 'Algiers',

  favGame: 'The Warriors'

};

 for(let key in me) {

     console.log(key); // prints name, city, favGame

    console.log(me[key]); // prints william, Algiers, The Warriors

 }

 /* while loop: use the keyword while then a parenthesis, states a condition and
41
 while its true it will run this block of code.
42
 */

 var ex = 4;

let greetings = [];

while (ex < 10) { // everytime this condition is true run this code block

  greetings += "guacumole";

  ex++;

}

console.log(greetings); // prints "guacumole" 6 times