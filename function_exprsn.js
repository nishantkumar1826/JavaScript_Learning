// // function declaration = define a reusable block of code 
// //                        that performs a specific task

// function hello(){
//     console.log("hello World")
// }

// function expression = a way to define function as values or variables

//  Example 01
const hello = function(){
    console.log("hello world");
}

hello();

// // Example 02 for squaring numbers
// const numbers = [1,2,3,4,5,6,7];
// const squares = numbers.map(square);

// function square(element){
//     return Math.pow(element, 2);
// }
// console.log(squares)
// Mtehod 02
// const numbers = [1,2,3,4,5,6 ];
// const squares = numbers.map(function(element){
//     return Math.pow(element, 2);
// });
// console.log(squares)

// example 03 for cubing numbers 
const numbers = [1,2,3,4,5,6];
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});
console.log(cubes)