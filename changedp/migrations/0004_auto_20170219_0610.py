# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('changedp', '0003_auto_20170218_1532'),
    ]

    operations = [
        migrations.AlterField(
            model_name='uploadedimage',
            name='Email',
            field=models.EmailField(max_length=254),
        ),
        migrations.AlterField(
            model_name='uploadedimage',
            name='Name',
            field=models.CharField(max_length=255),
        ),
    ]
