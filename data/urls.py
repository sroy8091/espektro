from django.conf.urls import url
from django.contrib import admin
from django.contrib.auth import login

from . import views

app_name='data'

urlpatterns = [

    # /data/register/
    url(r'^register/$', views.UserFormView.as_view(), name='register'),

    # /data/login
    url(r'^login/$', views.login_view, name='login'),
    
]
