# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2017-02-19 12:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profile', '0004_auto_20170219_1146'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userdetail',
            name='department',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='userdetail',
            name='year',
            field=models.CharField(blank=True, choices=[('1', '1st'), ('2', '2nd'), ('3', '3rd'), ('4', '4th'), ('5', '5th')], max_length=1),
        ),
    ]