import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Category = () => {
    const [catList, setCatList] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/")
            .then(resp => resp.json())
            .then(resp => {
                setCatList(resp.catlist)
            }
            ).catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <section className="category-area">
            <h1 className="container font-extrabold text-3xl py-8">
                Shop Our Top Categories
            </h1>
            <div className="container grid grid-cols-6 gap-6">

                {
                    catList.map(cat => (
                        <Link to={`/category/${cat.pk}`} key={cat.pk} className="card rounded-xl h-52 w-48 items-center justify-center pt-5 relative">
                            <img className="min-w-full min-h-full" src="../src/assets/Furniture-min.png" alt="furniture"></img>
                            <h1 className="w-full text-2xl font-bold absolute top-0 left-0 right-auto bottom-auto text-center">{cat.fields.title}</h1>
                        </Link>

                    ))
                }





            </div>
        </section>
    )
}

export default Category