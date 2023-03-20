//Se crean 4 variables que mostraran los errores del programa
let error_edad = "Lo sentimos, por cuestiones de seguridad los menores de 18 años no pueden utiliar nuestra app";
let error_calle = "La calle ingresada es incorrecta, intenta de nuevo";
let error_altura = "La altura ingresada es incorrecta, intenta de nuevo";
let error_intentos = "Lo sentimos, te quedaste sin intentos. Por favor, volvé a intentar más tarde.";

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
    let edad = parseInt(prompt("Por favor ingresa tu edad"));
    
    if (edad<edad_adulto) { //Si el usuario no es adulto (18+), tira un error y se ejecuta el primer parámetro.
        alert(errores[0]);
        despedida();
    }

    else { //Si el usuario es mayor se ejecuta el segundo parámetro
        verificar_calle_origen(despedida, verificar_altura);
    }
}

//funcion que pide la calle de origen y verifica que se ingrese correctamente 
function verificar_calle_origen (despedida, verificar_altura) {
    let calle = prompt("Ingresa la calle de origen");
    let long = calle.length;
    i = 2;

   if((long<4 || parseInt(calle))&& i>0){
            do {
                alert(errores[1] + ` Te quedan ${i} intentos`);
                i--;
                calle = prompt("Ingresa la calle de origen nuevamente");
                long = calle.length;
                
            } while ((long<4 ||parseInt(calle)) && i>0); //Bucle que pide reingresar la calle en caso de error
            if(i ===0) {
                alert(errores[3]);
                despedida();
            }
            else {
                verificar_altura(despedida, verificar_calle_destino);
            }
   }
   else {
    verificar_altura(despedida, verificar_calle_destino);
   }

};

//Funcion que verifica la altura de la calle 

function verificar_altura (despedida, verificar_calle_destino) {
    let altura = parseInt(prompt("Ingresa la altura de la calle")); 
    i = 2;

   if((altura<10 || isNaN(altura)|| altura>10000) && i>0) {

        do {
            alert(errores[2] + ` Te quedan ${i} intentos`);
            altura = parseInt(prompt("Ingresa la altura de la calle nuevamente"));
            i--;
        } while ((altura<10 || isNaN(altura)||altura>10000) && i>0);

        if(i===0) {
            alert(errores[3]);
            despedida();
        }
        else {
            verificar_calle_destino(despedida, verificar_altura_destino);
        }
    }
    else {
        verificar_calle_destino(despedida, verificar_altura_destino);
    }
};

//Función que verifica la calle de destino 
function verificar_calle_destino (despedida, verificar_altura_destino) {
    let calle_d = prompt("Ingresa la calle de destino");

    let long2 = calle_d.length;
    i = 2;

   if((long2<4||parseInt(calle_d)) && i>0) {
        do {
            alert(errores[1] + ` Te quedan ${i} intentos`);
            i--;
            calle_d = prompt("Ingresa la calle de destino nuevamente");
            long2 = calle_d.length;
            
        } while ((calle_d.length<4 ||parseInt(calle_d)) && i>0); //Bucle que pide reingresar la calle en caso de error

        if(i ===0) {
            alert(errores[3]);
            despedida();
        }
        else {
            verificar_altura_destino(despedida, verificar_identidad);
        }
   }
   else {
    verificar_altura_destino(despedida, verificar_identidad);
   }
}; 

//Funcion que verifica la altura de la calle de destino 
function verificar_altura_destino(despedida, verificar_identidad) {

    let altura_d = parseInt(prompt("Ingresa la altura de la calle")); 
    i = 2;

   if((altura_d<10||isNaN(altura_d)) && i>0) {

    do {
        alert(errores[2] + ` Te quedan ${i} intentos`);
        i--;
        altura_d = parseInt(prompt("Ingresa la altura de la calle nuevamente"));
        
    } while ((altura_d<10 || isNaN(altura_d)) && i>0);

    if (i===0) {
        errores[3]; 
        despedida();
    }
    else {
        verificar_identidad(despedida,choferes);
    }
   }
   else {
    verificar_identidad(despedida, choferes);
   }
};

//Se crea una clase que servirá de molde para los objetos que se creen psoteriormente 
const chofer = class chofer {
    constructor (apellido, nombre, edad, dni) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni; 
       }
}

//Se crean los objetos utilizando la clase chofer
let chofer1 = new chofer("Gonzales", "Fernando", "29 años", "37.345.237");
let chofer2 = new chofer("Fernandez", "Adrián", "70 años", "5.673.225");
let chofer3 = new chofer("Andrade", "Gabriel", "33 años", "34.825.322");

//Se crea el arreglo choferes que tendrá los distintos objetos creados 
const choferes = [chofer1, chofer2, chofer3];

//funcion que verifica la identidad 
function verificar_identidad (despedida, choferes) {
    let num = Math.round(Math.random()*10);
    do {
            num = Math.round(Math.random()*10);
    } while (num>2);

    if (num <=2){
        alert("El chofer asignado a tu viaje es " + JSON.stringify(choferes[num]));
        alert("Por cuestiones de seguridad, pedile al chofer que verifique su identidad exhibiendo su DNI antes de subir al móvil");
        despedida();
    }   

};

//Funcion despedida que sale de la app luego de 3 errores o al concretar el pedido de taxi
function despedida(despedida = alert("Muchas gracias por utilizar Taxify!")) {

};

pedir_taxi(errores, saludar, verificar_edad);
