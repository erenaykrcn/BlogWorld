from django.contrib import admin
from .models import Post, Category, Comment, Reply, Like


class PostAdmin(admin.ModelAdmin):
    list_display = ("title", "slug")


class CategoryAdmin(admin.ModelAdmin):
    list_display = ("category",)

class CommentAdmin(admin.ModelAdmin):
    list_display = ("content", "user", "post")


class ReplyAdmin(admin.ModelAdmin):
    list_display = ("content", "user", "comment")


class LikeAdmin(admin.ModelAdmin):
    list_display = ("user", "comment")


admin.site.register(Post, PostAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(Reply, ReplyAdmin)
admin.site.register(Like, LikeAdmin)

