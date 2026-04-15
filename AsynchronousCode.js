// Synchronous = Executes line by line consecutively in a sequential manner
//               Code that waits for an operation to complete.

// Asynchoronous = Allows multiple operations to be performed concurrently without waiting 
//                 Doesn't block the execution flow and allows the program to continue 
//                 (Input/Output operations, network requests, fetching data)
//                 Handled with: Callbacks, Promises, Async/Await


setTimeout(() => console.log("Task 1"), 3000)


console.log("Task 1 is complete");
console.log("Task 2 is complete");
console.log("Task 3 is complete");