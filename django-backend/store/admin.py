from django.contrib import admin

from store.models import Product, Category, ProductCategory


# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    list_display = ("title", "price")


admin.site.register(Product, ProductAdmin)
admin.site.register(Category)
admin.site.register(ProductCategory)
