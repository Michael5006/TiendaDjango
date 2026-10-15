
async function cargarProveedores() {
    const tabla = document.getElementById('tabla-proveedores');
    const mensaje = document.getElementById('mensaje-proveedores');

    try {
        const respuesta = await fetch('/api/proveedores/');

        if (!respuesta.ok) {
            throw new Error('Error al consultar proveedores');
        }

        const proveedores = await respuesta.json();

        tabla.innerHTML = '';

        if (proveedores.length === 0) {
            const fila = tabla.insertRow();
            const celda = fila.insertCell();

            celda.colSpan = 3;
            celda.textContent = 'No hay proveedores registrados.';
            return;
        }

        proveedores.forEach(proveedor => {
            const fila = tabla.insertRow();

            fila.insertCell().textContent = proveedor.id;
            fila.insertCell().textContent = proveedor.nombre;
            fila.insertCell().textContent = proveedor.telefono;
        });

    } catch (error) {
        mensaje.textContent = 'Error al cargar los proveedores.';
        console.error(error);
    }
}

cargarProveedores();


const formularioProveedores = document.getElementById('form-proveedores');

formularioProveedores.addEventListener('submit', async function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById('nombre-proveedor').value;
    const telefono = document.getElementById('telefono-proveedor').value;
    const mensaje = document.getElementById('mensaje-proveedores');

    const token = formularioProveedores.querySelector('[name=csrfmiddlewaretoken]').value;

    try {
        const respuesta = await fetch('/api/proveedores/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': token
            },
            body: JSON.stringify({
                nombre: nombre,
                telefono: telefono
            })
        });

        if (!respuesta.ok) {
            throw new Error('No se pudo guardar el proveedor');
        }

        mensaje.textContent = 'Proveedor guardado correctamente.';
        formularioProveedores.reset();

        await cargarProveedores();

    } catch (error) {
        mensaje.textContent = 'Error al guardar el proveedor.';
        console.error(error);
    }
});

