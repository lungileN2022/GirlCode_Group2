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
                        <img src="../src/assets/nikeSneaker.png" alt="Product Image" />
                    </div>
                    <div class="product-details">
                        <h2 class="product-title">Nike Air Max 97 SE</h2>
                        <p class="product-description">Women's Shoes</p>
                        <span class="product-price">R2 599,97</span>
                        <div class="product-rating">
                            <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                            <span class="reviews">(100 reviews)</span>
                        </div>
                        <span class="favorite">&#9825;</span>
                    </div>
                </div>

                <div class="product-item">
                    <div class="product-image">
                        <img src="../src/assets/suitcaseCover.png" alt="Product Image" />
                    </div>
                    <div class="product-details">
                        <h2 class="product-title">Luggage Cover M</h2>
                        <p class="product-description">Spinner 69cm Lycra</p>
                        <span class="product-price">R599,99</span>
                        <div class="product-rating">
                            <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                            <span class="reviews">(12 reviews)</span>
                        </div>
                        <span class="favorite">&#9825;</span>
                    </div>
                </div>

                <div class="product-item">
                    <div class="product-image">
                        <img src="../src/assets/instax.png" alt="Product Image" />
                    </div>
                    <div class="product-details">
                        <h2 class="product-title">Fujifilm Instax Mini 12 Instant Film Camera</h2>
                        <p class="product-description">3 colours available </p>
                        <span class="product-price">R1 799,99</span>
                        <div class="product-rating">
                            <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                            <span class="reviews">(5 reviews)</span>
                        </div>
                        <span class="favorite">&#9825;</span>
                    </div>
                </div>
                
            </div>

            <hr></hr>

            <h1 className="container font-extrabold text-3xl py-8">
                Mostly browsed products
            </h1>
            

            {
                <div className='product-categories'>

                    {/* --- */}

                    <div className="product-item">
                        <div className="product-image">
                            <img src="../src/assets/macbook.png" alt="Product Image" />
                        </div>

                        <div className="product-details">
                            <h2 className="product-title"> MacBook Pro M1 16"</h2>
                            <p className="product-description"> 256 GB, 8 core GPU, 8 GB</p>
                            <span className="product-price"> R 42 000.00</span>
                            <div className="product-rating">
                                <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                <span className="reviews">(5 reviews)</span>
                            </div>
                            <span className="favorite">&#9825;</span>
                        </div>

                    </div>


                    <div className="product-item">
                    <div className="product-image">
                        <img src="../src/assets/homepod.png" alt="Product Image" />
                    </div>
                    <div className="product-details">
                        <h2 className="product-title"> Homepod </h2>
                        <p className="product-description"> 5 colors available </p>
                        <span className="product-price"> R 2 000.00 </span>
                        <div className="product-rating">
                            <span className="stars">&#9733;&#9733;&#9733;&#9733;</span>&#9734;
                            <span className="reviews">(25 reviews)</span>
                        </div>
                        <span className="favorite">&#9825;</span>
                    </div>
                </div>


                <div className="product-item">
                    <div className="product-image">
                        <img src="../src/assets/laptopSleeve.png" alt="Product Image" />
                    </div>
                    <div className="product-details">
                        <h2 className="product-title"> Laptop sleeve  </h2>
                        <p className="product-description"> Organic cotton, fairtrade certified </p>
                        <span className="product-price"> R 650.00 </span>
                        <div className="product-rating">
                            <span className="stars">&#9733;&#9733;&#9733;</span>&#9734;&#9734;
                            <span className="reviews">(1 review)</span>
                        </div>
                        <span className="favorite">&#9825;</span>
                    </div>
                </div>


                <div className="product-item">
                    <div className="product-image">
                        <img src="../src/assets/airpod-max-min.png" alt="Product Image" />
                    </div>
                    <div className="product-details">
                        <h2 className="product-title"> AirPods Max  </h2>
                        <p className="product-description"> A perfect balance of high-fidelity audio </p>
                        <span className="product-price"> R 6 050.00 </span>
                        <div className="product-rating">
                            <span className="stars">&#9733;&#9733;&#9733;&#9733;</span>&#9734;
                            <span className="reviews">(6 reviews)</span>
                        </div>
                        <span className="favorite">&#9825;</span>
                    </div>
                </div>

               



                    {/* ---- */}

                </div>
            }

            

        </section>

        

    )
}

export default Products