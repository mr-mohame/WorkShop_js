//Écrivez un script qui calcule le montant total d'une facture : Prix de base + TVA (20%) - Remise (10%).
let saisir = require('prompt-sync')();
let prix_base = Number(saisir("enter le montant initial : "));

const TVA = 0.20;
const Taux_Remise = 0.10;

let montant_tva = prix_base * TVA;
let montant_remise = prix_base * Taux_Remise;

let montant_total = prix_base + montant_tva - montant_remise;

console.log(`le montant total est : ${montant_total} DH.`)