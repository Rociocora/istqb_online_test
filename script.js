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
    let respuestaSeleccionada = document.getElementById("respuestasPregunta").value;
    let mensaje = "The correct answer is C";
 
imprimir(mensaje,"respuestaCorrecta1");
}

function corregirRespuesta(){
    let respuestaSeleccionada = document.getElementById("respuestasPregunta").value;
    if (respuestaSeleccionada === "respuestaC"){
        mensaje = "The answer is correct. Your score is 2.";
    }
    else if(respuestaSeleccionada ==="")
        mensaje = "The answer is not correct. Your score is 0.";
    else{
        mensaje = "The answer is not correct. Your score is -1.";
    }
imprimir(mensaje,"respuestaCorrecta2");
}
