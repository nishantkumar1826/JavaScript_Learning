// object =  A collection of related properties and/or methods 
//           can represent real world objects (people, products, places)
//           object = {key:value,
//                      function()}
const person1 = {
    firstName: "Nishant",
    lastName:"Kumar",
    age:21,
    isEmployed: true,
    sayHello: function(){console.log("Hii !! I am Nishant!")},
    sayBye: function(){console.log("GoodBye !")}
};
const person2 = {
    firstName: "Pritam",
    lastName:"Shekhawat",
    age:20,
    isEmployed: false,
    sayHello: function(){console.log("Hello, i am pritam")},
    sayBye: function(){console.log("Biyee guys")}
};
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
