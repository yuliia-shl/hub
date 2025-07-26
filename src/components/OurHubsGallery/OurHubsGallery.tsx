// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import {
//   Pagination,
//   A11y,
//   Parallax,
// } from 'swiper/modules';
// import 'swiper/css';

// import 'swiper/css/pagination';

// import { galleryImages as images } from '../../data/gallery-image';

// const OurHubsGallery: React.FC = () => {
 
//   return (
//     <section
//       className="relative pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70"
//       role="region"
//       aria-roledescription="carousel"
//       aria-label="Галерея наших HUBів"
//       tabIndex={0}
//       aria-labelledby="gallery-title"
//     >
//       <div className="section px-0">
//         <div className="pt-43 pb-15 3xl:pt-[116px] 3xl:pb-0">
//           {/* 1) Top ellipses + title */}
//           <div className="absolute z-10 top-[-174px] 1xl:top-[-134px] 3xl:top-[-136px] 4xl:top-[-64px] left-1/2 transform -translate-x-1/2 pointer-events-none">
//             <div className="w-[568px] h-[200px] 1xl:w-[1825px] 3xl:w-[2141px] 4xl:w-[2300px]">
//               {/* mobile-top */}
//               <svg
//                 className="block w-full h-full 1xl:hidden fill-cod-black"
//                 viewBox="0 0 91 32"
//               >
//                 <use href="/images/svg/icons.svg#icon-Ellipse-mobile-top" />
//               </svg>
//               {/* 1440px+ top */}
//               <svg
//                 className="hidden w-full h-full 1xl:block 3xl:hidden fill-cod-black"
//                 viewBox="0 0 327 32"
//               >
//                 <use href="/images/svg/icons.svg#icon-Ellipse-1440-top" />
//               </svg>
//               {/* 1920px+ top */}
//               <svg
//                 className="hidden w-full h-full 3xl:block 4xl:hidden fill-cod-black"
//                 viewBox="0 0 309 32"
//               >
//                 <use href="/images/svg/icons.svg#icon-Ellipse-1920-top" />
//               </svg>
//               {/* 2560px+ top */}
//               <svg
//                 className="hidden w-full h-full 4xl:block fill-cod-black"
//                 viewBox="0 0 863 32"
//               >
//                 <use href="/images/svg/icons.svg#icon-Ellipse-2560-top" />
//               </svg>
//             </div>
//             <h2
//               id="gallery-title"
//               className="absolute inset-0 z-20 flex items-center justify-center
//                          text-dust-white text-[32px]/[110%] 1xl:text-[42px]/[110%]
//                          3xl:text-[54px]/[110%] 4xl:text-[62px]/[110%]
//                          tracking-[-0.02em] font-second 4xl:font-medium"
//             >
//               Наші HUBи
//             </h2>
//           </div>

//       {/* 2) Swiper */}
//       <Swiper
//         modules={[Pagination, A11y, Parallax]}
//         grabCursor
//         slidesPerView="auto"
//         centeredSlides
//         loop
//         initialSlide={0}
//         speed={900}
//         parallax
//         spaceBetween={0}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           1440: { spaceBetween: 40 },
//           1920: { spaceBetween: 262 },
//           2560: { spaceBetween: 421 },
//         }}
//         className="!overflow-visible py-8"
//       >
//         {images.map((fileName, idx) => (
//           <SwiperSlide
//             key={idx}
//             className="flex-shrink-0 w-[568px] 1xl:w-[1082px] 3xl:w-[1156px] h-[654px] 1xl:h-[720px] 3xl:h-[769px]"
//           >
//             {({ isActive, isVisible }) => {
//               const base    = "relative transition-transform duration-500";
//               const scale   = isActive ? "scale-100" : "scale-90";
//               const overlay = !isVisible ? "filter blur-sm" : "";

//               return (
//                 <div className={`${base} ${scale} ${overlay}`}>
//                   <div data-swiper-parallax="-100">
//                     <img
//                       src={`/images/webp/hub-gallery/${fileName}`}
//                       alt={`HUB ${idx + 1}`}
//                       loading="lazy"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   {!isVisible && (
//                     <div
//                       className="absolute inset-0 bg-black/40"
//                       aria-hidden="true"
//                     />
//                   )}
//                 </div>
//               );
//             }}
//           </SwiperSlide>
//         ))}
//       </Swiper>

