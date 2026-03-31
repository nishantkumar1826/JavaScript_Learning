// SWITCH = can be efficient to replace many if else statements


//  Using a lot of else if statements 
// let day =7;

// if(day ==1){
//     console.log(`its monday`)
// }
// else if(day ==2){
//     console.log(`its Tuesday`)
// }
// else if(day ==3){
//     console.log(`its wednesday`)
// }
//  else if(day ==4){
//     console.log(`its thursday`)
// }
// else if(day ==5){
//     console.log(`its friday`)
// }
// else if(day ==6){
//     console.log(`its saturday`)
// }
//  else if(day ==7){
//     console.log(`its sunday`)
// }
// else{
//     console.log(`${day} is not a day`)
// }


//  using SWITCH 


//  Example 01
// let day = 6;
// switch(day){
//     case 1:
//         console.log("it is monday")
//         break;
//     case 2:
//         console.log("it is tuesday")
//         break;
//     case 3:
//         console.log("it is wednesday")
//         break;
//     case 4:
//         console.log("it is thursday")
//         break;
//     case 5:
//         console.log("it is friday")
//         break;
//     case 6:
//         console.log("it is saturday")
//         break;
//     case 7:
//         console.log("it is sunday")
//         break;
//         default:
//             console.log(`${day} is not a day`)
// }

//  BREAK = is used to break through the switch when found a matching case
//  DEFAULT = it is used to set a default statements


//  // Example 02

let testScore = 40;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade="A"
        break;
    case testScore >= 80:
        letterGrade="B"
        break;
    case testScore >= 70:
        letterGrade="C"
        break;
    case testScore >= 60:
        letterGrade="D"
        break;
    case testScore >= 50:
        letterGrade="E"
        break;
        default:
            letterGrade = "F"
       
}
console.log(letterGrade);