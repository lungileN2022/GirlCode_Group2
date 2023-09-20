import '../App.css'
const TopBar = () => {
    return (
        <div className="top-bar items-center">
            <div className='left-top-bar flex'>
            <p className="material-symbols-outlined mr-10">call</p>
            <p>+001234567890</p>
            </div>

            <div className='center-top-bar'>
            <span>Get 50% Off on Selected Items    |      Shop Now</span>
            </div>

            <div className='right-top-bar'>
                <div className='flex items-center mr-8'>
                <p>Eng</p>
                <p className="material-symbols-outlined">keyboard_arrow_down</p>
                </div>
                <div className='flex items-center'>
                <p>Location</p>
                <p className="material-symbols-outlined">keyboard_arrow_down</p>
                </div>

               
            </div>
            
        
        </div>
    )
}

export default TopBar