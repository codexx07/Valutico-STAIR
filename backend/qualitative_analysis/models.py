from django.db import models
from createcomp.models import Company
# from django.contrib.postgres.fields import ArrayField

# Create your models here.
class Qualitative_Analysis(models.Model):
    company_id = models.ForeignKey(Company, on_delete=models.CASCADE)
    
    risk_factor = models.FloatField(default=3)
    cost_of_equity = models.FloatField(default=0.5)
    discount_to_trading_mults = models.FloatField(default=0.5)
    

    def __str__(self) -> str:
        return self.company_id.name