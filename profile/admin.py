from django.contrib import admin
from .models import UserDetail, Team

# Register your models here.
class UserDetailAdmin(admin.ModelAdmin):
	"""docstring for UserDetailsAdmin"""
	list_display = ['user', 'college', 'department', 'year']

admin.site.register(UserDetail, UserDetailAdmin)

admin.site.register(Team)