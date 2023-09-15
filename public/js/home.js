// Referencia al elemento de formulario html
const formGuardar = document.querySelector("#form-guardar")

formGuardar.addEventListener('submit', async (e) => {

    e.preventDefault();

    // se capturan los datos del formulario
    const titulo = document.querySelector('#titulo-post').value;
    const detalle = document.querySelector('#detalle-post').value;

    // se toman los datos del servidor
    const response = await fetch('/nueva-publicacion', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ titulo, detalle})

    })
    const data = await response.json();
    alert(data.msg);
})