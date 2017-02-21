from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator
from stdimage import StdImageField
from django.conf import settings

#from profile.models import UserDetail


# Create your models here.


class Event(models.Model):
	EventType_IN_CHOICES = (
        ('Exotica', 'Exotica'),
        ('Techtix', 'Techtix'),
        )
	EventType = models.CharField(
        max_length=20, choices=EventType_IN_CHOICES, default='Exotica')

	EventName = models.CharField(max_length=200)
	EventImage = StdImageField(upload_to='event/event_image', variations={'thumbnail':(650,350, True)}, blank=True)
	NumberParticipants = models.DecimalField(decimal_places=0, max_digits=2)
	tagline = models.TextField(default='Tagline here', null=True)
	EventDetails = models.TextField(null=True)
	EventDate = models.DateField()
	StartTime = models.TimeField(null =True)
	EndTime = models.TimeField(null=True)
	# For single-participant events, add registered users to this:
	Participants = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='events_registered', blank=True)
	# The unique number values associated with the register-button for each techtix event:
	key = models.CharField(max_length=2)
	
	def __str__(self):
		return self.EventName

class Event_Coordinator(models.Model):
	CoordinatorName = models.CharField(max_length=200)
	CoordinatorImage = StdImageField(upload_to='event/coordinator_image', variations={'thumbnail':(150, 120, True)})
	CoordinatorEmail = models.EmailField()
	CoordinatorPhone = models.CharField(default=1234567890, max_length=10, validators=[RegexValidator(regex='^[789]\d{9}$', message='Please enter a valid phone number WITHOUT any PREFIX', code='invalid_phonenumber'),])
	CoordinatorEvent = models.ForeignKey(Event)
	

	def __str__(self):
		return self.CoordinatorName
