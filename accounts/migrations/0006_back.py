# Generated by Django 2.2.4 on 2019-11-08 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_reset_url_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='Back',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='images')),
            ],
        ),
    ]