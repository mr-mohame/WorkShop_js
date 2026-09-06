//Vérifiez si un nombre donné est supérieur à 10 et affichez le message approprié.
let saisir = require('prompt-sync')();
let nomber = Number(saisir("enter un number : "));

if(nomber > 10){
    console.log(`le nomber ${nomber} est superieur a 10`);

}else{
    console.log(`le nomber ${nomber} est Inférieur a 10`);
}