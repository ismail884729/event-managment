from django.urls import path
from .views import (
    userListCreateView, userRetrieveUpdateDestroyView,
    studentListCreateView, studentRetrieveUpdateDestroyView,
    employeeListCreateView, employeeRetrieveUpdateDestroyView,
    loginAPIView,
    OpportunityListCreateView, OpportunityDetailView,
    OpportunityApplicationListCreateView, OpportunityApplicationDetailView
)

urlpatterns = [
    path('users/', userListCreateView, name='user-list-create'),
    path('users/<int:pk>/', userRetrieveUpdateDestroyView, name='user-detail'),
    path('students/', studentListCreateView, name='student-list-create'),
    path('students/<int:pk>/', studentRetrieveUpdateDestroyView, name='student-detail'),
    path('employees/', employeeListCreateView, name='employee-list-create'),
    path('employees/<int:pk>/', employeeRetrieveUpdateDestroyView, name='employee-detail'),
    path('login/', loginAPIView, name='login'),
    path('opportunities/', OpportunityListCreateView.as_view(), name='opportunity-list-create'),
    path('opportunities/<int:pk>/', OpportunityDetailView.as_view(), name='opportunity-detail'),
    path('applications/', OpportunityApplicationListCreateView.as_view(), name='application-list-create'),
    path('applications/<int:pk>/', OpportunityApplicationDetailView.as_view(), name='application-detail'),
]