//           {/* 3) Bottom ellipses */}
//           <div className="absolute bottom-[-94px] 1xl:bottom-[-58px] 3xl:bottom-[-75px] 4xl:bottom-[-1px] z-10 left-1/2 transform -translate-x-1/2 pointer-events-none">
//             <div className="w-[568px] h-[200px] 1xl:w-[1825px] 3xl:w-[2141px] 4xl:w-[2300px]">
//               {/* mobile-bottom */}
//               <svg
//                 className="block w-full h-full 1xl:hidden fill-cod-black"
//                 viewBox="0 0 91 32"
//               >
//                 <use href="/images/svg/icons.svg#icon-Ellipse-mobile-bottom" />
//               </svg>
//               {/* 1440px+ bottom */}
//               <svg
//                 className="hidden w-full h-full 1xl:block 3xl:hidden fill-cod-black"
//                 viewBox="0 0 327 32"
//               >
//                 <use href="/images/svg/icons.svg#icon-Ellipse-1440-bottom" />
//               </svg>
//               {/* 1920px+ bottom */}
//               <svg
//                 className="hidden w-full h-full 3xl:block 4xl:hidden fill-cod-black"
//                 viewBox="0 0 309 32"
//               >
//                 <use href="/images/svg/icons.svg#icon-Ellipse-1920-bottom" />
//               </svg>
//               {/* 2560px+ bottom */}
//               <svg
//                 className="hidden w-full h-full 4xl:block fill-cod-black"
//                 viewBox="0 0 863 32"
//               >
//                 <use href="/images/svg/icons.svg#icon-Ellipse-2560-bottom" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurHubsGallery;




import React, { useState, useEffect, useRef, type KeyboardEvent } from 'react';
import { galleryImages as images } from '../../data/gallery-image';

