from django.shortcuts import render, redirect
from django.urls import reverse
from .forms import ReviewForm



# Create your views here.
def thank_you(request):
    return render(request,'car/thank_you.html')

def rental_review(request):
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            print(form.cleaned_data)
            return redirect(reverse('car:thank_you'))
    else:
        form = ReviewForm()
    return render(request,'car/rental_review.html',context={'form':form})  