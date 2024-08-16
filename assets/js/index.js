import { iife as funcionAutoEjecutable} from "./iife.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clasesAnimales.js";
import { limpiar } from "./dom.js";
import { cartaAnimal } from "./listaAnimales.js";

function eventoBoton(){ document.getElementById('btnRegistrar').addEventListener('click', async (event) =>{


    //captura de valores
    const nombreAnimal = document.getElementById('animal').value;
    const edadAnimal = document.getElementById('edad').value;
    const comentario = document.getElementById('comentarios').value;
    const { imagen, sonido } = await funcionAutoEjecutable.obtenerDatosJson(nombreAnimal)
    
    event.preventDefault
    limpiar()


    if(!nombreAnimal || !edadAnimal || !comentario){
        alert('Por favor, completar todos los datos del registro.');
        return
    }

    if (nombreAnimal === 'Lobo'){
        let lobo = new Lobo (nombreAnimal, edadAnimal, imagen, comentario, sonido)
        cartaAnimal(lobo)
        funcionAutoEjecutable.agregarAnimal(nombreAnimal)
    } else if (nombreAnimal === 'León' || nombreAnimal === 'Leon'){
        let leon = new Leon (nombreAnimal, edadAnimal, imagen, comentario, sonido)
        cartaAnimal(leon)
        funcionAutoEjecutable.agregarAnimal(leon)
    } else if (nombreAnimal === 'Oso'){
        let oso = new Oso (nombreAnimal, edadAnimal, imagen, comentario, sonido)
        cartaAnimal(oso)
        funcionAutoEjecutable.agregarAnimal(nombreAnimal)
    } else if (nombreAnimal === 'Serpiente'){
        let serpiente = new Serpiente (nombreAnimal, edadAnimal, imagen, comentario, sonido)
        cartaAnimal(serpiente)
        funcionAutoEjecutable.agregarAnimal(nombreAnimal)
    } else if (nombreAnimal === 'Aguila'){
        let aguila= new Aguila(nombreAnimal, edadAnimal, imagen, comentario, sonido)
        cartaAnimal(aguila)
        funcionAutoEjecutable.agregarAnimal(nombreAnimal)
    } else {
        alert('Error al registrar animal')
    }
    console.log(animales)
})}



document.getElementById('animal').addEventListener('change', async (event) => {
    const {imagen, sonido } = await funcionAutoEjecutable.obtenerDatosJson(event.target.value)
    const newImg = document.createElement('img')
    const preview = document.getElementById('preview')
    if (preview.querySelector('img')){
        preview.innerHTML = ''
    }
    newImg.setAttribute('src', `assets/imgs/${imagen}`)
    preview.appendChild(newImg) 

})

eventoBoton()