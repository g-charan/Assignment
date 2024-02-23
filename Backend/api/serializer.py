from rest_framework import serializers
from .models import User, Posts

# Creating a Serializer for both the models(Can change the fields in the future to be more specific)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ('__all__')