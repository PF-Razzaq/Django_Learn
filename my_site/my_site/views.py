from django.http import HttpResponse  # Fix import
from django.shortcuts import render

def home_page(request):
    return HttpResponse('This is the home page')  # Fix return statement


def my_custom_page_not_found_view(request,exception):
    return render(request,'404.html',status=404)