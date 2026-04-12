// Date objects = Objects that contain values that represents dates and times 
//                These date objects can be changed and formatted

// Example 01
//  Date( year, month, day, hour, minute, second, ms)

// const date = new Date(2025, 0, 1, 2, 3, 4, 5);
// console.log(date);

// Example 02
// const date = new Date("2026-04-11T12:00:00Z");
// console.log(date); 


// Example 03
// const date = new Date();

// const year = date.getFullYear();

// const month = date.getMonth();

// const day = date.getDay();

// const hour = date.getHours();

// const minutes = date.getMinutes();

// const seconds = date.getSeconds();

// const dayOfWeek = date.getDay();

// console.log(date);
// console.log(month);
// console.log(year);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);


// // Setting a date 
// const date = new Date();
// date.setFullYear(2023);
// date.setMonth(0);
// date.setDate(1);
// date.setHours(2);
// date.setMinutes(3);
// date.setSeconds(25);

// console.log(date)

// Comparng dates
const date1 = new Date("2026-12-31");
const date2 = new Date("2026-04-12");

if(date2 > date1){
    console.log("Happy New Year");
}
