//  .map() = accepts a callback and applies that function
//           to each element of an array, that return a new array
 


//  // Example 01
// const numbers = [1,2,3,4,5];
// const squareNumbers =numbers.map(square);
// const cubeNumbers = numbers.map(cube);
// console.log(cubeNumbers);

// function square(element){
//     return Math.pow(element, 2)
// }
// function cube(element){
//     return Math.pow(element, 3)
// }

// // example 02
// to get all students name in upper case

// const students = ["Nishant","Nishika","Gurveen"];
// const studentsUpper = students.map(upperCase);
// console.log(studentsUpper)

// function upperCase(element){
//     return element.toUpperCase();
// }

// // Example 03
// to get all names in lower case
const students = ["Nishant","Nishika","Gurveen"];
const studentsLower = students.map(lowerCase);
console.log(studentsLower);

function lowerCase(element){
    return element.toLowerCase();
}