


// Variables, arrays 
// const activities = []
// const getData = async () => {
//     await fetch('./data.json').then(res => {
//         return res.json()
//     }).then((data) => {
//         for (let i = 0; i < data.activities.length; i++) {

//             activities.push(data.activities[i])
//         }
//     })
// }
// getData()
// console.log(activities)

// const plans = [
//     {
//         name: "Basics",
//         price: 1200,
//         details: "8 class gym and 8 sala",
//         credit: 16,
//     },
//     {
//         name: "Intermediate",
//         price: 1500,
//         details: "12 gym class and 12 class",
//         credit: 24,
//     },
//     {
//         name: "Free pass",
//         price: 1800,
//         details: "Included all gym class and sala",
//         credit: 500
//     },
// ]



// Functions

// Register and login

// function registrarUsuario(nombreRegistro, emailRegistro, contraseñaRegistro) {
//     let validacion = true;
//     localStorage.setItem("usuario", nombreRegistro.trim()); //setItem almacena el usuario en la posición "usuario"
//     localStorage.setItem("password", contraseñaRegistro.trim()); // Almaceno la contraseña
//     if (
//         emailRegistro.value === "" ||
//         contraseñaRegistro.value === "" ||
//         nombreRegistro.value === ""
//     ) {
//         alert("Complete todos los campos para registrarse");
//         validacion = false;
//     }
//     if (validacion) {
//         location.href = "login.html";
//     }
// }


// const bienvenida = document.getElementById("welcomeH3");
// let usuarioStorage = localStorage.getItem("usuario");
// bienvenida.innerHTML =
//     "Bienvenido/a" + " " + `<strong>${usuarioStorage}</strong>`;

// function guardarUsuario(usuario, pass) {
//     if (usuario.trim() === "" || pass.trim() === "") {
//         //Chequea que el usuario recibido no esté vacío.
//         //El método trim elimina los espacios en blanco al inicio y al final del mismo.
//         alert("El usuario está vacío o los datos son incorrectos");
//     } else {
//         let usuarioStorage = localStorage.getItem("usuario");
//         let passwordStorage = localStorage.getItem("password");

//         if (usuario === usuarioStorage && passwordStorage === pass) {
//             alert(" Bienvenido/a :" + " " + usuario);

//             location.href = "profile.html";
//         }
//     }
// }

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

// let dias = prompt(`que días desea filtrar?`);

// function categoriesFilter() {
//     let auxiliar = [];
//     for (let i = 0; i < activities.length; i++) {
//         let daysArr = activities[i].days;
//         for (let j = 0; j < daysArr.length; j++) {
//             if (daysArr[j] == dias) {
//                 auxiliar.push(activities[i].name);
//             }
//         }
//     }
//     alert(`los días ${dias} hay las siguientes clases ${auxiliar.join(" ")}`);
// }
// categoriesFilter()



// Functions to appointment class

const plus = document.querySelector("#plus");
const sectionPrices = document.querySelector("#section-prices")

/****************** OPEN SHOP **********************/
plus.addEventListener("click", ()=> {
    if (sectionPrices.classList.contains("prices")){
        sectionPrices.classList.remove("prices")
    }else {
        sectionPrices.classList.add("prices-open")
    }
})




/****************** TOTAL PRICE **********************/

/****************** DELETE ITEMS **********************/

/****************** MODIFICATE BUTTON **********************/

/****************** BUY **********************/
const credits = document.querySelector(".active-pass-credits")
const activePass = document.querySelector(".active-pass")
const creditsAvailable = document.querySelector(".active-pass-p")

function agregarCreditos(e){
let respuesta = prompt("Seguro que quieres comprar este plan?")

if(respuesta === "si") {
    credits.innerHTML =
    `${e.target.parentElement.children[1].children[1].textContent}`;
    activePass.innerHTML = 
    `${e.target.parentElement.children[1].children[0].textContent}`;
    creditsAvailable.innerHTML = "Credits Available"
} else {
    credits.innerHTML = `<p class="letraDelPlan">No tienes creditos</p>`
}
 
}



/******************* BUTTON CALENDAR  ************************/
const buttonColor = document.querySelectorAll(".gym-class");
const containerClass = document.querySelector(".container-class")
function backgroundCalendarActivities(e) {
    console.log(e.target.id)

    for (let i = 0; i < buttonColor.length; i++){
       let auxiliar = buttonColor[i];
        auxiliar.addEventListener("click", () => {
            //en esta linea probar el switch de clases de colores
            auxiliar.classList.add("gym-class-onmouseenter")
        })
    }
    console.log(calendario)
    for (let i = 0; i < calendario.length; i++) {
       if(e.target.id == calendario[i].id){
          containerClass.innerHTML = `
    <div>
        <p>${calendario[i].dia}</p>
        <p>${calendario[i].time}</p>
        <p>${calendario[i].clase}</p>
    </div>
` 
       }
        
    }




}







const calendario = [
    {
        id: 1,
        dia: "monday",
        time: "7am",
        clase: "power-stretching" 
    },
    {
        id: 2,
        dia: "monday",
        time: "7am",
        clase: "power-stretching" 
    },
    {
        id: 3,
        dia: "monday",
        time: "7am",
        clase: "power-stretching" 
    }
]
/*
que la funcion, compare el id del elemento al que se le da click
recorriendo el array y comparando con cual coincide, de ser asi
lo tiene que insertar en el html, sino sigue recorriendo hasta encontrarlo
*/


