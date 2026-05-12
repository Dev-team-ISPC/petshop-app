from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsuarioViewSet, home

router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet)

urlpatterns = [
    path('', home),
    path('', include(router.urls)),
]