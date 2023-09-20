import '../App.css'
import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="nav-bar">
            <div id="logo">
                <Link to="/"><img src="../public/logo_large.jpeg"></img></Link>
            </div>

            <div className='left-nav-bar'>
                <ul>
                    <li>
                        <a href='#'>Category</a>
                    </li>
                    <li>
                        <a href='#'>Deals</a>
                    </li>
                    <li>
                        <a href='#'>What's new</a>
                    </li>
                    <li>
                        <a href='#'> Delivery</a>
                    </li>
                </ul>

                <div className='search'>
                    <form>
                        <input type="text" placeholder='search'>

                        </input>
                        <button type='submit'><span className="material-symbols-outlined">search</span></button>

                    </form>


                </div>
                <div className='right-nav-bar'>
                    <ul>
                        <li className='flex items-center'>
                            <p className="material-symbols-outlined px-4">person</p>
                            <p><a href='#'>Account</a></p>
                        </li>
                        <li className='flex items-center'>
                            <p className="material-symbols-outlined px-4">shopping_cart</p>
                            <p><a href='#'>Cart</a></p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar