from django.shortcuts import render
from rest_framework import generics, permissions
from drf_yasg.utils import swagger_auto_schema
from .models import Event, EventApplication
from .serializers import EventSerializer, EventApplicationSerializer

@swagger_auto_schema(
    request_body=EventSerializer,
    responses={201: EventSerializer()}
)
class EventListCreateView(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.AllowAny]

@swagger_auto_schema(
    request_body=EventSerializer,
    responses={200: EventSerializer()}
)
class EventRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.AllowAny]

@swagger_auto_schema(
    request_body=EventApplicationSerializer,
    responses={201: EventApplicationSerializer()}
)
class EventApplicationListCreateView(generics.ListCreateAPIView):
    queryset = EventApplication.objects.all()
    serializer_class = EventApplicationSerializer
    permission_classes = [permissions.AllowAny]

@swagger_auto_schema(
    request_body=EventApplicationSerializer,
    responses={200: EventApplicationSerializer()}
)
class EventApplicationRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = EventApplication.objects.all()
    serializer_class = EventApplicationSerializer
    permission_classes = [permissions.AllowAny]

eventListCreateView = EventListCreateView.as_view()
eventRetrieveUpdateDestroyView = EventRetrieveUpdateDestroyView.as_view()
eventApplicationListCreateView = EventApplicationListCreateView.as_view()
eventApplicationRetrieveUpdateDestroyView = EventApplicationRetrieveUpdateDestroyView.as_view()
