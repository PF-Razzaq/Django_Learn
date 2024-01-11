from django.shortcuts import render
from django.http import HttpResponse

article = {
    'sports':'Cricket',
    'finance':'Banking',
    'politics':'PTI'
}

def news_views(request,topic):
    return HttpResponse(article[topic])
def firstApp(request):
    return HttpResponse('This is the First Page')
# Create your views here.

def add_numbers(request,num1,num2):
    result = num1 + num2
    return HttpResponse(result)

def sample_temp(request):
    return render(request,'my_site/first.html')