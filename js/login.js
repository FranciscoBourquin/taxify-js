//login
//Creamos constantes que tomarán elementos del DOM
const user = document.getElementById("user"),
error_user = document.getElementById("error_user"),
pass = document.getElementById("pass"),
error_pass = document.getElementById("error_pass"),
check = document.getElementById("recordar"),
boton = document.getElementById("boton_login"),
error_boton = document.getElementById("error_boton"),
form_login = document.getElementById("login"),
titulo = document.getElementById("titulo"),
logo = document.getElementById("logo"),
taxi = document.getElementById("taxi");
let sesion = false;
//Funciones de validación 

//Validar usuario y contraseña
function validar_login (input, error) {
    if (input.value.length<6) {
        error.innerHTML+= '<p class="error inline-block bg-red-600 text-white font-bold">El texto ingresado debe contener al menos 6 caracteres';
        input.addEventListener("focus", ()=> {
            error.innerHTML = "";
        })
    } else {
        error.innerHTML+= '<i class="fa-solid fa-circle-check fa-xl" style="color: #55ca58;"></i>';
        input.addEventListener("focus", ()=> {
            error.innerHTML = "";
        })
    }
  };

  //Guardar datos de sesión 
function Guardar_datos (user, pass, check) {
    let check_ = check.value;
    if (check_.checked) {
        let saved_user = localStorage.getItem("Usuario", user.value);
        let saved_pass = localStorage.getItem("Contraseña", pass.value);
        
    } else {
        
    }
  }

  //Creamos los eventos que llamarán las funciones 
  user.addEventListener("blur", ()=> {
    validar_login (user, error_user);
  });

  pass.addEventListener("blur", ()=> {
    validar_login(pass, error_pass)
});

boton.addEventListener("click", (evento, sesion)=> {
    if (user.value===""||pass.value===""||user.value.length<6||pass.value.length<6) {
        sesion = sesion;
        evento.preventDefault();
        error_boton.innerHTML+= '<br> <p class="error inline-block bg-red-600 text-white font-bold">Debes completar todos los campos';
        boton.addEventListener("blur", ()=> {
            error_boton.innerHTML= "";
        })
    } else {
        sesion = true;
        evento.preventDefault();
        form_login.classList.add("hidden");
        titulo.textContent ="Taxify | tu forma segura de viajar"
        taxi.classList.remove("hidden");
        
    }
})