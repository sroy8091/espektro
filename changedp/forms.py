from django import forms
from changedp.models import UploadedImage

class UploadImageForm(forms.ModelForm):
    Name = forms.CharField(widget=forms.TextInput(
        attrs={'size': '48', 'class': 'form-control', 'placeholder': 'Your Name'}))
    Email = forms.EmailField(widget=forms.TextInput(
        attrs={'size': '48', 'class': 'form-control', 'placeholder': 'Email Address'}))
    Image = forms.ImageField()
    

    class Meta:
        model = UploadedImage
        fields = ('Name', 'Email','Image', )
