import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Products = () => {
    const [prodList, setProdList] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/products")
            .then(resp => resp.json())
            .then(resp => {
                setProdList(resp.prodlist)
            }
            ).catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <section className="category-area">
            <h1 className="container font-extrabold text-3xl py-8">
                Todays Best Deals for you
            </h1>
            <div className="container grid grid-cols-3 gap-6">
                {/*
                    prodList.map(prod => (
                        <Link to={`/product/${prod.pk}`} key={prod.pk} className="card rounded-xl h-52 w-48 items-center justify-center pt-5 relative">

                            <h1 className="w-full text-2xl font-bold absolute top-0 left-0 right-auto bottom-auto text-center">{prod.fields.title}</h1>
                            <h1 className="w-full text-2xl font-bold right-auto bottom-auto text-center">{prod.fields.price}</h1>
                        </Link>

                    ))*/
                }

                <div class="product-item">
                    <div class="product-image">
                        <img src="../src/assets/Furniture-min.png" alt="Product Image" />
                    </div>
                    <div class="product-details">
                        <h2 class="product-title">Product Title</h2>
                        <p class="product-description">Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <span class="product-price">$19.99</span>
                        <div class="product-rating">
                            <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                            <span class="reviews">(5 reviews)</span>
                        </div>
                        <span class="favorite">&#9825;</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products