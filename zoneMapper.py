import folium
import networkx as nx
from flask import Flask, request, render_template

app = Flask(__name__)

zones = []
paths = []

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        zone_coords = request.form.getlist('zone_coords')
        zone_color = request.form['zone_color']
        
        zones.append([list(map(float, coord.split(','))) for coord in zone_coords])

        generate_map(zones, zone_color)

    return render_template('mapping.html') 

## Add function to save zones to database

## Add function to read in zones from database prior to displaying for users

def calculate_center(zone):
    # Calculate the center of the zone
    center_lat = (zone[0][0] + zone[1][0]) / 2
    center_lon = (zone[0][1] + zone[1][1]) / 2
    return [center_lat, center_lon]

def generate_map(zone, zone_color):
    map_center = calculate_center(zone)    
    mymap = folium.Map(location=map_center, zoom_start=13)

    folium.Rectangle(bounds=zone, color=zone_color, fill_opacity=0.3).add_to(mymap)
    
    mymap.save('simulation_map_with_zones1.html')
    
if __name__ == "__main__":
    app.run(debug=True)
