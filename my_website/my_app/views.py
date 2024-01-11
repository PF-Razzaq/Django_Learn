from django.shortcuts import render
from . import models

def list_offices(request):
     all_offices = models.Office.objects.all()
     context = {
          'offices':all_offices,
     }
     return render(request,'office/index.html',context=context)

# Create your views here.
