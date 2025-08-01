from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.utils.translation import gettext_lazy as _

class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)  # Storing password as plain text
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.TextField(blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    role = models.CharField(max_length=50)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='student_profile')
    course = models.CharField(max_length=100)
    reg_no = models.CharField(max_length=50, unique=True)
    year_of_study = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.user.username} - {self.reg_no}"

class Employee(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='employee_profile')
    emp_no = models.CharField(max_length=50, unique=True)
    department = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.user.username} - {self.emp_no}"

# Opportunity model linked to Employee
class Opportunity(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='opportunities')
    title = models.CharField(max_length=255)
    opp_type = models.CharField(max_length=100)
    organization = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    duration = models.CharField(max_length=100)
    deadline = models.DateTimeField()
    requirements = models.TextField()
    benefits = models.TextField(blank=True, null=True)
    contact_email = models.EmailField()
    app_url = models.URLField(blank=True, null=True)
    application_process = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} at {self.organization}"

# OpportunityApplication model linking User and Opportunity
class OpportunityApplication(models.Model):
    STATUS_CHOICES = [
        ('on_progress', 'On progress'),
        ('accepted', 'Accepted'),
        ('declined', 'Declined'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='opportunity_applications')
    opportunity = models.ForeignKey(Opportunity, on_delete=models.CASCADE, related_name='applications')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='on_progress')
    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.opportunity.title} ({self.status})"
