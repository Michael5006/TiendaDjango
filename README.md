
# TiendaDjango

Proyecto del segundo parcial de Desarrollo de Aplicaciones Web.

## Integrantes

- Michael Hernández
- Jose Manuel Lasso

## Tecnologías utilizadas

- Python 3.12
- Django 5.2
- Django REST Framework
- SQLite

## Descripción

Aplicación web para administrar una tienda mediante Django REST Framework y un frontend desarrollado con HTML, CSS y JavaScript.

- Categorías
- Proveedores
- Productos

Los productos están relacionados con las categorías y los proveedores mediante ForeignKey.

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/Michael5006/TiendaDjango.git
```

2. Entrar a la carpeta:

```bash
cd TiendaDjango
```

3. Crear el entorno virtual:

```bash
py -3.12 -m venv .venv
```

4. Activar el entorno virtual en PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

5. Instalar las dependencias:

```bash
python -m pip install -r requirements.txt
```

6. Aplicar las migraciones:

```bash
python manage.py migrate
```

7. Ejecutar el servidor:

```bash
python manage.py runserver
```

## Rutas de la API

- Categorías: http://127.0.0.1:8000/api/categorias/
- Proveedores: http://127.0.0.1:8000/api/proveedores/
- Productos: http://127.0.0.1:8000/api/productos/

## Operaciones disponibles

La API permite realizar:

- GET: Consultar registros.
- POST: Crear registros.
- PUT: Actualizar registros.
- DELETE: Eliminar registros.


## Interfaz web

El proyecto incluye una interfaz desarrollada con HTML, CSS y JavaScript puro.

Para acceder a ella, inicia el servidor Django y abre:

http://127.0.0.1:8000/

La interfaz permite:

- Consultar y registrar categorías.
- Consultar y registrar proveedores.
- Consultar y registrar productos.
- Seleccionar la categoría y el proveedor de cada producto.
- Actualizar las tablas después de registrar datos, sin recargar manualmente la página.

## Organización del proyecto

- `categorias/`: modelo, serializer y ViewSet de categorías.
- `proveedores/`: modelo, serializer y ViewSet de proveedores.
- `productos/`: modelo, serializer y ViewSet de productos.
- `config/`: configuración y rutas de Django.
- `templates/`: estructura HTML del frontend.
- `static/css/`: estilos de la aplicación.
- `static/js/`: funcionalidades JavaScript.

## Trabajo colaborativo

El proyecto fue desarrollado por:

**Michael Hernández**
- Configuración y estructura del proyecto.
- Desarrollo del CRUD de Categorías y Productos.
- Diseño principal del frontend.
- Implementación de GET y POST de Categorías.

**José Manuel Lasso**
- Desarrollo del CRUD de Proveedores.
- Implementación de GET y POST de Proveedores.
- Implementación de GET y POST de Productos.

Las contribuciones están registradas en el historial de commits de GitHub.

## Uso de inteligencia artificial

Durante el desarrollo se utilizó inteligencia artificial como herramienta de apoyo para comprender conceptos, resolver errores y orientar la implementación.

Se documentaron las consultas, los resultados y las correcciones en una bitácora.

**Bitácora de IA:** https://docs.google.com/document/d/13DPxWaCfFgDye-3NS5-AHkO-Bhy2y6Nt/edit?usp=sharing&ouid=100224062037372335605&rtpof=true&sd=true

## Notas

- El proyecto utiliza SQLite como base de datos local.
- Después de clonar el repositorio es necesario ejecutar `python manage.py migrate`.
- Las operaciones GET, POST, PUT y DELETE están disponibles en las API.
- El frontend implementa GET y POST para las tres entidades.

