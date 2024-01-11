from django.db import models
from django.core.validators import MinValueValidator,MaxValueValidator

# Create your models here.
class Office(models.Model):
    first_name = models.CharField(max_length = 30)
    last_name = models.CharField(max_length = 30)
    open = models.IntegerField(validators = [MinValueValidator(1998),MaxValueValidator(2022)])
    heartrate = models.IntegerField(default=60,validators = [MinValueValidator(20),MaxValueValidator(200)])

    def __str__(self):
        return f'{self.first_name} {self.last_name} is launched in {self.open}'
