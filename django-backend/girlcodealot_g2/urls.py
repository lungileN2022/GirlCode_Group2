"""
URL configuration for girlcodealot_g2 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from store import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", views.get_categories, name=""),
    path("categories/<int:id>", views.get_category, name="get category"),
    path("products/", views.get_products, name="get products"),
    path("product/<int:id>", views.get_product, name="get product"),
    path("product/add", views.add_product, name="add product"),
]
