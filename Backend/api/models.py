from django.db import models

class User(models.Model):
    name = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)

class Posts(models.Model):
    title = models.CharField(max_length=200)
    desc = models.CharField(max_length=1000)
    createdAt = models.DateTimeField(auto_now_add=True)
