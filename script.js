function imprimir(mensaje, idElemento) {
    document.getElementById(idElemento).innerText = mensaje;
}

let lista = ["C", "B", "B", "C", "C", "A", "B", "B", "C", "A"];
let puntuaciones = new Array(lista.length).fill(0);
let estudiantes = [];

function nombre() {
    let introduceNombre = document.getElementById("welcomename").value;

    let mensaje;
    if (introduceNombre === "") {
        mensaje = "The Name field is required";
    } else {
        mensaje = "Welcome " + introduceNombre;

        // Reiniciar los valores del formulario solo si el nombre no está vacío
        let selects = document.querySelectorAll("select");
        selects.forEach(select => select.value = "");

        // Restablecer las puntuaciones
        puntuaciones.fill(0);

        // Limpiar mensajes anteriores
        for (let i = 1; i <= lista.length; i++) {
            imprimir("", "respuestaCorrecta" + i);
            imprimir("", "verPuntuacion" + i);
        }
        imprimir("", "puntuacionFinal");
    }
    imprimir(mensaje, "darBienvenida");
}

function enviarRespuesta(numeroPregunta) {
    let respuestaSeleccionada = lista[numeroPregunta - 1];
    let mensaje = "The correct answer is " + respuestaSeleccionada;

    imprimir(mensaje, "respuestaCorrecta" + numeroPregunta);
}

function corregirRespuesta(numeroPregunta) {
    let seleccionPregunta = document.getElementById("respuestasPregunta" + numeroPregunta);
    let respuestaSeleccionada = seleccionPregunta.value;
    let respuestaCorrecta = lista[numeroPregunta - 1];
    let mensaje = "";

    if (respuestaSeleccionada === respuestaCorrecta) {
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
        corregirRespuesta(i + 1); // Llamar a corregirRespuesta antes de sumar
        total += puntuaciones[i];
    }
    
    document.getElementById("puntuacionFinal").innerHTML = "<strong style='font-size: 24px;'>Your Total Score Is: " + total + "</strong>";
    
    let introduceNombre = document.getElementById("welcomename").value;
    
    estudiantes.push({ nombre: introduceNombre, puntuacion: total });
    
    estudiantes.sort((a, b) => b.puntuacion - a.puntuacion); // Ordenar por puntuación de mayor a menor

}

function mostrarRanking() {
    let rankingHTML = "<ol>";
    estudiantes.forEach(estudiante => {
        rankingHTML += "<li>" + estudiante.nombre + ": " + estudiante.puntuacion + "</li>";
    });
    rankingHTML += "</ol>";
    document.getElementById("listaRanking").innerHTML = rankingHTML;
}