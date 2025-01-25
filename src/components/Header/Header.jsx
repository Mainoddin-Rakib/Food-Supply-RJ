import React from 'react'
import Headerbg from '/header_img.png'

const Header = () => {
    return (
        <div className='header h-[34vw] my-[30px]
         mx-auto bg-[#f8f8f8] bg-contain bg-no-repeat relative max-[1050px]:h-[35vw] '
            style={{ backgroundImage: `url(${Headerbg})` }}
        >
            <div className="header-contents absolute flex flex-col
             items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] max-[1050px]:max-w-[50%] max-[850px]:bottom-[20%] max-[540px]:bottom-[10%]">
                <h2 className="header-title font-medium text-[max(4.1vw,22px)] capitalize 
                leading-[Max(5.5vw,30px)]
              text-white">Order Your Favourite food here</h2>
                <p className='text-white text-[1vw] max-[850px]:hidden'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo reiciendis nam deleniti corporis. Aliquid, architecto unde quia repellendus dolorem ducimus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, nemo. lorem 20

                </p>
                <button className='header-btn text-[max(1vw,13px)] rounded-[50px] bg-white border-none text-[#747474] font-medium py-[1vw] px-[2.3vw]'>View Menu</button>
            </div>

        </div>
    )
}

export default Header