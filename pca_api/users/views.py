from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from .serializers import UserSerializer
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.contrib.auth import logout
# Create your views here.

# create user api
class CreateUserAPIView(APIView):
    
    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


class UserLoginInView(APIView):
    
    def post(self, request):
        req = {
            "email" :request.data.get('email'),
            "password" :request.data.get('password')
        }
        print(req)
        
        user = authenticate(email=req['email'], password=req["password"])
        
        if user:
            return Response({
                "message":"Login Successful"
            }, status = status.HTTP_200_OK)
            print("user login")
        else:
            return Response({
                "message": "Invalid Credentials"
            }, status =status.HTTP_400_BAD_REQUEST)
            print("error occured ")
            

class LogoutUser(APIView):
    def post(self, request):
        return Response({"message":"Logout Successful"}, status=status.HTTP_200_OK)