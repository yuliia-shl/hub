import { useState, type KeyboardEvent } from 'react';
import { galleryImages as images } from '../../data/gallery-image';

const OurHubsGallery = () => {
  const [active, setActive] = useState(0);

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
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
        <div className="pt-43 pb-15 3xl:pt-[116px] 3xl:pb-0">
          {/* 1) Container */}
          <div className="relative mx-auto">
            {/* 2) Top ellipses + title */}
            <div className="absolute z-10 top-[-172px] 1xl:top-[-83px] 3xl:top-[-83px] left-1/2 transform -translate-x-1/2 pointer-events-none">
              <div className="w-[568px] h-[200px] 1xl:w-[1825px] 3xl:w-[2141px] 4xl:w-[2300px]">
                {/* mobile-top */}
                <svg className="block w-full h-full 1xl:hidden  fill-cod-black">
                  <use href="/images/svg/icons.svg#icon-Ellipse-47-mobile-top" />
                </svg>

                {/* 1440px+ top */}
                <svg className="hidden w-full h-full 1xl:block 3xl:hidden  fill-cod-black">
                  <use href="/images/svg/icons.svg#icon-Ellipse-1440-top" />
                </svg>

                {/* 1920px+ top */}
                <svg className="hidden 3xl:block 4xl:hidden w-[2141px] h-[32px] fill-cod-black">
                  <use href="/images/svg/icons.svg#icon-Ellipse-45-1920-top" />
                </svg>

                {/* 2560px+ top */}
                <svg className="hidden 4xl:block w-[2300px] fill-cod-black">
                  <use href="/images/svg/icons.svg#icon-Ellipse-46-2560-top" />
                </svg>
              </div>

              <h2
                id="gallery-title"
                className="absolute inset-0 z-20 flex items-center justify-center text-dust-white text-[32px]/[110%] 1xl:text-[42px]/[110%] 3xl:text-[54px]/[110%] 4xl:text-[62px]/[110%] tracking-[-0.02em] font-second 4xl:font-medium"
              >
                Наші HUBи
              </h2>
            </div>

            {/* 3) Slider */}
            <div className="overflow-x-auto snap-x snap-mandatory">
              <ul
                role="listbox"
                aria-labelledby="gallery-title"
                className="flex 1xl:py-6 transition-transform duration-300 px-2 1xl:px-[calc((100vw-1082px)/2)] 3xl:px-[calc((100vw-1156px)/2)] 4xl:px-[calc((100vw-1156px)/2)]"
                style={{
                  transform: `translateX(calc(-${active * 100}% + 90vw - 50%))`,
                }}
              >
                {images.map((src, idx) => (
                  <li
                    key={idx}
                    role="option"
                    aria-selected={active === idx}
                    className={`flex-shrink-0 w-[568px] 1xl:w-[1082px] 3xl:w-[1156px] 4xl:w-[1156px] mr-4 1xl:mr-[139px] 3xl:mr-[120px] 4xl:mr-[120px] last:mr-0 snap-start snap-always not-[]:transition-opacity duration-300 ${
                      active === idx ? 'opacity-100' : 'opacity-50'
                    }`}
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

            {/* 4) Bottom ellipses */}
            <div className="absolute bottom-[-109px] 1xl:bottom-[-58px] z-10 left-1/2 transform -translate-x-1/2 pointer-events-none">
              <div className="w-[568px] h-[200px] 1xl:w-[1825px] 3xl:w-[2141px] 4xl:w-[2300px]"></div>
              {/* mobile-bottom */}
              <svg className="block 1xl:hidden w-[568px]  fill-cod-black">
                <use href="/images/svg/icons.svg#icon-Ellipse-46-mobile-bottom" />
              </svg>

              {/* 1440px+ bottom */}
              <svg className="hidden 1xl:block 3xl:hidden w-[1825px] fill-cod-black">
                <use href="/images/svg/icons.svg#icon-Ellipse-1440-bottom" />
              </svg>

              {/* 1920px+ bottom */}
              <svg
                width="309"
                height="32"
                viewBox="0 0 309 32"
                className="hidden 3xl:block 4xl:hidden  fill-cod-black"
              >
                <use href="/images/svg/icons.svg#icon-Ellipse-46-1920-bottom" />
              </svg>

              {/* 2560px+ bottom */}
              <svg
                width="863"
                height="32"
                viewBox="0 0 863 32"
                className="hidden 4xl:block fill-cod-black"
              >
                <use href="/images/svg/icons.svg#icon-Ellipse-45-2560-bottom" />
              </svg>
            </div>

            {/* 5) Indicators */}
            <ul className="absolute bottom-[-17px] 1xl:bottom-[px] left-1/2 z-20 transform -translate-x-1/2 flex gap-2.5">
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
