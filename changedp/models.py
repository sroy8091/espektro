from __future__ import unicode_literals

from django.db import models
from stdimage import StdImageField
# Create your models here.
class Photos(models.Model):
    image = StdImageField(upload_to='dpchange/')
    email = models.EmailField(blank=True)

    def __str__(self):
        return self.email