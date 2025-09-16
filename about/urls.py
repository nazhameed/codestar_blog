from django.urls import path
from .views import about_me

urlpatterns = [
    path('', about_me, name='about'),  # keeps the URL name 'about'
]