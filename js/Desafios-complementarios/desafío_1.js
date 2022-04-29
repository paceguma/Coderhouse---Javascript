

// REGISTRO DE USUARIO

                // let user = prompt(`¿cual es tu nombre de usuario?`).toLowerCase().trim();
                // while (user == null || user == Number(user)) {
                //     alert(`usuario no válido. Ingrese un usuario válido`);
                //     user = prompt(`¿cual es tu nombre de usuario?`).toLowerCase().trim();
                // }
                // document.write(`usuario registrado`);


// COMPRAR PASES DE GIMNASIO
// 1) hacer variable1 con pase básico
// 2) hacer variable 2 con pase intermedio
// 3) hacer variable3 con pase libre
// 4) asignar a cada varible una cantidad de créditos determinada
// 5) preguntarle al usuario cúal pase quiere comprar

                let basics = 25;
                let intermediate = 45;
                let freePass = 75;
                let credit = 0;
                let purchase = prompt(`cúal pase queres comprar? basics, intermediate or freePass`);

                while (purchase != "basics" && purchase != "intermediate" && purchase != "freePass") {
                    purchase = prompt(`Ingrese alguno de estos pases: basics, intermediate or freePass`);
                }

                if (purchase == "basics" || purchase == "intermediate" || purchase == "freePass") {
                    if (purchase == `basics`) {
                        credit = basics;
                    } else if (purchase == `intermediate`) {
                        credit = intermediate;
                    } else if (purchase == `freePass`) {
                        credit = freePass;
                    }
                } 
                console.log(credit);

// CANTIDAD DE CRÉDITOS CONSUMIDOS
// 1) hacer una variable con la cantidad de créditos
// 2) condición del corte de for - créditos menores a 0 o cantidad de créditos > créditos
// 3) switch dependiendo de las clases la cantidad de créditos a descontar
// 4) descontar créditos en cada caso

                    let zumba = 5;
                    let gap = 7;
                    let yoga = 10;

                    let gymClass = prompt(`que clase asistirás? zumba, gap o yoga`).toLowerCase().trim();

                    while (gymClass != `zumba` && gymClass != `gap` && gymClass != `yoga`){
                        gymClass = prompt(`Por favor ingresa una clase válida: zumba, gap o yoga`).toLowerCase().trim();
                    }

                    console.log(`te anotaste a: ${gymClass}`);

                    switch (gymClass) {
                        case "zumba":
                            credit = credit - zumba
                            break;
                        case "gap":
                            credit = credit - gap
                            break;
                        case "yoga":
                            credit = credit - yoga
                            break;
                        default:
                            alert(`ingrese clase válida`)
                            break;
                    }
                    console.log(` te quedan ${credit} créditos`)







