//  Random number genenrator

// let randomNum = Math.random();

// console.log(randomNum);
//  For random number from a sample space of a die (1 to 6)
// let randomNum = Math.floor(Math.random() * 6);
//  here 6 means max will be between 0 to 6
// console.log(randomNum);

//  For random number but adding minimum value also
// let randomNum = Math.floor(Math.random() * 6) +1;
// console.log(randomNum);

//  For a random number between 1 to 100
// let randomNum = Math.floor(Math.random() * 100) +1 ;
// console.log(randomNum);

//  Using const method 
// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random() * (max - min)) +min;
// console.log(randomNum);

//  # Program for random number genenrator for 3 numbers at a time
const myButton = document.getElementById("myButton")
const label1 = document.getElementById("label1")
const label2 = document.getElementById("label2")
const label3 = document.getElementById("label3")
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random ()* max) + min;
    randomNum2 = Math.floor(Math.random ()* max) + min;
    randomNum3 = Math.floor(Math.random ()* max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}



