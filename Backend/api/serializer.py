from rest_framework import serializers
from .models import User, Posts

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ('__all__')