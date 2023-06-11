from django import forms
from .models import partner

class joinUsForm(forms.ModelForm):
    class Meta:
        model = partner
        fields = ["FirstName", "LastName", "EmailID", "Username", "PhoneNumber",]
        labels = {'FirstName': "First Name", "LastName": "Last Name", "EmailID": "Email ID","Username": "User Name","PhoneNumber": "Phone Number",}
        

            
