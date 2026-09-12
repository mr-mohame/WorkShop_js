//Objectif : Simuler un retrait d'argent à un guichet automatique avec vérification du solde et des limites.
let soldeCompte = 3000, montantRetrait = 500; LimiteJournaliere= 2000;

if((montantRetrait <= soldeCompte) && (montantRetrait <= LimiteJournaliere) && (montantRetrait % 100 === 0)){
    soldeCompte -= montantRetrait;
    console.log(`retrait effectue. Nouveau solde est : ${soldeCompte} DH, et le montant retrait est : ${montantRetrait} DH`);  
}else{
    console.log("l'operation impossible");
    
}
