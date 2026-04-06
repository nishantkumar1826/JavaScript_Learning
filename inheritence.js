//  inheritence = allows a new class to inherit properties and 
//                methods from an existing class (parent -> child)
//                helps with the code reusability

// example 01
class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name = "rabbit";
}
class Fish extends Animal{
    name = "fish";
}
class Hawk extends Animal{
    name = "hawk";
}
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

// rabbit.alive = false;

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();

console.log(fish.alive);
fish.eat();
fish.sleep();

