from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Home Page")

def signup(request):
    # Handle signup logic
    return HttpResponse("Signup Page")

def login_view(request):
    # Handle login logic
    return HttpResponse("Login Page")

def property_info(request):
    # Handle property info logic
    return HttpResponse("Property Info Page")

def map_zones(request):
    # Handle map zones logic
    return HttpResponse("Map Zones Page")
