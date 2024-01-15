import requests
from django.shortcuts import render
import requests
import json

def get_weather(request):
    api_key = '1aac6ccf2f4e8c982ffe8fc093d3c64a'

    if request.method == 'POST':
        city = request.POST.get('city', '')
        country = request.POST.get('country', '')
        url = f'http://api.openweathermap.org/data/2.5/weather?q={city},{country}&appid={api_key}'

        response = requests.get(url)
        data = response.json()

        # Check if temperature information is available in the response
        if 'main' in data and 'temp' in data['main']:
            # Convert temperature from Kelvin to Celsius
            data['main']['temp'] -= 273.15

        context = {'weather_data': data}
        return render(request, 'weather/weather.html', context)

    return render(request, 'weather/index.html')

# Country Json File read
# def country_view(request):
#     json_file = 'weather/static/data/country.json'
#     with open(json_file,'r') as show_json:
#         countries =json.load(show_json)

#     return render(request, 'weather/index.html', {'countries': countries})

# # City json File Read

# def city_view(request):
#     cities_file = 'weather/static/data/cities.json'
#     with open(cities_file, 'r') as show_cities:
#         cities = json.load(show_cities)

#     return render(request, 'weather/index.html', {'cities': cities})


def country_view(request):
    # Load countries data
    countries_file = 'weather/static/data/country.json'
    with open(countries_file, 'r') as show_json:
        countries = json.load(show_json)

    # Load cities data
    cities_file = 'weather/static/data/cities.json'
    with open(cities_file, 'r') as show_cities:
        cities = json.load(show_cities)

    # Pass both countries and cities data to the template
    return render(request, 'weather/index.html', {'countries': countries, 'cities': cities})