function rollDice(){
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    let d1 = Math.floor((Math.random() * 6) + 1);
    let d2 = Math.floor((Math.random() * 6) + 1);
    para1.textContent = "Your first roll was a " + d1 + "!";
    para2.textContent = "Your second roll was a " + d2 + "!";
    document.body.appendChild(para1);
    document.body.appendChild(para2);
    para3.textContent = "Your combined score is " + (d1 + d2) + "!";
    document.body.appendChild(para3);
}

const buttons = document.querySelectorAll(`button`);

for (const button of buttons) {
    button.addEventListener("click", rollDice)
}