function calcularPrecio() {

    var tipo = document.getElementById("tipo").value;
    var resultado = document.getElementById("resultado");

    switch(tipo){

        case "basico":
            resultado.innerHTML = "Precio estimado: $15.00";
            break;

        case "premium":
            resultado.innerHTML = "Precio estimado: $25.00";
            break;

        case "deluxe":
            resultado.innerHTML = "Precio estimado: $35.00";
            break;

        default:
            resultado.innerHTML = "Seleccione un producto.";
    }

}

function mensajeContacto() {

    alert("Gracias por comunicarse con Croa Croa. Su mensaje ha sido enviado.");

}