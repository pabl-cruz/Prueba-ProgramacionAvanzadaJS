//funcion para limpiar datos del formulario al refrescar
let limpiar = () => {
    if (document.getElementById('preview').querySelector('img')){
        document.getElementById('preview').innerHTML = ''
    }
    document.getElementById('animal').value = document.getElementById('animal').defaultValue
    document.getElementById('edad').value = document.getElementById('edad').defaultValue
    document.getElementById('comentarios').value = document.getElementById('comentarios').defaultValue
}


export {limpiar}
