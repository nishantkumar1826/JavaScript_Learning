// .reduce() = reduce the elements of an array 
//              to a single value 

const prices = [100, 200, 400, 500];
const total = prices.reduce(sum);

function sum(accumulator, element){
    return accumulator + element;
}
console.log(`$${total}`);