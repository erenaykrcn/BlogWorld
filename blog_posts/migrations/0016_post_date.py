# Generated by Django 2.2.4 on 2019-11-08 20:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_posts', '0015_post_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='date',
            field=models.DateField(null=True),
        ),
    ]