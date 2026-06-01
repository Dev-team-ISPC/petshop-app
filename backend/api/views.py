import secrets
from django.http import JsonResponse
from django.contrib.auth.hashers import check_password
from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.views import APIView as APIView
from .models import Usuario, Mascota, Turno, Vacunacion, Vacuna, Categoria, Producto
from .serializers import UsuarioSerializer, MascotaSerializer, TurnoSerializer, VacunacionSerializer, VacunaSerializer, CategoriaSerializer, ProductoSerializer


    def get_permissions(self):
        if self.action == 'create':
            return [AllowAny()]
        return [IsAuthenticated()]

@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({'error': 'Credenciales inválidas.'}, status=status.HTTP_401_UNAUTHORIZED)

    if not check_password(password, user.password):
        return Response({'error': 'Credenciales inválidas.'}, status=status.HTTP_401_UNAUTHORIZED)

    user.token = secrets.token_hex(32)
    user.save(update_fields=['token'])

    return Response({
        'token': user.token,
        'user': UserSerializer(user).data
    })

def home(request):
    return JsonResponse({'message': 'Bienvenido a la petshop.'})
    return JsonResponse({'message': 'Bienvenido a la API de la veterinaria, las rutas disponibles son: /usuarios/, /mascotas/, /turnos/, /vacunaciones/, /vacunas/, /categorias/ y /productos/'})

class UsuarioViewSet(APIView):
    def get(self, request):
        usuarios = Usuario.objects.all()
        serializer = UsuarioSerializer(usuarios, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UsuarioSerializer(data=request.data)


class MascotaViewSet(APIView):
    def get(self, request):
        mascotas = Mascota.objects.all()
        serializer = MascotaSerializer(mascotas, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MascotaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class TurnoViewSet(APIView):
    def get(self, request):
        turnos = Turno.objects.all()
        serializer = TurnoSerializer(turnos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TurnoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class VacunacionViewSet(APIView):
    def get(self, request):
        vacunaciones = Vacunacion.objects.all()
        serializer = VacunacionSerializer(vacunaciones, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacunacionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class VacunaViewSet(APIView):
    def get(self, request):
        vacunas = Vacuna.objects.all()
        serializer = VacunaSerializer(vacunas, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacunaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class CategoriaViewSet(APIView):
    def get(self, request):
        categorias = Categoria.objects.all()
        serializer = CategoriaSerializer(categorias, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategoriaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors, status=400)

class ProductoViewSet(APIView):
    def get(self, request):
        productos = Producto.objects.all()
        serializer = ProductoSerializer(productos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProductoSerializer(data=request.data)
