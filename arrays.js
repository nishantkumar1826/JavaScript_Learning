// // array = a variable like structure that can hold 
// //          more than 1 value

// let fruit = ["apple","orange","banana"];

// fruit[0]="coconut"
// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);

// //  Built in method of arrays

// // ####  Push ####
// //  used to push an element in the end of an array
// let fruits = ["apple","mango","cherry"];

// fruits.push("coconut"); 

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

//// #### pop ####
// used to delete an element from the  end of an array 
// let fruits = ["apple","mango","cherry"];

// fruits.pop(); 

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);



// #### unshift method ####
//  used to add an element in the beginning of an array
// let fruits = ["apple","mango","cherry"];

// fruits.unshift("mango"); 

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// // #### Shift Method ####
//  used to remove first element of the arrays
// let fruits = ["apple","mango","cherry",];
// fruits.push("coconut")

// fruits.shift(); 

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// // #### length ####
//  to get the length of an array 
// let numOfFruits = fruits.length;
// console.log(numOfFruits)

// // #### index ####
// to find the index of an element an array
// let index = fruits.indexOf("coconut")
// console.log(index);


//  #### Using loop[s through an array
// let fruits = ["apple","mango","chikoo","banana"]
// for(let i = 0; i< fruits.length; i+=2){
//     console.log(fruits[i]);
// }

// // #### Sort Function ####
// to sort the elements of an array in alphabetical
// let fruits = ["apple","mango","cherry"];
// fruits.sort()
// console.log(fruits)


// // #### Sorting in reverse order ####
let fruits = ["apple","mango","cherry"];
fruits.sort().reverse();
console.log(fruits)


