// Calllback Hell :- Situation in JavaScript where callbacks 
//                   are nested within other callbacks to the degree 
//                   degree where the code is difficult to read.
//                   Old pattern to handle asynchronous functions.
//                  Now we, Use Promises + async/await to avoid Calllback Hell

// Example 01
function task1(calllback){
    setTimeout(() => {
        console.log("Task 1 complete")
        calllback();
    }, 2000)
}    
function task2(callback){
    setTimeout(() => {
        console.log("Task 2 complete")
        callback();
    },1000)
}    
function task3(callback){
    setTimeout(() => {
        console.log("Task 3 complete")
        callback();
    }, 3000)
}    
function task4(callback){
    setTimeout(() => {
        console.log("Task 4 complete")
        callback()
    }, 3500)
}    


// to print in order using a callback
task1(() =>{
    task2(() => {
        task3(() => {
            task4(() => console.log("All tasks are complete"))
        })
    });
})