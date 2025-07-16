import { useState } from 'react';
import { modules } from '../../data/hub-modules';

const Modules = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {
    title,
    description,
    size,
    voltage,
    characteristic,
    weight,
    pictureShort,
  } = modules[activeIndex];

  const getButtonWidth = (index: number, activeIndex: number): string => {
    const isActive = index === activeIndex;
    const activeRow = Math.floor(activeIndex / 4);
    const currentRow = Math.floor(index / 4);

    if (isActive) return 'w-[310px] 1xl:w-[326.5px]';
    if (activeRow === currentRow) return 'w-[64px] 1xl:w-[326.5px]';
    return 'w-[125.5px] 1xl:w-[326.5px]';
  };

  return (
    <section className="section mb-[214px] 1xl:mb-[350px]">
      <div className="1xl:pt-14.5 1xl:pb-4.5 1xl:px-4.5 1xl:bg-cod-dark">
        <div className="mb-5.5 1xl:mb-4 flex flex-col 1xl:flex-row-reverse items-center gap-9.5 1xl:gap-15.5 1xl:justify-center">
          <div className="flex flex-col 1xl:w-[606px]">
            <div className="mb-13.5 pt-3 1xl:pt-0">
              <h2 className="font-second capitalize text-[28px] 1xl:text-[40px] leading-[110%] tracking-[-0.02em] mb-3 1xl:mb-4.5">
                {title}
              </h2>
              <p className="font-medium text-boulder-dark leading-[125%]">
                {description}
              </p>
            </div>
            <div className="flex gap-3 mb-8">
              <div className="flex flex-col gap-1.5 w-[230px]">
                <p className="text-lg font-medium text-chicago-gray leading-[122%]">
                  Розмір:
                </p>
                <p className="text-[22px] leading-[127%]">{size}</p>
              </div>
              <div className="flex flex-col gap-1.5 w-[230px]">
                <p className="text-lg font-medium text-chicago-gray leading-[122%]">
                  Напруга живлення:
                </p>
                <p className="text-[22px] leading-[127%]">{voltage}</p>
              </div>
            </div>
            <div className="flex gap-3 mb-9.5 1xl:mb-[71px]">
              <div className="flex flex-col gap-1.5 w-[230px]">
                <p className="text-lg font-medium text-chicago-gray leading-[122%]">
                  Характеристика:
                </p>
                <p className="text-[22px] leading-[127%]">{characteristic}</p>
              </div>
              <div className="flex flex-col gap-1.5 w-[230px]">
                <p className="text-lg font-medium text-chicago-gray leading-[122%]">
                  Вага:
                </p>
                <p className="text-[22px] leading-[127%]">{weight}</p>
              </div>
            </div>
            <button
              type="button"
              className="ml-auto w-[280px] font-extrabold bg-tangerine text-cod-gray leading-none tracking-[-0.02em] py-[17px] px-6 rounded-[45px]"
            >
              Хочу замовити!
            </button>
          </div>

          <div>
            <picture>
              <source
                srcSet={`
                /images/webp/hub-modules/desktop/${pictureShort}-1x.webp 1x,
                /images/webp/hub-modules/desktop/${pictureShort}-2x.webp 2x,
                /images/webp/hub-modules/desktop/${pictureShort}-4x.webp 4x
              `}
                media="(min-width: 1440px)"
                type="image/webp"
              />
              <source
                srcSet={`
            /images/webp/hub-modules/mob/${pictureShort}-1x.webp 1x,
            /images/webp/hub-modules/mob/${pictureShort}-2x.webp 2x,
            /images/webp/hub-modules/mob/${pictureShort}-4x.webp 4x
          `}
                media="(min-width: 375px)"
                type="image/webp"
              />
              <img
                src={`/images/webp/hub-modules/mob/${pictureShort}-1x.webp`}
                srcSet={`/images/webp/hub-modules/mob/${pictureShort}-2x.webp 2x, /images/webp/hub-modules/mob/${pictureShort}-4x.webp 4x`}
                alt={title}
                className="w-[520px] 1xl:w-[656px] h-[362px] 1xl:h-[452px]"
              />
            </picture>
          </div>
        </div>

        <ul className="flex flex-wrap gap-y-[6px] gap-x-[6px] 1xl:justify-center">
          {modules.map((module, index) => {
            const isActive = index === activeIndex;

            return (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center justify-center 1xl:justify-normal gap-4 py-[15px] 1xl:py-7 px-[15px] 1xl:px-8 rounded-lg transition-colors duration-300 
                  ${getButtonWidth(index, activeIndex)} 
                  ${isActive ? 'bg-woodsmoke-black' : 'bg-cod-dark'}`}
                >
                  <svg
                    className={`w-8.5 h-8.5  ${
                      isActive ? 'fill-tangerine' : 'fill-boulder-gray'
                    }`}
                  >
                    <use
                      href={`/images/svg/icons.svg#icon-${module.iconNumber}`}
                    ></use>
                  </svg>
                  <p
                    className={`uppercase leading-[200%] font-semibold ${
                      isActive
                        ? 'text-tangerine'
                        : 'hidden 1xl:block text-boulder-gray'
                    }`}
                  >
                    {module.title}
                  </p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Modules;
