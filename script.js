/*let lista = ["B. Pruebas de Regresión","C. Todos aquellos que puedan tener algún uso para la herramienta","A. Requerimientos", "A. Analista funcional", "A. Diseño de Prueba","C. Calculos incorrectos", "C. Validan que el sistema esté completo", "B. Prueba de Aceptación de Usuario", "A. Evaluan las funciones que el sistema debe realizar", "A. Se  basan en la estructura interna del sistema"];


function mostrarrespuesta(numeroPregunta) {
    let respuestaSeleccionada = document.getElementById("pregunta"+numeroPregunta).value;
    let mensaje = "Su respuesta: " + respuestaSeleccionada;
    imprimir(mensaje, "hacontestado"+numeroPregunta);
    
    let mensaje2 = "La respuesta correcta es " + lista[numeroPregunta-1];
    imprimir(mensaje2, "mostrarrespuesta"+numeroPregunta);

}

let respuetas = ["B","C","A"]

function mostrarrespuesta(numeroPregunta) {
    let respuestaCorrecta = lista[numeroPregunta-1];
    let mensaje = "La respuesta correcta es " + respuestaCorrecta;
    imprimir(mensaje,"mostrarRespuesta"+numeroPregunta);
}*/

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
    
    if (respuestaSeleccionada === respuestasCorrecta) {
        mensaje = "The answer is correct. Your score is 2.";
    } else if (respuestaSeleccionada === "") {
        mensaje = "The answer is not correct. Your score is 0.";
    } else {
        mensaje = "The answer is not correct. Your score is -1.";
    }
    document.getElementById("verPuntuacion" + numeroPregunta).innerText = mensaje;
}


/*function corregirRespuesta(numeroPregunta){
    let respuestaSeleccionada = lista[numeroPregunta-1];
    if (respuestaSeleccionada === lista[numeroPregunta-1]){
        mensaje = "The answer is correct. Your score is 2.";
    }
    else if(respuestaSeleccionada === ""){
        mensaje = "The anwer is not correct. Your score is 0."
        
    }
    else{
        mensaje = "The answer is not correct. Your score is -1.";
    }
imprimir(mensaje,"respuestaCorrecta"+numeroPregunta);
}*/
