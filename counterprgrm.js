// Counter program
const decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
const increase = document.getElementById("increaseBtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;

}
decreaseBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}