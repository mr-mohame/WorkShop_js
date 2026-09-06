//Créez une calculatrice recevant deux nombres et un opérateur ( + , - , * , / ) avec gestion de la division par zéro.
const prompt = require("prompt-sync")();
let continuer = "oui";
while(continuer.toLowerCase()=== "oui"){
    let num1 = Number(prompt("saisir la valeur de premier number : "));
let num2 = Number(prompt("saisir la valeur de deuxième number : "));
let operateur = prompt("Saisir l'opérateur (+, -, *, /, ** ou %) : ");
let resultat;

switch(operateur){
    case "+":
        resultat = num1 + num2;
        console.log(`l'addition de ${num1} + ${num2} = ${resultat}`);
        break;
    case "-":
        resultat = num1 - num2;
        console.log(`la soustraction de ${num1} - ${num2} = ${resultat}`);
        break;
    case "*":
        resultat = num1 * num2;
        console.log(`la multiplication de ${num1} * ${num2} = ${resultat}`);
        break;
    case "%":
        resultat = num1 % num2;
        console.log(`le module de ${num1} % ${num2} = ${resultat}`);
        break;
    case "/":
        if(num2 == 0){
            console.log("Division par zéro impossible");
            
        }else{
            resultat = num1 / num2;
            console.log(`la division de ${num1} / ${num2} = ${resultat}`);
        }
        break;
    case "**":
        resultat = num1 ** num2;
        console.log(`la puissance de ${num1} ** ${num2} = ${resultat}`);

        default:
            console.log("Opérateur non reconnu. Utilisez +, -, *, /, % ou. **"); 

}
continuer = prompt("voulez vous faire un autre calcul ? (oui/non)");
console.log("---------------------------------");
}
console.log("merci devoir utilise la calculatrice. a bientot !");

