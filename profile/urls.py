from django.conf.urls import url
from django.contrib import admin
from django.contrib.auth import login
from django.contrib.auth import views as authviews
from . import views

app_name='profile'

urlpatterns = [

    # /data/register/
    url(r'^register/$', views.UserFormView.as_view(), name='register'),

    # /profile/login
    # url(r'^login/$', views.login_view, name='login'),
    url(r'^login/$', authviews.login, {'template_name':'profile/login.html'}, name='login'),

    # /profile/edit/
    url(r'^edit/$', views.edit, name='edit'),

    # /profile/team/create/
    url(r'^team/create/$', views.team_create, name='createteam'),

    # /profile/team/2/invite/
    url(r'^team/(?P<id>[0-9]+)/invite/$', views.send_invite, name='invite'),

    # /profile/team/2/accept/rde3g7f95sdfgilejj56
    url(r'^team/(?P<id>[0-9]+)/accept/(?P<secret_key>[\w]{20})/$', views.accept_invite, name='accept'),

    # /profile/team/2/
    url(r'^team/(?P<pk>[0-9]+)/$', views.TeamDetail.as_view(), name='team_detail'),
    
]
