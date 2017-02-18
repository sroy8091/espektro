from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator
# Create your models here.

class Signup(models.Model):
    gender_choices = (('Male', 'Male'),
                      ('Female', 'Female'))
    full_name= models.CharField(max_length=30)
    college_Name = models.CharField(max_length=50)
    gender = models.CharField(max_length=6, blank=True, choices=gender_choices, default='Male')
    Email_Address = models.EmailField()
    PhoneNo = models.CharField(max_length=10, validators=[RegexValidator(regex='^[789]\d{9}$', message='Please enter a valid phone number WITHOUT any PREFIX', code='invalid_phonenumber'),])
    facebook_Link= models.URLField(null=True, blank=True)
    def __str__(self):
        return self.full_name
