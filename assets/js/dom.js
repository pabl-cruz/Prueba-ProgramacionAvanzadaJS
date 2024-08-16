import { Animal } from "./animal.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./claseAnimales.js";


//evento de registro de datos
export function eventoBoton(){ document.getElementById('btnRegistrar').addEventListener('click', (event) =>{
    //captura de valores
    const nombreAnimal = document.getElementById('animal').value;
    const edadAnimal = document.getElementById('edad').value;
    const comentario = document.getElementById('comentarios').value;

    event.preventDefault

    if (nombreAnimal === 'Lobo'){
        let lobo = new Lobo (nombreAnimal, edadAnimal, '../imgs/Lobo.jpg', comentario)
        console.log(`creado nuevo animal ${lobo.Nombre}, ${lobo.Edad}, ${lobo.Img}, ${lobo.Comentarios}, ${lobo.Aullar()}}`)
    } else if (nombreAnimal === 'León' || nombreAnimal === 'Leon'){
        let leon = new Leon (nombreAnimal, edadAnimal, '../imgs/Leon.jpg', comentario)
        console.log(`creado nuevo animal ${leon.Nombre}, ${leon.Edad}, ${leon.Img}, ${leon.Comentarios}, ${leon.Rugir()}}`)
    } else if (nombreAnimal === 'Oso'){
        let oso = new Oso (nombreAnimal, edadAnimal, '../imgs/Oso.jpg', comentario)
        console.log(`creado nuevo animal ${oso.Nombre}, ${oso.Edad}, ${oso.Img}, ${oso.Comentarios}, ${oso.Grunir()}}`)
    } else if (nombreAnimal === 'Serpiente'){
        let serpiente = new Serpiente (nombreAnimal, edadAnimal, '../imgs/Serpiente.jpg', comentario)
        console.log(`creado nuevo animal ${serpiente.Nombre}, ${serpiente.Edad}, ${serpiente.Img}, ${serpiente.Comentarios}, ${serpiente.Sisear()}}`)
    } else if (nombreAnimal === 'Aguila'){
        let aguila= new Aguila(nombreAnimal, edadAnimal, '../imgs/Aguila.jpg', comentario)
        console.log(`creado nuevo animal ${aguila.Nombre}, ${aguila.Edad}, ${aguila.Img}, ${aguila.Comentarios}, ${aguila.Chillar()}}`)
    } else {
        alert('Error al registrar animal')
    }

})}
