import { Autoplay, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {

    const swiperImg = [
        {img: '161.jpg', title: "Салат із копченою куркою'"},
        {img: '172.jpg', title: "Закуска з огірків"},
        {img: '182.jpg', title: "Десерт із сиру з желатином"},
        {img: '188.jpg', title: "Шоколадний мус"},
        {img: '196.jpg', title: "Курячі крильця в медово-соєвому соусі"},
        {img: '203.jpg', title: "Янтик"},
        {img: '186.jpg', title: "Сир із бананом"},
        {img: '174.jpg', title: "Крабові палички з сиром та яйцем закуска"}
    ]

    return (
        <div className='swiper-slider'>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                loop
                speed={500}
                autoplay
            >
                {swiperImg.map((item, i) => (
                    <SwiperSlide key={i}><div className='card'><img className='card-img' src={`img/product/${item.img}`} alt="" /><div className='cart-text'>{item.title}</div></div></SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
