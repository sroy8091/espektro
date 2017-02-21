from django.conf.urls import url
from django.contrib import admin
from . import views

app_name='events'

urlpatterns = [

    # /techtix/
    url(r'^$', views.techtix, name='techtix'),
   
]
