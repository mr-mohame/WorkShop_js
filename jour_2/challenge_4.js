//Écrivez un programme qui indique si un nombre est pair ou impair.
let saisir = require('prompt-sync')();
let nomber = Number(saisir("enter le nomber : "));

if(nomber % 2 == 0){
    console.log(`le nomber ${nomber} est pair.`);
}else{
    console.log(`le nomber ${nomber} est impair.`);
}