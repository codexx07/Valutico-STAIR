from django.db import models
class Company(models.Model):
    name = models.CharField(max_length=200)
    addr = models.TextField()
    industry = models.CharField(max_length=100)
    last_revenue = models.BigIntegerField(default=0)

    def __str__(self) -> str:
        return self.name