from django.http import JsonResponse
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

def home(request):
    return JsonResponse({
        "message": "Bienvenido a la petshop, consultar /users para ver los usuarios"
    })