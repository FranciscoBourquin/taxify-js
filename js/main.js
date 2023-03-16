//Se crean 4 variables que mostraran los errores del programa
let error_edad = "Lo sentimos, por cuestiones de seguridad los menores de 18 años no pueden utiliar nuestra app";
let error_calle = "La calle ingresada es incorrecta, intenta de nuevo";
let error_altura = "La altura ingresada es incorrecta, intenta de nuevo";
let error_intentos = "Lo sentimos, te quedaste sin intentos. Intenta más tarde.";

//Se crea el arreglo errores
const errores = [];

//Se ingresan los mensajes de error dentro del arreglo errores
for(let i = 0; i<4; i++) {
    if (i === 0) {
        errores[i] = error_edad;
    }
    else if (i === 1){
        errores[i] = error_calle;
    }
    else if (i === 2) {
        errores[i] = error_altura;
    }
    else {
        errores[i] = error_intentos
    }
}

//Función principal del programa, contiene 3 parámetros 
function pedir_taxi (errores, saludar, verificar_edad) {
    errores;
    saludar();
    verificar_edad(despedida, verificar_calle_origen);
}

//Funcion q da la bienvenida a la aplicación 
function saludar (saludo=alert("Bienvenido a Taxify, tu forma segura de viajar!")) {
    
}

//Funcion q verifica la edad 
function verificar_edad(despedida, verificar_calle_origen) {
    let edad_adulto = 18;
    let edad = prompt("Por favor ingresa tu edad");
    
    if (edad<edad_adulto) { //Si el usuario no es adulto (18+), tira un error y se ejecuta el primer parámetro.
        alert(errores[0]);
        despedida();
    }

    else { //Si el usuario es mayor se ejecuta el segundo parámetro
        verificar_calle_origen();
    }
}

//funcion que pide la calle y verifica que se ingrese correctamente 
function verificar_calle_origen (p1, p2) {
    let calle = prompt("Ingresa la calle de origen");
    let long = calle.length
    i = 2;

    do {
        alert(errores[1] ` Te quedan ${i} intentos`)
        
    } while ((calle.length<4 ||parseInt(calle)) && i>0); //Bucle que pide reingresar la calle en caso de error

    if(i ===0) {
        alert(errores[3]);
    }
    else {
        verificar_altura(despedida, verificar_identidad);
    }
}

function verificar_altura (despedida, verificar_identidad)

//funcion que verifica la identidad 

function verificar_identidad (despedida, identidad_choferes)

//Funcion despedida que sale de la app luego de 3 errores o al concretar el pedido de taxi
function despedida(despedida = alert("Muchas gracias por utilizar Taxify!")) {

};

pedir_taxi(errores, saludar, verificar_edad);