const OurHubsGallery: React.FC = () => {
  const [active, setActive] = useState(0);
  const ulRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Визначаємо slideWidth, peek і gap для поточного розміру вікна
  const getSettings = () => {
    const w = window.innerWidth;
    let slideW = 568,
      peek = 0;
    if (w >= 2560) {
      slideW = 1156;
      peek = 421;
    } else if (w >= 1920) {
      slideW = 1156;
      peek = 262;
    } else if (w >= 1440) {
      slideW = 1082;
      peek = 40;
    }
    const styles = ulRef.current && window.getComputedStyle(ulRef.current);
    const gap = styles
      ? parseFloat(styles.getPropertyValue('column-gap')) || 0
      : 0;
    return { slideW, peek, gap };
  };

  // Обчислюємо відступ, щоб центр активного слайда співпав з центром контейнера
  const updatePosition = () => {
    if (!ulRef.current || !containerRef.current) return;
    const { slideW, peek, gap } = getSettings();
    const cw = containerRef.current.clientWidth;
    const containerCenter = cw / 2;
    // позиція центру слайда від лівого краю UL (враховуючи paddingLeft = peek)
    const slideCenter = peek + active * (slideW + gap) + slideW / 2;
    const offset = containerCenter - slideCenter;
    ulRef.current.style.transform = `translateX(${offset}px)`;
  };

  // Підвішуємо ресайз і оновлюємо при зміні active
  useEffect(() => {
    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [active]);

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'ArrowRight') {
      setActive(i => Math.min(i + 1, images.length - 1));
    }
    if (e.key === 'ArrowLeft') {
      setActive(i => Math.max(i - 1, 0));
    }
  };

  // Для JSX: вставляємо peek у padding контейнера
  const { peek } = getSettings();

  return (
    <section
      className="relative pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70"
      role="region"
      aria-roledescription="carousel"
      aria-label="Галерея наших HUBів"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-labelledby="gallery-title"
    >
      <div className="section px-0">
        <h2
          id="gallery-title"
          className=" inset-0 z-20 flex items-center justify-center text-dust-white text-[32px]/[110%] 1xl:text-[42px]/[110%] 3xl:text-[54px]/[110%] 4xl:text-[62px]/[110%] tracking-[-0.02em] font-second 4xl:font-medium"
        >
          Наші HUBи
        </h2>
        <div className="pt-43 pb-15 3xl:pt-[116px] 3xl:pb-0">
          {/* 1) Container */}
          <div className="relative mx-auto">
            {/* 2) Top ellipses + title */}
            <div className="absolute z-10 top-[-174px] 1xl:top-[-134px] 3xl:top-[-136px] 4xl:top-[-64px] left-1/2 transform -translate-x-1/2 pointer-events-none">
              <div className="w-[568px] h-[200px] 1xl:w-[1825px] 3xl:w-[2141px] 4xl:w-[2300px]">
                {/* mobile-top */}
                <svg
                  className="block w-full h-full 1xl:hidden  fill-cod-black"
                  viewBox="0 0 91 32"
                  aria-hidden="true"
                >
                  <use href="/images/svg/icons.svg#icon-Ellipse-mobile-top" />
                </svg>

                {/* 1440px+ top */}
                <svg
                  className="hidden w-full h-full 1xl:block 3xl:hidden  fill-cod-black"
                  viewBox="0 0 327 32"
                  aria-hidden="true"
                >
                  <use href="/images/svg/icons.svg#icon-Ellipse-1440-top" />
                </svg>

                {/* 1920px+ top */}
                <svg
                  className="hidden w-full h-full 3xl:block 4xl:hidden  fill-cod-black"
                  viewBox="0 0 309 32"
                  aria-hidden="true"
                >
                  <use href="/images/svg/icons.svg#icon-Ellipse-1920-top" />
                </svg>

                {/* 2560px+ top */}
                <svg
                  className="hidden w-full h-full 4xl:block fill-cod-black"

                  aria-hidden="true"
                >
                  <use href="/images/svg/icons.svg#icon-Ellipse-2560-top" />
                </svg>
              </div>
              <h2
                id="gallery-title"
                className="absolute inset-0 z-20 flex items-center justify-center 3xl:top-[-146px] 4xl:top-[-30px] text-dust-white text-[32px]/[110%] 1xl:text-[42px]/[110%] 3xl:text-[54px]/[110%] 4xl:text-[62px]/[110%] tracking-[-0.02em] font-second 4xl:font-medium"
              >
                Наші HUBи
              </h2>
            </div>

            {/* Контейнер зі скриттям та симетричними паддінгами */}
            <div
              ref={containerRef}
              className="overflow-hidden"
              style={{ paddingLeft: peek, paddingRight: peek }}
            >
              {/* Ультрацентрований слайдер */}

              <ul
                ref={ulRef}
                role="listbox"
                aria-labelledby="gallery-title"
                className="flex gap-x-4 1xl:gap-x-[112px] 3xl:gap-x-[120px] transition-transform duration-500"
              >
                {images.map((fileName, idx) => (
                  <li
                    key={idx}
                    role="option"
                    aria-selected={active === idx}
                    className="flex-shrink-0
                         w-[568px] 1xl:w-[1082px]
                         3xl:w-[1156px] 4xl:w-[1156px]"
                  >
                    <img
                      src={`/images/webp/hub-gallery/${fileName}`}
                      alt={`HUB ${idx + 1}`}
                      loading="lazy"
                      className="w-full
                           h-[654px] 1xl:h-[720px] 3xl:h-[769px]
                           object-cover"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* 4) Bottom ellipses */}
            <div className="absolute bottom-[-94px] 1xl:bottom-[-58px] 3xl:bottom-[-75px] 4xl:bottom-[-1px] z-10 left-1/2 transform -translate-x-1/2 pointer-events-none">
              <div className="w-[568px] h-[200px] 1xl:w-[1825px] 3xl:w-[2141px] 4xl:w-[2300px]"></div>
              {/* mobile-bottom */}
              <svg className="block 1xl:hidden w-[568px]  fill-cod-black">
                <use href="/images/svg/icons.svg#icon-Ellipse-mobile-bottom" />
              </svg>

              {/* 1440px+ bottom */}
              <svg className="hidden 1xl:block 3xl:hidden  fill-cod-black">
                <use href="/images/svg/icons.svg#icon-Ellipse-1440-bottom" />
              </svg>

              {/* 1920px+ bottom */}
              <svg
                viewBox="0 0 309 32"
                className="hidden 3xl:block 4xl:hidden  fill-cod-black"
              >
                <use href="/images/svg/icons.svg#icon-Ellipse-1920-bottom" />
              </svg>

              {/* 2560px+ bottom */}
              <svg
                viewBox="0 0 863 32"
                className="hidden 4xl:block fill-cod-black"
              >
                <use href="/images/svg/icons.svg#icon-Ellipse-2560-bottom" />
              </svg>
            </div>

            {/* 5) Indicators */}
            <ul className="absolute bottom-[-17px] 3xl:bottom-[10px] 4xl:bottom-[30px] 1xl:bottom-[px] left-1/2 z-20 transform -translate-x-1/2 flex gap-2.5">
              {images.map((_, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => setActive(idx)}
                    aria-label={`Перейти до слайду ${idx + 1}`}
                    aria-current={active === idx ? 'true' : undefined}
                    className={`h-2 rounded-[32px] transition-all ${
                      active === idx
                        ? 'w-17 bg-masala-light'
                        : 'w-7.5 bg-woodsmoke-dust'
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHubsGallery;






