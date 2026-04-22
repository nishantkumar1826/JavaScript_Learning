// Calllback Hell :- Situation in JavaScript where callbacks 
//                   are nested within other callbacks to the degree 
//                   degree where the code is difficult to read.
//                   Old pattern to handle asynchronous functions.
//                  Now we, Use Promises + async/await to avoid Calllback Hell

// Example 01
function task1(){
    setTimeout(() => {
        console.log("Task 1 complete")
    }, 2000)
}    
function task2(){
    setTimeout(() => {
        console.log("Task 2 complete")
    },3000)
}    
function task3(){
    setTimeout(() => {
        console.log("Task 3 complete")
    }, 4000)
}    
function task4(){
    setTimeout(() => {
        console.log("Task 4 complete")
    }, 5000)
}    


task1();
task2();
task3();
task4();
console.log("All task are underway");