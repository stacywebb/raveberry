# Generated by Django 2.2.3 on 2019-09-13 11:23

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0003_auto_20190912_2219"),
    ]

    operations = [
        migrations.AddField(
            model_name="archivedplaylist",
            name="created",
            field=models.DateTimeField(
                auto_now_add=True, default=django.utils.timezone.now
            ),
            preserve_default=False,
        ),
    ]
