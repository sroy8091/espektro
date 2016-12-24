from django.db import models
from stdimage import StdImageField

# Create your models here.


class Events(models.Model):
	EventType_IN_CHOICES = (
        ('Exotica', 'Exotica'),
        ('Techtix', 'Techtix'),
        )
	EventType = models.CharField(
        max_length=20, choices=EventType_IN_CHOICES, default='Exotica')

	EventName = models.CharField(max_length=200)
	EventImage = StdImageField(upload_to='event/event_image', variations={'thumbnail':(650,350, True)})
	tagline = models.TextField(default='Rocking Tagline here', null=True)
	EventDetails = models.TextField(null=True)
	EventDate = models.DateField()
	StartTime = models.TimeField(null =True)
	EndTime = models.TimeField(null=True)
	
	def __str__(self):
		return self.EventName

class Event_Coordinator(models.Model):
	CoordinatorName = models.CharField(max_length=200)
	CoordinatorImage = StdImageField(upload_to='event/coordinator_image', variations={'thumbnail':(150, 120, True)})
	CoordinatorEmail = models.EmailField()
	# CoordinatorPhone = PhoneNumberField()
	CoordinatorEvent = models.ForeignKey(Events)
	

	def __str__(self):
		return self.CoordinatorName
