/*
* Control Flow: if, else if, else, switch
* -  Conditional statements control the flow of the application
* - we can make decisions in our code based on a true or false conditionals and if 
*   its true one code would run or if its false another code would run. 
* - if more than one conditional is true, the computer will only run the first conditonal and its 
* code block that with the conditonal then it will stop running your code. 
*
*/
/*
 * An IF STATEMENT is used when we want a piece of code to run only if a certain condition is met.
 * An If statement is written starting with the keyword if.
 * Next, inside of parentheses, a testing condition that asks a true or false question.
 * Last, inside of curly braces, an action to be performed if the condition results in true.
 * There can be multiple statements inside the curly braces to be executed.
 * Everything inside of the curly braces is Code Block.
 */

let num = 4;

if (num > 3) {
    
    console.log(num);
    
}
else {
    
    console.log(" num is greater than 3");
    
}

// prints: the num is greater than 3. 

/* else if: if one condition isnt true, it will go to the next one until it find
the truthy condition or it runs the default statement
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

/*
   * While If Else statements work quite effectively, there is a cleaner way to control the glow if you have many If statements.
   * Switch statements replace multiple Ifs by comparing a value with multiple variants.
   * These variants are called case blocks.
   * If a match is made, switch executes the case clause until the end of the switch or a break statement is reached.
   * A break statement will stop the code from executing any further.
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
