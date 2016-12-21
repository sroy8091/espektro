from django.contrib import admin
from .models import Signup
from .forms import SignupForm
# Register your models here.
class SignupAdmin(admin.ModelAdmin):
    list_display=["full_name",'college_Name','Email_Address']
    form = SignupForm

admin.site.register(Signup)
