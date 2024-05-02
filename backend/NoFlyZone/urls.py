# NoFlyZone/urls.py (this is the project's main urls.py file)

from django.contrib import admin
from django.urls import path, include  # make sure to import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('zones/', include('zones.urls')),  # Adjust the path as needed
    # If you want 'zones/' to be a prefix for all URLs in the zones app, use 'zones/'. 
    # Otherwise, use '' to include them directly under the base URL.
]
