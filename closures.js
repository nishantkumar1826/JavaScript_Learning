//  closures :- A function defined inside of another function, 
//              the ineer function has access to the variables 
//              and scope of th outer function.    
//              Allow for private variables and state maintanece
//              Used frequently in JS frmaworks: react, Vue, Angular

// function outer(){ //outer ke andr inner use kiya h
//     let message = "Hello"
//      function inner(){
//         console.log(message);

//      }
//      inner(); // inner ko invoke krne k liye end me call krna pdega
// }
// outer();

// Example 02
// Counter program
function createCounter(){
let count = 0; // no security of the variable
function increment(){
    
    count++;
    console.log(`Count increased to ${count}`);
        }
        return {increment};
}

const counter = createCounter();

counter.increment();
