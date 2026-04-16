// DOM :- Document Object Model
//        Object{} that represents the page  you see in the web browser
//        and provides you with an API to interact with it.
//        web Browser constructs the DOM when it loads an HTML document,
//        and structures all the elements in a tree-like representation.
//        Javascript can access the DOM to dynically 
//        change the content, structure and style of a web page.

// document.getElementById("")
// console.log(document);
// Example 01
const username = "";
const WelcomeMsg = document.getElementById ("welcome-msg");

WelcomeMsg.textContent += username == "" ?                               `Guest` : username;
