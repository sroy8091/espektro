from __future__ import unicode_literals
from django.conf import settings
from django.db import models
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from events.models import Event
from django.core.validators import RegexValidator
from stdimage import StdImageField

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
	accomodation = models.BooleanField(default=False)
	phone_no = models.CharField(max_length=10, validators=[RegexValidator(regex='^[789]\d{9}$', message='Please enter a valid phone number WITHOUT any PREFIX', code='invalid_phonenumber'),])
	image = StdImageField(upload_to='profile/photos/', blank=True, variations={
        'large': (600, 400),
        'thumbnail': (100, 100, True),
    	})
	def __str__(self):
		return self.user.username + ' from ' + self.college 



#Team model.
class Team(models.Model):
	name = models.CharField(max_length=20,unique=True)
	#event = models.CharField(max_length=20,blank=True)
	event = models.ForeignKey(Event, on_delete=models.CASCADE)
	leader = models.ForeignKey(settings.AUTH_USER_MODEL)
	number_of_members = models.DecimalField(max_digits=1, decimal_places=0, default=6)
	secret_key = models.CharField(max_length=20)
	members = models.ManyToManyField(UserDetail, related_name='my_teams', swappable=True)

	def __str__(self):
		return 'Team ' + self.name + ' for ' + str(self.event)


	def get_invite_url(self):
		return reverse('profile:accept', kwargs={'id':self.id, 'secret_key':self.secret_key})