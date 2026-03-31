// //  string Slicing = creating a substring from a 
// //                   portion of another string

// //          string.slice(start,end)
// //  supports negative indexing as well as forward indexing
// const fullName = "Nishant Kumar";

// let firstName = fullName.slice(0,7);
// let lastName = fullName.slice(8,13);

// let firstChar = fullName.slice(0,1);
// let lastChar = fullName.slice(-1)
// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);


// //  Example 02 without using counting method
// const  fullname = "Lodu Lalit"
// let firstName = fullname.slice(0,fullname.indexOf(" "));
// let lastname = fullname.slice(fullname.indexOf(" ")+1) 
// console.log(firstName);
// console.log(lastname);

//  Example 03 
const email = "nishantkumar1234@gmail.com"
let username = email.slice(0,email.indexOf("@"));
let extnsn = email.slice(email.indexOf("@")+1);
console.log(username);
console.log(extnsn);