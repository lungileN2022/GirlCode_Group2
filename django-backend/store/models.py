from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=30)
    image = models.CharField(max_length=30)

    def __str__(self) -> str:
        return self.title


class Product(models.Model):
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=30)
    price = models.FloatField()
    image = models.CharField(max_length=30)

    def __str__(self):
        return self.title


class ProductCategory(
    models.Model
):  # handles a many to many relationship between categories and products
    prodId = models.ForeignKey(Product, on_delete=models.CASCADE)
    catId = models.ForeignKey(Category, on_delete=models.CASCADE)
