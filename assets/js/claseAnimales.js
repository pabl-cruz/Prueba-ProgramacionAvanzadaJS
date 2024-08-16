import { Animal } from "./animal.js";

//objetos hijo animales de Animal
class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Rugir(){
        this.sonido = '../sounds/Rugido.mp3';
        return this.sonido
    }
}

class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Aullar(){
        this.sonido = '../sounds/Aullido.mp3';
        return this.sonido
    }
}

class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Grunir(){
        this.sonido = '../sounds/Grunido.mp3';
        return this.sonido
    }
}

class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Sisear(){
        this.sonido = '../sounds/Siseo.mp3';
        return this.sonido
    }
}

class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Chillar(){
        this.sonido = '../sounds/Chillido.mp3';
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