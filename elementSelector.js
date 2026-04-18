// element selectors = Methods used to target and manipulate HTML elements 
//                     They allow you tom select one or multiple HTML elements 
//                     from the DOM (Document Object Model)


// 1. document.getElementById()    // ELEMENT OR NULL
// 2. document.getElementsByClassName()   //HTML COLLECTION
// 3. document.getElementsByTagName()     // HTML COLLECTION
// 4. document.querySelector()   // ELEMENT OR NULL
// 5. document.querySelectorAll()  //NODELIST



// // Example 01 od getElementById
// const myHeading = document.getElementById("myHeading");
// myHeading.style.backgroundColor = "yellow"
// myHeading.style.textAlign = "center"

// console.log(myHeading);


// // Example 02 of getElementsByClassName
// const fruits = document.getElementsByClassName("fruits");

// // fruits[0].style.backgroundColor = "red"
// // fruits[1].style.backgroundColor = "yellow"
// // fruits[2].style.backgroundColor = "orange"
// // iterating all the 3 above  using for loop//
// // for(let fruit of fruits){
// //     fruit.style.backgroundColor = "yellow"
// // }
// //  using ARRAY 
// Array.from(fruits).forEach(fruit => {
//     fruit.computedStyleMap.backgroundColor ="Red"
// });



// // Example 03 getElementsByTagName //
// const h4elements = document.getElementsByTagName("h4");
// const lielements = document.getElementsByTagName("li");

// // h4elements[1].style.backgroundColor = "yellow";
// // for highlighting all the elements of h4 using a for loop
// for(let h4element of h4elements){
//     h4element.style.backgroundColor = "yellow"
// }
// for(let lielement of lielements){
//     lielement.style.backgroundColor = "blue"
// }

// //  querySelector // only does for first match or element
// const element = document.querySelector(".fruits")
// element.style.backgroundColor = "red"

// // querySelectorAll // 
// const foods = document.querySelectorAll("li");
// foods[0].style.backgroundColor = "red"
// console.log(foods);

//using for each method 
const foods = document.querySelectorAll("li");
foods.forEach(food => {
    food.style.backgroundColor = "Yellow"
})