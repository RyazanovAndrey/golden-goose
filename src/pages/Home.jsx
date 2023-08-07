import React from 'react'

const Home = () => {
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

      <section>
        <div className="container">
          
        </div>
      </section>


    </main>
  )
}

export default Home
