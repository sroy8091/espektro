from django.db import models

# Create your models here.

class Signup(models.Model):
    full_name= models.CharField(max_length=30)
    college_Name = models.CharField(max_length=50)
    college_Address = models.CharField(max_length=20)
    Email_Address = models.EmailField()
    facebook_Link= models.URLField(null=True, blank=True)
    innitaitives= models.TextField()
    def __str__(self):
        return self.full_name
