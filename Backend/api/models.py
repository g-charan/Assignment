from django.db import models

# Creating User Model
class User(models.Model):
    name = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)


# Creating Posts Model
class Posts(models.Model):
    title = models.CharField(max_length=200)
    desc = models.CharField(max_length=1000)
    createdAt = models.DateTimeField(auto_now_add=True)
