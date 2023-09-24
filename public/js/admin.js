// Referencia al elemento de formulario html
const formGuardar = document.querySelector("#form-guardar")

formGuardar.addEventListener('submit', async (e) => {

    e.preventDefault();

    // se capturan los datos del formulario
    const titulo = document.querySelector('#titulo-post').value;
    const descripcion = document.querySelector('#detalle-post').value;
    const url_imagen = document.querySelector('#url-img').value;
    const fecha = document.querySelector('#fecha').value;

    // se toman los datos del servidor
    const response = await fetch('/publicacion', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'    // hay que tener en cuenta que cuando mando datos en formato JSON no olvidarme del headers, muy importante
        },
    
        body: JSON.stringify({ titulo, descripcion, url_imagen, fecha})

    })
    const data = await response.json();
    alert(data.msg);  // propiedad msg que tambien defini en la ruta
})