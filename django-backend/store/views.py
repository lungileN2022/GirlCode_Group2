from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core.serializers import serialize
import json
from .models import Category, Product
from .forms import ProductForm


# Create your views here.
def get_categories(request):
    cat_list = Category.objects.all()
    categories = json.loads(serialize("json", cat_list))

    return JsonResponse({"catlist": categories})


def get_category(request, id):
    cat_obj = Category.objects.all().filter(id=id)
    cat = json.loads(serialize("json", cat_obj))

    return JsonResponse(cat[0])


def get_products(request):
    prod_list = Product.objects.all()
    products = json.loads(serialize("json", prod_list))

    return JsonResponse({"prodlist": products})


def get_product(request, id):
    prod_obj = Product.objects.all().filter(id=id)
    prod = json.loads(serialize("json", prod_obj))

    return JsonResponse(prod[0])


def add_product(request):
    product = [Product()]
    product = json.loads(serialize("json", product))
    return JsonResponse({"product": product[0]})
