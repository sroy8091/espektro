from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [

    # /changedp/
    url(r'^$', views.ImageUploadForm, name='changedp'),
    # /changedp/image/2
    url(r'^image/(?P<pk>[0-9]+)/$', views.ImageShow, name='image'),

    ]