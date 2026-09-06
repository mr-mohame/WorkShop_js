//Inversez les caractères d'une chaîne de texte avec une boucle (ex: "hello" devient "olleh" ).


const texte = "mohamed";
let texteInverse= "";

for(let i=texte.length-1; i >= 0; i--){
    texteInverse += texte[i];
}
console.log(`original : ${texte}`);
console.log(`inverse : ${texteInverse}`);