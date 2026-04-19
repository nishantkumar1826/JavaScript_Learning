// Nodelist = static collection of HTML elements by (id, class, element);
//            Can be created by using querySelectorAll()
//            Similar to array, But no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

// Add HTML and CSS properties 

buttons.forEach(button =>{
    button.style.backgroundColor = "green"
    button.textContent += "heyy babe";

});

// Click event listener
buttons.forEach(button =>{
    button.addEventListener("mouseover", event=>{
        event.target.style.backgroundColor = "tomato"
    });
});
buttons.forEach(button =>{
    button.addEventListener("mouseout", event=>{
        event.target.style.backgroundColor = "green"
    });
});

// Add new element
const newButton = document.createElement("button"); // step 01
// step 02 :- Add css if u want or is important
newButton.textContent = "Button 5"
newButton.classList = "myButtons";
// step 03 :- Appending the new Buton to the DOM
document.body.appendChild(newButton);
//console.log(buttons);

// In the nodelsit it will show only 4 buttons as it doesnt automatically update itself
// in it we will have to manually do it   

buttons = document.querySelectorAll("myButtons");
// console.log(buttons);


// remove an HTML element
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
    });
});

