# views.py
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.gis.geos import Polygon
import folium
from .models import Zone  # Import your Zone model

def signup(request):
    if request.method == 'POST':
        # Handle signup form data and create new user
        return redirect('login')  # Redirect to login page
    return render(request, 'mapping.html')  # Render your large HTML file

def login(request):
    if request.method == 'POST':
        # Handle login form data and authenticate user
        return redirect('map_zones')  # Redirect to map zones page
    return render(request, 'mapping.html')  # Render your large HTML file

@login_required
def map_zones(request):
    user = request.user
    zones_data = Zone.objects.filter(property__owner=user).values_list('boundary', flat=True)

    map_center = [40.7128, -74.0060]  # Default map center
    mymap = folium.Map(location=map_center, zoom_start=13)

    for zone_data in zones_data:
        boundary = Polygon.from_bbox(zone_data)
        folium.GeoJson(boundary).add_to(mymap)

    mymap.save('simulation_map_with_zones.html')
    return render(request, 'mapping.html')  # Render your large HTML file
