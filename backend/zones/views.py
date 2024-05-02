from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .forms import CustomUserCreationForm
from .models import Property, Zone
from django.contrib.gis.geos import Point, Polygon

# If you want to use Django's CreateView for an API response
class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('login')  # Redirect to login page after successful registration
    template_name = 'signup.html'  # Specify your template name if you're rendering a form

    def form_valid(self, form):
        # This method is called when valid form data has been POSTed.
        # It should return an HTTP response.
        user = form.save()  # Save the new user
        # If you are using Django's authentication system, you might need to log the user in:
        # login(self.request, user)
        # Instead of rendering a template, return a JsonResponse
        return JsonResponse({'message': 'User created successfully.'}, status=status.HTTP_201_CREATED)

    def form_invalid(self, form):
        # Instead of rendering a template, return a JsonResponse with the errors
        return JsonResponse(form.errors, status=status.HTTP_400_BAD_REQUEST)

# Simple Home Page View
@api_view(['GET'])
def home(request):
    return JsonResponse({"message": "Welcome to the Home Page"})

# Property Info API View
@api_view(['GET', 'POST'])
def property_info(request):
    if request.method == 'POST':
        # Create a new property
        owner = request.user if request.user.is_authenticated else None
        address = request.data.get('address', '')
        location = Point(request.data.get('longitude', 0), request.data.get('latitude', 0))
        property_type = request.data.get('property_type', 'private')
        property = Property.objects.create(owner=owner, address=address, location=location, property_type=property_type)
        return Response({"message": "Property created successfully", "property_id": property.id}, status=status.HTTP_201_CREATED)
    elif request.method == 'GET':
        # List all properties
        properties = Property.objects.all()
        return JsonResponse({"properties": list(properties.values())})

# Zone Info API View
@api_view(['GET', 'POST'])
def map_zones(request):
    if request.method == 'POST':
        # Create a new zone
        property_id = request.data.get('property_id', None)
        property = Property.objects.get(id=property_id) if property_id else None
        zone_type = request.data.get('zone_type', 'no-fly')
        boundary = Polygon(request.data.get('boundary_points', []))  # Example: [[(0,0), (1,1), (1,0), (0,0)]]
        zone = Zone.objects.create(property=property, zone_type=zone_type, boundary=boundary)
        return Response({"message": "Zone created successfully", "zone_id": zone.id}, status=status.HTTP_201_CREATED)
    elif request.method == 'GET':
        # List all zones
        zones = Zone.objects.all()
        return JsonResponse({"zones": list(zones.values())})

# Configure URL patterns in urls.py as per these view functions
