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

    if (isActive)
      return 'w-[310px] 1xl:w-[326.5px] 3xl:w-[420.5px] 4xl:w-[538px]';
    if (activeRow === currentRow)
      return 'w-[64px] 1xl:w-[326.5px] 3xl:w-[420.5px] 4xl:w-[538px]';
    return 'w-[125.5px] 1xl:w-[326.5px] 3xl:w-[420.5px] 4xl:w-[538px]';
  };

  return (
    <section className="section mb-[214px] 1xl:mb-[350px] 4xl:mb-[380px] 3xl:mb-[420px] 3xl:px-23 4xl:px-40">
      <div className="1xl:pt-14.5 4xl:pt-6.5 1xl:pb-4.5 3xl:p-4.5 4xl:pb-4.5 1xl:px-4.5 4xl:px-6.5 1xl:bg-cod-dark">
        <h2 className="hidden">
          Модульні шафи самообслуговування для магазинів, аеропортів, тощо
        </h2>
        <div className="mb-5.5 1xl:mb-4 3xl:mb-1.5 flex flex-col 1xl:flex-row-reverse items-center 3xl:items-start gap-9.5 1xl:gap-15.5 4xl:gap-[158px] 1xl:justify-center 3xl:pr-[272px] 4xl:pr-[350px] 3xl:justify-start">
          <div className="flex flex-col 1xl:w-[606px] pt-3 1xl:pt-0 3xl:pt-15.5 4xl:pt-13.5 3xl:w-[522px] 4xl:w-[735px]">
            <div className="4xl:pr-[213px] mb-9.5 1xl:mb-[71px] 3xl:mb-[92px] 4xl:mb-[58px]">
              <div className="mb-13.5 4xl:mb-14">
                <h3 className="font-second capitalize text-[28px] 1xl:text-[40px]/[110%] 3xl:leading-[75%] tracking-[-0.02em] mb-3 1xl:mb-4.5">
                  {title}
                </h3>
                <p className="font-medium text-boulder-dark leading-[125%] 4xl:text-lg/[111%]">
                  {description}
                </p>
              </div>

              <ul className="flex flex-wrap gap-x-3 gap-y-8">
                <li className="flex flex-col gap-1.5 w-[230px]">
                  <p className="text-lg/[122%] font-medium text-chicago-gray">
                    Розмір:
                  </p>
                  <p className="text-[22px]/[127%]">{size}</p>
                </li>
                <li className="flex flex-col gap-1.5 w-[230px]">
                  <p className="text-lg/[122%] font-medium text-chicago-gray">
                    Напруга живлення:
                  </p>
                  <p className="text-[22px]/[127%]">{voltage}</p>
                </li>
                <li className="flex flex-col gap-1.5 w-[230px]">
                  <p className="text-lg/[122%] font-medium text-chicago-gray">
                    Характеристика:
                  </p>
                  <p className="text-[22px]/[127%]">{characteristic}</p>
                </li>
                <li className="flex flex-col gap-1.5 w-[230px]">
                  <p className="text-lg/[122%] font-medium text-chicago-gray">
                    Вага:
                  </p>
                  <p className="text-[22px]/[127%]">{weight}</p>
                </li>
              </ul>
            </div>
            <button
              type="button"
              className="flex items-center justify-between ml-auto w-[280px] 4xl:w-[358px] 4xl:text-xl font-extrabold bg-tangerine text-cod-gray leading-none tracking-[-0.02em] py-4 4xl:py-[21px] px-6 4xl:px-6 rounded-[45px] hover:bg-chilean-fire focus:bg-chilean-fire transition-colors duration-300"
            >
              <p>Хочу замовити!</p>
              <svg className="w-4.5 h-4.5 stroke-cod-gray">
                <use href={`/images/svg/icons.svg#icon-arrow-up-right`}></use>
              </svg>
            </button>
          </div>

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
              className="w-[520px] 1xl:w-[656px] 3xl:w-[844px] 4xl:w-[945px] h-[362px] 1xl:h-[452px] 3xl:h-[582px] 4xl:h-[558px]"
            />
          </picture>
        </div>

        <ul className="flex flex-wrap gap-y-[6px] gap-x-[6px] 4xl:gap-x-3 1xl:justify-center">
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
                  <h4
                    className={`uppercase font-semibold text-base/[200%] 1xl:text-lg/[178%] 4xl:text-[22px]/[145%] ${
                      isActive
                        ? 'text-tangerine'
                        : 'hidden 1xl:block text-boulder-gray'
                    }`}
                  >
                    {module.title}
                  </h4>
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
