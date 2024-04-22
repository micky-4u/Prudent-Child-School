from django.contrib.auth.models import BaseUserManager, AbstractBaseUser,PermissionsMixin
from django.db import models
# Create your models here.


class CustomUserManager(BaseUserManager):
    "Creating user using email and password"
    def create_user(self, email, password = None):

        if not email:
            raise ValueError("Please provide an Email address")

        user = self.model(
            email = self.normalize_email(email)
        )
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email, password=None):
        user = self.create_user(email, password, )
        user.is_admin = True
        user.is_active = True
        user.save()
        return user


class CustomUser(AbstractBaseUser, PermissionsMixin):
    user_id = models.CharField(unique= True, max_length=15)
    email = models.EmailField(
        verbose_name="email address",
        max_length=255,
        unique=True,
    )
    f_name = models.CharField(max_length=255)
    l_name = models.CharField(max_length=255)
    o_name = models.CharField(max_length=255, default="")

    GENDER_CHOICES = {
        "male":"male",
        "female":"female"
    }
    gender = models.CharField(choices=GENDER_CHOICES, max_length= 10)
    nationality = models.CharField(max_length=255, default = "ghanaian")

    date_of_birth = models.DateField(auto_now=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    created_at =models.DateTimeField(auto_now_add = True)
    modified_at =models.DateTimeField(auto_now = True)

    

    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin




