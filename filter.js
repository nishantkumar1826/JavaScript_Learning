// // filter() = creates a new array by filtering 
// //            out elements

let numbers = [1,2,3,4,5,6,7];
let evennums = numbers.filter(isEven);
let oddnums = numbers.filter(isOdd);

function isEven(element){
    return element % 2===0;
}
function isOdd(element){
    return element % 2 !==0;
}
console.log(evennums);