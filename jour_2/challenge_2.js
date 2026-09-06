//Déterminez si un nombre est positif, négatif ou nul avec une structure if...else if...else .
let saisir = require('prompt-sync')();
let nomber = Number(saisir("enter le nomber : "));

if(nomber == 0){
    console.log(`le nomber ${nomber} est null`);

}else if(nomber > 0){
    console.log(`le nomber ${nomber} est positif`);

}else{
    console.log(`le nomber ${nomber} est negatif`);

}