from django.shortcuts import render, redirect
from django.http import HttpResponse
from  forms import UploadImageForm

## Create your views here.
#from .forms import PhotoForm
#from .models import Photos
#def changedp(request):
#    if request.method == 'POST' :
#        form = PhotoForm(request.POST, request.FILES)
#
#        if form.is_valid():
#            img = Photos(image=request.FILES['image'], email=request.POST['email'])
#            img.save()
#            # email = form['email']
#            # img = form['file']
#            # obj = Photos(email=email, image=img)
#            # obj.save()
#            now = datetime.datetime.now()
#            html = "<html><body>It is now %s.</body></html>" % now
#            return HttpResponse(html)
#            #return HttpResponse(200) #has to be changed according to design
#    else:
#        form = PhotoForm()
#
#    context = {
#        'form' : form
#    }
#
#    return render(request, 'changedp.html' ,context)



def ImageUploadForm(request):
    if request.method == 'POST':
        form = UploadImageForm(request.POST , request.FILES)
        if form.is_valid():
            kp = form.cleaned_data['Name']
            form.save()
            print (kp)
            thanks = "Thanks "+kp+ " For Image Upload"         
            return HttpResponse(thanks)
    else:
        form = UploadImageForm()
    return render(request, 'changedp.html', {
        'form': form
    })
