import React from 'react'
import HeaderTop from "../components/HeaderTop";

const Contacts = () => {
  return (
    <section className='contacts-page'>
      <HeaderTop />
      <div className="container">
        <div className="title-section black">Ми чекаємо за адресою:</div>

        <h3 className='contacts-page-title'>Адреса</h3>
        <p className='contacts-page-text'>м. Запоріжжя, вул. Троїцька, 13</p>

        <h3 className='contacts-page-title'>Замовлення страв</h3>
        <p>+38 067 999-25-45 +38 098 999-25-45</p>

        <h3 className='contacts-page-title'>Часи роботи</h3>
        <p>Пн-Нд з 10.00 до 23.00</p>

        <h3 className='contacts-page-title'>Доставка</h3>
        <p>м. Запоріжжя, вул. Троїцька, 13</p>
          
      </div>
    </section>
  )
}

export default Contacts
