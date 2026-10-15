
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

# Importaciones Adicionales De La Tienda
from categorias.views import CategoriaViewSet
from proveedores.views import ProveedorViewSet
from productos.views import ProductoViewSet

# Creamos el router
router = DefaultRouter()

# Registramos el CRUD de la tienda
router.register('categorias', CategoriaViewSet)
router.register('proveedores', ProveedorViewSet)
router.register('productos', ProductoViewSet)

# Direcciones URL del proyecto
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
