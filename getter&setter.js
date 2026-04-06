// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value reading/writing a property
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
// setters
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }
// getters
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    get area(){
        return this._width * this._height;
    }
}

const rectangle = new Rectangle(3, 4);

rectangle.width = 5;
rectangle.height = 2;


console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);