from django.contrib import admin

from api.models import Usuario, Mascota, Turno, Vacunacion, Vacuna, Categoria, Producto

# Register your models here.
admin.site.register(Usuario)
admin.site.register(Mascota)
admin.site.register(Turno)
admin.site.register(Vacunacion)
admin.site.register(Vacuna)
admin.site.register(Categoria)
admin.site.register(Producto)
