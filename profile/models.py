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


"""	YEAR_CHOICES = (
		('1','1st'),
		('2','2nd'),
		('3','3rd'),
		('4','4th'),
		('5','5th'),
		)
	COLLEGE_CHOICES = (
					('1','Abacus Institute Of Engineering And Management'),
					('2','Academy of Technology'),
					('63','Kalyani Goverment Engineering College'),
					('3','Adamas Institute of Technology'),
					('4','Aryabhatta Institute ofEngineering &amp; Management '),
					('5','Asansol Engineering College,'),
					('6','B.P. Poddar Inst. of Management &amp; Technology'),
					('7','Bankura Unayani Institute of Engineering'),
					('8','Batanagar Institute Of Engineering, Management And Science'),
					('9','Bcda College Of Pharmacy And Technology'),
					('10','Bengal College of Engineering &amp; Technology'),
					('11,''Bengal College of Engineering &amp; Technology For Women'),
					('12','Bengal Collge Of Pharmaceutical Science And Research,Durgapur'),
					('13','Bengal College of Technology &amp; Management'),
					('14','Bengal Institute Of Technology And Management, Santiniketan'),
					('15','Bengal Institute Of Technology,Dhapa,Kolkata'),
					('16','Bengal School Of Technology,Hooghly'),
					('17','Bharat Technology,Howrah'),
					('18','Bidhan Chandra Krishi Viswa Vidyalaya'),
					('19','Birbhum Institute of Engineering $ Technology'),
					('20','Brainware Group Of Institutions - Sabita Devi Education Trust, Barasat'),
					('21','Budge Budge Institute of technology'),
					('22','Calcutta Institute of Engineering &amp; Management'),
					('23','Calcutta Institiute of Technology'),
					('24','Calcutta Institute Of Pharmaceutical Tech. And Allied Health Sciences'),
					('25','Calcutta Institute Of Technology, Uluberia'),
					('26','Camelia Institute Of Engineering And Technology'),
					('27','Camelia Institute Of Technology And Management'),
					('28','Camelia Institute Of Technology, Badu Road'),
					('29','Camelia School Of Engineering And Technology'),
					('30','College Of Engineering And Management'),
					('31','Department Of Jute And Fibre Technology, Calcutta University'),
					('32','Dr. B. C. Roy College Of Pharmacy And Applied Health Science'),
					('33','Dr. B. C. Roy Engineering College'),
					('34','Dr. Sudhir Chandra Sur Degree Engineering College'),
					('35','Dream Institute Of Technology'),
					('36','Dumkal Institute Of Engineering And Technology'),
					('37','Durgapur Institute Of Advanced Technology And Management'),
					('38','Elitte College Of Engineering'),
					('39','Future Institute Of Engineering And Management'),
					('40','Future Institute Of Technology, Boral'),
					('41','Gargi Memorial Institute Of Technology'),
					('42','Global Institute Of Management And Technology'),
					('43','Goverment College Of Engineering And Leather Technology'),
					('44','Govt. College Of Engineering And Textile Technology'),
					('45','Greater Kolkata College Of Engineering And Management'),
					('46','Gupta College Of Technological Science'),
					('47','Guru Nanak Institute Of Pharmaceutical Science And Technology'),
					('48','Guru Nanak Institute Of Technology'),
					('49','Haldia Institute Of Technology'),
					('50','Hemnalini Memorial College Of Engineering'),
					('51','Heritage Institute Of Technology'),
					('52','Hooghly Engineering And Technology College'),
					('53','Ideal Institute Of Engineering'),
					('54','Imps College Of Engineering And Technology'),
					('55','Indian Institiute of Technology,Kharagpur'),
					('56','Institute Of Engineering And Management'),
					('57','Institute Of Pharmacy, Jalpaiguri'),
					('58','Institute Of Science And Technology'),
					('59','Jadavpur University'),
					('60','Jalpaiguri Goverment Engineering College'),
					('61','Jis College Of Engineering'),
					('62','Jls Engineering And Management College'),
					('64','Kanad Institute Of Engineering And Management'),
					('65','Mallabhum Institute Of Technology'),
					('66','Maulana Abul Kalam Azad University Of Technology(WBUT)'),
					('67','Mckv Institute Of Engineering'),
					('68','Meghnad Saha Institute Of Technology'),
					('69','Modern Institute Of Engineering And Technology'),
					('70','Murshidabad College Of Engineering And Technology'),
					('71','Narula Institute Of Technology'),
					('72','National Institute of Technology,Durgapur'),
					('73','National Power Training Institute'),
					('74','Neotia Institute Of Technology Management And Science (Itme)'),
					('75','Netaji Subhas Engineering College'),
					('76','Netaji Subhash Chandra Bose Institute Of Pharmacy'),
					('77','Nshm Knowledge Campus, Durgapur Group Of Institutions'),
					('78','Nshm Knowledge Campus, Kolkata Group Of Institutions'),
					('79','Om Dayal Group Of Institutions'),
					('80','Pailan College Of Management And Technology'),
					('81','Rcc Institute Of Information Technology'),
					('82','Regent Education And Research Foundation'),
					('83','Sanaka Education Trusts Group Of Institutions'),
					('84','Saroj Mohan Institute Of Technology'),
					('85','Seacom Engineering College'),
					('86','Seacom Skills University -Bolpur'),
					('87','Siliguri Institute Of Technology'),
					('88','St. Marys Technical Campus'),
					('89','St. Thomas College Of Engineering And Technology'),
					('90','Supreme Knowledge Foundation Group Of Institutions'),
					('91','Surendra Institute Of Engineering And Management'),
					('92','Swami Vivekananda Institute Of Science And Technology'),
					('93','Techno India College Of Technology'),
					('94','Techno India University,Salt Lake'),
					('95','Techno India-Balurghat'),
					('96','Techno India-Banipur,24 Parganas-North'),
					('97','Techno India-Durgapur,Kanksa, Panagar'),
					('98','Techno India-Salt Lake,Sector-V,Salt Lake'),
					('99','University Institute Of Technology, Burdwan'),
					('100','University Of Calcutta'),
					('101','University Of Engineering And Management, Rajarhat '),
					('102','University Of Kalyani'),
					('103','Uttar Banga Krishi Viswa Vidyalaya'),
					('104','West Bengal University Of Animal And Fishery Sciences'),
					('105','Others'),


				)
	"""


class UserDetail(models.Model):




	#id = models.DecimalField(max_digits=9999, decimal_places=0, primary_key=True)
	user = models.OneToOneField(settings.AUTH_USER_MODEL, related_name = 'UserDetail')
	college = models.CharField(max_length=100, default='Kalyani Goverment Engineering College')
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