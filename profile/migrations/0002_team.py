# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('events', '0002_auto_20170123_1057'),
        ('profile', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(unique=True, max_length=20)),
                ('number_of_members', models.DecimalField(default=6, max_digits=1, decimal_places=0)),
                ('secret_key', models.CharField(max_length=20)),
                ('event', models.ForeignKey(to='events.Event')),
                ('leader', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
                ('members', models.ManyToManyField(related_name='my_teams', to='profile.UserDetail')),
            ],
        ),
    ]
