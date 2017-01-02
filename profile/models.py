from __future__ import unicode_literals
from django.conf import settings
from django.db import models
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse

User._meta.get_field('email').blank = False

# Create your models here.

# Extending the user model for additional details
class UserDetail(models.Model):
	YEAR_CHOICES = (
		('1','1st'),
		('2','2nd'),
		('3','3rd'),
		('4','4th'),
		('5','5th'),
		)
	user = models.OneToOneField(settings.AUTH_USER_MODEL)
	college = models.CharField(max_length=100)
	city = models.CharField(max_length=20)
	department = models.CharField(max_length=100)
	year = models.CharField(max_length=1, choices=YEAR_CHOICES)

	def __str__(self):
		return self.user.username + ' from ' + self.college 



#Team model.
class Team(models.Model):
	name = models.CharField(max_length=20,unique=True)
	event = models.CharField(max_length=20) # models.ForeignKey(Event, on_delete=models.CASCADE)
	leader = models.ForeignKey(settings.AUTH_USER_MODEL)
	number_of_members = models.DecimalField(max_digits=1, decimal_places=0, default=6)
	secret_key = models.CharField(max_length=20)
	members = models.ManyToManyField(UserDetail, related_name='my_teams')

	def __str__(self):
		return 'Team ' + self.name + ' for ' + self.event

	def get_invite_url(self):
		return reverse('profile:accept', kwargs={'id':self.id, 'secret_key':self.secret_key})