//Contexte : Tu vas coder la logique d'une machine à café/boissons. L'utilisateur saisit le code d'une boisson et insère une pièce. La machine doit vérifier la commande et rendre la monnaie.
let codeBoisson = 5; //code disponsible 
let montantInsere = 15 // montant donne par l'utilisateur
let prixBoissan = 0;
switch(codeBoisson){
    case 1 :{
        let name = "caffe noir";
        let prixBoissan = 10;
        if(montantInsere< prixBoissan){
            console.log(`montant insuffisant, il manque ${prixBoissan-montantInsere} DH.`);
        }else{
            console.log(`Distribution de : ${name}. Monnaie rendue : ${montantInsere-prixBoissan} DH.`)
        }
    }    
    break;

    case 2 :{
        let name ="Café au Lait"
        let prixBoissan = 12;
        if(montantInsere< prixBoissan){
            console.log(`montant insuffisant, il manque ${prixBoissan-montantInsere} DH.`);
        }else{
            console.log(`Distribution de : ${name}. Monnaie rendue : ${montantInsere-prixBoissan} DH.`)
        }
    }    
    break;

    case 3 :{
        let name = "Chocolat Chaud"
        let prixBoissan = 15;
        if(montantInsere< prixBoissan){
            console.log(`montant insuffisant, il manque ${prixBoissan-montantInsere} DH.`);
        }else{
            console.log(`Distribution de : ${name}. Monnaie rendue : ${montantInsere-prixBoissan} DH.`)
        }
    }
    break;
    case 4 :{
        let name = "Thé à la menthe"
        let prixBoissan = 18;
        if(montantInsere< prixBoissan){
            console.log(`montant insuffisant, il manque ${prixBoissan-montantInsere} DH.`);
        }else{
            console.log(`Distribution de : ${name}. Monnaie rendue : ${montantInsere-prixBoissan} DH.`)
        }
    }    
    break;
    case 5 :{
        let name = "boisson"
        let prixBoissan = 14;
        if(montantInsere< prixBoissan){
            console.log(`montant insuffisant, il manque ${prixBoissan-montantInsere} DH.`);
        }else{
            console.log(`Distribution de : ${name}. Monnaie rendue : ${montantInsere-prixBoissan} DH.`)
        }
    }
    break;
    default :
    console.log("code de boisson invalide");  
}
