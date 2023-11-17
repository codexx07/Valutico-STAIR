from django.db import models
from django.contrib.postgres.fields import ArrayField
from createcomp.models import Company
from peers.models import PublicCompany

class FinancialProjectionsModel(models.Model):
    comapny_id = models.ForeignKey(Company, on_delete=models.CASCADE)
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

class FinancialProjectionsPublicModel(models.Model):
    company_id = models.ForeignKey(PublicCompany, on_delete=models.CASCADE)
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