from django import forms
from .models import Signup

class SignupForm(forms.ModelForm):
    #full_name = forms.CharField(label="Your Name:" , max_length=30)
    class Meta:
        """docstring for Meta."""
        model=Signup
        fields = '__all__'
