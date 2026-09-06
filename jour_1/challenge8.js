//Calculez le reste de la division d'un nombre par 2 avec l'opérateur % pour vérifier s'il est pair ou impair.
let saisir = require('prompt-sync')();

let a = Number(saisir("enter la valeur de a : "));


let number = 24;
if(number % 2 == 0){
    console.log(`le number ${number} est pair`);
}else{
    console.log(`le number ${number} est impair`);
}