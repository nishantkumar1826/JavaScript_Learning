// Eventslistener = listen for specific evnets to create interactve 
//                  web pages  
//                  events : click, mouseover, mouseout
//                  .addEventlistener(event,callback or anonymous function or arrow function);

const mybox = document.getElementById("mybox");

// mybox.addEventListener("click", function(event){
//     event.target.style.backgroundColor = "tomato"
//         event.target.textContent = "OUCH"
// });

// Using arrow function
mybox.addEventListener("click", event =>{
    event.target.style.backgroundColor = "tomato"
        event.target.textContent = "Fuck you hit that right"
});

// mouseover 
mybox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow"
    event.target.textContent = "Don't do it !!"
});

// mouseout 
mybox.addEventListener("mouseout",event =>{
    event.target.style.backgroundColor = "pink";
    event.target.textContent = "yeah Daddy !!"
});