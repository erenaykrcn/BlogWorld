from django import forms
from django.utils.text import slugify
from .models import Category


class PostForm(forms.Form):
    title = forms.CharField()
    content = forms.CharField(widget=forms.Textarea)
    desc = forms.CharField(widget=forms.Textarea)
    category = forms.CharField()
    img_url = forms.URLField()


