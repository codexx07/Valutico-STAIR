from django.db import models
from django.contrib.postgres.fields import ArrayField

class FinancialProjectionsModel(models.Model):
    sales = ArrayField(models.FloatField(), size=8)
    growth_percentage = ArrayField(models.FloatField(), size=8)
    ebita = ArrayField(models.FloatField(), size=8)
    depreciation = ArrayField(models.FloatField(), size=8)
    ebit = ArrayField(models.FloatField(), size=8)
    net_income = ArrayField(models.FloatField(), size=8)
    capex  = ArrayField(models.FloatField(), size=8)
    account_receivable = ArrayField(models.FloatField(), size=8)
    inventories = ArrayField(models.FloatField(), size=8)
    account_payable  = ArrayField(models.FloatField(), size=8)
    cash_n_investments  = ArrayField(models.FloatField(), size=8)
    debt  = ArrayField(models.FloatField(), size=8)
    book_equity  = ArrayField(models.FloatField(), size=8)
    fixed_assets   = ArrayField(models.FloatField(), size=8)
