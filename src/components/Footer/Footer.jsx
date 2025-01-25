import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div className='footer text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] mt-[100px]' id='footer'>
            <div className="footer-content w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[80px]">
                <div className="footer-content-left flex flex-col items-start gap-[20px]">
                    <img src={assets.logo} alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, iste consectetur! Amet incidunt rerum hic velit veritatis eveniet non, placeat sapiente officia! Fugiat, amet omnis.</p>
                    <div className="footer-social-icon flex items-center gap-[20px]">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />

                    </div>
                </div>
                <div className="footer-content-center flex flex-col items-start gap-[20px]">
                    <h2 className='text-white font-bold'>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right flex flex-col items-start gap-[15px]">
                    <h2 className='text-white font-bold'>GET IN TOUCH</h2>
                    <ul>
                        <li>+8801633737039</li>
                        <li>mainoddinrakib@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr className='w-[100%] h-[2px] my-[20px] bg-gray-400' />
            <p className='footer-copyright'>Copyright 2025 @ Tomato.com -All Right Reserved.</p>
        </div>
    )
}

export default Footer