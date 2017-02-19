# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('changedp', '0004_auto_20170219_0610'),
    ]

    operations = [
        migrations.AddField(
            model_name='uploadedimage',
            name='Filter',
            field=models.CharField(default='ActionAndAdventure', max_length=60, choices=[('ActionAndAdventure', 'ActionAndAdventure'), ('FantasyAndScienceFiction', 'FantasyAndScienceFiction'), ('RomanceAndPoetry', 'RomanceAndPoetry'), ('ScienceAndSpirituality', 'ScienceAndSpirituality'), ('MysteryAndThriller', 'MysteryAndThriller'), ('ComicsAndManga', 'ComicsAndManga')]),
        ),
    ]
