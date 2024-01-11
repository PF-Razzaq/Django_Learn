from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from django.urls import reverse


def index(request):
    return HttpResponse("This is my first app in My_Site")

article = {
    'sports':'Cricket',
    'finance':'Banking',
    'politics':'PTI'
}
def article_view(request,topic):
    return HttpResponse(article[topic])

def num_page_view(request,num_page):
    article_list = list(article.keys())
    single_article = article_list[num_page]
    newpage = reverse('num_page', args=[single_article])
    return HttpResponseRedirect(newpage)


def multiply_numbers(request,a,b,c):
    result = a*b*c
    return HttpResponse(f'Multiply the numbers of {a}*{b}*{c} and result is: {result}')
# Create your views here.
