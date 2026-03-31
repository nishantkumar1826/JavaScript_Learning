// const = a variable that can't be changed

//  making a program to calculate a circumfrence
const PI = 3.14159; // capitalising is only done for primitive datatype
let radius;
let circumfrence;
// PI = 42.69;   //it will show uncaught type error coz it is assinged once

// radius = window.prompt(`Enter the radius of a circle`);  // easy method
document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumfrence = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumfrence + "cm";
}
