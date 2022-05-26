


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


// const bienvenida = document.getElementById("welcomeH2");
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



/***************** OPEN CARD PRICES  ************/

const plus = document.querySelector("#plus");
const sectionPrices = document.querySelector("#section-prices")

plus.addEventListener("click", ()=> {
    if (sectionPrices.classList.contains("prices")){
        sectionPrices.classList.remove("prices")
    }else {
        sectionPrices.classList.add("prices-open")
    }
})

/****************** BUY **********************/

const credits = document.querySelector(".active-pass-credits")
const activePass = document.querySelector(".active-pass")
const creditsAvailable = document.querySelector(".active-pass-p")

function agregarCreditos(e){
let respuesta = prompt("Do you want to buy this plan?")

if(respuesta === "yes") {
    credits.innerHTML =
    `${e.target.parentElement.children[1].children[1].textContent}`;
    activePass.innerHTML = 
    `${e.target.parentElement.children[1].children[0].textContent}`;
    creditsAvailable.innerHTML = "Credits Available"
} else {
    credits.innerHTML = `<p class="letraDelPlan">No credits</p>`
}
 }


/******************* BUTTON CALENDAR / ADD CLASS ************************/
const buttonColor = document.querySelectorAll(".gym-class");
const containerClass = document.querySelector(".container-class")
function backgroundCalendarActivities(e) {
    console.log(e.target.id)

    for (let i = 0; i < buttonColor.length; i++){
       let auxiliar = buttonColor[i];
        auxiliar.addEventListener("click", () => {

            switch (auxiliar.classList) {
                case "border-power-stretching":
         auxiliar.classList.add("gym-class-onclick-power-stretching")                
                    break;
                case "border-aerobox":
         auxiliar.classList.add("gym-class-onclick-aerobox")
                    break;
                case "border-cardio":
         auxiliar.classList.add("gym-class-onclick-cardio")
                    break;
                case "border-zumba":
         auxiliar.classList.add("gym-class-onclick-zumba")
                    break;
                case "border-abs":
         auxiliar.classList.add("gym-class-onclick-abs")
                    break;
                default:
        auxiliar.classList.add("gym-class-onclick-step")
                    break;
            }

            //en esta linea probar el switch de clases de colores
            //auxiliar.classList.add("gym-class-onclick")
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
        dia: "tuesday",
        time: "7am",
        clase: "power-stretching" 
    },
    {
        id: 3,
        dia: "wednesday",
        time: "7am",
        clase: "power-stretching" 
    },
    {
        id: 4,
        dia: "thursday",
        time: "7am",
        clase: "abs" 
    },
    {
        id: 5,
        dia: "friday",
        time: "7am",
        clase: "power-stretching" 
    },
    {
        id: 6,
        dia: "monday",
        time: "8am",
        clase: "abs" 
    },
    {
        id: 7,
        dia: "tuesday",
        time: "8am",
        clase: "step" 
    },
    {
        id: 8,
        dia: "wednesday",
        time: "8am",
        clase: "abs" 
    },
    {
        id: 9,
        dia: "thursday",
        time: "8am",
        clase: "step" 
    },
    {
        id: 10,
        dia: "friday",
        time: "8am",
        clase: "step" 
    },
    {
        id: 11,
        dia: "thursday",
        time: "9am",
        clase: "power-stretching" 
    },
    {
        id: 12,
        dia: "friday",
        time: "9am",
        clase: "abs" 
    },
    {
        id: 13,
        dia: "tuesday",
        time: "4.15pm",
        clase: "power-stretching" 
    },
    {
        id: 14,
        dia: "thursday",
        time: "4.15pm",
        clase: "power-stretching" 
    },
    {
        id: 15,
        dia: "monday",
        time: "5.15pm",
        clase: "step" 
    },
    {
        id: 16,
        dia: "thursday",
        time: "5.15pm",
        clase: "abs" 
    },
    {
        id: 17,
        dia: "thursday",
        time: "5.15pm",
        clase: "step" 
    },
    {
        id: 18,
        dia: "thursday",
        time: "5.15pm",
        clase: "abs" 
    },
    {
        id: 19,
        dia: "thursday",
        time: "5.15pm",
        clase: "abs" 
    },
    {
        id: 20,
        dia: "monday",
        time: "6.15pm",
        clase: "zumba" 
    },
    {
        id: 21,
        dia: "tuesday",
        time: "6.15pm",
        clase: "step" 
    },
    {
        id: 22,
        dia: "wednesday",
        time: "6.15pm",
        clase: "zumba" 
    },
    {
        id: 23,
        dia: "thursday",
        time: "6.15pm",
        clase: "aerobox" 
    },
    {
        id: 24,
        dia: "friday",
        time: "6.15pm",
        clase: "zumba" 
    },
    {
        id: 25,
        dia: "monday",
        time: "7.15pm",
        clase: "cardio" 
    },
    {
        id: 26,
        dia: "tuesday",
        time: "7.15pm",
        clase: "zumba" 
    },
    {
        id: 27,
        dia: "wednesday",
        time: "7.15pm",
        clase: "aerobox" 
    },
    {
        id: 28,
        dia: "thursday",
        time: "7.15pm",
        clase: "cardio" 
    },
    {
        id: 29,
        dia: "friday",
        time: "7.15pm",
        clase: "aerobox" 
    },
    {
        id: 30,
        dia: "monday",
        time: "7.15pm",
        clase: "aerobox" 
    },
    {
        id: 31,
        dia: "tuesday",
        time: "7.15pm",
        clase: "cardio" 
    },
    {
        id: 32,
        dia: "thursday",
        time: "7.15pm",
        clase: "zumba" 
    },
    {
        id: 33,
        dia: "friday",
        time: "7.15pm",
        clase: "cardio" 
    },
  
]
/*
que la funcion, compare el id del elemento al que se le da click
recorriendo el array y comparando con cual coincide, de ser asi
lo tiene que insertar en el html, sino sigue recorriendo hasta encontrarlo
*/


