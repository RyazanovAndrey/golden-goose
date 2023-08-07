import { Autoplay, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {

    const swiperImg = [
        {img: 'pic-slider-1.jpg', title: "М'ясо 'Африканське сафарі'"},
        {img: 'pic-slider-1.jpg', title: "М'ясо 'Африканське сафарі'"},
        {img: 'pic-slider-1.jpg', title: "М'ясо 'Африканське сафарі'"},
        {img: 'pic-slider-1.jpg', title: "М'ясо 'Африканське сафарі'"},
        {img: 'pic-slider-1.jpg', title: "М'ясо 'Африканське сафарі'"},
        {img: 'pic-slider-1.jpg', title: "М'ясо 'Африканське сафарі'"}
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
                {swiperImg.map(item => (
                    <SwiperSlide><div className='card'><img src={`img/${item.img}`} alt="" /><div className='cart-text'>{item.title}</div></div></SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
