from django.shortcuts import render

# Create your views here.
def index(request):
    my_profile = {
        'list': [1, 2, 3, 4, 5],
        'capital': {
            'pakistan': 'Islamabad',
            'Afghanistan': 'Kabul',
            'UAE': 'Dubai'
        },
        'first_name': 'Abdul',
        'last_name': 'Razzaq',
        'qualification': 'Master',  # Corrected typo here
        'skill': 'Web Developer',
    }
    return render(request, 'myApp/index.html', context=my_profile)

def example(request):
    return render(request, 'myApp/demo.html')
