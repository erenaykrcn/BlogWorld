from django.db import models
from django.contrib.auth.models import User


class Reset_Url(models.Model):
    slug = models.SlugField(unique=True, blank=False, null=False)
    is_active = models.BooleanField(default=True, blank=False, null=False)
    username = models.CharField(max_length=150, null=False, blank=False, default="erenaykaracan")


class Member(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    prof = models.ImageField(default="https://blogworld-storage.s3.eu-central-1.amazonaws.com/static/monet.jpg")
    wall = models.ImageField(default="https://blogworld-storage.s3.eu-central-1.amazonaws.com/static/impression.jpg")

    tel = models.CharField(max_length=100, null=True, blank=True)
    gender = models.CharField(max_length=100, null=True, blank=True)
    birthdate = models.CharField(max_length=100, null=True, blank=True)
