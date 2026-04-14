// setTimeout() = function in javaScript that allows you to schedule
//                the execution of a function after an amount of time(miliseconds)
//               Times are appproximate (variables based on the workload of the javascript runtime env.)

//               setTimeout(callback, delay);


// // Using Callback 
// function sayHello(){
//     window.alert("Hello");
// }

// setTimeout(sayHello, 3000)


// // Method 02
// setTimeout(function(){window.alert("Hello")},3000)


// // Method 03
// setTimeout(() => window.alert("Heyyyy"), 3000)


// ##  Clear Timeout ##
 const TimeoutId = setTimeout(() => window.alert("Heyyyy"), 3000);

 clearTimeout(TimeoutId);