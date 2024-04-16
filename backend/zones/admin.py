from django.contrib import admin
from .models import User, Property, Zone

admin.site.register(User)
admin.site.register(Property)
admin.site.register(Zone)