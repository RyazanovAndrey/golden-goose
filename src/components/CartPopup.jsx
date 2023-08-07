import React, { useContext, useState } from 'react'
import { CartCont } from '../context/CartContext'

const CartPopup = ({ isOpnPopup, setIsOpenPopup }) => {

    const { cart, setCart } = useContext(CartCont)
    const [subOrder, setSubOrder] = useState(false)

    const closeAll = () => {
        setIsOpenPopup(!isOpnPopup)
        setCart([])
        setSubOrder(false)
    }

    return (
        <div className={isOpnPopup ? 'cart-popup open' : 'cart-popup'} >
            <div className='cart-popup-body'>
                <div className="cart-popup-title"> Замовлені страви</div>

                {subOrder ? (
                    <>
                    'Спасибо за заказ!'
                    <button onClick={closeAll}>Продолжить</button>
                    </>
                ) : (
                    <div>
                    <ul>
                        {cart.map(item => (
                            <li>{item.title}</li>
                        ))}
                    </ul>
                    <button onClick={() => setIsOpenPopup(false)}>Продовжити</button>
                    <button onClick={() => setSubOrder(true)}>Замовити</button>
                </div>
                )}
                
            </div>
        </div>
    )
}

export default CartPopup
