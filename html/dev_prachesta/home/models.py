from django.db import models

# Create your models here.
class partner(models.Model):
    Name=models.CharField(max_length=40),
    Email=models.CharField(max_length=40),
    Address = models.CharField(max_length=50),
    Pincode = models.IntegerField,
    Contact = models.CharField(max_length=10),

