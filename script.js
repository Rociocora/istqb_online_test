let mostrarDiezPreguntas = ["\n1.Which of the following is NOT a type of functional testing?",
"\n2.What is the main objective of regression testing?",
"\n3.Which test design technique is based on the requirements or functional specifications of the software?", 
"\n4.Which type of testing focuses on the internal structure of the software?",  
"\n5.Which of the following is NOT a static test design technique?",
"\n6.What is the main objective of acceptance testing?",
"\n7.Which testing is performed to determine how software behaves under extreme stress conditions?",
"\n8.Which document specifies the steps needed to execute a set of tests?",
"\n9.Which of the following is a fundamental principle of testing?",
"\n10.Which type of testing is used to verify that the system meets legal and regulatory requirements?"]



function imprimir(mensaje, idElemento) {
    document.getElementById(idElemento).innerText = mensaje;
}

function mostrarPreguntas() {
    mensaje = mostrarDiezPreguntas;
    imprimir(mensaje,"resultadoLista");
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
    let mensaje = "The correct answer is C.";
 
imprimir(mensaje,"respuestaCorrecta1");
}

function corregirRespuesta(){
    let respuestaSeleccionada = document.getElementById("respuestasPregunta").value;
    if (respuestaSeleccionada === "respuestaC"){
        mensaje = "The answer is correct. Your score is 2.";
    }
    else if(respuestaSeleccionada === ""){
        mensaje = "The anwer is not correct. Your score is 0."
        
    }
    else{
        mensaje = "The answer is not correct. Your score is -1.";
    }
imprimir(mensaje,"respuestaCorrecta2");
}

function eligePregunta() {
    let pregunta = document.getElementById("numeroPregunta").value;
    let posicionPregunta = mostrarDiezPreguntas.indexOf(elemento);
    let mensaje = ""
    if(posicionElemento === -1){
        mensaje = "El elemento no se encuentra en la lista";
       

    }else {
        mensaje = "El elemento " + pregunta + " esta en la posicion con indice " + posicionPregunta;
    }
    imprimir(mensaje,"resultadoPregunta");
}



