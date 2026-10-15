
async function cargarCategorias() {
    const tabla = document.getElementById('tabla-categorias');
    const mensaje = document.getElementById('mensaje-categorias');

    try {
        const respuesta = await fetch('/api/categorias/');
        const categorias = await respuesta.json();

        tabla.innerHTML = '';

        if (categorias.length === 0) {
            const fila = tabla.insertRow();
            const celda = fila.insertCell();
            celda.colSpan = 3;
            celda.textContent = 'No hay categorías registradas.';
            return;
        }

        categorias.forEach(categoria => {
            const fila = tabla.insertRow();

            fila.insertCell().textContent = categoria.id;
            fila.insertCell().textContent = categoria.nombre;
            fila.insertCell().textContent = categoria.descripcion;
        });

    } catch (error) {
        mensaje.textContent = 'Error al cargar las categorías.';
        console.error(error);
    }
}

cargarCategorias();


const formulario = document.getElementById('form-categorias');

formulario.addEventListener('submit', async function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById('nombre-categoria').value;
    const descripcion = document.getElementById('descripcion-categoria').value;
    const mensaje = document.getElementById('mensaje-categorias');

    const token = formulario.querySelector('[name=csrfmiddlewaretoken]').value;

    try {
        const respuesta = await fetch('/api/categorias/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': token
            },
            body: JSON.stringify({
                nombre: nombre,
                descripcion: descripcion
            })
        });

        if (!respuesta.ok) {
            throw new Error('No se pudo guardar la categoría');
        }

        mensaje.textContent = 'Categoría guardada correctamente.';
        formulario.reset();

        await cargarCategorias();

    } catch (error) {
        mensaje.textContent = 'Error al guardar la categoría.';
        console.error(error);
    }
});

