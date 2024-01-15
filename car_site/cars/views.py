from django.shortcuts import render,redirect
from django.urls import reverse
from . import models

# Create your views here.
def car_list(request):
        all_cars = models.Car.objects.all()
        context = {'all_cars': all_cars}
        return render(request,'cars/list.html',context=context)

def add(request):
    if request.POST:
        brand = request.POST['brand']
        year = request.POST['year']
        amount = request.POST['amount']
        models.Car.objects.create(brand=brand,year=year,amount=amount)
        return redirect(reverse('cars:list'))
    
    else:
        return render(request,'cars/add.html')

def delete(request):
    if request.POST:
        pk = request.POST['pk']
        try:
             models.Car.objects.get(pk=pk).delete()
             return redirect(reverse('cars:list'))
        except Exception.ValueError as e:
            print(f'Car Does Not Exist: {e}')
    else:
        return render(request,'cars/delete.html')
