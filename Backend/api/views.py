from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from api.serializer import UserSerializer, PostsSerializer
from .models import User, Posts



# For Testing

@api_view(["GET"])
def getData(request):
    hello = {"hello" : "Charan"}
    return Response(hello)

# For retrieving and updating Users

@api_view(['GET', 'POST'])
def getUsers(request):
    if(request.method == 'GET'):
        Users = User.objects.all()
        serializer = UserSerializer(Users, many=True)
        return Response(serializer.data)
    if(request.method == 'POST'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)


# For retrieving and updating Posts
        
@api_view(['GET', 'POST'])
def getPosts(request):
    if(request.method == 'GET'):
        Post = Posts.objects.all()
        serializer = PostsSerializer(Post,many=True)
        return Response(serializer.data)
    if(request.method == 'POST'):
        recieved_data = request.data
        serializer = PostsSerializer(data=recieved_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response("error")
    

# Checks if the user is present in the Users else returns false
        
@api_view(['POST'])
def login(request):
    if request.method == "POST":
        Users = User.objects.all()
        Check = Users.filter(name = request.data["name"], password = request.data["password"])
        if Check:
            return Response(True)
        return Response(False)