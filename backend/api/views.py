from django.http import JsonResponse
from rest_framework import viewsets
from .models import Usuario
from .serializers import UsuarioSerializer

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

def home(request):
    return JsonResponse({
        "message": "Bienvenido a la petshop, consultar /usuarios para ver los usuarios"
    })