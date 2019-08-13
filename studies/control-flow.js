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
// if statement: you the key word if

let num = 4;

if (num > 3) {
    
    console.log(num);
    
}
else {
    
    console.log(" num is greater than 3");
    
}

// prints: the num is greater than 3. 

/* else if: if one condition isnt true, it will go to the next one until it find
22
the truthy condition or it runs the default statement
23
*/

let c = 6;

if (c < 3) {
    
    console.log("hi");
    
}
else if (c <= 5) { // it runs the code because the condition is true
    
    console.log("how is your day going!");
    
}
else { // this is my default statement the other conditions are true
    
    console.log("Goodnight!");
    
}

// prints: Goodnight! 

// switch statement: use the keyword switch followed by conditions with body 

/* - it evaluates an input expression, matching the expression's value to case 
38
clause and excutes the statement associated with that case.
39
- break statement ends the case. 
40
*/

let f = "get money";

switch (f) {

    case "crushed up":
        
        console.log("its a cool song but its not my favorite song");
        
        break;
        

        
    case "first song":
        
        console.log("I dont like that song");
        
        break;
        
    case "get money": // this case matches the expression so it would print the following statement
        
        console.log("I love that song, Can you play that for me?");
        
        break;
        

        
    default:
        
        console.log("let me choose my favorite song");
        
}
