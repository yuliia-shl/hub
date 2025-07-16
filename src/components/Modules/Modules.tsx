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

    if (isActive) return 'w-[310px]';
    if (activeRow === currentRow) return 'w-[64px]';
    return 'w-[125.5px]';
  };

  return (
    <section className="section mb-[214px]">
      <div className="mb-5.5">
        <div className="flex flex-col mb-9.5">
          <div className="mb-13.5 pt-3">
            <h2 className="font-second capitalize text-[28px] leading-[110%] tracking-[-0.02em] mb-3">
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
          <div className="flex gap-3 mb-9.5">
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
              alt="Модуль управління"
              className="w-[520px] h-[362px]"
            />
          </picture>
        </div>
      </div>

      <ul className="flex flex-wrap gap-y-[6px] gap-x-[6px]">
        {modules.map((module, index) => {
          const isActive = index === activeIndex;

          return (
            <li key={index}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex items-center justify-center py-[15px] bg-woodsmoke-black rounded-lg transition-colors duration-300 
                  ${getButtonWidth(index, activeIndex)} 
                  ${isActive ? 'text-tangerine gap-4 px-10' : 'px-[15px]'}`}
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
                    isActive ? 'text-tangerine' : 'hidden'
                  }`}
                >
                  {module.title}
                </p>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Modules;
