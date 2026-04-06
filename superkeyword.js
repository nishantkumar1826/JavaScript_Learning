//  super = keyword is used in classes to call the constructor or 
//          access the properties and methods of a parent (superclass)
//          this = this object
//          super = the parent

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

}
class Fish extends Animal{
    constructor(name,age,runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

}
class Hawk extends Animal{

    constructor(name,age,runSpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

}
class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

}

const rabbit = new Rabbit("rabbit",1,25);
const fish = new Fish("fish",1,12);
const hawk = new Hawk("hawk",1,50);

console.log(rabbit.name);