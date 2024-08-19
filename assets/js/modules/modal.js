import { iife as funcionAutoEjecutable} from "./iife.js";
//programacion de modal
const modalAnimal = (animal) => {
    const modalCuerpo = document.querySelector('.modal-body')
    const audio = document.createElement('audio')
    console.log('Animal array:', animal);
    audio.controls = true
    audio.src = animal.Sonido
        modalCuerpo.innerHTML = '';
    modalCuerpo.innerHTML += `
        <img class='w-100 p-2 mx-auto' src='${animal.Img}'>
        <h4 class='py-3 text-white'>${animal.Nombre}</h4>
        <h5 class='py-2 text-white'>Edad estimada del animal:</h5>
        <p class='py-2 text-white'>${animal.Edad}</p>
        <h5 class='py-2 text-white'>Comentarios</h5>
        <p class='py-2 text-white'>${animal.comentarios}</p>
        <h5 class='py-2 text-white'>Sonido:</h5>`
    modalCuerpo.appendChild(audio);
    
}

export{
    modalAnimal,
}