//  vairable scope = where a variable is recognized 
//                   and accessible (local vs global)


let x = 3;   // global scope
let y = 5;

function1();
function2();
function function1(){
    // let x = 1;      //it has a local scope ill it is declared inside a function
    console.log(x);
}
function function2(){
    // let y = 2;
    console.log(x);
}
console.log(function1)
