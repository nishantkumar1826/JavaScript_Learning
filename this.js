// this = refrence to the object where THIS is used 
//        (the object depends on the immediate context)
//        person.name = this.name
const person1 ={
    name : "Spongebob",
    favFood: "Hamburger",
    sayHello: function(){console.log(`Hiii, I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
 }
person1.sayHello();
person1.eat();

const person2 ={
    name : "Nishant",
    favFood: "Momos",
    sayHello: function(){console.log(`Hiii, I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
 }
person2.sayHello();
person2.eat();