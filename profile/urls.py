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
    url(r'^login/$', authviews.login, {'template_name':'profile/login.html'}, name='login'),

    # /profile/logout
    url(r'^logout/$', authviews.logout, {'template_name':'profile/logout.html'}, name='logout'),

    # /profile/edit/
    url(r'^edit/$', views.edit, name='edit'),

    # /profile/teams/
    url(r'^teams/$', views.my_teams, name='my_teams'),
    
    # /profile/team/create/
    url(r'^team/create/$', views.team_create, name='createteam'),

    # /profile/team/2/invite/
    url(r'^team/(?P<id>[0-9]+)/invite/$', views.send_invite, name='invite'),

    # /profile/team/2/accept/rde3g7f95sdfgilejj56
    url(r'^team/(?P<id>[0-9]+)/accept/(?P<secret_key>[\w]{20})/$', views.accept_invite, name='accept'),

    # /profile/team/2/
    url(r'^team/(?P<pk>[0-9]+)/$', views.TeamDetail.as_view(), name='team_detail'),

    # restore password urls
    url(r'^password-reset/$',authviews.password_reset, {'post_reset_redirect' : '/profile/password-reset/done/','template_name':'profile/password_reset_form.html','email_template_name':'profile/password_reset_email.html'}, name='password_reset'),
    url(r'^password-reset/done/$', authviews.password_reset_done, {'template_name':'profile/password_reset_done.html'}, name='password_r_done'),
    url(r'^password-reset/confirm/(?P<uidb64>[-\w]+)/(?P<token>[-\w]+)/$', authviews.password_reset_confirm, {'post_reset_redirect' : '/profile/password-reset/complete','template_name':'profile/password_reset_confirm.html'}, name='password_reset_confirm'),
    url(r'^password-reset/complete/$',authviews.password_reset_complete, {'template_name':'profile/password_reset_complete.html'}, name='password_reset_complete'),
    
]
