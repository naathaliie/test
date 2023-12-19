//Samla in värdet från input 1 och input 2
//Addera båda värden
//Skriv ut på skärmen

//Hämta referens till inputfältet och spra det i variabeln firstInput
const firstInput = document.getElementById("first-input") as HTMLInputElement;
const secondInput = document.getElementById("second-input") as HTMLInputElement;

//Samla in värdet av input
function getInput () {

    const firstInputValue = parseInt(firstInput.value);
    const secondInputValue = parseInt(secondInput.value);
    const sum = firstInputValue + secondInputValue;

    //hämta textinnehållet som skall ändras
    const text = document.querySelector("screens");
    text.textcontent = sum; 

};

const myButton = document.querySelector(".button");
myButton.addEventListener("click", getInput);