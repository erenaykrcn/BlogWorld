# Generated by Django 2.2.4 on 2019-11-07 09:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_posts', '0009_auto_20191107_1232'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='desc',
            field=models.TextField(max_length=92, null=True),
        ),
    ]
