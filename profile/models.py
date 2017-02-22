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


"""COLLEGE_CHOICES = (
					('1','Abacus Institute Of Engineering And Management'),
              		('2','Academy of Technology'),
              		('3','Adamas Institute of Technology'),
              		('4','Aryabhatta Institute ofEngineering &amp; Management '),
            		('Asansol Engineering College,'),
              		('B.P. Poddar Inst. of Management &amp; Technology'),
            		('Bankura Unayani Institute of Engineering'),
            		('Batanagar Institute Of Engineering, Management And Science'),
            		('Bcda College Of Pharmacy And Technology'),
              		('Bengal College of Engineering &amp; Technology'),
              		('Bengal College of Engineering &amp; Technology For Women'),
             		('Bengal Collge Of Pharmaceutical Science And Research,Durgapur'),
              		('Bengal College of Technology &amp; Management'),
            		('Bengal Institute Of Technology And Management, Santiniketan'),
            		('Bengal Institute Of Technology,Dhapa,Kolkata'),
            		('Bengal School Of Technology,Hooghly'),
            		('Bharat Technology,Howrah'),
            		('Bidhan Chandra Krishi Viswa Vidyalaya'),
            		('Birbhum Institute of Engineering $ Technology'),
              		('Brainware Group Of Institutions - Sabita Devi Education Trust, Barasat'),
              		('Budge Budge Institute of technology'),
              		('Calcutta Institute of Engineering &amp; Management'),
              		('Calcutta Institiute of Technology'),
            		('Calcutta Institute Of Pharmaceutical Tech. And Allied Health Sciences'),
              		('Calcutta Institute Of Technology, Uluberia'),
              		('Camelia Institute Of Engineering And Technology'),
              		('Camelia Institute Of Technology And Management'),
            		('Camelia Institute Of Technology, Badu Road'),
              		('Camelia School Of Engineering And Technology'),
              		('College Of Engineering And Management'),
              		('Department Of Jute And Fibre Technology, Calcutta University'),
              		('Dr. B. C. Roy College Of Pharmacy And Applied Health Science'),
            		('Dr. B. C. Roy Engineering College'),
              		('Dr. Sudhir Chandra Sur Degree Engineering College'),
              		('Dream Institute Of Technology'),
              		('Dumkal Institute Of Engineering And Technology'),
            		('Durgapur Institute Of Advanced Technology And Management'),
              		('Elitte College Of Engineering'),
              		('Future Institute Of Engineering And Management'),
              		('Future Institute Of Technology, Boral'),
            		('Gargi Memorial Institute Of Technology'),
              		('Global Institute Of Management And Technology'),
            		('Goverment College Of Engineering And Leather Technology'),
              		('Govt. College Of Engineering And Textile Technology'),
              		('Greater Kolkata College Of Engineering And Management'),
              		('Gupta College Of Technological Science'),
            		('Guru Nanak Institute Of Pharmaceutical Science And Technology'),
              		('Guru Nanak Institute Of Technology'),
              		('Haldia Institute Of Technology'),
              		('Hemnalini Memorial College Of Engineering'),
            		('Heritage Institute Of Technology'),
              		('Hooghly Engineering And Technology College'),
              		('Ideal Institute Of Engineering'),
              		('Imps College Of Engineering And Technology'),
            		('Indian Institiute of Technology,Kharagpur'),
            		('Institute Of Engineering And Management'),
            		('Institute Of Pharmacy, Jalpaiguri'),
              		('Institute Of Science And Technology'),
             		('Jadavpur University'),
            		('Jalpaiguri Goverment Engineering College'),
              		('Jis College Of Engineering'),
              		('Jld Engineering And Management College'),
            		('Kalyani Goverment Engineering College'),
            		('Kanad Institute Of Engineering And Management'),
              		('Mallabhum Institute Of Technology'),
            		('Maulana Abul Kalam Azad University Of Technology(WBUT)'),
              		('Mckv Institute Of Engineering'),
              		('Meghnad Saha Institute Of Technology'),
            		('Modern Institute Of Engineering And Technology'),
              		('Murshidabad College Of Engineering And Technology'),
              		('Narula Institute Of Technology'),
            		('National Institute of Technology,Durgapur'),
              		('National Power Training Institute'),
            		('Neotia Institute Of Technology Management And Science (Itme)'),
              		('Netaji Subhas Engineering College'),
              		('Netaji Subhash Chandra Bose Institute Of Pharmacy'),
              		('Nshm Knowledge Campus, Durgapur Group Of Institutions'),
            		('Nshm Knowledge Campus, Kolkata Group Of Institutions'),
              		('Om Dayal Group Of Institutions'),
              		('Pailan College Of Management And Technology'),
              		('Rcc Institute Of Information Technology'),
            		('Regent Education And Research Foundation'),
              		('Sanaka Education Trusts Group Of Institutions'),
              		('Saroj Mohan Institute Of Technology'),
              		('Seacom Engineering College'),
             		('Seacom Skills University -Bolpur'),
              		('Siliguri Institute Of Technology'),
              		('St. Marys Technical Campus'),
              		('St. Thomas College Of Engineering And Technology'),
             		('Supreme Knowledge Foundation Group Of Institutions'),
              		('Surendra Institute Of Engineering And Management'),
              		('Swami Vivekananda Institute Of Science And Technology'),
              		('Techno India College Of Technology'),
             		('Techno India University,Salt Lake'),
              		('Techno India-Balurghat'),
              		('Techno India-Banipur,24 Parganas-North'),
              		('Techno India-Durgapur,Kanksa, Panagar'),
             		('Techno India-Salt Lake,Sector-V,Salt Lake'),
             		('University Institute Of Technology, Burdwan'),
              		('University Of Calcutta'),
              		('University Of Engineering And Management, Rajarhat '),
              		('University Of Kalyani'),
              		('Uttar Banga Krishi Viswa Vidyalaya'),
             		('West Bengal University Of Animal And Fishery Sciences'),
              		('Others'),
				)"""

class UserDetail(models.Model):
	YEAR_CHOICES = (
		('1','1st'),
		('2','2nd'),
		('3','3rd'),
		('4','4th'),
		('5','5th'),
		)

	#id = models.DecimalField(max_digits=9999, decimal_places=0, primary_key=True)
	user = models.OneToOneField(settings.AUTH_USER_MODEL)
	college = models.CharField(max_length=100,  default='Kalyani Goverment Engineering College')
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
	event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='participating_teams')
	leader = models.ForeignKey(settings.AUTH_USER_MODEL)
	number_of_members = models.DecimalField(max_digits=1, decimal_places=0, default=6)
	secret_key = models.CharField(max_length=20)
	members = models.ManyToManyField(UserDetail, related_name='my_teams', swappable=True)

	def __str__(self):
		return 'Team ' + self.name + ' for ' + str(self.event)


	def get_invite_url(self):
		return reverse('profile:accept', kwargs={'id':self.id, 'secret_key':self.secret_key})