import React from "react"


const AddProduct = () => {

    return (
        <section className="category-area">
            <h1 className="container font-extrabold text-3xl py-8">
                Add new Product
            </h1>
            <div className="container grid grid-cols-6 gap-6">
                <form className="bg-slate-300">
                    <label htmlFor="name">Product Name:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" name="description" />

                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" />

                    <button className="bg-blue-500" type="submit">Submit</button>
                </form>

            </div>
        </section>
    )
}

export default AddProduct