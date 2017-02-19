# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('campusambassador', '0004_auto_20170218_1543'),
    ]

    operations = [
        migrations.AlterField(
            model_name='signup',
            name='Email_Address',
            field=models.EmailField(unique=True, max_length=254),
        ),
        migrations.AlterField(
            model_name='signup',
            name='college_Name',
            field=models.CharField(unique=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='signup',
            name='facebook_Link',
            field=models.URLField(default=datetime.datetime(2017, 2, 19, 6, 10, 40, 676578, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='signup',
            name='gender',
            field=models.CharField(default=b'Male', max_length=6, blank=True, choices=[(b'Male', b'Male'), (b'Female', b'Female')]),
        ),
    ]
