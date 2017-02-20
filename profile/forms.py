from django.contrib.auth.models import User
from django import forms
from .models import UserDetail, Team

class UserForm(forms.ModelForm):
	password = forms.CharField(label='Password',widget=forms.PasswordInput)
	password2 = forms.CharField(label='Repeat Password', widget=forms.PasswordInput)
	class Meta:
		model = User
		fields = ['username', 'first_name', 'last_name','email']

	def clean_password2(self):
		cd = self.cleaned_data
		if cd['password'] != cd['password2']:
			raise forms.ValidationError("Passwords do not match.")
		return cd[passsword2]

class LoginForm(forms.Form):
	username = forms.CharField(label='User Name', max_length=64)
	password = forms.CharField(widget=forms.PasswordInput())


class UserEditForm(forms.ModelForm):
	
	class Meta:
		model = User
		fields = ('first_name', 'last_name', 'email')


class UserDetailEditForm(forms.ModelForm):
	class Meta:
		model = UserDetail
		fields = ('college','city','phone_no','image','accomodation')


class team_create_form(forms.ModelForm):
	class Meta:
		model = Team
		fields = ('name', 'event')

class TeamInviteForm(forms.Form):
	email = forms.EmailField()

class TeamAcceptForm(forms.Form):
	user = forms.CharField()
