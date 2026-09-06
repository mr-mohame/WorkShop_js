//Attribuez une mention (A, B, C, F) selon la note : 90-100 (A), 80-89 (B), 70-79 (C), <70 (F).

let saisir = require('prompt-sync')()
let note = Number(saisir("enter la note : "));
if(note >= 90 && note <= 100){
    console.log("A");

}else if(note >= 80 && note <= 89){
    console.log("B");

}else if(note >= 70 && note <= 79){
    console.log("C");

}else{
    console.log("D");

}
