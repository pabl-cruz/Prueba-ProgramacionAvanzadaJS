//funcion autoinvocada que llama a documento json para asociar nombre de animal con el de objeto
const iife = (() => {
    const arregloAnimales = []
    async function obtenerDatosJson(nombre){
        try{
            const response = await fetch('/animales.json')
            const data = await response.json()
            const animalData = data.animales.find(animal => animal.name === nombre);
            return animalData
        } catch (error) {
            console.error('Error obteniendo la imagen del animal:', error)
        }
    }
//function de agregar animal al arreglo
function agregarAnimal(animal){
    arregloAnimales.push(animal)
}

return{
    obtenerDatosJson,
    arregloAnimales,
    agregarAnimal
}
})()

export{ iife }