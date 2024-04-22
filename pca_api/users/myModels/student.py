from django.db import models
from users.models import CustomUser
from django.core.validators import MinValueValidator


class Sponsor(models.Model):
    f_name = models.CharField(max_length= 255)
    l_name = models.CharField(max_length= 255)
    o_name = models.CharField(max_length= 255)
    contact = models.CharField(max_length= 10)
    email = models.EmailField(unique=True)


class Student(models.Model):
    student_id = models.AutoField(primary_key=True, unique=True , validators=[MinValueValidator(10000000)])
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    grade = models.CharField(max_lenght = 5)
    section = models.CharField(max_length=10)
    sponsor = models.ForeignKey(Sponsor, on_delete=models.CASCADE)
    relationship = models.CharField(max_length=255)
    
    
    
    
    

