from django.urls import path
from . import views

urlpatterns = [
    # path('',views.get_weather,name='get_weather'),
    path('',views.country_view,name='country'),
    # path('weather/',views.city_view,name='city'),
    path('weather/',views.get_weather,name='get_weather'),
    # path('weather/',views.get_cities,name='get_cities')
]
