# Generated by Django 2.2.4 on 2019-11-04 20:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_reset_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='reset_url',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
    ]