# Generated by Django 2.2.4 on 2019-11-07 10:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_posts', '0011_auto_20191107_1258'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='thumb',
            field=models.SlugField(default='https://www.sciencenews.org/wp-content/uploads/2019/02/022119_EC_expanding-universe_feat.jpg', max_length=1000, null=True),
        ),
    ]
