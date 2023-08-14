import React, { useContext } from 'react'
import { CartCont } from '../context/CartContext'

const Product = ({ product, isAdd }) => {

  const { id, title, price, desc, cat, image } = product
  const {addToCart} = useContext(CartCont)

  return (
    <div className='product'>
      <div className='product-box'>
        <img src={`img/product/${image}`} className='product-img' alt="" />
      </div>
      <div>
        <div className='product-title'>{title}</div>
        <div className="product-price">{price} грн.</div>
        <div className="product-desc">{desc}</div>
        <button onClick={() => addToCart(product)} className={isAdd ? 'product-btn active' : 'product-btn'}>{isAdd ? 'Замовлено' : 'Замовити'}</button>
      </div>
    </div>
  )
}

export default Product
