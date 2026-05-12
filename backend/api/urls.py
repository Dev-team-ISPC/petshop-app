from django.urls import path, include
from .views import (home, UsuarioViewSet, MascotaViewSet, TurnoViewSet, VacunacionViewSet, VacunaViewSet,
                    CategoriaViewSet,ProductoViewSet)




urlpatterns = [
    path('', home),
    path('usuarios/', UsuarioViewSet.as_view()),
    path('mascotas/', MascotaViewSet.as_view()),
    path('turnos/', TurnoViewSet.as_view()),
    path('vacunaciones/', VacunacionViewSet.as_view()),
    path('vacunas/', VacunaViewSet.as_view()),
    path('categorias/', CategoriaViewSet.as_view()),
    path('productos/', ProductoViewSet.as_view()),
]