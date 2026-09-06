//Déterminez si une année donnée est bissextile ou non selon les règles du calendrier grégorien
let saisir = require('prompt-sync')();
let annee = Number(saisir("entre l'annee : "));

if(annee % 400 == 0){
    console.log(`l'annee ${annee} est bissextile`);

}else if(annee % 100 == 0){
    console.log(`l'annee ${annee} est n'est pas bissextile`);

}else if(annee % 4 == 0){
    console.log(`l'annee ${annee} est bissextile`);

}else{
    console.log(`l'annee ${annee} est n'est pas bissextile`);

} 