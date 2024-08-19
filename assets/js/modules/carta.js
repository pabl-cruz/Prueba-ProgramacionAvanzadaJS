import { modalAnimal } from "./modal.js"
//codigo relacionado a lista de animales en investigacion y cartas
//reproducir sonido desde boton
const reproducirSonido = (animal) => {
  const player = document.getElementById('player')
  player.setAttribute('src', animal.Sonido)
  player.play()
}

//generar una carta de animal una vez se haya registrado en formulario
const cartaAnimal= (animal, index) => {
   const contenedorAnimales = document.getElementById('Animales') 
   const carta = document.createElement('div')
   
   carta.classList.add('card', 'col-12', 'col-lg-3', 'p-0', 'm-1');
   //genera arreglo que mapea index de cartas
   carta.dataset.id = index
   carta.innerHTML = `<a href="#exampleModal" data-toggle="modal" class="mostrar-modal" data-id="${index}">
              <img class="card-img animal-img p-0" src="${animal.Img}" alt="${animal.Nombre}">
            </a>
            <div class="card-body p-0">
              <button id='reproducir-${index}' class="col-12 btn btn-secondary"><i class="fa-solid fa-volume-high"></i></button>
            </div>` 

   contenedorAnimales.appendChild(carta)
   let reproducir = carta.querySelector(`#reproducir-${index}`);
  //eventos

  //evento para reproducir sonido del animal
   reproducir.addEventListener('click', () => reproducirSonido(animal));

   //evento que muestra el modal asignado a id de animal
   carta.addEventListener('click', (event) =>{
    const target = event.target.closest('.mostrar-modal')
    if(target){
      const idAnimal = target.dataset.id
      modalAnimal(animal, idAnimal)
     }
   })
}

export {
    cartaAnimal,
    reproducirSonido
}