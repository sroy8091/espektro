from django.shortcuts import render_to_response, render
# from django.http import Http
# Create your views here.
from .forms import SignupForm
from .models import Signup


def get_name(request):
    if request.method == 'POST' :
        form = SignupForm(request.POST)

        if form.is_valid():
            name = str(form.cleaned_data['full_name'])
            form.save()
            return render_to_response('ca_registered.html', {'name':name})#has to be changed according to design
    else:
        form = SignupForm()

    context = {
        'form' : form
    }

    return render(request, 'ca.html' ,context)
