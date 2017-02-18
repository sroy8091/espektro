from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from .forms import PhotoForm
from .models import Photos
def changedp(request):
    if request.method == 'POST' :
        form = PhotoForm(request.POST, request.FILES)

        if form.is_valid():
            img = Photos(image=request.FILES['image'], email=request.POST['email'])
            img.save()
            # email = form['email']
            # img = form['file']
            # obj = Photos(email=email, image=img)
            # obj.save()
            return HttpResponse(200) #has to be changed according to design
    else:
        form = PhotoForm()

    context = {
        'form' : form
    }

    return render(request, 'changedp.html' ,context)