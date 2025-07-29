import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import { galleryImages as images } from '../../data/gallery-image';

const OurHubsGallery = () => {
  const [active, setActive] = useState(0);
  const swiperRef = useRef<any>(null);

  const getSlideConfig = () => {
    const w = window.innerWidth;
    if (w >= 2560) return { width: 1156, height: 769, peek: 421, gap: 120 };
    if (w >= 1920) return { width: 1156, height: 769, peek: 262, gap: 120 };
    if (w >= 1440) return { width: 1082, height: 720, peek: 40, gap: 112 };
    return { width: 568, height: 654, peek: 0, gap: 16 };
  };

  const { peek, gap } = getSlideConfig();

  return (
    <section
      className="relative pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70"
      role="region"
      aria-roledescription="carousel"
      aria-label="Галерея наших HUBів"
      tabIndex={0}
      aria-labelledby="gallery-title"
    >
      <div className="section overflow-hidden px-0">
        <h2 className="sr-only">Наші HUBи</h2>
        {/* Верхній еліпс + заголовок */}
        <div className="relative mx-auto pt-43 3xl:pt-[116px] 3xl:pb-0">
          <div className="absolute inset-x-0 z-10 top-18 1xl:top-20 3xl:-top-1 4xl:-top-10 h-[200px] pointer-events-none">
            <svg
              className="w-full h-full max-w-[568px] 1xl:max-w-[1440px] 3xl:max-w-[1920px] 4xl:max-w-[2560px] fill-cod-black"
              aria-hidden="true"
            >
              <use href="/images/svg/icons.svg#icon-Ellipse-top" />
            </svg>
            <h2
              id="gallery-title"
              className="absolute inset-0 z-20 flex items-center justify-center -top-50 1xl:-top-20 3xl:-top-28 4xl:-top-18 text-dust-white text-[32px]/[110%] 1xl:text-[42px] 3xl:text-[54px] 4xl:text-[62px] tracking-[-0.02em] font-second 4xl:font-medium"
            >
              Наші HUBи
            </h2>
          </div>

          {/* Слайдер */}
          <div
            className="relative overflow-hidden"
            style={{ paddingLeft: peek, paddingRight: peek }}
          >
            {/* Градієнти */}
            <div
              className="hidden 3xl:block  pointer-events-none absolute inset-0 z-20 -left-[100px] -right-[100px]"
              style={{
                background: `
                  linear-gradient(
                    to right,
                    rgba(8, 8, 8, 0.8) 0%,
                    rgba(8, 8, 8, 0.4) 10%,
                    rgba(8, 8, 8, 0) 25%,
                    rgba(8, 8, 8, 0) 75%,
                    rgba(8, 8, 8, 0.4) 90%,
                    rgba(8, 8, 8, 0.8) 100%
                  ),
                  linear-gradient(
                    to left,
                    rgba(8, 8, 8, 0.8) 0%,
                    rgba(8, 8, 8, 0.4) 10%,
                    rgba(8, 8, 8, 0) 25%,
                    rgba(8, 8, 8, 0) 75%,
                    rgba(8, 8, 8, 0.4) 90%,
                    rgba(8, 8, 8, 0.8) 100%
                  )
                `,
                backgroundBlendMode: 'multiply',
              }}
            />

            <Swiper
              modules={[Mousewheel]}
              slidesPerView="auto"
              centeredSlides
              loop={true}
              spaceBetween={gap}
              mousewheel={{
                forceToAxis: true,
                sensitivity: 1,
              }}
              onSwiper={swiper => (swiperRef.current = swiper)}
              onSlideChange={swiper => setActive(swiper.realIndex)}
              
            >
              {images.map((fileName, idx) => {
                const slideW = getSlideConfig().width;
                return (
                  <SwiperSlide key={idx} style={{ width: slideW }}>
                    <picture>
                      {/* WebP 2x */}
                      <source
                        srcSet={`/images/webp/hub-gallery/${fileName.replace(
                          '.webp',
                          '-2x.webp'
                        )}`}
                        type="image/webp"
                        media="(min-resolution: 192dpi)"
                      />

                      {/* Звичайний WebP */}
                      <source
                        srcSet={`/images/webp/hub-gallery/${fileName}`}
                        type="image/webp"
                      />

                      {/* Fallback PNG or JPEG if needed */}
                      <img
                        src={`/images/webp/hub-gallery/${fileName}`}
                        alt={`HUB ${idx + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </picture>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Нижній еліпс */}
            <div className="absolute h-[200px] -bottom-20 1xl:-bottom-20 3xl:-bottom-10 4xl:bottom-[-1px] z-10 inset-x-0 pointer-events-none">
              <svg className="w-full h-full max-w-[568px] 1xl:max-w-[1440px] 3xl:max-w-[1920px] 4xl:max-w-[2560px] fill-cod-black">
                <use href="/images/svg/icons.svg#icon-Ellipse-45-7" />
              </svg>
            </div>

            {/* Індикатори */}
            <ul className="absolute -bottom-2 1xl:-bottom-1 3xl:bottom-10 4xl:bottom-20 left-1/2 z-20 transform -translate-x-1/2 flex gap-2.5">
              {images.map((_, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => swiperRef.current?.slideTo(idx)}
                    aria-label={`Перейти до слайду ${idx + 1}`}
                    aria-current={active === idx ? 'true' : undefined}
                    className={`h-2 rounded-4xl transition-all ${
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


// import React, { useState, useEffect, useRef, type KeyboardEvent } from 'react';
// import { galleryImages as images } from '../../data/gallery-image';

// const OurHubsGallery: React.FC = () => {
//   const extendedImages = [images[images.length - 1], ...images, images[0]];

//   const [active, setActive] = useState(1); // стартуємо з 1 (бо 0 — клон останнього)
//   const ulRef = useRef<HTMLUListElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const isDragging = useRef(false);
//   const dragStartX = useRef(0);
//   const dragDelta = useRef(0);

//   const getSettings = () => {
//     const w = window.innerWidth;
//     let slideW = 568,
//       peek = 0;
//     if (w >= 2560) {
//       slideW = 1156;
//       peek = 421;
//     } else if (w >= 1920) {
//       slideW = 1156;
//       peek = 262;
//     } else if (w >= 1440) {
//       slideW = 1082;
//       peek = 40;
//     }
//     const styles = ulRef.current && window.getComputedStyle(ulRef.current);
//     const gap = styles
//       ? parseFloat(styles.getPropertyValue('column-gap')) || 0
//       : 0;
//     return { slideW, peek, gap };
//   };

//   const { peek } = getSettings();

//   const updatePosition = (withTransition = true) => {
//     if (!ulRef.current || !containerRef.current) return;
//     const { slideW, peek, gap } = getSettings();
//     const cw = containerRef.current.clientWidth;
//     const containerCenter = cw / 2;
//     const slideCenter = peek + active * (slideW + gap) + slideW / 2;
//     const offset = containerCenter - slideCenter;

//     ulRef.current.style.transition = withTransition ? 'transform 0.5s' : 'none';
//     ulRef.current.style.transform = `translateX(${offset}px)`;
//   };

//   const goNext = () => setActive(prev => prev + 1);
//   const goPrev = () => setActive(prev => prev - 1);

//   useEffect(() => {
//     updatePosition(true);
//   }, [active]);

//   useEffect(() => {
//     const ul = ulRef.current;
//     if (!ul) return;

//     const handleTransitionEnd = () => {
//       if (active === 0) {
//         setActive(images.length);
//         requestAnimationFrame(() => updatePosition(false));
//       } else if (active === images.length + 1) {
//         setActive(1);
//         requestAnimationFrame(() => updatePosition(false));
//       }
//     };

//     ul.addEventListener('transitionend', handleTransitionEnd);
//     return () => ul.removeEventListener('transitionend', handleTransitionEnd);
//   }, [active]);

//   useEffect(() => {
//     const handleWheel = (e: WheelEvent) => {
//       if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
//         e.preventDefault();
//         if (e.deltaX > 0) goNext();
//         else if (e.deltaX < 0) goPrev();
//       }
//     };
//     const container = containerRef.current;
//     if (container)
//       container.addEventListener('wheel', handleWheel, { passive: false });
//     return () => {
//       if (container) container.removeEventListener('wheel', handleWheel);
//     };
//   }, [active]);

//   const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
//     if (e.key === 'ArrowRight') goNext();
//     if (e.key === 'ArrowLeft') goPrev();
//   };

//   const handleMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
//     isDragging.current = true;
//     dragStartX.current = e.clientX;
//   };

//   const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
//     if (!isDragging.current || !ulRef.current || !containerRef.current) return;
//     dragDelta.current = e.clientX - dragStartX.current;
//     const currentOffset = -active * (getSettings().slideW + getSettings().gap);
//     ulRef.current.style.transform = `translateX(${
//       currentOffset + dragDelta.current
//     }px)`;
//   };

//   const handleMouseUp = () => {
//     if (!isDragging.current) return;
//     isDragging.current = false;
//     const { slideW } = getSettings();
//     if (Math.abs(dragDelta.current) > slideW / 3) {
//       if (dragDelta.current < 0) goNext();
//       else if (dragDelta.current > 0) goPrev();
//       else updatePosition();
//     } else updatePosition();
//     dragDelta.current = 0;
//   };

//   const handleMouseLeave = () => {
//     if (isDragging.current) {
//       isDragging.current = false;
//       updatePosition();
//     }
//   };

//   return (
//     <section
//       className="relative pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70 overflow-hidden"
//       role="region"
//       aria-roledescription="carousel"
//       aria-label="Галерея наших HUBів"
//       tabIndex={0}
//       onKeyDown={handleKeyDown}
//       aria-labelledby="gallery-title"
//     >
//       <div className="section overflow-hidden px-0">
//         <h2 className="sr-only">Наші HUBи</h2>

//         <div className="pt-43 pb-16.5 1xl:pt-10 1xl:pb-6 3xl:pt-[116px] 3xl:pb-0">
//           <div className="relative mx-auto">
//             {/* Top ellipses + title */}
//             <div className="absolute inset-x-0 z-10 -top-25 1xl:-top-20 3xl:-top-20 4xl:-top-20 h-[200px] pointer-events-none">
//               <svg
//                 className="w-full h-full max-w-[568px] 1xl:max-w-[1440px] 3xl:max-w-[1920px] 4xl:max-w-[2560px] fill-cod-black"
//                 aria-hidden="true"
//               >
//                 <use href="/images/svg/icons.svg#icon-Ellipse-top" />
//               </svg>

//               <h2
//                 className="absolute inset-0 z-20 flex
//                items-center justify-center -top-25 1xl:-top-20 3xl:-top-28 4xl:-top-18 text-dust-white text-[32px]/[110%] 1xl:text-[42px]/[110%] 3xl:text-[54px]/[110%] 4xl:text-[62px]/[110%] tracking-[-0.02em] font-second 4xl:font-medium"
//               >
//                 Наші HUBи
//               </h2>
//             </div>

//             {/* Slider container */}
//             <div
//               ref={containerRef}
//               className="relative overflow-hidden"
//               style={{ paddingLeft: peek, paddingRight: peek }}
//             >
//               <div
//                 className="hidden 3xl:block pointer-events-none absolute inset-0 z-20"
//                 style={{
//                   background: `
//       linear-gradient(
//         to right,
//         rgba(8, 8, 8, 0.8) 0%,
//         rgba(8, 8, 8, 0.4) 10%,
//         rgba(8, 8, 8, 0) 25%,
//         rgba(8, 8, 8, 0) 75%,
//         rgba(8, 8, 8, 0.4) 90%,
//         rgba(8, 8, 8, 0.8) 100%
//       ),

//       linear-gradient(
//         to left,
//         rgba(8, 8, 8, 0.8) 0%,
//         rgba(8, 8, 8, 0.4) 10%,
//         rgba(8, 8, 8, 0) 25%,
//         rgba(8, 8, 8, 0) 75%,
//         rgba(8, 8, 8, 0.4) 90%,
//         rgba(8, 8, 8, 0.8) 100%
//       )
//     `,
//                   backgroundBlendMode: 'multiply',
//                 }}
//               />

//               <ul
//                 ref={ulRef}
//                 role="listbox"
//                 aria-labelledby="gallery-title"
//                 className="flex gap-x-4 1xl:gap-x-28 3xl:gap-x-30 transition-transform duration-500 ease-in-out"
//                 onMouseDown={handleMouseDown}
//                 onMouseMove={handleMouseMove}
//                 onMouseUp={handleMouseUp}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 {extendedImages.map((fileName, idx) => (
//                   <li
//                     key={idx}
//                     role="option"
//                     aria-selected={active === idx}
//                     className="flex-shrink-0 w-[568px] 1xl:w-[1082px] 3xl:w-[1156px]"
//                   >
//                     <img
//                       src={`/images/webp/hub-gallery/${fileName}`}
//                       alt={`HUB ${idx + 1}`}
//                       loading="lazy"
//                       className="w-full  object-cover"
//                     />
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Bottom ellipses */}
//             <div className="absolute h-[200px] -bottom-20 1xl:-bottom-20 3xl:-bottom-2 4xl:-bottom-20 z-10 inset-x-0 pointer-events-none">
//               <svg className="w-full h-full max-w-[568px] 1xl:max-w-[1440px] 3xl:max-w-[1920px] 4xl:max-w-[2560px] fill-cod-black">
//                 <use href="/images/svg/icons.svg#icon-Ellipse-45-7" />
//               </svg>
//             </div>

//             {/* Indicators */}
//             <ul className="absolute -bottom-3 1xl:-bottom-5 3xl:bottom-2.5 4xl:bottom-1 left-1/2 z-20 transform -translate-x-1/2 flex gap-2.5">
//               {images.map((_, idx) => (
//                 <li key={idx}>
//                   <button
//                     type="button"
//                     onClick={() => setActive(idx + 1)}
//                     aria-label={`Перейти до слайду ${idx + 1}`}
//                     aria-current={active === idx + 1 ? 'true' : undefined}
//                     className={`h-2 rounded-[32px] transition-all ${
//                       active === idx + 1
//                         ? 'w-17 bg-masala-light'
//                         : 'w-7.5 bg-woodsmoke-dust'
//                     }`}
//                   />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurHubsGallery;

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
