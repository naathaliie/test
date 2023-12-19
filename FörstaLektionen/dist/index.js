console.log("Hello World");
let greeting = "Kalle"; //Deklarerar en variabel som är string
let isGreeting = true; //Deklarerar en variabel som är boolean
let changing = "hej"; //Deklarerar en variabel av okänd datatyp
let arr = ["hej", "då"]; // Deklarerar en array som innehåller datatypen string
//Är du osäker på vilken datatyp du skall änvända kan du hoovra över en skapad variabel för att få ett förslaget alternativ
function getName(firstName, lastName) {
    const fullname = firstName + " " + lastName;
    return fullname;
}
const fullName = getName("kalle", "Anka");
