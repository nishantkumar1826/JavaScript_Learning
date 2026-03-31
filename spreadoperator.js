// // spread operator = ... allows an iterable such as an
//                      array or string to be expanded 
//                      into seperate elements
//                      ( unpacks the elements)
// let numbers = [1,2,3,4,5]
// console.log(numbers)

//  #### To find the maximum number in an array ####
// let maximum = Math.max(...numbers);
// console.log(maximum); 
//  #### To find the minimum number in the array ####
// let minimum = Math.min(...numbers)
// console.log(minimum)

//  Example 02
let username = "Nishant Kumar";
let letters = [...username].join("-");
console.log(letters);

// // Example 03
// let fruits = ["Apple","Mango","Coconut","Cherry"];
// let newFruits = [...fruits];

// console.log(newFruits);
//  -- here we have made a new array but it contains the same elements as the old array

//  //  ## We have to combine two array's using spread operator

let fruits = ["Apple","Mango","Coconut","Cherry"];
let vegetables = ["Tomato","Brinjal","Potato"];
let foods = [...fruits,...vegetables];

console.log(foods);