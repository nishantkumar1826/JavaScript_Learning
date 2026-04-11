const fruits = [ {name: "apple", colour:"red", calories: 95},
                  {name: "orange", colour:"orange", calories: 45},
                  {name: "banana", colour:"yellow", calories: 105},
                  {name: "coconut", colour:"white", calories: 159},
                  {name: "pineapple", colour:"yellow", calories: 37}];

  

// To add or push an item in an array //
// fruits.push({name:"grapes", colour: "green", calories: 62})




// To remove or delete and item from an array //
// fruits.pop(1,2)
//  console.log(fruits)

// Splice method :- used to delete the items using index numbers

// fruits.splice(1,2)
// console.log(fruits)


// For each method to loop through the elements of the array //
// fruits.forEach(fruits=> console.log(fruits.colour))

// map method will run each function  and return it to an array //
const fruitNames = fruits.map(fruit => fruit.name);
const fruitCalories = fruits.map(fruit => fruit.calories);
const fruitColours = fruits.map(fruit => fruit.colour);
// console.log(fruitNames);
// console.log(fruitColours);
// console.log(fruitCalories);


// filter method:- will return a new array after checking each condition given //
// const yellowFruits = fruits.filter(fruit => fruit.colour ==="yellow")
// const lowCalFruits = fruits.filter(fruit => fruit.calories === 50)
//  console.log(yellowFruits)
//  console.log(fruitCalories)


// reduce() :-  will return a single value from an array  //
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(maxFruit); 