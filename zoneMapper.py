from flask import Flask, render_template, request, redirect
from flask_login import LoginManager, UserMixin, login_user, current_user, login_required, logout_user
import folium
from shapely.geometry import Polygon
import matplotlib.pyplot as plt
from folium.plugins import Draw

app = Flask(__name__)
app.secret_key = 'your_secret_key'
login_manager = LoginManager()
login_manager.init_app(app)

# User class for Flask-Login
class User(UserMixin):
    def __init__(self, username, password):
        self.id = username
        self.password = password

# REPLACE WITH ACTUAL DATABASE
users = {'admin': User('admin', 'admin')}

@login_manager.user_loader
def load_user(user_id):
    return users.get(user_id)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        # Placeholder for user creation (you can save to database here)
        users[username] = User(username, password)

        return redirect('/login')  # Redirect to login page after signup

    return render_template('signup.html')  # Render signup page

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        user = users.get(username)
        if user and user.password == password:
            login_user(user)
            return redirect('/property_info')  # Redirect to property info page after login
        else:
            # Handle invalid login (placeholder message)
            return render_template('login.html', error_message='Invalid credentials')

    return render_template('login.html')  # Render login page

@app.route('/property_info', methods=['GET', 'POST'])
@login_required
def property_info():
    if request.method == 'POST':
        address = request.form['address']
        location = request.form['location']
        property_type = request.form['property_type']

        # Placeholder for property creation
        property_obj = {'address': address, 'location': location, 'property_type': property_type}
        
        return redirect('/map_zones')  # Redirect to map zones page

    return render_template('property_info.html')  # Render property info form

@app.route('/map_zones', methods=['GET', 'POST'])
@login_required
def map_zones():
    if request.method == 'POST':
        boundary = request.form['boundary']

        # Placeholder for zone creation
        zone_obj = {'boundary': boundary}
        
        return redirect('/map_zones')  # Redirect to map zones page

    map_center = [40.7128, -74.0060]  # Default map center (NYC)
    mymap = folium.Map(location=map_center, zoom_start=13)
    draw = Draw()

    # Example zone data (placeholder)
    zones_data = [{'boundary': [(-74.008, 40.706), (-74.003, 40.706), (-74.003, 40.712), (-74.008, 40.712), (-74.008, 40.706)]}]

    for zone_data in zones_data:
        boundary = Polygon(zone_data['boundary'])
        draw_zone(mymap, boundary)

    draw.add_to(mymap)
    
    # Save the map to an HTML file
    map_path = 'templates/map_zones_map.html'
    mymap.save(map_path)

    return render_template('map_zones.html', map_path=map_path)

def draw_zone(mymap, boundary):
    x, y = boundary.exterior.coords.xy
    folium.Polygon(zip(y, x), color='red', fill=True, fill_color='red', fill_opacity=0.5).add_to(mymap)

if __name__ == '__main__':
    app.run(debug=True)
