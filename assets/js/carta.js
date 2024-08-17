//codigo relacionado a lista de animales en investigacion y cartas
//reproducir sonido desde boton
const reproducirSonido = (animal) => {
  const player = document.getElementById('player')
  player.setAttribute('src', animal.Sonido)
}

//generar una carta de animal una vez se haya registrado en formulario
const cartaAnimal= (animal) => {
   const contenedorAnimales = document.getElementById('Animales') 
   const carta = document.createElement('div')

   carta.classList.add('card');
   carta.classList.add('col-12');
   carta.classList.add('col-lg-3');
   carta.classList.add('p-0');
   carta.classList.add('m-1')
   carta.innerHTML = `<a href="#exampleModal" data-toggle="modal">
              <img class="card-img animal-img p-0" src="${animal.Img}" alt="${animal.Nombre}">
            </a>
            <div class="card-body p-0">
              <button id='reproducir' class="col-12 btn btn-secondary"><i class="fa-solid fa-volume-high" onclick='${reproducirSonido(animal)}'></i></button>
            </div>` 

   contenedorAnimales.appendChild(carta)
   const reproducir = carta.querySelector('#reproducir');
   reproducir.addEventListener('click', () => player.play());
}



export {
    cartaAnimal,
    reproducirSonido
}