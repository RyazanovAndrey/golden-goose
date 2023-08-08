import React, { useContext, useState } from 'react'
import { ProductCont } from '../context/ProductContext'
import HeaderTop from '../components/HeaderTop'
import Product from '../components/Product'
import { CartCont } from '../context/CartContext'
import CartPopup from '../components/CartPopup'


const Menu = () => {

  const { product, actTab, setActTab } = useContext(ProductCont)
  const { cart } = useContext(CartCont)

  const [isOpnPopup, setIsOpenPopup] = useState(false)
  console.log(isOpnPopup);


  const sortList = ["Всі", "Салати", "Закуски", "Десерти", "М'ясні страви"]

  return (

    <section className='menu'>
      <HeaderTop />
      <div className="container">
        <div className="title-section black">Наше меню</div>
        <div className="menu-text">Пропонуємо насолодитися кухнею від професійних кухарів ресторану <span style={{ color: '#E8C300', fontWeight: 'bold' }}>Golden Goose!</span></div>

        <ul className='menu-tab'>
          {sortList.map((item, i) => (
            <li onClick={() => setActTab(i)} className={actTab == i ? 'tab active' : 'tab'}>{item}</li>
          ))}
        </ul>

        <div className="product-wrapper">
          {product.map(item => (
            <Product product={item} isAdd={cart.includes(item)} />
          ))}
        </div>

        {cart.length > 0 && <button onClick={() => setIsOpenPopup(!isOpnPopup)} className='btn-to-cart'>Замовити ({cart.length})</button>}
      </div>

      <CartPopup isOpnPopup={isOpnPopup} setIsOpenPopup={setIsOpenPopup} />
    </section>
  )
}

export default Menu
