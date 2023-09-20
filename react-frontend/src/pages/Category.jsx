import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const Category = () => {
    const { catId } = useParams()
    const [catInfo, setCatInfo] = useState({})

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/categories/${catId}`)
            .then(resp => resp.json())
            .then(resp => {
                setCatInfo(resp)

            }
            ).catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <section className="py-6">
            <div className="container mx-auto">
                <h1>Category Page </h1>

                <p>{catInfo?.fields?.title}</p>
                <p>{catInfo?.fields?.description}</p>

            </div>
        </section>

    )
}

export default Category