import folium
from myapp.models import Zone
from django.contrib.gis.geos import Polygon

def generate_map_with_zones(user):
    zones_data = Zone.objects.filter(property__owner=user).values_list('boundary', flat=True)

    map_center = [40.7128, -74.0060]  # Default map center
    mymap = folium.Map(location=map_center, zoom_start=13)

    for zone_data in zones_data:
        boundary = Polygon.from_bbox(zone_data)
        folium.GeoJson(boundary).add_to(mymap)

    mymap.save('simulation_map_with_zones.html')