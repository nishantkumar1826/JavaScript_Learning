// eventListener = Listener for specific events to create interactive web page
//                 events : keydown, keyup
//                 document.addEventlistener(event, callback);
const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;
document.addEventListener("keydown", event =>{
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;

        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
        myBox.style.right = `${x}px`;
        myBox.style.down = `${y}px`;
    }
})