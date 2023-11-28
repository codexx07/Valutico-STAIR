# Generated by Django 4.2.7 on 2023-11-16 18:27

import django.contrib.postgres.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('createcomp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='FinancialProjectionsModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sales', django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), size=8)),
                ('growth_percentage', django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), size=8)),
                ('ebita', django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), size=8)),
                ('depreciation', django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), size=8)),
                ('ebit', django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), size=8)),
                ('net_income', django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), size=8)),
                ('capex', django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), size=8)),
                ('account_receivable', django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), size=8)),
                ('inventories', django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), size=8)),
                ('account_payable', django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), size=8)),
                ('cash_n_investments', django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), size=8)),
                ('debt', django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), size=8)),
                ('book_equity', django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), size=8)),
                ('fixed_assets', django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), size=8)),
                ('comapny_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='createcomp.company')),
            ],
        ),
    ]
