from django.urls import path
from . import views

urlpatterns = [
    path('', views.getData),
    path('users/', views.getUsers),
    path('posts/', views.getPosts),
    path('login/', views.login)
]