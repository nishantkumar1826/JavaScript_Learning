// Class = (ES6 feature) provides a more structured and cleaner way towork with
//         objects compared to traditional constructor functions 
//   helpful in these topics EG: static keyword, encapsulation, inheritence

class Product{
    constructor(name,price){
        this.name = name;
        this.price =price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05;
const product1 = new Product("Shirt", 19.33);
const product2 = new Product("Pants", 15);
const product3 = new Product("Shoes", 220);
const product4 = new Product("Underwear", 2.32);
product1.displayProduct();
product2.displayProduct();
product3.displayProduct();
product4.displayProduct();

const total = product1.calculateTotal(salesTax);
const total1 = product2.calculateTotal(salesTax);
const total2= product3.calculateTotal(salesTax);
const total3 = product4.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);
console.log(`Total price (with tax): $${total1.toFixed(2)}`);
console.log(`Total price (with tax): $${total2.toFixed(2)}`);
console.log(`Total price (with tax): $${total3.toFixed(2)}`);
