from django.contrib import admin
from .models import Car

class MyCar(admin.ModelAdmin):
    fieldsets = [
        ('Car Information', {'fields':['brand']}),
        ('Time Information', {'fields':['year']}),
        ('Amount Information', {'fields':['amount']}),
    ]

admin.site.register(Car,MyCar)

# Register your models here.
