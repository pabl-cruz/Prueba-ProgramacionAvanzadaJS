//programacion de modal
const modalAnimal = (animal) => {
    const modal = document.getElementById('exampleModal')
    const modalCuerpo = document.querySelector('.modal-body')
    const audio = document.createElement('audio')
    audio.controls = true
    audio.src = animal.Sonido
    modalCuerpo.innerHTML = `
        <img class='w-100 p-2' src='${animal.Img}'>
        <h4 class='py-3'>${animal.Nombre}</h4>
        <h5 class='py-2'>Edad estimada del animal:</h5>
        <p class='py-2'>${animal.Edad}</p>
        <h5 class='py-2'>Comentarios</h5>
        <p class='py-2'>${animal.Comentarios}</p>
        <h5 class='py-2'>Sonido:</h5>`
    modalCuerpo.appendChild(audio);
}

export{
    modalAnimal,
}