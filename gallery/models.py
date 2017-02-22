from django.db import models
from stdimage import StdImageField

# Create your models here.

class gall(models.Model):
    image = StdImageField(upload_to='/gallery')
    caption = models.CharField(max_length=50)

    def __str__(self):
        return self.caption