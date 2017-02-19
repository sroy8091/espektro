# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import stdimage.models


class Migration(migrations.Migration):

    dependencies = [
        ('changedp', '0002_auto_20170218_1411'),
    ]

    operations = [
        migrations.CreateModel(
            name='UploadedImage',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('Name', models.CharField(max_length=255, blank=True)),
                ('UploadedAt', models.DateTimeField(auto_now_add=True)),
                ('Image', stdimage.models.StdImageField(upload_to='dpchange/')),
                ('Email', models.EmailField(max_length=254, blank=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Document',
        ),
    ]
