# Generated by Django 3.0.3 on 2020-03-09 10:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_posts', '0024_auto_20200306_1220'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
