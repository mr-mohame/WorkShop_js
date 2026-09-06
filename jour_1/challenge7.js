//Échangez les valeurs de deux variables a et b sans utiliser de troisième variable temporaire.
let a = 10;
let b = 20;

a = a + b;
console.log(a);
b = a - b;
console.log("b = ",b);
a = a - b;
console.log("a = ",a);
