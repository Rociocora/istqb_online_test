
function imprimir(mensaje, idElemento) {
    document.getElementById(idElemento).innerText = mensaje;
}


function Nombre(){
    //1.Obtener los valores del formulario. Para ello ponemos el id del elemento del formulario y y ponemos .value para obtener su valor y guardarlo en una variable.
    let introduceNombre = document.getElementById("introduceNombre").value;
    let mensaje = "Welcome " + introduceNombre + " to ISTQB online test";
    imprimir(mensaje, "darBienvenida");
}


