# Generated by Django 5.0.3 on 2024-04-15 21:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='o_name',
            field=models.CharField(default='', max_length=255),
        ),
    ]
