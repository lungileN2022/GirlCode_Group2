import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const Product = () => {
   /* const { prodId } = useParams()
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
    }, [])*/

    const [images, setImages] = useState({
        img1 : "react-frontend/src/assets/macbook.png",
        img2 : "react-frontend/src/assets/macbook2.png",
        img3 : "react-frontend/src/assets/macbook3.png",
        img4 : "react-frontend/src/assets/macbook4.png",
        
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1);

    return (
       
       
        <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
                <div className='flex flex-row justify-between h-24'>
                    <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                    <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                    <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
                </div>
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-violet-600 font-semibold'>MacBook Pro M1 16"</span>
                    <h1 className='text-3xl font-bold'>256 GB, 8 core GPU, 8 GB</h1>
                </div>
                <p className='text-gray-700'>
                The new M1 chip makes the 13‑inch MacBook Pro more capable than ever. The same compact design supports up to 20 hours of battery life1 and an active cooling system to sustain enhanced performance. Featuring a brilliant Retina display, a FaceTime HD camera and studio‑quality mics, it’s our most portable pro laptop.
                </p>
                <h6 className='text-2xl font-semibold'>R42 000</h6>
                <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                    <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
                </div>
            </div>
        </div>

    )
}

export default Product