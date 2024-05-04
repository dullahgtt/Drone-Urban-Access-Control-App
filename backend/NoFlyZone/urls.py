from django.urls import path, include
from django.views.generic.base import RedirectView
from django.contrib import admin

urlpatterns = [
    # Redirect the base URL to the admin interface
    path('', RedirectView.as_view(url='/admin/', permanent=True)),  # Note: Ensure the URL starts with a forward slash for an absolute path

    # Admin URL
    path('admin/', admin.site.urls),

    # Include your app's URLs under the 'zones/' prefix
    path('zones/', include('zones.urls')),
]