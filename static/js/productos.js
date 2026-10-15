

const formatoCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
});


async function cargarProductos() {
    const tabla = document.getElementById('tabla-productos');
    const mensaje = document.getElementById('mensaje-productos');

    try {
        const respuesta = await fetch('/api/productos/');

        if (!respuesta.ok) {
            throw new Error('Error al consultar productos');
        }

        const productos = await respuesta.json();

        tabla.innerHTML = '';

        if (productos.length === 0) {
            const fila = tabla.insertRow();
            const celda = fila.insertCell();

            celda.colSpan = 6;
            celda.textContent = 'No hay productos registrados.';
            return;
        }

        productos.forEach(producto => {
            const fila = tabla.insertRow();

            fila.insertCell().textContent = producto.id;
            fila.insertCell().textContent = producto.nombre;
            fila.insertCell().textContent = formatoCOP.format(Number(producto.precio));
            fila.insertCell().textContent = producto.cantidad;
            fila.insertCell().textContent = producto.categoria;
            fila.insertCell().textContent = producto.proveedor;
        });

    } catch (error) {
        mensaje.textContent = 'Error al cargar los productos.';
        console.error(error);
    }
}

cargarProductos();


async function cargarOpcionesProducto() {
    const selectCategoria = document.getElementById('categoria-producto');
    const selectProveedor = document.getElementById('proveedor-producto');
    const mensaje = document.getElementById('mensaje-productos');

    try {
        // Consultar las categorías
        const respuestaCategorias = await fetch('/api/categorias/');

        if (!respuestaCategorias.ok) {
            throw new Error('Error al consultar categorías');
        }

        const categorias = await respuestaCategorias.json();

        categorias.forEach(categoria => {
            const opcion = document.createElement('option');
            opcion.value = categoria.id;
            opcion.textContent = categoria.nombre;

            selectCategoria.appendChild(opcion);
        });

        // Consultar los proveedores
        const respuestaProveedores = await fetch('/api/proveedores/');

        if (!respuestaProveedores.ok) {
            throw new Error('Error al consultar proveedores');
        }

        const proveedores = await respuestaProveedores.json();

        proveedores.forEach(proveedor => {
            const opcion = document.createElement('option');
            opcion.value = proveedor.id;
            opcion.textContent = proveedor.nombre;

            selectProveedor.appendChild(opcion);
        });

    } catch (error) {
        mensaje.textContent = 'Error al cargar categorías o proveedores.';
        console.error(error);
    }
}

cargarOpcionesProducto();


const formularioProductos = document.getElementById('form-productos');


const campoPrecio = document.getElementById('precio-producto');
const campoCantidad = document.getElementById('cantidad-producto');

// Solo permitir números enteros en la cantidad
campoCantidad.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');
});

// Mostrar el precio en formato colombiano
campoPrecio.addEventListener('input', function() {
    const digitos = this.value.replace(/\D/g, '').slice(0, 8);

    this.value = digitos
        ? formatoCOP.format(Number(digitos))
        : '';
});


formularioProductos.addEventListener('submit', async function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById('nombre-producto').value;
    const precio = campoPrecio.value.replace(/\D/g, '');
    const cantidad = document.getElementById('cantidad-producto').value;
    const categoria = document.getElementById('categoria-producto').value;
    const proveedor = document.getElementById('proveedor-producto').value;
    const mensaje = document.getElementById('mensaje-productos');

    const token = formularioProductos.querySelector('[name=csrfmiddlewaretoken]').value;

    try {
        const respuesta = await fetch('/api/productos/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': token
            },
            body: JSON.stringify({
                nombre: nombre,
                precio: precio,
                cantidad: Number(cantidad),
                categoria: Number(categoria),
                proveedor: Number(proveedor)
            })
        });

        if (!respuesta.ok) {
            const errores = await respuesta.json();
            console.error('Errores de la API:', errores);
            throw new Error('No se pudo guardar el producto');
        }

        mensaje.textContent = 'Producto guardado correctamente.';
        formularioProductos.reset();

        await cargarProductos();

    } catch (error) {
        mensaje.textContent = 'Error al guardar el producto.';
        console.error(error);
    }
});


