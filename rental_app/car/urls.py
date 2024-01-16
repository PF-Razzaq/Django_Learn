from django.urls import path
from . import views

app_name = 'car'

urlpatterns = [
    path('thank_you/',views.thank_you,name='thank_you'),
    path('',views.rental_review,name='rental_review')
]