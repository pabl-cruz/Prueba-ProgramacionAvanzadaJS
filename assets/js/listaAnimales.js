//codigo relacionado a lista de animales en investigacion y cartas
const cartaAnimal= (animal) => {
   const contenedorAnimales = document.getElementById('Animales') 
   const carta = document.createElement('div')

   carta.classList.add('card');
   carta.classList.add('col-12');
   carta.classList.add('col-lg-3');
   carta.classList.add('p-0');
   carta.classList.add('m-1')
   carta.innerHTML = `<a href="#">
              <img class="card-img animal-img p-0" src="${animal.Img}" alt="${animal.Nombre}">
            </a>
            <div class="card-body p-0">
              <button class="col-12 btn btn-secondary"><i class="fa-solid fa-volume-high" onclick='${animal.sonido}'></i></button>
            </div>` 
    const audio = document.createElement('audio')
    audio.controls = true
    audio.src = animal.sonido
    carta.appendChild(audio);

   contenedorAnimales.appendChild(carta)
}

export {
    cartaAnimal
}