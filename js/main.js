// creación de variables
alert ("Bienvenido a Taxify, tu forma segura de viajar");

let calle = "";
let altura = 0;

// Creo la función

function pedir_taxi(calle, altura) {
    edad = 0; 

    //Pedimos la edad

    edad = parseInt(prompt("Por favor ingresá tu edad"));

    if (edad < 15) {
        alert("Por cuestiones de seguridad no permitimos que menores de 15 años utilicen la aplicación");
        alert("Gracias por confiar en Taxify.")

    } else {

            // Pedimos la calle 

    calle = prompt ("Por favor ingresá la calle");
    long = calle.length

    //Validamos que sea una calle de longitud válida

    while (long<4) {
        
        alert ("La calle ingresada es incorrecta. Intentá de nuevo");
        calle = prompt("Por favor ingresá la calle"); 
        long = calle.length
    }

//Pedimos la altura y convertimos a número

altura = parseInt(prompt("Por favor ingresa la altura"));

while (altura>9999 || altura<0 || isNaN(altura)) {
    
    alert("Altura incorrecta por favor, intentá de nuevo");
    altura = prompt("Ingresá la altura");
}

alert("Buscando el móvil más cercano"); 
alert("Tu taxi está en camino. Que tengas buen viaje!");
alert("Gracias por confiar en Taxify.");

}
    }
    
// Llamo la función

pedir_taxi (calle, altura);