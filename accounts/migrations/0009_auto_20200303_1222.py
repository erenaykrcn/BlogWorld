# Generated by Django 3.0.3 on 2020-03-03 09:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_member'),
    ]

    operations = [
        migrations.AddField(
            model_name='member',
            name='birthdate',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='member',
            name='gender',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='member',
            name='tel',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='member',
            name='prof',
            field=models.ImageField(default='/media/monet.jpg', upload_to='upload'),
        ),
        migrations.AlterField(
            model_name='member',
            name='wall',
            field=models.ImageField(default='/media/impression.jpg', upload_to='upload'),
        ),
    ]
