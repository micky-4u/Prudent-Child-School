from django.urls import path
from .views import CreateUserAPIView, UserLoginInView, LogoutUser

urlpatterns =[
    path('user/add/', CreateUserAPIView.as_view(), name ='create_user'),
    path('user/login/', UserLoginInView.as_view(), name ='login_user'),
    path('user/logout/', LogoutUser.as_view(), name ='logout_user')
]