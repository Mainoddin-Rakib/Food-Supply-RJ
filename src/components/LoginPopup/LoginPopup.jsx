import React, { useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets';

const LoginPopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState('Login');

    return (
        <div className='login-popup absolute w-[100%] h-[100%] bg-[#00000090] z-[1] grid'>
            <form action="" className='login-popup-container place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px] animate-fade-in transition-[0.5s]'>
                <div className="login-popup-title flex justify-between items-center text-black text-[18px] font-semibold">
                    <h2>{currState}</h2>
                    <img className='w-[16px] cursor-pointer  hover:transform-[scale(1.5)] transition-all'  onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs flex flex-col gap-[20px]">
                    {currState === "Login" ? <></> : <input type="text" placeholder='Your Name' required className='rounded-[4px] py-[10px] px-[10px] outline-none border border-[#c9c9c9]  text-black font-medium' />
                    }
                    <input type="email" placeholder='Your Email' required className='rounded-[4px] py-[10px] px-[10px] outline-none border border-[#c9c9c9] text-black font-medium' />
                    <input type="password" placeholder='Your Password' required className='rounded-[4px] py-[10px] px-[10px] outline-none border border-[#c9c9c9]  text-black font-medium'/>
                </div>
                <button className='border-none py-[10px] px-[10px] rounded-[4px] text-[#fff] bg-[tomato] font-semibold text-[15px] cursor-pointer'>{currState === "Sign Up" ? "Create Accounte" : "Login"}</button>
                <div className="login-popup-condition flex items-start gap-[8px] mt-[-10px]">
                    <input type="checkbox" required className='mt-[5px] text-[#000]'/>
                    <p className='text-[14px] text-[#808080] font-medium'>By Continuing, i agree to the terms of use & privacy policy</p>
                </div>
                {currState === "Login" ? <p>Create a new account? <span className='text-[tomato] font-bold cursor-pointer'  onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
                    : <p>Already have an account?<span className='text-[tomato] font-bold cursor-pointer' onClick={() => setCurrState("Login")}>Login Here</span></p>
                }

            </form>
        </div>
    )
}

export default LoginPopup