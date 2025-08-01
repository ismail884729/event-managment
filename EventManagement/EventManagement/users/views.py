from django.shortcuts import render
from rest_framework import generics, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate, login
from drf_yasg.utils import swagger_auto_schema
from .models import User, Student, Employee, Opportunity, OpportunityApplication
from .serializers import UserSerializer, StudentSerializer, EmployeeSerializer, OpportunitySerializer, OpportunityApplicationSerializer, LoginSerializer

@swagger_auto_schema(
    request_body=UserSerializer,
    responses={201: UserSerializer()}
)
class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

userListCreateView = UserListCreateView.as_view()


@swagger_auto_schema(
    request_body=UserSerializer,
    responses={200: UserSerializer()}
)
class UserRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

userRetrieveUpdateDestroyView = UserRetrieveUpdateDestroyView.as_view()


@swagger_auto_schema(
    request_body=StudentSerializer,
    responses={201: StudentSerializer()}
)
class StudentListCreateView(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [permissions.AllowAny]

studentListCreateView = StudentListCreateView.as_view()


@swagger_auto_schema(
    request_body=StudentSerializer,
    responses={200: StudentSerializer()}
)
class StudentRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [permissions.AllowAny]

studentRetrieveUpdateDestroyView = StudentRetrieveUpdateDestroyView.as_view()


@swagger_auto_schema(
    request_body=EmployeeSerializer,
    responses={201: EmployeeSerializer()}
)
class EmployeeListCreateView(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [permissions.AllowAny]

employeeListCreateView = EmployeeListCreateView.as_view()


@swagger_auto_schema(
    request_body=EmployeeSerializer,
    responses={200: EmployeeSerializer()}
)
class EmployeeRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [permissions.AllowAny]

employeeRetrieveUpdateDestroyView = EmployeeRetrieveUpdateDestroyView.as_view()


class LoginAPIView(APIView):
    permission_classes = [permissions.AllowAny]

    @swagger_auto_schema(
        request_body=LoginSerializer,
        responses={200: UserSerializer(), 401: 'Invalid credentials'}
    )
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        try:
            user = User.objects.get(email=email)
            if user.password == password:
                serializer = UserSerializer(user)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        except User.DoesNotExist:
            return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

loginAPIView = LoginAPIView.as_view()


@swagger_auto_schema(
    request_body=OpportunitySerializer,
    responses={201: OpportunitySerializer()}
)
class OpportunityListCreateView(generics.ListCreateAPIView):
    queryset = Opportunity.objects.all()
    serializer_class = OpportunitySerializer
    permission_classes = [permissions.AllowAny]

opportunityListCreateView = OpportunityListCreateView.as_view()


@swagger_auto_schema(
    request_body=OpportunitySerializer,
    responses={200: OpportunitySerializer()}
)
class OpportunityDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Opportunity.objects.all()
    serializer_class = OpportunitySerializer
    permission_classes = [permissions.AllowAny]

opportunityDetailView = OpportunityDetailView.as_view()


@swagger_auto_schema(
    request_body=OpportunityApplicationSerializer,
    responses={201: OpportunityApplicationSerializer()}
)
class OpportunityApplicationListCreateView(generics.ListCreateAPIView):
    queryset = OpportunityApplication.objects.all()
    serializer_class = OpportunityApplicationSerializer
    permission_classes = [permissions.AllowAny]

opportunityApplicationListCreateView = OpportunityApplicationListCreateView.as_view()


@swagger_auto_schema(
    request_body=OpportunityApplicationSerializer,
    responses={200: OpportunityApplicationSerializer()}
)
class OpportunityApplicationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = OpportunityApplication.objects.all()
    serializer_class = OpportunityApplicationSerializer
    permission_classes = [permissions.AllowAny]

opportunityApplicationDetailView = OpportunityApplicationDetailView.as_view()
