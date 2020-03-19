"""blogWorld URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from .views import home_page, about_page, search, insert, reply, delete, delete_rep, like, \
    unlike, upload_thumb, update_post, update_profile, create_user, check_username, login_aa
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url


urlpatterns = [
    path('admin/', admin.site.urls),
    path("", home_page),
    path("about/", about_page),
    path("posts/", include("blog_posts.urls")),
    path("searchit/", search),
    path("accounts/", include('accounts.urls')),
    url(r'^insert/$', insert, name='insert'),
    path("insert/", insert, name="insert"),
    url(r'^reply/$', reply, name='insert'),
    path("reply/", reply, name="insert"),
    url(r'^delete/$', delete, name='delete'),
    url(r'^delete_rep/$', delete_rep, name='delete'),
    url(r'^like/$', like, name='like'),
    url(r'^unlike/$', unlike, name='unlike'),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    url(r'^posts/$', include('blog_posts.urls')),
    url('upload_thumb/', upload_thumb),
    url('update_post/', update_post),
    url('update_profile/', update_profile),
    url('create_user/', create_user),
    url('check_username/', check_username),
    url('login_a/', login_aa),
    url('accounts/', include('accounts.urls')),
]

#urlpatterns += staticfiles_urlpatterns()

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

#urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


