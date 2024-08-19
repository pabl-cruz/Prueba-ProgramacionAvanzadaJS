//establecer proxy para obtener entrada de Comentarios
import { Animal } from "./animal.js"

//constructor weakmap para emular propiedades privadas del objeto
const propiedadPriv = new WeakMap();

let proxyCom= {
    get(objetivo, prop) {
        if (prop in objetivo) {
            //reflejar getters de las propiedades del objeto objetivo
            return Reflect.get(objetivo, prop);
        } else if (prop === 'comentarios') {
            //get comentarios
            return propiedadPriv.get(objetivo).comentarios;
        } else {
            return undefined;
        }
    }
}

// funcion para crear un objeto proxy de la instancia del animal
function proxyAnimal(ClaseAnimal, nombre, edad, img, comentarios, sonido) {
    let instanciaAnimal = new ClaseAnimal(nombre, edad, img, comentarios, sonido);
    //setter de comentarios 
    propiedadPriv.set(instanciaAnimal, { comentarios });
    return new Proxy(instanciaAnimal, proxyCom);
}

export { proxyCom, proxyAnimal }