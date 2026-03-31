// IF STATEMENTS = if a condition is true, execute some code 
//                      if not, do something else
 
    //  # Example 01
    // let age = 13;

    // if(age >= 18){
    //     console.log("You are old enough to enter this site");
    // }
    // else{
    //     console.log("You are not eligible to enter this site")
    // }
    //   Example 02
    // let time = 9;
    // if(time < 12){
    //     console.log("Good Morning !!")
    // }
    // else{
    //     console.log("Good Afternoon !!")
    // }
    //   # Example 03
    // let isStudent = false;

    // if(isStudent){
    //     console.log("You are a Student")
    // }
    // else{
    //     console.log("You are not a student")
    // }

    //   # Example 04 of Nested if 
    // let age = 20;
    // let hasLisence = true;

    // if(age >= 16){
    //     console.log("You are old enough to drive");
    //     if(hasLisence){
    //         console.log("You have a lisence")
    //     }
    //     else{
    //         console.log("You do not have a lisence")
    //     }
    // }
    // else{
    //     console.log("You are not eligible for lisence")
    // }

    //   # Example 05
    let age = 0;
    if(age >= 100){
        console.log("You are old enough to enter this site");
    }
    else if(age == 0){
        console.log("You cant enter, You were just born")
    }
    else if(age >= 18){
        console.log("You are old enough to enter this site");
    }
    else if(age <0){
        console.log("Your age cant be below 0");
    }
    else{
        console.log("You must be 18+ to enter this site");
    }
    
        
    
    

