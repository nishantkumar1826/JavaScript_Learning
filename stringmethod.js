//  String methods = allow you to manipulate and work with text (string)


//  .charAT() Method
// 

// let userName = "Nishant";


// console.log(userName.charAt(3));



//  .indexOf()
//  isse humko indexing ka number pta chlta h 
//  jo exist nhi krta uske liye -1 ayega 

// let userName = "Rahulhijda"


// console.log(userName.indexOf("h"));




//  .length Method
//  used to find oout the length of the variable

// let userName = "RahulChutad"
// console.log(userName.length);


// .trim() Method
// used to trim the white spaces

// let userName = "        PulkitHijda"
// userName = userName.trim();

// console.log(userName)

// toUpperCase()
//  used to make all charcaters uppper toUpperCase
//  let userName = "Brocode";
//  userName = userName.toeUpperCase();
//  console.log(userName);

//  toLocaleUpperCase()
// used to make all the chafacters lowercase

// let userName = "HARDY SANDHU";
// userName = userName.toLowerCase();
// console.log(userName);


//  repeat()
// used to repeat the string , in bracket write how many times u need to repeat
// let userName = "Brocode ";
// userName = userName.repeat(5);
// console.log(userName)

// .startsWith()
// isse pta lgta h ki wo start ho rha h space se ya nhi
// let userName =" Brocode";
// let result = userName.startsWith(" ");
// if (result){
//     console.log("Your username can't begin with ` ` ");
// }    
// else{
//         console.log(userName);
//     }

// //  .replaceAll()
//  used to replace anything ("jisko replace krna h ", " jisse replcae krna h")

// let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.replaceAll("-","");
// console.log(phoneNumber);

// //  Example 02
// let username = "Rahul-randi";
// username = username.replaceAll("-","Sexy")
// console.log(username)


// .padStart()
//  iska use hum given no of characters ko utna krne k liye krte h basicalyy used to fulfil (15,"0") toh 15 characters hoge and jo kum hoga uski jgh 0 yaga starting me
// let phoneNumber = "1234-4567-890";
// phoneNumber = phoneNumber.padStart(16,"+91");
// console.log(phoneNumber);

//  .padEnd()
//  ye ending k liye hota h 
let phoneNumber = "1234-4567-890";
phoneNumber = phoneNumber.padEnd(16,"+91");
console.log(phoneNumber)













