from django.urls import path
from . import views

urlpatterns = [
    path('first',views.sample_temp),
    path('',views.firstApp),
    path('<topic>',views.news_views),
    path('<int:num1>/<int:num2>',views.add_numbers)
]
