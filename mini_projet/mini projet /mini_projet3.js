//Objectif : Calcule le prix d'un billet de cinéma en combinant l'âge, le jour de la semaine et un code promo.
let age = 28; 
let jour = "mercredi"; 
let estEtudiant= true; 
let codePromo ="OCTOBRE20";
let prix = 0;
//por verifie lage
if(age<12){
   let prix = 40
}else if(age>=12 && age<60){
    let prix = 70;
}else if(age>=60){
    let prix = 50;
}
// appliquer les reduction
if(jour === "mercredi" && age>= 12 && age<60){
    prixAdult = 45;
  
}else if(estEtudiant && prix === 70){
    prix = prix * 0.8;
}

//Code promo
if(codePromo === "OCTOBRE20"|| codePromo === "PROMO10"){
    prix -= 10;
    
}
//pour aaffiche le ticket
console.log(`le prix final du billet est : ${prix} DH`);