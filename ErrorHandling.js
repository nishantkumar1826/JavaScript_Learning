// Error = An object that is created to represent a problem that occurs
//         often with user input or eshtablishing a connection
// Errors can be raised for doffrent issues 
// Promise rejection
// Network errors
// Security errors


// errrors can be handled using :-
// try{ } = Encloses code that might potentially cause an error 
//Catch{ } = catch can handle any item thrown fron try { }
// finally { } = (optionally) Always executes. /Used mostly for cleanup 
//                ex:- close files, close connections, release resources


// Using these 3 mentioned above
try{
    console.log("Hello there are no errors");
    //Network Error
    //Promise rejection
    //Security error
}
catch(error){
    console.log(error);
}
finally{
    // Close files
    //Close connections
    //Release resources
    console.log("This always executes")
}
console.log("You have reahced the end");