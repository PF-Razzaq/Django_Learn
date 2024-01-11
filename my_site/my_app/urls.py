from django.urls import path
from . import views

urlpatterns = [
    path('<int:num_page>',views.num_page_view),
    path('<str:topic>',views.article_view , name='num_page'),
    path('',views.index, name='index'),
    path('<int:a>/<int:b>/<int:c>',views.multiply_numbers)
]
