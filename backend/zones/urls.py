from django.urls import path
from django.contrib import admin
from . import views  
from .views import SignUpView
from django.contrib.auth.views import LoginView, LogoutView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
     path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('property_info/', views.property_info, name='property_info'),
    path('map_zones/', views.map_zones, name='map_zones'),
]
