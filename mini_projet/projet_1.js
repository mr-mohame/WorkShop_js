//L'ordinateur choisit un nombre mystère au hasard entre 1 et 100. Votre objectif est de deviner ce nombre. À chaque tentative, l'ordinateur vous aide en vous disant si votre proposition est trop grande ou trop petite, jusqu'à ce que vous trouviez la bonne valeur.
const prompt = require('prompt-sync')();
// l'ordinateur choisi un number secret enter 1 et 100

const nombreSecret = Math.floor(Math.random() *100)+ 1;
let tentative = 0;
let gagne = false;
console.log("choisi un number enter 1 et 100. ");

while(!gagne){
    let proposition = prompt("enter un number enter 1 et 100 : ");
    proposition = parseInt(proposition, 10); //Convertit la réponse en nombre entier
    tentative++;
    if(isNaN(proposition)){
        console.log("cest nest un number valide !");
    }else if(proposition < nombreSecret){
        console.log("cest plus");
    }else if(proposition > nombreSecret){
        console.log("cest moins");
    }else{
        console.log(`bravo tu as trouve en ${tentative} coup !`);
        gagne = true;
    }
}        