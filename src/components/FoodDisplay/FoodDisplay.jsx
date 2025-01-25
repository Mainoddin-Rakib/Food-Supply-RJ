import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {

    const { food_list } = useContext(StoreContext)

    return (
        <div className='food-display mt-[30px]' id='food-display'>
            <h2 className='font-semibold text-[max(2vw,24px)]'>Top dishes near you</h2>
            <div className="food-display-list grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mt-[30px] ">
                {
                    food_list.map((item, index) => {

                        if (category === "All" || category === item.category) {
                            return (
                                <FoodItem key={index} id={item._id} name={item.name} description={item.description}
                                    price={item.price} image={item.image} />
                            )
                        }



                    })
                }
            </div>
        </div>
    )
}

export default FoodDisplay