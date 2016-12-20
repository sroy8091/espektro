from django import forms
from .models import Signup

class SignupForm(forms.ModelForm):
    #full_name = forms.CharField(label="Your Name:" , max_length=30)
    class Meta:
        """docstring for Meta."""
        model=Signup
        fields = ['full_name' ,'college_Name' ,'college_Address','Email_Address','facebook_Link', 'innitaitives']
        def __init__(self, arg):
            super(Meta, self).__init__()
            self.arg = arg
