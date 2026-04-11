// destructuring = extract values from arrays and objects,
//                 then assing them to variables in a convenient way 
//                 [] = to perform araay destructuring
//                 {} = tp perfrom object destructuring

//   Example 01
// // SWAP the value of two variables

// let a = 1;
// let b = 2;

// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// //Example 03

// // Swap two elements in an array
// const colours = ["red","black","green","blue","white"];

// [colours[0],colours[4]] = [colours[4],colours[0]];
// console.log(colours)


// // Example 03
// // Assing arrray elements to variables
// const colours = ["red","black","green","blue","white"];
// const[firstColour, secondColour, thirdColour, ...extraColours] = colours;
// console.log(firstColour);
// console.log(secondColour);
// console.log(thirdColour);
// console.log(extraColours);

// // example 04
// // Extract values from objects

// const person1 = {
//     firstname: "Nishant",
//     lastname: "Kumar",
//     age: "21",
//     job: "Student",

// }
// const person2 = {
//     firstname: "Pulkit",
//     lastname: "Kohli",
//     age: "22",
//     job: "Cleaner",

// }

// const {firstname, lastname, age, job} = person1;

// console.log(firstname);

// Example 05
// DESTRUCTURING IN FUNCTION PARAMETERS

function displayPerson({firstname, lastname, age, job}){
    console.log(`name: ${firstname} ${lastname}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstname: "Nishant",
    lastname: "Kumar",
    age: "21",
    job: "Student",

}
const person2 = {
    firstname: "Pulkit",
    lastname: "Kohli",
    age: "22",
    job: "Cleaner",

}

displayPerson(person1);
displayPerson(person2);




