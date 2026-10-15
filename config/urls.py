
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from categorias.views import CategoriaViewSet

# Creamos el router
router = DefaultRouter()

# Registramos el CRUD de categorias
router.register('categorias', CategoriaViewSet)

# Direcciones URL del proyecto
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
