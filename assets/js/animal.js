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
    get Nombre(){
        return this.#nombre
    }
    get Edad(){
        return this.#edad
    }
    get Img(){
        return this.#img
    }
    get Sonido(){
        return this.#sonido
    }
    get Comentarios(){
        return this.#comentarios
    }
    //setters
    set Sonido(nuevo_sonido){
        this.#sonido = nuevo_sonido
    }

    set Comentarios(nuevo_comentario){
        this.#comentarios = nuevo_comentario
    }
}

export{
    Animal
}