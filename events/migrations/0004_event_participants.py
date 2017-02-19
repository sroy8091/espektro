# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2017-02-19 12:22
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('events', '0003_event_numberparticipants'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='Participants',
            field=models.ManyToManyField(related_name='my_events', to=settings.AUTH_USER_MODEL),
        ),
    ]
