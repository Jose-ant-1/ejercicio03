console.log('Happy developing ✨')

function controlaCargaDOM() {
    console.log("La página a cargado");
}
document.addEventListener(Type="DOMContentLoaded", controlaCargaDOM);

const mostrar = document.getElementById('alumno');

let nota1;
let nota2;
let nota3;
let nota4;

while (isNaN(nota1)) {
    nota1 = Number(prompt("inserte la primera nota (vacío es 0)"));
}
while (isNaN(nota2)) {
    nota2 = Number(prompt("inserte la segunda nota (vacío es 0)"));
}
while (isNaN(nota3)) {
    nota3 = Number(prompt("inserte la tercera nota (vacío es 0)"));
}
while (isNaN(nota4)) {
    nota4 = Number(prompt("inserte la cuarta nota (vacío es 0)"));
}

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`La primera nota es ${nota1}`);
console.log(`La segunda nota es ${nota2}`);
console.log(`La tercera nota es ${nota3}`);
console.log(`La cuarta nota es ${nota4}`);
console.log(`la media es ${media}`);

if (media < 5){
    console.log(`El alumno suspendió con media de ${media}`);
    mostrar.innerHTML = `El alumno suspendió con media de ${media}`;
} else if (media >= 5 && media < 7) {
    console.log(`El alumno aprobó con una nota suficiente:  ${media}`);
    mostrar.innerHTML = `El alumno aprobó con una nota suficiente ${media}`;
} else if (media >= 7 && media < 9) {
    console.log(`El alumno aprobó con una nota buena: ${media}`);
    mostrar.innerHTML = `El alumno aprobó con una nota buena: ${media}`;
} else if (media >= 9 && media <= 10) {
    console.log(`El alumno aprobó con un sobresaliente: ${media}`);
    mostrar.innerHTML = `El alumno aprobó con un sobresaliente: ${media}`;
}
