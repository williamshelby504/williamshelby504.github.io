
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
10
11
// for loop: its best to use this loop to iterate through an array
12
// they are three conditions that goes inside (); the start, stop, incrementing
13
// loop forward
14
15
let arr = [0, 1, 2, 3, 4, 5 , 6, 7 ];
16
17
for(let i = 0; i < arr.length; i++) {
18
    console.log(i); // prints 0,1,2,3,4,5,6,7
19
}
20
21
// looping backwards
22
for(let i = arr.length - 1; i > -1; i--) {
23
    console.log(i); // prints 7,6,5,4,3,2,1,0
24
}
25
26
27
// for-in loops: designed to loop over objects and get keys or the values out of it
28
// 
29
var me = {
30
  name: "william",
31
  city: 'Algiers',
32
  favGame: 'The Warriors'
33
};
34
35
 for(let key in person) {
36
     console.log(key); // prints name, city, favGame
37
    console.log(person[key]); // prints william, Algiers, The Warriors
38
 }
39
 
40
 /* while loop: use the keyword while then a parenthesis, states a condition and
41
 while its true it will run this block of code.
42
 */
43
 
44
 var ex = 4;
45
let greetings = [];
46
while (i < 10) { // everytime this condition is true run this code block
47
  greetings += "guacumole";
48
  i++;
49
}
50
console.log(greetings); // prints "guacumole" 6 times