// How to accept user input

//1. Easy way = window prompt
//2. Professional way = HTML textbox



// Using method 1 the easy way
// let username;

// // username = window.prompt("whats your username?");
// username = window.promptal("whats your username?");
// console.log(username);


// Using 2nd method The professional way


let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent=`Hello ${username}`
    console.log();
}

