import { Animal } from "./animal.js";

//objetos hijo animales de Animal
class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Rugir(nuevo_sonido){
        this.sonido = nuevo_sonido;
        return this.sonido
    }
}

class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Aullar(nuevo_sonido){
        this.sonido = nuevo_sonido;
        return this.sonido
    }
}

class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Grunir(nuevo_sonido){
        this.sonido = nuevo_sonido;
        return this.sonido
    }
}

class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
 
    Sisear(nuevo_sonido){
        this.sonido = nuevo_sonido;
        return this.sonido
    }
}

class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Chillar(nuevo_sonido){
        this.sonido = nuevo_sonido;
        return this.sonido
    }
}

export {
    Leon,
    Lobo,
    Oso,
    Serpiente,
    Aguila,
}