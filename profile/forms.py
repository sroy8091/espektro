from django.contrib.auth.models import User
from django import forms
from .models import UserDetail, Team

class UserForm(forms.ModelForm):
	password = forms.CharField(widget=forms.PasswordInput)
	class Meta:
		model = User
		fields = ['username', 'email', 'password']

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
		fields = ('college','city','department','year')


class team_create_form(forms.ModelForm):
	class Meta:
		model = Team
		fields = ('name', 'event')

class TeamInviteForm(forms.Form):
	email = forms.EmailField()

class TeamAcceptForm(forms.Form):
	user = forms.CharField()