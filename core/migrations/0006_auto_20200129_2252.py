# Generated by Django 2.2.9 on 2020-01-30 00:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("core", "0005_auto_20190913_1730")]

    operations = [
        migrations.RenameField(
            model_name="currentsong", old_name="url", new_name="internal_url"
        ),
        migrations.RenameField(
            model_name="queuedsong", old_name="url", new_name="internal_url"
        ),
        migrations.AddField(
            model_name="currentsong",
            name="external_url",
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AddField(
            model_name="queuedsong",
            name="external_url",
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.RemoveField(model_name="currentsong", name="location"),
        migrations.AlterField(
            model_name="currentsong", name="duration", field=models.IntegerField()
        ),
        migrations.AlterField(
            model_name="queuedsong", name="duration", field=models.IntegerField()
        ),
    ]
