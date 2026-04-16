// element selectors = Methods used to target and manipulate HTML elements 
//                     They allow you tom select one or multiple HTML elements 
//                     from the DOM (Document Object Model)


// 1. document.getElementById()    // ELEMENT OR NULL
// 2. document.getElementsByClassName()   //HTML COLLECTION
// 3. document.getElementsByTagName()     // HTML COLLECTION
// 4. document.querySelector()   // ELEMENT OR NULL
// 5. document.querySelectorAll()  //NODELIST
const myHeading = document.getElementById("myHeading");
myHeading.style.backgroundColor = "yellow"
myHeading.style.textAlign = "center"

console.log(myHeading);