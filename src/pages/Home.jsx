import React from 'react'
import SwiperSlider from '../components/SwiperSlider'


const Home = () => {

  const whyCont = [
    {img: '01.svg', title: 'Якісно', desc: 'Усі страви виготовлені з якісних продуктів' },
    {img: '02.svg', title: 'Швидко', desc: 'Доставка замовлення здійснюється в найкоротший термін' },
    {img: '03.svg', title: 'Професійно', desc: 'Приготування всіх страв під наглядом досвідченого шеф-кухаря' },
    {img: '04.svg', title: 'Надійно', desc: 'Ми гарантуємо якість усіх наших страв' }
  ]

  const contactsInfo = [
    {name: 'Адреса', info: 'м. Запоріжжя, вул. Троїцька, 13'},
    {name: 'Замовлення страв', info: '+38 067 999-25-45 +38 098 999-25-45'},
    {name: 'Часи роботи', info: 'Пн-Нд з 10.00 до 23.00'},
    {name: 'Доставка ', info: 'Пн-Пт з 11.00 до 16.00'},
  ]

  return (
    <main>
      <section className='home'>
        <div className="container">
          <div className='home-content'>
            <h1 className='home-logo'>Golden Goose</h1>
            <h3 className='home-text'>Ресторан</h3>
          </div>
        </div>
      </section>

      <section className='about-res'>
        <div className="container">
          <div className="about-res-wrapper">
            <div>
              <div className="title-section">Про ресторан</div>
              <div className="about-res-text">
                Своєю роботою ми хочемо радувати кожного нашого відвідувача. Ми гарантуємо всім клієнтам, що час, проведений у нашому закладі, буде відрізнятися особливим теплом та вишуканим смаком.
              </div>
            </div>
            <div>
              <img className='about-res-img' src="img/about-res.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='popular'>
        <div className="container">
          <div className="title-section">Популярні страви</div>
          <SwiperSlider />
        </div>
      </section>

      <section className='why'>
        <div className="container">
          <div className="title-section">Чому обирають нас</div>
          <div className="why-wrapper">
            {whyCont.map((item, i) => (
              <div key={i} className="why-card">
                <img src={`img/${item.img}`} alt="" />
                <div className="card-title">{item.title}</div>
                <div className="card-text">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='contacts'>
        <div className="container">
          <div className="title-section">Контакти</div>
          <div className="contacts-wrapper">
              {contactsInfo.map((item, i) => (
                <div key={i} className="contacts-card">
                  <div className="contacts-info">{item.info}</div>
                  <div className="contacts-name">{item.name}</div>
                </div>
              ))}
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home
