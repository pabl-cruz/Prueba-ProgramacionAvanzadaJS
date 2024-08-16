import { Animal } from "./animal.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./claseAnimales.js";

//funcion para limpiar datos del formulario al refrescar
let limpiar = () => {
    if (document.getElementById('preview').querySelector('img')){
        document.getElementById('preview').innerHTML = ''
    }
    document.getElementById('animal').value = document.getElementById('animal').defaultValue
    document.getElementById('edad').value = document.getElementById('edad').defaultValue
    document.getElementById('comentarios').value = document.getElementById('comentarios').defaultValue
}

//funcion para mostrar foto de animal registrado
let setAnimalPreviewImg = (animal => {
    const newImg = document.createElement('img')
    const preview = document.getElementById('preview')
    newImg.setAttribute('src', animal)
    preview.appendChild(newImg) 
})

//evento de registro de datos
export function eventoBoton(){ document.getElementById('btnRegistrar').addEventListener('click', (event) =>{
    //captura de valores
    const nombreAnimal = document.getElementById('animal').value;
    const edadAnimal = document.getElementById('edad').value;
    const comentario = document.getElementById('comentarios').value;

    event.preventDefault
    limpiar()

    if (nombreAnimal === 'Lobo'){
        let lobo = new Lobo (nombreAnimal, edadAnimal, 'assets/imgs/Lobo.jpg', comentario)
        console.log(`creado nuevo animal ${lobo.Nombre}, ${lobo.Edad}, ${lobo.Img}, ${lobo.Comentarios}, ${lobo.Aullar()}}`)
        setAnimalPreviewImg(lobo.Img)
    } else if (nombreAnimal === 'León' || nombreAnimal === 'Leon'){
        let leon = new Leon (nombreAnimal, edadAnimal, 'assets/imgs/Leon.png', comentario)
        console.log(`creado nuevo animal ${leon.Nombre}, ${leon.Edad}, ${leon.Img}, ${leon.Comentarios}, ${leon.Rugir()}}`)
        setAnimalPreviewImg(leon.Img)
    } else if (nombreAnimal === 'Oso'){
        let oso = new Oso (nombreAnimal, edadAnimal, 'assets/imgs/Oso.jpg', comentario)
        console.log(`creado nuevo animal ${oso.Nombre}, ${oso.Edad}, ${oso.Img}, ${oso.Comentarios}, ${oso.Grunir()}}`)
        setAnimalPreviewImg(oso.Img)
    } else if (nombreAnimal === 'Serpiente'){
        let serpiente = new Serpiente (nombreAnimal, edadAnimal, 'assets/imgs/Serpiente.jpg', comentario)
        console.log(`creado nuevo animal ${serpiente.Nombre}, ${serpiente.Edad}, ${serpiente.Img}, ${serpiente.Comentarios}, ${serpiente.Sisear()}}`)
        setAnimalPreviewImg(serpiente.Img)
    } else if (nombreAnimal === 'Aguila'){
        let aguila= new Aguila(nombreAnimal, edadAnimal, 'assets/imgs/Aguila.png', comentario)
        console.log(`creado nuevo animal ${aguila.Nombre}, ${aguila.Edad}, ${aguila.Img}, ${aguila.Comentarios}, ${aguila.Chillar()}}`)
        setAnimalPreviewImg(aguila.Img)
    } else {
        alert('Error al registrar animal')
    }

})}
