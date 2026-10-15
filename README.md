
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

API REST para administrar una tienda mediante tres CRUD:

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
