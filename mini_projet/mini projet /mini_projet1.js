// Objectif : Déterminer si un élève est admis et quelle est sa mention en fonction de sa moyenne.

let moyenne = 16.99;

if(moyenne>=0 && moyenne<=20){
    if(moyenne<10){
        console.log("Ajourne");
    }else if(moyenne>=10 && moyenne<11.99){
        console.log("Admis - Mentien Passable");
    
    }else if(moyenne>=12 && moyenne<13.99){
        console.log("Admis - Mentien Aasssez Bien");
    
    }else if(moyenne>=14 && moyenne<15.99){
        console.log("Admis - Mentien Bien");
    
    }else if(moyenne>=16){
        console.log("Admis - Mentien Bien");
    
    }
}else{
    console.log("la note doit entre 0 et 20 :");
}


