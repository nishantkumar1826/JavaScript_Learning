// sort() = method used to sort elements of an array in place
//          Sorts elements as strings in lexicographic order, not alphabetical 
//          lexicographic = (alphabet + numbers + symbols) as strings 

// let fruits = [ "apple", "orange","coconut","pineapple"];
// fruits.sort();

// console.log(fruits)


//Sorting using parameters
// revrese order of numbers
// let numbers = [ 1, 20,58,36,45,28,19,37]
// numbers.sort((a, b) => b-a);
// console.log(numbers)

// forward order of numbers
// let numbers = [ 1, 20,58,36,45,28,19,37]
// numbers.sort((a, b) => a-b);
// console.log(numbers)

const people = [{name: "nishant", age: 30, sgpa: 7.91},
    {name: "rahul", age: 24, sgpa: 9.0},
    {name: "pulkit", age: 28, sgpa: 4.91},
    {name: "pritam", age: 25, sgpa: 7.5}]
 people.sort((a, b) =>a.name.localeCompare(b.name));
 
 console.log(people);