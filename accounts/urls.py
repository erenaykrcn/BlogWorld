from django.contrib import admin
from django.urls import path, include
from accounts.views import signup, changepass, reset, reset_done, reset_page, reset_complete, edit, profile_page, login_a
from django.contrib.auth.views import LogoutView
from django.conf.urls import url


urlpatterns = [
    path("profile/", profile_page),
    path("login/", login_a),
    path("logout/", LogoutView.as_view()),
    path("signup/", signup),
    path("changepass/", changepass),
    path("reset", reset),
    path("reset-done/", reset_done),
    path("reset-complete/", reset_complete),
    path("edit/", edit),
    path("<str:reset_url>/", reset_page),
]