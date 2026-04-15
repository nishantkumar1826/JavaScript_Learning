// ES6 Module = An external file that contains reusable code
//              that can be impoorted into other Javascript files.
//              Write reusable code for many diffrent apps.
//              Can contain Variables, Classes, FUnctions ... and more 
//              Introduced as part of ECAM Script 2015 update....


 export const PI = 3.14159;

 export function getCIRCUMFRENCE(radius){
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI * radius * radius;
}
export function getVolume(radius){
    return 4 * PI * radius * radius;
}

// To import in any other file
// import {PI, getCIRCUMFRENCE, getArea, getVolume} from './mathUtil.js';
// console.log(PI)