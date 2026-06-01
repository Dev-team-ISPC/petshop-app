from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, home, login
from .views import (home, UsuarioViewSet, MascotaViewSet, TurnoViewSet, VacunacionViewSet, VacunaViewSet,
                    CategoriaViewSet,ProductoViewSet)




urlpatterns = [
    path('', home),
    path('login/', login),
    path('', include(router.urls)),
]
    path('usuarios/', UsuarioViewSet.as_view()),
    path('mascotas/', MascotaViewSet.as_view()),
    path('turnos/', TurnoViewSet.as_view()),
    path('vacunaciones/', VacunacionViewSet.as_view()),
    path('vacunas/', VacunaViewSet.as_view()),
    path('categorias/', CategoriaViewSet.as_view()),
    path('productos/', ProductoViewSet.as_view()),
]
