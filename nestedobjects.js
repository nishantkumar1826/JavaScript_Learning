// nested objects = Objects inside of other Objects.
//                  Allows you to represent more complex data structures 
//                  Child Object is enclosed by a parent Object

//                  person{address{}, ContactInfo{}}
//                  shoppingCArt{keyboard{}, Mouse{}, Monitor{}}

const person = {
    fullName: "Nishant Kumar",
    age: 30,
    isStudent: true,
    hobbies: ["Karate", "Jellyfishing", "Cooking"],
    adress: {
        street: "1234 KRMU",
        city: "Dholakpur",
        country: "Dreamland"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[3]);
console.log(person.adress);
