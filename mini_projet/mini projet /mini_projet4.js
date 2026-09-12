//Contexte : Une banque doit déterminer si un client est éligible à un prêt immobilier, calculer son taux d'intérêt, et évaluer les frais d'assurance de son dossier.
let revenuMensuel = 15000; // revenu net 
let mensuelitePret = 5000; // mensualite demande 
let scoreCredit = 720; // score enter 300 et 850
let age = 32;
let estFumeur = false; // status fumeur
let apportPersonnel = 100000; // apport 
let montantProjet = 500000; // montant de projet
let tauxAssuranceAnnuel = 0.3; // taux dassurance standard

//eligibiliti de base
let tauxEndettement = (mensuelitePret / revenuMensuel) * 100;
if((tauxEndettement > 33) || (scoreCredit<600)|| (apportPersonnel <= (montantProjet*0.1))){
    if(tauxEndettement > 33){
        console.log("Taux d'endettement supérieur à 33%");
    }else if(scoreCredit<600){
        console.log("Score de crédit inférieur à 600");
    }else if(apportPersonnel <= (montantProjet*0.1)){
        console.log("Apport personnel inférieur à 10%");
    }else{
        //Calcul du Taux d'Intérêt de base
        let taux_Interet = 0;
        if(scoreCredit>= 750){
            taux_Interet = 4.5
        }else if(scoreCredit>= 650 && scoreCredit<=749){
            taux_Interet = 5.5
        }else if(scoreCredit>= 600 && scoreCredit<=649){
            taux_Interet = 6.5
        }

        // Bonus de Taux :
        if(apportPersonnel >= (montantProjet*0.2)){
            taux_Interet -= 0.5
        }

        // Calcul du Surcoût de l'Assurance Mensuelle
        let fraisAssurance = 200;
        if(age>45){
            fraisAssurance += 150;
        }
        if(estFumeur){
            fraisAssurance += 100;
        }

        // MENSUALITÉ TOTALE
        let mensualiteTotatl = montantProjet + assuranceMensuelle;
        //Résultat final
        console.log("Prêt Accordé !");
        console.log(`Taux d'interet applique : ${taux_Interet} DH`);
        console.log(`Cout de l'asssurance mensuelle : ${fraisAssurance} DH`);
        console.log(`Mensualite total (Prêt + Assurance) : ${mensualiteTotatl} DH`);    
    }
}    