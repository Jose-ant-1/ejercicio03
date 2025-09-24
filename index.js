console.log('Happy developing ✨');

function controlaCargaDOM() {
    console.log("La página ha cargado");
}

document.addEventListener("DOMContentLoaded", controlaCargaDOM);

const mostrar = document.getElementById('alumno');

let nota1;
let nota2;
let nota3;
let nota4;
let media;


function pedirNotas() {
    while (isNaN(nota1) || comprobarRangoNumero(nota1)) {
        nota1 = Number(prompt("inserte la primera nota (entre 0 y 10, vacío es 0)"));
    }
    while (isNaN(nota2) || comprobarRangoNumero(nota2)) {
        nota2 = Number(prompt("inserte la segunda nota (entre 0 y 10, vacío es 0)"));
    }
    while (isNaN(nota3) || comprobarRangoNumero(nota3)) {
        nota3 = Number(prompt("inserte la tercera nota (entre 0 y 10, vacío es 0)"));
    }
    while (isNaN(nota4) || comprobarRangoNumero(nota4)) {
        nota4 = Number(prompt("inserte la cuarta nota (entre 0 y 10, vacío es 0)"));
    }
}

function comprobarRangoNumero(nota) {
    return nota < 0 || nota > 10;
}

function hacerMedia() {
    media = (nota1 + nota2 + nota3 + nota4) / 4;
}

function mostrarResultado() {

    if (media < 5){
        mostrar.innerHTML = `El alumno suspendió con media de ${media}`;
    } else if (media < 7) {
        mostrar.innerHTML = `El alumno aprobó con una nota suficiente: ${media}`;
    } else if (media < 9) {
        mostrar.innerHTML = `El alumno aprobó con una nota buena: ${media}`;
    } else {
        mostrar.innerHTML = `El alumno aprobó con un sobresaliente: ${media}`;
    }
}

function mostrarNotasPorConsola() {
    console.log(`La primera nota es ${nota1}`);
    console.log(`La segunda nota es ${nota2}`);
    console.log(`La tercera nota es ${nota3}`);
    console.log(`La cuarta nota es ${nota4}`);
    console.log(`La nota media es ${media}`)
}

pedirNotas();
hacerMedia();
mostrarNotasPorConsola();
mostrarResultado();
