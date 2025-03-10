import React, { useContext } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../Context/StoreContext'


const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, romoveFromCart } = useContext(StoreContext);

    return (
        <div className='food-item w-[100%] m-auto rounded-[15px] shadow-[0_0px_10px_rgba(0,0,0,0.1)]'>
            <div className="food-item-image-container relative ">
                <img src={image} alt="" className='w-[100%] rounded-t-[15px]' />
                {!cartItems[id]
                    ? <img onClick={() => addToCart(id)} className='add w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' src={assets.add_icon_white} alt="" />
                    : <div className="food-item-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white">
                        <img className='w-[30px]' onClick={() => romoveFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img className='w-[30px]' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info p-[20px]">
                <div className="food-item-name-rating flex justify-between items-center mb-[10px]">
                    <p className='text-[20px] font-medium text-black max-[1100px]:text-[14px]'>{name}</p>
                    <img src={assets.rating_starts} alt="" className='w-[70px]' />
                </div>
                <p className="food-item-desc text-[#676767] text-[14px]">{description}</p>
                <p className="food-item-price text-[tomato] text-[20px] font-semibold my-[10px]">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem