// function = A section of reusable code.
//                 declare code once, use it whenever you want.
//                Call the function to execute that code


//  # Function to wish happy birthday
// function happyBirthday(username, age){
//     console.log("Happy Birthday to you");
//     console.log("Happy Birthday to you");
//     console.log(`Happy Birthday dear ${username}!`);
//     console.log("May god bless you");
//     console.log(`you are ${age} years old`);
// }
// happyBirthday("Nishant",21);

//  Function to perform mathamatical operation on two number 
// function add(x,y){
//     return x+y;
// }
// function subtract(x,y){
//     return x-y;
// }
// function multiply(x,y){
//     return x*y;
// }
// function divide(x,y){
//     return x/y;
// }
// function isEven(number){
//     if(number %2 ===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(11))


//  Example 02 using ternary opeator
function isvalidEmail(email){
    return email.includes("@") ? true : false;
}
console.log(isvalidEmail("isbro@gmail.com"));
console.log(isvalidEmail("lodalassun.com"));
    