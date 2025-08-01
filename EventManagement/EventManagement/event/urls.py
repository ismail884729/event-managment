from django.urls import path
from .views import (
    eventListCreateView,
    eventRetrieveUpdateDestroyView,
    eventApplicationListCreateView,
    eventApplicationRetrieveUpdateDestroyView,
)

urlpatterns = [
    path('events/', eventListCreateView, name='event-list-create'),
    path('events/<int:pk>/', eventRetrieveUpdateDestroyView, name='event-detail'),
    path('event-applications/', eventApplicationListCreateView, name='event-application-list-create'),
    path('event-applications/<int:pk>/', eventApplicationRetrieveUpdateDestroyView, name='event-application-detail'),
]