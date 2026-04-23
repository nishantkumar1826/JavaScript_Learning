// Asynv/Await = Async => make a function return a promise
//               Await => makes an async function wait for a promise

//              Allows you to write asynchronous code in a synchronous manner
//              Async doesn't have resolve or reject parameters 
//              Everything after Await is placed in an event queue

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked){
                resolve("You walked the dog");
            } else {
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You cleaned the kitchen");
            } else {
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    });
}

function takeoutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashThrown = true;
            if(trashThrown){
                resolve("You discarded the trash");
            } else {
                reject("You DIDN'T throw the trash");
            }
        }, 500);
    });
}

async function doChores(){
    try {
        const dogResult = await walkDog();
        console.log(dogResult);

        const kitchenResult = await cleanKitchen();
        console.log(kitchenResult);

        const trashResult = await takeoutTrash();
        console.log(trashResult);

        console.log("All chores done");
    } catch (error) {
        console.log(error);
    }
}

doChores();