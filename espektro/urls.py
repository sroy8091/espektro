"""espektro URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url,include
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic import TemplateView
from campusambassador.views import get_name
# from changedp.views import ImageUploadForm

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name="index.html"), name='index'),
    url(r'^home/', TemplateView.as_view(template_name='home.html'), name='home'),
    url(r'^contact/$', TemplateView.as_view(template_name='contact.html'), name='contact'),
    url(r'^gallery/$', TemplateView.as_view(template_name='gallery.html'), name='gallery'),
    url(r'^admin/', admin.site.urls),
    url(r'^ca/','campusambassador.views.get_name',name="ambassador"),
    url(r'^profile/', include('profile.urls')),
    url(r'^changedp/', include('changedp.urls')),
    url(r'^techtix/', include('events.urls')),
    url(r'^about/', TemplateView.as_view(template_name='about.html'), name='about'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
