// Variables, arrays 
const activities = []
const getData = async () => {
    await fetch('./data.json').then(res => {
        return res.json()
    }).then((data) => {
        for (let i = 0; i < data.activities.length; i++) {

            activities.push(data.activities[i])
        }
    })
}
getData()
console.log(activities)

const plans = [
    {
        name: "Basics",
        price: 1200,
        details: "8 class gym and 8 sala",
        credit: 16,
    },
    {
        name: "Intermediate",
        price: 1500,
        details: "12 gym class and 12 class",
        credit: 24,
    },
    {
        name: "Free pass",
        price: 1800,
        details: "Included all gym class and sala",
        credit: 500
    },
]



// Functions

// Register and login

function registrarUsuario(nombreRegistro, emailRegistro, contraseñaRegistro) {
    let validacion = true;
    localStorage.setItem("usuario", nombreRegistro.trim()); //setItem almacena el usuario en la posición "usuario"
    localStorage.setItem("password", contraseñaRegistro.trim()); // Almaceno la contraseña
    if (
        emailRegistro.value === "" ||
        contraseñaRegistro.value === "" ||
        nombreRegistro.value === ""
    ) {
        alert("Complete todos los campos para registrarse");
        validacion = false;
    }
    if (validacion) {
        location.href = "login.html";
    }
}


const bienvenida = document.getElementById("bienvenidaH3");
let usuarioStorage = localStorage.getItem("usuario");
bienvenida.innerHTML =
    "Bienvenido/a" + " " + `<strong>${usuarioStorage}</strong>`;

function guardarUsuario(usuario, pass) {
    if (usuario.trim() === "" || pass.trim() === "") {
        //Chequea que el usuario recibido no esté vacío.
        //El método trim elimina los espacios en blanco al inicio y al final del mismo.
        alert("El usuario está vacío o los datos son incorrectos");
    } else {
        let usuarioStorage = localStorage.getItem("usuario");
        let passwordStorage = localStorage.getItem("password");

        if (usuario === usuarioStorage && passwordStorage === pass) {
            alert(" Bienvenido/a :" + " " + usuario);

            location.href = "profile.html";
        }
    }
}

// Función que agregaría al créditos según el plan elegido


// let purchase = prompt(`cúal pase queres comprar? basics, intermediate or free Pass`).toLowerCase();
// let credit = 0;
// function addCreditsToUsers() {
//         while (purchase != "basics" && purchase != "intermediate" && purchase != "free pass") {
//         purchase = prompt(`Ingrese alguno de estos pases: basics, intermediate or freePass`);
//     }

//     for (let i = 0; i < plans.length; i++) {
//         if (plans[i].name.toLowerCase() == purchase){
//             credit = plans[i].credit
//         }
//     }
// }
// addCreditsToUsers()
// console.log(credit);

// Función que filtra las clases

let dias = prompt(`que días desea filtrar?`);

function categoriesFilter() {
    let auxiliar = [];
    for (let i = 0; i < activities.length; i++) {
        let daysArr = activities[i].days;
        for (let j = 0; j < daysArr.length; j++) {
            if (daysArr[j] == dias) {
                auxiliar.push(activities[i].name);
            }
        }
    }
    alert(`los días ${dias} hay las siguientes clases ${auxiliar.join(" ")}`);
}
categoriesFilter()



// Functions to apoointment class


