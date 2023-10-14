from django.apps import AppConfig


class StoreConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'store'

    def ready(self) -> None:
        from store.models import Product

        product = Product()
        product.description = "Lorem ipsum ..."
        product.image = "../src/assets/airpod-max-min.png"
        product.price = 6500
        product.title = "Airpod max"

        product.save()
        product2 = Product()
        product2.description = "Lorem ipsum"
        product2.image = "../src/assets/Handbag.png"
        product2.price = 4390
        product2.title = "Fancy handbag"
        product2.save()


        product.save()
        product3 = Product()
        product3.description = "Lorem ipsum"
        product3.image = "../src/assets/macbook.png"
        product3.price = 42000
        product3.title = "M1 Macbook"
        product3.save()
        return super().ready()