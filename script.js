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

    

function enviarRespuesta () {
    //1. Obtenemos la opcion seleccionada
    let respuestaSeleccionada = document.getElementById("respuestasPregunta1").value;
    let mensaje = "The correct answer is C";
    imprimir(mensaje,"respuestaCorrecta1");
}


