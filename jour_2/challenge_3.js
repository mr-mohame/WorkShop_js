//Testez l'âge de l'utilisateur : s'il a 18 ans ou plus, affichez "Majeur", sinon "Mineur"
let saisir = require('prompt-sync')();
let age = Number(saisir("enter l'age : "));

if(age >= 18){
    console.log("est majeur");

}else{
    console.log("est mineur");

}