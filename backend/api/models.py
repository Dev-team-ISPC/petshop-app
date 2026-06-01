from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128, default='')
    token = models.CharField(max_length=64, blank=True, null=True, unique=True)
    role = models.CharField(
        max_length=15,
        choices=[
            ('admin', 'administrador'),
            ('cliente', 'Cliente'),
        ],
        default='cliente'
    )

    is_authenticated = True

    def __str__(self):
        return self.name