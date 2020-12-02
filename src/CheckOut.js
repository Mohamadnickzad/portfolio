import React from 'react'
import './Checkout.css'
import CheckOutProduct from './CheckOutProduct';
import { useStateValue } from './StateProvider';
import SubTotal from './SubTotal'

function CheckOut() {
    const [{ basket,user }] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className="checkout__add"
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                    alt=''
                />
                <div>
                    <h3>Hello,{user?.email}</h3>
                    <h2 className='checkout__title'>
                        shopping Basket
                    </h2>
                    {basket.map(item => (
                        <CheckOutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            key={item.id}
                        />
                    ))}

                </div>
            </div>
            <div className='checkout__right'>
                <SubTotal />
            </div>
        </div>
    )
}

export default CheckOut
