# Generated by Django 4.2.3 on 2024-02-23 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_posts'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='password',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
    ]
