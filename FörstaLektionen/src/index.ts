console.log("Hello World");

let greeting: string = "Kalle"; //Deklarerar en variabel som är string
let isGreeting: boolean = true; //Deklarerar en variabel som är boolean
let changing: any = "hej"; //Deklarerar en variabel av okänd datatyp
let arr: string[] = ["hej", "då"] // Deklarerar en array som innehåller datatypen string

//Är du osäker på vilken datatyp du skall änvända kan du hoovra över en skapad variabel för att få ett förslaget alternativ


function getName(firstName: string, lastName: string){
    const fullname = firstName + " " + lastName;
    return fullname;
}

const fullName: string = getName("kalle", "Anka")