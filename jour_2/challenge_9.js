//Validez l'accès si isLoggedIn === true ET hasToken === true , sinon affichez le motif de l'erreur.

let isLoggedIn = true;
let hasToken = true;

if(isLoggedIn && hasToken ){
    console.log("Accès autorisé");

}else if(!isLoggedIn){
    console.log("Erreur : Utilisateur non connecté");

}else if(!hasToken){
    console.log("Erreur : Jeton d'authentification manquant ou invalide");

}