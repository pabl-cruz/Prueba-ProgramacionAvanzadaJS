import { iife as funcionAutoEjecutable} from "./iife.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clasesAnimales.js";
import { limpiar } from "./dom.js";
import { reproducirSonido, cartaAnimal } from "./carta.js";
import { modalAnimal } from "./modal.js";


function eventoBoton(){ document.getElementById('btnRegistrar').addEventListener('click', async (event) =>{


    //captura de valores y definicion de constantes
    const nombreAnimal = document.getElementById('animal').value;
    const edadAnimal = document.getElementById('edad').value;
    const comentario = document.getElementById('comentarios').value;
    const { imagen, sonido } = await funcionAutoEjecutable.obtenerDatosJson(nombreAnimal)
    const imagenAnimal = `/assets/imgs/${imagen}`
    const sonidoAnimal = `/assets/sounds/${sonido}`
    event.preventDefault

    limpiar()

    if(!nombreAnimal || !edadAnimal || !comentario){
        alert('Por favor, completar todos los datos del registro.');
        return
    }

    if (nombreAnimal === 'Lobo'){
        let lobo = new Lobo (nombreAnimal, edadAnimal, imagenAnimal, comentario, sonidoAnimal)
        cartaAnimal(lobo)
        modalAnimal(lobo)
        console.log('Sonido:', sonido)
        funcionAutoEjecutable.agregarAnimal(nombreAnimal)
    } else if (nombreAnimal === 'León' || nombreAnimal === 'Leon'){
        let leon = new Leon (nombreAnimal, edadAnimal, imagenAnimal, comentario, sonidoAnimal)
        cartaAnimal(leon)
        modalAnimal(leon)
        funcionAutoEjecutable.agregarAnimal(leon)
    } else if (nombreAnimal === 'Oso'){
        let oso = new Oso (nombreAnimal, edadAnimal, imagenAnimal, comentario, sonidoAnimal)
        cartaAnimal(oso)
        modalAnimal(oso)
        funcionAutoEjecutable.agregarAnimal(nombreAnimal)
    } else if (nombreAnimal === 'Serpiente'){
        let serpiente = new Serpiente (nombreAnimal, edadAnimal, imagenAnimal, comentario, sonidoAnimal)
        cartaAnimal(serpiente)
        modalAnimal(serpiente)
        funcionAutoEjecutable.agregarAnimal(nombreAnimal)
    } else if (nombreAnimal === 'Aguila'){
        let aguila= new Aguila(nombreAnimal, edadAnimal, imagenAnimal, comentario, sonidoAnimal)
        cartaAnimal(aguila)
        modalAnimal(aguila)
        funcionAutoEjecutable.agregarAnimal(nombreAnimal)
    } else {
        alert('Error al registrar animal')
    }
    console.log(funcionAutoEjecutable.arregloAnimales)
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