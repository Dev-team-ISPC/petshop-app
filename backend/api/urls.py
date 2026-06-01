from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, home, login

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', home),
    path('login/', login),
    path('', include(router.urls)),
]
