from rest_framework import serializers
from .models import User, Student, Employee, Opportunity, OpportunityApplication

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            'id', 'username', 'email', 'first_name', 'last_name', 'address',
            'phone_number', 'role', 'password'
        ]
        read_only_fields = ['id']

    def validate_username(self, value):
        # Ensure username is unique (case-insensitive)
        if User.objects.filter(username__iexact=value).exclude(pk=self.instance.pk if self.instance else None).exists():
            raise serializers.ValidationError('A user with that username already exists.')
        return value

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class StudentSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Student
        fields = ['id', 'user', 'course', 'reg_no', 'year_of_study']
        read_only_fields = ['id']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        # Set role to 'student' by default
        user_data['role'] = 'student'
        user = User.objects.create(**user_data)
        student = Student.objects.create(user=user, **validated_data)
        return student

class EmployeeSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Employee
        fields = ['id', 'user', 'emp_no', 'department']
        read_only_fields = ['id']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        # Set role to 'employee' by default
        user_data['role'] = 'employee'
        user = User.objects.create(**user_data)
        employee = Employee.objects.create(user=user, **validated_data)
        return employee

class OpportunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Opportunity
        fields = [
            'id', 'employee', 'title', 'opp_type', 'organization', 'description', 'location',
            'duration', 'deadline', 'requirements', 'benefits', 'contact_email', 'app_url',
            'application_process', 'created_at'
        ]

class OpportunityApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = OpportunityApplication
        fields = ['id', 'user', 'opportunity', 'status', 'applied_at']

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
