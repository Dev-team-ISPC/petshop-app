from django.db import migrations

def cargar_categorias(apps, schema_editor):
    Categoria = apps.get_model('api', 'Categoria')
    for nombre in ['Alimentos', 'Higiene', 'Juguetes', 'Accesorios', 'Medicamentos']:
        Categoria.objects.get_or_create(nombre=nombre)

class Migration(migrations.Migration):
    dependencies = [('api', '0004_usuario_password')]
    
    operations = [
        migrations.RunPython(cargar_categorias),
    ]