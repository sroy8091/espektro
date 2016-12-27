# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-12-26 20:10
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import stdimage.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event_Coordinator',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('CoordinatorName', models.CharField(max_length=200)),
                ('CoordinatorImage', stdimage.models.StdImageField(upload_to=b'event/coordinator_image')),
                ('CoordinatorEmail', models.EmailField(max_length=254)),
                ('CoordinatorPhone', models.CharField(default=1234567890, max_length=10, validators=[django.core.validators.RegexValidator(code=b'invalid_phonenumber', message=b'Please enter a valid phone number WITHOUT any PREFIX', regex=b'^[789]\\d{9}$')])),
            ],
        ),
        migrations.CreateModel(
            name='Events',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('EventType', models.CharField(choices=[(b'Exotica', b'Exotica'), (b'Techtix', b'Techtix')], default=b'Exotica', max_length=20)),
                ('EventName', models.CharField(max_length=200)),
                ('EventImage', stdimage.models.StdImageField(upload_to=b'event/event_image')),
                ('tagline', models.TextField(default=b'Tagline here', null=True)),
                ('EventDetails', models.TextField(null=True)),
                ('EventDate', models.DateField()),
                ('StartTime', models.TimeField(null=True)),
                ('EndTime', models.TimeField(null=True)),
            ],
        ),
        migrations.AddField(
            model_name='event_coordinator',
            name='CoordinatorEvent',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='events.Events'),
        ),
    ]
