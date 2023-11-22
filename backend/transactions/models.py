from django.db import models

# Create your models here.
class Transaction(models.Models):
    date = models.DateField()
    budder = models.CharField()
    target = models.CharField()
    country = models.CharField()
    industry = models.CharField()
    stake_acquired = models.CharField()

    def __str__(self) -> str:
        return self.bidder