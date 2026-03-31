//  ternary operator = a shortcut to if{} and else{} statements
//                     helps to assing a variable based on a condition 
//                     condition ? codeIftrue : codeIffalse;



//  Exampple 02
// let isStudent = true;
// let message = isStudent ? "You are a student" : "you are not a student";
// console.log(message);

//  Example 03
let purchaseAmount = 110;
let discountt = purchaseAmount >= 100 ? 10:0;
console.log(`Your total discount is $${purchaseAmount - purchaseAmount*(discountt/100)}`);



// Alternate Method
// let age = 18;

// let message;

// if(age>=18){
//     message = "You are an adult"
// }
// else{
//     message = "You are a minor"
// }

