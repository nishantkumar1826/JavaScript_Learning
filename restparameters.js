// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments by bundling them into an array

//      spread = expands an array into seperate elements
//      rest = bundles seperate elements into an array


// function openFridge(...foods){
//     console.log(foods);
// }
// const food1 ="pizza";
// const food2 ="sushi";
// const food3 ="burger";
// const food4 ="hotdog";
// const food5 ="ramen";
// openFridge(food1, food2, food3, food4, food5);



//  Example 02
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}
const total = getAverage(75, 100, 67, 85)
console.log(total);