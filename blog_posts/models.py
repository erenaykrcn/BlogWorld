from django.db import models
from django.conf import settings
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField


User = settings.AUTH_USER_MODEL


class Category(models.Model):
    category = models.TextField(null=True, max_length=100, default="World")


class Post(models.Model):
    user = models.ForeignKey(User, default=1, on_delete=models.CASCADE)
    date = models.TextField(null=True)
    title = models.TextField()
    content = RichTextUploadingField(null=True, blank=True)
    slug = models.SlugField(default="slug", unique=True, blank=False)
    desc = models.TextField(null=True, max_length=300)

    thumb = models.URLField(null=True, max_length=1000)

    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)


class Comment(models.Model):
    content = models.TextField(null=True, blank=True)
    user = models.ForeignKey(User, default=1, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, default=1, on_delete=models.CASCADE)
    date = models.DateField(null=True, blank=True)


class Reply(models.Model):
    content = models.TextField(null=True, blank=True)
    user = models.ForeignKey(User, default=1, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, default=1, on_delete=models.CASCADE)


class Like(models.Model):
    user = models.ForeignKey(User, default=1, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, default=1, on_delete=models.CASCADE)

#auth.post_set.all()
#qs = Post.objects.filter(user=auth/ user__id=auth.id)