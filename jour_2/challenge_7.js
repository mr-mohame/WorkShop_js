//Utilisez l'instruction switch pour afficher le nom du jour correspondant à un chiffre de 1 à 7
const prompt = require('prompt-sync')();
let jour = Number(prompt("enter un numero de jour enter 1 et 7 : "));

switch (jour) {
    case 1:
        console.log("Lundi");
        break;
    case 2:
        console.log("Mardi");
        break;
    case 3:
        console.log("Mercredi");
        break;
    case 4:
        console.log("Jeudi");
        break;
    case 5:
        console.log("Vendredi");
        break;
    case 6:
        console.log("Samedi");
        break;
    case 7:
        console.log("Dimanche");
        break;    
        
}