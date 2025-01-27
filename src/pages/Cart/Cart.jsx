import React, { useContext } from 'react'
import { StoreContext } from './../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const { cartItems, food_list, romoveFromCart, getTotalCartAmount } = useContext(StoreContext)

    const navigate = useNavigate();

    return (
        <div className='cart mt-[100px]'>
            <div className="cart-items">
                <div className="cart-items-title text-grey-500 text-[max-(1vw,14px)]">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {
                    food_list.map((item, index) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <>
                                    <div key={index} className="cart-items-title my-[10px] text-[#000] font-medium  text-grey-500 text-[max-(1vw,14px)]">
                                        <img src={item.image} alt="" className='w-[50px]' />
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>${item.price * cartItems[item._id]}</p>
                                        <p onClick={() => romoveFromCart(item._id)} className='cursor-pointer text-[20px] hover:text-[tomato] transition-all'>x</p>
                                    </div>
                                    <hr className='h-[1px] bg-[#e2e2e2] border-none' />
                                </>

                            )
                        }
                    })
                }
            </div>
            <div className="cart-bottom mt-[80px] flex justify-between gap-[max(12vw,20px)]">
                <div className="cart-total flex-1 flex flex-col gap-[20px]">
                    <h2 className='text-[18px] font-semibold'>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details flex justify-between text-[#555]">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr className='my-[10px]' />
                        <div className="cart-total-details  flex justify-between text-[#555]">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr className='my-[10px]' />
                        <div className="cart-total-details  flex justify-between text-[#555]">
                            <b>Total</b>
                            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')} className='border-none text-white bg-[tomato] text-[18px] font-semibold inline-flex w-[max-content] py-[12px] px-[25px] rounded-[4px] cursor-pointer'> PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-promocode flex-1">
                    <div>
                        <p className='text-[#555]'>If you have promo code, Enter it here</p>
                        <div className="cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]">
                            <input type="text" placeholder='Promo Code' className='bg-transparent border-none outline-none pl-[10px]' />
                            <button className='w-[max(10vw,150px)] py-[12px] px-[5px] bg-black border-noen text-white rounded-[4px]'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart