from django.urls import path
from . import views

urlpatterns = [
    path('',views.get_weather,name='get_weather'),

    path('weather/',views.get_weather,name='get_weather')
]
