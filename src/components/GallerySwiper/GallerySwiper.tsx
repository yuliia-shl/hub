import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// Пример массива изображений
const images = [
  '/public/images/webp/AleksGolub-05946-2.webp',
  '/public/images/webp/AleksGolub-05979-2.webp',
  '/public/images/webp/AleksGolub-06362-2.webp',
  '/public/images/webp/AleksGolub-06446-2.webp',
  '/public/images/webp/AleksGolub-06543-2.webp',
  '/public/images/webp/Girl-with-flowes-mob.webp',
];

const GallerySwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="relative pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70 overflow-hidden">
      <div className="section pt-13 pb-8 mx-auto px-0">
        {/* Заголовок */}
        <h2 className="text-center text-dust-white text-[32px]/[110%] tracking-[-0.02em] font-second mb-8">
          Наші HUBи
        </h2>

        {/* Верхній еліпс */}
        <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none z-20">
          <svg width="216" height="32" viewBox="0 0 216 32" fill="none">
            <use href="/public/images/svg/icons.svg#icon-Ellipse-46" />
          </svg>
        </div>

        {/* Карусель з кастомним pagination */}
        <div className="relative z-10">
          <Swiper
            modules={[Navigation, Pagination]}
            loop
            slidesPerView={1}
            grabCursor
            onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className} inline-block h-[8px] rounded-full mx-1 ${
                  index === activeIndex
                    ? 'w-[68px] bg-[#404040]'
                    : 'w-[29px] bg-[#141414]'
                }"></span>`,
            }}
            className="swiper-container"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx} className="flex justify-center">
                <img
                  src={src}
                  alt={`slide-${idx}`}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </SwiperSlide>
            ))}

            {/* Кнопки навігації */}
            <button
              aria-label="Previous slide"
              className="swiper-button-prev absolute top-1/2 left-2 -translate-y-1/2 text-white z-30"
            />
            <button
              aria-label="Next slide"
              className="swiper-button-next absolute top-1/2 right-2 -translate-y-1/2 text-white z-30"
            />

            {/* Контейнер пагінації */}
            <div className="swiper-pagination flex justify-center mt-4 z-30" />
          </Swiper>
        </div>

        {/* Нижній еліпс */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none z-20">
          <svg width="216" height="32" viewBox="0 0 216 32" fill="none">
            <use href="/public/images/svg/icons.svg#icon-Ellipse-47" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default GallerySwiper;
