from __future__ import unicode_literals

from django.db import models
from stdimage import StdImageField


# Create your models here.
class Photos(models.Model):
    image = StdImageField(upload_to='dpchange/')
    email = models.EmailField(blank=True)


    def __str__(self):
        return self.email



class UploadedImage(models.Model):
    ThemeChoices = (('ActionAndAdventure', 'ActionAndAdventure'),
                      ('FantasyAndScienceFiction', 'FantasyAndScienceFiction'),
			('RomanceAndPoetry','RomanceAndPoetry'),
                        ('ScienceAndSpirituality','ScienceAndSpirituality'),
                        ('MysteryAndThriller','MysteryAndThriller'),
                       ('ComicsAndManga','ComicsAndManga'),)
    Name = models.CharField(max_length=255)
    UploadedAt = models.DateTimeField(auto_now_add=True)
    Image = StdImageField(upload_to='dpchange/')
    Email = models.EmailField()
    Filter = models.CharField(max_length=60, choices=ThemeChoices, default='ActionAndAdventure')

   
    def __str__(self):
        return self.Email
