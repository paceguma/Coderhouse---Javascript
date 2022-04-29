const categorias = document.getElementById('categorias')
const bienvenida = document.querySelector('.bienvenidaH3')
console.log(bienvenida)

const arrCategorias = ['Zumba', 'Gap', 'Yoga', 'Cardio']
console.log(arrCategorias);

const categoriasDiv = () => {

    for (const categoria of arrCategorias) {
        let p = document.createElement('p');
         p.innerHTML = categoria
         categorias.appendChild(p)
    }
   
}

categoriasDiv()


let nombre = 'Bienvenida Paula'

const nombreBienvenida = () => {
    bienvenida.innerHTML = nombre
}

nombreBienvenida()