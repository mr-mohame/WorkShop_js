//Réécrivez un test de température (> 30°C ? "Chaud" : "Modéré") en une seule ligne avec un ternaire.
const prompt = require('prompt-sync')();
let température = Number(prompt("enter la température :"));

let message = température > 30 ? "Chaud" : "Modéré";
console.log(message);
