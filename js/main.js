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
function validar_calle (p) {
    if (p === calle1) { //Si el parámetro es calle1
            if (calle1.value.length<4 || parseInt(calle1.value)) {
                error1.innerHTML+= '<br> <p class="inline-block bg-red-600 text-white font-bold">La calle ingresada es incorrecta</p>'
                calle1.addEventListener("focus", ()=> {
                error1.innerHTML = "";
                    })
            
           } else {
                    error1.innerHTML+= '<i class="fa-solid fa-circle-check fa-xl" style="color: #55ca58;"></i>'
                }
        
        } 
        else {
            if (calle2.value.length<4 || parseInt(calle2.value)) {
                error3.innerHTML+= '<br> <p class="inline-block bg-red-600 text-white font-bold">La calle ingresada es incorrecta</p>'
                calle2.addEventListener("focus", ()=> {
                error3.innerHTML = "";
                    })
            
           } else {
                    error3.innerHTML+= '<i class="fa-solid fa-circle-check fa-xl" style="color: #55ca58;"></i>'
                }
        }

}

function validar_altura (p) {
    if (p === altura1) { //Si el parámetro es altura1
        if (altura1.value<10) {
            error2.innerHTML+= '<br> <p class="inline-block bg-red-600 text-white font-bold">La altura ingresada es incorrecta</p>'
            altura1.addEventListener("focus", ()=> {
            error2.innerHTML = "";
            })
        
       } else {
                error2.innerHTML+= '<i class="fa-solid fa-circle-check fa-xl" style="color: #55ca58;"></i>'
            }
    
    } 
    else {
        if (altura2.value <10) {
            error4.innerHTML+= '<br> <p class="inline-block bg-red-600 text-white font-bold">La altura ingresada es incorrecta</p>';
            altura2.addEventListener("focus", ()=> {
            error4.innerHTML = "";
                })
        
       } else {
                error4.innerHTML+= '<i class="fa-solid fa-circle-check fa-xl" style="color: #55ca58;"></i>'
            }
    }
};

//creamos los eventos 
calle1.addEventListener('change', ()=> {
    validar_calle(calle1)
});

calle2.addEventListener('change', ()=> {
    validar_calle(calle2)
});

altura1.addEventListener('change', ()=> {
    validar_altura(altura1)
});

altura2.addEventListener('change', ()=> {
    validar_altura(altura2)
});
