import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'


const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu flex flex-col gap-[20px]' id='explore-menu'>
            <h1 className='text-[#262626] font-semibold text-[20px]'>Explore Our Menu</h1>
            <p className='explore-menu-text
            max-w-[60%] text-[#000] text-[14px] max-[968px]:max-w-[100%]  mx-0
            '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero quod ut ratione adipisci deserunt incidunt quibusdam voluptatum, magnam accusantium ipsum omnis explicabo quas repellendus enim.</p>
            <div className="explore-menu-list flex justify-between items-center gap-[30px] text-center my-[20px] mx-0 overflow-x-scroll ">
                {
                    menu_list.map((item, index) => (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition duration-200 '>
                            <img src={item.menu_image} alt="" className={category === item.menu_name ? "active" : ""} />
                            <p className='mt-[10px] text-[#747474] text-[max(1.4vw, 16px)]'>{item.menu_name}</p>
                        </div>
                    ))
                }
            </div>
            <hr className='my-[10px] mx-0 h-[2px] bg-[#e2e2e2] border-none' />
        </div>
    )
}

export default ExploreMenu