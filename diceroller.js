function rollDice(){
    const numofDice = document.getElementById("numDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numofDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(values);
        images.push(`<img src"dice_images/${value}.png">`)
    }
    diceResult.textContent = `dice${values.join(',')}`;
    diceImages.innerHTML = images.join('');
}