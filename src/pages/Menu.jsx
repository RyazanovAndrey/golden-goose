import React, { useContext, useState } from 'react'
import { ProductCont } from '../context/ProductContext'
import HeaderTop from '../components/HeaderTop'
import Product from '../components/Product'
import { CartCont } from '../context/CartContext'
import CartPopup from '../components/CartPopup'
import ReactPaginate from 'react-paginate';


const Menu = () => {

  const { product, actTab, setActTab, setPagPage } = useContext(ProductCont)
  const { cart } = useContext(CartCont)

  const [isOpnPopup, setIsOpenPopup] = useState(false)

  const sortList = ["Всі", "Салати", "Закуски", "Десерти", "М'ясні страви"]

  return (

    <section className='menu'>
      <HeaderTop />
      <div className="container">
        <div className="title-section black">Наше меню</div>
        <div className="menu-text">Пропонуємо насолодитися кухнею від професійних кухарів ресторану <span style={{ color: '#E8C300', fontWeight: 'bold' }}>Golden Goose!</span></div>

        <ul className='menu-tab'>
          {sortList.map((item) => (
            <li onClick={() => setActTab(item)} className={actTab == item ? 'tab active' : 'tab'}>{item}</li>
          ))}
        </ul>

        <div className="product-wrapper">
          {product.map(item => (
            <Product product={item} isAdd={cart.includes(item)} />
          ))}
        </div>

        <ReactPaginate
          breakLabel="..."
          nextLabel="вперед >"
          onPageChange={e => setPagPage(e.selected + 1)}
          pageRangeDisplayed={4}
          pageCount={4}
          previousLabel="< назад"
          renderOnZeroPageCount={null}
          containerClassName='pagination'
          pageLinkClassName='page-num'
          previousLinkClassName='prev'
          nextLinkClassName='next'
          activeClassName='tab-active'
        />

        {cart.length > 0 && <button onClick={() => setIsOpenPopup(!isOpnPopup)} className='btn-to-cart'>Замовити ({cart.length})</button>}
      </div>

      <CartPopup isOpnPopup={isOpnPopup} setIsOpenPopup={setIsOpenPopup} />
    </section>
  )
}

export default Menu
