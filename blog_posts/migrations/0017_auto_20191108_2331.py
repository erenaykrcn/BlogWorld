# Generated by Django 2.2.4 on 2019-11-08 20:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_posts', '0016_post_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='date',
            field=models.TextField(null=True),
        ),
    ]
