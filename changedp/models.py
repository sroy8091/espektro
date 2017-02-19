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
    Name = models.CharField(max_length=255)
    #document = models.FileField(upload_to='documents/')
    UploadedAt = models.DateTimeField(auto_now_add=True)
    Image = StdImageField(upload_to='dpchange/')
    Email = models.EmailField()
   
    def __str__(self):
        return self.Email
