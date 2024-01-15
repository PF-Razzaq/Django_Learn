from django.db import models

# Create your models here.
class Car(models.Model):
    brand = models.CharField(max_length = 30)
    year = models.IntegerField()
    amount = models.IntegerField()

    def __str__(self):
        return f'Brand of Car: {self.brand} Developed in: {self.year}, Price of Car is: {self.amount}'
