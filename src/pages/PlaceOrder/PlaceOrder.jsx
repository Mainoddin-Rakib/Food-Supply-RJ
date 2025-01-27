import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {

    const { getTotalCartAmount } = useContext(StoreContext)

    return (
        <form className='place-order flex items-start justify-between gap-[50px] mt-[100px]'>
            <div className="place-order-left w-[100%] max-w-[max(30%,500px)]">
                <p className='title text-[30px] font-semibold mb-[50px]'>Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='last Name' />
                </div>
                <input type="email" placeholder='Email Address' />
                <input type="text" placeholder='Street' />
                <div className="multi-fields">
                    <input type="text" placeholder='City Name' />
                    <input type="text" placeholder='State' />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder='Zip Code' />
                    <input type="text" placeholder='Country' />
                </div>
                <input type="text" placeholder='Phone' />
            </div>
            <div className="place-order-right w-[100%] max-w-[max(40%,500px)]">
                <div className="cart-total flex-1 flex flex-col gap-[20px]">
                    <h2 className='text-[30px] font-semibold mb-[50px]'>Cart Totals</h2>
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
                    <button className='border-none mt-[30px] text-white bg-[tomato] text-[18px] font-semibold inline-flex w-[max-content] py-[12px] px-[25px] rounded-[4px] cursor-pointer'> PROCEED TO PAYMANT</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder