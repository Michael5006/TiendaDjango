
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

# Importaciones Adicionales
from categorias.views import CategoriaViewSet
from proveedores.views import ProveedorViewSet

# Creamos el router
router = DefaultRouter()

# Registramos el CRUD de la tienda
router.register('categorias', CategoriaViewSet)
router.register('proveedores', ProveedorViewSet)

# Direcciones URL del proyecto
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
