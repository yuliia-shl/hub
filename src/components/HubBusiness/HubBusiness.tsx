import { useState } from 'react';
import { business } from '../../data/hub-business';
import SmartButton from '../ui/Button/SmartButton';

const HubBusiness = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { advantages } = business[activeIndex];

  const getButtonWidth = (index: number, activeIndex: number): string => {
    const isActive = index === activeIndex;
    if (isActive) return 'xs:w-[372px]';
    return 'w-full xs:w-[68px]';
  };

  return (
    <section id="business" className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section">
        <h2 className="text-[34px]/[110%] tracking-[-0.02em] font-second text-center text-mercury-white mb-8 1xl:text-[42px] 1xl:text-left 1xl:mb-20 3xl:text-[54px] 3xl:mb-22 4xl:text-[62px] 4xl:font-medium 4xl:mb-15">
          Ваш бізнес з HUB
        </h2>

        <div className="flex flex-col gap-1 1xl:gap-2.5 3xl:gap-3 4xl:gap-4">
          <ul className="flex gap-1.5 1xl:gap-2.5 3xl:gap-3 4xl:gap-4">
            {business.map((business, index) => {
              const isActive = index === activeIndex;

              return (
                <li key={index} className="w-full">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`flex items-center rounded-lg justify-center px-4 min-h-16 transition-colors duration-300
                      ${getButtonWidth(
                        index,
                        activeIndex
                      )} 1xl:w-full 1xl:min-h-32 4xl:min-h-41
                     ${
                       isActive
                         ? 'bg-woodsmoke-black text-tangerine'
                         : 'bg-cod-dark text-boulder-gray'
                     }`}
                  >
                    <span
                      className={`font-second tracking-[-0.02em] text-[26px]/[110%] capitalize 4xl:text-4xl
                      ${!isActive ? 'hidden 1xl:block' : ''}`}
                    >
                      {business.role}
                    </span>
                    <svg
                      className={`w-8.5 h-8.5 fill-boulder-gray 1xl:hidden 
                      ${isActive ? 'hidden' : ''}`}
                    >
                      <use
                        href={`/images/svg/icons.svg#icon-${business.icon}`}
                      />
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col gap-14 p-7 pt-3 bg-cod-dark rounded-lg 1xl:flex-row 1xl:gap-24 1xl:px-11 1xl:py-10 1xl:justify-between 1xl:min-h-[542px] 3xl:gap-49 3xl:justify-start 4xl:gap-116 4xl:min-h-[686px] 3xl:px-18 4xl:py-22">
            <ul className="flex flex-col gap-7 1xl:gap-10 1xl:justify-around">
              {advantages.map((advantage, index) => {
                return (
                  <li
                    key={index}
                    className="grid grid-rows-2 gap-x-2 grid-cols-16 items-center 1xl:gap-y-1"
                  >
                    <span className="col-span-1 text-4xl/[183%] font-extralight text-masala-gray 1xl:text-[64px]/[103%] 1xl:col-span-1 1xl:row-span-2 4xl:text-[86px]/[77%]">
                      {index + 1}
                    </span>
                    <span className="col-span-15 text-2xl/[117%] font-semibold tracking-[-0.02em] 3xl:tracking-normal 1xl:text-[32px]/[87%] 1xl:col-span-15 1xl:min-w-[824px] 3xl:min-w-[854px] 4xl:text-[34px]/[82%] 4xl:min-w-[910px]">
                      {advantage.title}
                    </span>
                    <span className="text-base/[137%] text-boulder-dust col-span-16 1xl:col-span-15 1xl:text-lg/[122%] 1xl:max-w-[670px] 4xl:text-xl/[110%] 4xl:max-w-[890px]">
                      {advantage.description}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-col 1xl:justify-around 1xl:max-w-[280px] 4xl:max-w-[364px]">
              <div className="text-base/[137%] font-medium text-silver mb-21 1xl:mb-0 1xl:text-lg/[122%] 4xl:text-[22px]/[100%]">
                <p className="mb-5">
                  Ми завжди раді надати консультацію нашим майбутнім інвесторам
                  і відповісти на всі Ваші питання!
                </p>
                <p className="">
                  Також ви можете ознайомитись з нашими пропозиціями в
                  презентації.
                </p>
              </div>

              <div className="flex gap-3 1xl:flex-col 1xl:gap-4 4xl:gap-5">
                <a
                  href="#"
                  download="Презентація інвесторам.pdf"
                  className="group flex p-4 border-1 rounded-full border-tangerine 1xl:py-4.5 1xl:px-6 1xl:justify-between hover:border-chilean-fire focus:outline-chilean-fire focus:outline-2 transition-colors duration-300 4xl:py-5.5"
                >
                  <span className="hidden 1xl:block text-tangerine group-hover:text-chilean-fire group-focus:text-chilean-fire transition-colors duration-300 text-base/[100%] 4xl:text-[20px]">
                    Презентація інвесторам
                  </span>
                  <svg className="w-5 h-5 fill-tangerine group-hover:fill-chilean-fire transition-colors duration-300">
                    <use href="/images/svg/icons.svg#icon-pdf" />
                  </svg>
                </a>
                <SmartButton
                  label="Інвестувати"
                  variant="secondary"
                  icon="/images/svg/icons.svg#icon-arrow-up-right"
                  iconClassName="w-4.5 h-4.5 stroke-cod-gray"
                  iconPosition="right"
                  className="flex justify-between w-full font-bold py-4.5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubBusiness;
