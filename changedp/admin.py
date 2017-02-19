from django.contrib import admin

# Register your models here.
from .models import  UploadedImage
from .forms  import  UploadImageForm
class UploadImageAdmin(admin.ModelAdmin):
   list_display = ["Name","Email","Image","Filter"]
   form = UploadImageForm 


admin.site.register(UploadedImage, UploadImageAdmin)
