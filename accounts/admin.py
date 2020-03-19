from django.contrib import admin
from .models import Reset_Url,Member


class ResetAdmin(admin.ModelAdmin):
    list_display = ("slug", "is_active", "username")


admin.site.register(Reset_Url, ResetAdmin)


class MemberAdmin(admin.ModelAdmin):
    list_display = ("user", "tel", "birthdate", "gender")


admin.site.register(Member, MemberAdmin)

