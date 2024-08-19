//establecer proxy para obtener entrada de Comentarios
import { Animal } from "./animal.js"

const privateProps = new WeakMap();

let proxyCom= {
    get(objetivo, prop) {
        if (prop in objetivo) {
            return Reflect.get(objetivo, prop);
        } else if (prop === 'comentarios') {
            return privateProps.get(objetivo).comentarios;
        } else {
            return undefined;
        }
    }
}

// Function to create a proxied instance of an animal
function proxyAnimal(ClaseAnimal, nombre, edad, img, comentarios, sonido) {
    let instanciaAnimal = new ClaseAnimal(nombre, edad, img, comentarios, sonido);
    privateProps.set(instanciaAnimal, { comentarios });
    return new Proxy(instanciaAnimal, proxyCom);
}

export { proxyCom, proxyAnimal }