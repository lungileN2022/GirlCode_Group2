import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const Product = () => {
    const { prodId } = useParams()
    const [prodInfo, setProdInfo] = useState({})

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/product/${prodId}`)
            .then(resp => resp.json())
            .then(resp => {
                setProdInfo(resp)

            }
            ).catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <section className="py-6">
            <div className="container mx-auto">
                <h1>Product Page </h1>

                <p>{prodInfo?.fields?.title}</p>
                <p>{prodInfo?.fields?.description}</p>

            </div>
        </section>

    )
}

export default Product