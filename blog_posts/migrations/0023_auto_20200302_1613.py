# Generated by Django 2.2.4 on 2020-03-02 13:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_posts', '0022_auto_20200229_2229'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='thumb',
            field=models.URLField(default='/static/default_thumb.jpg', max_length=1000, null=True),
        ),
    ]
