/*
1
* Control Flow: if, else if, else, switch
2
* -  Conditional statements control the flow of the application
3
* - we can make decisions in our code based on a true or false conditionals and if 
4
*   its true one code would run or if its false another code would run. 
5
* - if more than one conditional is true, the computer will only run the first conditonal and its 
6
* code block that with the conditonal then it will stop running your code. 
7
*
8
*/
9
10
// if statement: you the key word if
11
let num = 4;
12
13
if(num > 3) {
14
    console.log(num);
15
} else {
16
    console.log(" num is greater than 3");
17
}
18
// prints: the num is greater than 3. 
19
20
21
/* else if: if one condition isnt true, it will go to the next one until it find
22
the truthy condition or it runs the default statement
23
*/
24
25
let c = 6;
26
27
if(c < 3) {
28
    console.log("hi");
29
} else if(c <= 5) { // it runs the code because the condition is true
30
    console.log("how is your day going!");
31
} else{ // this is my default statement the other conditions are true
32
    console.log("Goodnight!");
33
}
34
// prints: Goodnight! 
35
36
// switch statement: use the keyword switch followed by conditions with body 
37
/* - it evaluates an input expression, matching the expression's value to case 
38
clause and excutes the statement associated with that case.
39
- break statement ends the case. 
40
*/
41
42
let f = "get money";
43
44
switch (f) {
45
    
46
    case "crushed up":
47
        console.log("its a cool song but its not my favorite song");
48
        break;
49
        
50
        case "first song":
51
            console.log("I dont like that song");
52
            break;
53
            
54
        case "get money": // this case matches the expression so it would print the following statement
55
            console.log("I love that song, Can you play that for me?");
56
            break;
57
            
58
        default: 
59
            console.log("let me choose my favorite song");
60
}