//  STATIC = keyword that defines properties or methods that belong 
//           to a class itself rather than the objects created 
//           from that class (class owns anything static, not the objects)
// anything manetioned as static remians only for class not any object created 


// Example 02
class MathUtil{
    static PI = 3.14159;
    static getDiameter(radius){
        return radius*2;
    }
    static getCircumfrence(radius){
        return radius*this.PI;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumfrence(5));
console.log(MathUtil.getArea(5));

// Example 03
class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
}
const user1 = new User("Nishant");
const user2 = new User("Pulkit");

console.log(user1.username);
console.log(user2.username);
console.log(User.userCount);