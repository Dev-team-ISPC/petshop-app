from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_users_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='password',
            field=models.CharField(default='', max_length=128),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='token',
            field=models.CharField(blank=True, max_length=64, null=True, unique=True),
        ),
    ]
