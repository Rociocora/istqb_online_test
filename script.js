function imprimir(mensaje, idElemento) {
    document.getElementById(idElemento).innerText = mensaje;
}

function nombre(){
    //1.Obtener los valores del formulario. Para ello ponemos el id del elemento del formulario y y ponemos .value para obtener su valor y guardarlo en una variable.
    let introduceNombre = document.getElementById("introduceNombre").value;

   let mensaje
        if (introduceNombre === "") {
           mensaje = "The Name field is required";
        }
        else {
           mensaje = "Welcome " + introduceNombre;
        }
    imprimir(mensaje, "darBienvenida");
}

let lista = ["C","B","B","C","C","A","B","B","C","A"];
let puntuaciones = new Array(lista.length).fill(0);

function enviarRespuesta (numeroPregunta) {
    //1. Obtenemos la opcion seleccionada
    let respuestaSeleccionada = lista[numeroPregunta-1]
    let mensaje = "The correct answer is " + respuestaSeleccionada;
 
imprimir(mensaje,"respuestaCorrecta"+numeroPregunta);
}



function corregirRespuesta(numeroPregunta) {
    let seleccionPregunta = document.getElementById("respuestasPregunta" + numeroPregunta);
    let respuestaSeleccionada = seleccionPregunta.value;
    let respuestasCorrecta = lista[numeroPregunta - 1]
    let mensaje = "";
    
    if (respuestaSeleccionada === respuestasCorrecta) {
        mensaje = "The answer is correct. Your score is 2.";
        puntuaciones[numeroPregunta - 1] = 2;
    } else if (respuestaSeleccionada === "") {
        mensaje = "The answer is not correct. Your score is 0.";
        puntuaciones[numeroPregunta - 1] = 0;
    } else {
        mensaje = "The answer is not correct. Your score is -1.";
        puntuaciones[numeroPregunta - 1] = -1;
    }
    document.getElementById("verPuntuacion" + numeroPregunta).innerText = mensaje;
}

function puntuacionFinal() {
    let total = 0;
    for (let i = 0; i < puntuaciones.length; i++) {
        total += puntuaciones[i];
    }
    document.getElementById("puntuacionFinal").innerHTML = "<strong style='font-size: 24px;'>Your Total Score Is: " + total + "</strong>";
}

function imprimir(mensaje, idElemento) {
    document.getElementById(idElemento).innerText = mensaje;
}
