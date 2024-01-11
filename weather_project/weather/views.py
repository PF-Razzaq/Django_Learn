import requests
from django.shortcuts import render
import requests

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

