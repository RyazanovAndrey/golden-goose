import React, { useContext, useState } from 'react'
import { CartCont } from '../context/CartContext'
import PopupImg from '../../public/img/popup-img.svg'

const CartPopup = ({ isOpnPopup, setIsOpenPopup }) => {

    const { cart, setCart, deleteProduct } = useContext(CartCont)
    const [subOrder, setSubOrder] = useState(false)

    const closeAll = () => {
        setIsOpenPopup(!isOpnPopup)
        setCart([])
        setSubOrder(false)
    }

    const totalCart = cart.reduce((total, item) => total = total + item.price, 0)

    return (
        <div className={isOpnPopup ? 'cart-popup open' : 'cart-popup'} >
            <div className='cart-popup-body'>

                {subOrder ? (
                    <>
                        <div className="cart-popup-title">Дякуємо за замовлення!</div>
                            <a href='#' className="btn-finish" onClick={closeAll}>Продовжити</a>
                    </>
                ) : (
                    <div>
                        <img src={PopupImg} alt="" />
                        <div className="cart-popup-title"> Замовлені страви</div>
                        {cart.map(item => (
                            <div className='cart-order'>
                                <h3 className='cart-item'>{item.title}</h3>
                                <div style={{ display: 'flex' }}>
                                    <h3 className='cart-price'>{item.price} грн.</h3>
                                    <h3 onClick={() => deleteProduct(item.id)} className='cart-delete'>&times;</h3>
                                </div>
                            </div>
                        ))}
                        <div className='cart-total'>
                            <div>Усього</div>
                            <div>{totalCart} грн.</div>
                        </div>
                        <div className="btn-group">
                            <button className='btn-go' onClick={() => setIsOpenPopup(false)}>Продовжити</button>
                            {cart.length == 0 ? <button className='btn-order' disabled>Ні чого не замовлено</button> : <button className='btn-order' onClick={() => setSubOrder(true)}>Замовити</button>}
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default CartPopup
