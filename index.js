console.log('Happy developing ✨');

document.addEventListener("DOMContentLoaded", () => {
    console.log("La página ha cargado");

    let PromptOInput = Number(prompt("introduzca 1 para hacer por prompt o 0 para hacer por input"));
    if (PromptOInput) {
        pedirNotas();
        mostrarNotasPorConsola();
        mostrarNotasPrompt();
        hacerMedia();
        mostrarMediaPorConsola();
        mostrarResultado();
    } else {
        pedirNotaPorInput();
    }

});

const mostrar = document.getElementById('alumno');

let nota1;
let nota2;
let nota3;
let nota4;
let media;

function pedirNotaPorInput() {
    mostrar.innerHTML = `<label>Nota 1<input placeholder="Introduzca la nota" type="number" id="nota1" name="nota1" min="0" max="10" required/></label><br>
                         <label>Nota 2<input placeholder="Introduzca la nota" type="number" id="nota2" name="nota2" min="0" max="10" required/></label><br>
                         <label>Nota 3<input placeholder="Introduzca la nota" type="number" id="nota3" name="nota3" min="0" max="10" required/></label><br>
                         <label>Nota 4<input placeholder="Introduzca la nota" type="number" id="nota4" name="nota4" min="0" max="10" required/></label><br>
                         <button onclick="hacerMediaConInput()">Calcular Media</button>`;
}

function validarNotas() {
    if (comprobarNumero(nota1)) {
        mostrar.innerHTML = "Error en la nota 1: Se debe introducir un número entre 0 y 10";
        return false;
    }
    if (comprobarNumero(nota2)) {
        mostrar.innerHTML = "Error en la nota 2: Se debe introducir un número entre 0 y 10";
        return false;
    }
    if (comprobarNumero(nota3)) {
        mostrar.innerHTML = "Error en la nota 3: Se debe introducir un número entre 0 y 10";
        return false;
    }
    if (comprobarNumero(nota4)) {
        mostrar.innerHTML = "Error en la nota 4: Se debe introducir un númeor entre 0 y 10";
        return false;
    }
    return true;
}

function hacerMediaConInput() {
    nota1 = Number(document.getElementById('nota1').value);
    nota2 = Number(document.getElementById('nota2').value);
    nota3 = Number(document.getElementById('nota3').value);
    nota4 = Number(document.getElementById('nota4').value);
    if(!validarNotas())return;


    hacerMedia();
    mostrarNotasInput();
    mostrarNotasPorConsola();
    mostrarMediaPorConsola();
    mostrarResultado();
}

function mostrarNotasInput() {
    mostrar.innerHTML = `Las notas introducidas son: <br>
                         nota 1 = ${nota1}<br>
                         nota 2 = ${nota2}<br>
                         nota 3 = ${nota3}<br>
                         nota 4 = ${nota4}<br>`;
}

function mostrarNotasPrompt() {
    mostrar.innerHTML = `Las notas introducidas son: <br>
                         nota 1 = ${nota1}<br>
                         nota 2 = ${nota2}<br>
                         nota 3 = ${nota3}<br>
                         nota 4 = ${nota4}<br>`
}

function mostrarMediaPorConsola() {
    console.log(`La nota media es ${media}`)
}

function pedirNotas() {
    while (comprobarNumero(nota1)) {
        nota1 = Number(prompt("inserte la primera nota (entre 0 y 10, vacío es 0)"));
    }
    while (comprobarNumero(nota2)) {
        nota2 = Number(prompt("inserte la segunda nota (entre 0 y 10, vacío es 0)"));
    }
    while (comprobarNumero(nota3)) {
        nota3 = Number(prompt("inserte la tercera nota (entre 0 y 10, vacío es 0)"));
    }
    while (comprobarNumero(nota4)) {
        nota4 = Number(prompt("inserte la cuarta nota (entre 0 y 10, vacío es 0)"));
    }
}

function comprobarNumero(nota) {
    return isNaN(nota) || nota < 0 || nota > 10;
}

function hacerMedia() {
    media = (nota1 + nota2 + nota3 + nota4) / 4;
}

function mostrarResultado() {
/*
        if (media < 5) {
            mostrar.innerHTML += `El alumno suspendió con media de ${media}`;
        }
        if (media >= 5 && media < 7) {
            mostrar.innerHTML += `El alumno aprobó con un bien: ${media}`;
        }
        if (media >= 7 && media < 9) {
            mostrar.innerHTML += `El alumno aprobó con un notable: ${media}`;
        }
        if (media >= 9 && media <= 10){
            mostrar.innerHTML += `El alumno aprobó con un sobresaliente: ${media}`;
        }
*/
        if (media < 5){
            mostrar.innerHTML += `El alumno suspendió con media de ${media}`;
        }
        if (media < 7) {
            mostrar.innerHTML += `El alumno aprobó con una nota suficiente: ${media}`;
        }
        if (media < 9) {
            mostrar.innerHTML += `El alumno aprobó con una nota buena: ${media}`;
        } else {
            mostrar.innerHTML += `El alumno aprobó con un sobresaliente: ${media}`;
        }

}

function mostrarNotasPorConsola() {
    console.log(`La primera nota es ${nota1}`);
    console.log(`La segunda nota es ${nota2}`);
    console.log(`La tercera nota es ${nota3}`);
    console.log(`La cuarta nota es ${nota4}`);
}
