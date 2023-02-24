alert ("Bienvenido a Taxify, tu forma segura de viajar");
let altura;
let calle;

function pedir_taxi (calle, altura) {
    calle = prompt ("Por favor, ingresa la calle");
    let long= calle.length;

    while (long===0) {
        calle = prompt("La calle ingresada es incorrecta, intente de nuevo.");
        long = calle.length;
    };

    if (long > 0) {
        altura = parseInt(prompt("Ingrese la altura"));
    };

    while (altura<4 || altura>9999 || isNaN(altura)) {
        altura = parseInt(prompt("La altura ingresada es incorrecta"));
        
    };

    if (altura>0 || altura <= 9999) {
        alert ("Buscando el móvil más cercano");
        alert ("Tu taxi está en camino. Que tengas un buen viaje!")
    };

    };


pedir_taxi(calle, altura);