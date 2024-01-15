from django.shortcuts import render


# Create your views here.
def thank_you(request):
    return render(request,'car/thank_you.html')

def rental_review(request):
    return render(request,'car/rental_review.html')  