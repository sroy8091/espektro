from django.shortcuts import render
from django.http import HttpResponseRedirect
# Create your views here.
from .forms import SignupForm



def get_name(request):
    if request.method == 'POST' :
        form = SignupForm(request.POST)

        if form.is_valid():
            form.save()
            return HttpResponseRedirect('Thanks') #has to be changed according to design
    else:
        form = SignupForm()

    context = {
        'form' : form
    }

    return render(request, 'ambassador/forms.html' ,context)
