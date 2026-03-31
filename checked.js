//  .checked = property that determines the checked state of an HTML
//             checkbox or radio button element

const myCheckbox = document.getElementById("myCheckbox");
const Visabtn = document.getElementById("Visabtn");
const LisenceBtn = document.getElementById("LisenceBtn");
const passportBtn= document.getElementById("passportBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent =`You are subscrribed`;
    }
    else{
        subResult.textContent =`You are NOT subscribed`;
    }
    if(Visabtn.checked){
        paymentResult.textContent =`You are travelling with Visa`;
    }
    else if(LisenceBtn.checked){
        paymentResult.textContent = `You are travelling with Lisence`;
    }
    else if(passportBtn.checked){
        paymentResult.textContent = `You are travelling with Passport`;
    }
    else{
        paymentResult.textContent = `You must carry an id-card or ATM-card`;
    }
}

    