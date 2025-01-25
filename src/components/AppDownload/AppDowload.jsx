import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const AppDowload = () => {
    return (
        <div className='app-download m-auto mt-[100px] text-[max(3vw,20px)] font-semibold text-center' id='app-download'>
            <p>For Better Experience Download <br /> Food Supply</p>
            <div className="app-download-platforms flex justify-center items-center gap-[20px] mt-[20px]">
                <img src={assets.play_store} alt="" className='w-[180px] h-[60px] transition-[2s] cursor-pointer hover:transform-[scale(1.05)] ' />
                <img src={assets.app_store} alt="" className='w-[180px] h-[60px] transition-[2s] cursor-pointer hover:transform-[scale(1.05)] ' />
            </div>

        </div>
    )
}

export default AppDowload