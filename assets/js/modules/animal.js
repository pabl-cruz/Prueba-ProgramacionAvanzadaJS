//Objeto padre animal

class Animal {
    //variables privadas
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

    //setter
    set Comentarios(nuevo_comentario){
        this.#comentarios = nuevo_comentario
    }
}

export{
    Animal
}