//Creamos constantes que traen info del DOM
const calle1 = document.getElementById("calle_origen"),
error1 = document.getElementById("error1"),
altura1 = document.getElementById("altura_origen"),
error2 = document.getElementById("error2"),
calle2 = document.getElementById("calle_destino"),
error3 = document.getElementById("error3"),
altura2 = document.getElementById("altura_destino"),
error4 = document.getElementById("error4"),
btn = document.getElementById("boton"),
choferes = document.getElementById("choferes");

//Declaramos las funciones que responderán a los eventos 

//La función valida ambas calles
function validar_calle (calle, error) {
    if (calle.value.length<4|| parseInt(calle.value)) {
        error.innerHTML= '<br> <p class= "inline-block bg-red-600 text-white font-bold">La calle ingresada es incorrecta</p>' 
        calle.addEventListener("focus", ()=> {
            error.innerHTML= "";
        })
    } else {
        error.innerHTML+= '<i class="fa-solid fa-circle-check fa-xl" style="color: #55ca58;"></i>'
    }
}


function validar_altura (altura, error) {
    if (parseInt(altura.value)<10|| isNaN(altura.value)) {
        error.innerHTML= '<br> <p class= "inline-block bg-red-600 text-white font-bold">La altura ingresada es incorrecta</p>';
        altura.addEventListener("focus", ()=> {
        error.innerHTML= "";
    })} 
    else {
        error.innerHTML+= '<i class="fa-solid fa-circle-check fa-xl" style="color: #55ca58;"></i>'
    }
    
};

function asignar_chofer () {
    //Se crea una clase que servirá de molde para los objetos que se creen posteriormente 
let chofer= class chofer {
    constructor (apellido, nombre, edad, DNI) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI; 
       }
}

//Se crean los objetos utilizando la clase chofer
let chofer1 = new chofer("Gonzales", "Fernando", "29 años", "37.345.237");
let chofer2 = new chofer("Fernandez", "Adrián", "70 años", "5.673.225");
let chofer3 = new chofer("Andrade", "Gabriel", "33 años", "34.825.322");

//Se crea el arreglo conductores que tendrá los distintos objetos creados 
const conductores = [chofer1, chofer2, chofer3];

//Se crea una variable que arroje un número aleatorio y se entra en un bucle si el número es mayor a 2
let num = Math.round(Math.random()*10);
while (num>2) {
            num = Math.round(Math.random()*10);
    };

    alert("El chofer asignado a tu viaje es " + JSON.stringify(conductores[num]));
    alert("Por cuestiones de seguridad pedile al chofer que te muestre alguna identificación que valide su identidad antes de ingresar al móvil");}

//creamos los eventos 
calle1.addEventListener("change", ()=> {
    validar_calle(calle1, error1)
});

calle2.addEventListener("change", ()=> {
    validar_calle(calle2,error3)
});

altura1.addEventListener("change", ()=> {
    validar_altura(altura1, error2)
});

altura2.addEventListener("change", ()=> {
    validar_altura(altura2, error4)
});

btn.addEventListener("click", (evento)=>{
    if (calle1.value === ""|| calle2.value ===""|| altura1.value ===""|| altura2.value === "") {
        evento.preventDefault();

        choferes.innerHTML = '<br> <p class= "inline-block bg-red-600 text-white font-bold">Debes completar todos los campos para poder pedir tu taxi</p>';
        btn.addEventListener("blur", ()=> {
            choferes.innerHTML = "";
        })
    } else {
        asignar_chofer();
        
    }
})
