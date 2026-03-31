//  for loop = repeat some code a limited amount of times



// //  Happy new year 
// for(let i =10; i > 0; i--){
//     console.log(i);
// }
// console.log("HAPPY NEW YEAR........");




//  # Example 2 to skip 13 using continue inside for loop
for(let i = 1; i<=20; i++){
    if(i == 13){
        continue;
    }
    else{
        console.log(i);
    }
}

//  # Break 
for(let i = 1; i<=20; i++){
    if(i == 13){
        break;
    }
    else{
        console.log(i);
    }
}