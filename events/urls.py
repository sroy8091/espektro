from django.conf.urls import url
from django.contrib import admin
from django.views.generic import TemplateView

from . import views

app_name='events'

urlpatterns = [

    # /techtix/
    url(r'^techtix/$', views.techtix, name='techtix'),
    url(r'^exotica/$', views.exotica, name='exotica'),

    #exotica iframe
    url(r'^testgame/', TemplateView.as_view(template_name="events/exotica_frame.html"),
                   name='iframess'),
   
]
