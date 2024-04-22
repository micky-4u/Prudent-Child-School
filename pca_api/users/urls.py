from django.urls import path
from .views import CreateUserAPIView

urlpatterns =[
    path('user/add/', CreateUserAPIView.as_view(), name ='create_user')
]