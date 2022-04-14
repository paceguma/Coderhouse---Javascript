// Variables, arrays 

const activities = [
    {
        name: "zumba", // zumba
        timetable: ["18:15", "19:15"],
        days: ["tuesday", "wednesday", "thursday"],
        details: "An infusion of various styles of dance including Salsa, Latin, Hip-Hop and Swing to name a few. Combined with international music, have fun whilst you’re exercising. It’s always party time with Zumba with moves from all around the world!",
        professor: ["Natalia", "Eugenia"],
        calories: 550,
        duration: 45,
    },
    {
        name: "abs", // gap - strong gap - gap local
        timetable: ["17:15", "19:15", "08:00", "20:15" ],
        days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
        details: "A short class dedicated to toning and strengthening the muscles in the abdominals and lower back. Using minimal equipment, this intense workout will help support posture, improve stability and enhance your core region. ",
        professor: ["Natalia", "Eugenia"],
        calories: 230,
        duration: 45,
    },
    {
        name: "cardio", // cardio local - lostweight
        timetable: ["09:00", "18:15", "19:15" ],
        days: ["monday", "wednesday", "friday"],
        details: "An interval based workout consisting of a series of short bursts of both cardio and resistance training. Achieve total body conditioning whilst also improving mobility, strength and stamina. ",
        professor: ["Natalia", "Eugenia"],
        calories: 700,
        duration: 45, 
    },
    {
        name: "power-stretching",
        timetable: ["08:00", "09:00", "16:15" ],
        days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
        details: "Pilates improves flexibility, builds strength and develops control and endurance in the entire body. It puts emphasis on alignment, breathing, developing a strong core and improving coordination and balance. Our classes are suitable for beginner to advanced. ",
        professor: "Andrea",
        calories: 100,
        duration: 45, 
    },
]


const plans = [
    {
        name: "Basics",
        price: 1200,
        details: "8 class gym and 8 class",
        credit: 16,
    },
    {
        name: "Intermediate",
        price: 1500,
        details: "12 class gym and 12 class",
        credit: 24,
    },
    {
        name: "Free pass",
        price: 1800,
        details: "Ilimitated ",
        credit: 500
    },
]

// // Funciones

// // Función que tomará el input del nombre del usuario y lo mostrará como bienvenida. 
// // Próximamente el input se tomara del registro de usuario

let user = `Paula`;
let pass = 1234;
let userName = prompt(`username? (Paula)`);
let passUser = prompt(`password? (1234)`);

function welcomeName(name, password) {
    while (userName !== user && passUser !== pass ) {
        userName = prompt(`username? (Paula)`);
        passUser = prompt(`password? (1234)`);
          
    }

    if (user == name && password == pass) {
        alert(`welcome ${user}`)
    }
   }

welcomeName(userName, passUser);

// // Función que agregaría al créditos según el plan elegido


let purchase = prompt(`cúal pase queres comprar? basics, intermediate or free Pass`).toLowerCase();
let credit = 0;


function addCreditsToUsers() {
        while (purchase != "basics" && purchase != "intermediate" && purchase != "free pass") {
        purchase = prompt(`Ingrese alguno de estos pases: basics, intermediate or freePass`);
    }

    for (let i = 0; i < plans.length; i++) {
        if (plans[i].name.toLowerCase() == purchase){
            credit = plans[i].credit
        }
    }
}
addCreditsToUsers()
console.log(credit);

// Función que filtra las clases

let dias = prompt(`que días desea filtrar?`);

function categoriesFilter() {
    let auxiliar =[];
    for (let i = 0; i < activities.length; i++){
        let daysArr = activities[i].days;
        for (let j = 0; j < daysArr.length; j++){
            if (daysArr[j] == dias){
                auxiliar.push(activities[i].name);
            }
        }    
    }   
    alert (`los días ${dias} hay las siguientes clases ${auxiliar.join(" ")}`);
}
categoriesFilter()




