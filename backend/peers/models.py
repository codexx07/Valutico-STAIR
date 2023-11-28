from django.db import models
class PublicCompany(models.Model):
    # fields
    company_name = models.CharField(max_length=100)
    industry = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    ev_sales = models.JSONField()
    ev_ebit = models.JSONField()
    ev_ebitda = models.JSONField()
    p_e = models.JSONField()
    financial_structure = models.JSONField()
    beta  =  models.JSONField()

    def __str__(self) -> str:
        return self.company_name