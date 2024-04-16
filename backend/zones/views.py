from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .forms import CustomUserCreationForm 

def home(request):
    return HttpResponse("Welcome to the Home Page")

def signup(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            # Redirect to a new URL:
            return redirect('login')  # Adjust the redirect as necessary
    else:
        form = CustomUserCreationForm()
    return render(request, 'signup.html', {'form': form})

def login(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                # Redirect to a success page.
                return redirect('home')
            else:
                return HttpResponse("Login unsuccessful. Please try again.")
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})

def property_info(request):
    # Handle property info logic
    return HttpResponse("Property Info Page")

def map_zones(request):
    # Handle map zones logic
    return HttpResponse("Map Zones Page")
