from django.db import models
from createcomp.models import Company

# Create your models here.
class Qualitative_Analysis(models.Model):
    company_id = models.ForeignKey(Company, on_delete=models.CASCADE)
    
    #TODO add params

    def __str__(self) -> str:
        return self.company_id.name