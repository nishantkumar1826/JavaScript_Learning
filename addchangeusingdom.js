//  Example 01
// Step 01 :- Create the Element
const newH1 = document.createElement("h1");

// Step 02 :- Add attribute/Properties
newH1.textContent = "I like pizza"
newH1.id ="myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "Center";
newH1.style.backgroundColor = "Yellow";

// Step 03 :- Append element to the DOM
// document.body.append(newH1);
            // or
// document.body.prepend(newH1);
// ## for appending in box 01 ##
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// for directly inserting in b/w box 01 and box 02
const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);

// if our html code doesnt have the id mentioned of div then we can select using query slector for all
// and add using javascript 

// Remove the Html
// document.body.removeChild(newH1)

// if it is in box 01
document.box1.removeChild(newH1);