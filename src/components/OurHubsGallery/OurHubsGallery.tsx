import { useState, type KeyboardEvent } from 'react';
import { galleryImages as images } from '../../data/gallery-image';
const OurHubsGallery = () => {
  const [active, setActive] = useState(0);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      setActive(prev => (prev + 1) % images.length);
    }
    if (e.key === 'ArrowLeft') {
      setActive(prev => (prev - 1 + images.length) % images.length);
    }
  };

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
        <div className="pt-43 pb-15">
          {/* 1) Загальний relative контейнер */}
          <div className="relative mx-auto">
            {/* 2) Верхній еліпс + заголовок */}
            <div className="absolute z-10 top-[-172px] 1xl:top-[-83px] left-1/2 transform -translate-x-1/2 pointer-events-none">
              <div className="w-[568px] h-[200px] 1xl:w-[1825px] 1xl:h-[141px] 3xl:w-[1920px] 4xl:w-[2239px]">
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  className="w-full h-full fill-cod-black"
                >
                  <use xlinkHref="/images/svg/icons.svg#icon-Ellipse-46" />
                </svg>
                <h2
                  id="gallery-title"
                  className="absolute z-20 inset-0  flex items-center justify-center text-dust-white text-[32px]/[110%] 1xl:text-[42px]/[110%] 3xl:text-[54px]/[110%] 4xl:text-[62px]/[110%] tracking-[-0.02em] font-second 4xl:font-medium"
                >
                  Наші HUBи
                </h2>
              </div>
            </div>

            <div className="relative overflow-hidden w-full">
              <ul
                role="listbox"
                aria-labelledby="gallery-title"
                className="
      flex transition-transform duration-300
      px-2
      1xl:px-[calc((100vw-1082px)/2)]
      3xl:px-[calc((100vw-1156px)/2)]
      4xl:px-[calc((100vw-1156px)/2)]
    "
                style={{
                  transform: `translateX(-${active * 100}%)`,
                }}
              >
                {images.map((src, idx) => (
                  <li
                    key={idx}
                    role="option"
                    aria-selected={active === idx}
                    className={`
          flex-shrink-0
          w-[568px] 1xl:w-[1082px] 3xl:w-[1156px] 4xl:w-[1156px]
          mr-4 1xl:mr-[139px] 3xl:mr-[120px] 4xl:mr-[120px]
          last:mr-0
          transition-opacity duration-300
          ${active === idx ? 'opacity-100' : 'opacity-50'}
        `}
                  >
                    <img
                      src={src}
                      alt={`HUB ${idx + 1}`}
                      loading="lazy"
                      className="w-full h-[360px] 1xl:h-[720px] 3xl:h-[769px] 4xl:h-[769px] object-cover"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* 4) Нижній еліпс */}
            <div className="absolute inset-x-0 bottom-[-114px] z-10 flex justify-center pointer-events-none">
              <svg
                viewBox="0 0 568 200"
                preserveAspectRatio="xMidYMid meet"
                className="w-[568px] h-[200px] 1xl:w-[1825px]  fill-cod-black"
              >
                <use xlinkHref="/images/svg/icons.svg#icon-Ellipse-47" />
              </svg>
            </div>

            {/* 5) Індикатори */}
            <ul className="absolute bottom-[-px] left-1/2 z-20 transform -translate-x-1/2 flex gap-2.5">
              {images.map((_, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => setActive(idx)}
                    aria-label={`Перейти до слайду ${idx + 1}`}
                    aria-current={active === idx ? 'true' : undefined}
                    className={`h-2 rounded-[32px] transition-all
                    ${
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

// import { useState, type KeyboardEvent } from 'react';
// import { galleryImages as images } from '../../data/gallery-image';

// const OurHubsGallery = () => {
//   const [active, setActive] = useState(0);

//   const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
//     if (e.key === 'ArrowRight') {
//       setActive(prev => (prev + 1) % images.length);
//     }
//     if (e.key === 'ArrowLeft') {
//       setActive(prev => (prev - 1 + images.length) % images.length);
//     }
//   };

//   return (
//     <section
//       className="relative pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70"
//       role="region"
//       aria-roledescription="carousel"
//       aria-label="Галерея наших HUBів"
//       tabIndex={0}
//       onKeyDown={handleKeyDown}
//       aria-labelledby="gallery-title"
//     >
//       <div className="section px-0">
//         <div className="pt-43 pb-15">
//           {/* 1) Top ellipse + title overlay */}
//           <div className="absolute z-10 top-[-172px] 1xl:top-[-83px] left-1/2 transform -translate-x-1/2 pointer-events-none">
//             <div className="relative w-[568px] h-[200px] 1xl:w-[1825px] 3xl:w-[1920px] 4xl:w-[2239px]">
//               <svg
//                 preserveAspectRatio="xMidYMid meet"
//                 className="w-full h-full fill-cod-black"
//               >
//                 <use xlinkHref="/images/svg/icons.svg#icon-Ellipse-46" />
//               </svg>
//               <h2
//                 id="gallery-title"
//                 className="absolute z-20 inset-0 flex items-center justify-center text-dust-white text-[32px]/[110%] 1xl:text-[42px]/[110%] 3xl:text-[54px]/[110%] 4xl:text-[62px]/[110%] tracking-[-0.02em] font-second 4xl:font-medium"
//               >
//                 Наші HUBи
//               </h2>
//             </div>
//           </div>

//           {/* 2) Slider container */}
//           <div className="relative max-w-[568px] 1xl:w-[1082px] 3xl:w-[1156px] mx-auto overflow-hidden 1xl:overflow-visible">
//             {/* Slides */}
//             <ul
//               className="flex 1xl:gap-28 4xl:gap-30 transition-transform duration-300"
//               style={{ transform: `translateX(-${active * 100}%)` }}
//             >
//               {images.map((src, idx) => (
//                 <li key={idx} className="w-full flex-shrink-0">
//                   <img
//                     src={src}
//                     loading="lazy"
//                     alt={`HUB ${idx + 1}`}
//                     className="w-full h-auto object-cover"
//                   />
//                 </li>
//               ))}
//             </ul>

//             {/* 3) Bottom ellipse (optional) */}
//             <div className="absolute inset-x-0 bottom-[-114px] z-10 flex justify-center pointer-events-none">
//               <svg
//                 preserveAspectRatio="xMidYMid meet"
//                 className="w-[568px] h-[200px] 1xl:w-[1825px] 3xl:w-[1920px] 4xl:w-[2239px] fill-cod-black"
//               >
//                 <use xlinkHref="/images/svg/icons.svg#icon-Ellipse-47" />
//               </svg>
//             </div>

//             {/* 4) Indicators */}
//             <ul className="absolute z-20 bottom-[104px] left-1/2 transform -translate-x-1/2 flex gap-2.5">
//               {images.map((_, idx) => (
//                 <li key={idx}>
//                   <button
//                     type="button"
//                     onClick={() => setActive(idx)}
//                     aria-label={`Перейти до слайду ${idx + 1}`}
//                     aria-current={active === idx ? 'true' : undefined}
//                     className={`h-2 rounded-[32px] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-masala-light ${
//                       active === idx
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
