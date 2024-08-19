import { iife as funcionAutoEjecutable} from "./modules/iife.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./modules/clasesAnimales.js";
import { limpiar } from "./modules/dom.js";
import { reproducirSonido, cartaAnimal } from "./modules/carta.js";
import { modalAnimal } from "./modules/modal.js";
import { proxyCom, proxyAnimal } from "./modules/proxy.js";


function eventoBoton(){ document.getElementById('btnRegistrar').addEventListener('click', async (event) =>{


    //captura de valores y definicion de constantes
    const nombreAnimal = document.getElementById('animal').value;
    const edadAnimal = document.getElementById('edad').value;
    const comentario = document.getElementById('comentarios').value;
    const { imagen, sonido } = await funcionAutoEjecutable.obtenerDatosJson(nombreAnimal)
    const imagenAnimal = `/assets/imgs/${imagen}`
    const sonidoAnimal = `/assets/sounds/${sonido}`

    let idAnimal = funcionAutoEjecutable.arregloAnimales.length
  
    event.preventDefault

    limpiar()

    //condicion si en el formulario no se llenan todos los datos
    if(!nombreAnimal || !edadAnimal || !comentario){
        alert('Por favor, completar todos los datos del registro.');
        return
    }
    //condiciones para generar instancias de animales y agregarlas a arregloAnimales
    if (nombreAnimal === 'Lobo'){
        //crea instancia de subclase animal correspondiente a nombre
        let lobo = new proxyAnimal (Lobo, nombreAnimal, edadAnimal, imagenAnimal, comentario, sonidoAnimal)
        //agrega animal a arreglo
        funcionAutoEjecutable.agregarAnimal(lobo)
        //actualiza valor de elementos en arreglo
        idAnimal
        //genera carta de animal con id e informacion
        cartaAnimal(lobo, idAnimal)
    } else if (nombreAnimal === 'León' || nombreAnimal === 'Leon'){
        let leon = new proxyAnimal (Leon, nombreAnimal, edadAnimal, imagenAnimal, comentario, sonidoAnimal)
        funcionAutoEjecutable.agregarAnimal(leon)
        idAnimal
        cartaAnimal(leon, idAnimal)
    } else if (nombreAnimal === 'Oso'){
        let oso = new proxyAnimal (Oso, nombreAnimal, edadAnimal, imagenAnimal, comentario, sonidoAnimal)
        funcionAutoEjecutable.agregarAnimal(oso)
        idAnimal
        cartaAnimal(oso, idAnimal)
    } else if (nombreAnimal === 'Serpiente'){
        let serpiente = new proxyAnimal (Serpiente, nombreAnimal, edadAnimal, imagenAnimal, comentario, sonidoAnimal)
        funcionAutoEjecutable.agregarAnimal(serpiente)
        idAnimal
        cartaAnimal(serpiente, idAnimal)
    } else if (nombreAnimal === 'Aguila'){
        let aguila= new proxyAnimal(Aguila, nombreAnimal, edadAnimal, imagenAnimal, comentario, sonidoAnimal)
        funcionAutoEjecutable.agregarAnimal(aguila)
        idAnimal
        cartaAnimal(aguila, idAnimal)
    } else {
        alert('Error al registrar animal')
    }
})}


//evento asincrono al cambiar opcion de animal, muestra inmediatamente una imagen del animal cuando se elige animal.
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