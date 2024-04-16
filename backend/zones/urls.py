from django.urls import path
from django.contrib import admin
from . import views  # Assuming your views are in the same directory

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),  # Add a home view if you have one
    path('signup/', views.signup, name='signup'),
    path('login/', views.login_view, name='login'),  # Renamed to avoid clashing with `login` from `django.contrib.auth`
    path('property_info/', views.property_info, name='property_info'),
    path('map_zones/', views.map_zones, name='map_zones'),
]
