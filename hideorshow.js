// can be used to hide or show any html object using Javascript and DOM manipulation

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event =>{
    myImg.style.display = "none"
    // this will hide the element
    myImg.style.addEventListener = "Show"
    // this will show the image
})