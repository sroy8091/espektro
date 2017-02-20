from django.shortcuts import render
from .models import gall
# Create your views here.

def get_gallery(request):
    return render(request, 'gallery.html')