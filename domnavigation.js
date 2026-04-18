// DOM Navigation =The process of navigating through the structure 
//                 of an HTML document using Javascript
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ##.firstElementChild##
// const elements = document.getElementById("fruits");
// const firstChild = elements.firstElementChild;
// firstChild.style.backgroundColor = "yellow";
// // // using queryselectorall 
// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow"
// });


// //  ## .lastElementChild ##
// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.background = "yellow"

// // for selcting all using querySelectorAll
// const ulElements = document.querySelectorAll("ul")
// ulElements.forEach(ulElements => {
//     const lastChild = ulElements.lastElementChild;
//     lastChild.style.backgroundColor = "red"
// })

// // ## .nextElementSibling ##
// const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "green" 

// // ## .previousElementSibling ##
// const element = document.getElementById("vegetables");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "red"


// // ##.parentElement ##
// const element = document.getElementById("ice-cream");
// const parent = element.parentElement;
// parent.style.backgroundColor = "pink"

// ## .children ##
const elemnt = document.getElementById("vegetables")
const children = elemnt.children;

Array.from(children).forEach(child => {
    children[1].style.backgroundColor  = "skyblue"
});