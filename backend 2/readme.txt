### Prerequisites
- Python 3
- Virtualenv


##SET UP

#MAC
1. Install PostgreSQL and PostGIS:
    brew install postgresql
    brew install postgis

2. Install GDAL and GEOS:
    brew install gdal
    brew install geos

3. Create and Activate a Virtual Environment:
    Navigate to your project directory and create a virtual environment:
        python3 -m venv myenv
        source myenv/bin/activate


#WINDOWS

1. Install OSGeo4W:
    Download and install from the OSGeo4W website.

2. Install PostgreSQL and PostGIS:
    Download and install from the PostgreSQL website.

3. Create and Activate a Virtual Environment:
    python -m venv myenv
    myenv\Scripts\activate


#NEXT STEPS FOR BOTH MAC & WINDOWS
4. Install Python Dependencies:
    pip install -r requirements.txt

5. Configure Django settings.py:
    Add paths for GDAL and GEOS libraries in settings.py.

6. Run Migrations:
    python manage.py makemigrations
    python manage.py migrate

7. Create a superuser account to log in
    python manage.py createsuperuser

8. Access the Django admin site by running server
    python manage.py runserver

    navigate to http://localhost:8000/admin in your browser. 