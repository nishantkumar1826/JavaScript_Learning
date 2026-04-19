// classlist :- element property in javascript used to interact
//              with an element's list of classes (CSS classes)
//              Allows you to make reusable classes for many elements
//              across your webpage

//add()
//remove()
//toggele( remove if present, Add if not)
// replace (oldClass with the newClass)
//contains() it return true if it exist or returns false
const myButton = document.getElementById("myButton");
// myButton.classList.add("hover");

// myButton.classList.remove("enabled");

/// using toggle 


myButton.addEventListener("mouseover",event =>{
    event.target.classList.toggle("hover");
});
myButton.addEventListener("mouseout",event =>{
    event.target.classList.toggle("hover");
});