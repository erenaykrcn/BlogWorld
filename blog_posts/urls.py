from django.urls import path
from django.conf.urls import url
from . import views

urlpatterns = [
    path("", views.post_list),
    path("post/<str:url_slug>/", views.post_details),
    path("create/", views.post_create),
    path("update/posted/<str:url_slug>/", views.post_update),
    path("update/sure/<str:sure_slug>", views.sure),
    path("update/<str:url_slug>/", views.post_update),
    path("update/comp/<str:sure_slug>/", views.delete_completed),
    path("cat/<str:cat_slug>/", views.category_list),
    path("userpage/<str:user_slug>/", views.user_page),
    url(r'^create_post/$', views.create_post),
]