//  // Method chaining = calling one method after another
//                       in one continous line of code

//                 //  No Method chaining
// let username = window.prompt("Enter you username:")
// username = username.trim(); // to remove the whitespaces
// let letter = username.charAt(0); // to get first character opf the username to capitalize it
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// //  to combine both letter and extraChars
// username = letter + extraChars
// console.log(username);



            //  Using Method chaining //
let username = window.prompt("Enter your username:")
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username)