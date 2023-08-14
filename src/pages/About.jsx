import React from "react";
import HeaderTop from "../components/HeaderTop";

const About = () => {
  const cooks = [
    { img: "cook-1.jpg", name: "Максим", job: "Шеф-кухар" },
    { img: "cook-2.jpg", name: "Олена", job: "Кухар" },
    { img: "cook-3.jpg", name: "Дмитро", job: "Кухар" },
    { img: "cook-4.jpg", name: "Ірина", job: "Кондитер" },
  ];

  return (
    <section className="about">
      <HeaderTop />
      <div className="container">
        <div className="title-section black">Наша команда</div>
        <div className="about-text">
          За підбір продуктів та приготування смачних страв відповідає наш
          висококваліфікований персонал
        </div>
        <div className="about-wrapper">
          {cooks.map((item) => (
            <div className="about-cart">
              <div className="about-cart-img">
                <img className="about-img" src={`img/${item.img}`} alt="" />
              </div>
              <h3 className="about-name">{item.name}</h3>
              <h4 className="about-job">{item.job}</h4>
            </div>
          ))}
        </div>
        <div className="about-text-sec">
          <div>
            <h3 className="about-title">Ласкаво просимо!</h3>
            <p className="about-content">
              Своєю роботою ми хочемо радувати кожного нашого відвідувача. Ми
              гарантуємо всім клієнтам, що час, проведений у нашому закладі,
              буде відрізнятися особливим теплом та вишуканим смаком.
            </p>
          </div>
          <img style={{ width: "100%" }} src="img/cook-hallo.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
