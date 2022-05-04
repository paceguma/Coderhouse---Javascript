// Variables, arrays 

const activities = [
    {
        name: "zumba",
        timetable: ["18:15", "19:15", "20:15"],
        days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
        details: "Zumba is intended as a total-body cardio and aerobic workout, which provides a large calorie consumption. Zumba choreography is composed using all or some of sixteen core steps. There are four basic rhythms: salsa, reggaeton, merengue, and cumbia; each basic rhythm has four core steps.",
        professor: ["Natalia", "Eugenia"],
        calories: 600,
        duration: 45,
    },
    {
        name: "abs", // gap - strong gap - gap local
        timetable: ["07:00", "08:00", "09:00", "17:15"],
        days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
        details: "The abs is an exercise that consists of working three specific areas of the body: glutes, abdominals and legs. It is created with the aim of focusing all our efforts on eliminating the fat that by nature tends to accumulate in areas, and to tone up. ",
        professor: ["Natalia", "Eugenia"],
        calories: 450,
        duration: 45,
    },
    {
        name: "cardio", // cardio local - lostweight
        timetable: ["19:15", "20:15"],
        days: ["monday", "tuesday", "thursday", "friday"],
        details: "Cardio is physical exerciseof low to high intensity that depends primarily on the aerobic energy-generating process. Aerobic exercise comprises innumerable forms. In general, it is performed at a moderate level of intensity over a relatively long period of time. Cardio was designed specifically to improve aerobic capacity and fitness. It is most common for aerobic exercises to involve the leg muscles, primarily or exclusively.",
        professor: ["Natalia", "Eugenia"],
        calories: 700,
        duration: 45,
    },
    {
        name: "power-stretching",
        timetable: ["07:00", "09:00", "16:15"],
        days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
        details: "Power-stretching is a mind-and-body discipline, though yoga classes are more likely to address spiritual aspects explicitly. They advocated this form of exercise under the guise of the supposed specific medical benefits of particular postures, quietly dropping its religious connotations, encouraged by the prevailing Indian nationalism which needed something to build an image of a strong and energetic nation.",
        professor: "Andrea",
        calories: 100,
        duration: 45,
    },
    {
        name: "aerobox",
        timetable: ["18:15", "19:15", "20:15"],
        days: ["monday", "wednesday", "thursday", "friday"],
        details: "is a group of stand-up combat sports and a form of boxing based on kicking and punching. The combat takes place in a boxing ring, normally with boxing gloves, mouthguards, shorts, and bare feet to favor the use of kicks. Kickboxing is practiced for self-defense, general fitness, or for competition",
        professor: "Eugenia",
        calories: 500,
        duration: 45,
    },
    {
        name: "step",
        timetable: ["08.00", "17:15", "18:15"],
        days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
        details: "Step is a form of aerobic exercise that involves stepping on and off a small platform. Exercise routines include weights held in the hands for upper body development. Music with a medium (not fast) tempo often accompanies the routine, and learning a choreography sequence can hold the participants' interest.",
        professor: "Natalia",
        calories: 380,
        duration: 45,
    },
]


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

// let dias = prompt(`que días desea filtrar?`);

// function categoriesFilter() {
//     let auxiliar =[];
//     for (let i = 0; i < activities.length; i++){
//         let daysArr = activities[i].days;
//         for (let j = 0; j < daysArr.length; j++){
//             if (daysArr[j] == dias){
//                 auxiliar.push(activities[i].name);
//             }
//         }    
//     }   
//     alert (`los días ${dias} hay las siguientes clases ${auxiliar.join(" ")}`);
// }
// categoriesFilter()



// Functions to apoointment class

calendarTimetable
