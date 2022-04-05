// Pregunta al usuario su nombre:

let userName = prompt(`what is your name?`);
function welcomeName(name) {
    while (name == "" || name == Number(name)) {
        name = prompt(`what is your name?`);
    }
    return alert(`Hi ${name}`);
   }

welcomeName(userName);


// Preguntarle al usuario las tres actividades que ha realizado en el día para que conozca las calorías gastadas en el día.


let calories = 0
let zumba = 200
let gap = 320
let weightLoss = 580

const classGym = (activities) => {
    if (activities === "" || activities == Number(activities)) {
        alert(`clase ingresada no es válida`)
    }

    if (activities == "zumba") {
        calories = zumba + calories;
    } else if (activities == "gap") {
        calories = gap + calories;
    } else if (activities == "weightloss") {
        calories = calories + weightLoss
    }
    console.log(`total ${calories}`);
}
let activity = prompt(`what first activities have you done today? Zumba, GAP or Weightloss`).toLowerCase().trim();
classGym(activity);

let activity2 = prompt(`what second activities have you done today? Zumba, GAP or Weightloss`).toLowerCase().trim();
classGym(activity2);

let activity3 = prompt(`what third activities have you done today? Zumba, GAP or Weightloss`).toLowerCase().trim();
classGym(activity3);


// Literal Objects: activities

const Zumba = {
    timetable: ["18:00", "19:15" ],
    details: "An infusion of various styles of dance including Salsa, Latin, Hip-Hop and Swing to name a few. Combined with international music, have fun whilst you’re exercising. It’s always party time with Zumba with moves from all around the world!",
    professor: "Eugenia",
    calories: 550,
    duration: 45,
}

const ABS = {
    timetable: ["19:00", "08:15" ],
    details: "A short class dedicated to toning and strengthening the muscles in the abdominals and lower back. Using minimal equipment, this intense workout will help support posture, improve stability and enhance your core region. ",
    professor: "Natalia",
    calories: 230,
    duration: 45,
}


// contructors:


class Activities {
    constructor(name, category, description, calories, timetable, professor, duration) {
        this.name = name;
        this.category = category;
        this.description = description;
        this.calories = calories;
        this.timetable = timetable;
        this.professor = professor;
        this.duration = duration;
        this.classes = () => {
            let resume = `this class calls ${this.name} and starts at ${this.timetable}`;
            return resume;
        };
    }
}
 
const createActivity = () => {
    let nameActivity = prompt(`which is the name`);
    let categoryActivity = prompt (`which category does it belong?`);
    let descriptionActivity = prompt (`Could you describe the activity?`);
    let caloriesActivity = parseInt(prompt(`how many calories do you waste?`));
    let timetableActivity = prompt(`what time is it available?`);
    let professorActivity = prompt (`what is the professor 's name?`);
    let durationActivity = prompt (`how long is the class?`);

    const activity2 = new Activities(nameActivity, categoryActivity, descriptionActivity, caloriesActivity, timetableActivity, professorActivity, durationActivity);
    console.log(activity2);
}

createActivity();
