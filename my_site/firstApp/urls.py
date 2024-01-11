from django.urls import path
from . import views

app_name = 'firstApp'
urlpatterns = [
    path('index/', views.index, name='index'),
    path('example/', views.example, name='example'),
]
