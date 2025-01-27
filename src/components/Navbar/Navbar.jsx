import React, { useContext, useState } from 'react'
import { assets } from './../../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("home");

    const { getTotalCartAmount } = useContext(StoreContext)
    return (
        <div className="navbar flex justify-between items-center py-[30px]">
            <Link to='/'><img src={assets.logo} alt="" className='logo w-[150px] max-[968px]:w-[120px]' /></Link>
            <ul className='navbar-menu flex list-none gap-[20px]  text-[#49557e] font-semibold cursor-pointer  max-[968px]:gap-[10px] max-[850px]:hidden'>
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a>
            </ul>
            <div className="navbar-right flex items-center gap-[40px] max-[968px]:gap-[20px]">
                <img src={assets.search_icon} alt="" className='max-[968px]:w-[22px]' />
                <div className="navbar-search-icon relative">
                    <Link to='/cart'><img src={assets.basket_icon} alt="" className='max-[968px]:w-[22px]' /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot absolute min-w-[10px] min-h-[10px] bg-red-500 rounded-[5px] top-[-8px] right-[-8px] cursor-pointer"}></div>
                </div>
                <button onClick={() => setShowLogin(true)} className="bg-transparent
                   border text-black font-bold
                   px-[30px] py-[10px] rounded
                   hover:bg-[#fff4f2]
                    hover:text-black transition duration-200 rounded-[50px] cursor-pointer max-[968px]:py-[8px]  max-[968px]:px-[25px]">
                    Sign-In
                </button>

            </div>
        </div>
    )
}

export default Navbar