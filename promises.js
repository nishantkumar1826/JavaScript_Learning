// Promises = An object that manages asynchronous operations 
//            wrap a Promise object around {asynchronous code}
//            "I promise to return a value"
//            PENDING -> RESOLVED or REJECTED
//            new PROMISE ((resolve, rejct) => {asynchronous code})

// Do these following chores in order
// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog(){
     return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("You walk the dog");
        }, 1500);

    })
}
function cleanKitchen(){
     return new Promise((resolve, reject) =>{
         setTimeout(() => {
            resolve("You cleaned the kitchen");
         }, 2500);
     });
}
function takeoutTrash(){
     return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("You discarded the trash");
        }, 500);

    })
}
walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value);  return takeoutTrash()})
         .then(value => {console.log(value); console.log("You finished all the task")});

// This is a old way of doing it it causes the callback hell
// walkDog(() => {
//     cleanKitchen(() =>{
//         takeoutTrash(() => console.log("All the chores are done"))
//     })
// })

// New Method or method chaining
