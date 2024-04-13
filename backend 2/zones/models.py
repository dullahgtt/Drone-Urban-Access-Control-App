from django.contrib.gis.db import models

class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField()

class Property(models.Model):
    # If owner is NULL, this represents a public facility.
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=300)
    location = models.PointField()
    property_type = models.CharField(max_length=50, choices=[('private', 'Private'), ('public', 'Public')])

class Zone(models.Model):
    # If property is NULL, this is a general no-fly zone not associated with a specific property.
    property = models.ForeignKey(Property, on_delete=models.CASCADE, null=True, blank=True)
    zone_type = models.CharField(max_length=50)
    boundary = models.PolygonField()
