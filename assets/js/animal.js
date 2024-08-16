//Objeto padre animal

class Animal {
    #nombre
    #edad
    #img
    #comentarios
    #sonido
     
    constructor(nombre, edad, img, comentarios, sonido){
        this.#nombre = nombre
        this.#edad = edad
        this.#img = img
        this.#comentarios = comentarios
        this.#sonido = sonido
    } 
    //getters
    get nombre(){
        return this.#nombre
    }
    get edad(){
        return this.#edad
    }
    get img(){
        return this.#img
    }
    get sonido(){
        return this.#sonido
    }
    //setter
    set sonido(nuevo_sonido){
        this.#sonido = nuevo_sonido
    }

    set comentarios(nuevo_comentario){
        this.#comentarios = nuevo_comentario
    }
}

export{
    Animal
}