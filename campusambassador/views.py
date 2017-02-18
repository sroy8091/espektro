from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from .forms import SignupForm



def get_name(request):
    if request.method == 'POST' :
        form = SignupForm(request.POST)

        if form.is_valid():
            name = str(form.cleaned_data['full_name'])
            form.save()
            return HttpResponse('Thanks '+name+ ' for submission') #has to be changed according to design
    else:
        form = SignupForm()

    context = {
        'form' : form
    }

    return render(request, 'ca.html' ,context)
